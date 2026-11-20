import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/layout/LegalPage";

const title = "الشروط والأحكام | TRADER X";
const description = "الشروط والأحكام الخاصة باستخدام خدمات TRADER X التعليمية: قروب الصفقات VIP، الأكاديمية، والاستراتيجية.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage eyebrow="قانوني" title="الشروط والأحكام">
      <section>
        <h2>طبيعة الخدمات</h2>
        <p>
          تقدّم TRADER X محتوى تعليمياً ومعلوماتياً في مجال الأسواق المالية، يشمل قروب الصفقات VIP،
          أكاديمية TRADER X، واستراتيجية TRADER X. لا تقدّم TRADER X خدمات إدارة أموال أو وساطة مالية.
        </p>
      </section>
      <section>
        <h2>الاشتراك والدفع</h2>
        <p>
          يتم الاشتراك بالتواصل مع فريق TRADER X عبر واتساب أو تيليغرام. بعد تأكيد الدفع يستلم المشترك
          تعليمات الوصول إلى الخدمة التي اختارها. مدة الوصول تكون حسب الباقة المختارة.
        </p>
      </section>
      <section>
        <h2>الاستخدام الشخصي</h2>
        <p>
          المحتوى مخصص للاستخدام الشخصي للمشترك فقط، ولا يجوز نسخه أو إعادة نشره أو مشاركته أو بيعه دون
          إذن كتابي من TRADER X.
        </p>
      </section>
      <section>
        <h2>المسؤولية</h2>
        <p>
          يتحمّل المشترك وحده مسؤولية قراراته في التداول. التداول ينطوي على مخاطر مالية ولا توجد أرباح
          مضمونة.
        </p>
      </section>
      <section>
        <h2>التعديلات</h2>
        <p>تحتفظ TRADER X بحق تعديل هذه الشروط أو محتوى الخدمات وأسعارها، ويُعمل بالتعديلات من تاريخ نشرها.</p>
      </section>
    </LegalPage>
  );
}
