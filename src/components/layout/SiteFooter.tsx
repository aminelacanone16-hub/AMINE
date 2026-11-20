import { Link } from "@tanstack/react-router";
import { AlertTriangle, Instagram, MessageCircle, Send } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/config/site";
import { telegramLink, whatsappLink } from "@/lib/contact";

export function SiteFooter({ onHome = true }: { onHome?: boolean }) {
  const href = (h: string) => (onHome ? h : `/${h}`);
  const socials = [
    { label: "إنستغرام", href: siteConfig.contact.instagramUrl, Icon: Instagram },
    { label: "تيليغرام", href: telegramLink(), Icon: Send },
    { label: "واتساب", href: whatsappLink(), Icon: MessageCircle },
  ];

  return (
    <footer className="relative border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size="md" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.about}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href: url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface-2 text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            <FooterCol title="البرامج">
              <FooterLink href={href("#academy")}>الأكاديمية التعليمية</FooterLink>
              <FooterLink href={href("#vip")}>قروب الصفقات</FooterLink>
              <FooterLink href={href("#strategy")}>الاستراتيجية</FooterLink>
            </FooterCol>
            <FooterCol title="تواصل">
              <FooterLink href={href("#contact")}>اتصل بنا</FooterLink>
              <FooterLink href={siteConfig.contact.instagramUrl} external>إنستغرام</FooterLink>
              <FooterLink href={telegramLink()} external>تيليغرام</FooterLink>
              <FooterLink href={whatsappLink()} external>واتساب</FooterLink>
            </FooterCol>
            <FooterCol title="قانوني">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                  إخلاء المسؤولية
                </Link>
              </li>
            </FooterCol>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-gold/15 bg-gold/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <div className="font-display text-sm font-bold text-gold">إخلاء المسؤولية</div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {siteConfig.disclaimer}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} TRADER X. جميع الحقوق محفوظة.</span>
          <span>تعليم مالي • تحليلات • إدارة مخاطر</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-sm text-muted-foreground transition-colors hover:text-gold"
      >
        {children}
      </a>
    </li>
  );
}
