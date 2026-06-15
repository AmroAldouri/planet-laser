import { BUSINESS } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white relative pt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="uppercase tracking-[3px] text-xs text-neon-green">Since 2005</p>
        <h1 className="mt-3 text-5xl font-bold tracking-tighter heading-display">About Planet Laser</h1>

        <div className="prose prose-invert mt-8 max-w-none text-[17px] leading-relaxed text-white/80">
          <p>
            Planet Laser is Oakville, Mississauga and Burlington’s ultimate spot for family fun and entertainment. We feature a unique multi level laser tag arena with competitive play maps built for players of all ages and skill levels.
          </p>
          <p>
            For over 20 years we’ve been “THE PLACE” where friends, families, school groups, and coworkers come to disconnect from screens and connect through epic, glow in the dark battles, followed by arcade games and celebrations in our private party rooms.
          </p>
          <p>
            No reservation is required to drop in and play laser tag or the arcade. For birthday parties, corporate events, or groups of 10 or more we strongly recommend booking ahead so we can prepare the perfect experience (and lock in the best times).
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-space-900/78 p-8">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 text-sm">
            <div>
              <div className="font-semibold text-neon-green mb-1">Address</div>
              <div>{BUSINESS.address.street}<br />{BUSINESS.address.city}, ON {BUSINESS.address.postalCode}</div>
            </div>
            <div>
              <div className="font-semibold text-neon-green mb-1">Contact</div>
              <div>{BUSINESS.phone} • {BUSINESS.email}</div>
            </div>
            <div>
              <div className="font-semibold text-neon-green mb-1">Service Area</div>
              <div>Oakville, Mississauga, Burlington &amp; the entire GTA</div>
            </div>
            <div>
              <div className="font-semibold text-neon-green mb-1">What We’re Known For</div>
              <div>Multi level laser tag • Birthday parties • Arcade • Corporate team building</div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/laser-tag">Play Laser Tag</Button>
          <Button href="/birthday-parties" variant="secondary">Plan a Birthday</Button>
          <Button href="/contact#book" variant="ghost">Book an Event</Button>
        </div>

        <p className="text-center mt-12 text-xs text-white/40">Thank you to the thousands of families who have made Planet Laser part of their traditions.</p>
      </div>
    </div>
  );
}
