import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Hero } from "@/components/sections/Hero";
import { MarketTicker } from "@/components/sections/MarketTicker";
import { ProductsOverview } from "@/components/sections/ProductsOverview";
import { VipSection } from "@/components/sections/VipSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { StrategySection } from "@/components/sections/StrategySection";
import { CompareSection } from "@/components/sections/CompareSection";
import { WhySection } from "@/components/sections/WhySection";
import { HowSection } from "@/components/sections/HowSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { faqs } from "@/config/content";

const title = "TRADER X | أكاديمية التداول وقروب الصفقات VIP";
const description =
  "ارتقِ بمستواك في التداول مع TRADER X: قروب صفقات VIP للذهب والفوركس والكريبتو، أكاديمية من خمسة مستويات، واستراتيجية تداول بوصول مدى الحياة.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MarketTicker />
        <ProductsOverview />
        <VipSection />
        <AcademySection />
        <StrategySection />
        <CompareSection />
        <WhySection />
        <HowSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}
