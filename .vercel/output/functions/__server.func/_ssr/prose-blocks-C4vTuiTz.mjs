import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prose-blocks-C4vTuiTz.js
var import_jsx_runtime = require_jsx_runtime();
function ProseBlocks({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-8",
		children: blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			block.heading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl text-fg sm:text-2xl",
				children: block.heading
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-prose text-base leading-relaxed text-muted",
				children: block.body
			}),
			block.bullets?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 max-w-prose list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted",
				children: block.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: b }, b))
			}) : null
		] }, block.heading ?? block.body.slice(0, 24)))
	});
}
//#endregion
export { ProseBlocks as t };
