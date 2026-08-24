import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as projectsSorted, p as SiteShell } from "./router-CJFeaCtA.mjs";
import { t as ProjectCard } from "./project-card-BylXGSxP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-Dg0jA1X1.js
var import_jsx_runtime = require_jsx_runtime();
function PolyWork() {
	const projects = projectsSorted();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		variant: "polymorph",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-accent",
					children: "Work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl text-fg sm:text-6xl",
					children: "Printed for the Gulf."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-muted leading-relaxed",
					children: "Client properties and the internal pipeline that produces them. Filter is chronological by design — the newest work sits with the oldest so the company history is visible."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2",
					children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project: p,
						to: "/polymorph/work/$slug"
					}, p.id))
				})
			]
		})
	});
}
//#endregion
export { PolyWork as component };
