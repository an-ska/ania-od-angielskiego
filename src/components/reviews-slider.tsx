"use client";

import { useEffect, useState } from "react";

export type Review = {
  author: string;
  quote: string;
};

const themes = [
  {
    bubble: "#d4eee3",
    quote: "#2f7a58",
    star: "#3f9a72",
    avatar: "#3f9a72",
    ring: "#9fd5bc",
  },
  {
    bubble: "#fff0b8",
    quote: "#b8920e",
    star: "#d4a017",
    avatar: "#d4a017",
    ring: "#fcd968",
  },
  {
    bubble: "#d6e0ff",
    quote: "#0a4ad6",
    star: "#0c58fc",
    avatar: "#0c58fc",
    ring: "#9bb8ff",
  },
] as const;

const radii = [
  "2.4rem 2.8rem 2.5rem 2.7rem",
  "2.7rem 2.3rem 2.8rem 2.4rem",
  "2.5rem 2.6rem 2.4rem 2.9rem",
] as const;

function Stars({ color }: { color: string }) {
  return (
    <div className="mt-5 flex shrink-0 gap-1.5" aria-label="Ocena 5 na 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="size-6 sm:size-7"
          fill={color}
          aria-hidden
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.27 5.06 16.71l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  theme,
  radius,
}: {
  review: Review;
  theme: (typeof themes)[number];
  radius: string;
}) {
  const initial = review.author.trim().charAt(0).toUpperCase();

  return (
    <figure className="flex h-full min-w-0 flex-col">
      {/* Bubble grows with content — no stretched SVG clipping text */}
      <div className="relative flex-1 pb-4 pt-7 sm:pt-8">
        <span
          className="pointer-events-none absolute left-3 top-0 z-[2] font-display text-[8.5rem] leading-none select-none sm:left-4 sm:top-0 sm:text-[10rem]"
          style={{ color: theme.quote, opacity: 0.9 }}
          aria-hidden
        >
          “
        </span>
        <div
          className="relative z-[1] flex h-full flex-col px-7 pb-8 pt-10 sm:px-8 sm:pb-9 sm:pt-12"
          style={{
            backgroundColor: theme.bubble,
            borderRadius: radius,
          }}
        >
          <blockquote className="relative z-[1] flex-1 text-left text-[0.95rem] leading-relaxed text-foreground/90 sm:text-[1rem]">
            {review.quote}
          </blockquote>
          <Stars color={theme.star} />
        </div>

        {/* Tail attached to bubble */}
        <span
          className="absolute bottom-1.5 left-10 z-0 block size-5 rotate-45 rounded-[2px]"
          style={{ backgroundColor: theme.bubble }}
          aria-hidden
        />
      </div>

      <figcaption className="mt-3 flex items-center gap-3 pl-4">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
          style={{
            backgroundColor: theme.avatar,
            boxShadow: `0 0 0 3px ${theme.ring}`,
          }}
          aria-hidden
        >
          {initial}
        </span>
        <p className="font-display text-lg font-semibold tracking-tight text-foreground">
          {review.author}
        </p>
      </figcaption>
    </figure>
  );
}

type ReviewsSliderProps = {
  reviews: readonly Review[];
};

export function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setPerPage(mq.matches ? 1 : 3);
      setPage(0);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const pageCount = Math.max(1, Math.ceil(reviews.length / perPage));
  const safePage = Math.min(page, pageCount - 1);
  const start = safePage * perPage;
  const visible = reviews.slice(start, start + perPage);

  return (
    <div>
      <div
        key={safePage}
        className="grid animate-[fade-up_0.35s_ease-out] items-stretch gap-6 sm:gap-8"
        style={{
          gridTemplateColumns:
            perPage === 1 ? "1fr" : "repeat(3, minmax(0, 1fr))",
        }}
      >
        {visible.map((review, i) => (
          <ReviewCard
            key={`${start + i}-${review.author}`}
            review={review}
            theme={themes[(start + i) % themes.length]}
            radius={radii[(start + i) % radii.length]}
          />
        ))}
      </div>

      <div className="relative z-10 mt-12 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3" aria-label="Strony opinii">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Strona ${i + 1} z ${pageCount}`}
              aria-current={i === safePage ? "true" : undefined}
              onClick={() => setPage(i)}
              className={`size-3 rounded-full transition-colors sm:size-3.5 ${
                i === safePage
                  ? "border border-cobalt bg-cobalt"
                  : "border border-foreground/70 bg-transparent hover:border-foreground"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted">
          {safePage + 1} / {pageCount}
        </p>
      </div>
    </div>
  );
}
