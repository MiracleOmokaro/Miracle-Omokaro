import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as PERSON, f as POLYMORPH, p as SiteShell } from "./router-CJFeaCtA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BuicYYb_.js
var import_jsx_runtime = require_jsx_runtime();
function PolyAbout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		variant: "polymorph",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-accent",
					children: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl text-fg sm:text-6xl",
					children: POLYMORPH.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg leading-relaxed text-muted",
					children: "Polymorph is an agentic software development company. We believe a first-of-kind claim in Africa is a responsibility, not a slogan: the work has to be real sites, in real markets, with a security posture that does not embarrass the sister company."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-5 leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Operator: ",
							PERSON.name,
							", cybersecurity practitioner. The agents do the volume. The operator sets the constraints and the taste."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [POLYMORPH.sister, " is the security company. It does not get a second full marketing site here — it gets a brief: authorized research, defensive literacy, and the secure-by-default rules the generator must obey."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We use xAI voice agents where they are the strongest available instrument. We will build a custom voice layer for markets and languages where that is not enough. We do not pretend a custom stack already matches that power." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-accent hover:underline",
						children: "Practitioner site"
					})
				})
			]
		})
	});
}
//#endregion
export { PolyAbout as component };
