import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function LegalPage({ eyebrow, title, children }: LegalPageProps) {
  return (
    <>
      <SiteHeader onHome={false} />
      <main className="relative pt-32 pb-20 sm:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-96 grid-pattern fade-mask-b" />
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="text-sm font-bold text-gold">{eyebrow}</span>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">{title}</h1>
          <div className="mt-10 grid gap-8 text-base leading-loose text-muted-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter onHome={false} />
    </>
  );
}
