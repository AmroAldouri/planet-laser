"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Wow, I honestly can't say enough amazing things about my son's birthday party at Planet Laser in Oakville! You know those rare times when something actually turns out BETTER than you hoped? This was definitely one of them!",
    name: "Fit for Life Erin Mills",
  },
  {
    quote:
      "I've visited Planet Laser five times in the past two weeks with my son and his friends (ages 9 to 11), and each visit has been an absolute blast! The management and staff are incredibly welcoming, ensuring every kid has a great time and leaves with a smile.",
    name: "Nadeem",
  },
  {
    quote:
      "I had my daughter’s birthday party in Planet Laser. I can say it is the best birthday party experience. Every thing ran smoothly, the host and all staff were very very helpful and cooperative. Anything we need they provided to us immediately. I am so glad also that all my daughter’s friends enjoyed so much and were so happy. Thank you Planet Laser.",
    name: "Riham Abdelhalim",
  },
  {
    quote:
      "This place is very fun to come with any age group. I came multiple times with many different people and not one of them had a bad experience. All staff ensure you are having the best time and are very considerate to everyone. The vibes are great and I overall recommend to anyone who is looking for a laser tag place to go to with their friends or family as it is suitable for anyone and everyone.",
    name: "Jana T",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 bg-space-900/58 border-y border-white/10" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-neon-green">Real Families. Real Fun.</p>
          <h2 id="testimonials-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl heading-display">
            Loved by Oakville Families &amp; Groups
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-space-950/86 p-8"
            >
              <Quote className="h-8 w-8 text-neon-green/70" aria-hidden />
              <blockquote className="mt-6 flex-1 text-[15px] leading-relaxed text-white/80">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 border-t border-white/10 pt-4 text-sm font-medium text-neon-green text-glow-green-static">
                {t.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
