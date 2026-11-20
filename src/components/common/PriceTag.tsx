import { siteConfig } from "@/config/site";
import { formatAmount } from "@/lib/pricing";
import { cn } from "@/lib/utils";

interface PriceTagProps {
  amount: number;
  className?: string;
  size?: "md" | "lg" | "xl";
  suffix?: string;
}

export function PriceTag({ amount, className, size = "lg", suffix }: PriceTagProps) {
  const num = { md: "text-2xl", lg: "text-4xl", xl: "text-5xl sm:text-6xl" }[size];
  const { symbol, position } = siteConfig.currency;
  const cur = <span className="text-base font-bold text-gold sm:text-lg">{symbol}</span>;
  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      {position === "before" && cur}
      <span className={cn("num font-bold tracking-tight text-foreground", num)}>
        {formatAmount(amount)}
      </span>
      {position === "after" && cur}
      {suffix && <span className="text-sm text-muted-foreground">{suffix}</span>}
    </div>
  );
}
