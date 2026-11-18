import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore } from "./store-BI3ei4iu.mjs";
import { n as formatBDT, t as cn } from "./format-DqyaZc8U.mjs";
import { n as buildOrderMessage, r as openWhatsApp, t as WhatsAppIcon } from "./WhatsAppIcon-BKT1kxAq.mjs";
import { t as Button } from "./button-Cgr77_Cl.mjs";
import { t as QuantitySelector } from "./QuantitySelector-D5hcXmka.mjs";
import { t as Rating } from "./Rating-Dyry1IkP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./product._slug-Z2dea0zd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-D0n81DOo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const { products, addToCart, setCartOpen, settings } = useStore();
	const p = products.find((x) => x.slug === slug);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [size, setSize] = (0, import_react.useState)(void 0);
	const [color, setColor] = (0, import_react.useState)(void 0);
	if (!p) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "container-luxe py-24 text-center",
		children: "Product not found."
	});
	const s = size ?? p.sizes?.[0];
	const c = color ?? p.colors?.[0]?.name;
	const soldOut = p.stock <= 0;
	const add = () => {
		addToCart(p.id, qty, {
			size: s,
			color: c
		});
		toast.success("Added to your bag", { description: p.name });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe grid gap-10 py-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: p.images[0],
			alt: p.name,
			className: "aspect-[4/5] w-full rounded-lg object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: p.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
				value: p.rating,
				count: p.reviews,
				className: "mt-3",
				size: "md"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-2xl font-semibold",
				children: [
					formatBDT(p.price),
					" ",
					p.compareAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base text-muted-foreground line-through",
						children: formatBDT(p.compareAt)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm",
				children: soldOut ? "Out of stock" : `In stock (${p.stock})`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground",
				children: p.description
			}),
			p.colors && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: p.colors.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setColor(x.name),
					className: cn("rounded-md border px-3 py-1.5 text-sm", c === x.name && "border-foreground"),
					children: x.name
				}, x.name))
			}),
			p.sizes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: p.sizes.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSize(x),
					className: cn("min-w-11 rounded-md border px-3 py-1.5 text-sm", s === x && "border-foreground"),
					children: x
				}, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
					value: qty,
					onChange: setQty,
					max: Math.max(1, p.stock)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ink",
					size: "lg",
					disabled: soldOut,
					onClick: () => {
						add();
						setCartOpen(true);
					},
					children: "Add to Cart"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "whatsapp",
				size: "lg",
				className: "mt-3 w-full",
				disabled: soldOut,
				onClick: () => openWhatsApp(settings.whatsappNumber, buildOrderMessage({
					storeName: settings.storeName,
					lines: [{
						name: p.name,
						qty,
						price: p.price,
						size: s,
						color: c
					}],
					subtotal: p.price * qty,
					shipping: 0,
					total: p.price * qty
				})),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), " Order via WhatsApp"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 list-disc space-y-1 pl-5 text-sm text-muted-foreground",
				children: p.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d }, d))
			})
		] })]
	});
}
//#endregion
export { ProductPage as component };
