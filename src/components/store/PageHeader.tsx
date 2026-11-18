import { Link, type LinkProps } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHeader({ title, description, crumbs = [] }: { title: ReactNode; description?: string; crumbs?: { label: string; to?: LinkProps["to"] }[] }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-sand/60">
      <div className="container-luxe py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              {c.to ? <Link to={c.to} className="hover:text-foreground">{c.label}</Link> : <span className="text-foreground">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="text-4xl sm:text-5xl animate-fade-up">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base animate-fade-up">{description}</p>}
      </div>
    </section>
  );
}
