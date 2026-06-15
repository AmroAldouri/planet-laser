import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PlanetLaserMark } from "@/components/ui/PlanetLaserMark";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/58 backdrop-blur-md pt-16 pb-10 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-block">
              <PlanetLaserMark variant="compact" className="h-8 w-auto transition-transform group-hover:scale-[1.015]" />
            </Link>
            <p className="mt-4 max-w-[18ch] text-white/60 leading-relaxed">
              Oakville’s ultimate laser tag, arcade &amp; party destination. Serving families across the GTA since 2005.
            </p>
            <div className="mt-4 flex gap-3 text-white/40">
              <a href="https://www.instagram.com/planetlaser" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors" aria-label="Instagram">
                IG
              </a>
              <a href="https://www.facebook.com/planetlaser" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors" aria-label="Facebook">
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-semibold text-white mb-3 tracking-wide text-xs uppercase">Explore</div>
            <ul className="space-y-2 text-white/70">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-white mb-3 tracking-wide text-xs uppercase">Visit Us</div>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-neon-magenta" aria-hidden />
                <span>
                  {BUSINESS.address.street}<br />
                  {BUSINESS.address.city}, {BUSINESS.address.province} {BUSINESS.address.postalCode}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-neon-cyan" aria-hidden />
                <a href={BUSINESS.phoneHref} className="hover:text-white transition-colors">{BUSINESS.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-neon-purple" aria-hidden />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors">{BUSINESS.email}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <div className="font-semibold text-white mb-3 tracking-wide text-xs uppercase flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden /> Hours
            </div>
            <ul className="space-y-[3px] text-white/70 tabular-nums">
              {BUSINESS.hours.map((h) => {
                const closeDisplay = h.closes === "00:00" ? "midnight" : h.closes;
                return (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-white/50">
                      {h.opens} to {closeDisplay}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-[11px] text-white/40">Hours may vary on holidays. Call to confirm.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>
            © {currentYear} {BUSINESS.name}. All rights reserved. Oakville, ON.
          </p>
          <p>
            Laser tag • Birthday parties • Arcade • Corporate events • Family fun
          </p>
        </div>
      </div>
    </footer>
  );
}
