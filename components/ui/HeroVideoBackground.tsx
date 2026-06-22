"use client";

import { cn } from "@/lib/utils";

type HeroVideoBackgroundProps = {
  src: string;
  poster: string;
  className?: string;
};

export function HeroVideoBackground({ src, poster, className }: HeroVideoBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-black", className)}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        aria-hidden
      >
        <source src={src} type="video/mp4" />
      </video>

      <img
        src={poster}
        alt=""
        aria-hidden
        className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/48 to-black/88"
        aria-hidden
      />
    </div>
  );
}
