import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-BavON80-.js
var $$splitComponentImporter = () => import("./shop-DzwGs5Tz.mjs");
var Route = createFileRoute("/shop")({
	validateSearch: (s) => ({
		q: typeof s["q"] === "string" ? s["q"] : void 0,
		tag: [
			"trending",
			"bestseller",
			"new",
			"offer"
		].includes(String(s["tag"])) ? s["tag"] : void 0,
		sort: [
			"newest",
			"price-asc",
			"price-desc"
		].includes(String(s["sort"])) ? s["sort"] : void 0
	}),
	head: () => ({ meta: [
		{ title: "Shop All — Blackwell BD" },
		{
			name: "description",
			content: "Browse every Blackwell BD product: fashion, beauty, accessories and home."
		},
		{
			property: "og:title",
			content: "Shop All — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Browse the full Blackwell BD collection."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
