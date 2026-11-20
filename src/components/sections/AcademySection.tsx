import { useState } from "react";
import { BookOpen, Check, ChevronLeft } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { FeatureList } from "@/components/common/FeatureList";
import { PriceTag } from "@/components/common/PriceTag";
import { SubscribeButton } from "@/components/common/SubscribeButton";
import { academyProduct } from "@/config/products";
import { cn } from "@/lib/utils";

export function AcademySection() {
  const [active, setActive] = useState(0);
  const levels = academyProduct.levels;
  const level = levels[active] ?? levels[0];

  return (
    <section id="academy" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gold-gradient opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={academyProduct.title}
          title={
            <>
              خمسة مستويات تنقلك من <span className="text-gold-gradient">مبتدئ</span> إلى متداول يمتلك منهجية واضحة.
            </>
          }
          description={academyProduct.description}
        />

        {/* Rising level staircase */}
        <Reveal className="mt-14">
          <div className="mx-auto max-w-4xl" role="tablist" aria-label="مستويات الأكاديمية">
            <div className="flex items-end gap-2 sm:gap-4">
              {levels.map((l, i) => {
                const isActive = i === active;
                const done = i < active;
                return (
                  <button
                    key={l.number}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className="group flex flex-1 flex-col items-center gap-2 focus:outline-none"
                  >
                    <span
                      className={cn(
                        "hidden text-center text-xs font-bold transition-colors sm:block",
                        isActive ? "text-gold" : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {l.subtitle}
                    </span>
                    <span
                      className={cn(
                        "relative flex w-full items-start justify-center rounded-t-2xl border border-b-0 pt-3 transition-all duration-500",
                        isActive
                          ? "border-gold/60 bg-gold-gradient text-gold-foreground shadow-gold"
                          : done
                            ? "border-gold/30 bg-gold/15 text-gold"
                            : "border-border bg-surface-2 text-foreground/70 group-hover:border-gold/40 group-hover:bg-surface-3",
                      )}
                      style={{ height: `${70 + i * 34}px` }}
                    >
                      <span className="num text-xl font-black sm:text-2xl">0{l.number}</span>
                      {done && <Check className="absolute bottom-3 h-4 w-4" strokeWidth={3} />}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="h-px w-full bg-gold-gradient opacity-60" />
          </div>
        </Reveal>

        {/* Active level detail */}
        {level && (
          <div className="mx-auto mt-10 max-w-4xl">
            <div key={level.number} className="card-lux gold-border animate-in fade-in slide-in-from-bottom-3 duration-500 rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold tracking-wide text-gold">المستوى {level.number} من 5</div>
                  <h3 className="mt-1 text-2xl font-black sm:text-3xl">{level.title}</h3>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActive((a) => Math.max(0, a - 1))}
                    disabled={active === 0}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-gold/50 hover:text-gold disabled:opacity-30"
                    aria-label="المستوى السابق"
                  >
                    <ChevronLeft className="h-5 w-5 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive((a) => Math.min(levels.length - 1, a + 1))}
                    disabled={active === levels.length - 1}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-gold/50 hover:text-gold disabled:opacity-30"
                    aria-label="المستوى التالي"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {level.topics.map((t, i) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-surface-2/60 px-4 py-3 text-sm sm:text-base"
                  >
                    <span className="num grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gold/10 text-xs font-bold text-gold">
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Features + price */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-[1.3fr_1fr]">
          <Reveal className="card-lux rounded-3xl p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2 font-display text-lg font-bold">
              <BookOpen className="h-5 w-5 text-gold" />
              ماذا تتضمن الدورة؟
            </div>
            <FeatureList items={academyProduct.features} />
          </Reveal>
          <Reveal delay={120} className="card-lux gold-border flex flex-col justify-between rounded-3xl bg-gold-soft p-6 sm:p-8">
            <div>
              <div className="text-sm text-muted-foreground">سعر الدورة</div>
              <PriceTag amount={academyProduct.price} size="xl" className="mt-2" />
              <div className="mt-2 text-sm text-foreground/80">{academyProduct.priceNote}</div>
            </div>
            <SubscribeButton
              product={academyProduct.title}
              plan="الدورة كاملة — 5 مستويات"
              price={academyProduct.price}
              className="mt-8 w-full"
            >
              {academyProduct.cta}
            </SubscribeButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
