import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as discountPercent, o as useStore } from "./store-BI3ei4iu.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Heart, c as ShoppingBag } from "../_libs/lucide-react.mjs";
import { n as formatBDT, t as cn } from "./format-DqyaZc8U.mjs";
import { t as Rating } from "./Rating-Dyry1IkP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-BrJCLjUk.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, className, priority = false }) {
	const { addToCart, toggleWishlist, inWishlist, setCartOpen, getCategory } = useStore();
	const off = discountPercent(product);
	const wished = inWishlist(product.id);
	const soldOut = product.stock <= 0;
	const needsChoice = (product.sizes?.length ?? 0) > 1;
	const category = getCategory(product.categoryId);
	const second = product.images[1];
	const quickAdd = () => {
		addToCart(product.id, 1, {
			size: product.sizes?.[0],
			color: product.colors?.[0]?.name
		});
		toast.success("Added to your bag", { description: product.name });
		setCartOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group relative flex flex-col", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/5] overflow-hidden rounded-md bg-sand",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					"aria-label": product.name,
					className: "block h-full w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.images[0],
						alt: product.name,
						width: 768,
						height: 960,
						loading: priority ? "eager" : "lazy",
						className: cn("h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105", second && "group-hover:opacity-0")
					}), second && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: second,
						alt: "",
						width: 768,
						height: 960,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5",
					children: [
						off > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-sm bg-sale px-2 py-1 text-[0.65rem] font-semibold tracking-wider text-sale-foreground",
							children: [
								"-",
								off,
								"%"
							]
						}),
						product.tags.includes("new") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-sm bg-ink px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink-foreground",
							children: "New"
						}),
						soldOut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-sm bg-card px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-foreground",
							children: "Sold out"
						}),
						!soldOut && product.stock <= 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-sm bg-gold-soft px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-foreground",
							children: [
								"Only ",
								product.stock,
								" left"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": wished ? "Remove from wishlist" : "Add to wishlist",
					"aria-pressed": wished,
					onClick: () => {
						const added = toggleWishlist(product.id);
						toast(added ? "Saved to wishlist" : "Removed from wishlist", { description: product.name });
					},
					className: "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-card/90 text-foreground shadow-card backdrop-blur transition-all hover:scale-110",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-4 w-4", wished && "fill-sale text-sale") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-3 bottom-3 translate-y-2 opacity-100 transition-all duration-300 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100",
					children: soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "flex h-10 w-full items-center justify-center rounded-md bg-card/95 text-xs font-medium uppercase tracking-[0.16em] text-foreground backdrop-blur",
						children: "View details"
					}) : needsChoice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "flex h-10 w-full items-center justify-center gap-2 rounded-md bg-ink/90 text-xs font-medium uppercase tracking-[0.16em] text-ink-foreground backdrop-blur transition-colors hover:bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), " Choose options"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: quickAdd,
						className: "flex h-10 w-full items-center justify-center gap-2 rounded-md bg-ink/90 text-xs font-medium uppercase tracking-[0.16em] text-ink-foreground backdrop-blur transition-colors hover:bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), " Add to bag"]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col pt-4",
			children: [
				category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-1.5 text-[0.6rem] text-muted-foreground",
					children: category.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					className: "line-clamp-2 font-display text-lg leading-snug transition-colors hover:text-gold-deep",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
					value: product.rating,
					count: product.reviews,
					className: "mt-1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base font-semibold",
						children: formatBDT(product.price)
					}), off > 0 && product.compareAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground line-through",
						children: formatBDT(product.compareAt)
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
