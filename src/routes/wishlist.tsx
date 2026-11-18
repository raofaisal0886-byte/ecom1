import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/store/PageHeader";
import { ProductList } from "@/components/store/ProductList";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — Blackwell BD" }, { name: "description", content: "Your saved Blackwell BD products." }, { property: "og:title", content: "Wishlist — Blackwell BD" }, { property: "og:description", content: "Your saved products." }] }),
  component: () => {
    const { products, wishlist } = useStore();
    return (<><PageHeader title="Wishlist" crumbs={[{ label: "Wishlist" }]} /><div className="container-luxe py-12"><ProductList products={products.filter((p) => wishlist.includes(p.id))} /></div></>);
  },
});
