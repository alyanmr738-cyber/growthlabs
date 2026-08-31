"use client";

import Link from "next/link";
import { useState } from "react";
import { cta, nav, site } from "@/lib/site";
import { PillButton } from "@/components/ui/PillButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sky-400/10 bg-[#020617]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" prefetch>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-sky-400/15 ring-1 ring-sky-400/50">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
          </span>
          <span className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <PillButton href={cta.header.href} variant="header" size="sm">
            {cta.header.label}
          </PillButton>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-px w-4 bg-white transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-4 bg-white transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-sky-400/10 bg-[#020617] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className="font-display text-lg font-bold text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <PillButton href={cta.header.href} className="w-full">
              {cta.header.label}
            </PillButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
