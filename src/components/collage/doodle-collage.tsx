const ringPath =
  "M102 8c28-2 52 8 68 28 14 18 22 42 18 66-3 22-16 42-36 54-22 14-48 18-72 12-24-6-44-22-54-44C16 100 14 74 24 52 36 26 68 10 102 8Z";

/** Circular portrait with hand-drawn doodles — matches hero mock. */
export function DoodleCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-visible">
      {/* Sage disc — flat color + soft shadow + grain */}
      <div
        className="absolute left-[28%] top-[6%] z-0 aspect-square w-[68%] overflow-hidden rounded-full bg-sage-bright"
        style={{
          boxShadow:
            "0 22px 44px rgba(47, 93, 72, 0.2), 0 6px 14px rgba(47, 93, 72, 0.1), inset 0 8px 18px rgba(255, 255, 255, 0.28), inset 0 -10px 20px rgba(47, 93, 72, 0.1)",
        }}
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-25 mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
            backgroundSize: "160px 160px",
          }}
        />
      </div>

      {/* Smaller, deeper green accent — bottom-left */}
      <div
        className="absolute bottom-[10%] left-[2%] z-0 aspect-square w-[40%] rounded-full bg-green"
        style={{
          boxShadow:
            "0 12px 28px rgba(47, 93, 72, 0.18), inset 0 6px 14px rgba(255, 255, 255, 0.2)",
        }}
        aria-hidden
      />

      {/* Offset ring — clearly shifted down-right from the photo */}
      <svg
        viewBox="0 0 200 200"
        className="pointer-events-none absolute left-[22%] top-[24%] z-[1] aspect-square w-[66%] text-foreground"
        aria-hidden
      >
        <path
          d={ringPath}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </svg>

      {/* Portrait + main ring */}
      <div className="absolute left-[12%] top-[12%] z-[2] aspect-square w-[66%]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ania-soft.png"
            alt="Ania — nauczycielka angielskiego online"
            className="h-full w-full object-cover object-[center_18%]"
          />
        </div>
        <svg
          viewBox="0 0 200 200"
          className="pointer-events-none absolute -inset-[3%] h-[106%] w-[106%] text-foreground"
          aria-hidden
        >
          <path
            d={ringPath}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Paper airplane */}
      <svg
        viewBox="0 0 64 64"
        className="absolute right-[2%] top-[38%] z-[3] w-[16%] rotate-[12deg] text-foreground"
        aria-hidden
      >
        <path
          d="M6 30 L58 8 L34 56 L28 36 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M28 36 L58 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
