import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { steps } from "@/config/content";
import { telegramLink, whatsappLink } from "@/lib/contact";

export function HowSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="آلية الاشتراك"
          title="ابدأ رحلتك معنا في ثلاث خطوات"
        />

        <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute inset-x-[16%] top-9 hidden h-px bg-gold-gradient opacity-40 md:block" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 140} className="relative text-center">
              <div className="relative mx-auto grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full border border-gold/40 bg-background shadow-gold">
                <span className="num text-2xl font-black text-gold-gradient">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-black">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-base">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200} className="mt-14 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="bull" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              تواصل عبر واتساب
            </a>
          </Button>
          <Button asChild variant="glass" size="xl">
            <a href={telegramLink()} target="_blank" rel="noopener noreferrer">
              <Send />
              تواصل عبر تيليغرام
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
