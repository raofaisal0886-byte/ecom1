import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useMemo, useState } from "react";
import { Rating } from "@/components/store/Rating";
import { SectionHeading } from "@/components/store/SectionHeading";
import { customerReviews, REVIEWS_PER_PAGE } from "@/lib/reviews";
import { cn } from "@/lib/utils";

export function ReviewsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(customerReviews.length / REVIEWS_PER_PAGE);

  const pageReviews = useMemo(() => {
    const start = page * REVIEWS_PER_PAGE;
    return customerReviews.slice(start, start + REVIEWS_PER_PAGE);
  }, [page]);

  const go = (next: number) => {
    setPage(Math.min(totalPages - 1, Math.max(0, next)));
  };

  return (
    <section className="border-y border-border bg-card py-20 sm:py-24">
      <div className="container-luxe">
        <SectionHeading align="center" eyebrow="Customer love" title="Rated 4.8 out of 5 by our customers" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pageReviews.map((r) => (
            <figure key={r.id} className="relative flex flex-col rounded-lg border border-border bg-background p-8 shadow-card">
              <Quote className="h-8 w-8 text-gold/60" />
              <Rating value={r.rating} className="mt-4" />
              <blockquote className="mt-4 flex-1 font-display text-xl leading-relaxed">“{r.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient font-display text-lg text-gold-foreground">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.city} · Bought {r.product}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Page {page + 1} of {totalPages} · {customerReviews.length} reviews
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous reviews"
              disabled={page === 0}
              onClick={() => go(page - 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to reviews page ${i + 1}`}
                aria-current={i === page ? "page" : undefined}
                onClick={() => go(i)}
                className={cn(
                  "inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-xs font-medium transition-colors",
                  i === page ? "border-ink bg-ink text-ink-foreground" : "border-border hover:border-foreground",
                )}
              >
                {i + 1}
              </button>
            ))}
            <button
              type="button"
              aria-label="Next reviews"
              disabled={page >= totalPages - 1}
              onClick={() => go(page + 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
