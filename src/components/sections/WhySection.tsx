import { Layers, LineChart, ShieldCheck, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { whyItems } from "@/config/content";

const icons = { layers: Layers, chart: LineChart, shield: ShieldCheck, trend: TrendingUp } as const;

export function WhySection() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="لماذا نحن"
          title={
            <>
              لماذا تختار <span dir="ltr" className="text-gold-gradient">TRADER X</span>؟
            </>
          }
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyItems.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 100} className="h-full">
                <div className="group card-lux relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30">
                  <span className="num absolute left-6 top-5 text-5xl font-black text-foreground/5 transition-colors group-hover:text-gold/10">
                    0{i + 1}
                  </span>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
