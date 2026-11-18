import { useEffect, useState } from "react";

function endOfWeek() {
  const d = new Date();
  const day = d.getDay();
  const diff = (5 - day + 7) % 7 || 7; // next Friday
  const end = new Date(d.getFullYear(), d.getMonth(), d.getDate() + diff, 23, 59, 59);
  return end.getTime();
}

export function Countdown() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const target = endOfWeek();
    const tick = () => setLeft(Math.max(0, target - Date.now()));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  const ms = left ?? 0;
  const parts = [
    { label: "Days", v: Math.floor(ms / 86400000) },
    { label: "Hours", v: Math.floor((ms / 3600000) % 24) },
    { label: "Mins", v: Math.floor((ms / 60000) % 60) },
    { label: "Secs", v: Math.floor((ms / 1000) % 60) },
  ];
  return (
    <div className="flex gap-3" aria-label="Offer ends in">
      {parts.map((p) => (
        <div key={p.label} className="flex w-16 flex-col items-center rounded-md border border-gold/30 bg-ink-foreground/5 py-3">
          <span className="font-display text-3xl tabular-nums text-gold">{left === null ? "--" : String(p.v).padStart(2, "0")}</span>
          <span className="eyebrow mt-1 text-[0.55rem] text-ink-foreground/60">{p.label}</span>
        </div>
      ))}
    </div>
  );
}
