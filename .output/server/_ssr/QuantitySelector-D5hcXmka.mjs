import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as Minus, p as Plus } from "../_libs/lucide-react.mjs";
import { t as cn } from "./format-DqyaZc8U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/QuantitySelector-D5hcXmka.js
var import_jsx_runtime = require_jsx_runtime();
function QuantitySelector({ value, onChange, max = 99, size = "md", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center rounded-md border border-input bg-card", size === "sm" ? "h-9" : "h-12", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Decrease quantity",
				onClick: () => onChange(Math.max(1, value - 1)),
				disabled: value <= 1,
				className: "flex h-full w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-8 text-center text-sm font-medium tabular-nums",
				"aria-live": "polite",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Increase quantity",
				onClick: () => onChange(Math.min(max, value + 1)),
				disabled: value >= max,
				className: "flex h-full w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
			})
		]
	});
}
//#endregion
export { QuantitySelector as t };
