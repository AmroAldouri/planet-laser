export const SITE_URL = "https://planetlaser.ca";

export const BUSINESS = {
  name: "Planet Laser",
  tagline: "Oakville's Ultimate Laser Tag & Arcade Experience",
  description:
    "Multi level laser tag arena, arcade games, birthday parties & corporate events in Oakville, serving families and groups across Mississauga & Burlington.",
  phone: "(905) 847 9336",
  phoneHref: "tel:+19058479336",
  email: "information@planetlaser.ca",
  address: {
    street: "461 North Service Rd W",
    city: "Oakville",
    province: "ON",
    postalCode: "L6M 2V5",
    country: "CA",
  },
  geo: {
    latitude: 43.440937,
    longitude: -79.70781,
  },
  hours: [
    { day: "Monday", opens: "12:00", closes: "22:00" },
    { day: "Tuesday", opens: "12:00", closes: "22:00" },
    { day: "Wednesday", opens: "12:00", closes: "22:00" },
    { day: "Thursday", opens: "12:00", closes: "22:00" },
    { day: "Friday", opens: "12:00", closes: "00:00" },
    { day: "Saturday", opens: "12:00", closes: "00:00" },
    { day: "Sunday", opens: "12:00", closes: "20:00" },
  ],
  serviceAreas: ["Oakville", "Mississauga", "Burlington"],
  bookUrl: "/contact#book",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Laser Tag", href: "/laser-tag" },
  { label: "Birthday Parties", href: "/birthday-parties" },
  { label: "Arcade", href: "/arcade" },
  { label: "Corporate Events", href: "/corporate-events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Laser Tag",
    description:
      "Battle across our multi level arena with competitive play maps built for all ages.",
    href: "/laser-tag",
    icon: "crosshair" as const,
    accent: "cyan" as const,
  },
  {
    title: "Birthday Parties",
    description:
      "Epic party packages with laser tag, arcade time, and hassle free hosting for Oakville families.",
    href: "/birthday-parties",
    icon: "cake" as const,
    accent: "magenta" as const,
  },
  {
    title: "Arcade",
    description:
      "Classic and modern redemption games. Keep the fun going before and after your mission.",
    href: "/arcade",
    icon: "gamepad2" as const,
    accent: "purple" as const,
  },
  {
    title: "Corporate Events",
    description:
      "Team building missions and private bookings for groups from Mississauga, Burlington & beyond.",
    href: "/corporate-events",
    icon: "briefcase" as const,
    accent: "blue" as const,
  },
] as const;
