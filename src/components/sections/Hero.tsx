import { ArrowLeft, GraduationCap, LineChart, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CandleChart } from "@/components/market/CandleChart";

const highlights = [
  { Icon: GraduationCap, title: "أكاديمية تعليمية", text: "بخمسة مستويات" },
  { Icon: LineChart, title: "تحليلات", text: "وفرص تداول" },
  { Icon: ShieldCheck, title: "استراتيجيات", text: "وإدارة مخاطر" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 grid-pattern fade-mask-b" />
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%] overflow-hidden opacity-[0.16]">
        <div className="absolute inset-y-0 -left-1/4 w-[150%] animate-drift">
          <CandleChart count={90} seed={21} width={1800} height={500} className="h-full w-full" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div className="text-center lg:text-start">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/70 px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-bull animate-pulse-dot" />
            <span dir="ltr" className="font-mono tracking-wider text-gold">GOLD · FOREX · CRYPTO</span>
          </div>

          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 mt-6 text-4xl font-black leading-[1.2] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            ارتقِ بمستواك في التداول مع{" "}
            <span dir="ltr" className="text-gold-gradient inline-block whitespace-nowrap">TRADER X</span>
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-6 duration-1000 mx-auto mt-6 max-w-xl text-base leading-loose text-muted-foreground sm:text-lg lg:mx-0">
            من الصفر إلى الاحتراف، تعلم تحليل الأسواق المالية، اكتشف فرص التداول، وطوّر مهاراتك من
            خلال برامج تعليمية واستراتيجيات منظمة.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <Button asChild variant="gold" size="xl">
              <a href="#products">
                اكتشف عروضنا
                <ArrowLeft />
              </a>
            </Button>
            <Button asChild variant="goldOutline" size="xl">
              <a href="#academy">
                <GraduationCap />
                ابدأ التعلم الآن
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#vip">
                <Users className="text-bull" />
                انضم إلى قروب الصفقات
              </a>
            </Button>
          </div>

          <ul className="mt-12 grid grid-cols-3 gap-2 sm:gap-4">
            {highlights.map(({ Icon, title, text }, i) => (
              <li
                key={title}
                className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both rounded-2xl border border-border bg-surface/70 p-3 text-center backdrop-blur sm:p-4 lg:text-start"
                style={{ animationDelay: `${400 + i * 120}ms`, animationDuration: "700ms" }}
              >
                <Icon className="mx-auto h-5 w-5 text-gold lg:mx-0" />
                <div className="mt-2 text-xs font-bold text-foreground sm:text-sm">{title}</div>
                <div className="text-[11px] text-muted-foreground sm:text-xs">{text}</div>
              </li>
            ))}
          </ul>
        </div>

        <TerminalPanel />
      </div>
    </section>
  );
}

function TerminalPanel() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-in fade-in zoom-in-95 duration-1000 lg:max-w-none">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gold/10 blur-3xl" />
      <div className="card-lux gold-border overflow-hidden rounded-3xl" dir="ltr">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-bear/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-bull/80" />
            </div>
            <span className="font-mono text-sm font-semibold tracking-wider text-foreground">XAU/USD</span>
          </div>
          <div className="flex gap-1 font-mono text-[11px]">
            {["M15", "H1", "H4", "D1"].map((tf) => (
              <span
                key={tf}
                className={
                  tf === "H4"
                    ? "rounded-md bg-gold/15 px-2 py-1 text-gold"
                    : "rounded-md px-2 py-1 text-muted-foreground"
                }
              >
                {tf}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-64 sm:h-80">
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <CandleChart count={42} seed={7} width={800} height={360} className="relative h-full w-full" delay={0.4} />
          {/* Illustrative zones */}
          <div className="absolute inset-x-0 top-[22%] border-t border-dashed border-bull/50">
            <span className="absolute right-3 -top-3 rounded bg-bull/15 px-2 py-0.5 font-mono text-[10px] text-bull">TP</span>
          </div>
          <div className="absolute inset-x-0 top-[58%] border-t border-dashed border-gold/50">
            <span className="absolute right-3 -top-3 rounded bg-gold/15 px-2 py-0.5 font-mono text-[10px] text-gold">ENTRY</span>
          </div>
          <div className="absolute inset-x-0 top-[78%] border-t border-dashed border-bear/50">
            <span className="absolute right-3 -top-3 rounded bg-bear/15 px-2 py-0.5 font-mono text-[10px] text-bear">SL</span>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-border" dir="rtl">
          {[
            { k: "Smart Money", v: "سيولة و Order Blocks" },
            { k: "Risk", v: "وقف خسارة واضح" },
            { k: "Structure", v: "هيكل السوق" },
          ].map((s) => (
            <div key={s.k} className="border-s border-border px-3 py-3 first:border-s-0 sm:px-4">
              <div dir="ltr" className="text-end font-mono text-[10px] uppercase tracking-wider text-gold sm:text-[11px]">{s.k}</div>
              <div className="mt-0.5 text-[11px] text-foreground/80 sm:text-xs">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-5 right-4 hidden items-center gap-2 rounded-2xl border border-border bg-surface-2/90 px-4 py-3 shadow-gold backdrop-blur animate-float sm:flex">
        <ShieldCheck className="h-5 w-5 text-bull" />
        <span className="text-sm font-bold">إدارة المخاطر أولاً</span>
      </div>
    </div>
  );
}
