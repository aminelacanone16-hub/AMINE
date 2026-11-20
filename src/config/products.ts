/**
 * TRADER X — products, plans and prices.
 * Prices are plain numbers in the currency set in site.ts.
 */

export type ProductId = "vip" | "academy" | "strategy";

export interface VipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  note: string;
  bestValue?: boolean;
}

export const vipProduct = {
  id: "vip" as ProductId,
  title: "قروب الصفقات VIP",
  kicker: "اشتراك شهري",
  description:
    "احصل على تحليلات الأسواق وفرص التداول، وتابع الأفكار والسيناريوهات المقترحة مع مستويات الدخول والخروج وإدارة المخاطر.",
  markets: [
    { code: "GOLD", label: "الذهب" },
    { code: "FOREX", label: "الفوركس" },
    { code: "CRYPTO", label: "العملات الرقمية" },
  ],
  features: [
    "فرص وتحليلات تداول",
    "مستويات الدخول والخروج",
    "وقف الخسارة Stop Loss",
    "أهداف جني الأرباح Take Profit",
    "متابعة مستجدات الأسواق",
    "مجتمع خاص بالمشتركين",
    "محتوى يساعد على فهم أسباب الصفقات",
  ],
  plans: [
    { id: "vip-1m", name: "شهر واحد", duration: "30 يوماً", price: 3000, note: "مثالية للتجربة" },
    { id: "vip-2m", name: "شهرين", duration: "60 يوماً", price: 5500, note: "متابعة أطول بسعر أقل" },
    {
      id: "vip-life",
      name: "مدى الحياة",
      duration: "وصول دائم",
      price: 8000,
      note: "دفعة واحدة بلا تجديد",
      bestValue: true,
    },
  ] satisfies VipPlan[],
  cta: "اشترك الآن",
};

export interface AcademyLevel {
  number: number;
  title: string;
  subtitle: string;
  topics: string[];
}

export const academyProduct = {
  id: "academy" as ProductId,
  title: "أكاديمية TRADER X",
  kicker: "5 مستويات",
  headline: "خمسة مستويات تنقلك من مبتدئ إلى متداول يمتلك منهجية واضحة.",
  description:
    "دورة تعليمية منظمة تساعدك على فهم الأسواق المالية، تعلم التحليل الفني، اكتشاف مفاهيم Smart Money، وتطوير أسلوبك الخاص في التداول.",
  price: 15000,
  priceNote: "دفعة واحدة للدورة كاملة",
  levels: [
    {
      number: 1,
      title: "أساسيات التداول",
      subtitle: "ابنِ قاعدتك",
      topics: [
        "مقدمة عن الأسواق المالية",
        "الفوركس والذهب والعملات الرقمية",
        "المصطلحات الأساسية",
        "منصات التداول وكيفية استخدامها",
      ],
    },
    {
      number: 2,
      title: "التحليل الفني",
      subtitle: "اقرأ الشارت",
      topics: [
        "قراءة الشموع اليابانية",
        "الدعم والمقاومة",
        "هيكل السوق Market Structure",
        "الاتجاهات السعرية",
        "مناطق العرض والطلب",
      ],
    },
    {
      number: 3,
      title: "Smart Money Concepts",
      subtitle: "فكّر كالمؤسسات",
      topics: [
        "السيولة Liquidity",
        "مناطق Order Blocks",
        "فجوات القيمة العادلة Fair Value Gaps",
        "مفاهيم المؤسسات المالية",
        "تحليل حركة السعر",
      ],
    },
    {
      number: 4,
      title: "التحليل المتقدم",
      subtitle: "اربط الصورة كاملة",
      topics: [
        "التحليل متعدد الأطر الزمنية",
        "التحليل الأساسي",
        "الأخبار الاقتصادية",
        "تحديد فرص التداول",
        "الربط بين التحليل الفني والأساسي",
      ],
    },
    {
      number: 5,
      title: "التداول الاحترافي",
      subtitle: "منهجيتك الخاصة",
      topics: [
        "إدارة رأس المال والمخاطر",
        "سيكولوجية التداول",
        "بناء استراتيجية تداول شخصية",
        "اختبار الاستراتيجيات Backtesting",
        "تقييم الأداء وتحسين النتائج",
      ],
    },
  ] satisfies AcademyLevel[],
  features: [
    "دروس فيديو منظمة",
    "أمثلة تطبيقية على الشارت",
    "محتوى مرتب حسب المستويات",
    "ملفات ومواد تعليمية",
    "دعم المتعلمين إذا كان متاحاً",
  ],
  cta: "اشترك في الدورة الآن",
};

export const strategyProduct = {
  id: "strategy" as ProductId,
  title: "استراتيجية TRADER X",
  kicker: "دفع لمرة واحدة",
  headline: "تعلم طريقة منظمة لتحليل السوق وتحديد فرص التداول.",
  description:
    "استراتيجية تعليمية تطبيقية مصممة لمساعدتك على فهم حركة السعر، تحديد مناطق الدخول والخروج، واتخاذ قرارات تداول وفق قواعد واضحة.",
  price: 22000,
  payment: "دفع لمرة واحدة فقط",
  access: "وصول مدى الحياة",
  features: [
    "شرح الاستراتيجية خطوة بخطوة",
    "أمثلة حقيقية على الرسوم البيانية",
    "شروط الدخول والخروج",
    "تحديد مناطق التداول",
    "إدارة المخاطر",
    "تطبيق عملي على الأسواق",
    "إمكانية الرجوع إلى المحتوى في أي وقت",
  ],
  cta: "احصل على الاستراتيجية الآن",
};

/** Lowest entry price per product, used on the overview cards. */
export function startingPrice(id: ProductId): number {
  if (id === "vip") return Math.min(...vipProduct.plans.map((p) => p.price));
  if (id === "academy") return academyProduct.price;
  return strategyProduct.price;
}
