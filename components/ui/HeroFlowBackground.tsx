import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroFlowBackgroundProps = {
  src: string;
  alt: string;
  variant?: "home" | "subpage";
  priority?: boolean;
  className?: string;
};

export function HeroFlowBackground({
  src,
  alt,
  variant = "home",
  priority = true,
  className,
}: HeroFlowBackgroundProps) {
  return (
    <div className={cn("hero-flow-image", className)} data-variant={variant}>
      <div className="hero-flow-image__drift">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          quality={85}
          className="hero-flow-image__photo"
        />
      </div>

      <div className="hero-flow-image__energy" aria-hidden />
      <div className="hero-flow-image__scan" aria-hidden />
      <div className="hero-flow-image__shimmer" aria-hidden />
      <div className="hero-flow-image__ripple" aria-hidden />
      <div className="hero-flow-image__neon-pulse" aria-hidden />
      <div className="hero-flow-image__orb hero-flow-image__orb--1" aria-hidden />
      <div className="hero-flow-image__orb hero-flow-image__orb--2" aria-hidden />
      <div className="hero-flow-image__orb hero-flow-image__orb--3" aria-hidden />
      <div className="hero-flow-image__sheen" aria-hidden />
      <div className="hero-flow-image__sheen hero-flow-image__sheen--reverse" aria-hidden />

      <div className="hero-flow-image__overlay" aria-hidden />
      <div className="hero-flow-image__blend" aria-hidden />
    </div>
  );
}
