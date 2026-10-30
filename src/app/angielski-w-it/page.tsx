import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const path = siteConfig.paths.angielskiWIt;
const pageUrl = `${siteConfig.url}${path}`;

const title = "Angielski w IT online";
const description =
  "Angielski w IT online: rozmowy rekrutacyjne, spotkania z zespołem i swobodniejsza komunikacja w projektach. 180 zł / 60 min. Umów lekcję z Anią.";

const cream = "#fcf9f2";
const lavender = "#dcd0e5";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: pageUrl,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

const focusItems = [
  {
    title: "Rozmowa rekrutacyjna",
    text: "Ćwiczymy opowiadanie o doświadczeniu, pytania o projekty i naturalne odpowiedzi pod presją czasu. Chodzi o to, żebyś mówił swobodniej, a nie wykuwał sztywne skrypty.",
  },
  {
    title: "Spotkania i codzienny projekt",
    text: "Standupy, planningi, demo, review, spotkania typu hands up, rozmowy z klientem albo zespołem za granicą. Trenujemy zwroty, które realnie padają na callach, wyrażanie swoich myśli i to, jak dopytać, gdy czegoś nie dosłyszysz.",
  },
  {
    title: "Odświeżenie po „polskim IT”",
    text: "Jeśli długo pracowałeś głównie po polsku, angielski mógł zardzewieć mimo solidnych podstaw. Wracamy do mówienia małymi, regularnymi krokami, bez szkolnej atmosfery.",
  },
  {
    title: "Feedback pod Twój kontekst",
    text: "Jestem też programistką frontend, więc łatwiej złapać, o czym mówisz w pracy. Na lekcji skupiamy się na angielskim, a nie na tłumaczeniu technologii.",
  },
] as const;

const faqItems = [
  {
    q: "Dla kogo jest angielski w IT?",
    a: "Dla specjalistów IT, którzy chcą pewniej mówić na rekrutacji albo w międzynarodowym zespole. Pasuje też, gdy „dasz radę napisać maila”, ale na spotkaniu brakuje płynności.",
  },
  {
    q: "Czy muszę znać angielski techniczny na wysokim poziomie?",
    a: "Nie. Ważniejsze jest swobodne tłumaczenie myśli i udział w rozmowie. Słownictwo techniczne dokładamy pod Twoje projekty, nie uczymy słownika na pamięć.",
  },
  {
    q: "Ile kosztuje lekcja?",
    a: "Angielski w IT to 180 zł za 60 minut online. Jeśli potrzebujesz raczej ogólnego angielskiego albo matury, na stronie głównej są też inne stawki.",
  },
] as const;

function SectionWave({
  color,
  position,
}: {
  color: string;
  position: "top" | "bottom";
}) {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={
        position === "top"
          ? "pointer-events-none absolute -top-10 left-0 z-[1] h-12 w-full sm:-top-12 sm:h-14"
          : "pointer-events-none absolute -bottom-10 left-0 z-[1] h-12 w-full rotate-180 sm:-bottom-12 sm:h-14"
      }
      style={{ color }}
      aria-hidden
    >
      <path
        d="M0 48 V22 C180 6 320 40 520 28 C760 12 920 4 1120 22 C1280 34 1380 18 1440 12 V48 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ItJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: "pl-PL",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#person` },
        mainEntity: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: title,
        url: pageUrl,
        description,
        serviceType: "Angielski w IT, korepetycje online",
        provider: { "@id": `${siteConfig.url}/#person` },
        areaServed: { "@type": "Country", name: "Poland" },
        availableLanguage: ["Polish", "English"],
        offers: {
          "@type": "Offer",
          price: "180",
          priceCurrency: "PLN",
          description: "60 minut zajęć online pod komunikację w IT",
          url: pageUrl,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function AngielskiWItPage() {
  return (
    <div className="flex flex-1 flex-col">
      <ItJsonLd />
      <SiteHeader />
      <main>
        <section
          className="relative overflow-hidden pt-[5.5rem] text-[#2b3a32] sm:pt-32 lg:pt-36"
          style={{
            backgroundColor: lavender,
            backgroundImage:
              "radial-gradient(#cbb9d8 0.75px, transparent 0.75px)",
            backgroundSize: "15px 15px",
          }}
        >
          <div className="relative mx-auto max-w-[760px] px-5 pb-14 pt-2 text-center sm:px-6 sm:pb-20 md:pt-4">
            <p className="mb-3 text-sm font-medium text-[#5c4a6e]">
              <Link
                href={siteConfig.paths.home}
                className="text-[#3b5249] no-underline hover:text-[#e07a5f]"
              >
                Strona główna
              </Link>
              <span aria-hidden className="mx-2 text-[#3b5249]/40">
                /
              </span>
              Angielski w IT
            </p>
            <span className="mb-4 inline-block rounded-[20px] bg-[#f4efe6] px-3.5 py-1.5 text-sm font-medium text-[#3b5249] shadow-[0_2px_5px_rgba(0,0,0,0.05)]">
              Korepetycje online, 180 zł / 60 min
            </span>
            <h1 className="mb-4 font-display text-[clamp(2rem,6vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-[#263830]">
              Angielski w IT online
            </h1>
            <p className="mx-auto mb-8 max-w-[40rem] text-[1.05rem] leading-[1.65] text-[#4a5c53] md:text-[1.15rem]">
              Korepetycje dla osób z IT, które chcą pewniej mówić na rekrutacji i
              na spotkaniach: mniej kalkowania, więcej swobody w prawdziwych
              sytuacjach z pracy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`${siteConfig.paths.home}#kontakt`}
                className="inline-flex items-center justify-center rounded-[30px] bg-[#3b5249] px-7 py-3.5 text-base font-medium text-white shadow-[0_4px_10px_rgba(59,82,73,0.2)] transition-colors hover:bg-[#2b3a32]"
              >
                Umów lekcję
              </a>
              <a
                href="#jak-pracujemy"
                className="inline-flex items-center justify-center rounded-[30px] border border-[#3b5249] px-7 py-3.5 text-base font-medium text-[#3b5249] transition-colors hover:bg-[rgba(59,82,73,0.05)]"
              >
                Jak wygląda praca
              </a>
            </div>
          </div>
        </section>

        <section className="relative overflow-visible bg-[#fcf9f2] px-5 py-16 text-[#2b3a32] sm:px-6 sm:py-[90px]">
          <SectionWave color={cream} position="top" />
          <div className="relative mx-auto max-w-[720px] text-center">
            <h2 className="mb-5 font-display text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold tracking-tight text-[#1a2621]">
              Dla kogo są te korepetycje
            </h2>
            <div className="space-y-4 text-base leading-[1.75] text-[#4a5c53] sm:text-[17px]">
              <p>
                Dla programistów, testerów, PM-ów, analityków i innych osób z IT,
                które potrzebują angielskiego do pracy, a nie kolejnego kursu
                „ogólnego A2–B1”.
              </p>
              <p>
                Częsty start: solidne podstawy albo angielski „z filmu”, ale na
                callu brakuje płynności. Albo zbliża się rozmowa rekrutacyjna i
                chcesz przećwiczyć konkretne sytuacje, zanim wejdziesz na spotkanie.
              </p>
              <p>
                Zajęcia są online. Prowadzę je jako magister filologii angielskiej
                i programistka frontend, więc łączę język z realiami pracy w IT.
              </p>
            </div>
          </div>
        </section>

        <section
          id="jak-pracujemy"
          className="relative scroll-mt-24 overflow-visible px-5 py-16 text-[#2b3a32] sm:px-6 sm:py-[90px]"
          style={{
            backgroundColor: lavender,
            backgroundImage:
              "radial-gradient(#cbb9d8 0.75px, transparent 0.75px)",
            backgroundSize: "15px 15px",
          }}
        >
          <SectionWave color={lavender} position="top" />
          <div className="relative mx-auto max-w-[960px]">
            <div className="mb-10 text-center sm:mb-12">
              <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[2px] text-[#5c4a6e]">
                Proces
              </span>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold tracking-tight text-[#1a2621]">
                Nad czym pracujemy na angielskim w IT
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {focusItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[20px] border border-black/[0.03] bg-[#fcf9f2] px-6 py-7 shadow-[0_10px_30px_rgba(43,58,50,0.05)]"
                >
                  <h3 className="mb-3 font-display text-xl font-bold text-[#1a2621]">
                    {item.title}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.65] text-[#4a5c53]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <SectionWave color={lavender} position="bottom" />
        </section>

        <section className="relative overflow-visible bg-[#fcf9f2] px-5 py-16 text-[#2b3a32] sm:px-6 sm:py-[90px]">
          <div className="relative mx-auto max-w-[720px] text-center">
            <h2 className="mb-5 font-display text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold tracking-tight text-[#1a2621]">
              Cena i formalności
            </h2>
            <div className="space-y-4 text-base leading-[1.75] text-[#4a5c53] sm:text-[17px]">
              <p>
                <strong className="font-semibold text-[#1a2621]">
                  180 zł / 60 minut
                </strong>
                : lekcje online pod angielski w IT. Umawiamy rytm pod Ciebie, bez
                sztywnych pakietów „na siłę”.
              </p>
              <p>
                Dla firm potrzebujących szybkiego sprawdzenia angielskiego
                kandydata jest też wstępna weryfikacja językowa. Szczegóły i
                pozostałe formy są na{" "}
                <a
                  href={`${siteConfig.paths.home}#cennik`}
                  className="font-semibold text-[#3b5249] underline decoration-[#3b5249]/25 underline-offset-2 hover:text-[#e07a5f]"
                >
                  cenniku na stronie głównej
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative overflow-visible px-5 py-16 text-[#2b3a32] sm:px-6 sm:py-[90px]"
          style={{
            backgroundColor: lavender,
            backgroundImage:
              "radial-gradient(#cbb9d8 0.75px, transparent 0.75px)",
            backgroundSize: "15px 15px",
          }}
        >
          <SectionWave color={lavender} position="top" />
          <div className="relative mx-auto max-w-[720px]">
            <h2 className="mb-8 text-center font-display text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold tracking-tight text-[#1a2621]">
              Pytania o angielski w IT
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[20px] border border-white/60 bg-[#fcf9f2] px-6 py-5 shadow-[0_8px_20px_rgba(43,58,50,0.06)]"
                >
                  <h3 className="mb-2 font-display text-lg font-bold text-[#1a2621]">
                    {item.q}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.65] text-[#4a5c53]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <SectionWave color={lavender} position="bottom" />
        </section>

        <section className="relative overflow-visible bg-[#fcf9f2] px-5 py-16 text-center text-[#2b3a32] sm:px-6 sm:py-[90px]">
          <div className="relative mx-auto max-w-[560px]">
            <h2 className="mb-4 font-display text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold tracking-tight text-[#1a2621]">
              Porozmawiajmy o Twoim angielskim w IT
            </h2>
            <p className="mb-8 text-base leading-relaxed text-[#4a5c53] sm:text-[17px]">
              Napisz, czy celujesz w rekrutację, spotkania z zespołem, czy po
              prostu chcesz odświeżyć mówienie. Dopasujemy pierwsze spotkanie.
            </p>
            <a
              href={`${siteConfig.paths.home}#kontakt`}
              className="inline-flex items-center justify-center rounded-[30px] bg-[#3b5249] px-8 py-4 text-base font-medium text-white shadow-[0_4px_10px_rgba(59,82,73,0.2)] transition-colors hover:bg-[#2b3a32]"
            >
              Przejdź do kontaktu
            </a>
            <p className="mt-8 text-sm text-[#6a8275]">
              <Link
                href={siteConfig.paths.home}
                className="font-semibold text-[#3b5249] no-underline hover:text-[#e07a5f]"
              >
                Zobacz całą ofertę na stronie głównej
              </Link>
            </p>
          </div>
        </section>
      </main>

      <footer className="relative overflow-visible bg-[#dcd0e5] px-5 pb-8 pt-16 text-center text-sm text-[#6a8275] sm:pt-20">
        <SectionWave color={lavender} position="top" />
        <p className="relative m-0">© 2026 {siteConfig.name}</p>
        <Link
          href={siteConfig.paths.home}
          className="relative mt-2 inline-block font-medium text-[#3b5249] no-underline hover:text-[#e07a5f]"
        >
          Strona główna
        </Link>
      </footer>
    </div>
  );
}
