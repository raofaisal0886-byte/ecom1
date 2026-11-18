import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as useRouter, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useNavigate, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, C as HeartHandshake, D as ChevronLeft, E as ChevronRight, O as ChevronDown, S as Heart, T as Clock3, _ as Menu, a as Trash2, b as Mail, c as ShoppingBag, d as RotateCcw, f as Quote, g as MessageCircle, h as Minus, i as Truck, k as BadgeCheck, l as ShieldCheck, m as Phone, n as X, o as Star, p as Plus, r as User, s as Sparkles, t as Youtube, u as Search, v as MapPinned, w as Facebook, x as Instagram, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster$1 } from "../_libs/sonner.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as stringType } from "../_libs/zod.mjs";
//#region src/styles.css?transform-only
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-0hknGw4e.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
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
//#endregion
//#region src/lib/i18n.tsx
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "bw:locale";
var dictionaries = {
	en: {
		langName: "English",
		langShort: "EN",
		home: "Home",
		shopAll: "Shop All",
		categories: "Categories",
		newIn: "New In",
		offers: "Offers",
		about: "About",
		contact: "Contact",
		search: "Search",
		account: "Account",
		signIn: "Sign in",
		wishlist: "Wishlist",
		openBag: "Open bag",
		openMenu: "Open menu",
		searchProducts: "Search products",
		searchPlaceholder: "Search kurtis, watches, perfume…",
		popularSearches: "Popular searches",
		noProductsMatch: "No products match",
		seeAllResults: "See all results",
		specialOffers: "Special Offers",
		help: "Help",
		trackOrder: "Track My Order",
		aboutUs: "About Us",
		contactUs: "Contact Us",
		faq: "FAQ",
		shop: "Shop",
		customerCare: "Customer Care",
		company: "Company",
		getInTouch: "Get in touch",
		shippingDelivery: "Shipping & Delivery",
		returnRefund: "Return & Refund",
		exchangePolicy: "Exchange Policy",
		cancellationPolicy: "Cancellation Policy",
		myAccount: "My Account",
		privacyPolicy: "Privacy Policy",
		terms: "Terms & Conditions",
		weAccept: "We accept",
		cashOnDelivery: "Cash on Delivery",
		storeAdmin: "Store admin",
		allRights: "All rights reserved.",
		footerBlurb: "Premium fashion, beauty and lifestyle — curated in Dhaka and delivered to your door across all 64 districts of Bangladesh.",
		announcements: [
			"Free delivery on orders over ৳5,000",
			"Cash on Delivery available across all 64 districts",
			"Order instantly on WhatsApp",
			"7-day easy returns & exchanges"
		],
		yourBag: "Your Bag",
		bagEmpty: "Your bag is empty",
		bagEmptyHint: "Discover pieces you'll love.",
		startShopping: "Start shopping",
		addMoreForFree: "Add {amount} more for free delivery",
		freeDeliveryUnlocked: "You've unlocked free delivery!",
		subtotal: "Subtotal",
		deliveryEstimated: "Delivery (estimated)",
		delivery: "Delivery",
		free: "Free",
		total: "Total",
		checkout: "Checkout",
		orderViaWhatsApp: "Order via WhatsApp",
		viewFullBag: "View full bag",
		remove: "Remove",
		size: "Size",
		shoppingCart: "Shopping Cart",
		cartEmpty: "Your cart is empty.",
		shopNow: "Shop now",
		addedToBag: "Added to your bag",
		savedWishlist: "Saved to wishlist",
		removedWishlist: "Removed from wishlist",
		addToCart: "Add to Cart",
		buyNow: "Buy Now",
		addToBag: "Add to bag",
		chooseOptions: "Choose options",
		viewDetails: "View details",
		new: "New",
		soldOut: "Sold out",
		onlyLeft: "Only {n} left",
		outOfStock: "Out of stock",
		inStock: "In stock ({n})",
		productNotFound: "Product not found.",
		shopByCategory: "Shop by category",
		curatedForYou: "Curated for every part of you",
		allCategories: "All categories",
		explore: "Explore",
		trendingNow: "Trending now",
		whatBdWearing: "What Bangladesh is wearing",
		viewAll: "View all",
		upTo20: "Up to 20% off",
		leatherEdit: "The Leather Edit",
		leatherEditText: "Totes, crossbodies & wallets in genuine leather.",
		newSeason: "New season",
		beautyFragrance: "Beauty & Fragrance",
		beautyPromoText: "Brightening serums, velvet lips & signature oud.",
		bestSellers: "Best sellers",
		lovedByThousands: "Loved by thousands",
		bestSellersDesc: "Our most-ordered pieces, rated by customers across the country.",
		specialOffersEyebrow: "Special offers",
		weeklyGoldSale: "The Weekly Gold Sale",
		weeklyGoldSaleText: "Handpicked favourites at up to 25% off — this week only, while stock lasts.",
		shopAllOffers: "Shop all offers",
		justLanded: "Just landed",
		newArrivals: "New arrivals",
		customerLove: "Customer love",
		ratedByCustomers: "Rated 4.8 out of 5 by our customers",
		bought: "Bought",
		nationwideDelivery: "Nationwide Delivery",
		nationwideDeliveryText: "1–2 days in Dhaka, 3–5 days elsewhere",
		codTitle: "Cash on Delivery",
		codText: "Pay when your order arrives",
		easyReturns: "7-Day Easy Returns",
		easyReturnsText: "Hassle-free exchanges & refunds",
		authentic: "100% Authentic",
		authenticText: "Quality-checked before dispatch",
		newsletterEyebrow: "The Blackwell Circle",
		newsletterTitle: "Be first to the new collection",
		newsletterText: "Early access to new drops, members-only offers and Eid edits — straight to your inbox. No spam, ever.",
		emailAddress: "Email address",
		yourEmail: "Your email address",
		subscribe: "Subscribe",
		invalidEmail: "Please enter a valid email address",
		onTheList: "You're on the list",
		onTheListDesc: "We'll share new drops and members-only offers with you.",
		language: "Language",
		resultsFor: "Results for “{q}”",
		emptyCheckout: "Your bag is empty",
		emptyCheckoutHint: "Add products first, then order on WhatsApp.",
		redirectingWhatsApp: "Opening WhatsApp with your order…",
		waFloatAria: "Chat on WhatsApp",
		waFloatMessage: "Hello {store}! I have a question about your products.",
		waIntro: "Hello {store}! I'd like to place an order.",
		waOrderItems: "Order items",
		waOrderId: "Order ID",
		waSubtotal: "Subtotal",
		waDelivery: "Delivery",
		waTotal: "Total",
		waCustomerDetails: "Customer details",
		waName: "Name",
		waPhone: "Phone",
		waEmail: "Email",
		waAddress: "Delivery address",
		waNotes: "Notes",
		waPayment: "Payment",
		waConfirm: "Please confirm my order. Thank you!",
		waFree: "Free",
		pageNotFound: "Page not found",
		pageNotFoundText: "The page you're looking for doesn't exist or has been moved.",
		goHome: "Go home",
		pageDidntLoad: "This page didn't load",
		pageDidntLoadText: "Something went wrong on our end. You can try refreshing or head back home.",
		tryAgain: "Try again",
		aboutIntro: "Blackwell BD is a premium fashion, beauty and lifestyle store based in Dhaka, built for modern Bangladesh.",
		aboutMissionTitle: "Our mission",
		aboutMission: "We curate quality pieces — from Jamdani weaves and panjabis to oud fragrances and home décor — and deliver them with the ease of Cash on Delivery, bKash, Nagad and WhatsApp ordering.",
		aboutWhyTitle: "Why shop with us",
		aboutWhy: "Nationwide delivery across all 64 districts, authentic products, careful packaging, and a 7-day easy return & exchange policy. Every order is checked before it leaves our Gulshan studio.",
		aboutPromiseTitle: "Our promise",
		aboutPromise: "Whether you browse on the website or order directly on WhatsApp, you get the same premium experience — clear pricing in BDT, honest stock updates, and friendly support in English and Bangla.",
		contactIntro: "We're here on WhatsApp, phone and email — usually reply within minutes during store hours.",
		contactWhatsAppTitle: "WhatsApp ordering",
		contactWhatsApp: "The fastest way to order. Add items to your bag and tap Checkout — we'll open a WhatsApp chat with your full order ready to send.",
		contactVisitTitle: "Visit & reach us",
		contactHoursTitle: "Store hours",
		contactHours: "Saturday–Thursday: 10:00 AM – 8:00 PM. Friday: 3:00 PM – 8:00 PM (Bangladesh time).",
		contactFormHint: "Prefer writing? Email us anytime and we'll get back to you.",
		shippingIntro: "Delivery times and charges across Bangladesh.",
		shippingS1Title: "Delivery times",
		shippingS1: "Dhaka: 1–2 working days. Outside Dhaka: 3–5 working days. Remote areas may take slightly longer.",
		shippingS2Title: "Delivery charges",
		shippingS2: "Inside Dhaka ৳70, outside Dhaka ৳130. Free delivery on orders over ৳5,000.",
		returnIntro: "Hassle-free returns and refunds within 7 days of delivery.",
		returnS1Title: "Eligibility",
		returnS1: "Items must be unused, with tags and original packaging. Beauty products opened for hygiene reasons may not be returnable.",
		returnS2Title: "Refunds",
		returnS2: "Refunds are processed to your original payment method or as store credit within 5–7 working days after we receive the return.",
		exchangeIntro: "Exchange size or colour within 7 days of delivery.",
		exchangeS1Title: "How to exchange",
		exchangeS1: "Message us on WhatsApp with your order ID and preferred size/colour. Subject to stock availability.",
		cancelIntro: "Cancel before dispatch for a full refund.",
		cancelS1Title: "Cancellation window",
		cancelS1: "You can cancel any time before your order is packed. Once shipped, please use our return policy instead.",
		privacyIntro: "How we collect and use your information.",
		privacyS1Title: "What we collect",
		privacyS1: "Name, phone, email and delivery address when you order or create an account. Cart and wishlist data stay in your browser (localStorage).",
		privacyS2Title: "How we use it",
		privacyS2: "Only to fulfil orders, support you on WhatsApp, and improve the store. We never sell your data.",
		termsIntro: "Terms that apply when you shop with Blackwell BD.",
		termsS1Title: "Orders",
		termsS1: "All prices are in Bangladeshi Taka (BDT). Placing an order (including via WhatsApp) constitutes an offer to purchase subject to stock and confirmation.",
		termsS2Title: "Payment",
		termsS2: "We accept Cash on Delivery, bKash and Nagad. Fraudulent or incomplete payment details may delay fulfilment.",
		faqIntro: "Answers to common questions about orders, delivery and returns.",
		faq1q: "How do I place an order?",
		faq1a: "Add products to your bag and tap Checkout — WhatsApp opens with your full order (items, quantities, prices and total). Send the message to confirm.",
		faq2q: "Do you offer Cash on Delivery?",
		faq2a: "Yes, COD is available nationwide across all 64 districts, plus bKash and Nagad.",
		faq3q: "Can I order in Bangla?",
		faq3a: "Yes. Switch the language to বাংলা in the header — the site and WhatsApp order message can follow your language.",
		trackIntro: "Enter your order ID to check status (demo uses locally saved orders).",
		loginTitle: "Customer Login",
		registerTitle: "Create account",
		accountTitle: "My Account",
		wishlistTitle: "Wishlist",
		wishlistEmpty: "Your wishlist is empty.",
		adminTitle: "Store Admin",
		reviews: [
			{
				name: "Nusrat Jahan",
				city: "Dhanmondi, Dhaka",
				text: "The emerald kurti set is even more beautiful in person. The embroidery is so fine — I got compliments all through Eid. Delivery came the next day!",
				product: "Emerald Silk Kurti Set"
			},
			{
				name: "Tanvir Ahmed",
				city: "Chattogram",
				text: "Ordered the panjabi and chronograph over WhatsApp — they confirmed within minutes and it arrived in 3 days with Cash on Delivery. Premium packaging too.",
				product: "Ivory Cotton Panjabi"
			},
			{
				name: "Farzana Rahman",
				city: "Sylhet",
				text: "Oud Royale lasts the whole day. Finally a Bangladeshi store that feels truly luxurious from browsing to unboxing.",
				product: "Oud Royale Parfum"
			}
		]
	},
	bn: {
		langName: "বাংলা",
		langShort: "বাং",
		home: "হোম",
		shopAll: "সব পণ্য",
		categories: "ক্যাটাগরি",
		newIn: "নতুন",
		offers: "অফার",
		about: "আমাদের সম্পর্কে",
		contact: "যোগাযোগ",
		search: "খুঁজুন",
		account: "অ্যাকাউন্ট",
		signIn: "সাইন ইন",
		wishlist: "উইশলিস্ট",
		openBag: "ব্যাগ খুলুন",
		openMenu: "মেনু খুলুন",
		searchProducts: "পণ্য খুঁজুন",
		searchPlaceholder: "কুর্তি, ঘড়ি, পারফিউম খুঁজুন…",
		popularSearches: "জনপ্রিয় সার্চ",
		noProductsMatch: "কোনো পণ্য মেলেনি",
		seeAllResults: "সব ফলাফল দেখুন",
		specialOffers: "বিশেষ অফার",
		help: "সাহায্য",
		trackOrder: "অর্ডার ট্র্যাক করুন",
		aboutUs: "আমাদের সম্পর্কে",
		contactUs: "যোগাযোগ করুন",
		faq: "প্রশ্নোত্তর",
		shop: "শপ",
		customerCare: "কাস্টমার কেয়ার",
		company: "কোম্পানি",
		getInTouch: "যোগাযোগের ঠিকানা",
		shippingDelivery: "শিপিং ও ডেলিভারি",
		returnRefund: "রিটার্ন ও রিফান্ড",
		exchangePolicy: "এক্সচেঞ্জ নীতি",
		cancellationPolicy: "বাতিলকরণ নীতি",
		myAccount: "আমার অ্যাকাউন্ট",
		privacyPolicy: "প্রাইভেসি পলিসি",
		terms: "শর্তাবলি",
		weAccept: "পেমেন্ট গ্রহণ",
		cashOnDelivery: "ক্যাশ অন ডেলিভারি",
		storeAdmin: "স্টোর অ্যাডমিন",
		allRights: "সর্বস্বত্ব সংরক্ষিত।",
		footerBlurb: "প্রিমিয়াম ফ্যাশন, বিউটি ও লাইফস্টাইল — ঢাকায় কিউরেট করা এবং বাংলাদেশের ৬৪ জেলায় আপনার দোরগোড়ায় পৌঁছে দেওয়া।",
		announcements: [
			"৳৫,০০০-এর বেশি অর্ডারে ফ্রি ডেলিভারি",
			"৬৪ জেলায় ক্যাশ অন ডেলিভারি",
			"হোয়াটসঅ্যাপে তাৎক্ষণিক অর্ডার",
			"৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ"
		],
		yourBag: "আপনার ব্যাগ",
		bagEmpty: "আপনার ব্যাগ খালি",
		bagEmptyHint: "আপনার পছন্দের পণ্য খুঁজে নিন।",
		startShopping: "কেনাকাটা শুরু করুন",
		addMoreForFree: "ফ্রি ডেলিভারির জন্য আরও {amount} যোগ করুন",
		freeDeliveryUnlocked: "আপনি ফ্রি ডেলিভারি আনলক করেছেন!",
		subtotal: "সাবটোটাল",
		deliveryEstimated: "ডেলিভারি (আনুমানিক)",
		delivery: "ডেলিভারি",
		free: "ফ্রি",
		total: "মোট",
		checkout: "চেকআউট",
		orderViaWhatsApp: "হোয়াটসঅ্যাপে অর্ডার",
		viewFullBag: "পুরো ব্যাগ দেখুন",
		remove: "সরান",
		size: "সাইজ",
		shoppingCart: "শপিং কার্ট",
		cartEmpty: "আপনার কার্ট খালি।",
		shopNow: "এখনই কিনুন",
		addedToBag: "ব্যাগে যোগ হয়েছে",
		savedWishlist: "উইশলিস্টে সেভ হয়েছে",
		removedWishlist: "উইশলিস্ট থেকে সরানো হয়েছে",
		addToCart: "কার্টে যোগ করুন",
		buyNow: "এখনই কিনুন",
		addToBag: "ব্যাগে যোগ করুন",
		chooseOptions: "অপশন বেছে নিন",
		viewDetails: "বিস্তারিত দেখুন",
		new: "নতুন",
		soldOut: "স্টক নেই",
		onlyLeft: "মাত্র {n}টি বাকি",
		outOfStock: "স্টক নেই",
		inStock: "স্টকে আছে ({n})",
		productNotFound: "পণ্য পাওয়া যায়নি।",
		shopByCategory: "ক্যাটাগরি অনুযায়ী কিনুন",
		curatedForYou: "আপনার প্রতিটি মুহূর্তের জন্য কিউরেটেড",
		allCategories: "সব ক্যাটাগরি",
		explore: "দেখুন",
		trendingNow: "এখন ট্রেন্ডিং",
		whatBdWearing: "বাংলাদেশ এখন যা পরছে",
		viewAll: "সব দেখুন",
		upTo20: "২০% পর্যন্ত ছাড়",
		leatherEdit: "লেদার কালেকশন",
		leatherEditText: "জেনুইন লেদারের টোট, ক্রসবডি ও ওয়ালেট।",
		newSeason: "নতুন সিজন",
		beautyFragrance: "বিউটি ও ফ্র্যাগ্রেন্স",
		beautyPromoText: "ব্রাইটেনিং সিরাম, ভেলভেট লিপ ও সিগনেচার উদ।",
		bestSellers: "বেস্ট সেলার",
		lovedByThousands: "হাজারো গ্রাহকের প্রিয়",
		bestSellersDesc: "দেশজুড়ে গ্রাহকদের রেটিংয়ে আমাদের সবচেয়ে অর্ডার করা পণ্য।",
		specialOffersEyebrow: "বিশেষ অফার",
		weeklyGoldSale: "সাপ্তাহিক গোল্ড সেল",
		weeklyGoldSaleText: "২৫% পর্যন্ত ছাড়ে বাছাই করা প্রিয় পণ্য — শুধু এই সপ্তাহে, স্টক থাকতে।",
		shopAllOffers: "সব অফার দেখুন",
		justLanded: "এখনই এসেছে",
		newArrivals: "নতুন আগমন",
		customerLove: "গ্রাহকদের ভালোবাসা",
		ratedByCustomers: "গ্রাহকদের কাছে ৫-এ ৪.৮ রেটিং",
		bought: "কিনেছেন",
		nationwideDelivery: "সারা দেশে ডেলিভারি",
		nationwideDeliveryText: "ঢাকায় ১–২ দিন, অন্যত্র ৩–৫ দিন",
		codTitle: "ক্যাশ অন ডেলিভারি",
		codText: "পণ্য হাতে পেয়ে পেমেন্ট করুন",
		easyReturns: "৭ দিনের সহজ রিটার্ন",
		easyReturnsText: "ঝামেলামুক্ত এক্সচেঞ্জ ও রিফান্ড",
		authentic: "১০০% অথেন্টিক",
		authenticText: "পাঠানোর আগে কোয়ালিটি চেক",
		newsletterEyebrow: "ব্ল্যাকওয়েল সার্কেল",
		newsletterTitle: "নতুন কালেকশনে প্রথমে থাকুন",
		newsletterText: "নতুন ড্রপ, মেম্বার-অনলি অফার ও ঈদ এডিট — সরাসরি আপনার ইনবক্সে। কোনো স্প্যাম নয়।",
		emailAddress: "ইমেইল ঠিকানা",
		yourEmail: "আপনার ইমেইল",
		subscribe: "সাবস্ক্রাইব",
		invalidEmail: "সঠিক ইমেইল ঠিকানা দিন",
		onTheList: "আপনি তালিকায় যুক্ত",
		onTheListDesc: "নতুন ড্রপ ও মেম্বার-অনলি অফার শেয়ার করব।",
		language: "ভাষা",
		resultsFor: "“{q}” এর ফলাফল",
		emptyCheckout: "আপনার ব্যাগ খালি",
		emptyCheckoutHint: "আগে পণ্য যোগ করুন, তারপর হোয়াটসঅ্যাপে অর্ডার করুন।",
		redirectingWhatsApp: "আপনার অর্ডার নিয়ে হোয়াটসঅ্যাপ খোলা হচ্ছে…",
		waFloatAria: "হোয়াটসঅ্যাপে চ্যাট করুন",
		waFloatMessage: "হ্যালো {store}! আপনাদের পণ্য নিয়ে একটি প্রশ্ন আছে।",
		waIntro: "হ্যালো {store}! আমি একটি অর্ডার দিতে চাই।",
		waOrderItems: "অর্ডারের পণ্য",
		waOrderId: "অর্ডার আইডি",
		waSubtotal: "সাবটোটাল",
		waDelivery: "ডেলিভারি",
		waTotal: "মোট",
		waCustomerDetails: "গ্রাহকের তথ্য",
		waName: "নাম",
		waPhone: "ফোন",
		waEmail: "ইমেইল",
		waAddress: "ডেলিভারি ঠিকানা",
		waNotes: "নোট",
		waPayment: "পেমেন্ট",
		waConfirm: "অনুগ্রহ করে আমার অর্ডার নিশ্চিত করুন। ধন্যবাদ!",
		waFree: "ফ্রি",
		pageNotFound: "পেজ পাওয়া যায়নি",
		pageNotFoundText: "আপনি যে পেজটি খুঁজছেন তা নেই বা সরিয়ে ফেলা হয়েছে।",
		goHome: "হোমে যান",
		pageDidntLoad: "এই পেজটি লোড হয়নি",
		pageDidntLoadText: "আমাদের দিকে কিছু সমস্যা হয়েছে। রিফ্রেশ করুন বা হোমে ফিরে যান।",
		tryAgain: "আবার চেষ্টা করুন",
		aboutIntro: "ব্ল্যাকওয়েল বিডি ঢাকাভিত্তিক একটি প্রিমিয়াম ফ্যাশন, বিউটি ও লাইফস্টাইল স্টোর — আধুনিক বাংলাদেশের জন্য তৈরি।",
		aboutMissionTitle: "আমাদের লক্ষ্য",
		aboutMission: "আমরা জামদানি, পাঞ্জাবি থেকে উদ পারফিউম ও হোম ডেকোর পর্যন্ত মানসম্মত পণ্য বাছাই করি, এবং ক্যাশ অন ডেলিভারি, বিকাশ, নগদ ও হোয়াটসঅ্যাপ অর্ডারের মাধ্যমে সহজে পৌঁছে দিই।",
		aboutWhyTitle: "কেন আমাদের থেকে কিনবেন",
		aboutWhy: "৬৪ জেলায় ডেলিভারি, অথেন্টিক পণ্য, যত্নশীল প্যাকেজিং এবং ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ নীতি। গুলশান স্টুডিও থেকে পাঠানোর আগে প্রতিটি অর্ডার চেক করা হয়।",
		aboutPromiseTitle: "আমাদের প্রতিশ্রুতি",
		aboutPromise: "ওয়েবসাইটে ব্রাউজ করুন বা সরাসরি হোয়াটসঅ্যাপে অর্ডার করুন — একই প্রিমিয়াম অভিজ্ঞতা পাবেন। বিডিটিতে স্পষ্ট দাম, সৎ স্টক আপডেট, এবং ইংরেজি ও বাংলায় সাপোর্ট।",
		contactIntro: "আমরা হোয়াটসঅ্যাপ, ফোন ও ইমেইলে আছি — স্টোর সময়ে সাধারণত কয়েক মিনিটের মধ্যে উত্তর দিই।",
		contactWhatsAppTitle: "হোয়াটসঅ্যাপ অর্ডার",
		contactWhatsApp: "অর্ডারের সবচেয়ে দ্রুত উপায়। ব্যাগে পণ্য যোগ করে চেকআউট চাপুন — পুরো অর্ডারসহ হোয়াটসঅ্যাপ চ্যাট খুলে যাবে।",
		contactVisitTitle: "আমাদের ঠিকানা",
		contactHoursTitle: "স্টোর সময়",
		contactHours: "শনি–বৃহস্পতি: সকাল ১০টা – রাত ৮টা। শুক্রবার: দুপুর ৩টা – রাত ৮টা (বাংলাদেশ সময়)।",
		contactFormHint: "লিখতে চান? যেকোনো সময় ইমেইল করুন, আমরা উত্তর দেব।",
		shippingIntro: "বাংলাদেশজুড়ে ডেলিভারি সময় ও চার্জ।",
		shippingS1Title: "ডেলিভারি সময়",
		shippingS1: "ঢাকা: ১–২ কর্মদিবস। ঢাকার বাইরে: ৩–৫ কর্মদিবস। দুর্গম এলাকায় আরও কিছুটা সময় লাগতে পারে।",
		shippingS2Title: "ডেলিভারি চার্জ",
		shippingS2: "ঢাকার ভিতরে ৳৭০, বাইরে ৳১৩০। ৳৫,০০০-এর বেশি অর্ডারে ফ্রি ডেলিভারি।",
		returnIntro: "ডেলিভারির ৭ দিনের মধ্যে সহজ রিটার্ন ও রিফান্ড।",
		returnS1Title: "যোগ্যতা",
		returnS1: "পণ্য অব্যবহৃত থাকতে হবে, ট্যাগ ও আসল প্যাকেজিংসহ। হাইজিনের কারণে খোলা বিউটি পণ্য ফেরতযোগ্য নাও হতে পারে।",
		returnS2Title: "রিফান্ড",
		returnS2: "রিটার্ন পাওয়ার পর ৫–৭ কর্মদিবসের মধ্যে আসল পেমেন্ট মাধ্যমে বা স্টোর ক্রেডিট হিসেবে রিফান্ড করা হয়।",
		exchangeIntro: "ডেলিভারির ৭ দিনের মধ্যে সাইজ বা রঙ এক্সচেঞ্জ করুন।",
		exchangeS1Title: "কীভাবে এক্সচেঞ্জ করবেন",
		exchangeS1: "অর্ডার আইডি ও পছন্দের সাইজ/রঙসহ হোয়াটসঅ্যাপে মেসেজ করুন। স্টক সাপেক্ষে।",
		cancelIntro: "পাঠানোর আগে বাতিল করলে পূর্ণ রিফান্ড।",
		cancelS1Title: "বাতিলের সময়সীমা",
		cancelS1: "প্যাকিংয়ের আগে যেকোনো সময় বাতিল করতে পারবেন। শিপ হয়ে গেলে রিটার্ন নীতি ব্যবহার করুন।",
		privacyIntro: "আমরা কীভাবে আপনার তথ্য সংগ্রহ ও ব্যবহার করি।",
		privacyS1Title: "কী সংগ্রহ করি",
		privacyS1: "অর্ডার বা অ্যাকাউন্ট তৈরির সময় নাম, ফোন, ইমেইল ও ডেলিভারি ঠিকানা। কার্ট ও উইশলিস্ট আপনার ব্রাউজারেই থাকে (localStorage)।",
		privacyS2Title: "কীভাবে ব্যবহার করি",
		privacyS2: "শুধু অর্ডার সম্পন্ন করা, হোয়াটসঅ্যাপে সাপোর্ট এবং স্টোর উন্নত করতে। আপনার ডেটা কখনো বিক্রি করি না।",
		termsIntro: "ব্ল্যাকওয়েল বিডি থেকে কেনার সময় প্রযোজ্য শর্তাবলি।",
		termsS1Title: "অর্ডার",
		termsS1: "সব দাম বাংলাদেশি টাকায় (BDT)। অর্ডার দেওয়া (হোয়াটসঅ্যাপসহ) স্টক ও নিশ্চিতকরণ সাপেক্ষে কেনার প্রস্তাব।",
		termsS2Title: "পেমেন্ট",
		termsS2: "ক্যাশ অন ডেলিভারি, বিকাশ ও নগদ গ্রহণযোগ্য। অসম্পূর্ণ বা জালিয়াতিমূলক পেমেন্ট তথ্যে দেরি হতে পারে।",
		faqIntro: "অর্ডার, ডেলিভারি ও রিটার্ন নিয়ে সাধারণ প্রশ্নের উত্তর।",
		faq1q: "কীভাবে অর্ডার করব?",
		faq1a: "ব্যাগে পণ্য যোগ করে চেকআউট চাপুন — পুরো অর্ডার (পণ্য, পরিমাণ, দাম ও মোট)সহ হোয়াটসঅ্যাপ খুলবে। মেসেজ পাঠিয়ে নিশ্চিত করুন।",
		faq2q: "ক্যাশ অন ডেলিভারি আছে কি?",
		faq2a: "হ্যাঁ, সারা দেশে ৬৪ জেলায় COD আছে, সাথে বিকাশ ও নগদ।",
		faq3q: "বাংলায় অর্ডার করতে পারি কি?",
		faq3a: "হ্যাঁ। হেডারে বাংলা বেছে নিন — সাইট ও হোয়াটসঅ্যাপ অর্ডার মেসেজ আপনার ভাষা অনুসরণ করতে পারে।",
		trackIntro: "স্ট্যাটাস দেখতে অর্ডার আইডি দিন (ডেমোতে লোকাল অর্ডার ব্যবহার হয়)।",
		loginTitle: "কাস্টমার লগইন",
		registerTitle: "অ্যাকাউন্ট তৈরি",
		accountTitle: "আমার অ্যাকাউন্ট",
		wishlistTitle: "উইশলিস্ট",
		wishlistEmpty: "আপনার উইশলিস্ট খালি।",
		adminTitle: "স্টোর অ্যাডমিন",
		reviews: [
			{
				name: "নুসরাত জাহান",
				city: "ধানমন্ডি, ঢাকা",
				text: "এমারেল্ড কুর্তি সেট সত্যিই অসাধারণ। এমব্রয়ডারি খুব সূক্ষ্ম — ঈদে সবাই প্রশংসা করেছে। পরের দিনই ডেলিভারি পেয়েছি!",
				product: "এমারেল্ড সিল্ক কুর্তি সেট"
			},
			{
				name: "তানভীর আহমেদ",
				city: "চট্টগ্রাম",
				text: "হোয়াটসঅ্যাপে পাঞ্জাবি ও ক্রোনোগ্রাফ অর্ডার করেছি — কয়েক মিনিটেই নিশ্চিত করেছে, ৩ দিনে COD-তে পেয়েছি। প্যাকেজিংও প্রিমিয়াম।",
				product: "আইভরি কটন পাঞ্জাবি"
			},
			{
				name: "ফারজানা রহমান",
				city: "সিলেট",
				text: "উদ রয়্যাল সারাদিন থাকে। অবশেষে এমন এক বাংলাদেশি স্টোর যা ব্রাউজ থেকে আনবক্সিং পর্যন্ত লাক্সারি মনে হয়।",
				product: "উদ রয়্যাল পারফিউম"
			}
		]
	}
};
var I18nContext = (0, import_react.createContext)(null);
function readLocale() {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (raw === "bn" || raw === "en") return raw;
	} catch {}
	return "bn";
}
function I18nProvider({ children }) {
	const [locale, setLocaleState] = (0, import_react.useState)("bn");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLocaleState(readLocale());
		setReady(true);
	}, []);
	const setLocale = (0, import_react.useCallback)((next) => {
		setLocaleState(next);
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		document.documentElement.lang = locale === "bn" ? "bn" : "en";
	}, [locale, ready]);
	const t = dictionaries[locale];
	const tf = (0, import_react.useCallback)((template, vars) => {
		return Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)), template);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		locale,
		setLocale,
		t,
		tf
	}), [
		locale,
		setLocale,
		t,
		tf
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext.Provider, {
		value,
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(I18nContext);
	if (!ctx) throw new Error("useI18n must be used within I18nProvider");
	return ctx;
}
//#endregion
//#region src/assets/cat-women.jpg
var cat_women_default = "/assets/cat-women-D7tHftms.jpg";
//#endregion
//#region src/assets/cat-men.jpg
var cat_men_default = "/assets/cat-men-CbRYd4JF.jpg";
//#endregion
//#region src/assets/cat-beauty.jpg
var cat_beauty_default = "/assets/cat-beauty-DVtXOXCN.jpg";
//#endregion
//#region src/assets/cat-bags.jpg
var cat_bags_default = "/assets/cat-bags-DhuEyN8s.jpg";
//#endregion
//#region src/assets/cat-jewelry.jpg
var cat_jewelry_default = "/assets/cat-jewelry-mzyZk8vX.jpg";
//#endregion
//#region src/assets/cat-home.jpg
var cat_home_default = "/assets/cat-home-DtrIVdaQ.jpg";
//#endregion
//#region src/assets/hero-women.jpg
var hero_women_default = "/assets/hero-women-CETMPS1r.jpg";
//#endregion
//#region src/assets/hero-accessories.jpg
var hero_accessories_default = "/assets/hero-accessories-DleghcOM.jpg";
//#endregion
//#region src/assets/p-saree.jpg
var p_saree_default = "/assets/p-saree-DxhwWCVb.jpg";
//#endregion
//#region src/assets/p-coord.jpg
var p_coord_default = "/assets/p-coord-BZD3NVvj.jpg";
//#endregion
//#region src/assets/p-hijab.jpg
var p_hijab_default = "/assets/p-hijab-BukQUT_K.jpg";
//#endregion
//#region src/assets/p-shirt.jpg
var p_shirt_default = "/assets/p-shirt-DiedzJFF.jpg";
//#endregion
//#region src/assets/p-boots.jpg
var p_boots_default = "/assets/p-boots-DD8rKNy0.jpg";
//#endregion
//#region src/assets/p-polo.jpg
var p_polo_default = "/assets/p-polo-FYBFS7US.jpg";
//#endregion
//#region src/assets/p-serum.jpg
var p_serum_default = "/assets/p-serum-Bx55fH0v.jpg";
//#endregion
//#region src/assets/p-lipstick.jpg
var p_lipstick_default = "/assets/p-lipstick-COjUxCTv.jpg";
//#endregion
//#region src/assets/p-perfume.jpg
var p_perfume_default = "/assets/p-perfume-Dooeuh9e.jpg";
//#endregion
//#region src/assets/p-giftbox.jpg
var p_giftbox_default = "/assets/p-giftbox-Cio5_LzG.jpg";
//#endregion
//#region src/assets/p-tote.jpg
var p_tote_default = "/assets/p-tote-BsCx_B7h.jpg";
//#endregion
//#region src/assets/p-crossbody.jpg
var p_crossbody_default = "/assets/p-crossbody-CyLX2u4D.jpg";
//#endregion
//#region src/assets/p-wallet.jpg
var p_wallet_default = "/assets/p-wallet-BHLMZye5.jpg";
//#endregion
//#region src/assets/p-sunglasses.jpg
var p_sunglasses_default = "/assets/p-sunglasses-Dk_MfAw9.jpg";
//#endregion
//#region src/assets/p-watch-men.jpg
var p_watch_men_default = "/assets/p-watch-men-gAWrrq9c.jpg";
//#endregion
//#region src/assets/p-watch-women.jpg
var p_watch_women_default = "/assets/p-watch-women-DpMhjbzr.jpg";
//#endregion
//#region src/assets/p-earrings.jpg
var p_earrings_default = "/assets/p-earrings-Bg-UNRcR.jpg";
//#endregion
//#region src/assets/p-bangles.jpg
var p_bangles_default = "/assets/p-bangles-Ba0FJ3Cq.jpg";
//#endregion
//#region src/assets/p-candles.jpg
var p_candles_default = "/assets/p-candles-CrtCxO1o.jpg";
//#endregion
//#region src/assets/p-cushion.jpg
var p_cushion_default = "/assets/p-cushion-Dr9Yreq1.jpg";
//#endregion
//#region src/assets/p-teaset.jpg
var p_teaset_default = "/assets/p-teaset-DQjndP4q.jpg";
//#endregion
//#region src/assets/p-diffuser.jpg
var p_diffuser_default = "/assets/p-diffuser-7pCslfWt.jpg";
//#endregion
//#region src/lib/catalog.ts
var seedCategories = [
	{
		id: "women",
		slug: "women",
		name: "Women's Fashion",
		nameBn: "নারীদের ফ্যাশন",
		tagline: "Kurtis, sarees & co-ords",
		taglineBn: "কুর্তি, শাড়ি ও কো-অর্ড",
		image: cat_women_default
	},
	{
		id: "men",
		slug: "men",
		name: "Men's Fashion",
		nameBn: "পুরুষদের ফ্যাশন",
		tagline: "Panjabis, shirts & boots",
		taglineBn: "পাঞ্জাবি, শার্ট ও বুট",
		image: cat_men_default
	},
	{
		id: "beauty",
		slug: "beauty",
		name: "Beauty & Fragrance",
		nameBn: "বিউটি ও ফ্র্যাগ্রেন্স",
		tagline: "Skincare, makeup & oud",
		taglineBn: "স্কিনকেয়ার, মেকআপ ও উদ",
		image: cat_beauty_default
	},
	{
		id: "bags",
		slug: "bags-accessories",
		name: "Bags & Accessories",
		nameBn: "ব্যাগ ও এক্সেসরিজ",
		tagline: "Totes, wallets & shades",
		taglineBn: "টোট, ওয়ালেট ও সানগ্লাস",
		image: cat_bags_default
	},
	{
		id: "jewelry",
		slug: "watches-jewelry",
		name: "Watches & Jewelry",
		nameBn: "ঘড়ি ও জুয়েলারি",
		tagline: "Timepieces & fine pieces",
		taglineBn: "টাইমপিস ও ফাইন পিস",
		image: cat_jewelry_default
	},
	{
		id: "home",
		slug: "home-lifestyle",
		name: "Home & Lifestyle",
		nameBn: "হোম ও লাইফস্টাইল",
		tagline: "Candles, kantha & ceramics",
		taglineBn: "মোমবাতি, কাঁথা ও সিরামিকস",
		image: cat_home_default
	}
];
var seedBanners = [{
	id: "b1",
	eyebrow: "The Eid Edit · 2026",
	eyebrowBn: "ঈদ এডিট · ২০২৬",
	title: "Quiet luxury, made for every celebration",
	titleBn: "নির্ভার লাক্সারি, প্রতিটি উৎসবের জন্য",
	subtitle: "Hand-finished embroidery, Jamdani weaves and leather pieces crafted to be kept for years.",
	subtitleBn: "হাতে সাজানো এমব্রয়ডারি, জামদানি বুনন ও লেদার পিস — বছরের পর বছর রাখার মতো।",
	image: hero_women_default,
	ctaLabel: "Shop Women",
	ctaLabelBn: "নারীদের কালেকশন",
	ctaHref: "/category/women"
}, {
	id: "b2",
	eyebrow: "Up to 25% off",
	eyebrowBn: "২৫% পর্যন্ত ছাড়",
	title: "Gold hour. Timepieces & signature scents",
	titleBn: "গোল্ড আওয়ার। ঘড়ি ও সিগনেচার সুগন্ধি",
	subtitle: "Chronographs, oud fragrances and fine accessories — delivered across Bangladesh.",
	subtitleBn: "ক্রোনোগ্রাফ, উদ ফ্র্যাগ্রেন্স ও ফাইন এক্সেসরিজ — সারা বাংলাদেশে ডেলিভারি।",
	image: hero_accessories_default,
	ctaLabel: "Shop the Offer",
	ctaLabelBn: "অফার দেখুন",
	ctaHref: "/shop?tag=offer"
}];
var clothingSizes = [
	"S",
	"M",
	"L",
	"XL"
];
var seedProducts = [
	{
		id: "p01",
		slug: "emerald-silk-embroidered-kurti-set",
		name: "Emerald Silk Embroidered Kurti Set",
		nameBn: "এমারেল্ড সিল্ক এমব্রয়ডারি কুর্তি সেট",
		categoryId: "women",
		price: 3450,
		compareAt: 4200,
		images: [cat_women_default, hero_women_default],
		rating: 4.8,
		reviews: 126,
		stock: 18,
		sizes: clothingSizes,
		colors: [
			{
				name: "Emerald",
				nameBn: "এমারেল্ড",
				hex: "#1f5a3e"
			},
			{
				name: "Ivory",
				nameBn: "আইভরি",
				hex: "#efe6d2"
			},
			{
				name: "Maroon",
				nameBn: "মেরুন",
				hex: "#6b1f2a"
			}
		],
		description: "A three-piece kurti set in soft art-silk with antique-gold thread embroidery along the yoke, sleeves and hem. Paired with straight trousers and a lightweight embroidered dupatta for festive days and evening dawats.",
		descriptionBn: "নরম আর্ট-সিল্কের তিন পিসের কুর্তি সেট, গলায়-হাতায়-হেমে অ্যান্টিক-গোল্ড সুতার এমব্রয়ডারি। সোজা প্যান্ট ও হালকা এমব্রয়ডারি দুপাটার সঙ্গে — উৎসব ও সন্ধ্যার দাওয়াতের জন্য।",
		details: [
			"Art silk with cotton lining",
			"3 pieces: kurti, trouser, dupatta",
			"Hand-finished zari embroidery",
			"Dry clean recommended"
		],
		detailsBn: [
			"কটন লাইনিংসহ আর্ট সিল্ক",
			"৩ পিস: কুর্তি, প্যান্ট, দুপাটা",
			"হাতে সাজানো জরি এমব্রয়ডারি",
			"ড্রাই ক্লিন সুপারিশকৃত"
		],
		tags: [
			"trending",
			"bestseller",
			"offer"
		],
		createdAt: "2026-09-02"
	},
	{
		id: "p02",
		slug: "handwoven-jamdani-cotton-saree",
		name: "Handwoven Jamdani Cotton Saree",
		nameBn: "হাতবোনা জামদানি কটন শাড়ি",
		categoryId: "women",
		price: 6800,
		compareAt: 7900,
		images: [p_saree_default],
		rating: 4.9,
		reviews: 88,
		stock: 6,
		colors: [{
			name: "White Gold",
			nameBn: "সাদা সোনা",
			hex: "#f3ead6"
		}, {
			name: "Black Gold",
			nameBn: "কালো সোনা",
			hex: "#1c1a17"
		}],
		description: "Woven on traditional looms in Rupganj, this featherlight Jamdani saree carries a gold floral pallu and temple border. Comes with an unstitched blouse piece.",
		descriptionBn: "রূপগঞ্জের ঐতিহ্যবাহী তাঁতে বোনা হালকা জামদানি শাড়ি — সোনালি ফুলের আঁচল ও টেম্পল বর্ডারসহ। অসিলাই ব্লাউজ পিস আছে।",
		details: [
			"Fine cotton Jamdani",
			"6 yards with blouse piece",
			"Handwoven in Narayanganj",
			"Gentle hand wash or dry clean"
		],
		detailsBn: [
			"সূক্ষ্ম কটন জামদানি",
			"৬ গজ + ব্লাউজ পিস",
			"নারায়ণগঞ্জে হাতবোনা",
			"হালকা হাত ধোয়া বা ড্রাই ক্লিন"
		],
		tags: ["bestseller", "offer"],
		createdAt: "2026-08-10"
	},
	{
		id: "p03",
		slug: "sand-linen-wide-leg-coord-set",
		name: "Sand Linen Wide-Leg Co-ord Set",
		nameBn: "স্যান্ড লিনেন ওয়াইড-লেগ কো-অর্ড সেট",
		categoryId: "women",
		price: 2950,
		images: [p_coord_default],
		rating: 4.6,
		reviews: 54,
		stock: 24,
		sizes: clothingSizes,
		colors: [{
			name: "Sand",
			nameBn: "স্যান্ড",
			hex: "#d8c7a6"
		}, {
			name: "Olive",
			nameBn: "অলিভ",
			hex: "#6b6a45"
		}],
		description: "A breathable linen-blend shirt and wide-leg trouser set cut for Dhaka summers. Relaxed, polished and easy to style apart.",
		descriptionBn: "ঢাকার গরমের জন্য শ্বাসপ্রশ্বাসযোগ্য লিনেন-মিশ্র শার্ট ও ওয়াইড-লেগ প্যান্ট সেট। আরামদায়ক, সুন্দর এবং আলাদাভাবেও পরার মতো।",
		details: [
			"Linen-cotton blend",
			"Elasticated back waist",
			"Side pockets",
			"Machine wash cold"
		],
		detailsBn: [
			"লিনেন-কটন মিশ্রণ",
			"পিছনে ইলাস্টিক ওয়েস্ট",
			"সাইড পকেট",
			"ঠান্ডা পানিতে মেশিন ধোয়া"
		],
		tags: ["new", "trending"],
		createdAt: "2026-10-18"
	},
	{
		id: "p04",
		slug: "printed-chiffon-hijab-trio",
		name: "Printed Chiffon Hijab Trio",
		nameBn: "প্রিন্টেড শিফন হিজাব ত্রয়ী",
		categoryId: "women",
		price: 1250,
		compareAt: 1500,
		images: [p_hijab_default],
		rating: 4.7,
		reviews: 203,
		stock: 40,
		colors: [{
			name: "Blush · Sage · Beige",
			nameBn: "ব্লাশ · সেজ · বেইজ",
			hex: "#d9a9a0"
		}],
		description: "Three premium chiffon hijabs in soft botanical prints with a gold-tone hijab pin. Lightweight, non-slip and opaque.",
		descriptionBn: "নরম বোটানিক্যাল প্রিন্টের তিনটি প্রিমিয়াম শিফন হিজাব, সোনালি হিজাব পিনসহ। হালকা, নন-স্লিপ ও অস্বচ্ছ।",
		details: [
			"Premium Korean chiffon",
			"Size: 180 × 75 cm",
			"Includes gold-tone pin",
			"Hand wash"
		],
		detailsBn: [
			"প্রিমিয়াম কোরিয়ান শিফন",
			"সাইজ: ১৮০ × ৭৫ সেমি",
			"সোনালি পিনসহ",
			"হাত ধোয়া"
		],
		tags: ["bestseller", "offer"],
		createdAt: "2026-07-21"
	},
	{
		id: "p05",
		slug: "ivory-premium-cotton-panjabi",
		name: "Ivory Premium Cotton Panjabi",
		nameBn: "আইভরি প্রিমিয়াম কটন পাঞ্জাবি",
		categoryId: "men",
		price: 2890,
		compareAt: 3400,
		images: [cat_men_default],
		rating: 4.8,
		reviews: 167,
		stock: 22,
		sizes: [
			"M",
			"L",
			"XL",
			"XXL"
		],
		colors: [
			{
				name: "Ivory",
				nameBn: "আইভরি",
				hex: "#ece3cf"
			},
			{
				name: "Charcoal",
				nameBn: "চারকোল",
				hex: "#2f2e2c"
			},
			{
				name: "Navy",
				nameBn: "নেভি",
				hex: "#1f2b45"
			}
		],
		description: "A slim-cut panjabi in fine combed cotton with tonal embroidery on the placket and wooden buttons. Made for Jumma, Eid and weddings.",
		descriptionBn: "সূক্ষ্ম কম্বড কটনের স্লিম-কাট পাঞ্জাবি, প্ল্যাকেটে টোনাল এমব্রয়ডারি ও কাঠের বোতাম। জুম্মা, ঈদ ও বিয়ের জন্য।",
		details: [
			"100% combed cotton",
			"Tonal placket embroidery",
			"Regular slim fit",
			"Machine wash gentle"
		],
		detailsBn: [
			"১০০% কম্বড কটন",
			"প্ল্যাকেট এমব্রয়ডারি",
			"রেগুলার স্লিম ফিট",
			"মৃদু মেশিন ধোয়া"
		],
		tags: [
			"trending",
			"bestseller",
			"offer"
		],
		createdAt: "2026-09-12"
	},
	{
		id: "p06",
		slug: "oxford-slim-fit-shirt",
		name: "Oxford Slim-Fit Shirt",
		nameBn: "অক্সফোর্ড স্লিম-ফিট শার্ট",
		categoryId: "men",
		price: 1850,
		images: [p_shirt_default],
		rating: 4.5,
		reviews: 74,
		stock: 35,
		sizes: [
			"S",
			"M",
			"L",
			"XL",
			"XXL"
		],
		colors: [{
			name: "Sky Blue",
			nameBn: "স্কাই ব্লু",
			hex: "#9cb9dc"
		}, {
			name: "White",
			nameBn: "সাদা",
			hex: "#f5f3ee"
		}],
		description: "A wardrobe essential in soft brushed Oxford cotton with a button-down collar. Sharp enough for office, relaxed enough for weekends.",
		descriptionBn: "নরম ব্রাশড অক্সফোর্ড কটনের ওয়ারড্রোব এসেনশিয়াল, বাটন-ডাউন কলারসহ। অফিসের জন্য স্মার্ট, উইকএন্ডের জন্য আরামদায়ক।",
		details: [
			"100% Oxford cotton",
			"Button-down collar",
			"Slim fit",
			"Machine wash"
		],
		detailsBn: [
			"১০০% অক্সফোর্ড কটন",
			"বাটন-ডাউন কলার",
			"স্লিম ফিট",
			"মেশিন ধোয়া"
		],
		tags: ["new"],
		createdAt: "2026-10-25"
	},
	{
		id: "p07",
		slug: "walnut-leather-chelsea-boots",
		name: "Walnut Leather Chelsea Boots",
		nameBn: "ওয়ালনাট লেদার চেলসি বুট",
		categoryId: "men",
		price: 5490,
		compareAt: 6200,
		images: [p_boots_default],
		rating: 4.7,
		reviews: 61,
		stock: 9,
		sizes: [
			"40",
			"41",
			"42",
			"43",
			"44"
		],
		colors: [{
			name: "Walnut",
			nameBn: "ওয়ালনাট",
			hex: "#4a2c1d"
		}, {
			name: "Black",
			nameBn: "কালো",
			hex: "#141312"
		}],
		description: "Full-grain leather Chelsea boots with elastic side panels, a padded insole and a durable stacked sole — made to soften beautifully with wear.",
		descriptionBn: "ফুল-গ্রেইন লেদার চেলসি বুট — ইলাস্টিক সাইড প্যানেল, প্যাডেড ইনসোল ও টেকসই সোল। পরার সঙ্গে আরও নরম ও সুন্দর হয়।",
		details: [
			"Full-grain cow leather",
			"Cushioned leather insole",
			"Rubber stacked sole",
			"Wipe clean, condition monthly"
		],
		detailsBn: [
			"ফুল-গ্রেইন গরুর চামড়া",
			"কুশনড লেদার ইনসোল",
			"রাবার স্ট্যাকড সোল",
			"মুছে পরিষ্কার করুন, মাসে একবার কন্ডিশন করুন"
		],
		tags: ["trending", "offer"],
		createdAt: "2026-08-28"
	},
	{
		id: "p08",
		slug: "classic-pique-polo",
		name: "Classic Piqué Polo",
		nameBn: "ক্লাসিক পিকে পোলো",
		categoryId: "men",
		price: 1190,
		images: [p_polo_default],
		rating: 4.4,
		reviews: 142,
		stock: 60,
		sizes: [
			"S",
			"M",
			"L",
			"XL",
			"XXL"
		],
		colors: [
			{
				name: "Navy",
				nameBn: "নেভি",
				hex: "#1f2b45"
			},
			{
				name: "Black",
				nameBn: "কালো",
				hex: "#141312"
			},
			{
				name: "Olive",
				nameBn: "অলিভ",
				hex: "#5b5b3b"
			}
		],
		description: "A breathable piqué cotton polo with a ribbed collar and a clean, modern fit. Holds its shape wash after wash.",
		descriptionBn: "শ্বাসপ্রশ্বাসযোগ্য পিকে কটন পোলো — রিবড কলার ও পরিচ্ছন্ন মডার্ন ফিট। ধোয়ার পরও আকৃতি ধরে রাখে।",
		details: [
			"220 GSM piqué cotton",
			"Ribbed collar & cuffs",
			"Regular fit",
			"Machine wash"
		],
		detailsBn: [
			"২২০ জিএসএম পিকে কটন",
			"রিবড কলার ও কাফ",
			"রেগুলার ফিট",
			"মেশিন ধোয়া"
		],
		tags: ["bestseller"],
		createdAt: "2026-06-30"
	},
	{
		id: "p09",
		slug: "vitamin-c-brightening-serum",
		name: "Vitamin C Brightening Serum · 30ml",
		nameBn: "ভিটামিন সি ব্রাইটেনিং সিরাম · ৩০ মিলি",
		categoryId: "beauty",
		price: 1450,
		compareAt: 1800,
		images: [p_serum_default],
		rating: 4.7,
		reviews: 318,
		stock: 50,
		description: "A lightweight 15% vitamin C serum with ferulic acid and hyaluronic acid to brighten dull skin and fade dark spots. Suitable for humid climates.",
		descriptionBn: "হালকা ১৫% ভিটামিন সি সিরাম — ফেরুলিক অ্যাসিড ও হায়ালুরোনিক অ্যাসিডসহ। নিস্তেজ ত্বক উজ্জ্বল করে ও দাগ কমায়। আর্দ্র আবহাওয়ার জন্য উপযোগী।",
		details: [
			"15% L-ascorbic acid",
			"Fragrance free",
			"All skin types",
			"Apply AM before sunscreen"
		],
		detailsBn: [
			"১৫% এল-অ্যাসকরবিক অ্যাসিড",
			"ফ্র্যাগ্রেন্স ফ্রি",
			"সব ত্বকের উপযোগী",
			"সকালে সানস্ক্রিনের আগে লাগান"
		],
		tags: [
			"trending",
			"bestseller",
			"offer"
		],
		createdAt: "2026-09-05"
	},
	{
		id: "p10",
		slug: "velvet-matte-lipstick-set",
		name: "Velvet Matte Lipstick Set",
		nameBn: "ভেলভেট ম্যাট লিপস্টিক সেট",
		categoryId: "beauty",
		price: 1090,
		images: [p_lipstick_default],
		rating: 4.8,
		reviews: 97,
		stock: 299998,
		colors: [
			{
				name: "Nude",
				nameBn: "নিউড",
				hex: "#c98b78"
			},
			{
				name: "Rose",
				nameBn: "রোজ",
				hex: "#b4646e"
			},
			{
				name: "Red",
				nameBn: "লাল",
				hex: "#a81d22"
			},
			{
				name: "Berry",
				nameBn: "বেরি",
				hex: "#6e2340"
			}
		],
		description: "Four long-wear velvet matte shades in a gold-and-black case. Comfortable, transfer-resistant and enriched with vitamin E.",
		descriptionBn: "গোল্ড-অ্যান্ড-ব্ল্যাক কেসে চারটি লং-ওয়্যার ভেলভেট ম্যাট শেড। আরামদায়ক, ট্রান্সফার-রেজিস্ট্যান্ট ও ভিটামিন ই সমৃদ্ধ।",
		details: [
			"Set of 4 full-size lipsticks",
			"Up to 8 hours wear",
			"Vitamin E enriched",
			"Cruelty free"
		],
		detailsBn: [
			"৪টি ফুল-সাইজ লিপস্টিক",
			"৮ ঘণ্টা পর্যন্ত স্থায়ী",
			"ভিটামিন ই সমৃদ্ধ",
			"ক্রুয়েলটি ফ্রি"
		],
		tags: ["new"],
		createdAt: "2026-10-20"
	},
	{
		id: "p11",
		slug: "oud-royale-eau-de-parfum",
		name: "Oud Royale Eau de Parfum · 100ml",
		nameBn: "উদ রয়্যাল ও দ্য পারফিউম · ১০০ মিলি",
		categoryId: "beauty",
		price: 4250,
		compareAt: 4990,
		images: [p_perfume_default],
		rating: 4.9,
		reviews: 211,
		stock: 14,
		description: "A rich, long-lasting oud with notes of saffron, rose and amber, settling into warm sandalwood. Our signature scent for evenings and Eid.",
		descriptionBn: "জাফরান, গোলাপ ও অ্যাম্বার নোটের সমৃদ্ধ দীর্ঘস্থায়ী উদ — উষ্ণ চন্দনে মিশে যায়। সন্ধ্যা ও ঈদের জন্য আমাদের সিগনেচার সুগন্ধি।",
		details: [
			"Eau de parfum concentration",
			"Top: saffron · Heart: rose · Base: oud, amber",
			"8–10 hour longevity",
			"Unisex"
		],
		detailsBn: [
			"ও দ্য পারফিউম কনসেনট্রেশন",
			"টপ: জাফরান · হার্ট: গোলাপ · বেস: উদ, অ্যাম্বার",
			"৮–১০ ঘণ্টা স্থায়িত্ব",
			"ইউনিসেক্স"
		],
		tags: [
			"trending",
			"bestseller",
			"offer"
		],
		createdAt: "2026-08-14"
	},
	{
		id: "p12",
		slug: "hydrating-skincare-gift-box",
		name: "Hydrating Skincare Gift Box",
		nameBn: "হাইড্রেটিং স্কিনকেয়ার গিফট বক্স",
		categoryId: "beauty",
		price: 3290,
		images: [p_giftbox_default, cat_beauty_default],
		rating: 4.8,
		reviews: 46,
		stock: 12,
		description: "A curated ritual in a keepsake box: hydrating toner, facial oil, ceramide cream and a jade roller. The perfect gift for her.",
		descriptionBn: "কিপসেক বক্সে কিউরেটেড রুটিন: হাইড্রেটিং টোনার, ফেসিয়াল অয়েল, সিরামাইড ক্রিম ও জেড রোলার। তাঁর জন্য পারফেক্ট উপহার।",
		details: [
			"Toner 100ml · Facial oil 30ml · Cream 50ml",
			"Natural jade roller",
			"Gift-ready packaging",
			"Free gift note on request"
		],
		detailsBn: [
			"টোনার ১০০ মিলি · অয়েল ৩০ মিলি · ক্রিম ৫০ মিলি",
			"প্রাকৃতিক জেড রোলার",
			"গিফট-রেডি প্যাকেজিং",
			"অনুরোধে ফ্রি গিফট নোট"
		],
		tags: ["new", "trending"],
		createdAt: "2026-10-28"
	},
	{
		id: "p13",
		slug: "structured-leather-tote",
		name: "Structured Leather Tote",
		nameBn: "স্ট্রাকচার্ড লেদার টোট",
		categoryId: "bags",
		price: 4890,
		compareAt: 5900,
		images: [p_tote_default, cat_bags_default],
		rating: 4.8,
		reviews: 132,
		stock: 10,
		colors: [{
			name: "Black",
			nameBn: "কালো",
			hex: "#141312"
		}, {
			name: "Tan",
			nameBn: "ট্যান",
			hex: "#a8703f"
		}],
		description: "A roomy everyday tote in pebbled leather with gold-tone hardware, an inner zip pocket and a laptop sleeve that fits up to 14 inches.",
		descriptionBn: "পেবলড লেদারের প্রশস্ত ডেইলি টোট — সোনালি হার্ডওয়্যার, ভেতরে জিপ পকেট ও ১৪ ইঞ্চি পর্যন্ত ল্যাপটপ স্লিভ।",
		details: [
			"Pebbled genuine leather",
			"Fits 14\" laptop",
			"Inner zip & phone pockets",
			"34 × 28 × 13 cm"
		],
		detailsBn: [
			"পেবলড আসল চামড়া",
			"১৪ ইঞ্চি ল্যাপটপ ধরে",
			"ভেতরে জিপ ও ফোন পকেট",
			"৩৪ × ২৮ × ১৩ সেমি"
		],
		tags: [
			"trending",
			"bestseller",
			"offer"
		],
		createdAt: "2026-09-08"
	},
	{
		id: "p14",
		slug: "quilted-chain-crossbody",
		name: "Quilted Chain Crossbody",
		nameBn: "কুইল্টেড চেইন ক্রসবডি",
		categoryId: "bags",
		price: 3250,
		images: [p_crossbody_default],
		rating: 4.6,
		reviews: 58,
		stock: 16,
		colors: [{
			name: "Cream",
			nameBn: "ক্রিম",
			hex: "#efe5d1"
		}, {
			name: "Black",
			nameBn: "কালো",
			hex: "#141312"
		}],
		description: "A diamond-quilted crossbody with a curb-chain strap and a sculpted gold turn-lock. Fits your phone, cards and lipstick.",
		descriptionBn: "ডায়মন্ড-কুইল্টেড ক্রসবডি — কার্ব-চেইন স্ট্র্যাপ ও সোনালি টার্ন-লক। ফোন, কার্ড ও লিপস্টিক ধরে।",
		details: [
			"Vegan leather",
			"Adjustable chain strap",
			"Magnetic flap closure",
			"22 × 15 × 7 cm"
		],
		detailsBn: [
			"ভেগান লেদার",
			"অ্যাডজাস্টেবল চেইন স্ট্র্যাপ",
			"ম্যাগনেটিক ফ্ল্যাপ",
			"২২ × ১৫ × ৭ সেমি"
		],
		tags: ["new"],
		createdAt: "2026-10-12"
	},
	{
		id: "p15",
		slug: "mens-leather-bifold-wallet",
		name: "Men's Leather Bifold Wallet",
		nameBn: "পুরুষদের লেদার বাইফোল্ড ওয়ালেট",
		categoryId: "bags",
		price: 1350,
		images: [p_wallet_default],
		rating: 4.5,
		reviews: 189,
		stock: 45,
		colors: [{
			name: "Black",
			nameBn: "কালো",
			hex: "#141312"
		}, {
			name: "Brown",
			nameBn: "বাদামি",
			hex: "#5a3a26"
		}],
		description: "A slim bifold in smooth genuine leather with eight card slots and a full-length note compartment. RFID protected.",
		descriptionBn: "মসৃণ আসল চামড়ার স্লিম বাইফোল্ড — আটটি কার্ড স্লট ও পুরো নোট কম্পার্টমেন্ট। আরএফআইডি সুরক্ষিত।",
		details: [
			"Genuine cow leather",
			"8 card slots",
			"RFID blocking lining",
			"Gift box included"
		],
		detailsBn: [
			"আসল গরুর চামড়া",
			"৮টি কার্ড স্লট",
			"আরএফআইডি ব্লকিং লাইনিং",
			"গিফট বক্সসহ"
		],
		tags: ["bestseller"],
		createdAt: "2026-05-22"
	},
	{
		id: "p16",
		slug: "polarized-gold-aviators",
		name: "Polarized Gold Aviators",
		nameBn: "পোলারাইজড গোল্ড এভিয়েটর",
		categoryId: "bags",
		price: 1990,
		compareAt: 2490,
		images: [p_sunglasses_default],
		rating: 4.4,
		reviews: 77,
		stock: 30,
		description: "Classic aviators with a lightweight gold metal frame and polarized gradient lenses offering full UV400 protection.",
		descriptionBn: "হালকা সোনালি মেটাল ফ্রেমের ক্লাসিক এভিয়েটর — পোলারাইজড গ্র্যাডিয়েন্ট লেন্স ও পূর্ণ UV400 সুরক্ষা।",
		details: [
			"Polarized UV400 lenses",
			"Metal frame, adjustable nose pads",
			"Hard case & cloth included",
			"Unisex"
		],
		detailsBn: [
			"পোলারাইজড UV400 লেন্স",
			"মেটাল ফ্রেম, অ্যাডজাস্টেবল নোজ প্যাড",
			"হার্ড কেস ও কাপড়সহ",
			"ইউনিসেক্স"
		],
		tags: ["offer"],
		createdAt: "2026-07-03"
	},
	{
		id: "p17",
		slug: "gold-tone-chronograph-watch",
		name: "Gold-Tone Chronograph Watch",
		nameBn: "গোল্ড-টোন ক্রোনোগ্রাফ ঘড়ি",
		categoryId: "jewelry",
		price: 6990,
		compareAt: 8500,
		images: [p_watch_men_default, hero_accessories_default],
		rating: 4.8,
		reviews: 104,
		stock: 7,
		description: "A bold 42mm chronograph in gold-tone stainless steel with a sunray black dial, date window and 50m water resistance.",
		descriptionBn: "গোল্ড-টোন স্টেইনলেস স্টিলের সাহসী ৪২ মিমি ক্রোনোগ্রাফ — সানরে ব্ল্যাক ডায়াল, ডেট উইন্ডো ও ৫০ মিটার ওয়াটার রেজিস্ট্যান্স।",
		details: [
			"42mm stainless steel case",
			"Japanese quartz chronograph",
			"Mineral crystal",
			"1-year warranty"
		],
		detailsBn: [
			"৪২ মিমি স্টেইনলেস স্টিল কেস",
			"জাপানিজ কোয়ার্টজ ক্রোনোগ্রাফ",
			"মিনারেল ক্রিস্টাল",
			"১ বছরের ওয়ারেন্টি"
		],
		tags: [
			"trending",
			"bestseller",
			"offer"
		],
		createdAt: "2026-08-30"
	},
	{
		id: "p18",
		slug: "rose-gold-minimalist-watch",
		name: "Rose Gold Minimalist Watch",
		nameBn: "রোজ গোল্ড মিনিমালিস্ট ঘড়ি",
		categoryId: "jewelry",
		price: 4590,
		images: [p_watch_women_default, cat_jewelry_default],
		rating: 4.7,
		reviews: 83,
		stock: 15,
		description: "A slim 32mm watch with a clean white dial and a fine Milanese mesh strap. Everyday elegance that pairs with everything.",
		descriptionBn: "পরিচ্ছন্ন সাদা ডায়াল ও সূক্ষ্ম মিলানিজ মেশ স্ট্র্যাপের স্লিম ৩২ মিমি ঘড়ি। প্রতিদিনের এলিগ্যান্স — সবকিছুর সঙ্গে মানায়।",
		details: [
			"32mm case, 7mm thin",
			"Adjustable mesh strap",
			"Japanese quartz movement",
			"1-year warranty"
		],
		detailsBn: [
			"৩২ মিমি কেস, ৭ মিমি পাতলা",
			"অ্যাডজাস্টেবল মেশ স্ট্র্যাপ",
			"জাপানিজ কোয়ার্টজ মুভমেন্ট",
			"১ বছরের ওয়ারেন্টি"
		],
		tags: ["new"],
		createdAt: "2026-10-15"
	},
	{
		id: "p19",
		slug: "pearl-drop-earrings",
		name: "Pearl Drop Earrings",
		nameBn: "পার্ল ড্রপ ইয়াররিংস",
		categoryId: "jewelry",
		price: 1590,
		images: [p_earrings_default],
		rating: 4.9,
		reviews: 151,
		stock: 26,
		description: "Freshwater-style pearl drops on 18K gold-plated studs with a single crystal accent. Hypoallergenic and tarnish resistant.",
		descriptionBn: "১৮কে গোল্ড-প্লেটেড স্টাডে ফ্রেশওয়াটার-স্টাইল পার্ল ড্রপ, একটি ক্রিস্টাল অ্যাকসেন্টসহ। হাইপোঅ্যালার্জেনিক ও টার্নিশ রেজিস্ট্যান্ট।",
		details: [
			"18K gold plating",
			"Hypoallergenic posts",
			"Drop length 3 cm",
			"Comes in a gift pouch"
		],
		detailsBn: [
			"১৮কে গোল্ড প্লেটিং",
			"হাইপোঅ্যালার্জেনিক পোস্ট",
			"ড্রপ দৈর্ঘ্য ৩ সেমি",
			"গিফট পাউচে পাঠানো হয়"
		],
		tags: ["bestseller", "trending"],
		createdAt: "2026-07-14"
	},
	{
		id: "p20",
		slug: "engraved-gold-plated-bangle-set",
		name: "Engraved Gold-Plated Bangle Set",
		nameBn: "এনগ্রেভড গোল্ড-প্লেটেড ব্যাঙ্গেল সেট",
		categoryId: "jewelry",
		price: 2190,
		compareAt: 2690,
		images: [p_bangles_default],
		rating: 4.6,
		reviews: 92,
		stock: 20,
		sizes: [
			"2.4",
			"2.6",
			"2.8"
		],
		description: "Six hand-engraved bangles with floral motifs, plated in rich gold. A timeless set for weddings and festivals.",
		descriptionBn: "ফুলের মোটিফসহ ছয়টি হাতে এনগ্রেভড ব্যাঙ্গেল, সমৃদ্ধ সোনালি প্লেটিংয়ে। বিয়ে ও উৎসবের চিরন্তন সেট।",
		details: [
			"Set of 6 bangles",
			"Brass with gold plating",
			"Hand-engraved motifs",
			"Store dry, away from perfume"
		],
		detailsBn: [
			"৬টি ব্যাঙ্গেলের সেট",
			"ব্রাস + গোল্ড প্লেটিং",
			"হাতে এনগ্রেভড মোটিফ",
			"শুকনো স্থানে রাখুন, পারফিউম থেকে দূরে"
		],
		tags: ["offer"],
		createdAt: "2026-06-18"
	},
	{
		id: "p21",
		slug: "scented-soy-candle-trio",
		name: "Scented Soy Candle Trio",
		nameBn: "সেন্টেড সয়া ক্যান্ডল ত্রয়ী",
		categoryId: "home",
		price: 1490,
		images: [p_candles_default, cat_home_default],
		rating: 4.7,
		reviews: 68,
		stock: 33,
		description: "Hand-poured soy wax candles in amber glass — Sweet Vanilla, Lavender and Sandalwood. Around 35 hours of clean burn each.",
		descriptionBn: "অ্যাম্বার গ্লাসে হাতে ঢালা সয়া ওয়াক্স মোমবাতি — সুইট ভ্যানিলা, ল্যাভেন্ডার ও স্যান্ডালউড। প্রতিটিতে প্রায় ৩৫ ঘণ্টা ক্লিন বার্ন।",
		details: [
			"Natural soy wax",
			"Cotton wicks",
			"3 × 198g jars",
			"35+ hour burn time each"
		],
		detailsBn: [
			"প্রাকৃতিক সয়া ওয়াক্স",
			"কটন উইক",
			"৩ × ১৯৮ গ্রাম জার",
			"প্রতিটিতে ৩৫+ ঘণ্টা বার্ন"
		],
		tags: ["new", "trending"],
		createdAt: "2026-10-22"
	},
	{
		id: "p22",
		slug: "nakshi-kantha-cushion-covers",
		name: "Nakshi Kantha Cushion Covers · Pair",
		nameBn: "নকশি কাঁথা কুশন কভার · জোড়া",
		categoryId: "home",
		price: 1290,
		images: [p_cushion_default],
		rating: 4.8,
		reviews: 45,
		stock: 18,
		description: "Hand-stitched by artisans in Jessore, these Nakshi Kantha covers bring traditional Bengali running-stitch art to modern living rooms.",
		descriptionBn: "যশোরের কারিগরদের হাতে সেলাই করা নকশি কাঁথা কভার — আধুনিক বসার ঘরে ঐতিহ্যবাহী বাঙালি রানিং-স্টিচ শিল্প।",
		details: [
			"Set of 2 covers",
			"16 × 16 inch",
			"Hand-stitched cotton",
			"Hidden zip closure"
		],
		detailsBn: [
			"২টি কভারের সেট",
			"১৬ × ১৬ ইঞ্চি",
			"হাতে সেলাই কটন",
			"হিডেন জিপ ক্লোজার"
		],
		tags: ["bestseller"],
		createdAt: "2026-04-11"
	},
	{
		id: "p23",
		slug: "gold-rim-ceramic-tea-set",
		name: "Gold-Rim Ceramic Tea Set",
		nameBn: "গোল্ড-রিম সিরামিক চা সেট",
		categoryId: "home",
		price: 3690,
		compareAt: 4290,
		images: [p_teaset_default],
		rating: 4.7,
		reviews: 39,
		stock: 8,
		description: "A fluted ivory tea set with hand-painted gold rims: teapot, four cups and a serving tray. Made for long adda afternoons.",
		descriptionBn: "হাতে আঁকা সোনালি কিনারাসহ ফ্লুটেড আইভরি চা সেট: কেটলি, চারটি কাপ ও সার্ভিং ট্রে। দীর্ঘ আড্ডার বিকেলের জন্য।",
		details: [
			"Fine ceramic",
			"Teapot 900ml + 4 cups + tray",
			"Hand-painted gold rims",
			"Hand wash only"
		],
		detailsBn: [
			"সূক্ষ্ম সিরামিক",
			"কেটলি ৯০০ মিলি + ৪ কাপ + ট্রে",
			"হাতে আঁকা গোল্ড রিম",
			"শুধু হাত ধোয়া"
		],
		tags: ["offer", "new"],
		createdAt: "2026-10-05"
	},
	{
		id: "p24",
		slug: "aroma-mist-diffuser",
		name: "Aroma Mist Diffuser",
		nameBn: "অ্যারোমা মিস্ট ডিফিউজার",
		categoryId: "home",
		price: 2490,
		images: [p_diffuser_default],
		rating: 4.5,
		reviews: 57,
		stock: 0,
		description: "A matte ceramic ultrasonic diffuser with a natural wood base, warm ambient light and auto shut-off. Includes two essential oils.",
		descriptionBn: "প্রাকৃতিক কাঠের বেসসহ ম্যাট সিরামিক আল্ট্রাসনিক ডিফিউজার — উষ্ণ অ্যাম্বিয়েন্ট লাইট ও অটো শাট-অফ। দুটি এসেনশিয়াল অয়েলসহ।",
		details: [
			"300ml water tank",
			"Up to 8 hours mist",
			"Auto shut-off",
			"Includes 2 × 10ml oils"
		],
		detailsBn: [
			"৩০০ মিলি ওয়াটার ট্যাঙ্ক",
			"৮ ঘণ্টা পর্যন্ত মিস্ট",
			"অটো শাট-অফ",
			"২ × ১০ মিলি অয়েলসহ"
		],
		tags: ["trending"],
		createdAt: "2026-09-25"
	}
];
[...seedCategories.map((c) => ({
	label: c.name,
	src: c.image
})), ...seedProducts.map((p) => ({
	label: p.name,
	src: p.images[0] ?? ""
}))];
function discountPercent(p) {
	if (!p.compareAt || p.compareAt <= p.price) return 0;
	return Math.round((p.compareAt - p.price) / p.compareAt * 100);
}
//#endregion
//#region src/lib/settings.ts
var defaultSettings = {
	storeName: "Blackwell BD",
	whatsappNumber: "8801714920684",
	phoneDisplay: "+880 1714-920684",
	email: "blackwellbd.official@gmail.com",
	address: "Gulshan 1, Dhaka 1212, Bangladesh",
	bkashNumber: "01714920684",
	nagadNumber: "01714920684",
	insideDhakaFee: 70,
	outsideDhakaFee: 130,
	freeShippingThreshold: 5e3,
	announcements: [
		"Free delivery on orders over ৳5,000",
		"Cash on Delivery available across all 64 districts",
		"Order instantly on WhatsApp",
		"7-day easy returns & exchanges"
	]
};
function calcShipping(subtotal, zone, s) {
	if (subtotal <= 0) return 0;
	if (s.freeShippingThreshold > 0 && subtotal >= s.freeShippingThreshold) return 0;
	return zone === "inside" ? s.insideDhakaFee : s.outsideDhakaFee;
}
//#endregion
//#region src/lib/store.tsx
var KEYS = {
	products: "bw:products",
	categories: "bw:categories",
	banners: "bw:banners",
	settings: "bw:settings",
	cart: "bw:cart",
	wishlist: "bw:wishlist",
	orders: "bw:orders",
	accounts: "bw:accounts",
	session: "bw:session",
	zone: "bw:zone"
};
function read(key, fallback) {
	try {
		const raw = window.localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function write(key, value) {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function cartKey(productId, size, color) {
	return [
		productId,
		size ?? "",
		color ?? ""
	].join("|");
}
function newOrderId() {
	return `BW-${Math.floor(1e5 + Math.random() * 9e5)}`;
}
var StoreContext = (0, import_react.createContext)(null);
function StoreProvider({ children }) {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [products, setProducts] = (0, import_react.useState)(seedProducts);
	const [categories, setCategories] = (0, import_react.useState)(seedCategories);
	const [banners, setBanners] = (0, import_react.useState)(seedBanners);
	const [settings, setSettings] = (0, import_react.useState)(defaultSettings);
	const [cart, setCart] = (0, import_react.useState)([]);
	const [wishlist, setWishlist] = (0, import_react.useState)([]);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [accounts, setAccounts] = (0, import_react.useState)([]);
	const [session, setSession] = (0, import_react.useState)(null);
	const [zone, setZone] = (0, import_react.useState)("inside");
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setProducts(read(KEYS.products, seedProducts));
		setCategories(read(KEYS.categories, seedCategories));
		setBanners(read(KEYS.banners, seedBanners));
		setSettings({
			...defaultSettings,
			...read(KEYS.settings, {}),
			whatsappNumber: defaultSettings.whatsappNumber,
			phoneDisplay: defaultSettings.phoneDisplay,
			email: defaultSettings.email,
			bkashNumber: defaultSettings.bkashNumber,
			nagadNumber: defaultSettings.nagadNumber
		});
		setCart(read(KEYS.cart, []));
		setWishlist(read(KEYS.wishlist, []));
		setOrders(read(KEYS.orders, []));
		setAccounts(read(KEYS.accounts, []));
		setSession(read(KEYS.session, null));
		setZone(read(KEYS.zone, "inside"));
		setHydrated(true);
	}, []);
	const first = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		if (first.current) first.current = false;
		write(KEYS.cart, cart);
		write(KEYS.wishlist, wishlist);
		write(KEYS.orders, orders);
		write(KEYS.accounts, accounts);
		write(KEYS.session, session);
		write(KEYS.zone, zone);
	}, [
		hydrated,
		cart,
		wishlist,
		orders,
		accounts,
		session,
		zone
	]);
	const persistCatalog = (0, import_react.useCallback)((key, value) => write(key, value), []);
	const getProduct = (0, import_react.useCallback)((id) => products.find((p) => p.id === id), [products]);
	const getCategory = (0, import_react.useCallback)((id) => categories.find((c) => c.id === id), [categories]);
	const addToCart = (0, import_react.useCallback)((productId, qty = 1, opts) => {
		const key = cartKey(productId, opts?.size, opts?.color);
		setCart((prev) => {
			if (prev.find((i) => i.key === key)) return prev.map((i) => i.key === key ? {
				...i,
				qty: Math.min(99, i.qty + qty)
			} : i);
			return [...prev, {
				key,
				productId,
				qty,
				size: opts?.size,
				color: opts?.color
			}];
		});
	}, []);
	const updateQty = (0, import_react.useCallback)((key, qty) => {
		setCart((prev) => qty <= 0 ? prev.filter((i) => i.key !== key) : prev.map((i) => i.key === key ? {
			...i,
			qty: Math.min(99, qty)
		} : i));
	}, []);
	const removeFromCart = (0, import_react.useCallback)((key) => setCart((prev) => prev.filter((i) => i.key !== key)), []);
	const clearCart = (0, import_react.useCallback)(() => setCart([]), []);
	const cartLines = (0, import_react.useMemo)(() => cart.map((item) => ({
		item,
		product: products.find((p) => p.id === item.productId)
	})).filter((l) => Boolean(l.product)), [cart, products]);
	const cartCount = cartLines.reduce((n, l) => n + l.item.qty, 0);
	const subtotal = cartLines.reduce((n, l) => n + l.item.qty * l.product.price, 0);
	const shipping = calcShipping(subtotal, zone, settings);
	const total = subtotal + shipping;
	const inWishlist = (0, import_react.useCallback)((id) => wishlist.includes(id), [wishlist]);
	const value = {
		hydrated,
		products,
		categories,
		banners,
		settings,
		cart,
		wishlist,
		orders,
		session,
		zone,
		cartOpen,
		setCartOpen,
		setZone,
		getProduct,
		getCategory,
		addToCart,
		updateQty,
		removeFromCart,
		clearCart,
		cartLines,
		cartCount,
		subtotal,
		shipping,
		total,
		toggleWishlist: (0, import_react.useCallback)((id) => {
			const adding = !wishlist.includes(id);
			setWishlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
			return adding;
		}, [wishlist]),
		inWishlist,
		placeOrder: (0, import_react.useCallback)((data) => {
			const order = {
				id: newOrderId(),
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				customer: data.customer,
				lines: data.lines,
				subtotal: data.subtotal,
				shipping: data.shipping,
				total: data.subtotal + data.shipping,
				payment: data.payment,
				paymentRef: data.paymentRef,
				status: "pending",
				channel: data.channel,
				userEmail: session?.email
			};
			setOrders((prev) => [order, ...prev]);
			return order;
		}, [session]),
		updateOrderStatus: (0, import_react.useCallback)((id, status) => {
			setOrders((prev) => prev.map((o) => o.id === id ? {
				...o,
				status
			} : o));
		}, []),
		deleteOrder: (0, import_react.useCallback)((id) => setOrders((prev) => prev.filter((o) => o.id !== id)), []),
		register: (0, import_react.useCallback)((a) => {
			const email = a.email.trim().toLowerCase();
			if (accounts.some((x) => x.email === email)) return {
				ok: false,
				error: "An account with this email already exists."
			};
			const acc = {
				...a,
				email
			};
			setAccounts((prev) => [...prev, acc]);
			const { password: _pw, ...rest } = acc;
			setSession(rest);
			return { ok: true };
		}, [accounts]),
		login: (0, import_react.useCallback)((email, password) => {
			const acc = accounts.find((x) => x.email === email.trim().toLowerCase());
			if (!acc || acc.password !== password) return {
				ok: false,
				error: "Incorrect email or password."
			};
			const { password: _pw, ...rest } = acc;
			setSession(rest);
			return { ok: true };
		}, [accounts]),
		logout: (0, import_react.useCallback)(() => setSession(null), []),
		updateProfile: (0, import_react.useCallback)((p) => {
			setSession((prev) => {
				if (!prev) return prev;
				const next = {
					...prev,
					...p
				};
				setAccounts((accs) => accs.map((a) => a.email === prev.email ? {
					...a,
					...p,
					email: a.email
				} : a));
				return next;
			});
		}, []),
		saveProduct: (0, import_react.useCallback)((p) => setProducts((prev) => {
			const next = prev.some((x) => x.id === p.id) ? prev.map((x) => x.id === p.id ? p : x) : [p, ...prev];
			persistCatalog(KEYS.products, next);
			return next;
		}), [persistCatalog]),
		deleteProduct: (0, import_react.useCallback)((id) => setProducts((prev) => {
			const next = prev.filter((x) => x.id !== id);
			persistCatalog(KEYS.products, next);
			return next;
		}), [persistCatalog]),
		saveCategory: (0, import_react.useCallback)((c) => setCategories((prev) => {
			const next = prev.some((x) => x.id === c.id) ? prev.map((x) => x.id === c.id ? c : x) : [...prev, c];
			persistCatalog(KEYS.categories, next);
			return next;
		}), [persistCatalog]),
		deleteCategory: (0, import_react.useCallback)((id) => setCategories((prev) => {
			const next = prev.filter((x) => x.id !== id);
			persistCatalog(KEYS.categories, next);
			return next;
		}), [persistCatalog]),
		saveBanner: (0, import_react.useCallback)((b) => setBanners((prev) => {
			const next = prev.some((x) => x.id === b.id) ? prev.map((x) => x.id === b.id ? b : x) : [...prev, b];
			persistCatalog(KEYS.banners, next);
			return next;
		}), [persistCatalog]),
		deleteBanner: (0, import_react.useCallback)((id) => setBanners((prev) => {
			const next = prev.filter((x) => x.id !== id);
			persistCatalog(KEYS.banners, next);
			return next;
		}), [persistCatalog]),
		saveSettings: (0, import_react.useCallback)((s) => {
			setSettings(s);
			persistCatalog(KEYS.settings, s);
		}, [persistCatalog]),
		resetDemoData: (0, import_react.useCallback)(() => {
			[
				KEYS.products,
				KEYS.categories,
				KEYS.banners,
				KEYS.settings
			].forEach((k) => window.localStorage.removeItem(k));
			setProducts(seedProducts);
			setCategories(seedCategories);
			setBanners(seedBanners);
			setSettings(defaultSettings);
		}, [])
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreContext.Provider, {
		value,
		children
	});
}
function useStore() {
	const ctx = (0, import_react.useContext)(StoreContext);
	if (!ctx) throw new Error("useStore must be used inside <StoreProvider>");
	return ctx;
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/dialog.tsx
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
//#endregion
//#region src/components/ui/sheet.tsx
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
//#endregion
//#region src/lib/format.ts
function formatBDT(amount) {
	return `৳${Math.round(amount).toLocaleString("en-IN")}`;
}
//#endregion
//#region src/components/store/LanguageSwitcher.tsx
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
//#endregion
//#region src/assets/blackwell-mark.png
var blackwell_mark_default = "/assets/blackwell-mark-DyHjCu84.png";
//#endregion
//#region src/assets/blackwell-mark-light.png
var blackwell_mark_light_default = "/assets/blackwell-mark-light-B6MePFec.png";
//#endregion
//#region src/assets/blackwell-wordmark.png
var blackwell_wordmark_default = "/assets/blackwell-wordmark-Dlzt4CqS.png";
//#endregion
//#region src/assets/blackwell-wordmark-light.png
var blackwell_wordmark_light_default = "/assets/blackwell-wordmark-light-5yk-ysqt.png";
//#endregion
//#region src/components/store/Logo.tsx
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
//#endregion
//#region src/components/store/SiteHeader.tsx
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
								className: "mr-1 hidden sm:inline-flex"
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
//#endregion
//#region src/assets/blackwell-stacked-light.png
var blackwell_stacked_light_default = "/assets/blackwell-stacked-light-YHMHX08o.png";
//#endregion
//#region src/lib/whatsapp.ts
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
//#endregion
//#region src/components/store/WhatsAppIcon.tsx
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
//#region src/components/store/SiteFooter.tsx
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
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/85",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:border-foreground hover:bg-accent/40",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent/60 hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			gold: "bg-gold-gradient text-gold-foreground shadow-gold hover:brightness-110 hover:-translate-y-0.5",
			ink: "bg-ink text-ink-foreground hover:bg-ink-soft",
			"outline-light": "border border-ink-foreground/50 text-ink-foreground bg-transparent hover:bg-ink-foreground hover:text-ink",
			whatsapp: "bg-whatsapp text-whatsapp-foreground shadow-sm hover:brightness-105 hover:-translate-y-0.5"
		},
		size: {
			default: "h-10 px-5 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-12 px-8 text-[0.8rem] uppercase tracking-[0.18em]",
			xl: "h-14 px-10 text-[0.8rem] uppercase tracking-[0.2em]",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/hooks/use-whatsapp-checkout.ts
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
//#region src/components/store/QuantitySelector.tsx
function QuantitySelector({ value, onChange, max = 99, size = "md", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center rounded-md border border-input bg-card", size === "sm" ? "h-9" : "h-12", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Decrease quantity",
				onClick: () => onChange(Math.max(1, value - 1)),
				disabled: value <= 1,
				className: "flex h-full w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-8 text-center text-sm font-medium tabular-nums",
				"aria-live": "polite",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Increase quantity",
				onClick: () => onChange(Math.min(max, value + 1)),
				disabled: value >= max,
				className: "flex h-full w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
			})
		]
	});
}
//#endregion
//#region src/components/store/CartDrawer.tsx
function CartDrawer() {
	const { cartOpen, setCartOpen, cartLines, subtotal, shipping, total, updateQty, removeFromCart, settings, cartCount } = useStore();
	const { t, tf } = useI18n();
	const { orderUrl } = useWhatsAppCheckout();
	const navigate = useNavigate();
	const remaining = settings.freeShippingThreshold - subtotal;
	const progress = settings.freeShippingThreshold > 0 ? Math.min(100, subtotal / settings.freeShippingThreshold * 100) : 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: cartOpen,
		onOpenChange: setCartOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "flex w-full flex-col gap-0 p-0 sm:max-w-md",
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
//#endregion
//#region src/components/store/WhatsAppFloat.tsx
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
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
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
//#endregion
//#region src/routes/__root.tsx
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
var Route$22 = createRootRouteWithContext()({
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
	const { queryClient } = Route$22.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
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
//#endregion
//#region src/components/home/HeroSlider.tsx
function HeroSlider() {
	const { banners } = useStore();
	const [index, setIndex] = (0, import_react.useState)(0);
	const count = banners.length;
	(0, import_react.useEffect)(() => {
		if (count < 2) return;
		const t = setInterval(() => setIndex((i) => (i + 1) % count), 7e3);
		return () => clearInterval(t);
	}, [count, index]);
	(0, import_react.useEffect)(() => {
		if (index >= count) setIndex(0);
	}, [count, index]);
	if (count === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[78vh] min-h-[520px] max-h-[860px] overflow-hidden bg-ink",
		"aria-roledescription": "carousel",
		"aria-label": "Featured collections",
		children: [banners.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
								className: "eyebrow mb-5 text-gold animate-fade-up",
								children: b.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-5xl leading-[1.02] sm:text-6xl lg:text-7xl animate-fade-up [animation-delay:120ms]",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/80 sm:text-base animate-fade-up [animation-delay:240ms]",
								children: b.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:360ms]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: b.ctaHref,
									className: "inline-flex h-14 items-center justify-center rounded-md bg-gold-gradient px-10 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-gold-foreground shadow-gold transition-all hover:-translate-y-0.5 hover:brightness-110",
									children: b.ctaLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									className: "inline-flex h-14 items-center justify-center rounded-md border border-ink-foreground/50 px-10 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink",
									children: "Shop Now"
								})]
							})
						]
					})
				})
			]
		}, b.id)), count > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe absolute inset-x-0 bottom-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: banners.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": `Show slide ${i + 1}`,
					onClick: () => setIndex(i),
					className: cn("h-1 rounded-full transition-all duration-500", i === index ? "w-10 bg-gold" : "w-5 bg-ink-foreground/40 hover:bg-ink-foreground/70")
				}, b.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden gap-2 sm:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Previous slide",
					onClick: () => setIndex((index - 1 + count) % count),
					className: "flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/30 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Next slide",
					onClick: () => setIndex((index + 1) % count),
					className: "flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/30 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/home/Countdown.tsx
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
//#endregion
//#region src/components/store/Rating.tsx
function Rating({ value, count, className, size = "sm" }) {
	const s = size === "md" ? "h-4 w-4" : "h-3.5 w-3.5";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-1.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex",
			"aria-label": `Rated ${value} out of 5`,
			children: [
				1,
				2,
				3,
				4,
				5
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn(s, i <= Math.round(value) ? "fill-gold text-gold" : "fill-transparent text-gold/40") }, i))
		}), count !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs text-muted-foreground",
			children: [
				"(",
				count,
				")"
			]
		})]
	});
}
//#endregion
//#region src/components/store/SectionHeading.tsx
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
//#endregion
//#region src/lib/reviews.ts
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
//#endregion
//#region src/components/home/ReviewsSection.tsx
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
//#endregion
//#region src/components/store/ProductCard.tsx
function ProductCard({ product, className, priority = false }) {
	const { addToCart, toggleWishlist, inWishlist, setCartOpen, getCategory } = useStore();
	const off = discountPercent(product);
	const wished = inWishlist(product.id);
	const soldOut = product.stock <= 0;
	const needsChoice = (product.sizes?.length ?? 0) > 1;
	const category = getCategory(product.categoryId);
	const second = product.images[1];
	const quickAdd = () => {
		addToCart(product.id, 1, {
			size: product.sizes?.[0],
			color: product.colors?.[0]?.name
		});
		toast.success("Added to your bag", { description: product.name });
		setCartOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group relative flex flex-col", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/5] overflow-hidden rounded-md bg-sand",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					"aria-label": product.name,
					className: "block h-full w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.images[0],
						alt: product.name,
						width: 768,
						height: 960,
						loading: priority ? "eager" : "lazy",
						className: cn("h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105", second && "group-hover:opacity-0")
					}), second && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: second,
						alt: "",
						width: 768,
						height: 960,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5",
					children: [
						off > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-sm bg-sale px-2 py-1 text-[0.65rem] font-semibold tracking-wider text-sale-foreground",
							children: [
								"-",
								off,
								"%"
							]
						}),
						product.tags.includes("new") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-sm bg-ink px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink-foreground",
							children: "New"
						}),
						soldOut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-sm bg-card px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-foreground",
							children: "Sold out"
						}),
						!soldOut && product.stock <= 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-sm bg-gold-soft px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-foreground",
							children: [
								"Only ",
								product.stock,
								" left"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": wished ? "Remove from wishlist" : "Add to wishlist",
					"aria-pressed": wished,
					onClick: () => {
						const added = toggleWishlist(product.id);
						toast(added ? "Saved to wishlist" : "Removed from wishlist", { description: product.name });
					},
					className: "absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-card/90 text-foreground shadow-card backdrop-blur transition-all hover:scale-110",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-4 w-4", wished && "fill-sale text-sale") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-3 bottom-3 translate-y-2 opacity-100 transition-all duration-300 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100",
					children: soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "flex h-10 w-full items-center justify-center rounded-md bg-card/95 text-xs font-medium uppercase tracking-[0.16em] text-foreground backdrop-blur",
						children: "View details"
					}) : needsChoice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "flex h-10 w-full items-center justify-center gap-2 rounded-md bg-ink/90 text-xs font-medium uppercase tracking-[0.16em] text-ink-foreground backdrop-blur transition-colors hover:bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), " Choose options"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: quickAdd,
						className: "flex h-10 w-full items-center justify-center gap-2 rounded-md bg-ink/90 text-xs font-medium uppercase tracking-[0.16em] text-ink-foreground backdrop-blur transition-colors hover:bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), " Add to bag"]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col pt-4",
			children: [
				category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-1.5 text-[0.6rem] text-muted-foreground",
					children: category.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					className: "line-clamp-2 font-display text-lg leading-snug transition-colors hover:text-gold-deep",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
					value: product.rating,
					count: product.reviews,
					className: "mt-1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base font-semibold",
						children: formatBDT(product.price)
					}), off > 0 && product.compareAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground line-through",
						children: formatBDT(product.compareAt)
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/store/Newsletter.tsx
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
//#endregion
//#region src/routes/index.tsx
var Route$21 = createFileRoute("/")({
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
	component: HomePage
});
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
//#region src/components/store/PageHeader.tsx
function PageHeader({ title, description, crumbs = [] }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden border-b border-border bg-sand/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe py-10 sm:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Breadcrumb",
					className: "mb-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-foreground",
						children: "Home"
					}), crumbs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }), c.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: c.to,
							className: "hover:text-foreground",
							children: c.label
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: c.label
						})]
					}, c.label))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl sm:text-5xl animate-fade-up",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base animate-fade-up",
					children: description
				})
			]
		})
	});
}
//#endregion
//#region src/routes/about.tsx
var Route$20 = createFileRoute("/about")({
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
	component: AboutPage
});
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
//#region src/components/store/InfoPage.tsx
function InfoPage({ title, intro, sections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title,
		description: intro,
		crumbs: [{ label: title }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe max-w-3xl space-y-8 py-14",
		children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl",
			children: s.h
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted-foreground",
			children: s.p
		})] }, s.h))
	})] });
}
//#endregion
//#region src/routes/account.tsx
var Route$19 = createFileRoute("/account")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "My Account",
		intro: "Your Blackwell BD profile and orders.",
		sections: []
	})
});
//#endregion
//#region src/routes/admin.tsx
var Route$18 = createFileRoute("/admin")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "Store Admin",
		intro: "Manage Blackwell BD products, orders and settings.",
		sections: []
	})
});
//#endregion
//#region src/routes/cancellation-policy.tsx
var Route$17 = createFileRoute("/cancellation-policy")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "Cancellation Policy",
		intro: "How to cancel a Blackwell BD order.",
		sections: []
	})
});
//#endregion
//#region src/routes/cart.tsx
var Route$16 = createFileRoute("/cart")({
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
	component: CartPage
});
function CartPage() {
	const { cartLines, updateQty, removeFromCart, subtotal, shipping, total } = useStore();
	const { orderUrl } = useWhatsAppCheckout();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Shopping Cart",
		crumbs: [{ label: "Cart" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe max-w-3xl py-12",
		children: cartLines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-center text-muted-foreground",
			children: [
				"Your cart is empty.",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "underline",
					children: "Shop now"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border",
				children: cartLines.map(({ item, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.images[0],
							alt: "",
							className: "h-20 w-16 rounded object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: [item.size, item.color].filter(Boolean).join(" · ")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
							size: "sm",
							value: item.qty,
							onChange: (v) => updateQty(item.key, v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-24 text-right",
							children: formatBDT(product.price * item.qty)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => removeFromCart(item.key),
							className: "text-xs text-destructive",
							children: "Remove"
						})
					]
				}, item.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-1 text-right text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Subtotal: ", formatBDT(subtotal)] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Delivery: ", shipping === 0 ? "Free" : formatBDT(shipping)] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg font-semibold",
						children: ["Total: ", formatBDT(total)]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 text-right",
				children: orderUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "whatsapp",
					size: "lg",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: orderUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), " Checkout on WhatsApp"]
					})
				}) : null
			})
		] })
	})] });
}
//#endregion
//#region src/routes/categories.tsx
var Route$15 = createFileRoute("/categories")({
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
	component: () => {
		const { categories } = useStore();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Categories",
			crumbs: [{ label: "Categories" }]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe grid grid-cols-2 gap-5 py-12 lg:grid-cols-3",
			children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/category/$slug",
				params: { slug: c.slug },
				className: "group block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: c.image,
					alt: c.name,
					className: "aspect-[4/5] w-full rounded-lg object-cover",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-2xl",
					children: c.name
				})]
			}, c.id))
		})] });
	}
});
//#endregion
//#region src/routes/checkout.tsx
var Route$14 = createFileRoute("/checkout")({
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
	component: CheckoutPage
});
function CheckoutPage() {
	const { cartLines, subtotal, shipping, total, settings } = useStore();
	const { orderUrl, hasItems } = useWhatsAppCheckout();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Checkout",
		description: "Your order opens in WhatsApp with every item, quantity, price and total ready to send.",
		crumbs: [{ label: "Checkout" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe max-w-xl py-14 text-center",
		children: !hasItems || !orderUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl",
				children: "Your bag is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Add products first, then checkout on WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "mt-8 inline-flex h-12 items-center justify-center rounded-md bg-ink px-8 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-ink-foreground",
				children: "Start shopping"
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Tap below to send your order on WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-3xl",
				children: formatBDT(total)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: [
					cartLines.length,
					" line",
					cartLines.length === 1 ? "" : "s",
					" · Delivery ",
					shipping === 0 ? "Free" : formatBDT(shipping),
					" · Subtotal",
					" ",
					formatBDT(subtotal)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: [
					"Message ",
					settings.phoneDisplay,
					" with your full order details ready to send."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "whatsapp",
				size: "lg",
				className: "mt-6",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: orderUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), " Open WhatsApp order"]
				})
			})
		] })
	})] });
}
//#endregion
//#region src/routes/contact.tsx
var Route$13 = createFileRoute("/contact")({
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
	component: ContactPage
});
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
//#region src/routes/exchange-policy.tsx
var Route$12 = createFileRoute("/exchange-policy")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "Exchange Policy",
		intro: "How to exchange a product at Blackwell BD.",
		sections: []
	})
});
//#endregion
//#region src/routes/faq.tsx
var Route$11 = createFileRoute("/faq")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "FAQ",
		intro: "Answers to common questions about orders, delivery and returns.",
		sections: []
	})
});
//#endregion
//#region src/routes/login.tsx
var Route$10 = createFileRoute("/login")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "Customer Login",
		intro: "Sign in to your Blackwell BD account.",
		sections: []
	})
});
//#endregion
//#region src/routes/privacy-policy.tsx
var Route$9 = createFileRoute("/privacy-policy")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "Privacy Policy",
		intro: "How Blackwell BD handles your information.",
		sections: []
	})
});
//#endregion
//#region src/routes/register.tsx
var Route$8 = createFileRoute("/register")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "Register",
		intro: "Create your Blackwell BD account.",
		sections: []
	})
});
//#endregion
//#region src/routes/return-policy.tsx
var Route$7 = createFileRoute("/return-policy")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "Return & Refund Policy",
		intro: "How returns and refunds work at Blackwell BD.",
		sections: []
	})
});
//#endregion
//#region src/routes/shipping-policy.tsx
var Route$6 = createFileRoute("/shipping-policy")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "Shipping & Delivery Policy",
		intro: "Delivery times and charges across Bangladesh.",
		sections: []
	})
});
//#endregion
//#region src/components/store/ProductList.tsx
function ProductList({ products }) {
	if (products.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "py-16 text-center text-muted-foreground",
		children: "No products found."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4",
		children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
	});
}
//#endregion
//#region src/routes/shop.tsx
var Route$5 = createFileRoute("/shop")({
	validateSearch: (s) => ({
		q: typeof s["q"] === "string" ? s["q"] : void 0,
		tag: [
			"trending",
			"bestseller",
			"new",
			"offer"
		].includes(String(s["tag"])) ? s["tag"] : void 0,
		sort: [
			"newest",
			"price-asc",
			"price-desc"
		].includes(String(s["sort"])) ? s["sort"] : void 0
	}),
	head: () => ({ meta: [
		{ title: "Shop All — Blackwell BD" },
		{
			name: "description",
			content: "Browse every Blackwell BD product: fashion, beauty, accessories and home."
		},
		{
			property: "og:title",
			content: "Shop All — Blackwell BD"
		},
		{
			property: "og:description",
			content: "Browse the full Blackwell BD collection."
		}
	] }),
	component: ShopPage
});
function ShopPage() {
	const { q, tag, sort } = Route$5.useSearch();
	const { products } = useStore();
	let list = products.filter((p) => (!tag || p.tags.includes(tag)) && (!q || p.name.toLowerCase().includes(q.toLowerCase())));
	if (sort === "newest") list = [...list].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
	if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
	if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: q ? `Results for “${q}”` : "Shop All",
		crumbs: [{ label: "Shop" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-luxe py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductList, { products: list })
	})] });
}
//#endregion
//#region src/routes/terms.tsx
var Route$4 = createFileRoute("/terms")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "Terms & Conditions",
		intro: "The terms for shopping at Blackwell BD.",
		sections: []
	})
});
//#endregion
//#region src/routes/track-order.tsx
var Route$3 = createFileRoute("/track-order")({
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {
		title: "Track My Order",
		intro: "Check the status of your Blackwell BD order.",
		sections: []
	})
});
//#endregion
//#region src/routes/wishlist.tsx
var Route$2 = createFileRoute("/wishlist")({
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
	component: () => {
		const { products, wishlist } = useStore();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Wishlist",
			crumbs: [{ label: "Wishlist" }]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductList, { products: products.filter((p) => wishlist.includes(p.id)) })
		})] });
	}
});
//#endregion
//#region src/routes/category.$slug.tsx
var Route$1 = createFileRoute("/category/$slug")({
	head: ({ params }) => ({ meta: [
		{ title: `${params.slug} — Blackwell BD` },
		{
			name: "description",
			content: "Shop this Blackwell BD category."
		},
		{
			property: "og:title",
			content: `${params.slug} — Blackwell BD`
		},
		{
			property: "og:description",
			content: "Shop this Blackwell BD category."
		}
	] }),
	component: () => {
		const { slug } = Route$1.useParams();
		const { categories, products } = useStore();
		const cat = categories.find((c) => c.slug === slug);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: cat?.name ?? "Category",
			crumbs: [{
				label: "Categories",
				to: "/categories"
			}, { label: cat?.name ?? slug }]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductList, { products: products.filter((p) => p.categoryId === cat?.id) })
		})] });
	}
});
//#endregion
//#region src/routes/product.$slug.tsx
var Route = createFileRoute("/product/$slug")({
	head: ({ params }) => {
		const p = seedProducts.find((x) => x.slug === params.slug);
		const title = `${p?.name ?? "Product"} — Blackwell BD`;
		const desc = p?.description ?? "Shop at Blackwell BD.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: desc
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: desc
			}
		] };
	},
	component: ProductPage
});
function ProductPage() {
	const { slug } = Route.useParams();
	const { products, addToCart, setCartOpen, settings } = useStore();
	const p = products.find((x) => x.slug === slug);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [size, setSize] = (0, import_react.useState)(void 0);
	const [color, setColor] = (0, import_react.useState)(void 0);
	if (!p) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "container-luxe py-24 text-center",
		children: "Product not found."
	});
	const s = size ?? p.sizes?.[0];
	const c = color ?? p.colors?.[0]?.name;
	const soldOut = p.stock <= 0;
	const waOrderUrl = whatsappUrl(settings.whatsappNumber, buildOrderMessage({
		storeName: settings.storeName,
		lines: [{
			name: p.name,
			qty,
			price: p.price,
			size: s,
			color: c
		}],
		subtotal: p.price * qty,
		shipping: 0,
		total: p.price * qty
	}));
	const add = () => {
		addToCart(p.id, qty, {
			size: s,
			color: c
		});
		toast.success("Added to your bag", { description: p.name });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe grid gap-10 py-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: p.images[0],
			alt: p.name,
			className: "aspect-[4/5] w-full rounded-lg object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: p.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rating, {
				value: p.rating,
				count: p.reviews,
				className: "mt-3",
				size: "md"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-2xl font-semibold",
				children: [
					formatBDT(p.price),
					" ",
					p.compareAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base text-muted-foreground line-through",
						children: formatBDT(p.compareAt)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm",
				children: soldOut ? "Out of stock" : `In stock (${p.stock})`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground",
				children: p.description
			}),
			p.colors && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: p.colors.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setColor(x.name),
					className: cn("rounded-md border px-3 py-1.5 text-sm", c === x.name && "border-foreground"),
					children: x.name
				}, x.name))
			}),
			p.sizes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: p.sizes.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSize(x),
					className: cn("min-w-11 rounded-md border px-3 py-1.5 text-sm", s === x && "border-foreground"),
					children: x
				}, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
					value: qty,
					onChange: setQty,
					max: Math.max(1, p.stock)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ink",
					size: "lg",
					disabled: soldOut,
					onClick: () => {
						add();
						setCartOpen(true);
					},
					children: "Add to Cart"
				})]
			}),
			soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "whatsapp",
				size: "lg",
				className: "mt-3 w-full",
				disabled: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), " Order via WhatsApp"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "whatsapp",
				size: "lg",
				className: "mt-3 w-full",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: waOrderUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), " Order via WhatsApp"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 list-disc space-y-1 pl-5 text-sm text-muted-foreground",
				children: p.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d }, d))
			})
		] })]
	});
}
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$21.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$22
	}),
	AboutRoute: Route$20.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$22
	}),
	AccountRoute: Route$19.update({
		id: "/account",
		path: "/account",
		getParentRoute: () => Route$22
	}),
	AdminRoute: Route$18.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$22
	}),
	CancellationPolicyRoute: Route$17.update({
		id: "/cancellation-policy",
		path: "/cancellation-policy",
		getParentRoute: () => Route$22
	}),
	CartRoute: Route$16.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$22
	}),
	CategoriesRoute: Route$15.update({
		id: "/categories",
		path: "/categories",
		getParentRoute: () => Route$22
	}),
	CheckoutRoute: Route$14.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$22
	}),
	ContactRoute: Route$13.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$22
	}),
	ExchangePolicyRoute: Route$12.update({
		id: "/exchange-policy",
		path: "/exchange-policy",
		getParentRoute: () => Route$22
	}),
	FaqRoute: Route$11.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$22
	}),
	LoginRoute: Route$10.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$22
	}),
	PrivacyPolicyRoute: Route$9.update({
		id: "/privacy-policy",
		path: "/privacy-policy",
		getParentRoute: () => Route$22
	}),
	RegisterRoute: Route$8.update({
		id: "/register",
		path: "/register",
		getParentRoute: () => Route$22
	}),
	ReturnPolicyRoute: Route$7.update({
		id: "/return-policy",
		path: "/return-policy",
		getParentRoute: () => Route$22
	}),
	ShippingPolicyRoute: Route$6.update({
		id: "/shipping-policy",
		path: "/shipping-policy",
		getParentRoute: () => Route$22
	}),
	ShopRoute: Route$5.update({
		id: "/shop",
		path: "/shop",
		getParentRoute: () => Route$22
	}),
	TermsRoute: Route$4.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$22
	}),
	TrackOrderRoute: Route$3.update({
		id: "/track-order",
		path: "/track-order",
		getParentRoute: () => Route$22
	}),
	WishlistRoute: Route$2.update({
		id: "/wishlist",
		path: "/wishlist",
		getParentRoute: () => Route$22
	}),
	CategorySlugRoute: Route$1.update({
		id: "/category/$slug",
		path: "/category/$slug",
		getParentRoute: () => Route$22
	}),
	ProductSlugRoute: Route.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$22
	})
};
var routeTree = Route$22._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
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
