import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { o as useStore } from "./store-D6gVD-Yl.mjs";
import { i as whatsappUrl, n as buildOrderMessage, r as openWhatsApp } from "./WhatsAppIcon-D-Y99UZ1.mjs";
import { r as useI18n } from "./i18n-C3NrtDaS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-whatsapp-checkout-DL8MWZwJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/** Opens WhatsApp with the current cart as a complete order message. */
function useWhatsAppCheckout() {
	const { locale } = useI18n();
	const { cartLines, subtotal, shipping, total, settings } = useStore();
	const orderMessage = (0, import_react.useMemo)(() => {
		if (cartLines.length === 0) return "";
		return buildOrderMessage({
			storeName: settings.storeName,
			locale,
			lines: cartLines.map(({ item, product }) => ({
				name: product.name,
				qty: item.qty,
				price: product.price,
				size: item.size,
				color: item.color
			})),
			subtotal,
			shipping,
			total
		});
	}, [
		cartLines,
		locale,
		settings.storeName,
		shipping,
		subtotal,
		total
	]);
	const orderUrl = (0, import_react.useMemo)(() => orderMessage ? whatsappUrl(settings.whatsappNumber, orderMessage) : "", [orderMessage, settings.whatsappNumber]);
	return {
		orderCartOnWhatsApp: (0, import_react.useCallback)(() => {
			if (!orderMessage) return false;
			openWhatsApp(settings.whatsappNumber, orderMessage);
			return true;
		}, [orderMessage, settings.whatsappNumber]),
		orderUrl,
		hasItems: cartLines.length > 0
	};
}
//#endregion
export { useWhatsAppCheckout as t };
