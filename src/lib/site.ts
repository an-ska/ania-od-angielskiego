/**
 * Central site config for SEO. When the public URL changes, update `url`
 * and redeploy. Contact entries with `ready: false` stay out of the page
 * and out of structured data.
 */
export const siteConfig = {
  name: "Ania od angielskiego",
  /** Canonical production URL (apex redirects to www on Vercel). */
  url: "https://www.ania-od-angielskiego.pl",
  title:
    "Ania od angielskiego | Korepetycje i lekcje angielskiego online",
  description:
    "Indywidualne lekcje angielskiego online: ósmoklasista, matura, angielski w IT i dla dorosłych. Magister filologii, 10+ lat doświadczenia. Umów lekcję.",
  locale: "pl_PL",
  /** Brand inbox — set after domain mail is live. Until then leave ready: false. */
  email: "kontakt@ania-od-angielskiego.pl",
  contact: {
    phone: {
      href: "tel:+48725272303",
      label: "+48 725 272 303",
      ready: true,
      /** Visible number waits for a click. JSON-LD still publishes it for Google. */
      reveal: true,
    },
    email: {
      href: "mailto:kontakt@ania-od-angielskiego.pl",
      label: "kontakt@ania-od-angielskiego.pl",
      ready: true,
    },
    google: {
      href: "https://maps.google.com/?cid=13153615850452342287",
      label: "Profil w Google",
      ready: true,
    },
    facebook: {
      href: "https://www.facebook.com/",
      label: "@aniaodangielskiego",
      ready: false,
    },
    ekorepetycje: {
      href: "https://www.e-korepetycje.net/mpania/jezyk-angielski",
      label: "Profil na e-korepetycje.net",
      ready: true,
    },
  },
} as const;

export type SiteContactKey = keyof typeof siteConfig.contact;
