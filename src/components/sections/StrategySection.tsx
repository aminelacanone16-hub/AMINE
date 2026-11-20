import { CreditCard, Infinity as InfinityIcon, Target } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FeatureList } from "@/components/common/FeatureList";
import { PriceTag } from "@/components/common/PriceTag";
import { SubscribeButton } from "@/components/common/SubscribeButton";
import { CandleChart } from "@/components/market/CandleChart";
import { strategyProduct } from "@/config/products";

export function StrategySection() {
  return (
    <section id="strategy" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card-lux relative overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-[0.12]">
            <CandleChart count={60} seed={42} width={1400} height={300} className="h-full w-full" animate={false} />
          </div>
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                align="start"
                eyebrow={strategyProduct.kicker}
                title={strategyProduct.title}
                description={
                  <>
                    <span className="block font-display text-lg font-bold text-foreground sm:text-xl">
                      {strategyProduct.headline}
                    </span>
                    <span className="mt-3 block">{strategyProduct.description}</span>
                  </>
                }
              />
              <Reveal delay={120} className="mt-8">
                <FeatureList items={strategyProduct.features} columns={2} />
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="gold-border relative rounded-3xl bg-background/80 p-7 backdrop-blur sm:p-9">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-gold">
                  <Target className="h-7 w-7" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border bg-surface-2/70 p-4">
                    <CreditCard className="h-5 w-5 text-gold" />
                    <div className="mt-2 text-xs text-muted-foreground">طريقة الدفع</div>
                    <div className="mt-0.5 text-sm font-bold">{strategyProduct.payment}</div>
                  </div>
                  <div className="rounded-2xl border border-bull/25 bg-bull/5 p-4">
                    <InfinityIcon className="h-5 w-5 text-bull" />
                    <div className="mt-2 text-xs text-muted-foreground">مدة الوصول</div>
                    <div className="mt-0.5 text-sm font-bold">{strategyProduct.access}</div>
                  </div>
                </div>
                <div className="mt-7 text-sm text-muted-foreground">السعر</div>
                <PriceTag amount={strategyProduct.price} size="xl" className="mt-1" />
                <SubscribeButton
                  product={strategyProduct.title}
                  plan="وصول مدى الحياة"
                  price={strategyProduct.price}
                  className="mt-8 w-full"
                >
                  {strategyProduct.cta}
                </SubscribeButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
