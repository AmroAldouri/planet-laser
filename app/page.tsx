'use client';

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { HomeHero } from "@/components/home/HomeHero";
import { PromoTicker } from "@/components/home/PromoTicker";
import { BUSINESS } from "@/lib/constants";
import { ARENA_GALLERY } from "@/lib/arena-gallery";

const ServiceCards = dynamic(
  () => import("@/components/home/ServiceCards").then((m) => ({ default: m.ServiceCards })),
  { ssr: true },
);
const HowItWorks = dynamic(
  () => import("@/components/home/HowItWorks").then((m) => ({ default: m.HowItWorks })),
  { ssr: true },
);
const Testimonials = dynamic(
  () => import("@/components/home/Testimonials").then((m) => ({ default: m.Testimonials })),
  { ssr: true },
);
const FinalCTA = dynamic(
  () => import("@/components/home/FinalCTA").then((m) => ({ default: m.FinalCTA })),
  { ssr: true },
);

export default function Home() {
  return (
    <div className="min-h-screen text-white relative">
      <HomeHero />
      <PromoTicker />

      <ServiceCards />

      <section className="relative py-16 sm:py-20 border-y border-white/10 bg-black/55 content-auto" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[3.5px] text-neon-green">Electric Nights</p>
            <h2 id="gallery-heading" className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight heading-display">Captured in the Arena</h2>
            <p className="mt-3 max-w-md text-white/60">Real moments. Green beams. Pure adrenaline.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 gap-4 max-w-6xl mx-auto">
            {ARENA_GALLERY.map((img, i) => (
              <motion.a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ scale: 1.012 }}
                className={`neon-frame group relative block overflow-hidden rounded-3xl border border-white/10 bg-space-900/78 ${
                  i === 0
                    ? "aspect-[4/3] sm:aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:min-h-[420px]"
                    : i === 3
                      ? "aspect-[4/3] lg:col-span-5"
                      : "aspect-[4/3] lg:col-span-5 lg:aspect-[16/11]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: img.objectPosition }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="text-sm font-semibold text-white">{img.label}</div>
                  <div className="mt-0.5 text-xs text-neon-green/90">{img.sub}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 border-t border-white/10 content-auto" aria-labelledby="about-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[4px] text-neon-green">Oakville</p>
            <h2 id="about-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl heading-display">
              The GTA’s Favorite Place for Laser Tag &amp; Family Fun
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-8 mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/70"
          >
            Planet Laser is Oakville, Mississauga and Burlington’s ultimate spot for family fun and entertainment, featuring a unique multi level laser tag arena and competitive play map. Planet Laser is “THE PLACE” to engage interactively with your friends and family.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-6 mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/70"
          >
            The fun doesn’t end with just Laser Tag… enjoy arcade games &amp; much more! There is no need to make a reservation to just drop in and have some fun.
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            {[
              { label: "Multi Level Arena", sub: "Glow in the dark battles" },
              { label: "All Ages Welcome", sub: "Kids, teens, adults & groups" },
              { label: "Drop in Friendly", sub: "No reservation required" },
              { label: "20+ Years", sub: "Creating epic memories" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.04 * idx }}
                className="rounded-2xl border border-white/10 bg-space-900/68 py-4 neon-border-green transition-all hover:border-neon-green/60 hover:shadow-[0_0_18px_rgba(0,255,159,0.18)]"
              >
                <div className="font-semibold text-neon-green">{item.label}</div>
                <div className="text-xs text-white/50 mt-0.5">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <Testimonials />
      <FinalCTA />

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        {BUSINESS.address.street}, {BUSINESS.address.city} • Open daily • {BUSINESS.phone}
      </div>
    </div>
  );
}
