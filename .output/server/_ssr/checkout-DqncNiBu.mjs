import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore } from "./store-D6gVD-Yl.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-C796Data.mjs";
import { n as formatBDT } from "./format-DqyaZc8U.mjs";
import { t as WhatsAppIcon } from "./WhatsAppIcon-D-Y99UZ1.mjs";
import { t as Button } from "./button-DxQ9lLK0.mjs";
import { t as useWhatsAppCheckout } from "./use-whatsapp-checkout-DL8MWZwJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DqncNiBu.js
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const { cartLines, subtotal, shipping, total, settings } = useStore();
	const { orderUrl, hasItems } = useWhatsAppCheckout();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Checkout",
		description: "Your order opens in WhatsApp with every item, quantity, price and total ready to send.",
		crumbs: [{ label: "Checkout" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe max-w-xl py-14 text-center",
		children: !hasItems || !orderUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
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
				children: "Tap below to send your order on WhatsApp."
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
					"Message ",
					settings.phoneDisplay,
					" with your full order details ready to send."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "whatsapp",
				size: "lg",
				className: "mt-6",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: orderUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), " Open WhatsApp order"]
				})
			})
		] })
	})] });
}
//#endregion
export { CheckoutPage as component };
