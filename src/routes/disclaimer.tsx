import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/config/site";

const title = "إخلاء المسؤولية | TRADER X";
const description = "إخلاء المسؤولية: محتوى TRADER X تعليمي فقط وليس نصيحة استثمارية، والتداول ينطوي على مخاطر.";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <LegalPage eyebrow="قانوني" title="إخلاء المسؤولية">
      <section className="rounded-2xl border border-gold/20 bg-gold/5 p-6 text-foreground/90">
        {siteConfig.disclaimer}
      </section>
      <section>
        <h2>ليس نصيحة استثمارية</h2>
        <p>
          التحليلات والأفكار والسيناريوهات المشاركة في قروب الصفقات أو الأكاديمية أو الاستراتيجية هي
          لأغراض تعليمية، ولا تأخذ في الاعتبار وضعك المالي أو أهدافك الشخصية.
        </p>
      </section>
      <section>
        <h2>المخاطر</h2>
        <p>
          تداول الذهب والفوركس والعملات الرقمية ينطوي على درجة عالية من المخاطر، وقد تخسر جزءاً من رأس
          مالك أو كله. لا تتداول بأموال لا تستطيع تحمّل خسارتها.
        </p>
      </section>
    </LegalPage>
  );
}
