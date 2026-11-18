import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "bn";

const STORAGE_KEY = "bw:locale";

const en = {
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
  footerBlurb:
    "Premium fashion, beauty and lifestyle — curated in Dhaka and delivered to your door across all 64 districts of Bangladesh.",
  announcements: [
    "Free delivery on orders over ৳5,000",
    "Cash on Delivery available across all 64 districts",
    "Order instantly on WhatsApp",
    "7-day easy returns & exchanges",
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
  addToCart: "Add to Bag",
  buyNow: "Buy Now",
  addToBag: "Add to Bag",
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
  newsletterText:
    "Early access to new drops, members-only offers and Eid edits — straight to your inbox. No spam, ever.",
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
  aboutIntro:
    "Blackwell BD is a premium fashion, beauty and lifestyle store based in Dhaka, built for modern Bangladesh.",
  aboutMissionTitle: "Our mission",
  aboutMission:
    "We curate quality pieces — from Jamdani weaves and panjabis to oud fragrances and home décor — and deliver them with the ease of Cash on Delivery, bKash, Nagad and WhatsApp ordering.",
  aboutWhyTitle: "Why shop with us",
  aboutWhy:
    "Nationwide delivery across all 64 districts, authentic products, careful packaging, and a 7-day easy return & exchange policy. Every order is checked before it leaves our Gulshan studio.",
  aboutPromiseTitle: "Our promise",
  aboutPromise:
    "Whether you browse on the website or order directly on WhatsApp, you get the same premium experience — clear pricing in BDT, honest stock updates, and friendly support in English and Bangla.",
  contactIntro: "We're here on WhatsApp, phone and email — usually reply within minutes during store hours.",
  contactWhatsAppTitle: "WhatsApp ordering",
  contactWhatsApp:
    "The fastest way to order. Add items to your bag and tap Checkout — we'll open a WhatsApp chat with your full order ready to send.",
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
      product: "Emerald Silk Kurti Set",
    },
    {
      name: "Tanvir Ahmed",
      city: "Chattogram",
      text: "Ordered the panjabi and chronograph over WhatsApp — they confirmed within minutes and it arrived in 3 days with Cash on Delivery. Premium packaging too.",
      product: "Ivory Cotton Panjabi",
    },
    {
      name: "Farzana Rahman",
      city: "Sylhet",
      text: "Oud Royale lasts the whole day. Finally a Bangladeshi store that feels truly luxurious from browsing to unboxing.",
      product: "Oud Royale Parfum",
    },
  ],
} as const;

type Dict = { [K in keyof typeof en]: (typeof en)[K] };

const bn: Dict = {
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
  footerBlurb:
    "প্রিমিয়াম ফ্যাশন, বিউটি ও লাইফস্টাইল — ঢাকায় কিউরেট করা এবং বাংলাদেশের ৬৪ জেলায় আপনার দোরগোড়ায় পৌঁছে দেওয়া।",
  announcements: [
    "৳৫,০০০-এর বেশি অর্ডারে ফ্রি ডেলিভারি",
    "৬৪ জেলায় ক্যাশ অন ডেলিভারি",
    "হোয়াটসঅ্যাপে তাৎক্ষণিক অর্ডার",
    "৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ",
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
  newsletterText:
    "নতুন ড্রপ, মেম্বার-অনলি অফার ও ঈদ এডিট — সরাসরি আপনার ইনবক্সে। কোনো স্প্যাম নয়।",
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
  aboutIntro:
    "ব্ল্যাকওয়েল বিডি ঢাকাভিত্তিক একটি প্রিমিয়াম ফ্যাশন, বিউটি ও লাইফস্টাইল স্টোর — আধুনিক বাংলাদেশের জন্য তৈরি।",
  aboutMissionTitle: "আমাদের লক্ষ্য",
  aboutMission:
    "আমরা জামদানি, পাঞ্জাবি থেকে উদ পারফিউম ও হোম ডেকোর পর্যন্ত মানসম্মত পণ্য বাছাই করি, এবং ক্যাশ অন ডেলিভারি, বিকাশ, নগদ ও হোয়াটসঅ্যাপ অর্ডারের মাধ্যমে সহজে পৌঁছে দিই।",
  aboutWhyTitle: "কেন আমাদের থেকে কিনবেন",
  aboutWhy:
    "৬৪ জেলায় ডেলিভারি, অথেন্টিক পণ্য, যত্নশীল প্যাকেজিং এবং ৭ দিনের সহজ রিটার্ন ও এক্সচেঞ্জ নীতি। গুলশান স্টুডিও থেকে পাঠানোর আগে প্রতিটি অর্ডার চেক করা হয়।",
  aboutPromiseTitle: "আমাদের প্রতিশ্রুতি",
  aboutPromise:
    "ওয়েবসাইটে ব্রাউজ করুন বা সরাসরি হোয়াটসঅ্যাপে অর্ডার করুন — একই প্রিমিয়াম অভিজ্ঞতা পাবেন। বিডিটিতে স্পষ্ট দাম, সৎ স্টক আপডেট, এবং ইংরেজি ও বাংলায় সাপোর্ট।",
  contactIntro: "আমরা হোয়াটসঅ্যাপ, ফোন ও ইমেইলে আছি — স্টোর সময়ে সাধারণত কয়েক মিনিটের মধ্যে উত্তর দিই।",
  contactWhatsAppTitle: "হোয়াটসঅ্যাপ অর্ডার",
  contactWhatsApp:
    "অর্ডারের সবচেয়ে দ্রুত উপায়। ব্যাগে পণ্য যোগ করে চেকআউট চাপুন — পুরো অর্ডারসহ হোয়াটসঅ্যাপ চ্যাট খুলে যাবে।",
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
      product: "এমারেল্ড সিল্ক কুর্তি সেট",
    },
    {
      name: "তানভীর আহমেদ",
      city: "চট্টগ্রাম",
      text: "হোয়াটসঅ্যাপে পাঞ্জাবি ও ক্রোনোগ্রাফ অর্ডার করেছি — কয়েক মিনিটেই নিশ্চিত করেছে, ৩ দিনে COD-তে পেয়েছি। প্যাকেজিংও প্রিমিয়াম।",
      product: "আইভরি কটন পাঞ্জাবি",
    },
    {
      name: "ফারজানা রহমান",
      city: "সিলেট",
      text: "উদ রয়্যাল সারাদিন থাকে। অবশেষে এমন এক বাংলাদেশি স্টোর যা ব্রাউজ থেকে আনবক্সিং পর্যন্ত লাক্সারি মনে হয়।",
      product: "উদ রয়্যাল পারফিউম",
    },
  ],
};

const dictionaries: Record<Locale, Dict> = { en, bn };

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dict;
  tf: (template: string, vars: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readLocale(): Locale {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "bn" || raw === "en") return raw;
  } catch {
    /* ignore */
  }
  return "bn";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("bn");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLocaleState(readLocale());
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = locale === "bn" ? "bn" : "en";
  }, [locale, ready]);

  const t = dictionaries[locale];
  const tf = useCallback((template: string, vars: Record<string, string | number>) => {
    return Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)), template);
  }, []);

  const value = useMemo(() => ({ locale, setLocale, t, tf }), [locale, setLocale, t, tf]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function pickLocalized<T extends { name: string; tagline?: string }>(
  item: T & { nameBn?: string; taglineBn?: string },
  locale: Locale,
): T {
  if (locale !== "bn") return item;
  return {
    ...item,
    name: item.nameBn ?? item.name,
    ...(item.tagline !== undefined ? { tagline: item.taglineBn ?? item.tagline } : {}),
  };
}

export function localizeProduct<
  T extends {
    name: string;
    nameBn?: string;
    description: string;
    descriptionBn?: string;
    details: string[];
    detailsBn?: string[];
    colors?: { name: string; nameBn?: string; hex: string }[] | undefined;
  },
>(product: T, locale: Locale) {
  const bn = locale === "bn";
  return {
    name: bn ? (product.nameBn ?? product.name) : product.name,
    description: bn ? (product.descriptionBn ?? product.description) : product.description,
    details: bn ? (product.detailsBn ?? product.details) : product.details,
    colors: product.colors?.map((c) => ({
      ...c,
      label: bn ? (c.nameBn ?? c.name) : c.name,
    })),
  };
}

export function localizeColorName(
  colors: { name: string; nameBn?: string }[] | undefined,
  colorName: string | undefined,
  locale: Locale,
): string | undefined {
  if (!colorName) return undefined;
  if (locale !== "bn" || !colors) return colorName;
  return colors.find((c) => c.name === colorName)?.nameBn ?? colorName;
}
