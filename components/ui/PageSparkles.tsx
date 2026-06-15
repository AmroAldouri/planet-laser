const SPARKLE_COUNT = 68;

export function PageSparkles() {
  return (
    <div className="page-sparkles" aria-hidden>
      {Array.from({ length: SPARKLE_COUNT }).map((_, i) => {
        const left = ((i * 17) + 4) % 97;
        const top = ((i * 27) + 6) % 95;
        const isLarge = i % 5 === 0;
        const size = isLarge ? 5 : 3 + (i % 2);
        const delay = (i % 11) * 0.42;
        const driftDur = 6.5 + (i % 7) * 0.9;

        return (
          <span
            key={i}
            className={isLarge ? "page-sparkle page-sparkle--lg" : "page-sparkle"}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `-${delay}s`,
              animationDuration: `${driftDur}s`,
            }}
          />
        );
      })}
    </div>
  );
}
