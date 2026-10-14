export function OrbitCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px]">
      <svg
        viewBox="0 0 100 50"
        className="absolute bottom-[6%] left-[4%] w-[92%] animate-[fade-up_0.45s_ease-out_both] text-sage-bright"
        aria-hidden
      >
        <path d="M0 50 A50 50 0 0 1 100 50 Z" fill="currentColor" />
      </svg>

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-[fade-up_0.45s_ease-out_0.06s_both] overflow-visible text-foreground"
        aria-hidden
      >
        <g transform="rotate(-16 50 50)">
          <path
            d="M2 50 A48 14 0 0 1 98 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
          />
          <circle cx="30" cy="37.5" r="1.3" fill="currentColor" />
        </g>
      </svg>

      <div className="absolute left-[23%] top-[4%] h-[80%] w-[54%] animate-[fade-up_0.45s_ease-out_0.12s_both] overflow-hidden rounded-full border-[1.5px] border-foreground bg-cobalt">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ania-cobalt.jpg"
          alt="Ania — nauczycielka angielskiego online"
          className="absolute left-0 top-0 h-[120%] w-full object-cover object-top"
        />
      </div>

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-[fade-up_0.45s_ease-out_0.18s_both] overflow-visible text-foreground"
        aria-hidden
      >
        <g transform="rotate(-16 50 50)">
          <path
            d="M2 50 A48 14 0 0 0 98 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
          />
          <circle
            cx="74"
            cy="62.1"
            r="2.4"
            className="text-green"
            fill="currentColor"
          />
        </g>
      </svg>

      <div
        className="absolute right-[6%] top-[8%] aspect-square w-[12%] animate-[fade-up_0.45s_ease-out_0.24s_both] rounded-full border-[1.5px] border-foreground"
        aria-hidden
      />
    </div>
  );
}
