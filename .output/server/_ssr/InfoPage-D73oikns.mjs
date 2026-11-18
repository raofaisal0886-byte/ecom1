import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as PageHeader } from "./PageHeader-C796Data.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InfoPage-D73oikns.js
var import_jsx_runtime = require_jsx_runtime();
function InfoPage({ title, intro, sections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title,
		description: intro,
		crumbs: [{ label: title }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe max-w-3xl space-y-8 py-14",
		children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl",
			children: s.h
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted-foreground",
			children: s.p
		})] }, s.h))
	})] });
}
//#endregion
export { InfoPage as t };
