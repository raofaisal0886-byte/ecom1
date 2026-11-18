import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("mb-8 flex flex-col gap-4 sm:mb-10", align === "center" ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className={cn(align === "center" && "max-w-2xl")}>
        {eyebrow && <p className="eyebrow mb-3 text-gold-deep">{eyebrow}</p>}
        <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
        {description && <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>}
      </div>
      {action}
    </div>
  );
}
