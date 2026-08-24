import { b as require_jsx_runtime, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { h as ArrowLeft, l as ExternalLink, m as ArrowRight, p as ArrowUpRight } from "./_libs/lucide-react.mjs";
import { i as Route$8, l as getStage, m as cn, p as SiteShell, s as ROADMAP } from "./_ssr/router-CJFeaCtA.mjs";
import { t as ProseBlocks } from "./_ssr/prose-blocks-C4vTuiTz.mjs";
import { t as StageGlyph } from "./_ssr/stage-icon-8lx5iwO6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BOJyf_j8.js
var import_jsx_runtime = require_jsx_runtime();
var LABEL = {
	green: "Begun",
	amber: "Planned",
	gray: "Shelved",
	blue: "Exploring"
};
var DOT = {
	green: "bg-accent",
	amber: "bg-amber",
	gray: "bg-subtle",
	blue: "bg-blue"
};
function StatusPing({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 text-xs font-medium text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("size-2.5 rounded-full", DOT[status]),
			"aria-hidden": true
		}), LABEL[status]]
	});
}
function IdeaCard({ idea }) {
	const live = idea.status === "green" && idea.githubUrl;
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cn("text-base text-fg", live && "underline-offset-4 group-hover:underline"),
				children: idea.title
			}), live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 shrink-0 text-accent" }) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: idea.description
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPing, { status: idea.status })
		})
	] });
	const className = "group block rounded-lg border border-border bg-surface p-5 transition-colors duration-150 hover:border-fg/20";
	if (live && idea.githubUrl) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: idea.githubUrl,
		target: "_blank",
		rel: "noreferrer",
		className,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children: inner
	});
}
function StagePage() {
	const { stage } = Route$8.useLoaderData();
	const related = stage.relatedStages.map((id) => ROADMAP.find((s) => s.id === id)).filter(Boolean);
	const next = stage.nextRecommended ? getStage(stage.nextRecommended) : null;
	const prev = ROADMAP.filter((s) => s.order < stage.order).sort((a, b) => b.order - a.order)[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/path",
						className: "hover:text-fg",
						children: "Path of Progress"
					}),
					" / ",
					stage.group
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center gap-3 text-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageGlyph, {
					name: stage.icon,
					className: "size-6"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-wide",
					children: stage.platform
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl text-fg sm:text-5xl",
				children: stage.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: stage.completedDate ? `Completed ${(/* @__PURE__ */ new Date(stage.completedDate + "T00:00:00")).toLocaleDateString("en-GB", {
					day: "numeric",
					month: "long",
					year: "numeric"
				})}` : stage.status === "in-progress" ? "In progress" : "Upcoming"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-4 text-sm",
				children: [stage.verificationUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: stage.verificationUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1 text-accent hover:underline",
					children: ["Verification ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
				}) : null, stage.officialUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: stage.officialUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1 text-muted hover:text-fg",
					children: ["Official course ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 border-t border-border pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "Course overview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-muted",
					children: stage.courseOverview
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "What I learned"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProseBlocks, { blocks: stage.learned })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-fg",
						children: "Ideas, projects and takeaways"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Green means work has begun — the title is a repository. Amber is planned. Blue is still being researched. Gray is shelved."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4",
						children: stage.ideas.map((idea) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdeaCard, { idea }, idea.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 border-t border-border pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-wide text-subtle",
						children: "Continue the path"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between",
						children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/path/$slug",
							params: { slug: prev.id },
							className: "inline-flex items-center gap-2 text-sm text-muted hover:text-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }),
								" ",
								prev.title
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/path/$slug",
							params: { slug: next.id },
							className: "inline-flex items-center gap-2 text-sm text-accent hover:underline",
							children: [
								next.title,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							]
						}) : null]
					}),
					related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: related.map((r) => r ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/path/$slug",
							params: { slug: r.id },
							className: "rounded-full border border-border px-3 py-2 text-xs text-muted hover:text-fg",
							children: r.title
						}, r.id) : null)
					}) : null
				]
			})
		]
	}) });
}
//#endregion
export { StagePage as component };
