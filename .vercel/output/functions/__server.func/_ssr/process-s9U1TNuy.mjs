import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as SiteShell } from "./router-CJFeaCtA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-s9U1TNuy.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		t: "Brief",
		d: "A business name, market, and what the site must do. We do not start with a mood board. We start with the job the site has to perform in that market."
	},
	{
		t: "Search",
		d: "Low-latency agents collect competitor IA, language norms, payment and trust patterns, and regulatory copy that must exist (privacy, VAT, healthcare disclaimers)."
	},
	{
		t: "Sort",
		d: "A structuring agent produces the information architecture, content model, and a constraint set from Pentagon Cyber: CSP posture, form hygiene, no stray debug routes."
	},
	{
		t: "Print",
		d: "A generator emits a production codebase and draft copy. This is not a theme. It is a site with routes, metadata, and a stack chosen for the brief."
	},
	{
		t: "Human checkpoints",
		d: "Brand, photography, legal, and medical or financial claims. Agents do not get the last word on those. Latency stays low because the rest of the work is already done."
	},
	{
		t: "Voice",
		d: "Outreach and qualification via voice agents — xAI where it is the strongest instrument, a custom layer where the market needs it. Disclosure, opt-out, and a human on the close are non-negotiable."
	}
];
function ProcessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		variant: "polymorph",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-accent",
					children: "Process"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl text-fg sm:text-6xl",
					children: "Search, sort, print. Then a human."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-relaxed text-muted",
					children: "Traditional agencies sell weeks of workshops. Polymorph sells a machine that already did the research, plus the few hours of judgement that still require a person. Latency is the product feature. Quality is the constraint, not the opposite of speed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 space-y-10",
					children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-3 sm:grid-cols-[4rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm text-accent",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-fg",
							children: s.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed text-muted",
							children: s.d
						})] })]
					}, s.t))
				})
			]
		})
	});
}
//#endregion
export { ProcessPage as component };
