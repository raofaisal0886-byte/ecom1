import { a as seedProducts } from "./store-BI3ei4iu.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-Z2dea0zd.js
var $$splitComponentImporter = () => import("./product._slug-D0n81DOo.mjs");
var Route = createFileRoute("/product/$slug")({
	head: ({ params }) => {
		const p = seedProducts.find((x) => x.slug === params.slug);
		const title = `${p?.name ?? "Product"} — Blackwell BD`;
		const desc = p?.description ?? "Shop at Blackwell BD.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: desc
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: desc
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
