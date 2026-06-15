"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Cake,
  Crosshair,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<(typeof SERVICES)[number]["icon"], LucideIcon> = {
  crosshair: Crosshair,
  cake: Cake,
  gamepad2: Gamepad2,
  briefcase: Briefcase,
};

const accentStyles = {
  cyan: {
    icon: "text-neon-green bg-neon-green/15 border-neon-green/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,255,159,0.28)]",
    text: "text-neon-green",
  },
  magenta: {
    icon: "text-neon-lime bg-neon-lime/15 border-neon-lime/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(57,255,20,0.28)]",
    text: "text-neon-lime",
  },
  purple: {
    icon: "text-neon-green bg-neon-green/15 border-neon-green/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,255,159,0.28)]",
    text: "text-neon-green",
  },
  blue: {
    icon: "text-neon-lime bg-neon-lime/15 border-neon-lime/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(57,255,20,0.25)]",
    text: "text-neon-lime",
  },
} as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ServiceCards() {
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-neon-green">
            What We Offer
          </p>
          <h2
            id="services-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl heading-display"
          >
            Your Mission Starts Here
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From drop in laser battles to epic birthday bashes and corporate
            team missions, we&apos;ve got the whole crew covered.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            const accent = accentStyles[service.accent];

            return (
              <motion.div key={service.href} variants={cardVariants}>
                <Link
                  href={service.href}
                  className={cn(
                    "group relative flex h-full flex-col rounded-2xl border border-white/10 bg-space-900/86 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-neon-green/50 hover:shadow-[0_0_26px_rgba(0,255,159,0.18)]",
                    accent.glow,
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-xl border",
                      accent.icon,
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>

                  <span
                    className={cn(
                      "mt-5 inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2",
                      accent.text,
                    )}
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
