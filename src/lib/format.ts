export function formatBDT(amount: number): string {
  return `৳${Math.round(amount).toLocaleString("en-IN")}`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
