import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore } from "./store-BI3ei4iu.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as HeartHandshake, i as Truck, k as BadgeCheck, s as Sparkles, v as MapPinned } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-C796Data.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Cw42gNAt.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		Icon: Sparkles,
		title: "Curated, not crowded",
		text: "Every product is selected for fabric quality, finish and lasting style — from Jamdani weaves and panjabis to oud fragrances, leather goods and home décor."
	},
	{
		Icon: Truck,
		title: "Nationwide reach",
		text: "We deliver across all 64 districts of Bangladesh with clear timelines: typically 1–2 days in Dhaka and 3–5 days elsewhere, with Cash on Delivery available."
	},
	{
		Icon: HeartHandshake,
		title: "Human support",
		text: "Order on the website or WhatsApp — the same team confirms stock, sizes and delivery. We reply in English and Bangla during store hours."
	},
	{
		Icon: BadgeCheck,
		title: "Quality before dispatch",
		text: "Orders are checked and packed with care from our Dhaka studio. Enjoy a 7-day easy return and exchange policy on eligible items."
	}
];
function AboutPage() {
	const { settings } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "About Us",
			description: "Premium fashion, beauty and lifestyle — thoughtfully curated in Dhaka for modern Bangladesh.",
			crumbs: [{ label: "About Us" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe grid gap-12 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold-deep",
						children: "Our story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl leading-tight sm:text-4xl",
						children: "A quieter kind of luxury for every celebration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Blackwell BD began with a simple idea: shopping for elevated everyday pieces in Bangladesh should feel as considered as the products themselves. Too many online stores felt either mass-market or hard to trust — unclear photos, delayed replies, and packaging that didn’t match the price." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We built Blackwell as a boutique-style storefront with a clear promise: authentic products, honest stock, transparent pricing in Bangladeshi Taka, and support that actually answers. Whether you are dressing for Eid, refreshing a wardrobe staple, or gifting perfume and home fragrance, we want the journey — from first browse to unboxing — to feel premium." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today we serve customers in every district through our website and WhatsApp ordering. Cash on Delivery, bKash and Nagad keep checkout familiar; careful packing and quality checks keep the experience consistent." })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-sand/50 p-8 sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold-deep",
						children: "At a glance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinned, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block font-medium text-foreground",
									children: "Based in Dhaka"
								}), settings.address] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "Categories"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted-foreground",
								children: "Women’s & men’s fashion, beauty & fragrance, bags & accessories, watches & jewelry, home & lifestyle."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "Ordering"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted-foreground",
								children: "Shop online, add to bag, then checkout on WhatsApp with your full order details — or message us anytime."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-medium text-foreground",
								children: "Payments"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted-foreground",
								children: "Cash on Delivery nationwide, plus bKash and Nagad."
							})] })
						]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-center text-gold-deep",
						children: "What we stand for"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto mt-3 max-w-2xl text-center text-3xl sm:text-4xl",
						children: "Values that shape every order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: pillars.map(({ Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-background p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-11 w-11 items-center justify-center rounded-full bg-sand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-gold-deep" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-xl",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: text
								})
							]
						}, title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold-deep",
					children: "Our mission"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl sm:text-4xl",
					children: "Make premium shopping feel trustworthy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: "We curate pieces that balance craft and contemporary taste — hand-finished embroidery, thoughtful materials, and accessories you keep for seasons. Behind the scenes, we focus on clear communication: size guidance, delivery estimates, and order updates so you never wonder where your parcel is."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: "Blackwell is for people who care how things look and how brands behave — fair policies, respectful packaging, and support that treats every customer as a guest, not a ticket number."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold-deep",
					children: "Our promise"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl sm:text-4xl",
					children: "The same experience, every channel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: "Browse the full collection on our website, save favourites to your wishlist, and build a bag with accurate prices in BDT. When you are ready, checkout opens WhatsApp with product names, quantities, line prices, delivery estimate and total — so you can send a complete order in one message."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: [
						"Prefer talking first? Message us on WhatsApp at ",
						settings.phoneDisplay,
						" or email ",
						settings.email,
						". We are here to help with styling advice, stock checks and order tracking."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "inline-flex h-12 items-center justify-center rounded-md bg-ink px-8 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-ink-foreground",
						children: "Shop the collection"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex h-12 items-center justify-center rounded-md border border-border px-8 text-[0.75rem] font-medium uppercase tracking-[0.18em]",
						children: "Contact us"
					})]
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink-gradient py-16 text-ink-foreground sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Thank you"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl sm:text-4xl",
						children: "From our studio in Dhaka to your door"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-ink-foreground/75 sm:text-base",
						children: "Every order supports a small team that cares about the details — the fold of a dupatta, the finish on a buckle, the note that arrives with your parcel. We are grateful to customers across Bangladesh who trust Blackwell BD for celebrations, everyday wear and thoughtful gifts."
					})
				]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
