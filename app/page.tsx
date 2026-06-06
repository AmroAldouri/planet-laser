'use client';


import { ServiceCards } from "@/components/home/ServiceCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS } from "@/lib/constants";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Staggered entrance for hero elements (logo, headline, tagline, CTAs)
  const heroContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.15 },
    },
  };

  const heroItem: Variants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-space-950 text-white">
      {/* ========== PLANET LASER NEON HERO ========== */}
      <section
        className="relative h-screen w-full overflow-hidden bg-black"
        aria-label="Planet Laser hero with neon background"
      >
        {/* Full-screen background: planet-laser-neon.jpg */}
        <img
          src="/planet-laser-neon.jpg"
          alt="Planet Laser neon-lit arena and signage with vibrant green lighting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        {/* Dark gradient overlay for text/logo readability + subtle neon green atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,159,0.07)_10%,transparent_65%)]" aria-hidden />

        {/* Subtle atmospheric neon glow orbs (general, not photo-specific) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <motion.div
            className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[520px] h-[180px] rounded-full bg-neon-green/12 blur-[90px]"
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.92, 1.06, 0.92] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[28%] top-[52%] w-[340px] h-[140px] rounded-full bg-neon-lime/10 blur-[80px]"
            animate={{ opacity: [0.18, 0.42, 0.18] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
          />
        </div>

        {/* Floating / scanning green laser beams (lightweight Framer + existing CSS) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {/* Diagonal sweeping laser beams (Framer Motion) */}
          {[
            { top: "22%", left: "-18%", width: "48%", rotate: "-16deg", delay: 0, dur: 6.2 },
            { top: "41%", left: "-12%", width: "38%", rotate: "13deg", delay: 1.6, dur: 5.5 },
            { top: "67%", left: "-22%", width: "55%", rotate: "-9deg", delay: 3.1, dur: 7.0 },
          ].map((b, i) => (
            <motion.div
              key={i}
              className="laser-beam h-[1.5px]"
              style={{ top: b.top, left: b.left, width: b.width, transform: `rotate(${b.rotate})` }}
              animate={{ x: ["-8%", "115%"], opacity: [0.3, 0.92, 0.3] }}
              transition={{ duration: b.dur, repeat: Infinity, delay: b.delay, ease: "linear" }}
            />
          ))}

          {/* Horizontal scanning lines (Framer Motion) */}
          {[19, 51, 78].map((pct, i) => (
            <motion.div
              key={`scan-${i}`}
              className="scanline-horizontal"
              style={{ top: `${pct}%` }}
              animate={{ opacity: [0.12, 0.78, 0.12], x: [-30, 28] }}
              transition={{ duration: 4.1 + i * 0.55, repeat: Infinity, delay: i * 0.9, ease: "easeInOut" }}
            />
          ))}

          {/* Extra pure-CSS fast scanning lasers (very lightweight, no JS cost) */}
          <div className="hero-laser-css" style={{ top: "29%", animationDelay: "-0.8s", width: "38%" }} />
          <div className="hero-laser-css" style={{ top: "58%", animationDelay: "-2.1s", width: "44%" }} />
          <div className="hero-laser-css" style={{ top: "81%", animationDelay: "-3.4s", width: "31%" }} />
        </div>

        {/* Lightweight floating glowing particles (pure CSS animations — high perf, ~16 dots) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {Array.from({ length: 16 }).map((_, i) => {
            const left = ((i * 19) + 9) % 96;
            const top = ((i * 31) + 4) % 85;
            const size = 1.5 + (i % 3);
            const delay = (i % 8) * 0.65;
            const dur = 4.8 + (i % 4) * 0.7;
            return (
              <div
                key={i}
                className="hero-particle absolute rounded-full bg-neon-green/70"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDelay: `-${delay}s`,
                  animationDuration: `${dur}s`,
                }}
              />
            );
          })}
        </div>

        {/* Centered hero content */}
        <div className="relative z-10 flex h-full items-center justify-center px-5 pt-10">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl text-center"
          >
            {/* Centered Planet Laser logo (your provided neon graphic) — exact size/position/styling preserved + gentle Framer pulse/glow */}
            <motion.div
              variants={heroItem}
              animate={{ scale: [1, 1.015, 1], opacity: [0.92, 1, 0.92] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="mb-5"
            >
              <img
                src="/logo.png"
                alt="Planet Laser"
                className="hero-logo-pulse mx-auto h-16 sm:h-20 md:h-[92px] w-auto"
              />
            </motion.div>

            {/* Big animated headline — stronger neon pulse + scroll-activated intensity */}
            <motion.h1
              variants={heroItem}
              whileHover={{ scale: 1.015 }}
              whileInView={{
                scale: [1, 1.018, 1],
                transition: { duration: 0.9, ease: "easeOut" },
              }}
              viewport={{ once: false, margin: "-15%" }}
              className="heading-display font-extrabold tracking-[-3.8px] text-white text-[clamp(2.05rem,9.2vw,4.6rem)] leading-[0.9] hero-headline mb-1.5"
            >
              LASER TAG • PARTIES • ARCADE
            </motion.h1>

            {/* Location tagline */}
            <motion.p
              variants={heroItem}
              className="text-neon-green/90 text-sm sm:text-[15px] tracking-[4.5px] font-medium mb-9"
            >
              OAKVILLE • MISSISSAUGA • BURLINGTON
            </motion.p>

            {/* Prominent CTAs — Book Now with strong neon green hover (#00FF9F) */}
            <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={BUSINESS.bookUrl}
                className="hero-cta neon-btn group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-neon-green px-10 py-4 text-lg font-extrabold tracking-[0.6px] text-space-950 shadow-2xl hover:bg-white hover:text-space-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.985]"
              >
                BOOK NOW
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>

              <Link
                href="/laser-tag"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl border border-white/70 bg-white/5 px-9 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-neon-green/70 hover:bg-white/10 hover:text-neon-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                EXPLORE THE ARENA
              </Link>
            </motion.div>

            <motion.div
              variants={heroItem}
              className="mt-7 text-[10px] tracking-[4px] text-white/40 font-medium"
            >
              GTA’S ULTIMATE NEON EXPERIENCE
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom scroll cue with laser line */}
        <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-neon-green/55 sm:flex">
          <div className="text-[9px] font-medium tracking-[4.5px]">SCROLL TO BEGIN</div>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <div className="laser-line h-4 w-[1px] bg-gradient-to-b from-neon-green/75 to-transparent" />
          </motion.div>
        </div>
      </section>

      <ServiceCards />

      {/* Gallery — Cyber-neon grid (strong green frames + zoom). Uses /public/ paths */}
      <section className="relative py-16 sm:py-20 border-y border-white/10 bg-black/40" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[3.5px] text-neon-green">Electric Nights</p>
            <h2 id="gallery-heading" className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight heading-display">Captured in the Arena</h2>
            <p className="mt-3 max-w-md text-white/60">Real moments. Green beams. Pure adrenaline.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: "/gallery-laser-action-1.svg", alt: "Intense laser tag battle with bright green neon beams cutting through fog in the multi-level arena" },
              { src: "/gallery-party-1.svg", alt: "Kids celebrating a birthday party with neon green lights and cake at Planet Laser" },
              { src: "/gallery-arcade-1.svg", alt: "Futuristic arcade redemption games glowing with cyber green neon marquees and tickets" },
            ].map((img, i) => (
              <motion.a
                key={i}
                href={img.src}
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.015 }}
                className="neon-frame group relative block overflow-hidden rounded-3xl bg-space-900/60 aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs tracking-widest text-neon-green/90 font-medium">VIEW FULL</div>
              </motion.a>
            ))}
          </div>
          <p className="text-center mt-4 text-[10px] text-white/40 tracking-widest">Hover to zoom • Click for larger view • Swap SVGs for Grok Imagine shots (see suggested public/ names below)</p>
        </div>
      </section>

      {/* About — Neon green accents, scroll-reveal polish */}
      <section className="relative py-20 sm:py-24 border-t border-white/10" aria-labelledby="about-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[4px] text-neon-green">Est. 2005 • Oakville</p>
            <h2 id="about-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl heading-display">
              The GTA’s Favorite Place for Laser Tag &amp; Family Fun
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-8 mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/70"
          >
            Planet Laser is Oakville, Mississauga and Burlington’s ultimate spot for family fun and entertainment, featuring a unique multi-level laser tag arena and competitive play map. Planet Laser is “THE PLACE” to engage interactively with your friends and family.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/70"
          >
            The fun doesn’t end with just Laser Tag… enjoy arcade games &amp; much more! There is no need to make a reservation to just drop in and have some fun.
          </motion.div>

          {/* Quick trust bar — stronger neon borders on hover */}
          <div className="mt-10 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            {[
              { label: "Multi-Level Arena", sub: "Glow-in-the-dark battles" },
              { label: "All Ages Welcome", sub: "Kids, teens, adults & groups" },
              { label: "Drop-in Friendly", sub: "No reservation required" },
              { label: "20+ Years", sub: "Creating epic memories" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 * idx }}
                className="rounded-2xl border border-white/10 bg-space-900/50 py-4 neon-border-green transition-all hover:border-neon-green/60 hover:shadow-[0_0_18px_rgba(0,255,159,0.18)]"
              >
                <div className="font-semibold text-neon-green">{item.label}</div>
                <div className="text-xs text-white/50 mt-0.5">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <Testimonials />

      <FinalCTA />

      {/* Micro location / hours teaser — subtle neon */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        {BUSINESS.address.street}, {BUSINESS.address.city} • Open daily • {BUSINESS.phone}
      </div>
    </div>
  );
}
