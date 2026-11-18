import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import stacked from "@/assets/blackwell-stacked-light.png";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

const linkCls = "text-sm text-ink-foreground/65 transition-colors hover:text-gold";

export function SiteFooter() {
  const { categories, settings } = useStore();
  const { t, locale } = useI18n();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-luxe grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" aria-label="Blackwell BD home"><img src={stacked} alt="Blackwell BD — Fashion, Beauty, Lifestyle" width={180} height={163} className="h-28 w-auto" loading="lazy" /></Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-foreground/65">{t.footerBlurb}</p>
          <div className="mt-6 flex gap-2">
            {[
              { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/15 transition-colors hover:border-gold hover:text-gold"><Icon className="h-4 w-4" /></a>
            ))}
            <a href={whatsappUrl(settings.whatsappNumber)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/15 transition-colors hover:border-gold hover:text-gold"><WhatsAppIcon className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow mb-5 text-gold">{t.shop}</p>
          <ul className="space-y-3">
            <li><Link to="/shop" className={linkCls}>{t.shopAll}</Link></li>
            {categories.map((c) => (
              <li key={c.id}><Link to="/category/$slug" params={{ slug: c.slug }} className={linkCls}>{locale === "bn" ? c.nameBn : c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow mb-5 text-gold">{t.customerCare}</p>
          <ul className="space-y-3">
            <li><Link to="/track-order" className={linkCls}>{t.trackOrder}</Link></li>
            <li><Link to="/shipping-policy" className={linkCls}>{t.shippingDelivery}</Link></li>
            <li><Link to="/return-policy" className={linkCls}>{t.returnRefund}</Link></li>
            <li><Link to="/exchange-policy" className={linkCls}>{t.exchangePolicy}</Link></li>
            <li><Link to="/cancellation-policy" className={linkCls}>{t.cancellationPolicy}</Link></li>
            <li><Link to="/faq" className={linkCls}>{t.faq}</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow mb-5 text-gold">{t.company}</p>
          <ul className="space-y-3">
            <li><Link to="/about" className={linkCls}>{t.aboutUs}</Link></li>
            <li><Link to="/contact" className={linkCls}>{t.contactUs}</Link></li>
            <li><Link to="/account" className={linkCls}>{t.myAccount}</Link></li>
            <li><Link to="/wishlist" className={linkCls}>{t.wishlist}</Link></li>
            <li><Link to="/privacy-policy" className={linkCls}>{t.privacyPolicy}</Link></li>
            <li><Link to="/terms" className={linkCls}>{t.terms}</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="eyebrow mb-5 text-gold">{t.getInTouch}</p>
          <ul className="space-y-4 text-sm text-ink-foreground/65">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{settings.address}</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href={`tel:+${settings.whatsappNumber}`} className="hover:text-gold">{settings.phoneDisplay}</a></li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><a href={`mailto:${settings.email}`} className="break-all hover:text-gold">{settings.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Blackwell BD. {t.allRights}</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1">{t.weAccept}</span>
            {[t.cashOnDelivery, "bKash", "Nagad"].map((m) => (
              <span key={m} className="rounded border border-ink-foreground/15 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-ink-foreground/75">{m}</span>
            ))}
          </div>
          <Link to="/admin" className="hover:text-gold">{t.storeAdmin}</Link>
        </div>
      </div>
    </footer>
  );
}
