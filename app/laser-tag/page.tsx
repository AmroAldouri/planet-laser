"use client";

import { motion } from "framer-motion";
import { Crosshair, Users, Zap, Trophy, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

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
  { games: "1 Game", price: "$9", note: "+ tax" },
  { games: "2 Games", price: "$17", note: "+ tax" },
  { games: "3 Games", price: "$20", note: "+ tax" },
];

const promos = [
  { label: "$5 Tuesdays", desc: "Play any single game for just $5 including tax all day Tuesday." },
  { label: "All You Can Play", desc: "Friday & Saturday 9pm to midnight. Unlimited missions. Limited spots." },
];

export default function LaserTagPage() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Hero Header */}
      <div className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_0.6px,transparent_1px)] bg-[length:4px_4px]" aria-hidden />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-green/40 bg-neon-green/10 px-4 py-1 text-xs tracking-[2.5px] text-neon-green mb-4">
            MULTI LEVEL • GLOW IN THE DARK
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter heading-display">
            Laser Tag at<br />
            <span className="bg-gradient-to-r from-neon-green via-neon-lime to-neon-cyan bg-clip-text text-transparent text-glow-green">
              Planet Laser
            </span>
          </h1>
          <p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto">
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

          <p className="mt-6 text-sm text-white/50">Drop ins welcome for small groups • Reservations recommended for 10+</p>
        </div>
      </div>

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

          <div className="relative rounded-3xl border border-white/10 bg-space-900/86 p-8 sm:p-10">
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

      {/* Pricing + Promos */}
      <section className="border-t border-white/10 bg-black/55 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-x-10 gap-y-12">
            {/* Pricing */}
            <div className="lg:col-span-3">
              <div>
                <p className="uppercase text-xs tracking-[3px] text-neon-magenta">Play Today</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">Game Prices</h2>
                <p className="mt-2 text-white/60">No reservation needed for small groups. Walk in and play.</p>
              </div>

              <div className="mt-8 space-y-3">
                {pricing.map((tier, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-space-900/86 px-6 py-5 hover:border-white/25 transition-colors"
                  >
                    <div className="font-medium text-lg">{tier.games}</div>
                    <div className="text-right">
                      <span className="text-3xl font-semibold tabular-nums tracking-tighter text-neon-green">{tier.price}</span>
                      <span className="ml-1 text-sm text-white/50">{tier.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-white/50">All prices plus tax. Games are non transferable and non refundable. Prices subject to change.</p>
            </div>

            {/* Promos */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-white/10 bg-space-900/86 p-8 h-full">
                <div className="uppercase tracking-[2.5px] text-xs text-neon-purple mb-2">Hot Deals</div>
                <h3 className="text-2xl font-semibold">Specials &amp; Late Nights</h3>

                <div className="mt-6 space-y-6">
                  {promos.map((p, idx) => (
                    <div key={idx} className="border-l-2 border-neon-purple pl-5">
                      <div className="font-semibold text-lg">{p.label}</div>
                      <p className="text-white/70 mt-1 text-[15px]">{p.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-sm">
                  Combine laser tag + arcade for maximum fun. Perfect before or after your birthday party.
                </div>
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={BUSINESS.bookUrl} size="lg" className="sm:min-w-[220px]">
              Reserve Your Mission
            </Button>
            <Button href="/arcade" variant="secondary" size="lg">
              Check Out the Arcade
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom reassurance */}
      <div className="py-10 text-center text-sm text-white/50 max-w-md mx-auto px-4">
        Our Game Masters are on-site to make sure everyone has a blast, safely. First time? You’ll be a pro in no time.
      </div>
    </div>
  );
}
