import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as useStore, t as StoreProvider } from "./store-D6gVD-Yl.mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useNavigate, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as ChevronDown, S as Heart, _ as Menu, a as Trash2, b as Mail, c as ShoppingBag, i as Truck, m as Phone, n as X, r as User, t as Youtube, u as Search, w as Facebook, x as Instagram, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as formatBDT, t as cn } from "./format-DqyaZc8U.mjs";
import { i as whatsappUrl, t as WhatsAppIcon } from "./WhatsAppIcon-D-Y99UZ1.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Button } from "./button-DxQ9lLK0.mjs";
import { r as useI18n, t as I18nProvider } from "./i18n-C3NrtDaS.mjs";
import { t as useWhatsAppCheckout } from "./use-whatsapp-checkout-DL8MWZwJ.mjs";
import { t as QuantitySelector } from "./QuantitySelector-D5hcXmka.mjs";
import { t as Route$20 } from "./category._slug-DIFfAIwx.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$21 } from "./product._slug-BYuLD6It.mjs";
import { t as Route$22 } from "./shop-H3pORv8E.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D1o8f7jQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Bk7ZcOPa.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
function LanguageSwitcher({ className, compact = false }) {
	const { locale, setLocale, t } = useI18n();
	const options = [{
		id: "en",
		label: compact ? "EN" : "English"
	}, {
		id: "bn",
		label: compact ? "বাং" : "বাংলা"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"aria-label": t.language,
		className: cn("inline-flex items-center rounded-full border border-border bg-background/80 p-0.5 text-[0.65rem] font-medium uppercase tracking-[0.12em]", className),
		children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": locale === opt.id,
			onClick: () => setLocale(opt.id),
			className: cn("rounded-full px-2.5 py-1 transition-colors", locale === opt.id ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-foreground"),
			children: opt.label
		}, opt.id))
	});
}
var blackwell_mark_default = "/assets/blackwell-mark-DyHjCu84.png";
var blackwell_mark_light_default = "/assets/blackwell-mark-light-B6MePFec.png";
var blackwell_wordmark_default = "/assets/blackwell-wordmark-Dlzt4CqS.png";
var blackwell_wordmark_light_default = "/assets/blackwell-wordmark-light-5yk-ysqt.png";
function Logo({ tone = "dark", className }) {
	const m = tone === "light" ? blackwell_mark_light_default : blackwell_mark_default;
	const w = tone === "light" ? blackwell_wordmark_light_default : blackwell_wordmark_default;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		"aria-label": "Blackwell BD home",
		className: cn("flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: m,
			alt: "",
			width: 36,
			height: 41,
			className: "h-9 w-auto sm:h-10"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: w,
			alt: "Blackwell BD",
			width: 180,
			height: 19,
			className: "h-3.5 w-auto sm:h-[1.05rem]"
		})]
	});
}
function AnnouncementBar() {
	const { t } = useI18n();
	const items = [...t.announcements, ...t.announcements];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden bg-ink text-ink-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-max animate-marquee gap-12 py-2.5 hover:[animation-play-state:paused]",
			children: items.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow flex items-center gap-12 text-[0.62rem] text-ink-foreground/85",
				children: [a, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: "✦"
				})]
			}, i))
		})
	});
}
function SearchDialog({ open, onOpenChange }) {
	const { products } = useStore();
	const { t } = useI18n();
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const term = q.trim().toLowerCase();
		if (!term) return [];
		return products.filter((p) => `${p.name} ${p.description}`.toLowerCase().includes(term)).slice(0, 6);
	}, [q, products]);
	(0, import_react.useEffect)(() => {
		if (!open) setQ("");
	}, [open]);
	const submit = (e) => {
		e.preventDefault();
		onOpenChange(false);
		navigate({
			to: "/shop",
			search: { q: q.trim() || void 0 }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "top-[12%] max-w-2xl translate-y-0 gap-0 p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: t.searchProducts
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "sr-only",
					children: t.searchProducts
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "flex items-center gap-3 border-b border-border px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: t.searchPlaceholder,
						className: "h-16 flex-1 bg-transparent font-display text-xl outline-none placeholder:text-muted-foreground",
						"aria-label": t.searchProducts
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[60vh] overflow-y-auto p-2",
					children: q.trim() === "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-3 text-muted-foreground",
							children: t.popularSearches
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"Panjabi",
								"Saree",
								"Oud",
								"Watch",
								"Tote",
								"Serum"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setQ(s),
								className: "rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-foreground",
								children: s
							}, s))
						})]
					}) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "p-6 text-center text-sm text-muted-foreground",
						children: [
							t.noProductsMatch,
							" \"",
							q,
							"\"."
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$slug",
						params: { slug: p.slug },
						onClick: () => onOpenChange(false),
						className: "flex items-center gap-4 rounded-md p-3 transition-colors hover:bg-sand/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.images[0],
								alt: "",
								className: "h-14 w-12 rounded object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-display text-lg",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: formatBDT(p.price)
							})
						]
					}) }, p.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: submit,
						className: "w-full p-3 text-center text-xs uppercase tracking-[0.18em] text-gold-deep hover:underline",
						children: t.seeAllResults
					}) })] })
				})
			]
		})
	});
}
var navLink = "relative py-2 text-[0.78rem] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100";
function SiteHeader() {
	const { cartCount, wishlist, setCartOpen, categories, session, hydrated } = useStore();
	const { t, locale } = useI18n();
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const catName = (c) => locale === "bn" ? c.nameBn : c.name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: cn("sticky top-0 z-40 border-b transition-all duration-300", scrolled ? "border-border bg-background/90 backdrop-blur-lg shadow-card" : "border-transparent bg-background"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe flex h-[4.5rem] items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "-ml-2 p-2 lg:hidden",
						"aria-label": t.openMenu,
						onClick: () => setMenuOpen(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "mr-auto lg:mr-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mx-auto hidden items-center gap-6 xl:gap-8 lg:flex",
						"aria-label": "Main",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: navLink,
								activeOptions: { exact: true },
								activeProps: { className: "text-foreground after:scale-x-100" },
								children: t.home
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: navLink,
								activeProps: { className: "text-foreground after:scale-x-100" },
								children: t.shopAll
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/categories",
									className: cn(navLink, "flex items-center gap-1"),
									children: [
										t.categories,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-3 gap-3 rounded-lg border border-border bg-card p-4 shadow-luxe",
										children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/category/$slug",
											params: { slug: c.slug },
											className: "group/cat block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "aspect-[4/5] overflow-hidden rounded-md bg-sand",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: c.image,
													alt: "",
													className: "h-full w-full object-cover transition-transform duration-500 group-hover/cat:scale-105",
													loading: "lazy"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 font-display text-base leading-tight",
												children: catName(c)
											})]
										}, c.id))
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { sort: "newest" },
								className: navLink,
								children: t.newIn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { tag: "offer" },
								className: cn(navLink, "text-sale"),
								children: t.offers
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: navLink,
								activeProps: { className: "text-foreground after:scale-x-100" },
								children: t.about
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: navLink,
								activeProps: { className: "text-foreground after:scale-x-100" },
								children: t.contact
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-0.5 sm:gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {
								compact: true,
								className: "mr-1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": t.search,
								onClick: () => setSearchOpen(true),
								className: "rounded-full p-2.5 transition-colors hover:bg-sand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: session ? "/account" : "/login",
								"aria-label": t.account,
								className: "hidden rounded-full p-2.5 transition-colors hover:bg-sand sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wishlist",
								"aria-label": t.wishlist,
								className: "relative hidden rounded-full p-2.5 transition-colors hover:bg-sand sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" }), hydrated && wishlist.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[0.6rem] font-bold text-gold-foreground",
									children: wishlist.length
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								"aria-label": t.openBag,
								onClick: () => setCartOpen(true),
								className: "relative rounded-full p-2.5 transition-colors hover:bg-sand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), hydrated && cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[0.6rem] font-bold text-ink-foreground",
									children: cartCount
								})]
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {
			open: searchOpen,
			onOpenChange: setSearchOpen
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: menuOpen,
			onOpenChange: setMenuOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
				side: "left",
				className: "flex w-[85%] flex-col gap-0 p-0 sm:max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
						className: "sr-only",
						children: t.openMenu
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
						className: "sr-only",
						children: t.openMenu
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border px-6 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, { compact: true })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex-1 overflow-y-auto px-6 py-4",
						onClick: (e) => {
							if (e.target.closest("a")) setMenuOpen(false);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-1 font-display text-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "block py-2",
										children: t.home
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										className: "block py-2",
										children: t.shopAll
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										search: { sort: "newest" },
										className: "block py-2",
										children: t.newIn
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										search: { tag: "offer" },
										className: "block py-2 text-sale",
										children: t.specialOffers
									}) })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-2 mt-6 text-gold-deep",
								children: t.categories
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1",
								children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/category/$slug",
									params: { slug: c.slug },
									className: "flex items-center gap-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.image,
										alt: "",
										className: "h-10 w-10 rounded object-cover"
									}), catName(c)]
								}) }, c.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-2 mt-6 text-gold-deep",
								children: t.help
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/track-order",
										children: t.trackOrder
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										children: t.aboutUs
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: t.contactUs
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/faq",
										children: t.faq
									}) })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 border-t border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: session ? "/account" : "/login",
							onClick: () => setMenuOpen(false),
							className: "flex items-center justify-center gap-2 rounded-md border border-border py-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }),
								" ",
								session ? t.account : t.signIn
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/wishlist",
							onClick: () => setMenuOpen(false),
							className: "flex items-center justify-center gap-2 rounded-md border border-border py-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" }),
								" ",
								t.wishlist
							]
						})]
					})
				]
			})
		})
	] });
}
var blackwell_stacked_light_default = "/assets/blackwell-stacked-light-YHMHX08o.png";
var linkCls = "text-sm text-ink-foreground/65 transition-colors hover:text-gold";
function SiteFooter() {
	const { categories, settings } = useStore();
	const { t, locale } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-ink-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							"aria-label": "Blackwell BD home",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: blackwell_stacked_light_default,
								alt: "Blackwell BD — Fashion, Beauty, Lifestyle",
								width: 180,
								height: 163,
								className: "h-28 w-auto",
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xs text-sm leading-relaxed text-ink-foreground/65",
							children: t.footerBlurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex gap-2",
							children: [[
								{
									Icon: Facebook,
									label: "Facebook",
									href: "https://facebook.com"
								},
								{
									Icon: Instagram,
									label: "Instagram",
									href: "https://instagram.com"
								},
								{
									Icon: Youtube,
									label: "YouTube",
									href: "https://youtube.com"
								}
							].map(({ Icon, label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": label,
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/15 transition-colors hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappUrl(settings.whatsappNumber),
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "WhatsApp",
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/15 transition-colors hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5 text-gold",
						children: t.shop
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: linkCls,
							children: t.shopAll
						}) }), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: c.slug },
							className: linkCls,
							children: locale === "bn" ? c.nameBn : c.name
						}) }, c.id))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5 text-gold",
						children: t.customerCare
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/track-order",
								className: linkCls,
								children: t.trackOrder
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shipping-policy",
								className: linkCls,
								children: t.shippingDelivery
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/return-policy",
								className: linkCls,
								children: t.returnRefund
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/exchange-policy",
								className: linkCls,
								children: t.exchangePolicy
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cancellation-policy",
								className: linkCls,
								children: t.cancellationPolicy
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/faq",
								className: linkCls,
								children: t.faq
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5 text-gold",
						children: t.company
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: linkCls,
								children: t.aboutUs
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: linkCls,
								children: t.contactUs
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/account",
								className: linkCls,
								children: t.myAccount
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/wishlist",
								className: linkCls,
								children: t.wishlist
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy-policy",
								className: linkCls,
								children: t.privacyPolicy
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: linkCls,
								children: t.terms
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5 text-gold",
						children: t.getInTouch
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-ink-foreground/65",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), settings.address]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:+${settings.whatsappNumber}`,
									className: "hover:text-gold",
									children: settings.phoneDisplay
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${settings.email}`,
									className: "break-all hover:text-gold",
									children: settings.email
								})]
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-foreground/50 md:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Blackwell BD. ",
						t.allRights
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-1",
							children: t.weAccept
						}), [
							t.cashOnDelivery,
							"bKash",
							"Nagad"
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded border border-ink-foreground/15 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-ink-foreground/75",
							children: m
						}, m))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "hover:text-gold",
						children: t.storeAdmin
					})
				]
			})
		})]
	});
}
function CartDrawer() {
	const { cartOpen, setCartOpen, cartLines, subtotal, shipping, total, updateQty, removeFromCart, settings, cartCount } = useStore();
	const { t, tf } = useI18n();
	const { orderUrl } = useWhatsAppCheckout();
	const navigate = useNavigate();
	const openedAt = (0, import_react.useRef)(0);
	const remaining = settings.freeShippingThreshold - subtotal;
	const progress = settings.freeShippingThreshold > 0 ? Math.min(100, subtotal / settings.freeShippingThreshold * 100) : 100;
	(0, import_react.useEffect)(() => {
		if (cartOpen) openedAt.current = Date.now();
	}, [cartOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: cartOpen,
		onOpenChange: setCartOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "right",
			className: "flex w-full flex-col gap-0 p-0 sm:max-w-md",
			onOpenAutoFocus: (e) => e.preventDefault(),
			onPointerDownOutside: (e) => {
				if (Date.now() - openedAt.current < 400) e.preventDefault();
			},
			onInteractOutside: (e) => {
				if (Date.now() - openedAt.current < 400) e.preventDefault();
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
				className: "border-b border-border px-6 py-5 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
					className: "font-display text-2xl font-medium",
					children: [
						t.yourBag,
						" (",
						cartCount,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
					className: "sr-only",
					children: t.yourBag
				})]
			}), cartLines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-16 w-16 items-center justify-center rounded-full bg-sand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-7 w-7 text-gold-deep" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: t.bagEmpty
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t.bagEmptyHint
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ink",
						size: "lg",
						onClick: () => {
							setCartOpen(false);
							navigate({ to: "/shop" });
						},
						children: t.startShopping
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				settings.freeShippingThreshold > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border bg-sand/50 px-6 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 text-gold-deep" }), remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: tf(t.addMoreForFree, { amount: formatBDT(remaining) }).split(formatBDT(remaining)).map((part, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [part, i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: formatBDT(remaining) })] }, i)) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.freeDeliveryUnlocked })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-1 overflow-hidden rounded-full bg-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-gold-gradient transition-all",
							style: { width: `${progress}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex-1 divide-y divide-border overflow-y-auto px-6",
					children: cartLines.map(({ item, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: product.slug },
							onClick: () => setCartOpen(false),
							className: "h-24 w-20 shrink-0 overflow-hidden rounded-md bg-sand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.images[0],
								alt: product.name,
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "line-clamp-2 font-display text-base leading-snug",
										children: product.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"aria-label": `${t.remove} ${product.name}`,
										onClick: () => removeFromCart(item.key),
										className: "text-muted-foreground hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-muted-foreground",
									children: [item.size && `${t.size} ${item.size}`, item.color].filter(Boolean).join(" · ")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex items-center justify-between pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
										size: "sm",
										value: item.qty,
										onChange: (v) => updateQty(item.key, v),
										max: Math.max(1, product.stock)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										children: formatBDT(product.price * item.qty)
									})]
								})
							]
						})]
					}, item.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 border-t border-border bg-card px-6 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: t.subtotal
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: formatBDT(subtotal)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: t.deliveryEstimated
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: shipping === 0 ? t.free : formatBDT(shipping)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between border-t border-border pt-3 text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: t.total
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: formatBDT(total)
							})]
						}),
						orderUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "whatsapp",
							size: "lg",
							className: "w-full",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: orderUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => setCartOpen(false),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }),
									" ",
									t.checkout
								]
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "whatsapp",
							size: "lg",
							className: "w-full",
							disabled: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }),
								" ",
								t.checkout
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cart",
							onClick: () => setCartOpen(false),
							className: "block text-center text-xs uppercase tracking-[0.18em] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
							children: t.viewFullBag
						})
					]
				})
			] })]
		})
	});
}
function WhatsAppFloat() {
	const { settings } = useStore();
	const href = whatsappUrl(settings.whatsappNumber, `Hello ${settings.storeName}! I have a question about your products.`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with us on WhatsApp",
		className: "group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp p-3.5 text-whatsapp-foreground shadow-luxe animate-pulse-ring transition-transform hover:scale-105 sm:bottom-7 sm:right-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-7 w-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 group-hover:max-w-40 group-hover:pr-2 sm:inline",
			children: "Order on WhatsApp"
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: t.pageNotFound
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t.pageNotFoundText
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t.goHome
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	const { t } = useI18n();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: t.pageDidntLoad
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t.pageDidntLoadText
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t.tryAgain
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: t.goHome
					})]
				})
			]
		})
	});
}
var Route$19 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Blackwell BD — Fashion, Beauty & Lifestyle in Bangladesh" },
			{
				name: "description",
				content: "Shop premium fashion, beauty and lifestyle at Blackwell BD. Cash on Delivery across Bangladesh, bKash & Nagad, and instant WhatsApp ordering."
			},
			{
				name: "author",
				content: "Blackwell BD"
			},
			{
				name: "theme-color",
				content: "#141210"
			},
			{
				property: "og:site_name",
				content: "Blackwell BD"
			},
			{
				property: "og:title",
				content: "Blackwell BD — Fashion, Beauty & Lifestyle"
			},
			{
				property: "og:description",
				content: "Premium fashion, beauty and lifestyle delivered across Bangladesh."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&family=Noto+Sans+Bengali:wght@300;400;500;600;700&family=Noto+Serif+Bengali:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "bn",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$19.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-center",
			richColors: true,
			closeButton: true
		})] }) })
	});
}
function StoreChrome({ children }) {
	if (useRouterState({ select: (s) => s.location.pathname.startsWith("/admin") })) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
var $$splitComponentImporter$18 = () => import("./routes-CVcfNUit.mjs");
var Route$18 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Blackwell BD — Premium Fashion, Beauty & Lifestyle Store in Bangladesh" },
		{
			name: "description",
			content: "Discover kurtis, panjabis, Jamdani sarees, oud perfumes, watches and home décor. Cash on Delivery nationwide, bKash & Nagad, and WhatsApp ordering."
		},
		{
			property: "og:title",
			content: "Blackwell BD — Premium Fashion, Beauty & Lifestyle"
		},
		{
			property: "og:description",
			content: "Shop the new collection with Cash on Delivery across all 64 districts of Bangladesh."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./about-ji2UlKZg.mjs");
var Route$17 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Blackwell BD" },
		{
			name: "description",
			content: "Blackwell BD is a premium fashion, beauty and lifestyle store from Dhaka — curated pieces, nationwide Cash on Delivery, and WhatsApp ordering across Bangladesh."
		},
		{
			property: "og:title",
			content: "About Us — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Our story, values and promise to customers across Bangladesh."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./account-DOYU_91v.mjs");
var Route$16 = createFileRoute("/account")({
	head: () => ({ meta: [
		{ title: "My Account — Blackwell BD" },
		{
			name: "description",
			content: "Your Blackwell BD profile and orders."
		},
		{
			property: "og:title",
			content: "My Account — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Your Blackwell BD profile and orders."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./admin-aH4Isdg5.mjs");
var Route$15 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Store Admin — Blackwell BD" },
		{
			name: "description",
			content: "Manage Blackwell BD products, orders and settings."
		},
		{
			property: "og:title",
			content: "Store Admin — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Manage Blackwell BD products, orders and settings."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./cancellation-policy-HlfWsajg.mjs");
var Route$14 = createFileRoute("/cancellation-policy")({
	head: () => ({ meta: [
		{ title: "Cancellation Policy — Blackwell BD" },
		{
			name: "description",
			content: "How to cancel a Blackwell BD order."
		},
		{
			property: "og:title",
			content: "Cancellation Policy — Blackwell BD"
		},
		{
			property: "og:description",
			content: "How to cancel a Blackwell BD order."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./cart-CqYkHIAO.mjs");
var Route$13 = createFileRoute("/cart")({
	head: () => ({ meta: [
		{ title: "Shopping Cart — Blackwell BD" },
		{
			name: "description",
			content: "Review your Blackwell BD shopping bag."
		},
		{
			property: "og:title",
			content: "Shopping Cart — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Review your bag."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./categories-BzvX5r73.mjs");
var Route$12 = createFileRoute("/categories")({
	head: () => ({ meta: [
		{ title: "Categories — Blackwell BD" },
		{
			name: "description",
			content: "Shop Blackwell BD by category."
		},
		{
			property: "og:title",
			content: "Categories — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Fashion, beauty, accessories, jewelry and home."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./checkout-DqncNiBu.mjs");
var Route$11 = createFileRoute("/checkout")({
	head: () => ({ meta: [
		{ title: "Checkout — Blackwell BD" },
		{
			name: "description",
			content: "Complete your Blackwell BD order on WhatsApp with items, quantities and total."
		},
		{
			property: "og:title",
			content: "Checkout — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Order on WhatsApp with your full cart details."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./contact-D4sXkH1P.mjs");
var Route$10 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Blackwell BD" },
		{
			name: "description",
			content: "Contact Blackwell BD on WhatsApp +880 1714-920684 or email blackwellbd.official@gmail.com. Store hours, address and order support for Bangladesh."
		},
		{
			property: "og:title",
			content: "Contact Us — Blackwell BD"
		},
		{
			property: "og:description",
			content: "WhatsApp, phone and email support for Blackwell BD orders across Bangladesh."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./exchange-policy-ByaVuejV.mjs");
var Route$9 = createFileRoute("/exchange-policy")({
	head: () => ({ meta: [
		{ title: "Exchange Policy — Blackwell BD" },
		{
			name: "description",
			content: "How to exchange a product at Blackwell BD."
		},
		{
			property: "og:title",
			content: "Exchange Policy — Blackwell BD"
		},
		{
			property: "og:description",
			content: "How to exchange a product at Blackwell BD."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./faq-CqWZqUVo.mjs");
var Route$8 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ — Blackwell BD" },
		{
			name: "description",
			content: "Answers to common questions about orders, delivery and returns."
		},
		{
			property: "og:title",
			content: "FAQ — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Answers to common questions about orders, delivery and returns."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./login-5WTrv1a4.mjs");
var Route$7 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: "Customer Login — Blackwell BD" },
		{
			name: "description",
			content: "Sign in to your Blackwell BD account."
		},
		{
			property: "og:title",
			content: "Customer Login — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Sign in to your Blackwell BD account."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./privacy-policy-CVogSamb.mjs");
var Route$6 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy — Blackwell BD" },
		{
			name: "description",
			content: "How Blackwell BD handles your information."
		},
		{
			property: "og:title",
			content: "Privacy Policy — Blackwell BD"
		},
		{
			property: "og:description",
			content: "How Blackwell BD handles your information."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./register-CSatzzqj.mjs");
var Route$5 = createFileRoute("/register")({
	head: () => ({ meta: [
		{ title: "Register — Blackwell BD" },
		{
			name: "description",
			content: "Create your Blackwell BD account."
		},
		{
			property: "og:title",
			content: "Register — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Create your Blackwell BD account."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./return-policy-BNXEZ5xo.mjs");
var Route$4 = createFileRoute("/return-policy")({
	head: () => ({ meta: [
		{ title: "Return & Refund Policy — Blackwell BD" },
		{
			name: "description",
			content: "How returns and refunds work at Blackwell BD."
		},
		{
			property: "og:title",
			content: "Return & Refund Policy — Blackwell BD"
		},
		{
			property: "og:description",
			content: "How returns and refunds work at Blackwell BD."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./shipping-policy-D2RNGMdr.mjs");
var Route$3 = createFileRoute("/shipping-policy")({
	head: () => ({ meta: [
		{ title: "Shipping & Delivery Policy — Blackwell BD" },
		{
			name: "description",
			content: "Delivery times and charges across Bangladesh."
		},
		{
			property: "og:title",
			content: "Shipping & Delivery Policy — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Delivery times and charges across Bangladesh."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./terms-DofHQtzH.mjs");
var Route$2 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions — Blackwell BD" },
		{
			name: "description",
			content: "The terms for shopping at Blackwell BD."
		},
		{
			property: "og:title",
			content: "Terms & Conditions — Blackwell BD"
		},
		{
			property: "og:description",
			content: "The terms for shopping at Blackwell BD."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./track-order-BeMUXRKp.mjs");
var Route$1 = createFileRoute("/track-order")({
	head: () => ({ meta: [
		{ title: "Track My Order — Blackwell BD" },
		{
			name: "description",
			content: "Check the status of your Blackwell BD order."
		},
		{
			property: "og:title",
			content: "Track My Order — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Check the status of your Blackwell BD order."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./wishlist-hRo7HwyT.mjs");
var Route = createFileRoute("/wishlist")({
	head: () => ({ meta: [
		{ title: "Wishlist — Blackwell BD" },
		{
			name: "description",
			content: "Your saved Blackwell BD products."
		},
		{
			property: "og:title",
			content: "Wishlist — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Your saved products."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$18.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$19
	}),
	AboutRoute: Route$17.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$19
	}),
	AccountRoute: Route$16.update({
		id: "/account",
		path: "/account",
		getParentRoute: () => Route$19
	}),
	AdminRoute: Route$15.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$19
	}),
	CancellationPolicyRoute: Route$14.update({
		id: "/cancellation-policy",
		path: "/cancellation-policy",
		getParentRoute: () => Route$19
	}),
	CartRoute: Route$13.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$19
	}),
	CategoriesRoute: Route$12.update({
		id: "/categories",
		path: "/categories",
		getParentRoute: () => Route$19
	}),
	CheckoutRoute: Route$11.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$19
	}),
	ContactRoute: Route$10.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$19
	}),
	ExchangePolicyRoute: Route$9.update({
		id: "/exchange-policy",
		path: "/exchange-policy",
		getParentRoute: () => Route$19
	}),
	FaqRoute: Route$8.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$19
	}),
	LoginRoute: Route$7.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$19
	}),
	PrivacyPolicyRoute: Route$6.update({
		id: "/privacy-policy",
		path: "/privacy-policy",
		getParentRoute: () => Route$19
	}),
	RegisterRoute: Route$5.update({
		id: "/register",
		path: "/register",
		getParentRoute: () => Route$19
	}),
	ReturnPolicyRoute: Route$4.update({
		id: "/return-policy",
		path: "/return-policy",
		getParentRoute: () => Route$19
	}),
	ShippingPolicyRoute: Route$3.update({
		id: "/shipping-policy",
		path: "/shipping-policy",
		getParentRoute: () => Route$19
	}),
	ShopRoute: Route$22.update({
		id: "/shop",
		path: "/shop",
		getParentRoute: () => Route$19
	}),
	TermsRoute: Route$2.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$19
	}),
	TrackOrderRoute: Route$1.update({
		id: "/track-order",
		path: "/track-order",
		getParentRoute: () => Route$19
	}),
	WishlistRoute: Route.update({
		id: "/wishlist",
		path: "/wishlist",
		getParentRoute: () => Route$19
	}),
	CategorySlugRoute: Route$20.update({
		id: "/category/$slug",
		path: "/category/$slug",
		getParentRoute: () => Route$19
	}),
	ProductSlugRoute: Route$21.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$19
	})
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
