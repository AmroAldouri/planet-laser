# Planet Laser

**Oakville's Ultimate Laser Tag & Arcade Experience**

Official website for Planet Laser — a multi-level laser tag arena, arcade, and party destination serving Oakville, Mississauga, Burlington, and the Greater Toronto Area.

![Planet Laser](public/logo.png)

## Features

- **Full-screen neon hero** with animated laser effects, floating particles, and strong cyberpunk green glows (#00FF9F)
- **Laser Tag** — Multi-level arena with competitive play maps for all ages
- **Birthday Parties** — Basic, Supreme, and Ultimate packages with clear Fri–Sun pricing first, tiered "Everything in X +" headers, and minimum 10 guests
- **Arcade** — Classic and modern redemption games
- **Corporate Events** — Team-building missions and private bookings
- Modern dark cyber-neon aesthetic with Framer Motion animations, pulsing logos, scanning lasers, and responsive design

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS + custom neon glow utilities
- Framer Motion (lightweight animations)
- Vercel Analytics
- Grok Imagine integration (via xAI) for dynamic image generation
- Server-side image generation with caching

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file (this is git-ignored):

```env
XAI_API_KEY=your_xai_api_key_here
```

## Project Structure Highlights

- `app/page.tsx` — Homepage with the new planet-laser-neon.jpg hero
- `app/birthday-parties/page.tsx` — Party packages with updated pricing display and tier labels
- `components/Hero.tsx` — Reusable hero (current homepage uses inline hero for full control)
- `lib/constants.ts` — Business info, hours (Mon–Thu 12:00–22:00, Fri/Sat until midnight, Sun 12:00–20:00), contact details
- `lib/grok-imagine.ts` — Grok Imagine helper (server-only)

## Recent Major Updates

- Switched hero background to `planet-laser-neon.jpg` (full viewport, strong dark gradient overlay)
- Official `logo.png` placed in Navbar and Footer
- Extensive neon green (#00FF9F) animations and hover effects
- Birthday party pricing now leads with weekend rates
- "MOST POPULAR" badge moved to Ultimate package
- "(Everything in Basic +)" / "(Everything in Supreme +)" tier headers above features
- Removed 2-for-1 guest passes from Basic
- All packages explicitly list "2 hours private party room"
- Contact page updated to "Call only" (no text/SMS references)
- Business hours corrected

## Deployment

This site is designed for easy deployment on Vercel.

```bash
npm run build
```

## Contact

- **Phone**: (905) 847-9336
- **Email**: information@planetlaser.ca
- **Address**: 461 North Service Rd W, Oakville, ON L6M 2V5
- **Website**: https://planetlaser.ca

## License

Private project for Planet Laser.

---

Built with ❤️ for epic glow-in-the-dark memories.
