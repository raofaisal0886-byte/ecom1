import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore } from "./store-BI3ei4iu.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-C796Data.mjs";
import { n as formatBDT } from "./format-DqyaZc8U.mjs";
import { t as WhatsAppIcon } from "./WhatsAppIcon-BKT1kxAq.mjs";
import { r as useWhatsAppCheckout } from "./use-whatsapp-checkout-DEKHSl9Q.mjs";
import { t as Button } from "./button-Cgr77_Cl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DyW9yXIx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const { cartLines, subtotal, shipping, total, settings, hydrated } = useStore();
	const { orderCartOnWhatsApp, hasItems } = useWhatsAppCheckout();
	const opened = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!hydrated || !hasItems || opened.current) return;
		opened.current = true;
		orderCartOnWhatsApp();
	}, [
		hydrated,
		hasItems,
		orderCartOnWhatsApp
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Checkout",
		description: "Your order opens in WhatsApp with every item, quantity, price and total ready to send.",
		crumbs: [{ label: "Checkout" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe max-w-xl py-14 text-center",
		children: !hasItems ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl",
				children: "Your bag is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Add products first, then checkout on WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "mt-8 inline-flex h-12 items-center justify-center rounded-md bg-ink px-8 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-ink-foreground",
				children: "Start shopping"
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Opening WhatsApp with your order…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-3xl",
				children: formatBDT(total)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: [
					cartLines.length,
					" line",
					cartLines.length === 1 ? "" : "s",
					" · Delivery ",
					shipping === 0 ? "Free" : formatBDT(shipping),
					" · Subtotal",
					" ",
					formatBDT(subtotal)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: [
					"If WhatsApp did not open, tap below to message ",
					settings.phoneDisplay,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "whatsapp",
				size: "lg",
				className: "mt-6",
				onClick: () => orderCartOnWhatsApp(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), " Open WhatsApp order"]
			})
		] })
	})] });
}
//#endregion
export { CheckoutPage as component };
