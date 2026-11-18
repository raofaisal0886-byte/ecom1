import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore } from "./store-BSW11xD3.mjs";
import { t as PageHeader } from "./PageHeader-C796Data.mjs";
import { t as ProductList } from "./ProductList-CGzCrO7w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-BXfM75sy.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => {
	const { products, wishlist } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Wishlist",
		crumbs: [{ label: "Wishlist" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductList, { products: products.filter((p) => wishlist.includes(p.id)) })
	})] });
};
//#endregion
export { SplitComponent as component };
