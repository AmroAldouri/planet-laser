"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black"
      aria-label="Hero section, Planet Laser cosmic laser tag experience"
    >
      {/* 
        Dramatic futuristic SVG hero background with built-in animated green neon laser beams.
        Prioritizes public/ assets. Real Grok Imagine photo versions (hero-background.jpg etc)
        were generated via the image tool. Drop the jpgs into /public to swap in photoreal.
      */}
      <img
        src="/hero-background.svg"
        alt="Dramatic dark futuristic multi level laser tag arena with intense bright cyber green neon laser beams, excited players in glowing vests, volumetric fog, high energy cinematic atmosphere, Planet Laser Oakville"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {/* Cinematic overlays for text contrast + depth (green-tinted cyber) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/48 to-black/92" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.38)_18%,rgba(0,0,0,0.85)_80%)]" />
      {/* Subtle cyber grid for arcade depth */}
      <div className="absolute inset-0 cyber-grid opacity-60" aria-hidden />

      {/* Dynamic floating laser beams + scanning lines (Framer Motion) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {/* Angled sweeping laser beams */}
        {[
          { top: "18%", left: "-20%", width: "55%", rotate: "-18deg", delay: 0, dur: 5.8 },
          { top: "34%", left: "-10%", width: "42%", rotate: "14deg", delay: 1.1, dur: 6.4 },
          { top: "61%", left: "-25%", width: "62%", rotate: "-11deg", delay: 2.3, dur: 7.1 },
        ].map((b, i) => (
          <motion.div
            key={i}
            className="laser-beam h-[2px]"
            style={{ top: b.top, left: b.left, width: b.width, transform: `rotate(${b.rotate})` }}
            animate={{ x: ["-12%", "120%"], opacity: [0.35, 0.95, 0.35] }}
            transition={{ duration: b.dur, repeat: Infinity, delay: b.delay, ease: "linear" }}
          />
        ))}

        {/* Horizontal scanning lines */}
        {[18, 47, 73].map((pct, i) => (
          <motion.div
            key={`scan-${i}`}
            className="scanline-horizontal"
            style={{ top: `${pct}%` }}
            animate={{ opacity: [0.15, 0.85, 0.15], x: [-40, 40] }}
            transition={{ duration: 3.8 + i * 0.6, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
          />
        ))}

        {/* Subtle floating green orbs / particles */}
        {[
          { left: "12%", top: "22%", size: 3, delay: 0 },
          { left: "78%", top: "18%", size: 2, delay: 1.2 },
          { left: "25%", top: "68%", size: 2.5, delay: 2.1 },
          { left: "85%", top: "72%", size: 1.8, delay: 0.6 },
          { left: "42%", top: "41%", size: 2.2, delay: 3.4 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-green/70"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: [0, -22, 0], opacity: [0.35, 0.95, 0.35] }}
            transition={{ duration: 5.8 + i * 0.35, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Centered content, Staggered entrance */}
      <div className="relative z-10 flex h-full items-center justify-center px-5 sm:px-8">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          {/* Location badge */}
          <motion.div
            variants={heroItem}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-neon-green/30 bg-neon-green/10 px-4 py-1 text-[10px] tracking-[3.5px] text-neon-green"
          >
            OAKVILLE • MISSISSAUGA • BURLINGTON
          </motion.div>

          {/* Big animated headline — neon glow + pulse (cyber green) */}
          <motion.h1
            variants={heroItem}
            className="heading-display font-bold tracking-[-6.5px] text-white text-[clamp(3.25rem,13vw,8rem)] leading-[0.84] text-glow-green"
          >
            PLANET LASER
          </motion.h1>

          {/* Punchy subheadline */}
          <motion.p
            variants={heroItem}
            className="mt-3 text-balance text-2xl sm:text-3xl md:text-[2.7rem] font-light tracking-[-0.65px] text-white/92"
          >
            Step into the arena.<br className="hidden sm:block" /> Own the night with green fire.
          </motion.p>

          {/* Prominent CTAs — Book Now is the hero action with max glow/scale */}
          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={BUSINESS.bookUrl}
              className="neon-btn group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-neon-green px-10 py-4 text-lg font-extrabold tracking-[0.5px] text-space-950 shadow-2xl hover:bg-white hover:text-space-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
            >
              BOOK NOW
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>

            <Link
              href="/laser-tag"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/70 bg-white/5 px-9 py-4 text-lg font-medium text-white backdrop-blur transition-all hover:border-neon-green/70 hover:bg-white/10 hover:text-neon-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.985] sm:w-auto"
            >
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              Virtual Tour
            </Link>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-6 text-[10px] font-medium tracking-[4.2px] text-white/45"
          >
            GTA’S ULTIMATE LASER TAG &amp; ARCADE
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with green laser pulse */}
      <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-neon-green/50 sm:flex">
        <div className="text-[9px] font-medium tracking-[4.2px]">SCROLL TO MISSION BRIEF</div>
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.05, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div className="laser-line h-5 w-[1px] bg-gradient-to-b from-neon-green/70 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
