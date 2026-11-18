import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function HeroSlider() {
  const { banners } = useStore();
  const [index, setIndex] = useState(0);
  const count = banners.length;

  useEffect(() => {
    if (count < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(t);
  }, [count, index]);

  useEffect(() => {
    if (index >= count) setIndex(0);
  }, [count, index]);

  if (count === 0) return null;

  return (
    <section className="relative h-[78vh] min-h-[520px] max-h-[860px] overflow-hidden bg-ink" aria-roledescription="carousel" aria-label="Featured collections">
      {banners.map((b, i) => (
        <div key={b.id} className={cn("absolute inset-0 transition-opacity duration-1000", i === index ? "opacity-100" : "pointer-events-none opacity-0")} aria-hidden={i !== index}>
          <img
            src={b.image}
            alt=""
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn("h-full w-full object-cover object-[70%_center]", i === index && "animate-ken-burns")}
          />
          <div className="absolute inset-0 bg-hero-fade" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent sm:hidden" />
          <div className="container-luxe absolute inset-0 flex items-end pb-20 sm:items-center sm:pb-0">
            {i === index && (
              <div className="max-w-xl text-ink-foreground">
                <p className="eyebrow mb-5 text-gold animate-fade-up">{b.eyebrow}</p>
                <h1 className="text-5xl leading-[1.02] sm:text-6xl lg:text-7xl animate-fade-up [animation-delay:120ms]">{b.title}</h1>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/80 sm:text-base animate-fade-up [animation-delay:240ms]">{b.subtitle}</p>
                <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:360ms]">
                  <a href={b.ctaHref} className="inline-flex h-14 items-center justify-center rounded-md bg-gold-gradient px-10 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-gold-foreground shadow-gold transition-all hover:-translate-y-0.5 hover:brightness-110">{b.ctaLabel}</a>
                  <Link to="/shop" className="inline-flex h-14 items-center justify-center rounded-md border border-ink-foreground/50 px-10 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink">Shop Now</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {count > 1 && (
        <div className="container-luxe absolute inset-x-0 bottom-6 flex items-center justify-between">
          <div className="flex gap-2">
            {banners.map((b, i) => (
              <button key={b.id} aria-label={`Show slide ${i + 1}`} onClick={() => setIndex(i)} className={cn("h-1 rounded-full transition-all duration-500", i === index ? "w-10 bg-gold" : "w-5 bg-ink-foreground/40 hover:bg-ink-foreground/70")} />
            ))}
          </div>
          <div className="hidden gap-2 sm:flex">
            <button aria-label="Previous slide" onClick={() => setIndex((index - 1 + count) % count)} className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/30 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"><ChevronLeft className="h-5 w-5" /></button>
            <button aria-label="Next slide" onClick={() => setIndex((index + 1) % count)} className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/30 text-ink-foreground transition-colors hover:bg-ink-foreground hover:text-ink"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
      )}
    </section>
  );
}
