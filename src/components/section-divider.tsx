type SectionDividerProps = {
  from: string;
  to: string;
};

export function SectionDivider({ from, to }: SectionDividerProps) {
  return (
    <svg
      className="block w-full h-12 sm:h-16 -mt-px"
      viewBox="0 0 1000 64"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 0 V20 Q500 64 1000 20 V0 Z" fill={from} />
      <rect y="20" width="1000" height="44" fill={to} />
    </svg>
  );
}
