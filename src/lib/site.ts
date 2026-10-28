/**
 * Central site config for SEO. When the .pl domain is ready, change only `url`
 * (and redeploy). Contact placeholders stay until real NAP/social links arrive.
 */
export const siteConfig = {
  name: "Ania od angielskiego",
  /** Live URL until custom domain is connected. */
  url: "https://ania-od-angielskiego.vercel.app",
  title:
    "Ania od angielskiego | Korepetycje i lekcje angielskiego online",
  description:
    "Indywidualne lekcje angielskiego online: ósmoklasista, matura, angielski w IT i dla dorosłych. Magister filologii, 10+ lat doświadczenia. Umów lekcję.",
  locale: "pl_PL",
  /** Brand inbox — set after domain mail is live. Until then leave ready: false. */
  email: "kontakt@aniaodangielskiego.pl",
  reviewCount: 13,
  ratingValue: 5,
  contact: {
    phone: {
      href: "tel:+48XXXXXXXXX",
      label: "+48 XXX XXX XXX",
      /** Set true once a real number is filled in. */
      ready: false,
    },
    email: {
      href: "mailto:kontakt@aniaodangielskiego.pl",
      label: "kontakt@aniaodangielskiego.pl",
      ready: false,
    },
    maps: {
      href: "https://maps.google.com",
      label: "Ania od angielskiego na Mapach",
      ready: false,
    },
    facebook: {
      href: "https://www.facebook.com/",
      label: "@aniaodangielskiego",
      ready: false,
    },
    ekorepetycje: {
      href: "https://www.e-korepetycje.net/",
      label: "Profil na e-korepetycje.net",
      ready: false,
    },
  },
} as const;

export type SiteContactKey = keyof typeof siteConfig.contact;
