import Image from "next/image";
import { HeroCollage } from "@/components/hero-collage";
import { OfferGrid, type OfferItem } from "@/components/offer-grid";
import { ReviewsSlider } from "@/components/reviews-slider";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const offerItems: OfferItem[] = [
  {
    title: "Angielski szkolny",
    subtitle: "Bieżąca nauka i nadrabianie zaległości",
    description:
      "Pomagam uporządkować materiał, zrozumieć gramatykę i nadrobić zaległości. Pracujemy nad tym, co sprawia trudność i przygotowujemy się do sprawdzianów.",
    audience: "Dla uczniów, którzy potrzebują regularnego wsparcia w nauce.",
    graphic: "/offer-school.png?v=soft",
    audiences: ["youth"],
  },
  {
    title: "Angielski od pierwszych kroków",
    subtitle: "Nauka od podstaw lub powrót do języka",
    description:
      "Zaczynamy od tego, co już wiesz, i spokojnie budujemy kolejne umiejętności. Poznajemy przydatne słownictwo, uczymy się tworzyć zdania i oswajamy z mówieniem.",
    audience:
      "Dla początkujących, osób wracających do nauki i dorosłych, którzy chcą zacząć od podstaw.",
    graphic: "/offer-first-steps.png?v=flush",
    largeGraphic: true,
    audiences: ["adults"],
  },
  {
    title: "Egzaminy pod kontrolą",
    subtitle: "Egzamin ósmoklasisty i matura podstawowa",
    description:
      "Powtarzamy najważniejsze zagadnienia, rozwiązujemy zadania egzaminacyjne i ćwiczymy strategie, które pomagają lepiej wykorzystać wiedzę podczas egzaminu. Skupiamy się na słabszych obszarach i regularnie sprawdzamy postępy.",
    audience:
      "Dla ósmoklasistów i maturzystów przygotowujących się do poziomu podstawowego.",
    graphic: "/offer-exams.png?v=soft",
    audiences: ["youth"],
  },
  {
    title: "Angielski w praktyce",
    subtitle: "Język przydatny w prawdziwym życiu",
    description:
      "Chcesz poradzić sobie na lotnisku, zameldować się w hotelu, zamówić jedzenie lub swobodniej rozmawiać z innymi? Ćwiczymy konkretne sytuacje, przydatne zwroty i dialogi, które pomagają przełamać barierę językową.",
    audience:
      "Dla młodzieży i dorosłych, którzy chcą wykorzystywać angielski w codziennych sytuacjach.",
    graphic: "/offer-practice.png?v=tone",
    audiences: ["adults"],
  },
  {
    title: "Angielski w IT",
    subtitle: "Przygotowanie do rozmów i swobodna komunikacja w projektach",
    description:
      "Czujesz, że Twój angielski zardzewiał, bo w projektach pracowałeś głównie z polskimi zespołami lub polskim klientem? Mówisz po angielsku, ale brakuje Ci swobody? Przygotuj się do rozmowy rekrutacyjnej albo na spotkania w międzynarodowym gronie.",
    audience:
      "Dla specjalistów IT potrzebujących językowego odświeżenia przed rozmową rekrutacyjną lub spotkaniami z zespołem.",
    graphic: "/offer-it.png?v=raw",
    audiences: ["adults"],
  },
  {
    title: "Wstępna weryfikacja językowa w IT",
    subtitle: "Szybkie sprawdzenie poziomu angielskiego kandydata",
    description:
      "Szukasz specjalisty do projektu, ale chcesz mieć pewność, że jego angielski faktycznie pozwoli mu na swobodną komunikację? Przeprowadzę szybką, wstępną weryfikację, oszczędzając czas Twojego zespołu.",
    audience:
      "Dla firm i rekruterów technicznych, którzy chcą sprawdzić realne umiejętności językowe kandydata przed rozmową techniczną.",
    graphic: "/offer-verification.png?v=2",
    audiences: ["business"],
  },
  {
    title: "Angielski z ciekawości",
    subtitle: "Więcej niż szkolny podręcznik",
    description:
      "Odkrywamy idiomy, nietypowe wyrażenia, język filmów i piosenek, ciekawostki kulturowe oraz zwyczaje krajów anglojęzycznych. Rozwijamy słownictwo, bawimy się językiem i poznajemy go z zupełnie innej strony.",
    audience:
      "Dla ciekawych świata uczniów oraz dorosłych, którzy chcą rozwijać angielski dla przyjemności.",
    graphic: "/offer-curiosity.png?v=book",
    wide: true,
    audiences: ["youth", "adults"],
  },
];

const lessonApproachItems = [
  {
    title: "Nauka bez stresu i oceniania",
    description:
      "Błędy są naturalną częścią nauki. Na zajęciach można śmiało pytać, prosić o ponowne wyjaśnienie i wracać do trudniejszych zagadnień. Zależy mi na tym, żeby uczeń czuł się swobodnie i nie bał się używać języka.",
    pill: "Bez stresu",
    badge: "pill-lavender",
  },
  {
    title: "Podejście dopasowane do ucznia",
    description:
      "Każdy z nas uczy sie inaczej, ma własne tempo pracy, inne potrzeby i cele. Dobieram materiały oraz ćwiczenia do poziomu ucznia i tego, nad czym aktualnie pracujemy. Mam też doświadczenie w pracy z osobami z dysleksją.",
    pill: "Indywidualne podejście",
    badge: "pill-mint",
  },
  {
    title: "Przemyślany plan nauki",
    description:
      "Na początku ustalamy jasny cel zajęć i precyzyjnie sprawdzamy, czego uczeń potrzebuje. Lekcje mają uporządkowany układ. Regularnie utrwalamy wcześniej przerobiony materiał, wracamy do trudniejszych tematów i weryfikujemy postępy, dzięki czemu wiedza zostaje na stałe.",
    pill: "Plan zajęć",
    badge: "pill-coral",
  },
  {
    title: "Stały feedback i monitorowanie postępów",
    description:
      "Otrzymujesz jasną informację zwrotną o omawianym materiale, postępach i zagadnieniach, nad którymi warto jeszcze popracować. W przypadku młodszych uczniów w stałym kontakcie są również rodzice dzięki temu każdy wie, nad czym pracujemy i jak przebiega nauka.",
    pill: "Feedback",
    badge: "pill-blue",
  },
  {
    title: "Wygodne lekcje online",
    description: "Uczysz się skąd chcesz, bez tracenia czasu i energii na dojazdy czy stanie w korkach. Podczas zajęć korzystamy z angażujących, interaktywnych materiałów, ćwiczeń i multimediów, które sprawiają, że nauka jest ciekawa i różnorodna. Wystarczy komputer z dostępem do internetu, spokojne miejsce.",
    pill: "Bez dojazdów",
    badge: "pill-sand",
    wide: true,
  },
] as const;

const lessonPillStyles = {
  "pill-lavender": "bg-[#e8e1f0] text-[#4a3b5c]",
  "pill-mint": "bg-[#e2ede7] text-[#2d4d3e]",
  "pill-coral": "bg-[#f7e6e3] text-[#5c322b]",
  "pill-blue": "bg-[#e1ebf5] text-[#2b435c]",
  "pill-sand": "bg-[#f4efe6] text-[#4a4233]",
} as const;

const pricingPlans = [
  {
    pill: "Indywidualnie",
    pillClass: "pill-lavender" as const,
    pillRotate: "-rotate-1",
    title: "Lekcje 1:1",
    description: "Pełne skupienie na Twoich celach, tempie i potrzebach.",
    price: "120 zł",
    period: "/ 60 minut",
    extraRate: {
      label: "Angielski w IT",
      price: "180 zł",
      period: "/ 60 minut",
    },
    features: [
      "100% uwagi tylko dla Ciebie",
      "Indywidualny plan i materiały",
    ],
  },
  {
    pill: "Wystartujcie razem",
    pillClass: "pill-coral" as const,
    pillRotate: "rotate-1",
    title: "Lekcje w parze",
    description:
      "Nauka dla rodzeństwa, pary lub znajomych w swobodnej atmosferze.",
    price: "80 zł",
    period: "/ osoba / 60 minut",
    featured: true,
    features: [
      "Niższy koszt za osobę",
      "Wspólna motywacja",
    ],
  },
  {
    pill: "Na Twoich zasadach",
    pillClass: "pill-mint" as const,
    pillRotate: "-rotate-[0.8deg]",
    title: "Warunki specjalne",
    description:
      "Potrzebujesz nietypowego planu? Dopasujemy format do Twoich potrzeb.",
    customTitle: "Wycena indywidualna",
    features: [
      "Intensywne kursy (np. lekcje codziennie przez 2 miesiące)",
      "Współpraca z firmami lub zajęcia dla szkół",
    ],
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

const contact = siteConfig.contact;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main>
        <section
          className="relative overflow-hidden pt-[5.5rem] text-[#2b3a32] sm:pt-32 lg:pt-36"
          style={{
            backgroundColor: "#dcd0e5",
            backgroundImage:
              "radial-gradient(#cbb9d8 0.75px, transparent 0.75px)",
            backgroundSize: "15px 15px",
          }}
        >
          <div className="relative mx-auto flex w-full max-w-[1040px] flex-col px-5 pb-8 sm:px-6 sm:pb-12 md:flex-row md:items-center md:pb-20 md:pt-4">
            <div className="z-[2] w-full shrink-0 pt-1 text-center animate-[fade-up_0.7s_ease-out_both] md:w-1/2 md:pt-0 md:pr-4 md:text-left">
              <span className="mb-3 inline-block rounded-[20px] bg-[#f4efe6] px-3.5 py-1.5 text-sm font-medium text-[#3b5249] shadow-[0_2px_5px_rgba(0,0,0,0.05)] sm:mb-6 sm:px-4 sm:py-2 sm:text-[15px]">
                Angielski online
              </span>
              <h1 className="mb-3 font-display text-[clamp(2.25rem,9vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-[#263830] sm:mb-6">
                Ania od angielskiego
              </h1>
              <p className="mx-auto mb-5 max-w-[22rem] text-[0.98rem] leading-[1.55] text-[#4a5c53] sm:mb-9 sm:max-w-[28rem] sm:text-[1.2rem] sm:leading-[1.65] md:mx-0 md:max-w-[520px]">
                Angielski dla uczniów i dorosłych: od szkolnych zaległości i
                egzaminów po swobodną komunikację i odkrywanie języka na własnych
                zasadach.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:justify-start">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-[30px] bg-[#3b5249] px-6 py-3 text-[0.95rem] font-medium text-white shadow-[0_4px_10px_rgba(59,82,73,0.2)] transition-colors hover:bg-[#2b3a32] sm:px-8 sm:py-4 sm:text-base"
                >
                  Umów lekcję
                </a>
                <a
                  href="#oferta"
                  className="inline-flex items-center justify-center rounded-[30px] border border-[#3b5249] bg-transparent px-6 py-3 text-[0.95rem] font-medium text-[#3b5249] transition-colors hover:bg-[rgba(59,82,73,0.05)] sm:px-8 sm:py-4 sm:text-base"
                >
                  Poznaj ofertę
                </a>
              </div>
            </div>

            <div className="relative mx-auto mt-6 w-full max-w-[22rem] animate-[fade-up_0.85s_ease-out_0.12s_both] sm:mt-8 sm:max-w-[26rem] md:mx-0 md:mt-0 md:max-w-none md:min-w-0 md:flex-1">
              <HeroCollage variant="doodle" />
            </div>
          </div>
        </section>

        <section
          id="o-mnie"
          className="relative scroll-mt-24 overflow-visible bg-[#fcf9f2] px-5 py-16 text-[#2b3a32] sm:px-6 sm:py-[90px]"
        >
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -top-10 left-0 z-[1] h-12 w-full sm:-top-12 sm:h-14"
            style={{ color: "#fcf9f2" }}
            aria-hidden
          >
            <path
              d="M0 48 V22 C180 6 320 40 520 28 C760 12 920 4 1120 22 C1280 34 1380 18 1440 12 V48 Z"
              fill="currentColor"
            />
          </svg>
          <div className="relative mx-auto max-w-[760px] text-center">
            <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[2px] text-[#6a8275]">
              Poznaj mnie
            </span>
            <h2 className="mb-7 font-display text-[clamp(1.875rem,4vw,2.375rem)] font-extrabold tracking-tight text-[#1a2621]">
              O mnie
            </h2>
            <div className="mb-9 text-center text-base leading-[1.75] text-[#4a5c53] sm:text-[17px]">
              <p className="mb-4 text-xl font-bold text-[#1a2621]">
                Cześć, jestem Ania!
              </p>
              <p>
                Na co dzień jestem żoną, mamą oraz programistką frontend, a z
                wykształcenia magistrem filologii angielskiej ze specjalnością
                nauczycielską. Ukończyłam studia na Uniwersytecie Opolskim. Mam
                ponad 10 lat doświadczenia w nauczaniu. Prowadzę lekcje
                indywidualne, a wcześniej pracowałam też w szkole językowej.
                Dzięki temu, że znam świat technologii i kodu, potrafię tłumaczyć
                rzeczy logicznie i klarownie.
              </p>
              <p className="mt-6 text-lg font-semibold leading-relaxed text-[#1a2621]">
                Pomogę Ci odkryć, co już potrafisz, uporządkować to, co sprawia
                trudność, i zrobić kolejny krok.
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap justify-center gap-3.5">
              {(
                [
                  {
                    label: "magister filologii angielskiej",
                    className: "bg-[#e8e1f0] -rotate-[1.5deg]",
                  },
                  {
                    label: "lektorka w szkole językowej",
                    className: "bg-[#e2ede7] rotate-[1deg]",
                  },
                  {
                    label: "+10 lat doświadczenia",
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
          id="oferta"
          className="relative scroll-mt-24 overflow-visible px-5 pb-16 pt-10 text-[#2b3a32] sm:px-6 sm:pb-20 sm:pt-14"
          style={{
            backgroundColor: "#dcd0e5",
            backgroundImage:
              "radial-gradient(#cbb9d8 0.75px, transparent 0.75px)",
            backgroundSize: "15px 15px",
          }}
        >
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -top-10 left-0 z-[1] h-12 w-full sm:-top-12 sm:h-14"
            style={{ color: "#dcd0e5" }}
            aria-hidden
          >
            <path
              d="M0 48 V22 C180 6 320 40 520 28 C760 12 920 4 1120 22 C1280 34 1380 18 1440 12 V48 Z"
              fill="currentColor"
            />
          </svg>
          <div className="relative mx-auto max-w-[1140px]">
            <div className="mb-12 text-center sm:mb-14">
              <span className="mb-3 inline-block rounded-[20px] bg-[#f4efe6] px-4 py-1.5 text-sm font-medium text-[#3b5249] shadow-[0_2px_5px_rgba(0,0,0,0.04)]">
                Co możemy razem zrobić?
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,2.625rem)] font-bold tracking-tight text-[#263830]">
                Oferta
              </h2>
            </div>

            <OfferGrid items={offerItems} />
          </div>
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -bottom-10 left-0 z-[1] h-12 w-full rotate-180 sm:-bottom-12 sm:h-14"
            style={{ color: "#dcd0e5" }}
            aria-hidden
          >
            <path
              d="M0 48 V22 C180 6 320 40 520 28 C760 12 920 4 1120 22 C1280 34 1380 18 1440 12 V48 Z"
              fill="currentColor"
            />
          </svg>
        </section>

        <section
          id="lekcje"
          className="relative scroll-mt-24 overflow-visible bg-[#fcf9f2] px-5 py-16 text-[#2b3a32] sm:px-6 sm:py-[90px]"
        >
          <div className="relative mx-auto max-w-[1080px]">
            <div className="mb-12 text-center sm:mb-12">
              <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[2px] text-[#6a8275]">
                Proces i podejście
              </span>
              <h2 className="mb-3 font-display text-[clamp(1.875rem,4vw,2.375rem)] font-extrabold tracking-tight text-[#1a2621]">
                Jak wyglądają lekcje ze mną?
              </h2>
             
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {lessonApproachItems.map((item) => {
                const wide = "wide" in item && item.wide;
                return (
                  <article
                    key={item.title}
                    className={`flex flex-col items-start rounded-[20px] border border-black/[0.03] bg-white px-7 py-8 shadow-[0_10px_30px_rgba(43,58,50,0.05),0_2px_4px_rgba(43,58,50,0.02)] transition-[transform,box-shadow] duration-250 hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(43,58,50,0.08)] ${
                      wide
                        ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[780px]"
                        : ""
                    }`}
                  >
                    <span
                      className={`mb-4 inline-block shrink-0 rounded-[20px] px-4 py-1.5 text-[13px] font-semibold ${lessonPillStyles[item.badge]}`}
                    >
                      {item.pill}
                    </span>
                    <div>
                      <h3 className="mb-3 font-display text-xl font-bold leading-[1.35] text-[#1a2621]">
                        {item.title}
                      </h3>
                      <p className="m-0 text-[15px] leading-[1.65] text-[#4a5c53]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="opinie"
          className="relative scroll-mt-24 overflow-visible px-5 pb-16 pt-10 text-[#2b3a32] sm:px-6 sm:pb-20 sm:pt-14"
          style={{
            backgroundColor: "#dcd0e5",
            backgroundImage:
              "radial-gradient(#cbb9d8 0.75px, transparent 0.75px)",
            backgroundSize: "15px 15px",
          }}
        >
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -top-10 left-0 z-[1] h-12 w-full sm:-top-12 sm:h-14"
            style={{ color: "#dcd0e5" }}
            aria-hidden
          >
            <path
              d="M0 48 V22 C180 6 320 40 520 28 C760 12 920 4 1120 22 C1280 34 1380 18 1440 12 V48 Z"
              fill="currentColor"
            />
          </svg>
          <div className="relative mx-auto max-w-[1140px]">
            <div className="mb-12 text-center sm:mb-14">
              <span className="mb-3 inline-block rounded-[20px] bg-[#f4efe6] px-4 py-1.5 text-sm font-medium text-[#3b5249] shadow-[0_2px_5px_rgba(0,0,0,0.04)]">
                Opinie kursantów
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,2.625rem)] font-bold tracking-tight text-[#263830]">
                Co mówią o mnie kursanci?
              </h2>
              <p className="mt-3 text-base font-semibold text-[#d9785a] sm:text-[1.0625rem]">
                13 opinii · 5/5
              </p>
            </div>

            <div className="relative">
              <ReviewsSlider reviews={reviews} />
            </div>
          </div>
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -bottom-10 left-0 z-[1] h-12 w-full rotate-180 sm:-bottom-12 sm:h-14"
            style={{ color: "#dcd0e5" }}
            aria-hidden
          >
            <path
              d="M0 48 V22 C180 6 320 40 520 28 C760 12 920 4 1120 22 C1280 34 1380 18 1440 12 V48 Z"
              fill="currentColor"
            />
          </svg>
        </section>

        <section
          id="cennik"
          className="relative scroll-mt-24 overflow-visible bg-[#fcf9f2] px-5 py-16 text-[#2b3a32] sm:px-6 sm:py-[90px]"
        >
          <div className="relative mx-auto max-w-[1120px]">
            <div className="mb-12 text-center">
              <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[2px] text-[#6a8275]">
                Formy współpracy
              </span>
              <h2 className="mb-3 font-display text-[clamp(1.875rem,4vw,2.375rem)] font-extrabold tracking-tight text-[#1a2621]">
                Cennik
              </h2>
              <p className="mx-auto max-w-xl text-[17px] leading-relaxed text-[#4a5c53]">
                Wszystkie lekcje odbywają się online i trwają 60 minut
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-3">
              {pricingPlans.map((plan) => {
                const featured = "featured" in plan && plan.featured;
                const customTitle =
                  "customTitle" in plan ? plan.customTitle : null;
                return (
                  <article
                    key={plan.title}
                    className={`relative flex flex-col rounded-[24px] px-7 py-9 shadow-[0_10px_30px_rgba(43,58,50,0.05),0_2px_4px_rgba(43,58,50,0.02)] transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(43,58,50,0.08)] ${
                      featured
                        ? "border-2 border-[#e07a5f] bg-[#fffefb]"
                        : "border border-black/[0.03] bg-white"
                    }`}
                  >
                    <span
                      className={`mb-[18px] self-start rounded-[20px] px-4 py-1.5 text-[13px] font-semibold ${lessonPillStyles[plan.pillClass]} ${plan.pillRotate}`}
                    >
                      {plan.pill}
                    </span>
                    <h3 className="mb-2 font-display text-[22px] font-bold leading-snug text-[#1a2621]">
                      {plan.title}
                    </h3>
                    <p className="mb-6 text-sm leading-normal text-[#6a8275]">
                      {plan.description}
                    </p>

                    <div className="mb-6 border-b border-dashed border-[rgba(43,58,50,0.12)] pb-5">
                      {customTitle ? (
                        <span className="mt-2.5 block text-2xl font-extrabold leading-snug text-[#1a2621]">
                          {customTitle}
                        </span>
                      ) : (
                        <>
                          <span className="block text-[40px] font-extrabold leading-none text-[#1a2621]">
                            {"price" in plan ? plan.price : null}
                          </span>
                          <span className="text-[13px] font-semibold text-[#6a8275]">
                            {"period" in plan ? plan.period : null}
                          </span>
                          {"extraRate" in plan && plan.extraRate ? (
                            <div className="mt-4 flex items-start justify-between gap-3 border-t border-dashed border-[rgba(43,58,50,0.1)] pt-4">
                              <span className="flex items-start gap-2 text-sm font-semibold leading-snug text-[#1a2621]">
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="mt-0.5 shrink-0 text-[#3b5249]"
                                  aria-hidden
                                >
                                  <rect
                                    x="2"
                                    y="4"
                                    width="20"
                                    height="14"
                                    rx="2"
                                  />
                                  <path d="M2 16h20" />
                                  <path d="M8 20h8" />
                                </svg>
                                {plan.extraRate.label}
                              </span>
                              <span className="shrink-0 text-right">
                                <span className="block text-lg font-extrabold leading-none text-[#1a2621]">
                                  {plan.extraRate.price}
                                </span>
                                <span className="text-[12px] font-semibold text-[#6a8275]">
                                  {plan.extraRate.period}
                                </span>
                              </span>
                            </div>
                          ) : null}
                        </>
                      )}
                    </div>

                    <ul className="m-0 flex list-none flex-col gap-3 p-0">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm leading-normal text-[#3b5249]"
                        >
                          <span
                            className="shrink-0 font-extrabold text-[#2d4d3e]"
                            aria-hidden
                          >
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="kontakt"
          className="relative scroll-mt-24 overflow-visible px-5 pb-[110px] pt-16 text-[#2b3a32] sm:px-6 sm:pt-[90px]"
          style={{
            backgroundColor: "#dcd0e5",
            backgroundImage:
              "radial-gradient(#cbb9d8 0.75px, transparent 0.75px)",
            backgroundSize: "15px 15px",
          }}
        >
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -top-10 left-0 z-[1] h-12 w-full sm:-top-12 sm:h-14"
            style={{ color: "#dcd0e5" }}
            aria-hidden
          >
            <path
              d="M0 48 V22 C180 6 320 40 520 28 C760 12 920 4 1120 22 C1280 34 1380 18 1440 12 V48 Z"
              fill="currentColor"
            />
          </svg>
          <div className="relative mx-auto max-w-[680px]">
            <div className="mb-10 text-center">
              <span className="mb-2 block text-[13px] font-semibold uppercase tracking-[2px] text-[#5c4a6e]">
                Kontakt
              </span>
              <h2 className="mb-3 font-display text-[clamp(1.875rem,4vw,2.375rem)] font-extrabold tracking-tight text-[#1a2621]">
                Porozmawiajmy o lekcjach
              </h2>
            </div>

            <div className="relative rounded-[24px] border border-white/60 bg-[#fcf9f2] px-5 pb-6 pt-9 shadow-[0_15px_35px_rgba(43,58,50,0.12),0_3px_8px_rgba(43,58,50,0.06)] sm:px-10 sm:pb-10 sm:pt-12">
              <Image
                src="/paper-clip.png"
                alt=""
                aria-hidden
                width={34}
                height={68}
                className="pointer-events-none absolute -top-[21px] left-4 z-10 h-auto w-[34px] drop-shadow-[2px_3px_5px_rgba(43,58,50,0.15)]"
              />

              {(() => {
                const items = (
                  [
                    {
                      key: "phone" as const,
                      pill: "Telefon",
                      pillClass: "pill-coral" as const,
                      href: contact.phone.href,
                      label: contact.phone.label,
                      ready: contact.phone.ready,
                      external: false,
                      icon: (
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      ),
                    },
                    {
                      key: "email" as const,
                      pill: "E-mail",
                      pillClass: "pill-mint" as const,
                      href: contact.email.href,
                      label: contact.email.label,
                      ready: contact.email.ready,
                      external: false,
                      icon: (
                        <>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </>
                      ),
                    },
                    {
                      key: "maps" as const,
                      pill: "Google Maps",
                      pillClass: "pill-sand" as const,
                      href: contact.maps.href,
                      label: contact.maps.label,
                      ready: contact.maps.ready,
                      external: true,
                      icon: (
                        <>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </>
                      ),
                    },
                    {
                      key: "facebook" as const,
                      pill: "Facebook",
                      pillClass: "pill-lavender" as const,
                      href: contact.facebook.href,
                      label: contact.facebook.label,
                      ready: contact.facebook.ready,
                      external: true,
                    },
                    {
                      key: "ekorepetycje" as const,
                      pill: "e-korepetycje.net",
                      pillClass: "pill-blue" as const,
                      href: contact.ekorepetycje.href,
                      label: contact.ekorepetycje.label,
                      ready: contact.ekorepetycje.ready,
                      external: true,
                      icon: (
                        <>
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </>
                      ),
                    },
                  ] as const
                ).filter((item) => item.ready);

                if (items.length === 0) {
                  return (
                    <p className="m-0 px-2 text-center text-[15px] leading-relaxed text-[#4a5c53] sm:px-4 sm:text-base">
                      Kontakt jest w przygotowaniu — po uruchomieniu skrzynki i
                      profili pojawią się tu konkretne dane do napisania i
                      umówienia lekcji.
                    </p>
                  );
                }

                return (
                  <ul className="m-0 flex list-none flex-col gap-4 p-0">
                    {items.map((item) => (
                      <li
                        key={item.key}
                        className="flex flex-col items-start gap-2 rounded-xl border-b border-dashed border-[rgba(43,58,50,0.12)] px-2 py-3 transition-colors duration-200 hover:bg-white/50 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4"
                      >
                        <span
                          className={`rounded-2xl px-4 py-1.5 text-[13px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.04)] ${lessonPillStyles[item.pillClass]}`}
                        >
                          {item.pill}
                        </span>
                        <a
                          href={item.href}
                          {...(item.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="group flex items-center gap-2.5 text-[15px] font-bold text-[#1a2621] no-underline transition-all duration-200 hover:translate-x-0.5 hover:text-[#e07a5f] sm:text-base"
                        >
                          {"icon" in item ? (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="shrink-0 text-[#3b5249] transition-colors group-hover:text-[#e07a5f]"
                              aria-hidden
                            >
                              {item.icon}
                            </svg>
                          ) : null}
                          <span
                            className={item.key === "email" ? "break-all" : ""}
                          >
                            {item.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                );
              })()}
            </div>
          </div>
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -bottom-10 left-0 z-[1] h-12 w-full rotate-180 sm:-bottom-12 sm:h-14"
            style={{ color: "#dcd0e5" }}
            aria-hidden
          >
            <path
              d="M0 48 V22 C180 6 320 40 520 28 C760 12 920 4 1120 22 C1280 34 1380 18 1440 12 V48 Z"
              fill="currentColor"
            />
          </svg>
        </section>
      </main>

      <footer className="bg-[#fcf9f2] pb-8 pt-16 text-center text-sm text-[#6a8275] sm:pt-20">
        © 2026 Ania od angielskiego
      </footer>
    </div>
  );
}
