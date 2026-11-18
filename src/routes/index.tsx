import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { Countdown } from "@/components/home/Countdown";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ProductCard } from "@/components/store/ProductCard";
import { SectionHeading } from "@/components/store/SectionHeading";
import { Newsletter } from "@/components/store/Newsletter";
import { useStore } from "@/lib/store";
import type { Product, ProductTag } from "@/lib/catalog";
import catBags from "@/assets/cat-bags.jpg";
import catBeauty from "@/assets/cat-beauty.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blackwell BD — Premium Fashion, Beauty & Lifestyle Store in Bangladesh" },
      { name: "description", content: "Discover kurtis, panjabis, Jamdani sarees, oud perfumes, watches and home décor. Cash on Delivery nationwide, bKash & Nagad, and WhatsApp ordering." },
      { property: "og:title", content: "Blackwell BD — Premium Fashion, Beauty & Lifestyle" },
      { property: "og:description", content: "Shop the new collection with Cash on Delivery across all 64 districts of Bangladesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const trust = [
  { Icon: Truck, title: "Nationwide Delivery", text: "1–2 days in Dhaka, 3–5 days elsewhere" },
  { Icon: ShieldCheck, title: "Cash on Delivery", text: "Pay when your order arrives" },
  { Icon: RotateCcw, title: "7-Day Easy Returns", text: "Hassle-free exchanges & refunds" },
  { Icon: BadgeCheck, title: "100% Authentic", text: "Quality-checked before dispatch" },
];

function byTag(products: Product[], tag: ProductTag, n: number) {
  return products.filter((p) => p.tags.includes(tag)).slice(0, n);
}

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}

function ViewAll({ to, search, label = "View all" }: { to: "/shop"; search?: { tag?: ProductTag; sort?: "newest" }; label?: string }) {
  return (
    <Link to={to} search={search ?? {}} className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground">
      {label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

function PromoBody({ img, eyebrow, title, text }: { img: string; eyebrow: string; title: string; text: string }) {
  return (
    <>
      <img src={img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[1.2s] group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      <div className="relative p-8 text-ink-foreground sm:p-10">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h3 className="mt-2 text-4xl sm:text-5xl">{title}</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-foreground/75">{text}</p>
        <span className="mt-6 inline-flex h-12 items-center rounded-md bg-ink-foreground px-7 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-ink transition-colors group-hover:bg-gold">Shop now</span>
      </div>
    </>
  );
}

function HomePage() {
  const { products, categories } = useStore();
  const newest = [...products].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 4);

  return (
    <>
      <HeroSlider />

      <section className="border-b border-border bg-card">
        <div className="container-luxe grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {trust.map(({ Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand"><Icon className="h-5 w-5 text-gold-deep" /></div>
              <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxe py-20 sm:py-24">
        <SectionHeading eyebrow="Shop by category" title="Curated for every part of you" action={<Link to="/categories" className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]">All categories <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>} />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Link key={c.id} to="/category/$slug" params={{ slug: c.slug }} className={`group relative overflow-hidden rounded-lg bg-sand ${i === 0 ? "lg:row-span-2" : ""}`}>
              <img src={c.image} alt={c.name} width={768} height={960} loading="lazy" className={`h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105 ${i === 0 ? "aspect-[4/5] lg:aspect-auto" : "aspect-[4/5] lg:aspect-[5/4]"}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-ink-foreground sm:p-6">
                <p className="eyebrow hidden text-[0.6rem] text-gold sm:block">{c.tagline}</p>
                <h3 className="mt-1 text-xl leading-tight sm:text-3xl">{c.name}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-ink-foreground/85 transition-all group-hover:gap-3">Explore <ArrowRight className="h-3.5 w-3.5" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-20 sm:pb-24">
        <SectionHeading eyebrow="Trending now" title="What Bangladesh is wearing" action={<ViewAll to="/shop" search={{ tag: "trending" }} />} />
        <ProductGrid products={byTag(products, "trending", 8)} />
      </section>

      <section className="container-luxe grid gap-4 pb-20 sm:gap-6 sm:pb-24 lg:grid-cols-2">
        <Link to="/shop" search={{ tag: "offer" }} className="group relative flex min-h-[340px] items-end overflow-hidden rounded-lg bg-ink sm:min-h-[420px]">
          <PromoBody img={catBags} eyebrow="Up to 20% off" title="The Leather Edit" text="Totes, crossbodies & wallets in genuine leather." />
        </Link>
        <Link to="/category/$slug" params={{ slug: "beauty" }} className="group relative flex min-h-[340px] items-end overflow-hidden rounded-lg bg-ink sm:min-h-[420px]">
          <PromoBody img={catBeauty} eyebrow="New season" title="Beauty & Fragrance" text="Brightening serums, velvet lips & signature oud." />
        </Link>
      </section>

      <section className="bg-sand/50 py-20 sm:py-24">
        <div className="container-luxe">
          <SectionHeading eyebrow="Best sellers" title="Loved by thousands" description="Our most-ordered pieces, rated by customers across the country." action={<ViewAll to="/shop" search={{ tag: "bestseller" }} />} />
          <ProductGrid products={byTag(products, "bestseller", 8)} />
        </div>
      </section>

      <section className="bg-ink-gradient py-20 text-ink-foreground sm:py-24">
        <div className="container-luxe grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-gold">Special offers</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">The Weekly <span className="italic text-gold-gradient">Gold</span> Sale</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">Handpicked favourites at up to 25% off — this week only, while stock lasts.</p>
            <div className="mt-8"><Countdown /></div>
            <Link to="/shop" search={{ tag: "offer" }} className="mt-8 inline-flex h-14 items-center justify-center rounded-md bg-gold-gradient px-10 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-gold-foreground shadow-gold transition-all hover:-translate-y-0.5">Shop all offers</Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:col-span-8 lg:grid-cols-3 [&_.text-muted-foreground]:text-ink-foreground/55">
            {byTag(products, "offer", 6).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 sm:py-24">
        <SectionHeading eyebrow="Just landed" title="New arrivals" action={<ViewAll to="/shop" search={{ sort: "newest" }} />} />
        <ProductGrid products={newest} />
      </section>

      <ReviewsSection />

      <Newsletter />
    </>
  );
}
