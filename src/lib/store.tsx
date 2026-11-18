import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { seedBanners, seedCategories, seedProducts, type Banner, type Category, type Product } from "./catalog";
import { calcShipping, defaultSettings, type DeliveryZone, type StoreSettings } from "./settings";

export interface CartItem {
  key: string;
  productId: string;
  qty: number;
  size?: string | undefined;
  color?: string | undefined;
}

export type PaymentMethod = "cod" | "bkash" | "nagad";
export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";

export interface OrderCustomer {
  fullName: string;
  phone: string;
  email: string;
  district: string;
  city: string;
  area: string;
  address: string;
  notes: string;
}

export interface OrderLine {
  productId: string;
  name: string;
  image: string;
  price: number;
  qty: number;
  size?: string | undefined;
  color?: string | undefined;
}

export interface Order {
  id: string;
  createdAt: string;
  customer: OrderCustomer;
  lines: OrderLine[];
  subtotal: number;
  shipping: number;
  total: number;
  payment: PaymentMethod;
  paymentRef?: string | undefined;
  status: OrderStatus;
  channel: "website" | "whatsapp";
  userEmail?: string | undefined;
}

export interface Account {
  name: string;
  email: string;
  phone: string;
  password: string;
  address?: string | undefined;
  district?: string | undefined;
}

export type Session = Omit<Account, "password">;

export const paymentLabels: Record<PaymentMethod, string> = {
  cod: "Cash on Delivery",
  bkash: "bKash",
  nagad: "Nagad",
};

const KEYS = {
  products: "bw:products",
  categories: "bw:categories",
  banners: "bw:banners",
  settings: "bw:settings",
  cart: "bw:cart",
  wishlist: "bw:wishlist",
  orders: "bw:orders",
  accounts: "bw:accounts",
  session: "bw:session",
  zone: "bw:zone",
} as const;

function read<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or unavailable — ignore in demo mode
  }
}

export function cartKey(productId: string, size?: string, color?: string) {
  return [productId, size ?? "", color ?? ""].join("|");
}

function newOrderId() {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `BW-${n}`;
}

interface StoreValue {
  hydrated: boolean;
  products: Product[];
  categories: Category[];
  banners: Banner[];
  settings: StoreSettings;
  cart: CartItem[];
  wishlist: string[];
  orders: Order[];
  session: Session | null;
  zone: DeliveryZone;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  setZone: (z: DeliveryZone) => void;

  getProduct: (id: string) => Product | undefined;
  getCategory: (id: string) => Category | undefined;

  addToCart: (productId: string, qty?: number, opts?: { size?: string | undefined; color?: string | undefined }) => void;
  updateQty: (key: string, qty: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void;
  cartLines: { item: CartItem; product: Product }[];
  cartCount: number;
  subtotal: number;
  shipping: number;
  total: number;

  toggleWishlist: (productId: string) => boolean;
  inWishlist: (productId: string) => boolean;

  placeOrder: (data: {
    customer: OrderCustomer;
    payment: PaymentMethod;
    paymentRef?: string | undefined;
    channel: Order["channel"];
    lines: OrderLine[];
    subtotal: number;
    shipping: number;
  }) => Order;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  deleteOrder: (id: string) => void;

  register: (a: Account) => { ok: true } | { ok: false; error: string };
  login: (email: string, password: string) => { ok: true } | { ok: false; error: string };
  logout: () => void;
  updateProfile: (p: Partial<Session>) => void;

  saveProduct: (p: Product) => void;
  deleteProduct: (id: string) => void;
  saveCategory: (c: Category) => void;
  deleteCategory: (id: string) => void;
  saveBanner: (b: Banner) => void;
  deleteBanner: (id: string) => void;
  saveSettings: (s: StoreSettings) => void;
  resetDemoData: () => void;
}

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [categories, setCategories] = useState<Category[]>(seedCategories);
  const [banners, setBanners] = useState<Banner[]>(seedBanners);
  const [settings, setSettings] = useState<StoreSettings>(defaultSettings);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [session, setSession] = useState<Session | null>(null);
  const [zone, setZone] = useState<DeliveryZone>("inside");
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    setProducts(read(KEYS.products, seedProducts));
    setCategories(read(KEYS.categories, seedCategories));
    setBanners(read(KEYS.banners, seedBanners));
    // Always apply live store contact details so old localStorage demos can't keep dummy numbers.
    setSettings({
      ...defaultSettings,
      ...read<Partial<StoreSettings>>(KEYS.settings, {}),
      whatsappNumber: defaultSettings.whatsappNumber,
      phoneDisplay: defaultSettings.phoneDisplay,
      email: defaultSettings.email,
      bkashNumber: defaultSettings.bkashNumber,
      nagadNumber: defaultSettings.nagadNumber,
    });
    setCart(read(KEYS.cart, []));
    setWishlist(read(KEYS.wishlist, []));
    setOrders(read(KEYS.orders, []));
    setAccounts(read(KEYS.accounts, []));
    setSession(read<Session | null>(KEYS.session, null));
    setZone(read<DeliveryZone>(KEYS.zone, "inside"));
    setHydrated(true);
  }, []);

  const first = useRef(true);
  useEffect(() => {
    if (!hydrated) return;
    if (first.current) {
      first.current = false;
    }
    write(KEYS.cart, cart);
    write(KEYS.wishlist, wishlist);
    write(KEYS.orders, orders);
    write(KEYS.accounts, accounts);
    write(KEYS.session, session);
    write(KEYS.zone, zone);
  }, [hydrated, cart, wishlist, orders, accounts, session, zone]);

  // Catalog data is only written once the admin changes it, so seed updates still reach shoppers.
  const persistCatalog = useCallback((key: string, value: unknown) => write(key, value), []);

  const getProduct = useCallback((id: string) => products.find((p) => p.id === id), [products]);
  const getCategory = useCallback((id: string) => categories.find((c) => c.id === id), [categories]);

  const addToCart: StoreValue["addToCart"] = useCallback((productId, qty = 1, opts) => {
    const key = cartKey(productId, opts?.size, opts?.color);
    setCart((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) return prev.map((i) => (i.key === key ? { ...i, qty: Math.min(99, i.qty + qty) } : i));
      return [...prev, { key, productId, qty, size: opts?.size, color: opts?.color }];
    });
  }, []);

  const updateQty = useCallback((key: string, qty: number) => {
    setCart((prev) => (qty <= 0 ? prev.filter((i) => i.key !== key) : prev.map((i) => (i.key === key ? { ...i, qty: Math.min(99, qty) } : i))));
  }, []);
  const removeFromCart = useCallback((key: string) => setCart((prev) => prev.filter((i) => i.key !== key)), []);
  const clearCart = useCallback(() => setCart([]), []);

  const cartLines = useMemo(
    () =>
      cart
        .map((item) => ({ item, product: products.find((p) => p.id === item.productId) }))
        .filter((l): l is { item: CartItem; product: Product } => Boolean(l.product)),
    [cart, products],
  );
  const cartCount = cartLines.reduce((n, l) => n + l.item.qty, 0);
  const subtotal = cartLines.reduce((n, l) => n + l.item.qty * l.product.price, 0);
  const shipping = calcShipping(subtotal, zone, settings);
  const total = subtotal + shipping;

  const inWishlist = useCallback((id: string) => wishlist.includes(id), [wishlist]);
  const toggleWishlist = useCallback(
    (id: string) => {
      const adding = !wishlist.includes(id);
      setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
      return adding;
    },
    [wishlist],
  );

  const placeOrder: StoreValue["placeOrder"] = useCallback(
    (data) => {
      const order: Order = {
        id: newOrderId(),
        createdAt: new Date().toISOString(),
        customer: data.customer,
        lines: data.lines,
        subtotal: data.subtotal,
        shipping: data.shipping,
        total: data.subtotal + data.shipping,
        payment: data.payment,
        paymentRef: data.paymentRef,
        status: "pending",
        channel: data.channel,
        userEmail: session?.email,
      };
      setOrders((prev) => [order, ...prev]);
      return order;
    },
    [session],
  );
  const updateOrderStatus = useCallback((id: string, status: OrderStatus) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  }, []);
  const deleteOrder = useCallback((id: string) => setOrders((prev) => prev.filter((o) => o.id !== id)), []);

  const register: StoreValue["register"] = useCallback(
    (a) => {
      const email = a.email.trim().toLowerCase();
      if (accounts.some((x) => x.email === email)) return { ok: false, error: "An account with this email already exists." };
      const acc = { ...a, email };
      setAccounts((prev) => [...prev, acc]);
      const { password: _pw, ...rest } = acc;
      setSession(rest);
      return { ok: true };
    },
    [accounts],
  );
  const login: StoreValue["login"] = useCallback(
    (email, password) => {
      const acc = accounts.find((x) => x.email === email.trim().toLowerCase());
      if (!acc || acc.password !== password) return { ok: false, error: "Incorrect email or password." };
      const { password: _pw, ...rest } = acc;
      setSession(rest);
      return { ok: true };
    },
    [accounts],
  );
  const logout = useCallback(() => setSession(null), []);
  const updateProfile = useCallback((p: Partial<Session>) => {
    setSession((prev) => {
      if (!prev) return prev;
      const next = { ...prev, ...p };
      setAccounts((accs) => accs.map((a) => (a.email === prev.email ? { ...a, ...p, email: a.email } : a)));
      return next;
    });
  }, []);

  const saveProduct = useCallback(
    (p: Product) =>
      setProducts((prev) => {
        const next = prev.some((x) => x.id === p.id) ? prev.map((x) => (x.id === p.id ? p : x)) : [p, ...prev];
        persistCatalog(KEYS.products, next);
        return next;
      }),
    [persistCatalog],
  );
  const deleteProduct = useCallback(
    (id: string) =>
      setProducts((prev) => {
        const next = prev.filter((x) => x.id !== id);
        persistCatalog(KEYS.products, next);
        return next;
      }),
    [persistCatalog],
  );
  const saveCategory = useCallback(
    (c: Category) =>
      setCategories((prev) => {
        const next = prev.some((x) => x.id === c.id) ? prev.map((x) => (x.id === c.id ? c : x)) : [...prev, c];
        persistCatalog(KEYS.categories, next);
        return next;
      }),
    [persistCatalog],
  );
  const deleteCategory = useCallback(
    (id: string) =>
      setCategories((prev) => {
        const next = prev.filter((x) => x.id !== id);
        persistCatalog(KEYS.categories, next);
        return next;
      }),
    [persistCatalog],
  );
  const saveBanner = useCallback(
    (b: Banner) =>
      setBanners((prev) => {
        const next = prev.some((x) => x.id === b.id) ? prev.map((x) => (x.id === b.id ? b : x)) : [...prev, b];
        persistCatalog(KEYS.banners, next);
        return next;
      }),
    [persistCatalog],
  );
  const deleteBanner = useCallback(
    (id: string) =>
      setBanners((prev) => {
        const next = prev.filter((x) => x.id !== id);
        persistCatalog(KEYS.banners, next);
        return next;
      }),
    [persistCatalog],
  );
  const saveSettings = useCallback(
    (s: StoreSettings) => {
      setSettings(s);
      persistCatalog(KEYS.settings, s);
    },
    [persistCatalog],
  );
  const resetDemoData = useCallback(() => {
    [KEYS.products, KEYS.categories, KEYS.banners, KEYS.settings].forEach((k) => window.localStorage.removeItem(k));
    setProducts(seedProducts);
    setCategories(seedCategories);
    setBanners(seedBanners);
    setSettings(defaultSettings);
  }, []);

  const value: StoreValue = {
    hydrated, products, categories, banners, settings, cart, wishlist, orders, session, zone,
    cartOpen, setCartOpen, setZone, getProduct, getCategory,
    addToCart, updateQty, removeFromCart, clearCart, cartLines, cartCount, subtotal, shipping, total,
    toggleWishlist, inWishlist, placeOrder, updateOrderStatus, deleteOrder,
    register, login, logout, updateProfile,
    saveProduct, deleteProduct, saveCategory, deleteCategory, saveBanner, deleteBanner, saveSettings, resetDemoData,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside <StoreProvider>");
  return ctx;
}
