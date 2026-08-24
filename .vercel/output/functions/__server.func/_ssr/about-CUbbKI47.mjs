import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as PERSON, p as SiteShell } from "./router-CJFeaCtA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CUbbKI47.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.2em] text-accent",
				children: "About"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl text-fg sm:text-6xl",
				children: PERSON.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg leading-relaxed text-muted",
				children: "I am a sophomore studying cybersecurity. I am not a graduate and I do not pretend to be a principal engineer. I am a practitioner: I take the best public curricula seriously, I write down what they actually taught me, and I ship work under two companies."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-6 text-base leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The Path of Progress on this site is the spine. It is designed so a recruiter can see that I train on Cisco, TryHackMe, PortSwigger, and pwn.college — not a random playlist — and that some of the ideas those courses produced are already in GitHub repositories." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-fg",
						children: "Polymorph Technologies"
					}), " is an agentic software development company. It researches, structures, and generates production websites for businesses, starting with SMEs in Saudi Arabia, Dubai, and the wider Gulf. Voice agents handle outreach. Human review holds brand and legal."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-fg",
						children: "Pentagon Cyber"
					}), " is the sister company: security practice, secure-by-default constraints on what Polymorph ships, and the long path toward authorized research and bug-bounty work. This site iterates on that idea; it does not replace a full Pentagon property."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I write with Feynman-level clarity on purpose. If a sophomore cannot explain a lab without hiding behind a payload, the sophomore does not understand the lab." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-12 text-sm text-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/connect",
						className: "text-accent hover:underline",
						children: "Connect"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/path",
						className: "text-accent hover:underline",
						children: "Path of Progress"
					})
				]
			})
		]
	}) });
}
//#endregion
export { About as component };
