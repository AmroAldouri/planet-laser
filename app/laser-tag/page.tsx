"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crosshair, Users, Zap, Trophy, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroVideoBackground } from "@/components/ui/HeroVideoBackground";
import { BUSINESS } from "@/lib/constants";
import { ARENA_GALLERY } from "@/lib/arena-gallery";
import { cn } from "@/lib/utils";

const gameModes = [
  {
    icon: Crosshair,
    title: "Free for All",
    desc: "Classic every player for themselves. Highest tags wins. Perfect for showing off your skills.",
  },
  {
    icon: Users,
    title: "Team Battles",
    desc: "Squad up with friends or family. Coordinate, flank, and dominate the opposing team.",
  },
  {
    icon: Trophy,
    title: "Capture the Base",
    desc: "Strategic missions. Defend or attack key zones while tagging enemies. Teamwork is everything.",
  },
];

const pricing = [
  { games: "1 Game", price: "$9", note: "+ tax", hint: "Drop in anytime" },
  { games: "2 Games", price: "$17", note: "+ tax", hint: "Save vs single games" },
  {
    games: "2 Games + $10 Arcade Card",
    price: "$27",
    note: "+ tax",
    hint: "1 hour play time",
    highlight: true,
  },
];

const promos = [
  { label: "$5 Tuesdays", desc: "Any single game for $5 including tax — all day Tuesday.", accent: "border-neon-cyan/50 bg-neon-cyan/5" },
  {
    label: "All You Can Play",
    desc: "Friday & Saturday • 9:00 PM – Midnight • Unlimited missions",
    accent: "border-neon-green bg-neon-green/10 box-glow-green",
    price: "$25",
  },
];

export default function LaserTagPage() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Hero Header */}
      <div className="relative min-h-[70vh] sm:min-h-[75vh] pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden border-b border-white/10">
        <HeroVideoBackground
          src="/laser-tag-hero.mp4"
          poster="/gallery-arena-1.png"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-green/40 bg-black/65 px-4 py-1 text-xs tracking-[2.5px] text-neon-green backdrop-blur-sm mb-4">
            MULTI LEVEL • GLOW IN THE DARK
          </div>

          <h1 className="hero-photo-title text-5xl sm:text-6xl font-bold tracking-tighter heading-display">
            Laser Tag at<br />
            <span className="bg-gradient-to-r from-neon-green via-neon-lime to-neon-cyan bg-clip-text text-transparent text-glow-green">
              Planet Laser
            </span>
          </h1>
          <p className="hero-photo-subtext mt-4 text-xl max-w-2xl mx-auto">
            Oakville’s most immersive multi level laser tag arena. Fog, lights, sound, and non stop action for every age and skill level.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={BUSINESS.bookUrl} size="lg">
              Book Your Games
            </Button>
            <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
              Call {BUSINESS.phone}
            </Button>
            <Button href="/birthday-parties" variant="ghost" size="lg">
              Host a Party Instead →
            </Button>
          </div>

          <p className="hero-photo-caption mt-6">Drop ins welcome for small groups • Reservations recommended for 10+</p>
        </div>
      </div>

      {/* Pricing — anchored right below hero */}
      <section className="relative z-20 -mt-10 sm:-mt-14 pb-4" aria-labelledby="laser-pricing-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-space-900/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-md"
          >
            <div className="border-b border-white/10 bg-gradient-to-r from-neon-green/10 via-transparent to-neon-purple/10 px-6 py-5 sm:px-8 sm:py-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[3px] text-neon-magenta">Play Today</p>
                  <h2 id="laser-pricing-heading" className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl heading-display">
                    Game Prices
                  </h2>
                  <p className="mt-1.5 text-sm text-white/60">No reservation needed for small groups. Walk in and play.</p>
                </div>
                <Button href={BUSINESS.bookUrl} size="sm" className="shrink-0 self-start sm:self-auto">
                  Book Now
                </Button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-6 flex justify-center">
                <p className="inline-flex items-center gap-2 rounded-full border border-neon-green/40 bg-neon-green/10 px-5 py-2 text-center text-xs font-semibold uppercase tracking-[0.22em] text-neon-lime sm:text-sm sm:tracking-[0.28em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-green shadow-[0_0_8px_rgba(0,255,159,0.8)]" aria-hidden />
                  Games are 15 Minutes
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-green shadow-[0_0_8px_rgba(0,255,159,0.8)]" aria-hidden />
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {pricing.map((tier) => (
                  <div
                    key={tier.games}
                    className={cn(
                      "relative flex flex-col rounded-2xl border px-5 py-5 transition-colors",
                      tier.highlight
                        ? "border-neon-green/55 bg-neon-green/8 box-glow-green"
                        : "border-white/10 bg-black/35 hover:border-white/20",
                    )}
                  >
                    {tier.highlight && (
                      <span className="absolute -top-2.5 right-4 rounded-full bg-neon-cyan px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-space-950">
                        Best Value
                      </span>
                    )}
                    <div className="pr-16 text-sm font-medium leading-snug text-white/70">{tier.games}</div>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-4xl font-bold tabular-nums tracking-tight text-neon-green">{tier.price}</span>
                      <span className="text-sm text-white/45">{tier.note}</span>
                    </div>
                    <p className="mt-3 text-xs text-white/45">{tier.hint}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {promos.map((promo) => (
                  <div
                    key={promo.label}
                    className={cn(
                      "rounded-2xl border p-5 sm:p-6",
                      promo.accent,
                      promo.price && "lg:flex lg:items-center lg:justify-between lg:gap-6",
                    )}
                  >
                    <div className={promo.price ? "lg:flex-1" : undefined}>
                      <div className="text-xs uppercase tracking-[2.5px] text-neon-purple">{promo.label}</div>
                      <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-[15px]">{promo.desc}</p>
                    </div>
                    {promo.price && (
                      <div className="mt-4 flex shrink-0 items-center gap-3 lg:mt-0">
                        <span className="rounded-full border border-neon-green/60 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neon-lime">
                          Only
                        </span>
                        <span className="text-4xl font-extrabold tabular-nums text-white text-glow-green sm:text-5xl">
                          {promo.price}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-center text-xs text-white/45">
                All prices plus tax. Games are non transferable and non refundable. Prices subject to change.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Arena photos */}
      <section className="py-16 sm:py-20 border-b border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[3px] text-neon-green">Real Photos</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight heading-display">Inside the Arena</h2>
            <p className="mt-3 max-w-lg mx-auto text-white/60">
              Multi level mazes, themed battle zones, and neon blacklight environments built for non stop missions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-5">
            {ARENA_GALLERY.map((photo, i) => (
              <motion.figure
                key={photo.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={cn(
                  "neon-frame group relative overflow-hidden rounded-3xl border border-white/10 bg-space-900/78 h-[240px] sm:h-[260px]",
                  i === 0 && "lg:col-span-7 lg:row-span-2 lg:h-auto lg:min-h-[420px]",
                  i > 0 && "lg:col-span-5",
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 600px"}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: photo.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="text-base font-semibold text-white">{photo.label}</div>
                  <p className="mt-1 text-sm text-neon-green/90">{photo.sub}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[3px] text-xs text-neon-magenta mb-2">The Arena</p>
            <h2 className="text-4xl font-bold tracking-tight">Step into the battlefield.</h2>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              Our high energy, glow in the dark arena is a multi level battlefield filled with swirling fog, vibrant lights, and immersive sound effects. The atmosphere alone will transport you straight into the action.
            </p>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Whether you’re playing with friends, family, coworkers or teammates, every round feels fresh and electric.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Zap, label: "Multi Level Arena" },
                { icon: Shield, label: "Safe for All Ages" },
                { icon: Clock, label: "15 to 20 min Missions" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-space-900/78 px-4 py-3">
                  <f.icon className="h-5 w-5 text-neon-green" aria-hidden />
                  <span className="text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-space-900/86">
            <div className="relative h-[280px] sm:h-[320px]">
              <Image
                src="/gallery-arena-2.png"
                alt="Planet Laser Egyptian themed arena with glowing obelisk and pharaoh murals"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            </div>
            <div className="p-8 sm:p-10">
              <div className="uppercase text-xs tracking-widest text-neon-green mb-3">The Player</div>
              <h3 className="text-2xl font-semibold">Everyone’s invited.</h3>
              <p className="mt-3 text-white/70">
                Beginner or laser legend, our Game Masters make sure you’re comfortable and ready. Play solo, join a team, or go head to head. Move, strategize, and prove your skills.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/60 space-y-1">
                <div>• Ages 5+ recommended (younger players welcome with adult)</div>
                <div>• Height/weight friendly gear for kids and adults</div>
                <div>• Full briefing before every game</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Tech */}
      <section className="border-y border-white/10 bg-space-900/58 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-neon-purple text-xs tracking-[3px] uppercase">Pro Grade Gear</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Built for performance and comfort.</h2>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Lightweight sensor vests with bright LED hit feedback",
              "Precision phasers that register every tag instantly",
              "Real time scoring synced to the big screens",
            ].map((text, i) => (
              <div key={i} className="rounded-2xl border border-white/10 p-6 bg-space-950/78 text-white/80">
                {text}
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-white/50">Safe, comfortable, and designed for non stop action.</p>
        </div>
      </section>

      {/* Game Modes */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs uppercase tracking-[3px] text-neon-green">Choose Your Mission</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Game Modes for Every Crew</h2>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {gameModes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="group rounded-3xl border border-white/10 bg-space-900/86 p-7 transition-all hover:border-neon-green/60 box-glow-green"
                >
                  <div className="h-12 w-12 rounded-2xl bg-neon-cyan/10 text-neon-green flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-2xl tracking-tight">{mode.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed">{mode.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-black/55 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={BUSINESS.bookUrl} size="lg" className="sm:min-w-[220px]">
              Reserve Your Mission
            </Button>
            <Button href="/arcade" variant="secondary" size="lg">
              Check Out the Arcade
            </Button>
          </div>
          <p className="mt-8 text-center text-sm text-white/50 max-w-md mx-auto">
            Our Game Masters are on-site to make sure everyone has a blast, safely. First time? You&apos;ll be a pro in no time.
          </p>
        </div>
      </section>
    </div>
  );
}
