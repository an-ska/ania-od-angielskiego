"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type OfferAudience = "youth" | "adults" | "business";

export type OfferItem = {
  title: string;
  subtitle?: string;
  description: string;
  audience: string;
  graphic?: string;
  graphics?: readonly [string, string];
  wide?: boolean;
  largeGraphic?: boolean;
  audiences: readonly OfferAudience[];
  moreHref?: string;
  moreLabel?: string;
};

const filters = [
  { id: "all" as const, label: "Wszystkie" },
  { id: "youth" as const, label: "Dla dzieci i młodzieży" },
  { id: "adults" as const, label: "Dla dorosłych" },
  { id: "business" as const, label: "Dla firm" },
];

type OfferFilter = (typeof filters)[number]["id"];

type OfferGridProps = {
  items: readonly OfferItem[];
};

/** Strip cache-busting query so next/image can optimize local files. */
function imageSrc(path: string) {
  return path.split("?")[0] ?? path;
}

export function OfferGrid({ items }: OfferGridProps) {
  const [active, setActive] = useState<OfferFilter>("all");

  const visible =
    active === "all"
      ? items
      : items.filter((item) => item.audiences.includes(active));

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap justify-center gap-2.5 sm:mb-10 sm:gap-3"
        role="group"
        aria-label="Filtr oferty"
      >
        {filters.map((filter) => {
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActive(filter.id)}
              aria-pressed={isActive}
              className={`rounded-[20px] px-4 py-2 text-[13px] font-semibold transition-[transform,box-shadow,background-color,color] duration-200 sm:px-5 sm:text-sm ${
                isActive
                  ? "bg-[#2b3a32] text-[#fcf9f2] shadow-[0_4px_12px_rgba(43,58,50,0.18)]"
                  : "bg-[#f4efe6] text-[#3b5249] shadow-[0_2px_5px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(43,58,50,0.1)]"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
        {visible.map((item) => {
          const graphic = item.graphic;
          const graphics = item.graphics;
          // Wide layout only in "Wszystkie"; in audience filters keep a regular 2-col grid
          const wide =
            visible.length === 1 ||
            (active === "all" && Boolean(item.wide));

          if (graphics) {
            const [leftGraphic, rightGraphic] = graphics;
            const spanWide = active === "all" || visible.length === 1;
            return (
              <article
                key={item.title}
                className={`flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-[rgba(59,82,73,0.08)] bg-[#f4efe6] px-5 py-6 shadow-[0_6px_18px_rgba(43,58,50,0.08)] transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(43,58,50,0.12)] ${
                  spanWide
                    ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[820px] sm:flex-row sm:items-center sm:gap-3 sm:px-5 sm:py-5"
                    : "sm:p-6"
                }`}
              >
                <div
                  className={`flex w-full items-start justify-center gap-6 ${
                    spanWide ? "sm:contents" : "mb-2"
                  }`}
                >
                  <Image
                    src={imageSrc(leftGraphic)}
                    alt=""
                    aria-hidden
                    width={150}
                    height={150}
                    sizes="150px"
                    className={`h-auto shrink-0 object-contain ${
                      spanWide
                        ? "w-[38%] max-w-[150px] sm:w-[150px] sm:self-center"
                        : "w-[42%] max-w-[120px]"
                    }`}
                  />
                  <Image
                    src={imageSrc(rightGraphic)}
                    alt={`Ilustracja oferty: ${item.title}`}
                    width={150}
                    height={150}
                    sizes="150px"
                    className={`h-auto shrink-0 object-contain ${
                      spanWide
                        ? "w-[38%] max-w-[150px] sm:order-3 sm:w-[150px] sm:self-center"
                        : "w-[42%] max-w-[120px]"
                    }`}
                  />
                </div>
                <div
                  className={`min-w-0 flex-1 ${
                    spanWide ? "text-center sm:order-2" : "text-center"
                  }`}
                >
                  <h3 className="font-display text-[1.625rem] font-bold leading-snug text-[#263830] sm:text-[1.75rem]">
                    {item.title}
                  </h3>
                  {item.subtitle ? (
                    <p className="mt-2 text-base font-semibold leading-snug text-[#d9785a] sm:text-[1.0625rem]">
                      {item.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-2 text-sm leading-relaxed text-[#4a5c53] sm:text-[15px]">
                    {item.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#5a6b62]">
                    {item.audience}
                  </p>
                </div>
              </article>
            );
          }

          const graphicPath = graphic ? imageSrc(graphic) : null;
          const graphicWidth = item.largeGraphic ? 230 : 200;

          return (
            <article
              key={item.title}
              className={`flow-root rounded-2xl border border-[rgba(59,82,73,0.08)] bg-[#f4efe6] p-5 shadow-[0_6px_18px_rgba(43,58,50,0.08)] transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(43,58,50,0.12)] sm:p-6 ${
                wide
                  ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[780px]"
                  : ""
              }`}
            >
              {graphicPath ? (
                <Image
                  src={graphicPath}
                  alt={`Ilustracja oferty: ${item.title}`}
                  width={graphicWidth}
                  height={graphicWidth}
                  sizes={`(max-width: 640px) 78vw, ${graphicWidth}px`}
                  className={`float-left mb-1 mr-4 h-auto object-contain max-sm:float-none max-sm:mx-auto max-sm:mb-4 max-sm:block ${
                    item.largeGraphic
                      ? "w-[min(50%,230px)] max-sm:w-[78%]"
                      : "w-[min(48%,200px)] max-sm:w-[72%]"
                  }`}
                />
              ) : null}
              <h3 className="font-display text-[1.625rem] font-bold leading-snug text-[#263830] max-sm:text-center sm:text-[1.75rem]">
                {item.title}
              </h3>
              {item.subtitle ? (
                <p className="mt-2 text-base font-semibold leading-snug text-[#d9785a] max-sm:text-center sm:text-[1.0625rem]">
                  {item.subtitle}
                </p>
              ) : null}
              <p className="mt-2 text-sm leading-relaxed text-[#4a5c53] max-sm:text-center sm:text-[15px]">
                {item.description}
              </p>
              <p className="mt-3 clear-both text-sm leading-relaxed text-[#5a6b62] max-sm:text-center">
                {item.audience}
              </p>
              {item.moreHref && item.moreLabel ? (
                <p className="mt-3 clear-both max-sm:text-center">
                  <Link
                    href={item.moreHref}
                    className="text-sm font-semibold text-[#3b5249] underline decoration-[#3b5249]/25 underline-offset-2 transition-colors hover:text-[#e07a5f]"
                  >
                    {item.moreLabel}
                  </Link>
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
