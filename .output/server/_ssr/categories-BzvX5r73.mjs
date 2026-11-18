import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore } from "./store-D6gVD-Yl.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-C796Data.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-BzvX5r73.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => {
	const { categories } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Categories",
		crumbs: [{ label: "Categories" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe grid grid-cols-2 gap-5 py-12 lg:grid-cols-3",
		children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/category/$slug",
			params: { slug: c.slug },
			className: "group block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: c.image,
				alt: c.name,
				className: "aspect-[4/5] w-full rounded-lg object-cover",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-2xl",
				children: c.name
			})]
		}, c.id))
	})] });
};
//#endregion
export { SplitComponent as component };
