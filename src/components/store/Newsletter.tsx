import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const emailSchema = z.string().trim().email().max(255);

export function Newsletter() {
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error("Please enter a valid email address");
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem("bw:newsletter") ?? "[]") as string[];
      if (!list.includes(parsed.data)) localStorage.setItem("bw:newsletter", JSON.stringify([...list, parsed.data]));
    } catch {
      /* ignore */
    }
    toast.success("You're on the list", { description: "We'll share new drops and members-only offers with you." });
    setEmail("");
  };
  return (
    <section className="relative overflow-hidden bg-ink-gradient text-ink-foreground">
      <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:22px_22px]" />
      <div className="container-luxe relative grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-3 text-gold">The Blackwell Circle</p>
          <h2 className="text-4xl leading-tight sm:text-5xl">Be first to the new collection</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-foreground/70">Early access to new drops, members-only offers and Eid edits — straight to your inbox. No spam, ever.</p>
        </div>
        <form onSubmit={submit} className="flex w-full flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="h-14 flex-1 rounded-md border border-ink-foreground/20 bg-ink-foreground/5 px-5 text-sm text-ink-foreground outline-none transition-colors placeholder:text-ink-foreground/45 focus:border-gold"
          />
          <Button type="submit" variant="gold" size="xl">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
