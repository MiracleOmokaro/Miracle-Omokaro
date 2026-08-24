import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as STAGE_GROUPS, m as cn, p as SiteShell, s as ROADMAP, u as stagesByGroup } from "./router-CJFeaCtA.mjs";
import { t as StageGlyph } from "./stage-icon-8lx5iwO6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/path-CGcshRZ1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function nodePosition(index, total) {
	const t = total <= 1 ? .5 : index / (total - 1);
	const y = 8 + t * 84;
	return {
		x: 50 + 28 * Math.sin(t * Math.PI * 1.4),
		y,
		t
	};
}
function curvePath() {
	const pts = [];
	for (let i = 0; i <= 48; i++) {
		const t = i / 48;
		const x = 50 + 28 * Math.sin(t * Math.PI * 1.4);
		const y = 8 + t * 84;
		pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
	}
	return pts.join(" ");
}
var STATUS_LABEL = {
	completed: "Completed",
	"in-progress": "In progress",
	upcoming: "Upcoming"
};
function PathOfProgress() {
	const [group, setGroup] = (0, import_react.useState)("All");
	const stages = (0, import_react.useMemo)(() => stagesByGroup(group), [group]);
	const defaultId = stages.find((s) => s.status === "in-progress")?.id ?? stages[0]?.id ?? null;
	const [active, setActive] = (0, import_react.useState)(defaultId);
	const selected = stages.find((s) => s.id === active) ?? stages[0];
	const completed = ROADMAP.filter((s) => s.status === "completed").length;
	const ideasLive = ROADMAP.flatMap((s) => s.ideas).filter((i) => i.status === "green").length;
	const current = ROADMAP.find((s) => s.status === "in-progress");
	const d = (0, import_react.useMemo)(() => curvePath(), []);
	const height = Math.max(stages.length, 3) * 140;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-6 border-b border-border pb-8 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Stages completed",
					value: String(completed)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Current focus",
					value: current?.title ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Ideas in development",
					value: String(ideasLive)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 flex gap-2 overflow-x-auto pb-2",
			children: STAGE_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					setGroup(g);
					const next = stagesByGroup(g);
					setActive(next.find((s) => s.status === "in-progress")?.id ?? next[0]?.id ?? null);
				},
				className: cn("h-11 shrink-0 rounded-full border px-4 text-sm transition-colors duration-150", group === g ? "border-accent/40 bg-elevated text-fg" : "border-border text-muted hover:text-fg"),
				children: g
			}, g))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				style: { height },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "pointer-events-none absolute inset-0 h-full w-full",
					viewBox: "0 0 100 100",
					preserveAspectRatio: "none",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d,
						fill: "none",
						stroke: "color-mix(in oklab, var(--color-fg) 22%, transparent)",
						strokeWidth: "0.4"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "relative h-full",
					children: stages.map((stage, i) => {
						const pos = nodePosition(i, stages.length);
						const isActive = selected?.id === stage.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "absolute",
							style: {
								top: `${pos.y}%`,
								left: `${pos.x}%`,
								transform: "translate(-50%, -50%)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActive(stage.id),
								onMouseEnter: () => setActive(stage.id),
								className: cn("flex size-12 items-center justify-center rounded-full border bg-surface transition-[transform,box-shadow,border-color] duration-200", stage.status === "completed" ? "border-accent/60 text-accent shadow-[0_0_20px_color-mix(in_oklab,var(--color-accent)_30%,transparent)]" : stage.status === "in-progress" ? "border-blue/60 text-blue" : "border-border text-muted", isActive && "scale-110"),
								"aria-pressed": isActive,
								"aria-label": stage.title,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageGlyph, {
									name: stage.icon,
									className: "size-5"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("pointer-events-none mt-2 w-32 text-center text-[11px] leading-tight sm:w-40 sm:text-xs", isActive ? "text-fg" : "text-muted"),
								children: stage.title
							})]
						}, stage.id);
					})
				})]
			}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-xl border border-border bg-surface p-5 lg:sticky lg:top-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wide text-subtle",
						children: selected.platform
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl text-fg",
						children: selected.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: selected.hoverSummary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-subtle",
						children: STATUS_LABEL[selected.status]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/path/$slug",
						params: { slug: selected.id },
						className: "mt-5 inline-flex h-11 items-center text-sm text-accent hover:underline",
						children: "Open the full write-up"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No stages in this group yet."
			})]
		})
	] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs uppercase tracking-wide text-subtle",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-fg",
		children: value
	})] });
}
function PathPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-accent",
				children: "Path of Progress"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl leading-tight text-fg sm:text-6xl",
				children: "A deliberate journey through the best available resources."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted",
				children: "Follow along. This is a proven path for mastering cybersecurity — written in public, with verification links, what I learned, and the projects each stage inspired."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathOfProgress, {})
			})
		]
	}) });
}
//#endregion
export { PathPage as component };
