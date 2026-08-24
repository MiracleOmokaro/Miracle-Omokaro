import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as ArrowRight } from "../_libs/lucide-react.mjs";
import { f as POLYMORPH, o as projectsSorted, p as SiteShell } from "./router-CJFeaCtA.mjs";
import { t as Button } from "./button-DG2Q7rky.mjs";
import { t as ProjectCard } from "./project-card-BylXGSxP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/polymorph-BJHbqK6C.js
var import_jsx_runtime = require_jsx_runtime();
function PolymorphHome() {
	const featured = projectsSorted().filter((p) => p.group === "Client Work").slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, {
		variant: "polymorph",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-bg pointer-events-none absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.2em] text-accent",
							children: "Polymorph Technologies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-fg sm:text-6xl",
							children: "Agentic software development. Websites researched, structured, and printed at low latency."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
							children: "Among the first agentic development companies in Africa. We start with SMEs across Saudi Arabia, Dubai, and the Gulf: a real site, in market language, with a voice agent that can open the deal."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/polymorph/contact",
									children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/polymorph/process",
									children: "How it works"
								})
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3",
					children: [
						{
							n: "01",
							t: "Search & research",
							d: "Agents gather market, competitor, and language context for the brief — fast enough that discovery is not a six-week workshop."
						},
						{
							n: "02",
							t: "Structure & generate",
							d: "Information architecture, copy, and a production codebase are printed together. Human review locks brand, legal, and photography."
						},
						{
							n: "03",
							t: "Voice outreach",
							d: "Voice agents (xAI where it is the right instrument, custom where it is not) open conversations and qualify SMEs. A human still closes."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-surface p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-accent",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl text-fg",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: s.d
							})
						]
					}, s.n))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-fg",
							children: "Selected work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/polymorph/work",
							className: "text-sm text-accent hover:underline",
							children: "All projects"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
							project: p,
							to: "/polymorph/work/$slug"
						}, p.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-fg",
							children: "Markets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-wrap gap-3",
							children: POLYMORPH.markets.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-border px-4 py-2 text-sm text-muted",
								children: m
							}, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 max-w-2xl text-sm leading-relaxed text-muted",
							children: [
								"Sister company ",
								POLYMORPH.sister,
								" holds the security brief: secure-by-default generation, not a plugin after launch."
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { PolymorphHome as component };
