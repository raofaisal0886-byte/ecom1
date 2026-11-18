import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/store/PageHeader";
import { WhatsAppIcon } from "@/components/store/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { useWhatsAppCheckout } from "@/hooks/use-whatsapp-checkout";
import { formatBDT } from "@/lib/format";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Blackwell BD" },
      { name: "description", content: "Complete your Blackwell BD order on WhatsApp with items, quantities and total." },
      { property: "og:title", content: "Checkout — Blackwell BD" },
      { property: "og:description", content: "Order on WhatsApp with your full cart details." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { cartLines, subtotal, shipping, total, settings } = useStore();
  const { orderUrl, hasItems } = useWhatsAppCheckout();

  return (
    <>
      <PageHeader
        title="Checkout"
        description="Your order opens in WhatsApp with every item, quantity, price and total ready to send."
        crumbs={[{ label: "Checkout" }]}
      />
      <div className="container-luxe max-w-xl py-14 text-center">
        {!hasItems || !orderUrl ? (
          <>
            <p className="font-display text-2xl">Your bag is empty</p>
            <p className="mt-2 text-sm text-muted-foreground">Add products first, then checkout on WhatsApp.</p>
            <Link
              to="/shop"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-ink px-8 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-ink-foreground"
            >
              Start shopping
            </Link>
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">Tap below to send your order on WhatsApp.</p>
            <p className="mt-4 font-display text-3xl">{formatBDT(total)}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {cartLines.length} line{cartLines.length === 1 ? "" : "s"} · Delivery {shipping === 0 ? "Free" : formatBDT(shipping)} · Subtotal{" "}
              {formatBDT(subtotal)}
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Message {settings.phoneDisplay} with your full order details ready to send.</p>
            {/* Real <a> link — not blocked like window.open from useEffect */}
            <Button variant="whatsapp" size="lg" className="mt-6" asChild>
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" /> Open WhatsApp order
              </a>
            </Button>
          </>
        )}
      </div>
    </>
  );
}
