const items = [
  "GOLD XAU/USD",
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "BTC/USD",
  "ETH/USD",
  "Smart Money",
  "Order Blocks",
  "Liquidity",
  "Fair Value Gaps",
  "Risk Management",
  "Market Structure",
];

/** Scrolling strip of markets and concepts covered (no prices). */
export function MarketTicker() {
  const loop = [...items, ...items];
  return (
    <div className="relative border-y border-border bg-surface/70 py-4 fade-mask-x overflow-hidden" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} dir="ltr" className="flex items-center gap-3 font-mono text-sm tracking-wider text-foreground/70">
            <span className={i % 3 === 0 ? "text-bull" : "text-gold"}>◆</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
