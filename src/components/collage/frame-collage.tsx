function buildRays() {
  const cx = 70;
  const cy = 34;
  const inner = 32;
  const count = 22;
  const start = (-125 * Math.PI) / 180;
  const span = (90 * Math.PI) / 180;
  return Array.from({ length: count }).map((_, i) => {
    const angle = start + (i / (count - 1)) * span;
    const outer = 37 + ((i * 37) % 5) + (i % 4 === 0 ? 2 : 0);
    return {
      x1: cx + Math.cos(angle) * inner,
      y1: cy + Math.sin(angle) * inner,
      x2: cx + Math.cos(angle) * outer,
      y2: cy + Math.sin(angle) * outer,
    };
  });
}

const rays = buildRays();

/** Exact FrameCollage from the reference zip — no extra cobalt layer. */
export function FrameCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px]">
      <div
        className="absolute left-[40%] top-[4%] aspect-square w-[60%] rounded-full bg-sage-bright"
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

      {/* portrait with a dotted passe-partout frame */}
      <div className="absolute left-[14%] top-[12%] h-[70%] w-[62%]">
        <div
          className="absolute -inset-[14px] rounded-[42px] border-[3px] border-dotted border-foreground"
          aria-hidden
        />
        <div className="relative h-full w-full overflow-hidden rounded-[28px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ania-cobalt.jpg"
            alt="Ania — nauczycielka angielskiego online"
            className="h-full w-full scale-[1.04] object-cover object-top"
          />
        </div>
      </div>

      {/* dotted trajectory */}
      <svg
        viewBox="0 0 200 90"
        fill="none"
        className="absolute left-[-2%] top-[0%] w-[34%] text-foreground"
        aria-hidden
      >
        <path
          d="M6 84 C 20 30, 80 4, 130 22 S 182 52, 192 34"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeDasharray="0 8"
          strokeLinecap="round"
        />
        <circle cx="192" cy="34" r="5" fill="currentColor" />
      </svg>

      <div
        className="absolute bottom-[10%] left-[4%] aspect-square w-[12%] rotate-[14deg] bg-green"
        aria-hidden
      />
    </div>
  );
}
