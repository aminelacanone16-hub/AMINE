import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { generateCandles } from "./candles";

interface CandleChartProps {
  count?: number;
  seed?: number;
  width?: number;
  height?: number;
  className?: string;
  showLine?: boolean;
  animate?: boolean;
  /** Seconds before the first candle appears. */
  delay?: number;
}

/** Decorative candlestick illustration with an optional animated trend line. */
export function CandleChart({
  count = 40,
  seed = 7,
  width = 800,
  height = 360,
  className,
  showLine = true,
  animate = true,
  delay = 0,
}: CandleChartProps) {
  const { bars, linePath, areaPath } = useMemo(() => {
    const data = generateCandles(count, seed);
    const min = Math.min(...data.map((c) => c.low));
    const max = Math.max(...data.map((c) => c.high));
    const pad = height * 0.08;
    const y = (v: number) => height - pad - ((v - min) / (max - min)) * (height - pad * 2);
    const step = width / count;
    const bw = Math.max(2, step * 0.56);
    const bars = data.map((c, i) => {
      const x = i * step + step / 2;
      const up = c.close >= c.open;
      return {
        x,
        bw,
        up,
        top: y(Math.max(c.open, c.close)),
        bottom: y(Math.min(c.open, c.close)),
        high: y(c.high),
        low: y(c.low),
      };
    });
    const pts = data.map((c, i) => `${i * step + step / 2},${y((c.open + c.close) / 2)}`);
    const linePath = `M${pts.join(" L")}`;
    const areaPath = `${linePath} L${width - step / 2},${height} L${step / 2},${height} Z`;
    return { bars, linePath, areaPath };
  }, [count, seed, width, height]);

  const gid = `area-${seed}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("block", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--gold)" stopOpacity="0.22" />
          <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {bars.map((b, i) => (
        <g
          key={i}
          className={animate ? "animate-candle-grow" : undefined}
          style={{
            transformOrigin: `${b.x}px ${(b.top + b.bottom) / 2}px`,
            animationDelay: `${delay + i * 0.035}s`,
          }}
        >
          <line
            x1={b.x}
            x2={b.x}
            y1={b.high}
            y2={b.low}
            stroke={b.up ? "var(--bull)" : "var(--bear)"}
            strokeWidth={1.2}
            opacity={0.9}
          />
          <rect
            x={b.x - b.bw / 2}
            y={b.top}
            width={b.bw}
            height={Math.max(1.5, b.bottom - b.top)}
            rx={1}
            fill={b.up ? "var(--bull)" : "var(--bear)"}
          />
        </g>
      ))}
      {showLine && (
        <>
          <path d={areaPath} fill={`url(#${gid})`} />
          <path
            d={linePath}
            fill="none"
            stroke="var(--gold)"
            strokeWidth={2}
            strokeLinejoin="round"
            className={animate ? "animate-draw-line" : undefined}
            style={
              {
                strokeDasharray: 3000,
                "--dash": 3000,
                animationDelay: `${delay + 0.3}s`,
              } as React.CSSProperties
            }
          />
        </>
      )}
    </svg>
  );
}
