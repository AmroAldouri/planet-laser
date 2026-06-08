"use client";

import { motion } from "framer-motion";
import { Cake, Users, Star, Gift, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

const packages = [
  {
    name: "Basic",
    price: 250,
    priceNote: "Mon–Thu",
    weekdayPrice: null,
    perPerson: 25,
    perPersonNote: "Mon–Thu",
    minGuests: 10,
    popular: false,
    features: [
      "2 hours private party room",
      "2 laser tag missions",
      "Printed invitations",
      "Cutlery & setup",
    ],
    highlight: "Perfect starter party",
  },
  {
    name: "Supreme",
    price: 300,
    priceNote: "Fri–Sun",
    weekdayPrice: 280,
    perPerson: 30,
    perPersonNote: "Fri–Sun • $28 Mon–Thu",
    minGuests: 10,
    popular: false,
    features: [
      "2 hours private party room",
      "Everything in Basic",
      "Designated party host",
      "2 slices of pizza per guest",
      "1 juice box or soft drink per guest",
    ],
    highlight: "Host + food included",
  },
  {
    name: "Ultimate",
    price: 400,
    priceNote: "Fri–Sun",
    weekdayPrice: 380,
    perPerson: 40,
    perPersonNote: "Fri–Sun • $38 Mon–Thu",
    minGuests: 10,
    popular: true,
    features: [
      "2 hours private party room",
      "Everything in Supreme",
      "60 arcade credits (~25 min playtime)",
    ],
    highlight: "Maximum fun + arcade time",
  },
];

const addons = [
  { name: "Custom Cake", price: "$40", note: "HST included" },
  { name: "Lootbags", price: "$5", note: "per child + tax" },
  { name: "Extra XL Pizza (12 slices)", price: "$20" },
  { name: "Extra Jumbo Pizza (24 slices)", price: "$25" },
];

const includedAlways = [
  "Private party room for 2 full hours",
  "Dedicated staff & party host (on higher packages)",
  "Hassle-free — we handle setup, serving, and cleanup",
];

export default function BirthdayPartiesPage() {
  return (
    <div className="min-h-screen bg-space-950 text-white">
      {/* Hero */}
      <div className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#a855f710_0%,transparent_60%)]" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-block rounded-full bg-neon-magenta/10 border border-neon-magenta/30 px-4 py-1 text-xs tracking-[2.5px] text-neon-green mb-4">
            BIRTHDAYS THAT KIDS (AND PARENTS) RAVE ABOUT
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-[-1.5px] leading-none heading-display">
            Make Their Birthday<br />Out of This World
          </h1>
          <p className="mt-5 text-xl text-white/70 max-w-2xl mx-auto">
            Epic laser tag missions, private party room, pizza, arcade credits, and a dedicated host who takes care of everything. You just show up and celebrate.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={BUSINESS.bookUrl} size="lg">
              Book Your Party <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
              <Phone className="h-5 w-5" /> Call to Reserve
            </Button>
            <Button href="/laser-tag" variant="ghost" size="lg">
              Just want to play laser tag?
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/50">Minimum 10 guests • 2 laser missions included in every package</p>
        </div>
      </div>

      {/* Why Planet Laser Parties */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-neon-lime text-xs tracking-[3px] uppercase">Stress-Free Celebrations</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">We handle the chaos. You enjoy the memories.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {includedAlways.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-space-900/60 p-5 text-sm text-white/80 flex items-start gap-3">
                <Star className="mt-0.5 h-4 w-4 flex-none text-neon-lime" aria-hidden />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="border-y border-white/10 bg-black/30 py-16 sm:py-20" id="packages">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[3px] text-xs text-neon-green">Choose Your Package</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight">Birthday Party Packages</h2>
            <p className="text-white/60 mt-2">All packages include 2 laser tag missions + 2-hour private room. Weekend (Fri–Sun) pricing shown first for Supreme &amp; Ultimate packages.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col rounded-3xl border p-8 transition-all ${pkg.popular
                  ? "border-neon-green bg-space-900/80 shadow-[0_0_0_1px_rgba(0,255,159,0.45)] box-glow-green"
                  : "border-white/10 bg-space-900/60"}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 right-6 rounded-full bg-neon-cyan px-4 py-0.5 text-xs font-bold tracking-wider text-space-950">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold tabular-nums tracking-[-2px]">{pkg.price}</span>
                    <span className="text-white/60">/ {pkg.priceNote}</span>
                  </div>
                  {pkg.weekdayPrice && (
                    <div className="text-sm text-white/60 mt-0.5">
                      ${pkg.weekdayPrice} Mon–Thu
                    </div>
                  )}
                </div>

                <div className="mt-1">
                  <span className="text-xl font-semibold tracking-tight">{pkg.name}</span>
                  <span className="ml-2 text-sm text-white/50">(minimum 10 guests)</span>
                  <div className="text-xs text-neon-lime mt-1">{pkg.highlight}</div>
                </div>

                <div className="mt-6 space-y-2 text-sm">
                  {/* Nice tier header above the first bullet (2 hours private party room) */}
                  {pkg.name !== "Basic" && (
                    <div className="text-xs uppercase tracking-[1.5px] text-neon-lime/70">
                      (Everything in {pkg.name === "Supreme" ? "Basic" : "Supreme"} +)
                    </div>
                  )}
                  {pkg.features.map((f, fi) => (
                    <div key={fi} className="flex items-start gap-2 text-white/80">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-neon-cyan/80 flex-none" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 text-xs text-white/50">
                  ${pkg.perPerson} per additional guest ({pkg.perPersonNote})
                </div>

                <Button href={BUSINESS.bookUrl} className="mt-6 w-full" variant={pkg.popular ? "primary" : "secondary"}>
                  Select {pkg.name} Package
                </Button>
              </motion.div>
            ))}
          </div>

          {/* VIP Upsell */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-space-900 to-black p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-neon-purple/40 bg-neon-purple/10 px-3 py-1 text-xs tracking-widest text-neon-purple">
                  <Gift className="h-3.5 w-3.5" /> VIP EXCLUSIVE
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">Private Arena Experience</h3>
                <p className="mt-2 text-white/70 max-w-prose">
                  Seal off the entire laser tag arena just for your crew. No outsiders. Total domination for your party’s epic showdowns. Ask about VIP pricing when you book.
                </p>
              </div>
              <Button href={BUSINESS.bookUrl} size="lg" variant="secondary" className="shrink-0">
                Inquire About VIP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[3px] text-neon-lime">Level Up Your Celebration</p>
            <h2 className="mt-2 text-3xl font-semibold">Popular Add-Ons</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {addons.map((addon, i) => (
              <div key={i} className="flex items-center justify-between rounded-2xl border border-white/10 bg-space-900/70 px-6 py-5">
                <div className="font-medium">{addon.name}</div>
                <div className="text-right text-neon-lime tabular-nums">
                  {addon.price} {addon.note && <span className="text-xs text-white/50 ml-1">{addon.note}</span>}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-6 text-sm text-white/50">
            Gift passes included with every package mean the birthday fun continues long after the party ends.
          </p>
        </div>
      </section>

      {/* Real party testimonials */}
      <section className="border-y border-white/10 bg-space-900/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="uppercase text-xs tracking-widest text-neon-green">Parents are obsessed</p>
            <h3 className="text-2xl font-semibold mt-1">Real Birthday Party Reviews</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Wow, I honestly can't say enough amazing things about my son's birthday party at Planet Laser in Oakville! You know those rare times when something actually turns out BETTER than you hoped? This was definitely one of them!",
              "I had my daughter’s birthday party in Planet Laser. I can say it is the best birthday party experience. Everything ran smoothly, the host and all staff were very very helpful and cooperative. I am so glad all my daughter’s friends enjoyed so much and were so happy.",
            ].map((q, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-space-950/70 p-7 text-[15px] leading-relaxed text-white/80">
                “{q}”
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to throw the best party of the year?</h2>
          <p className="mt-3 text-lg text-white/70">Book early — weekends fill up fast. We’ll help you pick the perfect package.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={BUSINESS.bookUrl} size="lg">Book Birthday Party</Button>
            <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
              <Phone className="h-5 w-5" /> {BUSINESS.phone}
            </Button>
          </div>
          <div className="mt-4 text-xs text-white/40">Serving Oakville, Mississauga, Burlington &amp; the GTA</div>
        </div>
      </div>
    </div>
  );
}
