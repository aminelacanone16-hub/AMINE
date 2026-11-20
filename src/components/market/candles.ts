export interface Candle {
  open: number;
  close: number;
  high: number;
  low: number;
}

/** Deterministic pseudo-random generator so SSR and client render identical candles. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Generates an upward-trending illustrative candle series (decorative only, not market data). */
export function generateCandles(count: number, seed = 7, trend = 0.35): Candle[] {
  const rand = mulberry32(seed);
  const candles: Candle[] = [];
  let price = 50;
  for (let i = 0; i < count; i++) {
    const open = price;
    const move = (rand() - 0.5 + trend * 0.35) * 6;
    const close = open + move;
    const high = Math.max(open, close) + rand() * 2.5;
    const low = Math.min(open, close) - rand() * 2.5;
    candles.push({ open, close, high, low });
    price = close;
  }
  return candles;
}
