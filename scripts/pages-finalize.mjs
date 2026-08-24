#!/usr/bin/env node
/**
 * Finish a GitHub Pages artifact: SPA 404 fallback, .nojekyll, Grok head tags,
 * and project-site base prefixes for root-absolute OG / PWA URLs.
 */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { injectGrokPwaHead } from "./grok-pwa-shared.mjs";

const ROOT = process.cwd();
const BASE = "/Miracle-Omokaro";
const HOST = "miracleomokaro.github.io";
const OUT_CANDIDATES = [".output/public", "dist", ".vercel/output/static"];

function findOutDir() {
  for (const rel of OUT_CANDIDATES) {
    const abs = join(ROOT, rel);
    if (existsSync(abs) && statSync(abs).isDirectory()) return abs;
  }
  return null;
}

function walkHtml(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const abs = join(dir, name);
    const st = statSync(abs);
    if (st.isDirectory()) walkHtml(abs, acc);
    else if (name.endsWith(".html")) acc.push(abs);
  }
  return acc;
}

function withProjectBase(html) {
  return html
    .replaceAll(`https://${HOST}/og.jpg`, `https://${HOST}${BASE}/og.jpg`)
    .replaceAll(`https://${HOST}/og.png`, `https://${HOST}${BASE}/og.png`)
    .replaceAll(`https://${HOST}/__grok/`, `https://${HOST}${BASE}/__grok/`)
    .replace(
      /(href|src|content)="\/(?!Miracle-Omokaro\/)(og\.jpg|og\.png|favicon\.svg|__grok\/)/g,
      `$1="${BASE}/$2`,
    );
}

function writeManifest(outDir) {
  const dir = join(outDir, "__grok");
  if (!existsSync(dir)) return;
  const body = JSON.stringify(
    {
      name: "Miracle Omokaro",
      short_name: "Omokaro",
      id: `${BASE}/`,
      start_url: `${BASE}/`,
      scope: `${BASE}/`,
      display: "standalone",
      background_color: "#0a0a0b",
      theme_color: "#0a0a0b",
      icons: [
        {
          src: `${BASE}/__grok/icon-180.png`,
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    null,
    2,
  );
  writeFileSync(join(dir, "manifest.webmanifest"), body);
}

const outDir = findOutDir();
if (!outDir) {
  console.error("[pages-finalize] no static output directory found");
  process.exit(1);
}

const indexPath = join(outDir, "index.html");
if (!existsSync(indexPath)) {
  console.error("[pages-finalize] missing index.html in", outDir);
  process.exit(1);
}

for (const file of walkHtml(outDir)) {
  let html = readFileSync(file, "utf8");
  html = injectGrokPwaHead(html, { host: HOST, cwd: ROOT });
  html = withProjectBase(html);
  writeFileSync(file, html);
}

writeFileSync(join(outDir, "404.html"), readFileSync(indexPath));
writeFileSync(join(outDir, ".nojekyll"), "");
writeManifest(outDir);

console.log("[pages-finalize] ready:", outDir);
