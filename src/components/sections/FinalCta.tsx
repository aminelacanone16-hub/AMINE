import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { CandleChart } from "@/components/market/CandleChart";
import { whatsappLink } from "@/lib/contact";

export function FinalCta() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="gold-border relative isolate overflow-hidden rounded-[2rem] bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute inset-0 -z-10 grid-pattern opacity-70" />
            <div className="absolute inset-0 -z-10 bg-hero-glow" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/3 opacity-20">
              <CandleChart count={50} seed={99} width={1200} height={300} className="h-full w-full" animate={false} />
            </div>
            <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              رحلتك في عالم التداول تبدأ <span className="text-gold-gradient">بقرار التعلم.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              اختر المسار المناسب لك وابدأ تطوير مهاراتك مع TRADER X.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <a href="#products">
                  اكتشف برامجنا
                  <ArrowLeft />
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="text-bull" />
                  تواصل معنا الآن
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
