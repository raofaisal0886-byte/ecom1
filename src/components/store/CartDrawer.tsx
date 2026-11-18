import { Link, useNavigate } from "@tanstack/react-router";
import { ShoppingBag, Trash2, Truck } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useWhatsAppCheckout } from "@/hooks/use-whatsapp-checkout";
import { formatBDT } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { QuantitySelector } from "./QuantitySelector";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CartDrawer() {
  const { cartOpen, setCartOpen, cartLines, subtotal, shipping, total, updateQty, removeFromCart, settings, cartCount } = useStore();
  const { t, tf } = useI18n();
  const { orderCartOnWhatsApp } = useWhatsAppCheckout();
  const navigate = useNavigate();
  const remaining = settings.freeShippingThreshold - subtotal;
  const progress = settings.freeShippingThreshold > 0 ? Math.min(100, (subtotal / settings.freeShippingThreshold) * 100) : 100;

  const checkoutOnWhatsApp = () => {
    setCartOpen(false);
    orderCartOnWhatsApp();
  };

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 py-5 text-left">
          <SheetTitle className="font-display text-2xl font-medium">{t.yourBag} ({cartCount})</SheetTitle>
          <SheetDescription className="sr-only">{t.yourBag}</SheetDescription>
        </SheetHeader>

        {cartLines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand"><ShoppingBag className="h-7 w-7 text-gold-deep" /></div>
            <p className="font-display text-2xl">{t.bagEmpty}</p>
            <p className="text-sm text-muted-foreground">{t.bagEmptyHint}</p>
            <Button variant="ink" size="lg" onClick={() => { setCartOpen(false); navigate({ to: "/shop" }); }}>{t.startShopping}</Button>
          </div>
        ) : (
          <>
            {settings.freeShippingThreshold > 0 && (
              <div className="border-b border-border bg-sand/50 px-6 py-3">
                <p className="flex items-center gap-2 text-xs">
                  <Truck className="h-3.5 w-3.5 text-gold-deep" />
                  {remaining > 0 ? (
                    <>
                      {tf(t.addMoreForFree, { amount: formatBDT(remaining) }).split(formatBDT(remaining)).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && <strong>{formatBDT(remaining)}</strong>}
                        </span>
                      ))}
                    </>
                  ) : (
                    <strong>{t.freeDeliveryUnlocked}</strong>
                  )}
                </p>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-border"><div className="h-full bg-gold-gradient transition-all" style={{ width: `${progress}%` }} /></div>
              </div>
            )}
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {cartLines.map(({ item, product }) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link to="/product/$slug" params={{ slug: product.slug }} onClick={() => setCartOpen(false)} className="h-24 w-20 shrink-0 overflow-hidden rounded-md bg-sand">
                    <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <p className="line-clamp-2 font-display text-base leading-snug">{product.name}</p>
                      <button aria-label={`${t.remove} ${product.name}`} onClick={() => removeFromCart(item.key)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{[item.size && `${t.size} ${item.size}`, item.color].filter(Boolean).join(" · ")}</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <QuantitySelector size="sm" value={item.qty} onChange={(v) => updateQty(item.key, v)} max={Math.max(1, product.stock)} />
                      <span className="text-sm font-semibold">{formatBDT(product.price * item.qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="space-y-3 border-t border-border bg-card px-6 py-5">
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t.subtotal}</span><span className="font-medium">{formatBDT(subtotal)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t.deliveryEstimated}</span><span className="font-medium">{shipping === 0 ? t.free : formatBDT(shipping)}</span></div>
              <div className="flex justify-between border-t border-border pt-3 text-base"><span className="font-medium">{t.total}</span><span className="font-semibold">{formatBDT(total)}</span></div>
              <Button variant="whatsapp" size="lg" className="w-full" onClick={checkoutOnWhatsApp}>
                <WhatsAppIcon className="h-4 w-4" /> {t.checkout}
              </Button>
              <Link to="/cart" onClick={() => setCartOpen(false)} className="block text-center text-xs uppercase tracking-[0.18em] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">{t.viewFullBag}</Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
