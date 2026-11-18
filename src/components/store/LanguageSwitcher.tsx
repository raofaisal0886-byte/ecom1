import { useI18n, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const options: { id: Locale; label: string }[] = [
    { id: "en", label: compact ? "EN" : "English" },
    { id: "bn", label: compact ? "বাং" : "বাংলা" },
  ];

  return (
    <div
      role="group"
      aria-label={t.language}
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background/80 p-0.5 text-[0.65rem] font-medium uppercase tracking-[0.12em]",
        className,
      )}
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          aria-pressed={locale === opt.id}
          onClick={() => setLocale(opt.id)}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            locale === opt.id ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
