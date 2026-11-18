import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as ProductCard } from "./ProductCard-B8rPbcWe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductList-bSv6OwPa.js
var import_jsx_runtime = require_jsx_runtime();
function ProductList({ products }) {
	if (products.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "py-16 text-center text-muted-foreground",
		children: "No products found."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4",
		children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
	});
}
//#endregion
export { ProductList as t };
