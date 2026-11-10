import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const path = siteConfig.paths.egzaminOsmoklasisty;
const pageUrl = `${siteConfig.url}${path}`;

const title = "Angielski na egzamin ósmoklasisty online";
const description =
  "Angielski na egzamin ósmoklasisty online dla 7. i 8. klasy. Arkusze CKE, typowe zadania i spokojne przygotowanie. Od 80 zł / osoba. Umów lekcję z Anią.";

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
    title: "Format CKE, nie „zwykła kartkówka”",
    text: "Przyzwyczajamy się do arkusza ósmoklasisty: czytanie, słuchanie, środki językowe i funkcje komunikacyjne. Uczymy się, jak czytać polecenia i nie tracić punktów na prostych błędach formalnych.",
  },
  {
    title: "Plan pod 7. albo 8. klasę",
    text: "Inaczej wygląda start w siódmej, a inaczej ostatni rok przed egzaminem. Ustalamy, ile czasu zostało, i układamy powtórkę tak, żeby uczeń nie uczył się wszystkiego naraz w ostatniej chwili.",
  },
  {
    title: "Czas, pewność, mniej stresu",
    text: "Ćwiczymy tempo pracy na arkuszu i to, od czego zacząć, gdy zadanie sprawia trudność. Dzięki temu w dniu egzaminu uczeń wie, jak przejść przez test spokojniej.",
  },
  {
    title: "Kontakt z uczniem i rodzicami",
    text: "Po lekcji wiadomo, nad czym pracowaliśmy i co warto powtórzyć w domu. Rodzice też dostają krótką, konkretną informację, jak idzie przygotowanie.",
  },
] as const;

const faqItems = [
  {
    q: "Czy warto zaczynać już w 7. klasie?",
    a: "Tak, wtedy jest więcej czasu na spokojną powtórkę i oswajanie arkusza. W ósmej też da się dobrze przygotować, tylko zwykle trzeba iść szybszym tempem. Na pierwszej lekcji ustalamy realistyczny plan pod Wasz termin.",
  },
  {
    q: "Czy lekcje są tylko 1:1?",
    a: "Nie. Można indywidualnie (120 zł / 60 min) albo w parze (80 zł / osoba), np. rodzeństwo lub znajomi na podobnym poziomie. Spotykamy się online przez wideo.",
  },
  {
    q: "Czy pracujecie na prawdziwych arkuszach?",
    a: "Tak. Korzystamy z zadań w formacie egzaminu ósmoklasisty i materiałów zbliżonych do CKE, żeby uczeń wiedział, czego się spodziewać, zanim usiądzie na prawdziwym teście.",
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

function OsmoklasistaJsonLd() {
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
        serviceType: "Korepetycje z angielskiego na egzamin ósmoklasisty",
        provider: { "@id": `${siteConfig.url}/#person` },
        areaServed: { "@type": "Country", name: "Poland" },
        availableLanguage: ["Polish", "English"],
        offers: {
          "@type": "Offer",
          price: "120",
          priceCurrency: "PLN",
          description: "60 minut indywidualnych zajęć online",
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

export default function EgzaminOsmoklasistyPage() {
  return (
    <div className="flex flex-1 flex-col">
      <OsmoklasistaJsonLd />
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
              Egzamin ósmoklasisty
            </p>
            <span className="mb-4 inline-block rounded-[20px] bg-[#f4efe6] px-3.5 py-1.5 text-sm font-medium text-[#3b5249] shadow-[0_2px_5px_rgba(0,0,0,0.05)]">
              Online · 120 zł / 60 min indywidualnie · 80 zł / osoba w parze
            </span>
            <h1 className="mb-4 font-display text-[clamp(2rem,6vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-[#263830]">
              Angielski na egzamin ósmoklasisty online
            </h1>
            <p className="mx-auto mb-8 max-w-[40rem] text-[1.05rem] leading-[1.65] text-[#4a5c53] md:text-[1.15rem]">
              Korepetycje pod egzamin ósmoklasisty z angielskiego: powtarzamy
              to, co było w szkole, ćwiczymy arkusze i uczymy się pisać test
              bez pośpiechu i chaosu.
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
                Jak wygląda przygotowanie
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
                Dla{" "}
                <strong className="font-semibold text-[#1a2621]">
                  siódmo- i ósmoklasistów
                </strong>
                , którzy przygotowują się do egzaminu ósmoklasisty z angielskiego:
                chcą powtórzyć materiał pod arkusz, ćwiczyć typowe zadania i
                wejść na egzamin ze spokojem.
              </p>
              <p>
                Korepetycje sprawdzą się też, gdy uczeń radzi sobie na lekcjach, ale
                przy oficjalnym teście gubi się w czasie, poleceniach albo
                typach zadań. Pracujemy konkretnie pod format ósmoklasisty, nie
                pod ogólny angielski „na zapas”.
              </p>
              <p>
                Lekcje są w całości online: indywidualnie albo w parze. Jestem
                magistrem filologii angielskiej, mam doświadczenie ze szkołą
                językową i ponad 10 lat nauczania, także z młodszymi uczniami.
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
                Jak przygotowujemy się do ósmoklasisty
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
                  120 zł / 60 minut
                </strong>
                : lekcje indywidualne online. W parze:{" "}
                <strong className="font-semibold text-[#1a2621]">
                  80 zł / osoba
                </strong>
                , jeśli obie osoby mają podobny poziom.
              </p>
              <p>
                Umawiamy częstotliwość lekcji pod klasę i termin egzaminu: w
                siódmej zwykle spokojniej, w ósmej bliżej egzaminu można
                spotykać się częściej. Szczegóły innych form są też w{" "}
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
              Pytania o egzamin ósmoklasisty
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
              Porozmawiajmy o ósmoklaście
            </h2>
            <p className="mb-8 text-base leading-relaxed text-[#4a5c53] sm:text-[17px]">
              Napisz, czy uczeń jest w 7., czy w 8. klasie i kiedy egzamin.
              Dopasujemy pierwsze spotkanie pod Wasz etap.
            </p>
            <a
              href={`${siteConfig.paths.home}#kontakt`}
              className="inline-flex items-center justify-center rounded-[30px] bg-[#3b5249] px-8 py-4 text-base font-medium text-white shadow-[0_4px_10px_rgba(59,82,73,0.2)] transition-colors hover:bg-[#2b3a32]"
            >
              Przejdź do kontaktu
            </a>
            <p className="mt-8 text-sm text-[#4a5c53]">
              <Link
                href={siteConfig.paths.home}
                className="font-semibold text-[#3b5249] no-underline hover:text-[#e07a5f]"
              >
                Zobacz całą ofertę na stronie głównej
              </Link>
              {" · "}
              <Link
                href={siteConfig.paths.maturaPodstawowa}
                className="font-semibold text-[#3b5249] no-underline hover:text-[#e07a5f]"
              >
                Matura podstawowa
              </Link>
            </p>
          </div>
        </section>
      </main>

      <footer className="relative overflow-visible bg-[#dcd0e5] px-5 pb-8 pt-16 text-center text-sm text-[#4a5c53] sm:pt-20">
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
