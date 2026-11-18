import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore } from "./store-D6gVD-Yl.mjs";
import { t as PageHeader } from "./PageHeader-C796Data.mjs";
import { t as Route } from "./category._slug-DIFfAIwx.mjs";
import { t as ProductList } from "./ProductList-bSv6OwPa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-C7OtWb9N.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => {
	const { slug } = Route.useParams();
	const { categories, products } = useStore();
	const cat = categories.find((c) => c.slug === slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: cat?.name ?? "Category",
		crumbs: [{
			label: "Categories",
			to: "/categories"
		}, { label: cat?.name ?? slug }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductList, { products: products.filter((p) => p.categoryId === cat?.id) })
	})] });
};
//#endregion
export { SplitComponent as component };
