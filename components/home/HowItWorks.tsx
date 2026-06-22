"use client";

import { motion, type Variants } from "framer-motion";
import { Crosshair, Trophy, UserCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Suit Up",
    description:
      "Get geared up with your vest and phaser. Our Game Masters will walk you through everything you need to know before you enter the arena. Quick, safe, and fun for first timers and veterans alike.",
  },
  {
    number: "02",
    icon: Crosshair,
    title: "Game On",
    description:
      "Step into the glow lit, multi level arena where fog swirls and lights pulse. It’s every player for themselves, or team vs team. Tag opponents, avoid getting hit, and rack up points in an action packed mission.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Check the Score",
    description:
      "Once the game ends, head back to see your scores on the big leaderboard. Analyze your stats, claim bragging rights, and challenge your friends to beat your high score next round.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-white/10" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-neon-green">Three Easy Steps</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl heading-display">
            How Laser Tag Works at Planet Laser
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From zero to full on space warrior in minutes. No experience required.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                className="group relative rounded-3xl border border-white/10 bg-space-900/78 p-8 backdrop-blur-sm transition-all hover:border-neon-green/50 hover:shadow-[0_0_22px_rgba(0,255,159,0.16)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-6xl font-black text-white/10 tabular-nums transition-colors group-hover:text-neon-green/40">
                    {step.number}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-space-950 text-neon-green transition-transform group-hover:scale-110 box-glow-green">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/60">
            Drop ins welcome, no reservation required for small groups
          </p>
        </div>
      </div>
    </section>
  );
}
