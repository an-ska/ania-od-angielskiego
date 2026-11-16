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
    title: "Rozmowa rekrutacyjna i mock interview",
    text: "Przeprowadzimy symulacje prawdziwych rozmów. Przejdziemy przez standardowe pytania rekrutacyjne takie jak m.in. opowiadanie o doświadczeniu, mocnych i słabych stronach, wyzwaniach i oczekiwaniach. Podczas zajęć odświeżysz język i nauczysz się mówić o swoich kompetencjach swobodnie i pewnie.",
  },
  {
    title: "Spotkania i dyskusje w projekcie",
    text: "Codzienne statusy, planowanie sprintów, podsumowania, demo czy rozmowy z klientem. Bierzemy na warsztat sytuacje z Twojego projektu: ćwiczymy przydatne na spotkaniach zwroty, zręczny small talk, precyzyjne przekazywanie pomysłów, skuteczną argumentację i swobodną wymianę zdań.",
  },
  {
    title: "Odświeżenie po polskim IT",
    text: "Wyciągamy Twój angielski z wieloletniej bańki polskojęzycznych zespołów. Stawiamy na praktykę – od pierwszej lekcji rozwijamy swobodę wypowiadania się, odświeżamy zapomniane słownictwo i uczymy, jak radzić sobie w różnych sytuacjach zawodowych w IT. Krok po kroku odzyskujesz płynność, pewność siebie i przełamujesz barierę językową.",
  },
  {
    title: "Pełna elastyczność i Twój rytm",
    text: "Nie pracujemy według sztywnego programu z podręcznika. Dopasowuję tempo i tematykę zajęć do tego, co w danym momencie jest dla Ciebie priorytetem w pracy.",
  },
] as const;

const audienceScenarios = [
  {
    title: "Spotkania i bieżąca praca",
    text: "Przez długi czas nie używałeś angielskiego w praktyce, a teraz czeka Cię przejście do międzynarodowego projektu? Na co dzień radzisz sobie z dokumentacją techniczną i rozmowami na firmowym czacie, ale kiedy wchodzą spotkania na żywo, pojawia się stres, blokada i ciągłe szukanie odpowiednich słów? Ciężko Ci przeprowadzić small talk, wyrazić swoje myśli czy przedstawić i obronić argumenty? Te lekcje są dla Ciebie!",
  },
  {
    title: "Rekrutacja i zmiana pracy",
    text: "Przez lata pracowałeś w polskojęzycznych zespołach, a teraz czeka Cię rekrutacja po angielsku? Wiesz, że masz odpowiednie doświadczenie i kompetencje, ale zastanawiasz się, jak opowiedzieć o nich w obcym języku? Trudność sprawia Ci przedstawienie swoich projektów i opisanie codziennych obowiązków? A może obawiasz się niespodziewanych pytań i tego, że stres odbierze Ci płynność wypowiedzi? Te lekcje są dla Ciebie!",
  },
] as const;

const faqItems = [
  {
    q: "Czy uczysz tylko programistów?",
    a: "Nie tylko! Zajęcia są skierowane do osób pracujących w różnych obszarach IT – programistów, testerów, analityków, UX designerów, project managerów, project ownerów i innych specjalistów, którzy wykorzystują angielski w pracy.",
  },
  {
    q: "Czy muszę znać specjalistyczne słownictwo techniczne?",
    a: "Nie musisz znać go na pamięć. Skupiamy się przede wszystkim na komunikacji, a słownictwo techniczne poznajemy i utrwalamy w kontekście Twojej pracy, projektów i obowiązków.",
  },
  {
    q: "Jak wyglądają zajęcia i czy dostanę materiały?",
    a: "Zajęcia mają przede wszystkim praktyczny charakter. Korzystamy z autentycznych sytuacji z branży IT, artykułów, materiałów i ćwiczeń dopasowanych do Twoich potrzeb. Nie realizujemy sztywnego programu z podręcznika - to, nad czym pracujemy, zależy od Twoich celów.",
  },
  {
    q: "Czy muszę przygotowywać się do zajęć lub odrabiać prace domowe?",
    a: "Nie zakładam obowiązkowych prac domowych. Jeśli chcesz dodatkowo pracować między lekcjami, mogę zaproponować Ci krótkie ćwiczenia, materiały do powtórki lub zadania związane z tematami, które omawiamy na zajęciach.",
  },
  {
    q: "Czy zajęcia odbywają się online?",
    a: "Tak! Wszystkie zajęcia prowadzę online, dzięki czemu możesz uczyć się z dowolnego miejsca i bez tracenia czasu na dojazdy. Jeśli mieszkasz w okolicach Rybnika, możemy jednak indywidualnie ustalić możliwość spotkań stacjonarnych.",
  },
  {
    q: "Czy pierwsza lekcja jest bezpłatna?",
    a: "Nie, pierwsze spotkanie jest płatne. Od początku pracujemy nad Twoimi celami językowymi – poznajemy się, określamy potrzeby i ustalamy plan działania.",
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
        <section className="relative overflow-hidden bg-[#fcf9f2] pt-[5.5rem] text-[#2b3a32] sm:pt-32 lg:pt-36">
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
              Lekcje online, 180 zł / 60 min
            </span>
            <h1 className="mb-4 font-display text-[clamp(2rem,6vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-[#263830]">
              Angielski w IT online
            </h1>
            <p className="mx-auto mb-8 max-w-[40rem] text-[1.05rem] leading-[1.65] text-[#4a5c53] md:text-[1.15rem]">
              Dla programistów, testerów, PM-ów i specjalistów IT, którzy chcą
              pewniej mówić na rekrutacji i spotkaniach: mniej kalkowania,
              więcej swobody w prawdziwych sytuacjach z pracy.
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
          <div className="relative mx-auto max-w-[960px]">
            <div className="mb-10 text-center sm:mb-12">
              <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[2px] text-[#5c4a6e]">
                Z czym przychodzisz?
              </span>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold tracking-tight text-[#1a2621]">
                Dla kogo są te lekcje?
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {audienceScenarios.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[20px] border border-black/[0.03] bg-white px-6 py-7 shadow-[0_10px_30px_rgba(43,58,50,0.05)]"
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
        </section>

        <section className="relative overflow-visible bg-[#fcf9f2] px-5 py-16 text-[#2b3a32] sm:px-6 sm:py-[90px]">
          <SectionWave color={cream} position="top" />
          <div className="relative mx-auto max-w-[720px]">
            <div className="mb-8 text-center sm:mb-10">
              <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[2px] text-[#5c4a6e]">
                Dlaczego warto mi zaufać?
              </span>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold tracking-tight text-[#1a2621]">
                Magister filologii angielskiej i programistka frontend
              </h2>
            </div>
            <p className="mb-6 text-center text-base leading-[1.75] text-[#4a5c53] sm:text-[17px]">
              Mam tytuł magistra filologii angielskiej, 10 lat doświadczenia w
              nauczaniu i 8 lat pracy jako programistka frontend. Łączę wiedzę o
              nauczaniu języka z praktycznym doświadczeniem w branży
              technologicznej. Dzięki temu wiem nie tylko, jak uczyć
              angielskiego, ale też jakiego angielskiego naprawdę potrzebujesz w
              pracy.
            </p>
            <ul className="flex flex-wrap justify-center gap-3.5">
              {(
                [
                  {
                    label: "magister filologii angielskiej",
                    className: "bg-[#e8e1f0] -rotate-[1.5deg]",
                  },
                  {
                    label: "+10 lat doświadczenia w nauczaniu angielskiego",
                    className: "bg-[#e2ede7] rotate-[1deg]",
                  },
                  {
                    label: "+8 lat pracy w roli frontend developera",
                    className: "bg-[#f7e6e3] -rotate-[0.8deg]",
                  },
                ] as const
              ).map((item) => (
                <li
                  key={item.label}
                  className={`inline-block rounded-[25px] border border-black/5 px-[22px] py-2.5 text-sm font-semibold text-[#2b3a32] shadow-[0_4px_10px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.08)] transition-all duration-250 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:translate-y-[-3px] hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_8px_18px_rgba(0,0,0,0.1)] ${item.className}`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
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
                Oferta
              </span>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold tracking-tight text-[#1a2621]">
                Nad czym pracujemy na angielskim w IT?
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {focusItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[20px] border border-black/[0.03] bg-white px-6 py-7 shadow-[0_10px_30px_rgba(43,58,50,0.05)]"
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
        </section>

        <section className="relative overflow-visible bg-[#fcf9f2] px-5 py-16 text-[#2b3a32] sm:px-6 sm:py-[90px]">
          <SectionWave color={cream} position="top" />
          <div className="relative mx-auto max-w-[720px] text-center">
            <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[2px] text-[#5c4a6e]">
              Ile to kosztuje?
            </span>
            <h2 className="mb-5 font-display text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold tracking-tight text-[#1a2621]">
              Cena
            </h2>
            <div className="space-y-4 text-base leading-[1.75] text-[#4a5c53] sm:text-[17px]">
              <p className="m-0">
                <strong className="font-semibold text-[#1a2621]">
                  180 zł / 60 minut
                </strong>{" "}
                – pojedyncze lekcje online skrojone pod realia IT.
              </p>
              <div className="pt-8">
                <h3 className="mb-2 font-display text-xl font-bold text-[#1a2621]">
                  Opcja dla firm
                </h3>
                <p className="m-0">
                  Prowadzisz rekrutację i potrzebujesz szybkiej weryfikacji
                  poziomu angielskiego kandydata? Pomagam też firmom w
                  technicznym audycie językowym.
                  <br />
                  <a
                    href={`${siteConfig.paths.home}#cennik`}
                    className="font-semibold text-[#3b5249] underline decoration-[#3b5249]/25 underline-offset-2 hover:text-[#e07a5f]"
                  >
                    Szczegóły i pozostałe formy współpracy
                  </a>
                  .
                </p>
              </div>
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
            <div className="mb-8 text-center">
              <span className="mb-4 inline-block rounded-[20px] bg-[#f4efe6] px-3.5 py-1.5 text-sm font-medium text-[#3b5249] shadow-[0_2px_5px_rgba(0,0,0,0.05)]">
                FAQ
              </span>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold tracking-tight text-[#1a2621]">
                Pytania o angielski w IT
              </h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[20px] border border-black/[0.03] bg-white px-6 py-5 shadow-[0_8px_20px_rgba(43,58,50,0.06)]"
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
        </section>

        <section className="relative overflow-visible bg-[#fcf9f2] px-5 py-16 text-center text-[#2b3a32] sm:px-6 sm:py-[90px]">
          <SectionWave color={cream} position="top" />
          <div className="relative mx-auto max-w-[560px]">
            <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[2px] text-[#5c4a6e]">
              Kontakt
            </span>
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
            <p className="mt-8 text-sm text-[#4a5c53]">
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

      <footer
        className="relative overflow-visible px-5 pb-8 pt-16 text-center text-sm text-[#4a5c53] sm:pt-20"
        style={{
          backgroundColor: lavender,
          backgroundImage:
            "radial-gradient(#cbb9d8 0.75px, transparent 0.75px)",
          backgroundSize: "15px 15px",
        }}
      >
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
