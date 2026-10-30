"use client";

import { useEffect, useState } from "react";

export type Review = {
  author: string;
  quote: string;
};

function ReviewCard({ review }: { review: Review }) {
  const initial = review.author.trim().charAt(0).toUpperCase();

  return (
    <figure className="relative mt-[35px] flex h-[30rem] min-w-0 flex-col overflow-visible rounded-[20px] bg-[#fcf9f2] px-8 pb-[30px] pt-[55px] shadow-[0_6px_18px_rgba(43,58,50,0.08)] transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(43,58,50,0.12)]">
      <span
        className="pointer-events-none absolute -top-[27px] left-7 -rotate-[4deg] font-serif text-[120px] leading-none text-[#e07a5f] drop-shadow-[3px_4px_6px_rgba(43,58,50,0.12)]"
        aria-hidden
      >
        “
      </span>

      <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:thin]">
        <blockquote className="m-0 text-left text-[15px] leading-[1.65] text-[#3b5249]">
          {review.quote}
        </blockquote>
      </div>

      <div className="mt-6 flex shrink-0 flex-col gap-3">
        <div
          className="mb-1 text-[22px] tracking-[4px] text-[#e07a5f]"
          aria-label="Ocena 5 na 5"
        >
          ★★★★★
        </div>
        <figcaption className="flex items-center gap-2.5 border-t border-black/[0.06] pt-3">
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#2b3a32] text-[13px] font-bold text-[#fcf9f2]"
            aria-hidden
          >
            {initial}
          </span>
          <p className="m-0 text-[15px] font-bold text-[#1a2621]">
            {review.author}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}

type ReviewsSliderProps = {
  reviews: readonly Review[];
};

/** Avoid a final page with a single card (e.g. 13 → 3+3+3+2+2). */
function chunkReviews(reviews: readonly Review[], size: number) {
  const pages: Review[][] = [];
  let i = 0;

  while (i < reviews.length) {
    const remaining = reviews.length - i;
    let take = Math.min(size, remaining);

    if (
      size > 1 &&
      remaining > size &&
      remaining - size === 1
    ) {
      take = size - 1;
    }

    pages.push(reviews.slice(i, i + take));
    i += take;
  }

  return pages.length > 0 ? pages : [[]];
}

/**
 * All reviews stay in the HTML. Layout uses the original overflow-visible
 * grid (no carousel clip). Page changes slide in instead of fading up.
 */
export function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

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

  const pages = chunkReviews(reviews, perPage);
  const pageCount = pages.length;
  const safePage = Math.min(page, pageCount - 1);

  const goToPage = (next: number) => {
    setDirection(next > safePage ? "next" : "prev");
    setPage(next);
  };

  const slideClass =
    direction === "next"
      ? "animate-[review-slide-next_0.45s_cubic-bezier(0.22,1,0.36,1)]"
      : "animate-[review-slide-prev_0.45s_cubic-bezier(0.22,1,0.36,1)]";

  return (
    <div>
      {pages.map((pageReviews, pageIndex) => {
        const active = pageIndex === safePage;
        return (
          <div
            key={pageIndex}
            className={active ? undefined : "hidden"}
            aria-hidden={active ? undefined : true}
          >
            <div
              key={active ? `${safePage}-${direction}` : "idle"}
              className={
                active
                  ? `grid items-stretch gap-6 overflow-visible sm:gap-7 ${slideClass}`
                  : "grid items-stretch gap-6 overflow-visible sm:gap-7"
              }
              style={{
                gridTemplateColumns:
                  perPage === 1
                    ? "minmax(0, 1fr)"
                    : "repeat(3, minmax(0, 1fr))",
              }}
            >
              {pageReviews.map((review, i) => (
                <div key={`${pageIndex}-${i}-${review.author}`}>
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="relative z-10 mt-12 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3" aria-label="Strony opinii">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Strona ${i + 1} z ${pageCount}`}
              aria-current={i === safePage ? "true" : undefined}
              onClick={() => goToPage(i)}
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
