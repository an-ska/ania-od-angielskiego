"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const navBeforeOferta = [{ href: "/#o-mnie", label: "O mnie" }] as const;

const navAfterOferta = [
  { href: "/#lekcje", label: "Lekcje" },
  { href: "/#opinie", label: "Opinie" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

const ofertaLinks = [
  { href: siteConfig.paths.angielskiWIt, label: "Angielski w IT" },
  { href: siteConfig.paths.maturaPodstawowa, label: "Matura podstawowa" },
  {
    href: siteConfig.paths.egzaminOsmoklasisty,
    label: "Egzamin ósmoklasisty",
  },
  { href: "/#oferta", label: "Inne kursy i lekcje" },
] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className={`size-3 shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
    >
      <path
        d="M2.5 4.25 6 7.75l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [ofertaOpen, setOfertaOpen] = useState(false);
  const panelId = useId();
  const ofertaMenuId = useId();
  const rootRef = useRef<HTMLElement>(null);
  const ofertaDesktopRef = useRef<HTMLDivElement>(null);

  const closeAll = () => {
    setOpen(false);
    setOfertaOpen(false);
  };

  useEffect(() => {
    if (!open && !ofertaOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setOfertaOpen(false);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (open && !rootRef.current?.contains(target)) {
        setOpen(false);
        setOfertaOpen(false);
        return;
      }
      if (
        ofertaOpen &&
        !open &&
        !ofertaDesktopRef.current?.contains(target)
      ) {
        setOfertaOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    if (open) document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = "";
    };
  }, [open, ofertaOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
      else setOfertaOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Zamknij menu"
          className="fixed inset-0 z-40 bg-[#2b3a32]/20 backdrop-blur-[2px] md:hidden"
          onClick={closeAll}
        />
      ) : null}

      <header
        ref={rootRef}
        className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6"
      >
        <div className="mx-auto max-w-[896px] rounded-[28px] bg-white/95 shadow-[0_8px_30px_rgba(31,42,36,0.08)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-7 sm:py-3">
            <Link
              href="/"
              className="min-w-0 truncate font-display text-base font-bold tracking-tight text-[#3b5249] transition-opacity hover:opacity-80 sm:text-lg md:text-xl"
              onClick={closeAll}
            >
              {siteConfig.name}
            </Link>

            <nav className="hidden items-center gap-7 text-[15px] font-medium text-[#3b5249] md:flex">
              {navBeforeOferta.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[#2b3a32]"
                >
                  {link.label}
                </a>
              ))}

              <div ref={ofertaDesktopRef} className="relative">
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-[#2b3a32]"
                  aria-expanded={ofertaOpen}
                  aria-controls={ofertaMenuId}
                  aria-haspopup="menu"
                  onClick={() => setOfertaOpen((value) => !value)}
                >
                  Oferta
                  <Chevron open={ofertaOpen} />
                </button>

                {ofertaOpen ? (
                  <div
                    id={ofertaMenuId}
                    role="menu"
                    aria-label="Oferta"
                    className="absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[15.5rem] -translate-x-1/2 rounded-2xl border border-[#3b5249]/10 bg-white py-2 shadow-[0_12px_28px_rgba(31,42,36,0.12)] animate-[fade-up_0.2s_ease-out]"
                  >
                    {ofertaLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        className="block px-4 py-2.5 text-[14px] font-medium text-[#3b5249] transition-colors hover:bg-[#f4efe6] hover:text-[#2b3a32]"
                        onClick={() => setOfertaOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              {navAfterOferta.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[#2b3a32]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full text-[#3b5249] transition-colors hover:bg-[#f4efe6] hover:text-[#2b3a32] md:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              onClick={() =>
                setOpen((value) => {
                  if (value) setOfertaOpen(false);
                  return !value;
                })
              }
            >
              <span className="relative block size-5" aria-hidden>
                <span
                  className={`absolute left-0.5 block h-[1.5px] w-4 rounded-full bg-current transition-transform duration-300 ${
                    open ? "top-[9px] rotate-45" : "top-[5px]"
                  }`}
                />
                <span
                  className={`absolute left-0.5 top-[9px] block h-[1.5px] w-4 rounded-full bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0.5 block h-[1.5px] w-4 rounded-full bg-current transition-transform duration-300 ${
                    open ? "top-[9px] -rotate-45" : "top-[13px]"
                  }`}
                />
              </span>
            </button>
          </div>

          {open ? (
            <nav
              id={panelId}
              className="border-t border-[#3b5249]/10 px-3 pb-4 pt-2 animate-[fade-up_0.28s_ease-out] md:hidden"
            >
              <ul className="flex flex-col">
                {navBeforeOferta.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center rounded-2xl px-3 py-3 font-display text-lg font-semibold tracking-tight text-[#263830] transition-colors hover:bg-[#f4efe6]"
                      onClick={closeAll}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}

                <li>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between rounded-2xl px-3 py-3 font-display text-lg font-semibold tracking-tight text-[#263830] transition-colors hover:bg-[#f4efe6]"
                    aria-expanded={ofertaOpen}
                    aria-controls={`${ofertaMenuId}-mobile`}
                    onClick={() => setOfertaOpen((value) => !value)}
                  >
                    Oferta
                    <Chevron open={ofertaOpen} />
                  </button>

                  {ofertaOpen ? (
                    <ul
                      id={`${ofertaMenuId}-mobile`}
                      className="mb-1 ml-2 space-y-0.5 border-l border-[#3b5249]/15 pl-3"
                    >
                      {ofertaLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="flex items-center rounded-xl px-3 py-2.5 text-[15px] font-medium text-[#3b5249] transition-colors hover:bg-[#f4efe6] hover:text-[#2b3a32]"
                            onClick={closeAll}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>

                {navAfterOferta.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center rounded-2xl px-3 py-3 font-display text-lg font-semibold tracking-tight text-[#263830] transition-colors hover:bg-[#f4efe6]"
                      onClick={closeAll}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </header>
    </>
  );
}
