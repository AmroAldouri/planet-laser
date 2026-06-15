"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white relative pt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[3px] text-xs text-neon-green">We’re Here to Help</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tighter heading-display">Let’s Get Your Mission Booked</h1>
          <p className="mt-4 text-xl text-white/70 max-w-lg mx-auto">
            Drop ins welcome for laser tag and arcade. For parties, groups of 10+, and corporate events, reservations are recommended.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Booking Info / Form area */}
          <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-space-900/86 p-8 sm:p-10">
            <h2 id="book" className="text-2xl font-semibold tracking-tight">Request Your Booking</h2>
            <p className="text-sm text-white/60 mt-1">We’ll confirm within a few hours. Or call us for same day availability.</p>

            {/* Simple visual form (non-functional for demo) */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! In a real site this would submit to your booking system. Call us for immediate booking.");
              }}
              className="mt-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Your Name" className="rounded-xl bg-space-950 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-neon-green" />
                <input required type="tel" placeholder="Phone Number" className="rounded-xl bg-space-950 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-neon-green" />
              </div>
              <input required type="email" placeholder="Email Address" className="w-full rounded-xl bg-space-950 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-neon-green" />

              <div className="grid sm:grid-cols-2 gap-4">
                <select required className="rounded-xl bg-space-950 border border-white/15 px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-neon-green">
                  <option value="">What are you booking?</option>
                  <option>Laser Tag Sessions</option>
                  <option>Birthday Party (Basic / Supreme / Ultimate)</option>
                  <option>Corporate / Group Event</option>
                  <option>Private Arena (VIP)</option>
                  <option>Other / Questions</option>
                </select>
                <input type="date" className="rounded-xl bg-space-950 border border-white/15 px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-neon-green" />
              </div>

              <textarea rows={4} placeholder="Tell us about your group size, preferred time, or any special requests..." className="w-full rounded-2xl bg-space-950 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-neon-green" />

              <Button type="submit" size="lg" className="w-full">Submit Booking Request</Button>
              <p className="text-[10px] text-center text-white/40">This is a demo form. Call for fastest confirmation.</p>
            </form>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-space-900/86 p-8">
              <div className="uppercase text-xs tracking-widest text-neon-lime mb-4">Direct Contact</div>

              <div className="space-y-5 text-sm">
                <a href={BUSINESS.phoneHref} className="flex items-start gap-4 group">
                  <Phone className="mt-0.5 h-5 w-5 text-neon-green group-hover:scale-110 transition" />
                  <div>
                    <div className="font-medium">{BUSINESS.phone}</div>
                    <div className="text-white/50">Call for same day laser tag</div>
                  </div>
                </a>

                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-4 group">
                  <Mail className="mt-0.5 h-5 w-5 text-neon-green group-hover:scale-110 transition" />
                  <div>
                    <div className="font-medium">{BUSINESS.email}</div>
                    <div className="text-white/50">Email us your party details</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-neon-lime" />
                  <div>
                    {BUSINESS.address.street}<br />
                    {BUSINESS.address.city}, {BUSINESS.address.province} {BUSINESS.address.postalCode}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-space-900/86 p-8">
              <div className="flex items-center gap-2 uppercase tracking-[2px] text-xs text-neon-green mb-4">
                <Clock className="h-4 w-4" /> Current Hours
              </div>
              <ul className="space-y-1 text-sm tabular-nums text-white/80">
                {BUSINESS.hours.map((h) => {
                  const closeDisplay = h.closes === "00:00" ? "midnight" : h.closes;
                  return (
                    <li key={h.day} className="flex justify-between">
                      <span>{h.day}</span>
                      <span className="text-white/50">{h.opens} to {closeDisplay}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-xs text-white/40">Hours can vary on holidays and for private events. Please call ahead.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-white/40">
          461 North Service Rd W, Oakville • Serving Oakville, Mississauga, Burlington &amp; the GTA
        </div>
      </div>
    </div>
  );
}
