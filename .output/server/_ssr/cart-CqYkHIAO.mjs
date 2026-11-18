import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore } from "./store-D6gVD-Yl.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-C796Data.mjs";
import { n as formatBDT } from "./format-DqyaZc8U.mjs";
import { t as WhatsAppIcon } from "./WhatsAppIcon-D-Y99UZ1.mjs";
import { t as Button } from "./button-DxQ9lLK0.mjs";
import { t as useWhatsAppCheckout } from "./use-whatsapp-checkout-DL8MWZwJ.mjs";
import { t as QuantitySelector } from "./QuantitySelector-D5hcXmka.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-CqYkHIAO.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { cartLines, updateQty, removeFromCart, subtotal, shipping, total } = useStore();
	const { orderUrl } = useWhatsAppCheckout();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Shopping Cart",
		crumbs: [{ label: "Cart" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe max-w-3xl py-12",
		children: cartLines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-center text-muted-foreground",
			children: [
				"Your cart is empty.",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "underline",
					children: "Shop now"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border",
				children: cartLines.map(({ item, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.images[0],
							alt: "",
							className: "h-20 w-16 rounded object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: [item.size, item.color].filter(Boolean).join(" · ")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
							size: "sm",
							value: item.qty,
							onChange: (v) => updateQty(item.key, v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-24 text-right",
							children: formatBDT(product.price * item.qty)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => removeFromCart(item.key),
							className: "text-xs text-destructive",
							children: "Remove"
						})
					]
				}, item.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-1 text-right text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Subtotal: ", formatBDT(subtotal)] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Delivery: ", shipping === 0 ? "Free" : formatBDT(shipping)] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg font-semibold",
						children: ["Total: ", formatBDT(total)]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 text-right",
				children: orderUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "whatsapp",
					size: "lg",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: orderUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), " Checkout on WhatsApp"]
					})
				}) : null
			})
		] })
	})] });
}
//#endregion
export { CartPage as component };
