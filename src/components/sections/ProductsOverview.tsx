import { ArrowLeft, GraduationCap, Infinity as InfinityIcon, Users, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { PriceTag } from "@/components/common/PriceTag";
import { SubscribeButton } from "@/components/common/SubscribeButton";
import {
  academyProduct,
  startingPrice,
  strategyProduct,
  vipProduct,
  type ProductId,
} from "@/config/products";
import { cn } from "@/lib/utils";

interface OverviewCard {
  id: ProductId;
  Icon: LucideIcon;
  title: string;
  kicker: string;
  text: string;
  priceLabel: string;
  cta: string;
  anchor: string;
  tone: "bull" | "gold" | "light";
  featured?: boolean;
}

const cards: OverviewCard[] = [
  {
    id: "vip",
    Icon: Users,
    title: vipProduct.title,
    kicker: vipProduct.kicker,
    text: "تحليلات وفرص تداول على الذهب والفوركس والعملات الرقمية مع الدخول والخروج وإدارة المخاطر.",
    priceLabel: "يبدأ من",
    cta: vipProduct.cta,
    anchor: "#vip",
    tone: "bull",
  },
  {
    id: "academy",
    Icon: GraduationCap,
    title: academyProduct.title,
    kicker: academyProduct.kicker,
    text: academyProduct.headline,
    priceLabel: "الدورة كاملة",
    cta: academyProduct.cta,
    anchor: "#academy",
    tone: "gold",
    featured: true,
  },
  {
    id: "strategy",
    Icon: InfinityIcon,
    title: strategyProduct.title,
    kicker: "مدى الحياة",
    text: strategyProduct.headline,
    priceLabel: "دفعة واحدة",
    cta: strategyProduct.cta,
    anchor: "#strategy",
    tone: "light",
  },
];

export function ProductsOverview() {
  return (
    <section id="products" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="برامجنا"
          title={
            <>
              ثلاثة مسارات، <span className="text-gold-gradient">هدف واحد</span>
            </>
          }
          description="اختر ما يناسب مستواك: تابع الفرص مع قروب VIP، تعلّم المنهج كاملاً في الأكاديمية، أو احصل على استراتيجية منظمة بوصول مدى الحياة."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {cards.map((c, i) => (
            <Reveal key={c.id} delay={i * 120} className="h-full">
              <article
                className={cn(
                  "group card-lux relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 sm:p-8",
                  c.featured && "gold-border shadow-gold lg:-translate-y-3 lg:hover:-translate-y-5",
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full blur-3xl transition-opacity duration-500 opacity-40 group-hover:opacity-70",
                    c.tone === "bull" && "bg-bull/20",
                    c.tone === "gold" && "bg-gold/25",
                    c.tone === "light" && "bg-foreground/10",
                  )}
                />
                {c.featured && (
                  <span className="absolute left-6 top-6 rounded-full bg-gold-gradient px-3 py-1 text-[11px] font-bold text-gold-foreground">
                    الأكثر شمولاً
                  </span>
                )}
                <div
                  className={cn(
                    "grid h-14 w-14 place-items-center rounded-2xl border",
                    c.tone === "bull" && "border-bull/30 bg-bull/10 text-bull",
                    c.tone === "gold" && "border-gold/30 bg-gold/10 text-gold",
                    c.tone === "light" && "border-foreground/20 bg-foreground/5 text-foreground",
                  )}
                >
                  <c.Icon className="h-7 w-7" />
                </div>
                <div className="mt-6 text-xs font-bold tracking-wide text-gold">{c.kicker}</div>
                <h3 className="mt-2 text-2xl font-black text-foreground">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">{c.text}</p>

                <div className="mt-7 border-t border-border pt-6">
                  <div className="text-xs text-muted-foreground">{c.priceLabel}</div>
                  <PriceTag amount={startingPrice(c.id)} size="lg" className="mt-1" />
                </div>

                <div className="mt-6 grid gap-2.5">
                  <SubscribeButton
                    product={c.title}
                    variant={c.featured ? "gold" : c.tone === "bull" ? "bull" : "goldOutline"}
                    size="xl"
                    className="w-full"
                  >
                    {c.cta}
                  </SubscribeButton>
                  <a
                    href={c.anchor}
                    className="inline-flex items-center justify-center gap-1.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-gold"
                  >
                    التفاصيل الكاملة
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
