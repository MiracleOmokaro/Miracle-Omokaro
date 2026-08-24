import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as PERSON, p as SiteShell } from "./router-CJFeaCtA.mjs";
import { t as Button } from "./button-DG2Q7rky.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bzh3d7tv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "");
		const email = String(data.get("email") ?? "");
		const body = String(data.get("body") ?? "");
		const subject = encodeURIComponent(`Project brief from ${name}`);
		const mailBody = encodeURIComponent(`${body}\n\n— ${name} <${email}>`);
		window.location.href = `mailto:${PERSON.social.email}?subject=${subject}&body=${mailBody}`;
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, {
		variant: "polymorph",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-accent",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl text-fg sm:text-5xl",
					children: "Start a project."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted leading-relaxed",
					children: "Tell us the business, the market, and what the site must do. A person reads this. A voice-agent discovery call is optional and disclosed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-10 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "name",
								className: "mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-fg outline-none focus:ring-2 focus:ring-accent/50"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								name: "email",
								className: "mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-fg outline-none focus:ring-2 focus:ring-accent/50"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: "Brief"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								name: "body",
								rows: 6,
								className: "mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-fg outline-none focus:ring-2 focus:ring-accent/50"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Send brief"
						}),
						sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Your mail client should open with the brief addressed to us."
						}) : null
					]
				})
			]
		})
	});
}
//#endregion
export { ContactPage as component };
