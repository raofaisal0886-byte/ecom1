import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/store/PageHeader";
import { WhatsAppIcon } from "@/components/store/WhatsAppIcon";
import { useStore } from "@/lib/store";
import { openWhatsApp, whatsappUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Blackwell BD" },
      {
        name: "description",
        content:
          "Contact Blackwell BD on WhatsApp +880 1714-920684 or email blackwellbd.official@gmail.com. Store hours, address and order support for Bangladesh.",
      },
      { property: "og:title", content: "Contact Us — Blackwell BD" },
      {
        property: "og:description",
        content: "WhatsApp, phone and email support for Blackwell BD orders across Bangladesh.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { settings } = useStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const waHref = whatsappUrl(
    settings.whatsappNumber,
    `Hello ${settings.storeName}! I would like some help with an order / product question.`,
  );

  const submit = (e: React.FormEvent) => {
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
      message.trim(),
    ]
      .filter(Boolean)
      .join("\n");
    openWhatsApp(settings.whatsappNumber, body);
    toast.success("Opening WhatsApp", { description: "Your message is ready to send." });
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We’re here on WhatsApp, phone and email — usually reply within minutes during store hours."
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="container-luxe grid gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
        <div className="space-y-6 lg:col-span-5">
          <div>
            <p className="eyebrow text-gold-deep">Get in touch</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Let’s help you find the right piece</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Whether you need a size check, gift advice, order tracking or want to place an order directly, reach us through any channel below.
              WhatsApp is fastest for ordering — add items to your bag and tap Checkout to send a complete order message automatically.
            </p>
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-whatsapp"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-medium">WhatsApp (preferred)</span>
              <span className="mt-1 block text-base font-semibold tracking-wide">{settings.phoneDisplay}</span>
              <span className="mt-1 block text-xs text-muted-foreground">Tap to chat · Order confirmations & support</span>
            </span>
          </a>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex gap-4 rounded-lg border border-border p-5">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
              <div>
                <p className="text-sm font-medium">Phone / Call</p>
                <a href={`tel:+${settings.whatsappNumber}`} className="mt-1 block text-sm hover:text-gold-deep">
                  {settings.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-border p-5">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <a href={`mailto:${settings.email}`} className="mt-1 block break-all text-sm hover:text-gold-deep">
                  {settings.email}
                </a>
                <p className="mt-1 text-xs text-muted-foreground">For invoices, partnerships & written queries</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-border p-5 sm:col-span-2 lg:col-span-1">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
              <div>
                <p className="text-sm font-medium">Studio address</p>
                <p className="mt-1 text-sm text-muted-foreground">{settings.address}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-border p-5 sm:col-span-2 lg:col-span-1">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
              <div>
                <p className="text-sm font-medium">Store hours</p>
                <p className="mt-1 text-sm text-muted-foreground">Saturday–Thursday: 10:00 AM – 8:00 PM</p>
                <p className="text-sm text-muted-foreground">Friday: 3:00 PM – 8:00 PM (Bangladesh time)</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-sand/60 p-5 text-sm leading-relaxed text-muted-foreground">
            <p className="flex items-start gap-2 font-medium text-foreground">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
              Ordering tip
            </p>
            <p className="mt-2">
              Add products to your bag, then use <strong className="text-foreground">Checkout</strong> — WhatsApp opens with item names, quantities, prices,
              delivery fee and total ready to send to {settings.phoneDisplay}.
            </p>
            <Link to="/shop" className="mt-3 inline-block text-xs font-medium uppercase tracking-[0.18em] text-gold-deep hover:underline">
              Continue shopping
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form and we’ll open WhatsApp with your details pre-filled so you can send it in one tap.
            </p>
            <form onSubmit={submit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm sm:col-span-1">
                <span className="mb-1.5 block font-medium">Full name</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 w-full rounded-md border border-border bg-background px-4 outline-none transition-colors focus:border-foreground"
                  placeholder="Your name"
                  maxLength={80}
                />
              </label>
              <label className="block text-sm sm:col-span-1">
                <span className="mb-1.5 block font-medium">Phone (optional)</span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 w-full rounded-md border border-border bg-background px-4 outline-none transition-colors focus:border-foreground"
                  placeholder="01XXXXXXXXX"
                  maxLength={20}
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1.5 block font-medium">Email (optional)</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded-md border border-border bg-background px-4 outline-none transition-colors focus:border-foreground"
                  placeholder={settings.email}
                  maxLength={120}
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1.5 block font-medium">Message</span>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full rounded-md border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-foreground"
                  placeholder="Ask about sizes, stock, delivery or an existing order…"
                  maxLength={1000}
                />
              </label>
              <div className="sm:col-span-2">
                <Button type="submit" variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  <WhatsAppIcon className="h-4 w-4" />
                  Send via WhatsApp
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  You can also email us directly at{" "}
                  <a className="underline underline-offset-2 hover:text-foreground" href={`mailto:${settings.email}`}>
                    {settings.email}
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Orders", text: "New orders, changes before dispatch, payment confirmation." },
              { title: "Delivery", text: "Tracking, district fees, and Cash on Delivery queries." },
              { title: "Returns", text: "7-day exchange & refund help with your order ID." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border p-5">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
