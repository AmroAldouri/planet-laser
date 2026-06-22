"use client";

import Link from "next/link";

const TICKER_REPEAT = 6;

function TickerItem() {
  return (
    <span className="flex shrink-0 items-center gap-6 px-8 sm:gap-8">
      <span className="text-neon-cyan/90" aria-hidden>
        ✦
      </span>
      <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-neon-green sm:gap-4 sm:text-[15px] sm:tracking-[0.2em]">
        <span>All You Can Play laser tag every Friday & Saturday</span>
        <span className="text-white/35" aria-hidden>
          •
        </span>
        <span>9:00 PM – Midnight</span>
        <span className="text-white/35" aria-hidden>
          •
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-neon-green/70 bg-neon-green/15 px-3 py-1 sm:px-4 sm:py-1.5">
          <span className="text-[10px] font-semibold tracking-[0.28em] text-neon-lime/90 sm:text-[11px]">
            ONLY
          </span>
          <span className="text-xl font-extrabold tabular-nums leading-none text-white text-glow-green sm:text-2xl">
            $25
          </span>
        </span>
      </span>
      <span className="text-neon-lime/80" aria-hidden>
        •
      </span>
    </span>
  );
}

export function PromoTicker() {
  const ariaLabel =
    "All You Can Play laser tag every Friday and Saturday, 9:00 PM to Midnight, only $25";

  return (
    <div
      className="relative z-30 overflow-hidden border-y border-neon-green/35 bg-black/95 py-3.5 sm:py-4"
      aria-label={ariaLabel}
    >
      <Link
        href="/laser-tag"
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-inset motion-reduce:hidden"
      >
        <div className="ticker-track flex w-max animate-ticker-scroll group-hover:[animation-play-state:paused]">
          {Array.from({ length: TICKER_REPEAT }, (_, index) => (
            <TickerItem key={index} />
          ))}
        </div>
      </Link>
      <Link
        href="/laser-tag"
        className="hidden px-4 motion-reduce:flex motion-reduce:justify-center"
      >
        <TickerItem />
      </Link>
    </div>
  );
}
