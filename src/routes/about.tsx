import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, HeartHandshake, MapPinned, Sparkles, Truck } from "lucide-react";
import { PageHeader } from "@/components/store/PageHeader";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Blackwell BD" },
      {
        name: "description",
        content:
          "Blackwell BD is a premium fashion, beauty and lifestyle store from Dhaka — curated pieces, nationwide Cash on Delivery, and WhatsApp ordering across Bangladesh.",
      },
      { property: "og:title", content: "About Us — Blackwell BD" },
      {
        property: "og:description",
        content: "Our story, values and promise to customers across Bangladesh.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    Icon: Sparkles,
    title: "Curated, not crowded",
    text: "Every product is selected for fabric quality, finish and lasting style — from Jamdani weaves and panjabis to oud fragrances, leather goods and home décor.",
  },
  {
    Icon: Truck,
    title: "Nationwide reach",
    text: "We deliver across all 64 districts of Bangladesh with clear timelines: typically 1–2 days in Dhaka and 3–5 days elsewhere, with Cash on Delivery available.",
  },
  {
    Icon: HeartHandshake,
    title: "Human support",
    text: "Order on the website or WhatsApp — the same team confirms stock, sizes and delivery. We reply in English and Bangla during store hours.",
  },
  {
    Icon: BadgeCheck,
    title: "Quality before dispatch",
    text: "Orders are checked and packed with care from our Dhaka studio. Enjoy a 7-day easy return and exchange policy on eligible items.",
  },
];

function AboutPage() {
  const { settings } = useStore();

  return (
    <>
      <PageHeader
        title="About Us"
        description="Premium fashion, beauty and lifestyle — thoughtfully curated in Dhaka for modern Bangladesh."
        crumbs={[{ label: "About Us" }]}
      />

      <section className="container-luxe grid gap-12 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="lg:col-span-7">
          <p className="eyebrow text-gold-deep">Our story</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">A quieter kind of luxury for every celebration</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Blackwell BD began with a simple idea: shopping for elevated everyday pieces in Bangladesh should feel as considered as the products themselves.
              Too many online stores felt either mass-market or hard to trust — unclear photos, delayed replies, and packaging that didn’t match the price.
            </p>
            <p>
              We built Blackwell as a boutique-style storefront with a clear promise: authentic products, honest stock, transparent pricing in Bangladeshi Taka,
              and support that actually answers. Whether you are dressing for Eid, refreshing a wardrobe staple, or gifting perfume and home fragrance, we want the
              journey — from first browse to unboxing — to feel premium.
            </p>
            <p>
              Today we serve customers in every district through our website and WhatsApp ordering. Cash on Delivery, bKash and Nagad keep checkout familiar;
              careful packing and quality checks keep the experience consistent.
            </p>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-lg border border-border bg-sand/50 p-8 sm:p-10">
            <p className="eyebrow text-gold-deep">At a glance</p>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPinned className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                <span>
                  <strong className="block font-medium text-foreground">Based in Dhaka</strong>
                  {settings.address}
                </span>
              </li>
              <li>
                <strong className="font-medium text-foreground">Categories</strong>
                <p className="mt-1 text-muted-foreground">Women’s & men’s fashion, beauty & fragrance, bags & accessories, watches & jewelry, home & lifestyle.</p>
              </li>
              <li>
                <strong className="font-medium text-foreground">Ordering</strong>
                <p className="mt-1 text-muted-foreground">Shop online, add to bag, then checkout on WhatsApp with your full order details — or message us anytime.</p>
              </li>
              <li>
                <strong className="font-medium text-foreground">Payments</strong>
                <p className="mt-1 text-muted-foreground">Cash on Delivery nationwide, plus bKash and Nagad.</p>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="border-y border-border bg-card py-16 sm:py-20">
        <div className="container-luxe">
          <p className="eyebrow text-center text-gold-deep">What we stand for</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl sm:text-4xl">Values that shape every order</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-lg border border-border bg-background p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sand">
                  <Icon className="h-5 w-5 text-gold-deep" />
                </div>
                <h3 className="mt-5 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow text-gold-deep">Our mission</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Make premium shopping feel trustworthy</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We curate pieces that balance craft and contemporary taste — hand-finished embroidery, thoughtful materials, and accessories you keep for seasons.
            Behind the scenes, we focus on clear communication: size guidance, delivery estimates, and order updates so you never wonder where your parcel is.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Blackwell is for people who care how things look and how brands behave — fair policies, respectful packaging, and support that treats every customer as a guest, not a ticket number.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold-deep">Our promise</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">The same experience, every channel</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Browse the full collection on our website, save favourites to your wishlist, and build a bag with accurate prices in BDT. When you are ready, checkout opens WhatsApp
            with product names, quantities, line prices, delivery estimate and total — so you can send a complete order in one message.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Prefer talking first? Message us on WhatsApp at {settings.phoneDisplay} or email {settings.email}. We are here to help with styling advice, stock checks and order tracking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-flex h-12 items-center justify-center rounded-md bg-ink px-8 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-ink-foreground"
            >
              Shop the collection
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border px-8 text-[0.75rem] font-medium uppercase tracking-[0.18em]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink-gradient py-16 text-ink-foreground sm:py-20">
        <div className="container-luxe max-w-3xl text-center">
          <p className="eyebrow text-gold">Thank you</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">From our studio in Dhaka to your door</h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
            Every order supports a small team that cares about the details — the fold of a dupatta, the finish on a buckle, the note that arrives with your parcel.
            We are grateful to customers across Bangladesh who trust Blackwell BD for celebrations, everyday wear and thoughtful gifts.
          </p>
        </div>
      </section>
    </>
  );
}
