import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore } from "./store-D6gVD-Yl.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as Clock3, b as Mail, g as MessageCircle, m as Phone, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-C796Data.mjs";
import { i as whatsappUrl, r as openWhatsApp, t as WhatsAppIcon } from "./WhatsAppIcon-D-Y99UZ1.mjs";
import { t as Button } from "./button-DxQ9lLK0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D4sXkH1P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { settings } = useStore();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const waHref = whatsappUrl(settings.whatsappNumber, `Hello ${settings.storeName}! I would like some help with an order / product question.`);
	const submit = (e) => {
		e.preventDefault();
		if (!name.trim() || !message.trim()) {
			toast.error("Please add your name and message");
			return;
		}
		const body = [
			`Hello ${settings.storeName}!`,
			"",
			`Name: ${name.trim()}`,
			email.trim() ? `Email: ${email.trim()}` : null,
			phone.trim() ? `Phone: ${phone.trim()}` : null,
			"",
			message.trim()
		].filter(Boolean).join("\n");
		openWhatsApp(settings.whatsappNumber, body);
		toast.success("Opening WhatsApp", { description: "Your message is ready to send." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Contact Us",
		description: "We’re here on WhatsApp, phone and email — usually reply within minutes during store hours.",
		crumbs: [{ label: "Contact Us" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxe grid gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 lg:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold-deep",
						children: "Get in touch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl sm:text-4xl",
						children: "Let’s help you find the right piece"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: "Whether you need a size check, gift advice, order tracking or want to place an order directly, reach us through any channel below. WhatsApp is fastest for ordering — add items to your bag and tap Checkout to send a complete order message automatically."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: waHref,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-whatsapp",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-medium",
							children: "WhatsApp (preferred)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-base font-semibold tracking-wide",
							children: settings.phoneDisplay
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-muted-foreground",
							children: "Tap to chat · Order confirmations & support"
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 rounded-lg border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "Phone / Call"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:+${settings.whatsappNumber}`,
								className: "mt-1 block text-sm hover:text-gold-deep",
								children: settings.phoneDisplay
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 rounded-lg border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${settings.email}`,
									className: "mt-1 block break-all text-sm hover:text-gold-deep",
									children: settings.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "For invoices, partnerships & written queries"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 rounded-lg border border-border p-5 sm:col-span-2 lg:col-span-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "Studio address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: settings.address
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 rounded-lg border border-border p-5 sm:col-span-2 lg:col-span-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Store hours"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Saturday–Thursday: 10:00 AM – 8:00 PM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Friday: 3:00 PM – 8:00 PM (Bangladesh time)"
								})
							] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-sand/60 p-5 text-sm leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-start gap-2 font-medium text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold-deep" }), "Ordering tip"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2",
							children: [
								"Add products to your bag, then use ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "Checkout"
								}),
								" — WhatsApp opens with item names, quantities, prices, delivery fee and total ready to send to ",
								settings.phoneDisplay,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "mt-3 inline-block text-xs font-medium uppercase tracking-[0.18em] text-gold-deep hover:underline",
							children: "Continue shopping"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-card p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl sm:text-3xl",
						children: "Send us a message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Fill in the form and we’ll open WhatsApp with your details pre-filled so you can send it in one tap."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "mt-8 grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm sm:col-span-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block font-medium",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: name,
									onChange: (e) => setName(e.target.value),
									className: "h-12 w-full rounded-md border border-border bg-background px-4 outline-none transition-colors focus:border-foreground",
									placeholder: "Your name",
									maxLength: 80
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm sm:col-span-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block font-medium",
									children: "Phone (optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: phone,
									onChange: (e) => setPhone(e.target.value),
									className: "h-12 w-full rounded-md border border-border bg-background px-4 outline-none transition-colors focus:border-foreground",
									placeholder: "01XXXXXXXXX",
									maxLength: 20
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block font-medium",
									children: "Email (optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									className: "h-12 w-full rounded-md border border-border bg-background px-4 outline-none transition-colors focus:border-foreground",
									placeholder: settings.email,
									maxLength: 120
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block font-medium",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									value: message,
									onChange: (e) => setMessage(e.target.value),
									rows: 6,
									className: "w-full rounded-md border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-foreground",
									placeholder: "Ask about sizes, stock, delivery or an existing order…",
									maxLength: 1e3
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									variant: "whatsapp",
									size: "lg",
									className: "w-full sm:w-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), "Send via WhatsApp"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-xs text-muted-foreground",
									children: [
										"You can also email us directly at",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "underline underline-offset-2 hover:text-foreground",
											href: `mailto:${settings.email}`,
											children: settings.email
										}),
										"."
									]
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-3",
				children: [
					{
						title: "Orders",
						text: "New orders, changes before dispatch, payment confirmation."
					},
					{
						title: "Delivery",
						text: "Tracking, district fees, and Cash on Delivery queries."
					},
					{
						title: "Returns",
						text: "7-day exchange & refund help with your order ID."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted-foreground",
						children: item.text
					})]
				}, item.title))
			})]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
