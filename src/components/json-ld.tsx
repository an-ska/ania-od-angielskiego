import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const sameAs: string[] = [];
  if (siteConfig.contact.facebook.ready) {
    sameAs.push(siteConfig.contact.facebook.href);
  }
  if (siteConfig.contact.ekorepetycje.ready) {
    sameAs.push(siteConfig.contact.ekorepetycje.href);
  }
  if (siteConfig.contact.maps.ready) {
    sameAs.push(siteConfig.contact.maps.href);
  }

  const person = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: "Ania",
    url: siteConfig.url,
    ...(siteConfig.contact.email.ready ? { email: siteConfig.email } : {}),
    jobTitle: "Nauczycielka języka angielskiego",
    description:
      "Magister filologii angielskiej ze specjalnością nauczycielską. Ponad 10 lat doświadczenia w nauczaniu. Lekcje angielskiego online dla uczniów i dorosłych.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Uniwersytet Opolski",
    },
    knowsAbout: [
      "język angielski",
      "korepetycje online",
      "egzamin ósmoklasisty",
      "matura podstawowa z angielskiego",
      "angielski w IT",
      "angielski dla dorosłych",
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const service = {
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${siteConfig.url}/ania-hero-circle.png`,
    ...(siteConfig.contact.email.ready ? { email: siteConfig.email } : {}),
    ...(siteConfig.contact.phone.ready
      ? { telephone: siteConfig.contact.phone.label }
      : {}),
    areaServed: {
      "@type": "Country",
      name: "Poland",
    },
    availableLanguage: ["Polish", "English"],
    provider: { "@id": `${siteConfig.url}/#person` },
    priceRange: "80-180 PLN",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.ratingValue,
      reviewCount: siteConfig.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lekcje angielskiego online",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lekcje angielskiego 1:1 online",
          },
          price: "120",
          priceCurrency: "PLN",
          description: "60 minut indywidualnych zajęć online",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Angielski w IT — lekcje 1:1 online",
          },
          price: "180",
          priceCurrency: "PLN",
          description: "60 minut zajęć online pod komunikację w IT",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lekcje angielskiego w parze online",
          },
          price: "80",
          priceCurrency: "PLN",
          description: "60 minut / osoba — zajęcia w parze online",
        },
      ],
    },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, service],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
