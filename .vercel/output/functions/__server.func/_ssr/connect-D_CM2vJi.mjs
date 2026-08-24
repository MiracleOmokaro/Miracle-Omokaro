import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as PERSON, p as SiteShell } from "./router-CJFeaCtA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/connect-D_CM2vJi.js
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		label: "X",
		href: PERSON.social.x,
		note: "Public notes and path updates"
	},
	{
		label: "GitHub",
		href: PERSON.social.github,
		note: "Repositories for green-status ideas"
	},
	{
		label: "TryHackMe",
		href: PERSON.social.tryhackme,
		note: "Rooms and path progress"
	},
	{
		label: "Discord",
		href: PERSON.social.discord,
		note: "Team hacking and study groups"
	},
	{
		label: "Email",
		href: `mailto:${PERSON.social.email}`,
		note: PERSON.social.email
	}
];
function ConnectPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-accent",
				children: "Connect"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl text-fg sm:text-6xl",
				children: "Team hacking welcome."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg leading-relaxed text-muted",
				children: "I am on X, Discord, TryHackMe, and GitHub. If you are learning the same path, hunting with permission, or building for SMEs in the Gulf, write."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 divide-y divide-border border-y border-border",
				children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: l.href,
					target: l.href.startsWith("http") ? "_blank" : void 0,
					rel: "noreferrer",
					className: "flex min-h-16 items-center justify-between gap-4 py-4 hover:text-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: l.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: l.note
					})]
				}) }, l.label))
			})
		]
	}) });
}
//#endregion
export { ConnectPage as component };
