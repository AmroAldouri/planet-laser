"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { HeroFlowBackground } from "@/components/ui/HeroFlowBackground";
import { HeroLaserOverlay } from "@/components/ui/HeroLaserOverlay";
import { BUSINESS } from "@/lib/constants";

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

export function HomeHero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label="Planet Laser hero with neon background"
    >
      <HeroFlowBackground
        src="/planet-laser-neon.jpg"
        alt="Planet Laser neon lit arena and signage with vibrant green lighting"
        variant="home"
      />

      <HeroLaserOverlay />

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

      <div className="relative z-10 flex h-full items-center justify-center px-5 pt-10">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          <motion.h1
            variants={heroItem}
            whileHover={{ scale: 1.015 }}
            className="heading-display font-extrabold tracking-[-3.8px] text-white text-[clamp(2.05rem,9.2vw,4.6rem)] leading-[0.9] hero-headline mb-1.5"
          >
            LASER TAG • PARTIES • ARCADE
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="text-neon-green/90 text-sm sm:text-[15px] tracking-[4.5px] font-medium mb-9"
          >
            OAKVILLE • MISSISSAUGA • BURLINGTON
          </motion.p>

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

          <motion.p variants={heroItem} className="hero-photo-caption mt-7 tracking-[2px]">
            GTA’S ULTIMATE NEON EXPERIENCE
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-neon-green/55 sm:flex">
        <div className="text-[9px] font-medium tracking-[4.5px]">SCROLL TO BEGIN</div>
        <div className="hero-scroll-bounce" aria-hidden>
          <div className="laser-line h-4 w-[1px] bg-gradient-to-b from-neon-green/75 to-transparent" />
        </div>
      </div>
    </section>
  );
}
