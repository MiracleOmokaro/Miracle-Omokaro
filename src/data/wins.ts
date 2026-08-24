import type { Win } from "./types";

export const WINS: Win[] = [
  {
    id: "stored-xss-notes",
    title: "Stored XSS in a notes application (lab)",
    severity: "critical",
    date: "2026-06-18",
    context: "PortSwigger Web Security Academy · authorized lab",
    summary:
      "A notes field stored unsanitized HTML and executed in another user’s session. Write-up names source, sink, and a fix that would survive a real code review.",
    techniques: ["Stored XSS", "Session impact", "Output encoding"],
    writeup: [
      {
        heading: "What I actually found",
        body: "The application reflected a note’s body into a dashboard without context-aware encoding. A payload that closed the existing tag and opened a script ran in the victim’s browser when they opened the shared note. This is a lab, not a production bounty — the value is the method.",
      },
      {
        heading: "Method",
        body: "Map every place user content is stored. For each, identify the sink (innerHTML, href, event handler, template). Test the encoding in that specific context, not a generic “does it strip script tags” check. Escalate only after a reliable execution path exists.",
        bullets: [
          "Source: note body, persisted in the application database",
          "Sink: dashboard renderer inserting HTML",
          "Impact in lab terms: account takeover via session cookie if HttpOnly is absent, or arbitrary actions in the victim origin",
        ],
      },
      {
        heading: "What I would tell a developer",
        body: "Encode on output for the context you are rendering into. Treat Markdown or “rich text” as a parser problem with an allow-list, not a sanitize-later problem. Add a CSP that would have made this payload noisy even if encoding failed.",
      },
    ],
  },
  {
    id: "idor-invoices",
    title: "Horizontal IDOR on invoice objects (lab)",
    severity: "high",
    date: "2026-07-02",
    context: "PortSwigger Web Security Academy · authorized lab",
    summary:
      "Invoice identifiers were sequential and authorization was missing on GET. Another user’s invoice returned in full. The interesting part is how often this pattern survives in SME software.",
    techniques: ["IDOR", "Access control", "Object mapping"],
    writeup: [
      {
        heading: "The bug class",
        body: "The application trusted that anyone who knew (or could guess) an invoice id was allowed to read it. I mapped the object, incremented the id, and received another principal’s record. No fancy payload. This is the class I care about for Polymorph-generated SME apps: authorization on every object, every method.",
      },
      {
        heading: "How upcoming practitioners should hunt it",
        body: "Do not start with scanners. Start with a second account. For every id you see — numeric, UUID, filename — ask: what happens if I swap it? Test GET, POST, PUT, DELETE, and the export/print endpoints people forget.",
      },
      {
        heading: "Fix",
        body: "Authorization check bound to the session’s principal, not the presence of an id. Prefer non-sequential identifiers as defense in depth, never as the only control.",
      },
    ],
  },
  {
    id: "cors-misconfig",
    title: "CORS misconfiguration with credentialed reads (lab)",
    severity: "medium",
    date: "2026-05-22",
    context: "Web Security Academy · authorized lab",
    summary:
      "The API reflected an attacker origin in Access-Control-Allow-Origin and allowed credentials. A simple cross-origin read would have exposed authenticated JSON.",
    techniques: ["CORS", "Trusted origin reflection"],
    writeup: [
      {
        heading: "Why this is not “just CORS”",
        body: "CORS is a browser rule. When a server reflects arbitrary origins and sets credentials true, it has volunteered to be read from an attacker page while the victim is logged in. The lab made that mechanical. Production SME APIs make it common.",
      },
      {
        heading: "Check",
        body: "Send Origin: https://evil.example and read the response headers. If your origin comes back and Allow-Credentials is true, stop and write the report. Do not need a full chain to know the configuration is wrong.",
      },
    ],
  },
  {
    id: "verbose-errors",
    title: "Verbose error leakage on a debug path (lab)",
    severity: "low",
    date: "2026-04-09",
    context: "Self-hosted lab application",
    summary:
      "A leftover debug endpoint returned stack traces and framework versions. Low severity alone; high value as a foothold for everything else.",
    techniques: ["Information disclosure", "Attack surface reduction"],
    writeup: [
      {
        heading: "The lesson I actually wanted",
        body: "Low findings teach hygiene. Stack traces, version banners, and debug routes are how a later high-severity bug becomes easy. Polymorph’s generator now treats debug routes as a ship-blocker, not a later ticket.",
      },
    ],
  },
];

export function winsBySeverity(sev: string | "all") {
  if (sev === "all") return WINS;
  return WINS.filter((w) => w.severity === sev);
}

export function severityCounts() {
  return {
    critical: WINS.filter((w) => w.severity === "critical").length,
    high: WINS.filter((w) => w.severity === "high").length,
    medium: WINS.filter((w) => w.severity === "medium").length,
    low: WINS.filter((w) => w.severity === "low").length,
  };
}
