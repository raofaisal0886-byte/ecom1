import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as seedProducts, o as useStore } from "./store-D6gVD-Yl.mjs";
import { n as formatBDT, t as cn } from "./format-DqyaZc8U.mjs";
import { i as whatsappUrl, n as buildOrderMessage, t as WhatsAppIcon } from "./WhatsAppIcon-D-Y99UZ1.mjs";
import { t as Button } from "./button-DxQ9lLK0.mjs";
import { n as localizeProduct, r as useI18n } from "./i18n-C3NrtDaS.mjs";
import { t as QuantitySelector } from "./QuantitySelector-D5hcXmka.mjs";
import { t as Rating } from "./Rating-Dyry1IkP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./product._slug-BYuLD6It.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-B5-EdRP8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const { products, addToCart, setCartOpen, settings } = useStore();
	const { t, tf, locale } = useI18n();
	const p = products.find((x) => x.slug === slug) ?? seedProducts.find((x) => x.slug === slug);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [size, setSize] = (0, import_react.useState)(void 0);
	const [color, setColor] = (0, import_react.useState)(void 0);
	if (!p) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "container-luxe py-24 text-center",
		children: t.productNotFound
	});
	const localized = localizeProduct(p, locale);
	const s = size ?? p.sizes?.[0];
	const c = color ?? p.colors?.[0]?.name;
	const soldOut = Number(p.stock) <= 0;
	const bnCta = locale === "bn";
	const waOrderUrl = whatsappUrl(settings.whatsappNumber, buildOrderMessage({
		storeName: settings.storeName,
		locale,
		lines: [{
			name: localized.name,
			qty,
			price: p.price,
			size: s,
			color: c
		}],
		subtotal: p.price * qty,
		shipping: 0,
		total: p.price * qty
	}));
	const handleAddToBag = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (soldOut) return;
		addToCart(p.id, qty, {
			size: s,
			color: c
		});
		toast.success(t.addedToBag, { description: localized.name });
		window.setTimeout(() => setCartOpen(true), 0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe grid gap-10 py-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: p.images[0],
			alt: localized.name,
			className: "aspect-[4/5] w-full rounded-lg object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: localized.name
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
				children: soldOut ? t.outOfStock : tf(t.inStock, { n: p.stock })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground",
				children: localized.description
			}),
			p.colors && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: p.colors.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setColor(x.name),
					className: cn("rounded-md border px-3 py-1.5 text-sm", c === x.name && "border-foreground"),
					children: locale === "bn" ? x.nameBn ?? x.name : x.name
				}, x.name))
			}),
			p.sizes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: p.sizes.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSize(x),
					className: cn("min-w-11 rounded-md border px-3 py-1.5 text-sm", s === x && "border-foreground"),
					children: x
				}, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
					value: qty,
					onChange: setQty,
					max: Math.max(1, Number(p.stock) || 1)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: soldOut,
					onClick: handleAddToBag,
					className: cn("inline-flex h-12 min-w-[10rem] flex-1 items-center justify-center rounded-md bg-ink px-8 text-[0.8rem] font-medium text-ink-foreground transition-colors hover:bg-ink-soft disabled:pointer-events-none disabled:opacity-50 sm:flex-none", bnCta ? "normal-case tracking-normal" : "uppercase tracking-[0.18em]"),
					children: t.addToBag
				})]
			}),
			soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "whatsapp",
				size: "lg",
				className: cn("mt-3 w-full", bnCta && "normal-case tracking-normal"),
				disabled: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }),
					" ",
					t.orderViaWhatsApp
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "whatsapp",
				size: "lg",
				className: cn("mt-3 w-full", bnCta && "normal-case tracking-normal"),
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: waOrderUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }),
						" ",
						t.orderViaWhatsApp
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 list-disc space-y-1 pl-5 text-sm text-muted-foreground",
				children: localized.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d }, d))
			})
		] })]
	});
}
//#endregion
export { ProductPage as component };
