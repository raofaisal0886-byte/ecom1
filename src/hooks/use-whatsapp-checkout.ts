import { useCallback, useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { buildOrderMessage, openWhatsApp, whatsappUrl } from "@/lib/whatsapp";

/** Opens WhatsApp with the current cart as a complete order message. */
export function useWhatsAppCheckout() {
  const { locale } = useI18n();
  const { cartLines, subtotal, shipping, total, settings } = useStore();

  const orderMessage = useMemo(() => {
    if (cartLines.length === 0) return "";
    return buildOrderMessage({
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
    });
  }, [cartLines, locale, settings.storeName, shipping, subtotal, total]);

  const orderUrl = useMemo(
    () => (orderMessage ? whatsappUrl(settings.whatsappNumber, orderMessage) : ""),
    [orderMessage, settings.whatsappNumber],
  );

  const orderCartOnWhatsApp = useCallback(() => {
    if (!orderMessage) return false;
    openWhatsApp(settings.whatsappNumber, orderMessage);
    return true;
  }, [orderMessage, settings.whatsappNumber]);

  return { orderCartOnWhatsApp, orderUrl, hasItems: cartLines.length > 0 };
}
