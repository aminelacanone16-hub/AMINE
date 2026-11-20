import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/config/content";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  /** On sub-pages, section links point back to the home page. */
  onHome?: boolean;
}

export function SiteHeader({ onHome = true }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (h: string) => (onHome ? h : `/${h}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass border-b border-border" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link to="/" aria-label="TRADER X — الرئيسية" onClick={() => setOpen(false)}>
          <Logo size="sm" className="sm:hidden" />
          <Logo size="md" className="hidden sm:inline-flex" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={href(l.href)}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-surface-2 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="gold" size="pill" className="hidden sm:inline-flex">
            <a href={href("#products")}>انضم الآن</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface-2 text-foreground lg:hidden"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto grid max-w-7xl gap-1 px-4 pb-6 pt-2 sm:px-6" aria-label="قائمة الهاتف">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={href(l.href)}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-surface-2 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="gold" size="xl" className="mt-3 w-full">
            <a href={href("#products")} onClick={() => setOpen(false)}>
              انضم الآن
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
