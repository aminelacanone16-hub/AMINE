import { Crown, Radio } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FeatureList } from "@/components/common/FeatureList";
import { PriceTag } from "@/components/common/PriceTag";
import { SubscribeButton } from "@/components/common/SubscribeButton";
import { vipProduct } from "@/config/products";
import { formatPrice, planSavings } from "@/lib/pricing";
import { cn } from "@/lib/utils";

export function VipSection() {
  const monthly = vipProduct.plans[0]?.price ?? 0;

  return (
    <section id="vip" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_90%_10%,color-mix(in_oklab,var(--bull)_10%,transparent),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div>
            <SectionHeading
              align="start"
              eyebrow={vipProduct.kicker}
              title={vipProduct.title}
              description={vipProduct.description}
            />

            <Reveal delay={100} className="mt-8">
              <div className="text-sm font-bold text-foreground">الأسواق المستهدفة</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {vipProduct.markets.map((m) => (
                  <span
                    key={m.code}
                    className="inline-flex items-center gap-2 rounded-full border border-bull/25 bg-bull/5 px-4 py-2 text-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-bull" />
                    <span className="font-medium">{m.label}</span>
                    <span dir="ltr" className="font-mono text-xs text-bull">{m.code}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180} className="mt-8 card-lux rounded-3xl p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
                <Radio className="h-4 w-4 text-bull" />
                ماذا تحصل في القروب؟
              </div>
              <FeatureList items={vipProduct.features} tone="bull" />
            </Reveal>
          </div>

          <div className="grid content-start gap-5 sm:grid-cols-3 lg:pt-16">
            {vipProduct.plans.map((plan, i) => {
              const months = plan.id === "vip-2m" ? 2 : plan.id === "vip-1m" ? 1 : 0;
              const saved = months > 1 ? planSavings(monthly, months, plan.price) : 0;
              return (
                <Reveal key={plan.id} delay={i * 120} className="h-full">
                  <div
                    className={cn(
                      "group card-lux relative flex h-full flex-col rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5",
                      plan.bestValue && "gold-border bg-gold-soft shadow-gold sm:-translate-y-4 sm:hover:-translate-y-6",
                    )}
                  >
                    {plan.bestValue && (
                      <span className="absolute -top-3.5 right-1/2 inline-flex translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gold-gradient px-3.5 py-1 text-xs font-bold text-gold-foreground shadow-gold">
                        <Crown className="h-3.5 w-3.5" />
                        أفضل قيمة
                      </span>
                    )}
                    <div className="text-sm font-bold text-muted-foreground">اشتراك</div>
                    <div className="mt-1 font-display text-2xl font-black">{plan.name}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{plan.duration}</div>

                    <PriceTag amount={plan.price} size="lg" className="mt-6" />
                    <div className="mt-2 min-h-5 text-xs">
                      {saved > 0 ? (
                        <span className="rounded-full bg-bull/10 px-2 py-0.5 font-bold text-bull">
                          وفّر {formatPrice(saved)}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">{plan.note}</span>
                      )}
                    </div>

                    <div className="mt-auto pt-7">
                      <SubscribeButton
                        product={vipProduct.title}
                        plan={`اشتراك ${plan.name}`}
                        price={plan.price}
                        variant={plan.bestValue ? "gold" : "goldOutline"}
                        size="lg"
                        className="h-12 w-full rounded-xl"
                      >
                        {vipProduct.cta}
                      </SubscribeButton>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <p className="text-center text-xs leading-relaxed text-muted-foreground sm:col-span-3">
              الأفكار والسيناريوهات المشاركة تعليمية وليست توصيات مالية شخصية. قرار التداول ومسؤوليته يعودان لك.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
