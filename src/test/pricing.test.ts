import { describe, expect, it } from "vitest";
import { academyProduct, strategyProduct, vipProduct } from "@/config/products";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/pricing";
import { whatsappLink } from "@/lib/contact";

const plan = (id: string) => vipProduct.plans.find((p) => p.id === id);

describe("TRADER X pricing", () => {
  it("VIP one month costs 3,000 DZD", () => {
    expect(plan("vip-1m")?.price).toBe(3000);
  });
  it("VIP two months costs 5,500 DZD", () => {
    expect(plan("vip-2m")?.price).toBe(5500);
  });
  it("VIP lifetime costs 8,000 DZD and carries the best-value badge", () => {
    expect(plan("vip-life")?.price).toBe(8000);
    expect(vipProduct.plans.filter((p) => p.bestValue).map((p) => p.id)).toEqual(["vip-life"]);
  });
  it("Academy costs 15,000 DZD", () => {
    expect(academyProduct.price).toBe(15000);
  });
  it("Strategy costs 22,000 DZD", () => {
    expect(strategyProduct.price).toBe(22000);
  });
  it("prices display in Algerian dinar", () => {
    expect(formatPrice(15000)).toBe("15,000 دج");
  });
  it("academy has exactly five levels", () => {
    expect(academyProduct.levels.map((l) => l.number)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("TRADER X contact", () => {
  it("WhatsApp links go to +213559284750", () => {
    expect(whatsappLink("hi")).toMatch(/^https:\/\/wa\.me\/213559284750\?text=/);
  });
  it("Telegram points to Traderx266", () => {
    expect(siteConfig.contact.telegramUrl).toBe("https://t.me/Traderx266");
  });
});
