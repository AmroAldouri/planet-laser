'use client';

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { HomeHero } from "@/components/home/HomeHero";
import { BUSINESS } from "@/lib/constants";

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

      <ServiceCards />

      <section className="relative py-16 sm:py-20 border-y border-white/10 bg-black/55 content-auto" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[3.5px] text-neon-green">Electric Nights</p>
            <h2 id="gallery-heading" className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight heading-display">Captured in the Arena</h2>
            <p className="mt-3 max-w-md text-white/60">Real moments. Green beams. Pure adrenaline.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: "/gallery-laser-action-1.svg", alt: "Intense laser tag battle with bright green neon beams cutting through fog in the multi level arena" },
              { src: "/gallery-party-1.svg", alt: "Kids celebrating a birthday party with neon green lights and cake at Planet Laser" },
              { src: "/gallery-arcade-1.svg", alt: "Futuristic arcade redemption games glowing with cyber green neon marquees and tickets" },
            ].map((img, i) => (
              <motion.a
                key={i}
                href={img.src}
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.015 }}
                className="neon-frame group relative block overflow-hidden rounded-3xl bg-space-900/78 aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs tracking-widest text-neon-green/90 font-medium">VIEW FULL</div>
              </motion.a>
            ))}
          </div>
          <p className="text-center mt-4 text-[10px] text-white/40 tracking-widest">Hover to zoom • Click for larger view • Swap SVGs for Grok Imagine shots (see suggested public/ names below)</p>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 border-t border-white/10 content-auto" aria-labelledby="about-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[4px] text-neon-green">Est. 2005 • Oakville</p>
            <h2 id="about-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl heading-display">
              The GTA’s Favorite Place for Laser Tag &amp; Family Fun
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-8 mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/70"
          >
            Planet Laser is Oakville, Mississauga and Burlington’s ultimate spot for family fun and entertainment, featuring a unique multi level laser tag arena and competitive play map. Planet Laser is “THE PLACE” to engage interactively with your friends and family.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
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
                transition={{ duration: 0.45, delay: 0.06 * idx }}
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
