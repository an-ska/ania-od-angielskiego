"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#oferta", label: "Oferta" },
  { href: "#lekcje", label: "Lekcje" },
  { href: "#opinie", label: "Opinie" },
  { href: "#cennik", label: "Cennik" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
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
          onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
            >
              {siteConfig.name}
            </Link>

            <nav className="hidden items-center gap-7 text-[15px] font-medium text-[#3b5249] md:flex">
              {navLinks.map((link) => (
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
              className="flex size-10 items-center justify-center rounded-full text-[#3b5249] transition-colors hover:bg-[#f4efe6] hover:text-[#2b3a32] md:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              onClick={() => setOpen((value) => !value)}
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
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center rounded-2xl px-3 py-3 font-display text-lg font-semibold tracking-tight text-[#263830] transition-colors hover:bg-[#f4efe6]"
                      onClick={() => setOpen(false)}
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
