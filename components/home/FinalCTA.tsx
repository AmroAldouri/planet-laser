"use client";

import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-space-900 via-space-950 to-black p-10 sm:p-16 text-center">
          {/* subtle glow accents — green cyber */}
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-neon-green/15 blur-3xl" aria-hidden />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-neon-lime/10 blur-3xl" aria-hidden />

          <p className="text-sm font-semibold uppercase tracking-[3px] text-neon-green">The Mission Awaits</p>
          <h2 id="cta-heading" className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl heading-display">
            Ready to own the arena?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Grab your crew and book your session today. Drop-ins are welcome, but reservations are recommended for groups of 10+ and all birthday parties.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={BUSINESS.bookUrl} size="lg" className="w-full sm:w-auto group neon-btn">
              BOOK YOUR MISSION NOW
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Button>

            <Button href={BUSINESS.phoneHref} variant="secondary" size="lg" className="w-full sm:w-auto">
              <Phone className="h-5 w-5" aria-hidden />
              Call {BUSINESS.phone}
            </Button>
          </div>

          <div className="mt-8 text-xs text-white/50">
            Serving Oakville • Mississauga • Burlington • All of the GTA
          </div>
        </div>
      </div>
    </section>
  );
}
