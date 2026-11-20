import { siteConfig } from "@/config/site";

/** 15000 → "15,000" (Latin digits, grouped). */
export function formatAmount(amount: number): string {
  return Math.round(amount).toLocaleString("en-US");
}

/** 15000 → "15,000 دج" following the currency position in site settings. */
export function formatPrice(amount: number, currency = siteConfig.currency): string {
  const value = formatAmount(amount);
  return currency.position === "before" ? `${currency.symbol} ${value}` : `${value} ${currency.symbol}`;
}

/** How much a multi-month plan saves versus paying the monthly price each month. */
export function planSavings(monthlyPrice: number, months: number, planPrice: number): number {
  return Math.max(0, monthlyPrice * months - planPrice);
}
