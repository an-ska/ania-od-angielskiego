function buildRays() {
  const cx = 72;
  const cy = 36;
  const inner = 30;
  const count = 22;
  const start = (-125 * Math.PI) / 180;
  const span = (90 * Math.PI) / 180;
  return Array.from({ length: count }).map((_, i) => {
    const angle = start + (i / (count - 1)) * span;
    const outer = 36 + ((i * 37) % 5) + (i % 4 === 0 ? 2 : 0);
    return {
      x1: cx + Math.cos(angle) * inner,
      y1: cy + Math.sin(angle) * inner,
      x2: cx + Math.cos(angle) * outer,
      y2: cy + Math.sin(angle) * outer,
    };
  });
}

const rays = buildRays();

/**
 * Screenshot match: white tombstone → tilted cobalt Gemini card inside
 * (not clipped to the arch shape).
 */
export function ArchCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div
        className="absolute left-[38%] top-[2%] aspect-square w-[62%] rounded-full bg-sage-bright"
        aria-hidden
      />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible text-foreground"
        aria-hidden
      >
        {rays.map((r, i) => (
          <line
            key={i}
            x1={r.x1}
            y1={r.y1}
            x2={r.x2}
            y2={r.y2}
            stroke="currentColor"
            strokeWidth="0.16"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Offset ink outline */}
      <div
        className="absolute left-[16%] top-[14%] h-[72%] w-[64%] rounded-b-[28px] rounded-t-full border-[1.5px] border-foreground"
        aria-hidden
      />

      {/* White arch — photo sits inside as its own tilted card */}
      <div className="absolute left-[12%] top-[10%] z-[1] flex h-[72%] w-[64%] items-center justify-center overflow-hidden rounded-b-[28px] rounded-t-full border-[1.5px] border-foreground bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ania-cobalt.png"
          alt="Ania — nauczycielka angielskiego online"
          className="h-[90%] w-[90%] object-contain"
        />
      </div>

      <svg
        viewBox="0 0 200 90"
        fill="none"
        className="absolute left-[-2%] top-[-1%] z-[2] w-[36%] text-foreground"
        aria-hidden
      >
        <path
          d="M6 84 C 20 30, 80 4, 130 22 S 182 52, 192 34"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />
        <circle cx="192" cy="34" r="4.5" fill="currentColor" />
      </svg>

      <div
        className="absolute bottom-[10%] left-[3%] z-[2] aspect-square w-[13%] rotate-[14deg] bg-green"
        aria-hidden
      />
    </div>
  );
}
