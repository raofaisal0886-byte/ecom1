import { Link } from "@tanstack/react-router";
import mark from "@/assets/blackwell-mark.png";
import markLight from "@/assets/blackwell-mark-light.png";
import wordmark from "@/assets/blackwell-wordmark.png";
import wordmarkLight from "@/assets/blackwell-wordmark-light.png";
import { cn } from "@/lib/utils";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const m = tone === "light" ? markLight : mark;
  const w = tone === "light" ? wordmarkLight : wordmark;
  return (
    <Link to="/" aria-label="Blackwell BD home" className={cn("flex items-center gap-2.5", className)}>
      <img src={m} alt="" width={36} height={41} className="h-9 w-auto sm:h-10" />
      <img src={w} alt="Blackwell BD" width={180} height={19} className="h-3.5 w-auto sm:h-[1.05rem]" />
    </Link>
  );
}
