import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as cat_bags_default, o as useStore, r as cat_beauty_default } from "./store-D6gVD-Yl.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, D as ChevronLeft, E as ChevronRight, d as RotateCcw, f as Quote, i as Truck, k as BadgeCheck, l as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as cn } from "./format-DqyaZc8U.mjs";
import { t as Button } from "./button-DxQ9lLK0.mjs";
import { r as useI18n } from "./i18n-C3NrtDaS.mjs";
import { t as Rating } from "./Rating-Dyry1IkP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as ProductCard } from "./ProductCard-B8rPbcWe.mjs";
import { t as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CVcfNUit.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroSlider() {
	const { banners } = useStore();
	const { locale, t } = useI18n();
	const [index, setIndex] = (0, import_react.useState)(0);
	const count = banners.length;
	(0, import_react.useEffect)(() => {
		if (count < 2) return;
		const timer = setInterval(() => setIndex((i) => (i + 1) % count), 7e3);
		return () => clearInterval(timer);
	}, [count, index]);
	(0, import_react.useEffect)(() => {
		if (index >= count) setIndex(0);
	}, [count, index]);
	if (count === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[78vh] min-h-[520px] max-h-[860px] overflow-hidden bg-ink",
		"aria-roledescription": "carousel",
		"aria-label": "Featured collections",
		children: [banners.map((b, i) => {
			const eyebrow = locale === "bn" ? b.eyebrowBn ?? b.eyebrow : b.eyebrow;
			const title = locale === "bn" ? b.titleBn ?? b.title : b.title;
			const subtitle = locale === "bn" ? b.subtitleBn ?? b.subtitle : b.subtitle;
			const ctaLabel = locale === "bn" ? b.ctaLabelBn ?? b.ctaLabel : b.ctaLabel;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("absolute inset-0 transition-opacity duration-1000", i === index ? "opacity-100" : "pointer-events-none opacity-0"),
				"aria-hidden": i !== index,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: b.image,
						alt: "",
						width: 1920,
						height: 1088,
						loading: i === 0 ? "eager" : "lazy",
						className: cn("h-full w-full object-cover object-[70%_center]", i === index && "animate-ken-burns")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-fade" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent sm:hidden" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "container-luxe absolute inset-0 flex items-end pb-20 sm:items-center sm:pb-0",
						children: i === index && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl text-ink-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("mb-5 text-gold animate-fade-up", locale === "bn" ? "font-sans text-sm font-medium tracking-normal normal-case" : "eyebrow"),
									children: eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-5xl leading-[1.02] sm:text-6xl lg:text-7xl animate-fade-up [animation-delay:120ms]",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/80 sm:text-base animate-fade-up [animation-delay:240ms]",
									children: subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:360ms]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: b.ctaHref,
										className: cn("inline-flex h-14 items-center justify-center rounded-md bg-gold-gradient px-10 text-[0.8rem] font-medium text-gold-foreground shadow-gold transition-all hover:-translate-y-0.5 hover:brightness-110", locale === "bn" ? "normal-case tracking-normal" : "uppercase tracking-[0.2em]"),
										children: ctaLabel
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										className: cn("inline-flex h-14 items-center justify-center rounded-md border border-ink-foreground/50 px-10 text-[0.8rem] font-medium text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink", locale === "bn" ? "normal-case tracking-normal" : "uppercase tracking-[0.2em]"),
										children: t.shopNow
									})]
								})
							]
						})
					})
				]
			}, b.id);
		}), count > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe absolute inset-x-0 bottom-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: banners.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Show slide ${i + 1}`,
					onClick: () => setIndex(i),
					className: cn("h-1 rounded-full transition-all duration-500", i === index ? "w-10 bg-gold" : "w-5 bg-ink-foreground/40 hover:bg-ink-foreground/70")
				}, b.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden gap-2 sm:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Previous slide",
					onClick: () => setIndex((index - 1 + count) % count),
					className: "flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/30 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Next slide",
					onClick: () => setIndex((index + 1) % count),
					className: "flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/30 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
				})]
			})]
		})]
	});
}
function endOfWeek() {
	const d = /* @__PURE__ */ new Date();
	const diff = (5 - d.getDay() + 7) % 7 || 7;
	return new Date(d.getFullYear(), d.getMonth(), d.getDate() + diff, 23, 59, 59).getTime();
}
function Countdown() {
	const [left, setLeft] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const target = endOfWeek();
		const tick = () => setLeft(Math.max(0, target - Date.now()));
		tick();
		const t = setInterval(tick, 1e3);
		return () => clearInterval(t);
	}, []);
	const ms = left ?? 0;
	const parts = [
		{
			label: "Days",
			v: Math.floor(ms / 864e5)
		},
		{
			label: "Hours",
			v: Math.floor(ms / 36e5 % 24)
		},
		{
			label: "Mins",
			v: Math.floor(ms / 6e4 % 60)
		},
		{
			label: "Secs",
			v: Math.floor(ms / 1e3 % 60)
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-3",
		"aria-label": "Offer ends in",
		children: parts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-16 flex-col items-center rounded-md border border-gold/30 bg-ink-foreground/5 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-3xl tabular-nums text-gold",
				children: left === null ? "--" : String(p.v).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow mt-1 text-[0.55rem] text-ink-foreground/60",
				children: p.label
			})]
		}, p.label))
	});
}
function SectionHeading({ eyebrow, title, description, action, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mb-8 flex flex-col gap-4 sm:mb-10", align === "center" ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn(align === "center" && "max-w-2xl"),
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3 text-gold-deep",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: description
				})
			]
		}), action]
	});
}
/** Homepage customer love section — 20 verified-style reviews. */
var customerReviews = [
	{
		id: "r01",
		name: "Nusrat Jahan",
		city: "Dhanmondi, Dhaka",
		text: "The emerald kurti set is even more beautiful in person. The embroidery is so fine — I got compliments all through Eid. Delivery came the next day!",
		product: "Emerald Silk Kurti Set",
		rating: 5
	},
	{
		id: "r02",
		name: "Tanvir Ahmed",
		city: "Chattogram",
		text: "Ordered the panjabi and chronograph over WhatsApp — they confirmed within minutes and it arrived in 3 days with Cash on Delivery. Premium packaging too.",
		product: "Ivory Cotton Panjabi",
		rating: 5
	},
	{
		id: "r03",
		name: "Farzana Rahman",
		city: "Sylhet",
		text: "Oud Royale lasts the whole day. Finally a Bangladeshi store that feels truly luxurious from browsing to unboxing.",
		product: "Oud Royale Parfum",
		rating: 5
	},
	{
		id: "r04",
		name: "Rafiul Hasan",
		city: "Mirpur, Dhaka",
		text: "Bought the leather tote as a gift for my wife. The stitching and hardware feel expensive — she uses it every day to the office.",
		product: "Heritage Leather Tote",
		rating: 5
	},
	{
		id: "r05",
		name: "Sadia Islam",
		city: "Gazipur",
		text: "Jamdani saree quality is outstanding. Soft, lightweight and the gold border catches light beautifully. Blouse piece was generous.",
		product: "Handwoven Jamdani Cotton Saree",
		rating: 5
	},
	{
		id: "r06",
		name: "Imran Chowdhury",
		city: "Rajshahi",
		text: "First time ordering online from Blackwell. WhatsApp support answered every size question patiently. Boots fit true to size.",
		product: "Chelsea Leather Boots",
		rating: 5
	},
	{
		id: "r07",
		name: "Mehnaz Akter",
		city: "Uttara, Dhaka",
		text: "The brightening serum has visibly calmed my skin in two weeks. Packaging looks like a boutique brand, not a random marketplace seller.",
		product: "Vitamin C Brightening Serum",
		rating: 5
	},
	{
		id: "r08",
		name: "Karim Ullah",
		city: "Khulna",
		text: "Chronograph watch arrived well packed with papers. Looks sharp with both panjabi and formal shirts. Worth every taka.",
		product: "Noir Chronograph Watch",
		rating: 5
	},
	{
		id: "r09",
		name: "Anika Sultana",
		city: "Narayanganj",
		text: "Ordered three hijabs for my sister's wedding. Colours matched the photos exactly and fabric doesn't slip. Will order again.",
		product: "Modal Everyday Hijab",
		rating: 4
	},
	{
		id: "r10",
		name: "Shahriar Kabir",
		city: "Cumilla",
		text: "Cash on Delivery made me confident to try them. Polo shirts are soft, hold shape after wash, and shipping to Cumilla was only 4 days.",
		product: "Piqué Cotton Polo",
		rating: 5
	},
	{
		id: "r11",
		name: "Lamia Noor",
		city: "Banani, Dhaka",
		text: "Velvet lipstick shade is rich without drying my lips. Got so many DMs asking where I bought it — sent them straight to Blackwell.",
		product: "Velvet Matte Lipstick",
		rating: 5
	},
	{
		id: "r12",
		name: "Abdullah Al Mamun",
		city: "Barishal",
		text: "Wallet is slim but holds cards securely. Genuine leather smell, neat stitching. Perfect Eid gift for my brother.",
		product: "Fold Leather Wallet",
		rating: 5
	},
	{
		id: "r13",
		name: "Tasnim Rahman",
		city: "Mymensingh",
		text: "Co-ord set photos don't lie — the fit is flattering and fabric breathes in humid weather. Exchanged one size via WhatsApp, no hassle.",
		product: "Linen Co-ord Set",
		rating: 5
	},
	{
		id: "r14",
		name: "Nayeem Hossain",
		city: "Bogura",
		text: "Sunglasses look premium and the UV claim seems solid for outdoor rides. Case and cloth included. Happy customer from Bogura.",
		product: "Aviator Sunglasses",
		rating: 4
	},
	{
		id: "r15",
		name: "Rumana Begum",
		city: "Chittagong Hill Tracts",
		text: "Worried about delivery to our area — they still got the candle set to us safely. Scents are elegant, not overpowering.",
		product: "Amber Soy Candle Set",
		rating: 5
	},
	{
		id: "r16",
		name: "Fahim Reza",
		city: "Mohakhali, Dhaka",
		text: "Crossbody bag is perfect for weekends. Zippers feel solid and the strap adjusts easily. Ordered a second colour for my fiancée.",
		product: "City Crossbody Bag",
		rating: 5
	},
	{
		id: "r17",
		name: "Jannatul Ferdous",
		city: "Jessore",
		text: "Nakshi kantha cushion covers are pure art. Colours are vibrant and the running stitch is authentic. Proud to display them in our living room.",
		product: "Nakshi Kantha Cushion Cover",
		rating: 5
	},
	{
		id: "r18",
		name: "Omar Faruk",
		city: "Sylhet",
		text: "Diffuser oil set filled our apartment with a soft oud note. Refills would be great — for now we're already planning a reorder.",
		product: "Oud Reed Diffuser",
		rating: 4
	},
	{
		id: "r19",
		name: "Samira Haque",
		city: "Gulshan, Dhaka",
		text: "Gold-plated earrings arrived in a beautiful box. Lightweight for all-day wear and haven't tarnished after a month. Customer care is warm.",
		product: "Pearl Drop Earrings",
		rating: 5
	},
	{
		id: "r20",
		name: "Mahbub Alam",
		city: "Rangpur",
		text: "From first WhatsApp reply to doorstep delivery, everything felt organised. Tea set looks museum-quality on our dining table. Highly recommend Blackwell BD.",
		product: "Porcelain Tea Set",
		rating: 5
	}
];
function ReviewsSection() {
	const [page, setPage] = (0, import_react.useState)(0);
	const totalPages = Math.ceil(customerReviews.length / 6);
	const pageReviews = (0, import_react.useMemo)(() => {
		const start = page * 6;
		return customerReviews.slice(start, start + 6);
	}, [page]);
	const go = (next) => {
		setPage(Math.min(totalPages - 1, Math.max(0, next)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-card py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "center",
					eyebrow: "Customer love",
					title: "Rated 4.8 out of 5 by our customers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: pageReviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "relative flex flex-col rounded-lg border border-border bg-background p-8 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-gold/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
								value: r.rating,
								className: "mt-4"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-4 flex-1 font-display text-xl leading-relaxed",
								children: [
									"“",
									r.text,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 flex items-center gap-3 border-t border-border pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient font-display text-lg text-gold-foreground",
									children: r.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										r.city,
										" · Bought ",
										r.product
									]
								})] })]
							})
						]
					}, r.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: [
							"Page ",
							page + 1,
							" of ",
							totalPages,
							" · ",
							customerReviews.length,
							" reviews"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Previous reviews",
								disabled: page === 0,
								onClick: () => go(page - 1),
								className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground disabled:pointer-events-none disabled:opacity-35",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}),
							Array.from({ length: totalPages }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `Go to reviews page ${i + 1}`,
								"aria-current": i === page ? "page" : void 0,
								onClick: () => go(i),
								className: cn("inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-xs font-medium transition-colors", i === page ? "border-ink bg-ink text-ink-foreground" : "border-border hover:border-foreground"),
								children: i + 1
							}, i)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Next reviews",
								disabled: page >= totalPages - 1,
								onClick: () => go(page + 1),
								className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground disabled:pointer-events-none disabled:opacity-35",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							})
						]
					})]
				})
			]
		})
	});
}
var emailSchema = stringType().trim().email().max(255);
function Newsletter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const submit = (e) => {
		e.preventDefault();
		const parsed = emailSchema.safeParse(email);
		if (!parsed.success) {
			toast.error("Please enter a valid email address");
			return;
		}
		try {
			const list = JSON.parse(localStorage.getItem("bw:newsletter") ?? "[]");
			if (!list.includes(parsed.data)) localStorage.setItem("bw:newsletter", JSON.stringify([...list, parsed.data]));
		} catch {}
		toast.success("You're on the list", { description: "We'll share new drops and members-only offers with you." });
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink-gradient text-ink-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:22px_22px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe relative grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3 text-gold",
					children: "The Blackwell Circle"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl leading-tight sm:text-5xl",
					children: "Be first to the new collection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-sm leading-relaxed text-ink-foreground/70",
					children: "Early access to new drops, members-only offers and Eid edits — straight to your inbox. No spam, ever."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "flex w-full flex-col gap-3 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "newsletter-email",
						className: "sr-only",
						children: "Email address"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "newsletter-email",
						type: "email",
						required: true,
						maxLength: 255,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "Your email address",
						className: "h-14 flex-1 rounded-md border border-ink-foreground/20 bg-ink-foreground/5 px-5 text-sm text-ink-foreground outline-none transition-colors placeholder:text-ink-foreground/45 focus:border-gold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "gold",
						size: "xl",
						children: "Subscribe"
					})
				]
			})]
		})]
	});
}
var trust = [
	{
		Icon: Truck,
		title: "Nationwide Delivery",
		text: "1–2 days in Dhaka, 3–5 days elsewhere"
	},
	{
		Icon: ShieldCheck,
		title: "Cash on Delivery",
		text: "Pay when your order arrives"
	},
	{
		Icon: RotateCcw,
		title: "7-Day Easy Returns",
		text: "Hassle-free exchanges & refunds"
	},
	{
		Icon: BadgeCheck,
		title: "100% Authentic",
		text: "Quality-checked before dispatch"
	}
];
function byTag(products, tag, n) {
	return products.filter((p) => p.tags.includes(tag)).slice(0, n);
}
function ProductGrid({ products }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4",
		children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
	});
}
function ViewAll({ to, search, label = "View all" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		search: search ?? {},
		className: "group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground",
		children: [
			label,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
		]
	});
}
function PromoBody({ img, eyebrow, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: img,
			alt: "",
			loading: "lazy",
			className: "absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[1.2s] group-hover:scale-105"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative p-8 text-ink-foreground sm:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-4xl sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-sm text-sm text-ink-foreground/75",
					children: text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-6 inline-flex h-12 items-center rounded-md bg-ink-foreground px-7 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-ink transition-colors group-hover:bg-gold",
					children: "Shop now"
				})
			]
		})
	] });
}
function HomePage() {
	const { products, categories } = useStore();
	const newest = [...products].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlider, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-luxe grid grid-cols-2 gap-6 py-8 lg:grid-cols-4",
				children: trust.map(({ Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-gold-deep" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs leading-relaxed text-muted-foreground",
						children: text
					})] })]
				}, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-20 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Shop by category",
				title: "Curated for every part of you",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/categories",
					className: "group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]",
					children: ["All categories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3",
				children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/category/$slug",
					params: { slug: c.slug },
					className: `group relative overflow-hidden rounded-lg bg-sand ${i === 0 ? "lg:row-span-2" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: c.name,
							width: 768,
							height: 960,
							loading: "lazy",
							className: `h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 ${i === 0 ? "aspect-[4/5] lg:aspect-auto" : "aspect-[4/5] lg:aspect-[5/4]"}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-4 text-ink-foreground sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow hidden text-[0.6rem] text-gold sm:block",
									children: c.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-xl leading-tight sm:text-3xl",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-3 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-ink-foreground/85 transition-all group-hover:gap-3",
									children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						})
					]
				}, c.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe pb-20 sm:pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Trending now",
				title: "What Bangladesh is wearing",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewAll, {
					to: "/shop",
					search: { tag: "trending" }
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products: byTag(products, "trending", 8) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe grid gap-4 pb-20 sm:gap-6 sm:pb-24 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				search: { tag: "offer" },
				className: "group relative flex min-h-[340px] items-end overflow-hidden rounded-lg bg-ink sm:min-h-[420px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoBody, {
					img: cat_bags_default,
					eyebrow: "Up to 20% off",
					title: "The Leather Edit",
					text: "Totes, crossbodies & wallets in genuine leather."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/category/$slug",
				params: { slug: "beauty" },
				className: "group relative flex min-h-[340px] items-end overflow-hidden rounded-lg bg-ink sm:min-h-[420px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoBody, {
					img: cat_beauty_default,
					eyebrow: "New season",
					title: "Beauty & Fragrance",
					text: "Brightening serums, velvet lips & signature oud."
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sand/50 py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Best sellers",
					title: "Loved by thousands",
					description: "Our most-ordered pieces, rated by customers across the country.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewAll, {
						to: "/shop",
						search: { tag: "bestseller" }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products: byTag(products, "bestseller", 8) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink-gradient py-20 text-ink-foreground sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Special offers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-4xl leading-tight sm:text-5xl",
							children: [
								"The Weekly ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold-gradient",
									children: "Gold"
								}),
								" Sale"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70",
							children: "Handpicked favourites at up to 25% off — this week only, while stock lasts."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							search: { tag: "offer" },
							className: "mt-8 inline-flex h-14 items-center justify-center rounded-md bg-gold-gradient px-10 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-gold-foreground shadow-gold transition-all hover:-translate-y-0.5",
							children: "Shop all offers"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:col-span-8 lg:grid-cols-3 [&_.text-muted-foreground]:text-ink-foreground/55",
					children: byTag(products, "offer", 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-20 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Just landed",
				title: "New arrivals",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewAll, {
					to: "/shop",
					search: { sort: "newest" }
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { products: newest })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
	] });
}
//#endregion
export { HomePage as component };
