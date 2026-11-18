import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/store/PageHeader";
import { ProductList } from "@/components/store/ProductList";
import { useStore } from "@/lib/store";
import type { ProductTag } from "@/lib/catalog";

interface ShopSearch {
  q?: string | undefined;
  tag?: ProductTag | undefined;
  sort?: "newest" | "price-asc" | "price-desc" | undefined;
}

export const Route = createFileRoute("/shop")({
  validateSearch: (s: Record<string, unknown>): ShopSearch => ({
    q: typeof s["q"] === "string" ? s["q"] : undefined,
    tag: ["trending", "bestseller", "new", "offer"].includes(String(s["tag"])) ? (s["tag"] as ProductTag) : undefined,
    sort: ["newest", "price-asc", "price-desc"].includes(String(s["sort"])) ? (s["sort"] as ShopSearch["sort"]) : undefined,
  }),
  head: () => ({ meta: [
    { title: "Shop All — Blackwell BD" },
    { name: "description", content: "Browse every Blackwell BD product: fashion, beauty, accessories and home." },
    { property: "og:title", content: "Shop All — Blackwell BD" },
    { property: "og:description", content: "Browse the full Blackwell BD collection." },
  ] }),
  component: ShopPage,
});

function ShopPage() {
  const { q, tag, sort } = Route.useSearch();
  const { products } = useStore();
  let list = products.filter((p) => (!tag || p.tags.includes(tag)) && (!q || p.name.toLowerCase().includes(q.toLowerCase())));
  if (sort === "newest") list = [...list].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
  return (
    <>
      <PageHeader title={q ? `Results for “${q}”` : "Shop All"} crumbs={[{ label: "Shop" }]} />
      <div className="container-luxe py-12"><ProductList products={list} /></div>
    </>
  );
}
