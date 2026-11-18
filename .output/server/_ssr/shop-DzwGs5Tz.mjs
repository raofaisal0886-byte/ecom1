import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore } from "./store-BSW11xD3.mjs";
import { t as PageHeader } from "./PageHeader-C796Data.mjs";
import { t as ProductList } from "./ProductList-CGzCrO7w.mjs";
import { t as Route } from "./shop-BavON80-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DzwGs5Tz.js
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const { q, tag, sort } = Route.useSearch();
	const { products } = useStore();
	let list = products.filter((p) => (!tag || p.tags.includes(tag)) && (!q || p.name.toLowerCase().includes(q.toLowerCase())));
	if (sort === "newest") list = [...list].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
	if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
	if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: q ? `Results for “${q}”` : "Shop All",
		crumbs: [{ label: "Shop" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductList, { products: list })
	})] });
}
//#endregion
export { ShopPage as component };
