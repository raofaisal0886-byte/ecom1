import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/store/PageHeader";
import { ProductList } from "@/components/store/ProductList";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => ({ meta: [
    { title: `${params.slug} — Blackwell BD` },
    { name: "description", content: "Shop this Blackwell BD category." },
    { property: "og:title", content: `${params.slug} — Blackwell BD` },
    { property: "og:description", content: "Shop this Blackwell BD category." },
  ] }),
  component: () => {
    const { slug } = Route.useParams();
    const { categories, products } = useStore();
    const cat = categories.find((c) => c.slug === slug);
    return (
      <>
        <PageHeader title={cat?.name ?? "Category"} crumbs={[{ label: "Categories", to: "/categories" }, { label: cat?.name ?? slug }]} />
        <div className="container-luxe py-12"><ProductList products={products.filter((p) => p.categoryId === cat?.id)} /></div>
      </>
    );
  },
});
