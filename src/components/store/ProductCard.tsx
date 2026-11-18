import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { discountPercent, type Product } from "@/lib/catalog";
import { formatBDT } from "@/lib/format";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Rating } from "./Rating";

export function ProductCard({ product, className, priority = false }: { product: Product; className?: string; priority?: boolean }) {
  const { addToCart, toggleWishlist, inWishlist, setCartOpen, getCategory } = useStore();
  const off = discountPercent(product);
  const wished = inWishlist(product.id);
  const soldOut = product.stock <= 0;
  const needsChoice = (product.sizes?.length ?? 0) > 1;
  const category = getCategory(product.categoryId);
  const second = product.images[1];

  const quickAdd = () => {
    addToCart(product.id, 1, { size: product.sizes?.[0], color: product.colors?.[0]?.name });
    toast.success("Added to your bag", { description: product.name });
    setCartOpen(true);
  };

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-sand">
        <Link to="/product/$slug" params={{ slug: product.slug }} aria-label={product.name} className="block h-full w-full">
          <img
            src={product.images[0]}
            alt={product.name}
            width={768}
            height={960}
            loading={priority ? "eager" : "lazy"}
            className={cn("h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105", second && "group-hover:opacity-0")}
          />
          {second && (
            <img src={second} alt="" width={768} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          )}
        </Link>

        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5">
          {off > 0 && <span className="rounded-sm bg-sale px-2 py-1 text-[0.65rem] font-semibold tracking-wider text-sale-foreground">-{off}%</span>}
          {product.tags.includes("new") && <span className="rounded-sm bg-ink px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink-foreground">New</span>}
          {soldOut && <span className="rounded-sm bg-card px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-foreground">Sold out</span>}
          {!soldOut && product.stock <= 8 && <span className="rounded-sm bg-gold-soft px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-foreground">Only {product.stock} left</span>}
        </div>

        <button
          type="button"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
          onClick={() => {
            const added = toggleWishlist(product.id);
            toast(added ? "Saved to wishlist" : "Removed from wishlist", { description: product.name });
          }}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-card/90 text-foreground shadow-card backdrop-blur transition-all hover:scale-110"
        >
          <Heart className={cn("h-4 w-4", wished && "fill-sale text-sale")} />
        </button>

        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-100 transition-all duration-300 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          {soldOut ? (
            <Link to="/product/$slug" params={{ slug: product.slug }} className="flex h-10 w-full items-center justify-center rounded-md bg-card/95 text-xs font-medium uppercase tracking-[0.16em] text-foreground backdrop-blur">
              View details
            </Link>
          ) : needsChoice ? (
            <Link to="/product/$slug" params={{ slug: product.slug }} className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-ink/90 text-xs font-medium uppercase tracking-[0.16em] text-ink-foreground backdrop-blur transition-colors hover:bg-ink">
              <ShoppingBag className="h-3.5 w-3.5" /> Choose options
            </Link>
          ) : (
            <button type="button" onClick={quickAdd} className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-ink/90 text-xs font-medium uppercase tracking-[0.16em] text-ink-foreground backdrop-blur transition-colors hover:bg-ink">
              <ShoppingBag className="h-3.5 w-3.5" /> Add to bag
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        {category && <p className="eyebrow mb-1.5 text-[0.6rem] text-muted-foreground">{category.name}</p>}
        <Link to="/product/$slug" params={{ slug: product.slug }} className="line-clamp-2 font-display text-lg leading-snug transition-colors hover:text-gold-deep">
          {product.name}
        </Link>
        <Rating value={product.rating} count={product.reviews} className="mt-1.5" />
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-semibold">{formatBDT(product.price)}</span>
          {off > 0 && product.compareAt && <span className="text-sm text-muted-foreground line-through">{formatBDT(product.compareAt)}</span>}
        </div>
      </div>
    </article>
  );
}
