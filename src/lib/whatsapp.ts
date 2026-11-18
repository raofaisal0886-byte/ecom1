import { formatBDT } from "./format";
import type { Locale } from "./i18n";

export interface WaLine {
  name: string;
  qty: number;
  price: number;
  size?: string | undefined;
  color?: string | undefined;
}

export interface WaCustomer {
  fullName?: string | undefined;
  phone?: string | undefined;
  email?: string | undefined;
  district?: string | undefined;
  city?: string | undefined;
  area?: string | undefined;
  address?: string | undefined;
  notes?: string | undefined;
}

export interface WaLabels {
  intro: string;
  orderId: string;
  orderItems: string;
  size: string;
  color: string;
  subtotal: string;
  delivery: string;
  free: string;
  total: string;
  customerDetails: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
  payment: string;
  confirm: string;
}

const enLabels: WaLabels = {
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
  confirm: "Please confirm my order. Thank you!",
};

const bnLabels: WaLabels = {
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
  confirm: "অনুগ্রহ করে আমার অর্ডার নিশ্চিত করুন। ধন্যবাদ!",
};

export function waLabelsFor(locale: Locale = "en"): WaLabels {
  return locale === "bn" ? bnLabels : enLabels;
}

export interface WaOrder {
  storeName: string;
  orderId?: string | undefined;
  lines: WaLine[];
  subtotal: number;
  shipping: number;
  total: number;
  customer?: WaCustomer | undefined;
  paymentLabel?: string | undefined;
  paymentRef?: string | undefined;
  intro?: string | undefined;
  locale?: Locale | undefined;
  labels?: Partial<WaLabels> | undefined;
}

export function buildOrderMessage(o: WaOrder): string {
  const L = { ...waLabelsFor(o.locale ?? "en"), ...o.labels };
  const out: string[] = [];
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
    const addr = [c.address, c.area, c.city, c.district].filter(Boolean).join(", ");
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
export function whatsappUrl(number: string, message?: string): string {
  const digits = number.replace(/\D/g, "");
  let url = `https://api.whatsapp.com/send?phone=${digits}`;
  if (message) url += `&text=${encodeURIComponent(message)}`;
  return url;
}

/**
 * Open WhatsApp with an optional pre-filled message.
 * Production browsers often block window.open(..., "noopener") as a popup,
 * especially outside a direct click — use same-tab on mobile and a guarded
 * new-tab open on desktop.
 */
export function openWhatsApp(number: string, message?: string) {
  if (typeof window === "undefined") return;
  const url = whatsappUrl(number, message);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

  // Phones: same-tab navigation opens the WhatsApp app reliably.
  if (isMobile) {
    window.location.assign(url);
    return;
  }

  // Desktop: try a new tab (WhatsApp Web). If the popup is blocked, navigate here.
  const win = window.open(url, "_blank");
  if (!win) {
    window.location.assign(url);
  }
}
