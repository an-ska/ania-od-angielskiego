"use client";

import { useState } from "react";

type RevealPhoneProps = {
  href: string;
  label: string;
};

const revealedLinkClassName =
  "group flex items-center gap-2.5 text-[15px] font-bold text-[#1a2621] no-underline transition-all duration-200 hover:translate-x-0.5 hover:text-[#e07a5f] sm:text-base";

const iconClassName =
  "shrink-0 text-[#3b5249] transition-colors group-hover:text-[#e07a5f]";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function RevealPhone({ href, label }: RevealPhoneProps) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="inline-flex cursor-pointer items-center gap-2 rounded-[20px] border border-[#e07a5f]/35 bg-[#f7e6e3] px-4 py-2 text-[14px] font-semibold text-[#5c322b] shadow-[0_2px_5px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#e07a5f]/55 hover:bg-[#f0d8d3] hover:shadow-[0_4px_10px_rgba(224,122,95,0.18)]"
      >
        <PhoneIcon className="shrink-0 text-[#e07a5f]" />
        <span>Pokaż numer</span>
      </button>
    );
  }

  return (
    <a href={href} className={revealedLinkClassName}>
      <PhoneIcon className={iconClassName} />
      <span>{label}</span>
    </a>
  );
}
