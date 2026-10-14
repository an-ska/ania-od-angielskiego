"use client";

import { useEffect, useState } from "react";

export type Review = {
  author: string;
  quote: string;
};

const themes = [
  {
    bubble: "#f4efe6",
    quoteMark: "#d9785a",
    star: "#d9785a",
    avatar: "#3b5249",
    ring: "rgba(59, 82, 73, 0.18)",
  },
  {
    bubble: "#f4efe6",
    quoteMark: "#cbb9d8",
    star: "#d9785a",
    avatar: "#5a6b62",
    ring: "rgba(203, 185, 216, 0.55)",
  },
  {
    bubble: "#f4efe6",
    quoteMark: "#9cb4bc",
    star: "#d9785a",
    avatar: "#2b3a32",
    ring: "rgba(156, 180, 188, 0.45)",
  },
] as const;

function Stars({ color }: { color: string }) {
  return (
    <div className="mt-5 flex shrink-0 gap-1" aria-label="Ocena 5 na 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="size-5 sm:size-6"
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
}: {
  review: Review;
  theme: (typeof themes)[number];
}) {
  const initial = review.author.trim().charAt(0).toUpperCase();

  return (
    <figure className="flex h-full min-w-0 flex-col">
      <div className="relative flex-1 pt-6">
        <span
          className="pointer-events-none absolute left-4 top-0 z-[2] font-display text-[5.5rem] leading-none select-none sm:left-5 sm:text-[6.5rem]"
          style={{ color: theme.quoteMark, opacity: 0.85 }}
          aria-hidden
        >
          “
        </span>
        <div
          className="relative z-[1] flex h-full flex-col rounded-2xl border border-[rgba(59,82,73,0.08)] px-6 pb-7 pt-10 shadow-[0_6px_18px_rgba(43,58,50,0.08)] sm:px-7 sm:pb-8 sm:pt-11"
          style={{ backgroundColor: theme.bubble }}
        >
          <blockquote className="relative z-[1] flex-1 text-left text-[0.95rem] leading-relaxed text-[#4a5c53] sm:text-[15px]">
            {review.quote}
          </blockquote>
          <Stars color={theme.star} />
        </div>
      </div>

      <figcaption className="mt-4 flex items-center gap-3 pl-1">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-full font-display text-base font-bold text-[#f4efe6]"
          style={{
            backgroundColor: theme.avatar,
            boxShadow: `0 0 0 3px ${theme.ring}`,
          }}
          aria-hidden
        >
          {initial}
        </span>
        <p className="font-display text-lg font-semibold tracking-tight text-[#263830]">
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
        className="grid animate-[fade-up_0.35s_ease-out] items-stretch gap-6 sm:gap-7"
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
                  ? "border border-[#3b5249] bg-[#3b5249]"
                  : "border border-[rgba(59,82,73,0.35)] bg-transparent hover:border-[#3b5249]"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-[#5a6b62]">
          {safePage + 1} / {pageCount}
        </p>
      </div>
    </div>
  );
}
