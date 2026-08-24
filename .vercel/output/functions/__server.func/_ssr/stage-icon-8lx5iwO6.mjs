import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ShieldCheck, c as GraduationCap, d as Castle, f as BookOpen, i as Target, r as Terminal, s as Medal, u as CodeXml } from "../_libs/lucide-react.mjs";
import { m as cn } from "./router-CJFeaCtA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stage-icon-8lx5iwO6.js
var import_jsx_runtime = require_jsx_runtime();
var MAP = {
	"shield-check": ShieldCheck,
	terminal: Terminal,
	graduation: GraduationCap,
	badge: Medal,
	code: CodeXml,
	research: BookOpen,
	target: Target,
	fortress: Castle
};
function StageGlyph({ name, className }) {
	const Icon = MAP[name] ?? ShieldCheck;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className: cn("size-4", className),
		strokeWidth: 1.75
	});
}
//#endregion
export { StageGlyph as t };
