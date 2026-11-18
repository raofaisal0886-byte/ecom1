import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/store/QuantitySelector";
import { Rating } from "@/components/store/Rating";
import { WhatsAppIcon } from "@/components/store/WhatsAppIcon";
import { seedProducts } from "@/lib/catalog";
import { formatBDT } from "@/lib/format";
import { localizeProduct, useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { buildOrderMessage, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => {
    const p = seedProducts.find((x) => x.slug === params.slug);
    const title = `${p?.name ?? "Product"} — Blackwell BD`;
    const desc = p?.description ?? "Shop at Blackwell BD.";
    return { meta: [{ title }, { name: "description", content: desc }, { property: "og:title", content: title }, { property: "og:description", content: desc }] };
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const { products, addToCart, setCartOpen, settings } = useStore();
  const { t, tf, locale } = useI18n();
  const p = products.find((x) => x.slug === slug);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string | undefined>(undefined);
  if (!p) return <p className="container-luxe py-24 text-center">{t.productNotFound}</p>;
  const localized = localizeProduct(p, locale);
  const s = size ?? p.sizes?.[0];
  const c = color ?? p.colors?.[0]?.name;
  const soldOut = p.stock <= 0;
  const bnCta = locale === "bn";
  const waOrderUrl = whatsappUrl(
    settings.whatsappNumber,
    buildOrderMessage({
      storeName: settings.storeName,
      locale,
      lines: [{ name: localized.name, qty, price: p.price, size: s, color: c }],
      subtotal: p.price * qty,
      shipping: 0,
      total: p.price * qty,
    }),
  );
  const add = () => {
    addToCart(p.id, qty, { size: s, color: c });
    toast.success(t.addedToBag, { description: localized.name });
  };
  return (
    <div className="container-luxe grid gap-10 py-12 lg:grid-cols-2">
      <img src={p.images[0]} alt={localized.name} className="aspect-[4/5] w-full rounded-lg object-cover" />
      <div>
        <h1 className="text-4xl">{localized.name}</h1>
        <Rating value={p.rating} count={p.reviews} className="mt-3" size="md" />
        <p className="mt-4 text-2xl font-semibold">
          {formatBDT(p.price)}{" "}
          {p.compareAt && <span className="text-base text-muted-foreground line-through">{formatBDT(p.compareAt)}</span>}
        </p>
        <p className="mt-2 text-sm">{soldOut ? t.outOfStock : tf(t.inStock, { n: p.stock })}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{localized.description}</p>
        {p.colors && (
          <div className="mt-5 flex flex-wrap gap-2">
            {p.colors.map((x) => (
              <button key={x.name} type="button" onClick={() => setColor(x.name)} className={cn("rounded-md border px-3 py-1.5 text-sm", c === x.name && "border-foreground")}>
                {locale === "bn" ? (x.nameBn ?? x.name) : x.name}
              </button>
            ))}
          </div>
        )}
        {p.sizes && (
          <div className="mt-3 flex flex-wrap gap-2">
            {p.sizes.map((x) => (
              <button key={x} type="button" onClick={() => setSize(x)} className={cn("min-w-11 rounded-md border px-3 py-1.5 text-sm", s === x && "border-foreground")}>
                {x}
              </button>
            ))}
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <QuantitySelector value={qty} onChange={setQty} max={Math.max(1, p.stock)} />
          <Button
            variant="ink"
            size="lg"
            disabled={soldOut}
            type="button"
            className={cn(bnCta && "normal-case tracking-normal")}
            onClick={() => {
              add();
              setCartOpen(true);
            }}
          >
            {t.addToBag}
          </Button>
        </div>
        {soldOut ? (
          <Button variant="whatsapp" size="lg" className={cn("mt-3 w-full", bnCta && "normal-case tracking-normal")} disabled>
            <WhatsAppIcon className="h-4 w-4" /> {t.orderViaWhatsApp}
          </Button>
        ) : (
          <Button variant="whatsapp" size="lg" className={cn("mt-3 w-full", bnCta && "normal-case tracking-normal")} asChild>
            <a href={waOrderUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" /> {t.orderViaWhatsApp}
            </a>
          </Button>
        )}
        <ul className="mt-6 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {localized.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
