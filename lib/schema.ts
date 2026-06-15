import { BUSINESS, SITE_URL } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: `${SITE_URL}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.province,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: BUSINESS.hours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.day,
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: [
      "https://www.facebook.com/planetlaser",
      "https://www.instagram.com/planetlaser",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planet Laser Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laser Tag",
            description: "Multi level laser tag arena for all ages.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Birthday Parties",
            description: "Birthday party packages with laser tag and arcade.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Arcade Games",
            description: "Arcade and redemption games for the whole family.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Events",
            description: "Team building and private group bookings.",
          },
        },
      ],
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/contact#book`,
      },
      name: "Book Now",
    },
  };
}
