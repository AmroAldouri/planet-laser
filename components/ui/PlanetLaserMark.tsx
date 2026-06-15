"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type PlanetLaserMarkProps = {
  className?: string;
  variant?: "hero" | "compact";
};

export function PlanetLaserMark({ className, variant = "hero" }: PlanetLaserMarkProps) {
  const uid = useId().replace(/:/g, "");
  const planetGrad = `plm-planet-${uid}`;
  const ringGrad = `plm-ring-${uid}`;
  const heroGlow = `plm-glow-${uid}`;

  if (variant === "compact") {
    return (
      <svg
        viewBox="0 0 148 40"
        className={cn("block", className)}
        role="img"
        aria-label="Planet Laser"
      >
        <defs>
          <radialGradient id={planetGrad} cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#fff4a8" />
            <stop offset="45%" stopColor="#ffb347" />
            <stop offset="100%" stopColor="#e85d04" />
          </radialGradient>
          <linearGradient id={ringGrad} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        <g transform="translate(4 6)">
          <circle cx="14" cy="14" r="10.5" fill={`url(#${planetGrad})`} />
          <ellipse
            cx="14"
            cy="14"
            rx="17"
            ry="4.2"
            fill="none"
            stroke={`url(#${ringGrad})`}
            strokeWidth="2.8"
            transform="rotate(-18 14 14)"
          />
        </g>

        <text
          x="40"
          y="15"
          fill="#f4f4f5"
          fontSize="11.5"
          fontWeight="800"
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
          letterSpacing="2.8"
        >
          PLANET
        </text>
        <text
          x="40"
          y="31"
          fill="#c084fc"
          fontSize="11.5"
          fontWeight="800"
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
          letterSpacing="2.8"
        >
          LASER
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 220 96"
      className={cn("hero-logo-pulse block", className)}
      role="img"
      aria-label="Planet Laser"
    >
      <defs>
        <radialGradient id={planetGrad} cx="38%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff6b0" />
          <stop offset="42%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#e85d04" />
        </radialGradient>
        <linearGradient id={ringGrad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e9d5ff" />
          <stop offset="45%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id={heroGlow} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#a855f7" floodOpacity="0.55" />
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#a855f7" floodOpacity="0.28" />
        </filter>
      </defs>

      <text
        x="110"
        y="22"
        textAnchor="middle"
        fill="#f8fafc"
        fontSize="19"
        fontWeight="800"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        letterSpacing="5.5"
        filter={`url(#${heroGlow})`}
      >
        PLANET
      </text>

      <g transform="translate(110 50)">
        <circle cx="0" cy="0" r="17" fill={`url(#${planetGrad})`} />
        <ellipse
          cx="0"
          cy="0"
          rx="28"
          ry="6.5"
          fill="none"
          stroke={`url(#${ringGrad})`}
          strokeWidth="4"
          transform="rotate(-18)"
        />
      </g>

      <text
        x="110"
        y="90"
        textAnchor="middle"
        fill="#c084fc"
        fontSize="19"
        fontWeight="800"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        letterSpacing="5.5"
        filter={`url(#${heroGlow})`}
      >
        LASER
      </text>
    </svg>
  );
}
