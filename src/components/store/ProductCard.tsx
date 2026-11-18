import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import type { MouseEvent } from "react";
import { toast } from "sonner";
import { discountPercent, type Product } from "@/lib/catalog";
import { formatBDT } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Rating } from "./Rating";

export function ProductCard({ product, className, priority = false }: { product: Product; className?: string; priority?: boolean }) {
  const { addToCart, toggleWishlist, inWishlist, setCartOpen, getCategory } = useStore();
  const { t, tf, locale } = useI18n();
  const off = discountPercent(product);
  const wished = inWishlist(product.id);
  const soldOut = product.stock <= 0;
  const category = getCategory(product.categoryId);
  const second = product.images[1];
  const displayName = locale === "bn" ? (product.nameBn ?? product.name) : product.name;
  const categoryName = category ? (locale === "bn" ? category.nameBn : category.name) : null;
  const ctaClass = cn(
    "inline-flex h-10 w-full items-center justify-center gap-2 rounded-md text-xs font-medium transition-colors",
    locale === "bn" ? "tracking-normal normal-case" : "uppercase tracking-[0.16em]",
  );

  const quickAdd = (e?: MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (soldOut) return;
    addToCart(product.id, 1, {
      size: product.sizes?.[0],
      color: product.colors?.[0]?.name,
    });
    toast.success(t.addedToBag, { description: displayName });
    // Defer sheet open so the triggering click doesn't dismiss the drawer overlay.
    window.setTimeout(() => setCartOpen(true), 0);
  };

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-sand">
        <Link to="/product/$slug" params={{ slug: product.slug }} aria-label={displayName} className="absolute inset-0 z-0 block">
          <img
            src={product.images[0]}
            alt={displayName}
            width={768}
            height={960}
            loading={priority ? "eager" : "lazy"}
            className={cn("h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105", second && "group-hover:opacity-0")}
          />
          {second && (
            <img
              src={second}
              alt=""
              width={768}
              height={960}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}
        </Link>

        <div className="pointer-events-none absolute left-3 top-3 z-20 flex flex-col gap-1.5">
          {off > 0 && <span className="rounded-sm bg-sale px-2 py-1 text-[0.65rem] font-semibold tracking-wider text-sale-foreground">-{off}%</span>}
          {product.tags.includes("new") && (
            <span className={cn("rounded-sm bg-ink px-2 py-1 text-[0.65rem] font-semibold text-ink-foreground", locale === "en" && "uppercase tracking-wider")}>
              {t.new}
            </span>
          )}
          {soldOut && (
            <span className={cn("rounded-sm bg-card px-2 py-1 text-[0.65rem] font-semibold text-foreground", locale === "en" && "uppercase tracking-wider")}>
              {t.soldOut}
            </span>
          )}
          {!soldOut && product.stock <= 8 && (
            <span className={cn("rounded-sm bg-gold-soft px-2 py-1 text-[0.65rem] font-semibold text-gold-foreground", locale === "en" && "uppercase tracking-wider")}>
              {tf(t.onlyLeft, { n: product.stock })}
            </span>
          )}
        </div>

        <button
          type="button"
          aria-label={wished ? t.removedWishlist : t.savedWishlist}
          aria-pressed={wished}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const added = toggleWishlist(product.id);
            toast(added ? t.savedWishlist : t.removedWishlist, { description: displayName });
          }}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-card/90 text-foreground shadow-card backdrop-blur transition-all hover:scale-110"
        >
          <Heart className={cn("h-4 w-4", wished && "fill-sale text-sale")} />
        </button>
      </div>

      <div className="relative z-10 flex flex-1 flex-col pt-4">
        {categoryName && <p className="eyebrow mb-1.5 text-[0.6rem] text-muted-foreground">{categoryName}</p>}
        <Link to="/product/$slug" params={{ slug: product.slug }} className="line-clamp-2 font-display text-lg leading-snug transition-colors hover:text-gold-deep">
          {displayName}
        </Link>
        <Rating value={product.rating} count={product.reviews} className="mt-1.5" />
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-semibold">{formatBDT(product.price)}</span>
          {off > 0 && product.compareAt && <span className="text-sm text-muted-foreground line-through">{formatBDT(product.compareAt)}</span>}
        </div>

        {/* Always-visible Add to Bag — not hover-only, not under the image link */}
        <div className="mt-3">
          {soldOut ? (
            <Link to="/product/$slug" params={{ slug: product.slug }} className={cn(ctaClass, "border border-border bg-card text-foreground")}>
              {t.viewDetails}
            </Link>
          ) : (
            <button
              type="button"
              onClick={quickAdd}
              className={cn(ctaClass, "bg-ink text-ink-foreground hover:bg-ink-soft")}
            >
              <ShoppingBag className="h-3.5 w-3.5 shrink-0" />
              {t.addToBag}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
