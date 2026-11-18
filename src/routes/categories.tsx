import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/store/PageHeader";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/categories")({
  head: () => ({ meta: [
    { title: "Categories — Blackwell BD" },
    { name: "description", content: "Shop Blackwell BD by category." },
    { property: "og:title", content: "Categories — Blackwell BD" },
    { property: "og:description", content: "Fashion, beauty, accessories, jewelry and home." },
  ] }),
  component: () => {
    const { categories } = useStore();
    return (
      <>
        <PageHeader title="Categories" crumbs={[{ label: "Categories" }]} />
        <div className="container-luxe grid grid-cols-2 gap-5 py-12 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.id} to="/category/$slug" params={{ slug: c.slug }} className="group block">
              <img src={c.image} alt={c.name} className="aspect-[4/5] w-full rounded-lg object-cover" loading="lazy" />
              <p className="mt-3 font-display text-2xl">{c.name}</p>
            </Link>
          ))}
        </div>
      </>
    );
  },
});
