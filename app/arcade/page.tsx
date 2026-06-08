"use client";

import { motion } from "framer-motion";
import { Gamepad2, Coins, Gift, Zap, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

const gameCategories = [
  {
    icon: Gamepad2,
    title: "Classic & Modern Video Games",
    desc: "Timeless favorites and the latest hits. Racing, shooters, fighters, and more — something for every skill level and age.",
  },
  {
    icon: Coins,
    title: "Redemption Games",
    desc: "Ticket-blasting favorites like skee-ball, basketball hoops, and whack-a-mole. Rack up tickets and trade them for epic prizes.",
  },
  {
    icon: Gift,
    title: "Prize Counter",
    desc: "From small toys and candy to big-ticket items. The more you play, the better the haul. Kids go wild for it.",
  },
];

const combos = [
  {
    title: "Laser Tag + Arcade",
    desc: "Play laser tag missions then load your play card and rack up tickets. The perfect one-two punch for any visit.",
    cta: "Play Laser Tag",
    href: "/laser-tag",
  },
  {
    title: "Ultimate Birthday Add-On",
    desc: "The Ultimate package includes 60 arcade credits so every guest gets extra playtime after the missions and pizza.",
    cta: "See Birthday Packages",
    href: "/birthday-parties",
  },
];

export default function ArcadePage() {
  return (
    <div className="min-h-screen bg-space-950 text-white">
      {/* Hero — Planet Laser arcade lobby photo background */}
      <div className="relative min-h-[70vh] sm:min-h-[75vh] pt-24 pb-16 sm:pt-28 border-b border-white/10 overflow-hidden">
        <img
          src="/arcade-hero.png"
          alt="Planet Laser arcade with air hockey, basketball games, claw machines, and neon ARCADE FUN signage"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/68 to-black/88" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/50 to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,159,0.06)_15%,transparent_70%)]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-neon-green/35 bg-black/50 px-4 py-1.5 text-xs tracking-[2.5px] text-neon-green backdrop-blur-sm">
            REDEMPTION • CLASSICS • NEW RELEASES
          </div>

          <h1 className="hero-photo-title text-5xl sm:text-6xl font-bold tracking-tighter heading-display">
            Power Up in the<br />
            <span className="bg-gradient-to-r from-neon-green via-neon-lime to-neon-cyan bg-clip-text text-transparent text-glow-green">
              Arcade Zone
            </span>
          </h1>
          <p className="hero-photo-subtext mt-5 text-xl max-w-xl mx-auto">
            High-energy games before or after your laser tag missions. Drop in anytime, no reservation needed.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={BUSINESS.bookUrl} size="lg">
              Reserve Games + Laser
            </Button>
            <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
              Call for Group Info
            </Button>
          </div>
          <p className="hero-photo-caption mt-5">Open daily • Perfect for families, date nights &amp; squad hangs</p>
        </div>
      </div>

      {/* The Vibe */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase text-xs tracking-[3px] text-neon-lime">Non-Stop Fun</p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight">Your mission isn’t over when the vest comes off.</h2>
              <p className="mt-5 text-lg text-white/70">
                Keep the energy going in our bright, buzzing arcade packed with redemption games and crowd-pleasing classics. Whether you’re topping the laser tag leaderboard or just came to play, the arcade delivers instant gratification and serious prize potential.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
                <Users className="h-4 w-4" aria-hidden /> All ages • Card-based play • Great for all group sizes
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-space-900/70 p-8 text-sm leading-relaxed text-white/75">
              “The kids crushed laser tag, then spent the next hour winning enough tickets for the giant stuffed prizes. Parents got to relax with coffee while they played. Win-win.” — Frequent visitor
            </div>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="border-y border-white/10 py-16 sm:py-20 bg-space-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[3px] text-neon-green">What’s in the Arcade</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Games for Every Player</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gameCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.01 }}
                  className="rounded-3xl border border-white/10 bg-space-950/70 p-8"
                >
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-neon-green" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-xl tracking-tight">{cat.title}</h3>
                  <p className="mt-3 text-white/70">{cat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Combos & Cross-sell */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[3px] text-xs text-neon-lime">Pro Move</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Pair the Arcade with Laser Tag or a Party</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {combos.map((combo, idx) => (
              <div key={idx} className="group rounded-3xl border border-white/10 bg-space-900/70 p-8 flex flex-col">
                <div className="flex-1">
                  <div className="font-semibold text-2xl tracking-tight group-hover:text-neon-lime transition-colors">{combo.title}</div>
                  <p className="mt-3 text-white/70 leading-relaxed">{combo.desc}</p>
                </div>
                <Button href={combo.href} variant="secondary" className="mt-8 self-start">
                  {combo.cta} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promos / Practical info */}
      <section className="border-t border-white/10 bg-black/40 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-neon-lime mb-3">
            <Zap className="h-4 w-4" /> Look out for weekly promos
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Watch for $4.50 Tuesdays and other specials</h3>
          <p className="mt-3 text-white/60 max-w-md mx-auto">
            Great value for families and groups. Ask at the counter or follow us on socials for the latest deals.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/laser-tag">Combine with Laser Tag</Button>
            <Button href={BUSINESS.bookUrl} variant="secondary">Book a Party with Arcade Credits</Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <div className="py-12 text-center border-t border-white/10">
        <p className="text-white/80">Drop in today, the games are waiting.</p>
        <div className="mt-4">
          <Button href={BUSINESS.phoneHref} size="lg" variant="ghost">
            Call {BUSINESS.phone} for current specials
          </Button>
        </div>
      </div>
    </div>
  );
}
