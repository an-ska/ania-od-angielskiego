import Link from "next/link";
import { HeroCollage } from "@/components/hero-collage";
import { ReviewsSlider } from "@/components/reviews-slider";
import { SectionDivider } from "@/components/section-divider";
const offerItems = [
  {
    title: "Angielski szkolny",
    subtitle: "Bieżąca nauka i nadrabianie zaległości",
    description:
      "Pomagam uporządkować materiał, zrozumieć gramatykę i nadrobić zaległości. Pracujemy nad tym, co sprawia trudność i przygotowujemy się do sprawdzianów.",
    audience: "Dla uczniów, którzy potrzebują regularnego wsparcia w nauce.",
    icon: "book",
  },
  {
    title: "Egzaminy pod kontrolą",
    subtitle: "Egzamin ósmoklasisty i matura podstawowa",
    description:
      "Przygotowujemy się krok po kroku: powtarzamy najważniejsze zagadnienia, rozwiązujemy zadania egzaminacyjne i ćwiczymy strategie, które pomagają lepiej wykorzystać wiedzę podczas egzaminu. Skupiamy się na słabszych obszarach i regularnie sprawdzamy postępy.",
    audience:
      "Dla ósmoklasistów i maturzystów przygotowujących się do poziomu podstawowego.",
    icon: "exam",
  },
  {
    title: "Angielski od pierwszych kroków",
    subtitle: "Nauka od podstaw lub powrót do języka",
    description:
      "Zaczynamy od tego, co już wiesz, i spokojnie budujemy kolejne umiejętności. Poznajemy przydatne słownictwo, uczymy się tworzyć zdania i oswajamy z mówieniem.",
    audience:
      "Dla początkujących, osób wracających do nauki i dorosłych, którzy chcą zacząć od podstaw.",
    icon: "steps",
  },
  {
    title: "Angielski w praktyce",
    subtitle: "Język przydatny w prawdziwym życiu",
    description:
      "Chcesz poradzić sobie na lotnisku, zameldować się w hotelu, zamówić jedzenie lub swobodniej rozmawiać z innymi? Ćwiczymy konkretne sytuacje, przydatne zwroty i dialogi, które pomagają przełamać barierę językową.",
    audience:
      "Dla młodzieży i dorosłych, którzy chcą wykorzystywać angielski w codziennych sytuacjach.",
    icon: "chat",
  },
  {
    title: "Angielski z ciekawości",
    subtitle: "Więcej niż szkolny podręcznik",
    description:
      "Angielski to znacznie więcej niż gramatyka i listy słówek! Odkrywamy idiomy, nietypowe wyrażenia, język filmów i piosenek, ciekawostki kulturowe oraz zwyczaje krajów anglojęzycznych. Rozwijamy słownictwo, bawimy się językiem i poznajemy go z zupełnie innej strony.",
    audience:
      "Dla ciekawych świata uczniów oraz dorosłych, którzy chcą rozwijać angielski dla przyjemności.",
    icon: "spark",
  },
] as const;

function OfferIcon({ name }: { name: (typeof offerItems)[number]["icon"] }) {
  const common = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden {...common}>
      {name === "book" && (
        <path d="M4 19V6.5A2.5 2.5 0 0 1 6.5 4H12v15.5M12 4h5.5A2.5 2.5 0 0 1 20 6.5V19l-8-2.5L4 19z" />
      )}
      {name === "exam" && (
        <>
          <path d="M8 3.5h8v3H8z" />
          <path d="M7 6.5h10v14H7z" />
          <path d="M10 11h4M10 14.5h4M10 18h2.5" />
        </>
      )}
      {name === "steps" && (
        <>
          <path d="M7 16.5c1.2 0 2-.9 2-2s-.8-2-2-2-2 .9-2 2 .8 2 2 2z" />
          <path d="M15.5 11c1.2 0 2-.9 2-2s-.8-2-2-2-2 .9-2 2 .8 2 2 2z" />
          <path d="M9.2 14.2 13.8 10" />
        </>
      )}
      {name === "chat" && (
        <>
          <path d="M5 6.5h9.5A2.5 2.5 0 0 1 17 9v4.5a2.5 2.5 0 0 1-2.5 2.5H9l-4 3V6.5z" />
          <path d="M17 9.5h1.5A2.5 2.5 0 0 1 21 12v3.5A2.5 2.5 0 0 1 18.5 18H17" />
        </>
      )}
      {name === "spark" && (
        <path d="m12 3.2 2.2 5.4 5.8.4-4.5 3.7 1.5 5.6L12 15.4 7 18.3l1.5-5.6-4.5-3.7 5.8-.4L12 3.2z" />
      )}
    </svg>
  );
}

const lessonApproachItems = [
  {
    title: "Nauka bez stresu i oceniania",
    description:
      "Błędy są naturalną częścią nauki. Można pytać, prosić o kolejne wyjaśnienie i wracać do trudniejszych zagadnień. Zależy mi na tym, żeby uczeń czuł się swobodnie i nie bał się używać języka.",
  },
  {
    title: "Podejście dopasowane do ucznia",
    description:
      "Każdy ma inne potrzeby, tempo pracy i cele. Dobieram materiały oraz ćwiczenia do poziomu ucznia i tego, nad czym aktualnie pracujemy. Mam też doświadczenie w pracy z dyslektykami.",
  },
  {
    title: "Regularny feedback dla rodziców",
    description:
      "Rodzice otrzymują informację o omawianym materiale, postępach ucznia i zagadnieniach, które warto jeszcze przećwiczyć. Dzięki temu wiedzą, nad czym pracujemy i jak przebiega nauka.",
  },
  {
    title: "Przemyślany plan nauki",
    description:
      "Na początku ustalamy cel zajęć i sprawdzamy, czego uczeń potrzebuje. W trakcie współpracy wracamy do trudniejszych tematów, utrwalamy materiał i sprawdzamy, co już udało się opanować.",
  },
  {
    title: "Wygodne lekcje online",
    description:
      "Uczymy się bez dojazdów, z wykorzystaniem materiałów i ćwiczeń dopasowanych do tematu zajęć. Wystarczy komputer z dostępem do internetu i spokojne miejsce do nauki.",
  },
] as const;

/** Ordered longest→shortest so tall quotes share a page. */
const reviews = [
  {
    author: "Karolina",
    quote:
      "Ania jest w 100% godnym polecenia nauczycielem języka angielskiego. Jest cierpliwa i wyrozumiała. Dostosowuje zajęcia do indywidualnych potrzeb ucznia. W prosty sposób potrafi wytłumaczyć nawet najbardziej złożoną gramatykę. Dysponuje bogatymi materiałami dostosowanymi do poziomu ucznia. Czas zajęć wykorzystywany jest maksymalnie. Jest też elastyczna w umawianiu spotkań. Dodatkowo wszystko przebiega w przemiłej atmosferze. Dzięki Ani mogłam się zdecydować na wyjazd do USA. Gorąco polecam!",
  },
  {
    author: "Maciek",
    quote:
      "Witam wszystkich poszukujacych profesjonalnego korepetytora j.angielskiego. Ja juz znalazlem,p.Anie:) Swietne podejscie do ucznia, umiejetnosc przekazu, kompetencje i mile usposobienie, to fuzja cech, ktore zadecydowaly o moim wyborze. Nadmienie,ze polecilem pania Anie zaprzyjaznionemu malzenstwu, zeby uczyla dwojke ich dzieci (ok.6 i 7 lat) i rowniez tutaj feedback jest bardzo na plus bo chwalili zarowno rodzice jak i dzieci ;) Tak wiec moja pelna rekomendacja dla p.Ani. Pozdrawiam",
  },
  {
    author: "Elżbieta",
    quote:
      "Mój syn-Michał ma zajęcia z P.Anią od 3 lat. Zarówno Michał jak i ja jesteśmy bardzo zadowoleni z zajęć. Pani Ania jest kompetentną,odpowiedzialną a do tego przesympatyczną, uśmiechniętą osobą. Zawsze przygotowana do zajęć, realizuje plan ,który załozyłyśmy na początku a nawet go systematycznie rozwija.Michał jest trochę niesystematycznym uczniem a mimo to dzięki Pani Ani widac niesamowite postępy. Gorąco polecam.",
  },
  {
    author: "Elżbieta",
    quote:
      "Szczerze polecam lekcje języka angielskiego z Panią Anią. Bardzo efektywnie spędzony czas, szybkie postępy w nauce dzięki indywidualnemu podejściu do ucznia. Pani Ania zapewnia wszystkie potrzebne materiały oraz tworzy bardzo przyjazną atmosferę podczas zajęć. Posiada bardzo dobry kontakt z dziećmi. Korzystam z jej korepetycji od 3 lat. Bardzo profesjonalna osoba! Zdecydowanie polecam.",
  },
  {
    author: "Rafał",
    quote:
      "Chciałbym bardzo polecić Panią Anię jako nauczyciela języka angielskiego. Sposób prowadzenia przez Nią lekcji, posiadane narzędzia pracy, dodatkowe, bardzo ciekawe materiały, oraz niezaprzeczalny osobisty dar do tego zawodu powodują, że lekcje mijają tak szybko, chociaż chciałoby się jeszcze uczyć, czerpiąć radość i frajdę z nauki oraz rzeczywistych postępów.",
  },
  {
    author: "Katarzyna",
    quote:
      "Mój syn-uczeń 5 kl. jest bardzo zadowolony z zajęć z Panią Anią. Zajęcia prowadzone są w miłej atmosferze.Pani Ania nawiązuje doskonały kontakt z dzieckiem i ma przemiłe usposobienie. Pani Ania posiada dodatkowe materiały oraz szeroki wachlarz dodatkowych narzędzi do przekazywania wiedzy. Jest zawsze punktualna i z całą pewnością godna polecenia.",
  },
  {
    author: "Aneta",
    quote:
      "Serdecznie polecam Panią Anię wszystkim tym, którzy poza wysokimi kompetencjami językowymi, profesjonalnym podejściem do nauki i otwartością na uczniów- cenią sobie życzliwość i cierpliwość. Nasza 11 letnia córka przez cały rok szkolny 2015-2016 korzystała z pomocy Pani Ani i poza zdobytą wiedzą - po prostu przyjemnie spędzała czas.",
  },
  {
    author: "Agnieszka i Monika",
    quote:
      "Pani Ania to godna polecenia nauczyciela języka angielskiego. Jej zdecydowane zalety to przede wszystkim profesjonalizm i kompetencje. Zawsze jest przygotowana do lekcji przynosi dodatkowe materiały. Lekcja prowadzona jest w sposób sprawny i efektywny a jednocześnie Pani Ania potrafi stworzyć bardzo sympatyczną atmosferę.",
  },
  {
    author: "Artur",
    quote:
      "Moja opinia potwierdza wszystkie poprzednie, czyli: pełen profesjonalizm, solidność, kompetentność, dobre przygotowanie do zajęć, cierpliwość, odpowiedzialność, punktualność, wspaniała atmosfera podczas zajęć, przesympatyczna osobowość, zapewnia dodatkowe materiały, itd. Osoba godna polecenia.",
  },
  {
    author: "Izabela",
    quote:
      "Ania to osoba która posiada wysokie umiejętności w nauczaniu. Zajęcia są prowadzone w sposób profesjonalny. Ania w prosty sposób przekazuje swoją wiedzę, a zajęcia dopasowuje do każdego ucznia. Cierpliwość, pełne zaangażowanie i super atmosfera podczas zajęć. Gorąco polecam!",
  },
  {
    author: "Marta",
    quote:
      "Dostała ciężkie zadanie: 10-latkę, która nie ogarniała podstawowych zdań (co za różnica czy I have a dream czy I Am a dream?)... Dała radę, uporządkowała podstawy robiąc to tak \"podstępnie\", że dziecko nawet nie zauważyło, że się uczy...",
  },
  {
    author: "Betina",
    quote:
      "Jestem bardzo zadowolona z lekcji języka angielskiego z Panią Anią. Pełen profesjonalizm, umiejętność przekazu wiedzy, wiele dodatkowych materiałów i oczywiście przyjemna atmosfera podczas zajęć. Zdecydowanie polecam.",
  },
  {
    author: "Agnieszka",
    quote:
      "Bardzo profesjonalne podejście do ucznia. Praca na lekcjach jest ciekawa w miłej atmosferze. Podchodzi do swojego zawodu z pasją. Udostępnia pomocne materiały do nauki. Jestem bardzo zadowolona. Polecam",
  },
] as const;

/** Wklej tu swoje dane kontaktowe i publiczne adresy profili. */
const contact = {
  phone: {
    href: "tel:+48XXXXXXXXX",
    label: "XXX XXX XXX",
  },
  email: {
    href: "mailto:hello@ania-od-angielskiego.pl",
    label: "hello@ania-od-angielskiego.pl",
  },
  facebook: {
    href: "https://www.facebook.com/",
    label: "Facebook",
  },
  ekorepetycje: {
    href: "https://www.e-korepetycje.net/",
    label: "e-korepetycje.net",
  },
} as const;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main>
        <section className="relative overflow-hidden bg-[#f7f4ec] pt-28 sm:pt-32 lg:pt-36">
          <header className="absolute inset-x-0 top-4 z-30 px-4 sm:top-5 sm:px-6">
            <div className="mx-auto flex max-w-[896px] items-center justify-between gap-4 rounded-full bg-white px-5 py-3 shadow-[0_8px_30px_rgba(31,42,36,0.06)] sm:px-7">
              <Link
                href="/"
                className="font-display text-xl font-bold tracking-tight text-[#2f5d48] transition-opacity hover:opacity-80"
              >
                Ania
              </Link>
              <nav className="hidden items-center gap-7 text-[15px] font-medium text-[#2f5d48] md:flex">
                <a
                  href="#oferta"
                  className="transition-colors hover:text-green"
                >
                  Oferta
                </a>
                <a
                  href="#lekcje"
                  className="transition-colors hover:text-green"
                >
                  Lekcje
                </a>
                <a
                  href="#o-mnie"
                  className="transition-colors hover:text-green"
                >
                  O mnie
                </a>
                <a
                  href="#opinie"
                  className="transition-colors hover:text-green"
                >
                  Opinie
                </a>
                <a
                  href="#kontakt"
                  className="transition-colors hover:text-green"
                >
                  Kontakt
                </a>
              </nav>
              <div className="flex items-center gap-1.5">
                <a
                  href={contact.facebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-10 items-center justify-center rounded-full text-[#2f5d48] transition-colors hover:bg-sage/40 hover:text-cobalt"
                >
                  <svg viewBox="0 0 24 24" className="block size-5" fill="currentColor" aria-hidden>
                    <path d="M14 8.2h2.2V5.1c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.7H6.3v3.4h2.4V22h3.5v-6.1h2.7l.4-3.4h-3.1v-2.3c0-1 .3-1.7 1.8-1.7z" />
                  </svg>
                </a>
                <a
                  href={contact.ekorepetycje.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil na e-korepetycje.net"
                  className="flex size-10 items-center justify-center rounded-full text-[#2f5d48] transition-colors hover:bg-sage/40 hover:text-cobalt"
                >
                  <svg viewBox="0 0 24 24" className="block size-5" fill="currentColor" aria-hidden>
                    <path d="M12 4.2C10 2.9 7.4 2.2 4.5 2.2c-1 0-1.9.1-2.8.4-.7.2-1.1.8-1.1 1.5v13.6c0 .9.8 1.5 1.6 1.3 1-.2 2-.3 3-.3 2.1 0 4.1.6 5.8 1.8.3.2.7.2 1 0 1.7-1.2 3.7-1.8 5.8-1.8 1 0 2 .1 3 .3.8.2 1.6-.4 1.6-1.3V4.1c0-.7-.4-1.3-1.1-1.5-.9-.3-1.8-.4-2.8-.4-2.9 0-5.5.7-7.5 2zm0 2.3c1.6-1 3.6-1.5 5.7-1.5.8 0 1.5.1 2.2.2v11.6c-.8-.1-1.6-.2-2.4-.2-1.9 0-3.7.5-5.5 1.4V6.5zm-1.5 11.5c-1.8-.9-3.6-1.4-5.5-1.4-.8 0-1.6.1-2.4.2V5.2c.7-.1 1.4-.2 2.2-.2 2.1 0 4.1.5 5.7 1.5v11.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </header>

          <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-6 pb-10 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:pb-6">
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-sage-bright/70 px-3.5 py-1.5 text-sm font-medium text-[#2f5d48]">
                Angielski online
              </span>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-[#2f5d48] md:text-6xl">
                Ania od angielskiego
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-[#2f5d48]/80">
                Angielski dla uczniów i dorosłych: od szkolnych zaległości i
                egzaminów po swobodną komunikację i odkrywanie języka na własnych
                zasadach.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#2f5d48] px-6 py-3.5 font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.97]"
                >
                  Umów lekcję
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#oferta"
                  className="font-medium text-[#2f5d48] underline decoration-[#2f5d48]/30 underline-offset-4 transition-colors hover:decoration-[#2f5d48]"
                >
                  Poznaj ofertę
                </a>
              </div>
            </div>

            <HeroCollage variant="doodle" />
          </div>
        </section>

        <section id="oferta" className="relative scroll-mt-24 overflow-visible bg-white">
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -top-10 left-0 z-[1] h-12 w-full text-white sm:-top-12 sm:h-14"
            aria-hidden
          >
            <path
              d="M0 48 V22 C180 6 320 40 520 28 C760 12 920 4 1120 22 C1280 34 1380 18 1440 12 V48 Z"
              fill="currentColor"
            />
          </svg>
          <div className="relative mx-auto max-w-[1200px] px-6 pb-16 pt-10 sm:pb-20 sm:pt-14">
            <div
              className="pointer-events-none absolute -left-[4%] top-10 size-36 rounded-full bg-sage-bright/50 sm:size-48"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-[3%] top-16 size-20 rounded-full bg-sage/70 sm:size-28"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-[16%] top-40 size-3 rounded-full bg-foreground sm:size-3.5"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-[12%] top-36 size-5 rounded-full bg-green sm:size-6"
              aria-hidden
            />

            <div className="relative text-center">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-tight">
                Oferta
              </h2>
              <div
                className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-sage-bright"
                aria-hidden
              />
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-foreground/80">
              Niezależnie od tego, czy chcesz poprawić oceny, przygotować się do egzaminu, zacząć naukę od podstaw, czy rozwinąć swoje umiejętności językowe, znajdziesz tu coś dla siebie.
              </p>
            </div>

            <ol className="relative mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-12">
              {offerItems.map((item, index) => (
                <li key={item.title} className="text-left">
                  <div className="flex items-center gap-3">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sage-bright/70 text-[#2f5d48]">
                      <OfferIcon name={item.icon} />
                    </span>
                    <span className="font-display text-sm font-semibold tracking-wide text-cobalt">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-base font-medium text-green">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground/75 sm:text-lg">
                    {item.description}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/55">
                    {item.audience}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <SectionDivider from="#ffffff" to="#f3f7f4" />

        <section id="lekcje" className="scroll-mt-24 overflow-hidden bg-mint">
          <div className="relative mx-auto max-w-[1200px] px-6 py-16 sm:py-20">
            <div
              className="pointer-events-none absolute -right-[4%] top-8 size-36 rounded-full bg-sage-bright/70 sm:size-48"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-[4%] top-20 size-20 rounded-full bg-sage sm:size-28"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-20 left-[8%] size-3 rounded-full bg-foreground sm:size-3.5"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-[12%] top-44 size-5 rounded-full bg-green sm:size-6"
              aria-hidden
            />

            <div className="relative text-center">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-tight">
                Jak wyglądają lekcje ze mną?
              </h2>
              <div
                className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-sage-bright"
                aria-hidden
              />
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-foreground/80">
                Dlaczego warto wybrać właśnie te zajęcia — krótko i konkretnie.
              </p>
            </div>

            <ol className="relative mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-12">
              {lessonApproachItems.map((item, index) => (
                <li key={item.title} className="text-left">
                  <span className="font-display text-sm font-semibold tracking-wide text-cobalt">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/75 sm:text-lg">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="o-mnie" className="scroll-mt-24 overflow-hidden bg-mint">
          <div className="relative mx-auto max-w-[1200px] px-6 py-16 text-center sm:py-20">
            <div
              className="pointer-events-none absolute -left-[4%] top-8 size-36 rounded-full bg-sage-bright/70 sm:size-48"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-[4%] top-16 size-20 rounded-full bg-sage sm:size-28"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-14 right-[8%] size-3 rounded-full bg-foreground sm:size-3.5"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-24 left-[10%] size-5 rounded-full bg-green sm:size-6"
              aria-hidden
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-tight">
                O mnie
              </h2>
              <div
                className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-sage-bright"
                aria-hidden
              />
              <p className="mt-8 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
                Cześć, jestem Ania!
              </p>
              <p className="mt-6 text-xl leading-relaxed text-foreground sm:text-[1.35rem]">
                Jestem magistrem filologii angielskiej ze specjalnością
                nauczycielską - skończyłam studia na Uniwersytecie Opolskim. Mam
                ponad 10 lat doświadczenia w nauczaniu. Prowadzę lekcje
                indywidualne, a wcześniej pracowałam też w szkole językowej.
              </p>
              <p className="mt-8 font-display text-[clamp(1.35rem,2.5vw,1.75rem)] font-semibold leading-snug tracking-tight text-cobalt">
                Pomogę Ci odkryć, co już potrafisz, uporządkować to, co sprawia
                trudność, i zrobić kolejny krok.
              </p>
              <ul className="mt-10 flex flex-wrap justify-center gap-3">
                {[
                  "magister filologii angielskiej",
                  "lektorka w szkole językowej",
                  "+10 lat doświadczenia",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white px-5 py-2.5 text-base font-semibold text-foreground ring-4 ring-sage-bright sm:px-6 sm:py-3 sm:text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <SectionDivider from="#f3f7f4" to="#ffffff" />

        <section id="opinie" className="scroll-mt-24 overflow-hidden bg-white">
          <div className="relative mx-auto max-w-[1200px] px-6 py-16 sm:py-20">
            <div
              className="pointer-events-none absolute -right-[5%] top-6 size-40 rounded-full bg-sage-bright/50 sm:size-52"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-[4%] top-28 size-24 rounded-full bg-sage/70 sm:top-32 sm:size-32"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-[14%] top-36 size-3.5 rounded-full bg-green sm:top-40 sm:size-4"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-[18%] top-20 size-2.5 rounded-full bg-foreground sm:size-3"
              aria-hidden
            />

            <div className="relative text-center">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-tight">
                Co mówią o mnie kursanci?
              </h2>
              <div
                className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-sage-bright"
                aria-hidden
              />
              <p className="mt-4 text-lg leading-relaxed text-muted">
                13 opinii · 5/5
              </p>
            </div>

            <div className="relative mt-12">
              <ReviewsSlider reviews={reviews} />
            </div>
          </div>
        </section>

        <SectionDivider from="#ffffff" to="#f3f7f4" />

        <section id="kontakt" className="scroll-mt-24 overflow-hidden bg-mint">
          <div className="relative mx-auto max-w-[1200px] px-6 py-16 text-center sm:py-20">
            <div
              className="pointer-events-none absolute -right-[3%] top-10 size-36 rounded-full bg-sage-bright/70 sm:size-48"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-[3%] top-24 size-16 rounded-full bg-sage sm:size-24"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-16 left-[7%] size-3 rounded-full bg-foreground sm:size-3.5"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-28 right-[12%] size-5 rounded-full bg-green sm:size-6"
              aria-hidden
            />

            <div className="relative">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold tracking-tight">
                Kontakt
              </h2>
              <div
                className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-sage-bright"
                aria-hidden
              />
              <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-foreground/80">
                Napisz lub zadzwoń — dobierzemy termin lekcji próbnej.
              </p>

              <ul className="mx-auto mt-12 grid max-w-2xl gap-8 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10">
                <li>
                  <a
                    href={contact.phone.href}
                    className="group block text-foreground transition-colors hover:text-cobalt"
                  >
                    <span className="block text-sm font-medium tracking-wide text-foreground/55 uppercase">
                      Telefon
                    </span>
                    <span className="mt-2 block font-display text-[1.65rem] font-semibold tracking-tight sm:text-3xl">
                      {contact.phone.label}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.email.href}
                    className="group block text-foreground transition-colors hover:text-cobalt"
                  >
                    <span className="block text-sm font-medium tracking-wide text-foreground/55 uppercase">
                      E-mail
                    </span>
                    <span className="mt-2 block font-display text-[1.35rem] font-semibold tracking-tight break-all sm:text-2xl">
                      {contact.email.label}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.facebook.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block text-foreground transition-colors hover:text-cobalt"
                  >
                    <span className="block text-sm font-medium tracking-wide text-foreground/55 uppercase">
                      Facebook
                    </span>
                    <span className="mt-2 block font-display text-[1.65rem] font-semibold tracking-tight sm:text-3xl">
                      {contact.facebook.label}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.ekorepetycje.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block text-foreground transition-colors hover:text-cobalt"
                  >
                    <span className="block text-sm font-medium tracking-wide text-foreground/55 uppercase">
                      Profil
                    </span>
                    <span className="mt-2 block font-display text-[1.65rem] font-semibold tracking-tight sm:text-3xl">
                      {contact.ekorepetycje.label}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/5 py-6 text-center text-sm text-muted">
        © 2026 Ania od angielskiego
      </footer>
    </div>
  );
}
