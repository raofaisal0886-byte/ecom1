import { useCallback } from "react";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { buildOrderMessage, openWhatsApp } from "@/lib/whatsapp";

/** Opens WhatsApp with the current cart as a complete order message. */
export function useWhatsAppCheckout() {
  const { locale } = useI18n();
  const { cartLines, subtotal, shipping, total, settings } = useStore();

  const orderCartOnWhatsApp = useCallback(() => {
    if (cartLines.length === 0) return false;
    openWhatsApp(
      settings.whatsappNumber,
      buildOrderMessage({
        storeName: settings.storeName,
        locale,
        lines: cartLines.map(({ item, product }) => ({
          name: product.name,
          qty: item.qty,
          price: product.price,
          size: item.size,
          color: item.color,
        })),
        subtotal,
        shipping,
        total,
      }),
    );
    return true;
  }, [cartLines, locale, settings.storeName, settings.whatsappNumber, shipping, subtotal, total]);

  return { orderCartOnWhatsApp, hasItems: cartLines.length > 0 };
}
