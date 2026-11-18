import type { Product } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

export function ProductList({ products }: { products: Product[] }) {
  if (products.length === 0) return <p className="py-16 text-center text-muted-foreground">No products found.</p>;
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
