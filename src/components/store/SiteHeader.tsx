import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { formatBDT } from "@/lib/format";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

function AnnouncementBar() {
  const { t } = useI18n();
  const items = [...t.announcements, ...t.announcements];
  return (
    <div className="overflow-hidden bg-ink text-ink-foreground">
      <div className="flex w-max animate-marquee gap-12 py-2.5 hover:[animation-play-state:paused]">
        {items.map((a, i) => (
          <span key={i} className="eyebrow flex items-center gap-12 text-[0.62rem] text-ink-foreground/85">
            {a}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const { products } = useStore();
  const { t } = useI18n();
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return products.filter((p) => `${p.name} ${p.description}`.toLowerCase().includes(term)).slice(0, 6);
  }, [q, products]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
    navigate({ to: "/shop", search: { q: q.trim() || undefined } });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-[12%] max-w-2xl translate-y-0 gap-0 p-0">
        <DialogTitle className="sr-only">{t.searchProducts}</DialogTitle>
        <DialogDescription className="sr-only">{t.searchProducts}</DialogDescription>
        <form onSubmit={submit} className="flex items-center gap-3 border-b border-border px-5">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="h-16 flex-1 bg-transparent font-display text-xl outline-none placeholder:text-muted-foreground"
            aria-label={t.searchProducts}
          />
        </form>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {q.trim() === "" ? (
            <div className="p-4">
              <p className="eyebrow mb-3 text-muted-foreground">{t.popularSearches}</p>
              <div className="flex flex-wrap gap-2">
                {["Panjabi", "Saree", "Oud", "Watch", "Tote", "Serum"].map((s) => (
                  <button key={s} onClick={() => setQ(s)} className="rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-foreground">{s}</button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="p-6 text-center text-sm text-muted-foreground">{t.noProductsMatch} "{q}".</p>
          ) : (
            <ul>
              {results.map((p) => (
                <li key={p.id}>
                  <Link to="/product/$slug" params={{ slug: p.slug }} onClick={() => onOpenChange(false)} className="flex items-center gap-4 rounded-md p-3 transition-colors hover:bg-sand/60">
                    <img src={p.images[0]} alt="" className="h-14 w-12 rounded object-cover" />
                    <span className="flex-1 font-display text-lg">{p.name}</span>
                    <span className="text-sm font-medium">{formatBDT(p.price)}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button onClick={submit} className="w-full p-3 text-center text-xs uppercase tracking-[0.18em] text-gold-deep hover:underline">{t.seeAllResults}</button>
              </li>
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

const navLink = "relative py-2 text-[0.78rem] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100";

export function SiteHeader() {
  const { cartCount, wishlist, setCartOpen, categories, session, hydrated } = useStore();
  const { t, locale } = useI18n();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const catName = (c: (typeof categories)[number]) => (locale === "bn" ? c.nameBn : c.name);

  return (
    <>
      <AnnouncementBar />
      <header className={cn("sticky top-0 z-40 border-b transition-all duration-300", scrolled ? "border-border bg-background/90 backdrop-blur-lg shadow-card" : "border-transparent bg-background")}>
        <div className="container-luxe flex h-[4.5rem] items-center gap-4">
          <button className="-ml-2 p-2 lg:hidden" aria-label={t.openMenu} onClick={() => setMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>

          <Logo className="mr-auto lg:mr-0" />

          <nav className="mx-auto hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Main">
            <Link to="/" className={navLink} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground after:scale-x-100" }}>{t.home}</Link>
            <Link to="/shop" className={navLink} activeProps={{ className: "text-foreground after:scale-x-100" }}>{t.shopAll}</Link>
            <div className="group relative">
              <Link to="/categories" className={cn(navLink, "flex items-center gap-1")}>{t.categories} <ChevronDown className="h-3 w-3" /></Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-3 gap-3 rounded-lg border border-border bg-card p-4 shadow-luxe">
                  {categories.map((c) => (
                    <Link key={c.id} to="/category/$slug" params={{ slug: c.slug }} className="group/cat block">
                      <div className="aspect-[4/5] overflow-hidden rounded-md bg-sand">
                        <img src={c.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover/cat:scale-105" loading="lazy" />
                      </div>
                      <p className="mt-2 font-display text-base leading-tight">{catName(c)}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/shop" search={{ sort: "newest" }} className={navLink}>{t.newIn}</Link>
            <Link to="/shop" search={{ tag: "offer" }} className={cn(navLink, "text-sale")}>{t.offers}</Link>
            <Link to="/about" className={navLink} activeProps={{ className: "text-foreground after:scale-x-100" }}>{t.about}</Link>
            <Link to="/contact" className={navLink} activeProps={{ className: "text-foreground after:scale-x-100" }}>{t.contact}</Link>
          </nav>

          <div className="flex items-center gap-0.5 sm:gap-1">
            <LanguageSwitcher compact className="mr-1 hidden sm:inline-flex" />
            <button aria-label={t.search} onClick={() => setSearchOpen(true)} className="rounded-full p-2.5 transition-colors hover:bg-sand"><Search className="h-5 w-5" /></button>
            <Link to={session ? "/account" : "/login"} aria-label={t.account} className="hidden rounded-full p-2.5 transition-colors hover:bg-sand sm:block"><User className="h-5 w-5" /></Link>
            <Link to="/wishlist" aria-label={t.wishlist} className="relative hidden rounded-full p-2.5 transition-colors hover:bg-sand sm:block">
              <Heart className="h-5 w-5" />
              {hydrated && wishlist.length > 0 && <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[0.6rem] font-bold text-gold-foreground">{wishlist.length}</span>}
            </Link>
            <button aria-label={t.openBag} onClick={() => setCartOpen(true)} className="relative rounded-full p-2.5 transition-colors hover:bg-sand">
              <ShoppingBag className="h-5 w-5" />
              {hydrated && cartCount > 0 && <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[0.6rem] font-bold text-ink-foreground">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="flex w-[85%] flex-col gap-0 p-0 sm:max-w-sm">
          <SheetTitle className="sr-only">{t.openMenu}</SheetTitle>
          <SheetDescription className="sr-only">{t.openMenu}</SheetDescription>
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <Logo />
            <LanguageSwitcher compact />
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-4" onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setMenuOpen(false); }}>
            <ul className="space-y-1 font-display text-2xl">
              <li><Link to="/" className="block py-2">{t.home}</Link></li>
              <li><Link to="/shop" className="block py-2">{t.shopAll}</Link></li>
              <li><Link to="/shop" search={{ sort: "newest" }} className="block py-2">{t.newIn}</Link></li>
              <li><Link to="/shop" search={{ tag: "offer" }} className="block py-2 text-sale">{t.specialOffers}</Link></li>
            </ul>
            <p className="eyebrow mb-2 mt-6 text-gold-deep">{t.categories}</p>
            <ul className="space-y-1">
              {categories.map((c) => (
                <li key={c.id}><Link to="/category/$slug" params={{ slug: c.slug }} className="flex items-center gap-3 py-2"><img src={c.image} alt="" className="h-10 w-10 rounded object-cover" />{catName(c)}</Link></li>
              ))}
            </ul>
            <p className="eyebrow mb-2 mt-6 text-gold-deep">{t.help}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/track-order">{t.trackOrder}</Link></li>
              <li><Link to="/about">{t.aboutUs}</Link></li>
              <li><Link to="/contact">{t.contactUs}</Link></li>
              <li><Link to="/faq">{t.faq}</Link></li>
            </ul>
          </nav>
          <div className="grid grid-cols-2 gap-2 border-t border-border p-4">
            <Link to={session ? "/account" : "/login"} onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-md border border-border py-3 text-sm"><User className="h-4 w-4" /> {session ? t.account : t.signIn}</Link>
            <Link to="/wishlist" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-md border border-border py-3 text-sm"><Heart className="h-4 w-4" /> {t.wishlist}</Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
