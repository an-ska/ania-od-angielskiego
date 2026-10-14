import type { ReactNode } from "react";

type YellowBlobProps = {
  children: ReactNode;
  className?: string;
};

/** Irregular yellow “torn paper” highlight — inspired by La Palatine accents. */
export function YellowBlob({ children, className = "" }: YellowBlobProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <svg
        className="pointer-events-none absolute -inset-x-2 -inset-y-1 h-[calc(100%+0.55rem)] w-[calc(100%+1rem)] text-yellow"
        viewBox="0 0 200 56"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M6.2 18.4c2.1-9.8 14.6-15.2 28.4-16.1 18.2-1.2 34.6 2.8 52.1 4.1 16.8 1.3 33.4-2.4 49.8-1.1 14.2 1.1 27.6 6.8 33.4 16.9 4.9 8.6 2.1 18.4-6.8 24.1-10.4 6.6-25.2 5.2-38.1 6.4-15.1 1.4-29.8 5.8-45.2 4.9-16.8-1-33.1-6.2-49.4-8.4C17.1 47.2 4.4 42.8 2.8 32.1 1.6 24.6 3.9 20.1 6.2 18.4Z"
        />
      </svg>
      <span className="relative z-[1]">{children}</span>
    </span>
  );
}
