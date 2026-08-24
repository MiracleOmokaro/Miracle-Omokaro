import { b as require_jsx_runtime, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { l as ExternalLink } from "./_libs/lucide-react.mjs";
import { a as PROJECTS, p as SiteShell, r as Route$2 } from "./_ssr/router-CJFeaCtA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DOKK75ES.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectPage() {
	const { project } = Route$2.useLoaderData();
	const related = project.relatedProjects.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work",
						className: "hover:text-fg",
						children: "Work"
					}),
					" / ",
					project.group
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xs uppercase tracking-wide text-accent",
				children: project.market
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl text-fg sm:text-5xl",
				children: project.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: project.client
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg leading-relaxed text-muted",
				children: project.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 leading-relaxed text-muted",
				children: project.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: project.techStack.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-border px-3 py-1 text-xs text-subtle",
					children: t
				}, t))
			}),
			project.clientFeedback ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-10 border-l-2 border-accent/50 pl-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-xl leading-relaxed text-fg",
					children: [
						"“",
						project.clientFeedback.quote,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-3 text-sm text-muted",
					children: project.clientFeedback.author
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-wide text-subtle",
					children: "Agentic notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-muted",
					children: project.agenticNotes
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-4 text-sm",
				children: [project.liveUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.liveUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1 text-accent hover:underline",
					children: ["Live site ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
				}) : null, project.githubUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.githubUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1 text-muted hover:text-fg",
					children: ["Repository ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
				}) : null]
			}),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-wrap gap-2",
				children: related.map((r) => r ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/work/$slug",
					params: { slug: r.id },
					className: "rounded-full border border-border px-3 py-2 text-xs text-muted hover:text-fg",
					children: r.title
				}, r.id) : null)
			}) : null
		]
	}) });
}
//#endregion
export { ProjectPage as component };
