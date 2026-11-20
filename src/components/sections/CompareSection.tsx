import { useState } from "react";
import { Check, Minus, X } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { SubscribeButton } from "@/components/common/SubscribeButton";
import { compareColumns, compareRows, type CompareCell } from "@/config/content";
import type { ProductId } from "@/config/products";
import { cn } from "@/lib/utils";

function CellIcon({ cell }: { cell: CompareCell }) {
  if (cell.included === true) return <Check className="h-4 w-4 shrink-0 text-bull" strokeWidth={3} />;
  if (cell.included === false) return <X className="h-4 w-4 shrink-0 text-bear" strokeWidth={3} />;
  return <Minus className="h-4 w-4 shrink-0 text-gold/70" />;
}

export function CompareSection() {
  const [selected, setSelected] = useState<ProductId>("academy");
  const selectedCol = compareColumns.find((c) => c.id === selected) ?? compareColumns[0];

  return (
    <section id="compare" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="مقارنة المنتجات"
          title="أي مسار يناسبك؟"
          description="قارن بين المنتجات الثلاثة واختر ما يتوافق مع مستواك وأهدافك."
        />

        {/* Selector */}
        <Reveal className="mt-10">
          <div className="mx-auto grid max-w-2xl grid-cols-3 gap-1.5 rounded-2xl border border-border bg-surface p-1.5" role="tablist">
            {compareColumns.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={selected === c.id}
                onClick={() => setSelected(c.id)}
                className={cn(
                  "rounded-xl px-2 py-3 text-xs font-bold transition-all sm:text-sm",
                  selected === c.id
                    ? "bg-gold-gradient text-gold-foreground shadow-gold"
                    : "text-foreground/70 hover:bg-surface-2 hover:text-foreground",
                )}
              >
                {c.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Mobile: one product at a time */}
        <div className="mt-8 md:hidden">
          <div key={selected} className="card-lux gold-border animate-in fade-in duration-300 overflow-hidden rounded-3xl">
            {compareRows.map((row) => {
              const cell = row.values[selected];
              return (
                <div key={row.label} className="border-b border-border px-5 py-4 last:border-b-0">
                  <div className="text-xs font-bold text-gold">{row.label}</div>
                  <div className="mt-1.5 flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-0.5"><CellIcon cell={cell} /></span>
                    {cell.text}
                  </div>
                </div>
              );
            })}
            <div className="p-5">
              <SubscribeButton product={selectedCol?.title ?? ""} className="w-full">
                اختر {selectedCol?.title}
              </SubscribeButton>
            </div>
          </div>
        </div>

        {/* Desktop: full table */}
        <Reveal className="mt-10 hidden md:block">
          <div className="card-lux overflow-hidden rounded-3xl">
            <table className="w-full table-fixed text-start">
              <thead>
                <tr>
                  <th className="w-[22%] p-5 text-start text-sm font-bold text-muted-foreground">المقارنة</th>
                  {compareColumns.map((c) => (
                    <th
                      key={c.id}
                      onClick={() => setSelected(c.id)}
                      className={cn(
                        "cursor-pointer p-5 text-start font-display text-base font-black transition-colors",
                        selected === c.id ? "bg-gold/10 text-gold" : "text-foreground hover:text-gold",
                      )}
                    >
                      {c.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="p-5 text-sm font-bold text-foreground/85">{row.label}</td>
                    {compareColumns.map((c) => {
                      const cell = row.values[c.id];
                      return (
                        <td
                          key={c.id}
                          onClick={() => setSelected(c.id)}
                          className={cn(
                            "cursor-pointer p-5 text-sm leading-relaxed transition-colors",
                            selected === c.id ? "bg-gold/5 text-foreground" : "text-muted-foreground",
                          )}
                        >
                          <span className="flex items-start gap-2">
                            <span className="mt-0.5"><CellIcon cell={cell} /></span>
                            {cell.text}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="border-t border-border">
                  <td className="p-5" />
                  {compareColumns.map((c) => (
                    <td key={c.id} className={cn("p-5", selected === c.id && "bg-gold/5")}>
                      <SubscribeButton
                        product={c.title}
                        variant={selected === c.id ? "gold" : "goldOutline"}
                        size="lg"
                        className="h-11 w-full rounded-xl"
                      >
                        اشترك الآن
                      </SubscribeButton>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
