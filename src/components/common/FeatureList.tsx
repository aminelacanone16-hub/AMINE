import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureListProps {
  items: readonly string[];
  className?: string;
  tone?: "gold" | "bull";
  columns?: 1 | 2;
}

export function FeatureList({ items, className, tone = "gold", columns = 1 }: FeatureListProps) {
  return (
    <ul
      className={cn(
        "grid gap-3",
        columns === 2 && "sm:grid-cols-2",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
          <span
            className={cn(
              "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
              tone === "gold" ? "bg-gold/15 text-gold" : "bg-bull/15 text-bull",
            )}
          >
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
