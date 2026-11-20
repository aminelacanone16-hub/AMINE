import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/** TRADER X wordmark with a rising-candles mark. Always rendered LTR. */
export function Logo({ className, size = "md" }: LogoProps) {
  const text = { sm: "text-lg", md: "text-xl", lg: "text-3xl" }[size];
  const mark = { sm: "h-7 w-7", md: "h-9 w-9", lg: "h-12 w-12" }[size];
  return (
    <span dir="ltr" className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <span
        className={cn(
          "gold-border relative grid place-items-center rounded-xl bg-surface-2",
          mark,
        )}
      >
        <svg viewBox="0 0 24 24" className="h-[62%] w-[62%]" aria-hidden="true">
          <rect x="3" y="12" width="3.4" height="7" rx="0.8" fill="var(--gold)" opacity="0.55" />
          <line x1="4.7" y1="10" x2="4.7" y2="21" stroke="var(--gold)" strokeWidth="1" opacity="0.55" />
          <rect x="10.3" y="8" width="3.4" height="9" rx="0.8" fill="var(--gold)" opacity="0.8" />
          <line x1="12" y1="5.5" x2="12" y2="19" stroke="var(--gold)" strokeWidth="1" opacity="0.8" />
          <rect x="17.6" y="4" width="3.4" height="10" rx="0.8" fill="var(--bull)" />
          <line x1="19.3" y1="2" x2="19.3" y2="16" stroke="var(--bull)" strokeWidth="1" />
        </svg>
      </span>
      <span className={cn("font-display font-black tracking-[0.12em] text-foreground", text)}>
        TRADER<span className="text-gold-gradient ms-1.5">X</span>
      </span>
    </span>
  );
}
