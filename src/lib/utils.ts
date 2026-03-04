export function formatPrice(value: number): string {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  }
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2).replace(/\.00$/, "")} Lakhs`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
