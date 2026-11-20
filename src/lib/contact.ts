import { siteConfig } from "@/config/site";

export function whatsappLink(message: string = siteConfig.contact.defaultMessage): string {
  const digits = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function telegramLink(): string {
  return siteConfig.contact.telegramUrl;
}

export function subscribeMessage(product: string, plan?: string, price?: string): string {
  const parts = [`مرحباً TRADER X، أرغب في الاشتراك في: ${product}`];
  if (plan) parts.push(`الباقة: ${plan}`);
  if (price) parts.push(`السعر: ${price}`);
  return parts.join("\n");
}
