import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-DIFfAIwx.js
var $$splitComponentImporter = () => import("./category._slug-C7OtWb9N.mjs");
var Route = createFileRoute("/category/$slug")({
	head: ({ params }) => ({ meta: [
		{ title: `${params.slug} — Blackwell BD` },
		{
			name: "description",
			content: "Shop this Blackwell BD category."
		},
		{
			property: "og:title",
			content: `${params.slug} — Blackwell BD`
		},
		{
			property: "og:description",
			content: "Shop this Blackwell BD category."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
