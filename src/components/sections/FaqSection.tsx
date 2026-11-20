import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { faqs } from "@/config/content";

export function FaqSection() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-surface/50" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="الأسئلة الشائعة" title="كل ما تحتاج معرفته" />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible defaultValue="faq-0" className="grid gap-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="card-lux rounded-2xl border px-5 transition-colors data-[state=open]:border-gold/40 sm:px-6"
              >
                <AccordionTrigger className="py-5 font-display text-base font-bold hover:no-underline hover:text-gold sm:text-lg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-loose text-muted-foreground sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
