import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as cn } from "./router-CJFeaCtA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/project-card-BylXGSxP.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectCard({ project, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		params: { slug: project.id },
		className: "group flex flex-col rounded-lg border border-border bg-surface p-5 transition-colors duration-150 hover:border-fg/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 text-xs uppercase tracking-wide text-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.market }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn(project.status === "live" && "text-accent", project.status === "in-development" && "text-blue"),
					children: project.status.replace("-", " ")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-2xl text-fg group-hover:text-accent",
				children: project.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: project.client
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
				children: project.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: project.techStack.slice(0, 4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-border px-2 py-1 text-xs text-subtle",
					children: t
				}, t))
			})
		]
	});
}
//#endregion
export { ProjectCard as t };
