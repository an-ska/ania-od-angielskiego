"use client";

import { useEffect, useState } from "react";

export type Review = {
  author: string;
  quote: string;
};

function ReviewCard({ review }: { review: Review }) {
  const initial = review.author.trim().charAt(0).toUpperCase();

  return (
    <figure className="relative mt-[35px] flex h-full min-w-0 flex-col justify-between overflow-visible rounded-[20px] bg-[#fcf9f2] px-8 pb-[30px] pt-[55px] shadow-[0_6px_18px_rgba(43,58,50,0.08)] transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(43,58,50,0.12)]">
      <span
        className="pointer-events-none absolute -top-[27px] left-7 -rotate-[4deg] font-serif text-[120px] leading-none text-[#e07a5f] drop-shadow-[3px_4px_6px_rgba(43,58,50,0.12)]"
        aria-hidden
      >
        “
      </span>

      <div className="min-h-0 flex-1">
        <blockquote className="m-0 text-left text-[15px] leading-[1.65] text-[#3b5249]">
          {review.quote}
        </blockquote>
      </div>

      <div className="mt-6 flex flex-col gap-3">
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
        className="grid animate-[fade-up_0.35s_ease-out] items-stretch gap-6 overflow-visible sm:gap-7"
        style={{
          gridTemplateColumns:
            perPage === 1 ? "1fr" : "repeat(3, minmax(0, 1fr))",
        }}
      >
        {visible.map((review, i) => (
          <ReviewCard
            key={`${start + i}-${review.author}`}
            review={review}
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
