/**
 * TRADER X — global site settings.
 * Edit brand text, currency and contact links here; every section reads from this file.
 */
export const siteConfig = {
  name: "TRADER X",
  url: "https://traderx.lovable.app",
  shortDescription:
    "أكاديمية تداول وتعليم مالي: قروب صفقات VIP، دورة من خمسة مستويات، واستراتيجية تداول بوصول مدى الحياة.",
  about:
    "TRADER X علامة متخصصة في التعليم المالي والتداول، تقدّم مسارات تعليمية منظمة وتحليلات للأسواق تساعدك على بناء منهجية واضحة وإدارة المخاطر بوعي.",

  /** Currency shown next to every price. */
  currency: {
    symbol: "دج",
    name: "دينار جزائري",
    /** "after" → 15,000 دج  |  "before" → دج 15,000 */
    position: "after" as "before" | "after",
  },

  contact: {
    /** International format, digits only (no + or spaces). */
    whatsappNumber: "213559284750",
    telegramUrl: "https://t.me/Traderx266",
    instagramUrl: "https://instagram.com/traderx",
    /** Default message pre-filled when someone opens WhatsApp. */
    defaultMessage: "مرحباً TRADER X، أرغب في الاستفسار عن برامجكم.",
  },

  disclaimer:
    "جميع الخدمات والمحتويات المقدمة من TRADER X مخصصة للأغراض التعليمية والمعلوماتية فقط، ولا تعتبر نصيحة استثمارية أو توصية مالية شخصية. التداول في الأسواق المالية ينطوي على مخاطر وقد يؤدي إلى خسارة رأس المال. لا توجد أرباح مضمونة، والأداء السابق لا يضمن النتائج المستقبلية.",
} as const;

export type SiteConfig = typeof siteConfig;
