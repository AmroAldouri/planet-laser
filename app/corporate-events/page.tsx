"use client";

import { Users, Target, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

const benefits = [
  { icon: Users, title: "Team Building That Actually Works", desc: "Laser tag forces communication, strategy, and quick decision-making — the exact skills high-performing teams use every day." },
  { icon: Target, title: "Private & Semi-Private Options", desc: "Book sections of the arena or the whole thing. We tailor missions to your group size and goals." },
  { icon: Trophy, title: "Leaderboards & Debriefs", desc: "See who really stepped up. Great for friendly competition between departments or friendly rivalries." },
];

export default function CorporateEventsPage() {
  return (
    <div className="min-h-screen bg-space-950 text-white pt-20">
      <div className="relative border-b border-white/10 pt-16 pb-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-xs tracking-[2.5px] text-neon-green mb-4">CORPORATE • SCHOOL • SPORTS TEAMS • GROUPS 10+</div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter heading-display">Corporate Events &amp;<br />Team Missions</h1>
          <p className="mt-4 max-w-xl mx-auto text-xl text-white/70">
            Take your team out of the boardroom and into the arena. Unforgettable, high-energy experiences that build real camaraderie.
          </p>
          <div className="mt-8">
            <Button href={BUSINESS.bookUrl} size="lg">Book a Corporate Event <ArrowRight className="h-5 w-5" /></Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="rounded-3xl border border-white/10 bg-space-900/70 p-8">
                <div className="h-11 w-11 rounded-2xl bg-neon-blue/10 text-neon-green flex items-center justify-center mb-6">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="font-semibold text-xl tracking-tight">{b.title}</div>
                <p className="mt-3 text-white/70 text-[15px]">{b.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-space-900 to-black p-9 sm:p-12">
          <div className="max-w-2xl">
            <div className="text-neon-cyan text-xs tracking-[3px] uppercase mb-2">What Groups Are Saying</div>
            <div className="text-2xl font-semibold tracking-tight">“Best team outing we’ve done in years. Everyone from interns to the VP was trash-talking and laughing together.”</div>
            <div className="mt-2 text-sm text-white/50">— Local tech company, Mississauga</div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/60">We customize packages for groups of all sizes. Laser tag + arcade combos, catering options, and private room access available.</p>
          <div className="mt-6">
            <Button href="/contact#book" size="lg">Start Planning Your Event</Button>
          </div>
          <div className="mt-2 text-xs text-white/40">Call {BUSINESS.phone} for same-week availability</div>
        </div>
      </div>
    </div>
  );
}
