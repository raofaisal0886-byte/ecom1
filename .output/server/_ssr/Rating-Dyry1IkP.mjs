import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as Star } from "../_libs/lucide-react.mjs";
import { t as cn } from "./format-DqyaZc8U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Rating-Dyry1IkP.js
var import_jsx_runtime = require_jsx_runtime();
function Rating({ value, count, className, size = "sm" }) {
	const s = size === "md" ? "h-4 w-4" : "h-3.5 w-3.5";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-1.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex",
			"aria-label": `Rated ${value} out of 5`,
			children: [
				1,
				2,
				3,
				4,
				5
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn(s, i <= Math.round(value) ? "fill-gold text-gold" : "fill-transparent text-gold/40") }, i))
		}), count !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs text-muted-foreground",
			children: [
				"(",
				count,
				")"
			]
		})]
	});
}
//#endregion
export { Rating as t };
