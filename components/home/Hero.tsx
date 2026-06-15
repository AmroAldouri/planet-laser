"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Image as ImageIcon, RefreshCw, Loader2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: (i % 3) + 1,
  delay: (i % 5) * 0.4,
}));

const laserBeams = [
  { rotate: -25, color: "from-neon-cyan/30 to-transparent", left: "10%" },
  { rotate: 15, color: "from-neon-magenta/25 to-transparent", left: "55%" },
  { rotate: -8, color: "from-neon-purple/20 to-transparent", left: "80%" },
];

// Demo prompt for the Grok Imagine example (cosmic laser tag arena concept)
const ARENA_GENERATION_PROMPT =
  "A cinematic wide shot of an epic multi level laser tag arena called Planet Laser. " +
  "Intense atmospheric fog, powerful neon cyan, magenta, purple and electric blue lighting throughout. " +
  "Players wearing illuminated vests and futuristic phasers battling on multiple glowing platforms. " +
  "Dramatic laser beams, high energy cosmic dark space theme, reflective floors, ultra detailed, vibrant, " +
  "immersive entertainment photography, 16:9 cinematic composition";

export function Hero() {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError] = useState<string | null>(null);
  const [lastPrompt, setLastPrompt] = useState<string | null>(null);

  async function handleGenerateCustomImage(regenerate = false) {
    setIsGenerating(true);
    setGenError(null);

    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: ARENA_GENERATION_PROMPT,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Generation failed");
      }

      setGeneratedImage(data.image);
      setLastPrompt(data.prompt);
    } catch (err: any) {
      setGenError(err.message || "Something went wrong while generating the image.");
      // keep previous image if regenerating failed
      if (!regenerate) {
        setGeneratedImage(null);
      }
    } finally {
      setIsGenerating(false);
    }
  }

  function handleRegenerate() {
    handleGenerateCustomImage(true);
  }

  function clearGenerated() {
    setGeneratedImage(null);
    setGenError(null);
    setLastPrompt(null);
  }

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20 sm:pt-32">
      <div className="absolute inset-0" aria-hidden>
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2 + (star.id % 3),
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}

        {laserBeams.map((beam, i) => (
          <motion.div
            key={i}
            className={`absolute top-0 h-[120%] w-1 bg-gradient-to-b ${beam.color} blur-sm`}
            style={{ left: beam.left, transformOrigin: "top center" }}
            animate={{ rotate: [beam.rotate, 3, beam.rotate + 3, beam.rotate, 3] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-950/20 to-space-950" />
        <div className="absolute bottom-0 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-neon-purple/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-sm text-neon-cyan"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Serving Oakville, Mississauga & Burlington
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block text-white">Enter the Arena.</span>
            <span className="mt-2 block bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent text-glow-cyan">
              Own the Galaxy.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl"
          >
            {BUSINESS.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href={BUSINESS.bookUrl} size="lg" className="w-full sm:w-auto">
              Book Your Mission
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Button>
            <Button
              href="/laser-tag"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Laser Tag
            </Button>
          </motion.div>

          {/* Grok Imagine example usage */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-6"
          >
            <button
              onClick={() => handleGenerateCustomImage(false)}
              disabled={isGenerating}
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-neon-cyan/50 hover:bg-neon-cyan/10 hover:text-neon-cyan disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Generating cosmic vision…
                </>
              ) : (
                <>
                  <ImageIcon className="h-4 w-4 transition-transform group-hover:scale-110" aria-hidden />
                  Generate Custom Arena Image
                </>
              )}
            </button>
            <p className="mt-1.5 text-[10px] text-white/40">Powered by Grok Imagine • Demo concept art</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 inline-flex items-center gap-2 text-sm text-white/50"
          >
            <MapPin className="h-4 w-4 text-neon-magenta" aria-hidden />
            {BUSINESS.address.street}, {BUSINESS.address.city}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 sm:gap-8"
        >
          {[
            { value: "20+", label: "Years of Fun" },
            { value: "Multi Level", label: "Laser Arena" },
            { value: "All Ages", label: "Family Friendly" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-space-900/78 px-4 py-5 text-center backdrop-blur-sm"
            >
              <p className="text-lg font-bold text-neon-cyan sm:text-xl">{stat.value}</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Grok Imagine Result Display (example usage in Hero) */}
        <AnimatePresence>
          {(generatedImage || genError) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto mt-10 max-w-3xl"
            >
              <div className="rounded-3xl border border-white/10 bg-space-900/86 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4 px-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-neon-cyan">
                    <Sparkles className="h-4 w-4" aria-hidden />
                    Grok Imagine Concept
                  </div>
                  <div className="flex items-center gap-2">
                    {generatedImage && (
                      <button
                        onClick={handleRegenerate}
                        disabled={isGenerating}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:border-neon-cyan/40 hover:text-neon-cyan disabled:opacity-50"
                      >
                        <RefreshCw className="h-3.5 w-3.5" aria-hidden />
                        Regenerate
                      </button>
                    )}
                    <button
                      onClick={clearGenerated}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:bg-white/10"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>

                {genError && (
                  <div className="rounded-2xl border border-red-500/30 bg-red-950/30 p-4 text-sm text-red-200">
                    {genError}
                  </div>
                )}

                {generatedImage && (
                  <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <img
                      src={generatedImage}
                      alt="AI generated custom multi level laser tag arena concept with neon lighting"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}

                {lastPrompt && (
                  <p className="mt-3 px-1 text-[10px] text-white/40 line-clamp-2">
                    Prompt: {lastPrompt}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
