import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const sameAs: string[] = [];
  if (siteConfig.contact.google.ready) {
    sameAs.push(siteConfig.contact.google.href);
  }
  if (siteConfig.contact.facebook.ready) {
    sameAs.push(siteConfig.contact.facebook.href);
  }
  if (siteConfig.contact.ekorepetycje.ready) {
    sameAs.push(siteConfig.contact.ekorepetycje.href);
  }

  const email = siteConfig.contact.email.ready ? siteConfig.email : undefined;
  const telephone = siteConfig.contact.phone.ready
    ? siteConfig.contact.phone.href.replace(/^tel:/, "")
    : undefined;
  const contactPoint =
    email || telephone
      ? {
          "@type": "ContactPoint",
          contactType: "customer support",
          ...(email ? { email } : {}),
          ...(telephone ? { telephone } : {}),
          availableLanguage: ["Polish", "English"],
          areaServed: "PL",
          url: `${siteConfig.url}/#kontakt`,
        }
      : undefined;

  const person = {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: "Ania",
    url: siteConfig.url,
    ...(email ? { email } : {}),
    ...(telephone ? { telephone } : {}),
    ...(contactPoint ? { contactPoint } : {}),
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
    ...(email ? { email } : {}),
    ...(telephone ? { telephone } : {}),
    ...(contactPoint ? { contactPoint } : {}),
    ...(siteConfig.contact.google.ready
      ? { hasMap: siteConfig.contact.google.href }
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

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "pl-PL",
    publisher: { "@id": `${siteConfig.url}/#person` },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "pl-PL",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: { "@id": `${siteConfig.url}/#service` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [website, webpage, person, service],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
