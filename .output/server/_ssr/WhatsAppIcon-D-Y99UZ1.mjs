import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as formatBDT } from "./format-DqyaZc8U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhatsAppIcon-D-Y99UZ1.js
var import_jsx_runtime = require_jsx_runtime();
var enLabels = {
	intro: "Hello {store}! I'd like to place an order.",
	orderId: "Order ID",
	orderItems: "Order items",
	size: "Size",
	color: "Color",
	subtotal: "Subtotal",
	delivery: "Delivery",
	free: "Free",
	total: "Total",
	customerDetails: "Customer details",
	name: "Name",
	phone: "Phone",
	email: "Email",
	address: "Delivery address",
	notes: "Notes",
	payment: "Payment",
	confirm: "Please confirm my order. Thank you!"
};
var bnLabels = {
	intro: "হ্যালো {store}! আমি একটি অর্ডার দিতে চাই।",
	orderId: "অর্ডার আইডি",
	orderItems: "অর্ডারের পণ্য",
	size: "সাইজ",
	color: "রঙ",
	subtotal: "সাবটোটাল",
	delivery: "ডেলিভারি",
	free: "ফ্রি",
	total: "মোট",
	customerDetails: "গ্রাহকের তথ্য",
	name: "নাম",
	phone: "ফোন",
	email: "ইমেইল",
	address: "ডেলিভারি ঠিকানা",
	notes: "নোট",
	payment: "পেমেন্ট",
	confirm: "অনুগ্রহ করে আমার অর্ডার নিশ্চিত করুন। ধন্যবাদ!"
};
function waLabelsFor(locale = "en") {
	return locale === "bn" ? bnLabels : enLabels;
}
function buildOrderMessage(o) {
	const L = {
		...waLabelsFor(o.locale ?? "en"),
		...o.labels
	};
	const out = [];
	out.push(o.intro ?? L.intro.replace("{store}", o.storeName));
	if (o.orderId) out.push(`${L.orderId}: ${o.orderId}`);
	out.push("");
	out.push(`*${L.orderItems}*`);
	o.lines.forEach((l, i) => {
		const variant = [l.size && `${L.size}: ${l.size}`, l.color && `${L.color}: ${l.color}`].filter(Boolean).join(", ");
		out.push(`${i + 1}. ${l.name}${variant ? ` (${variant})` : ""}`);
		out.push(`   ${l.qty} × ${formatBDT(l.price)} = ${formatBDT(l.qty * l.price)}`);
	});
	out.push("");
	out.push(`${L.subtotal}: ${formatBDT(o.subtotal)}`);
	out.push(`${L.delivery}: ${o.shipping === 0 ? L.free : formatBDT(o.shipping)}`);
	out.push(`*${L.total}: ${formatBDT(o.total)}*`);
	const c = o.customer;
	if (c && Object.values(c).some(Boolean)) {
		out.push("");
		out.push(`*${L.customerDetails}*`);
		if (c.fullName) out.push(`${L.name}: ${c.fullName}`);
		if (c.phone) out.push(`${L.phone}: ${c.phone}`);
		if (c.email) out.push(`${L.email}: ${c.email}`);
		const addr = [
			c.address,
			c.area,
			c.city,
			c.district
		].filter(Boolean).join(", ");
		if (addr) out.push(`${L.address}: ${addr}`);
		if (c.notes) out.push(`${L.notes}: ${c.notes}`);
	}
	if (o.paymentLabel) {
		out.push("");
		out.push(`${L.payment}: ${o.paymentLabel}${o.paymentRef ? ` (TrxID: ${o.paymentRef})` : ""}`);
	}
	out.push("");
	out.push(L.confirm);
	return out.join("\n");
}
/**
* Official Click-to-Chat URL. Prefer api.whatsapp.com over wa.me —
* it is more reliable inside mobile browsers and in-app webviews.
* Use encodeURIComponent (not URLSearchParams) so spaces become %20 —
* WhatsApp sometimes leaves "+" as a literal character in the draft message.
*/
function whatsappUrl(number, message) {
	let url = `https://api.whatsapp.com/send?phone=${number.replace(/\D/g, "")}`;
	if (message) url += `&text=${encodeURIComponent(message)}`;
	return url;
}
/**
* Open WhatsApp with an optional pre-filled message.
* Production browsers often block window.open(..., "noopener") as a popup,
* especially outside a direct click — use same-tab on mobile and a guarded
* new-tab open on desktop.
*/
function openWhatsApp(number, message) {
	if (typeof window === "undefined") return;
	const url = whatsappUrl(number, message);
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		window.location.assign(url);
		return;
	}
	if (!window.open(url, "_blank")) window.location.assign(url);
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36A9.41 9.41 0 0 1 2.6 12.05c0-5.2 4.24-9.44 9.46-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.79.7.69 5.79.69 12.05c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.34 11.34 0 0 0 5.42 1.38h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.32-8.03" })
	});
}
//#endregion
export { whatsappUrl as i, buildOrderMessage as n, openWhatsApp as r, WhatsAppIcon as t };
