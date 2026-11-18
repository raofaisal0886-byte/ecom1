import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/store/PageHeader";
import { QuantitySelector } from "@/components/store/QuantitySelector";
import { WhatsAppIcon } from "@/components/store/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { useWhatsAppCheckout } from "@/hooks/use-whatsapp-checkout";
import { formatBDT } from "@/lib/format";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping Cart — Blackwell BD" },
      { name: "description", content: "Review your Blackwell BD shopping bag." },
      { property: "og:title", content: "Shopping Cart — Blackwell BD" },
      { property: "og:description", content: "Review your bag." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { cartLines, updateQty, removeFromCart, subtotal, shipping, total } = useStore();
  const { orderCartOnWhatsApp } = useWhatsAppCheckout();

  return (
    <>
      <PageHeader title="Shopping Cart" crumbs={[{ label: "Cart" }]} />
      <div className="container-luxe max-w-3xl py-12">
        {cartLines.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Your cart is empty.{" "}
            <Link to="/shop" className="underline">
              Shop now
            </Link>
          </p>
        ) : (
          <>
            <ul className="divide-y divide-border">
              {cartLines.map(({ item, product }) => (
                <li key={item.key} className="flex items-center gap-4 py-4">
                  <img src={product.images[0]} alt="" className="h-20 w-16 rounded object-cover" />
                  <div className="flex-1">
                    <p className="font-display text-lg">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{[item.size, item.color].filter(Boolean).join(" · ")}</p>
                  </div>
                  <QuantitySelector size="sm" value={item.qty} onChange={(v) => updateQty(item.key, v)} />
                  <span className="w-24 text-right">{formatBDT(product.price * item.qty)}</span>
                  <button onClick={() => removeFromCart(item.key)} className="text-xs text-destructive">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-1 text-right text-sm">
              <p>Subtotal: {formatBDT(subtotal)}</p>
              <p>Delivery: {shipping === 0 ? "Free" : formatBDT(shipping)}</p>
              <p className="text-lg font-semibold">Total: {formatBDT(total)}</p>
            </div>
            <div className="mt-6 text-right">
              <Button variant="whatsapp" size="lg" onClick={() => orderCartOnWhatsApp()}>
                <WhatsAppIcon className="h-4 w-4" /> Checkout on WhatsApp
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
