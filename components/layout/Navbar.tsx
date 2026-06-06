"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-space-900/80 px-4 py-3 backdrop-blur-xl sm:px-6",
            "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
          )}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="group flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Planet Laser"
              className="h-9 w-auto sm:h-10 transition-transform group-hover:scale-[1.015]"
            />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link rounded-lg px-3.5 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:shadow-[0_0_12px_rgba(0,255,159,0.25)]"
                  style={{ transitionDelay: `${idx * 22}ms` }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              href={BUSINESS.bookUrl}
              size="sm"
              className="hidden sm:inline-flex"
            >
              Book Now
            </Button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-2 rounded-2xl border border-white/10 bg-space-900/95 p-4 backdrop-blur-xl">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-all hover:bg-white/5 hover:text-neon-green hover:shadow-[0_0_10px_rgba(0,255,159,0.2)]"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-white/10 pt-4">
                  <Button href={BUSINESS.bookUrl} className="w-full">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
