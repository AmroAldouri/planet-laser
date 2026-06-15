/** Flowing laser beams — hero image areas only */
export function HeroLaserOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden>
      <div className="hero-beam-diag hero-beam-diag--1" />
      <div className="hero-beam-diag hero-beam-diag--2" />
      <div className="hero-beam-diag hero-beam-diag--3" />

      <div className="scanline-horizontal hero-scanline-anim hero-scanline-anim--1" style={{ top: "19%" }} />
      <div className="scanline-horizontal hero-scanline-anim hero-scanline-anim--2" style={{ top: "51%" }} />
      <div className="scanline-horizontal hero-scanline-anim hero-scanline-anim--3" style={{ top: "78%" }} />

      <div className="hero-laser-css" style={{ top: "29%", animationDelay: "-0.8s", width: "38%" }} />
      <div className="hero-laser-css" style={{ top: "58%", animationDelay: "-2.1s", width: "44%" }} />
      <div className="hero-laser-css" style={{ top: "81%", animationDelay: "-3.4s", width: "31%" }} />
    </div>
  );
}
