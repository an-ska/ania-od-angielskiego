/** Stacked paper sheets — from the reference zip. */
export function PaperCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px]">
      {/* mint sheet, tilted left */}
      <div
        className="absolute left-[20%] top-[7%] h-[78%] w-[62%] -rotate-[7deg] rounded-[20px] bg-sage-bright"
        aria-hidden
      />

      {/* hairline sheet, tilted right */}
      <div
        className="absolute left-[13%] top-[11%] h-[76%] w-[64%] rotate-[5deg] rounded-[20px] border-[1.5px] border-foreground"
        aria-hidden
      />

      {/* photo print — Gemini cobalt portrait as-is */}
      <div className="absolute left-[16%] top-[9%] h-[76%] w-[64%] overflow-hidden rounded-[20px] border-[1.5px] border-foreground bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ania-cobalt.jpg"
          alt="Ania — nauczycielka angielskiego online"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* vertical dashed rule with dot */}
      <svg
        viewBox="0 0 12 220"
        fill="none"
        className="absolute right-[6%] top-[4%] h-[42%] text-foreground"
        aria-hidden
      >
        <line
          x1="6"
          y1="4"
          x2="6"
          y2="204"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />
        <circle cx="6" cy="212" r="5" fill="currentColor" />
      </svg>

      {/* leaf half-disc */}
      <svg
        viewBox="0 0 100 50"
        className="absolute bottom-[8%] right-[2%] w-[26%] text-green"
        aria-hidden
      >
        <path d="M0 50 A50 50 0 0 1 100 50 Z" fill="currentColor" />
      </svg>

      {/* ink dot grid */}
      <svg
        viewBox="0 0 52 52"
        className="absolute left-[2%] top-[2%] w-[11%] text-foreground/70"
        aria-hidden
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <circle
            key={i}
            cx={5 + (i % 4) * 14}
            cy={5 + Math.floor(i / 4) * 14}
            r="2"
            fill="currentColor"
          />
        ))}
      </svg>
    </div>
  );
}
