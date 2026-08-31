"use client";

import Link from "next/link";
import { useState } from "react";
import { cta, nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-sm">
        <div className="mx-auto flex h-[72px] max-w-[1470px] items-center justify-between px-4 sm:px-8 lg:px-14">
          <Link href="/" prefetch className="text-[15px] tracking-tight text-ink">
            {site.name}
          </Link>
          <button
            type="button"
            className="flex items-center gap-3 text-[15px] text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="grid grid-cols-2 gap-[3px]" aria-hidden>
              <i className="block h-1.5 w-1.5 bg-ink" />
              <i className="block h-1.5 w-1.5 bg-ink" />
              <i className="block h-1.5 w-1.5 bg-ink" />
              <i className="block h-1.5 w-1.5 bg-ink" />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-bg px-4 pt-28 sm:px-8 lg:px-14">
          <p className="font-mono text-sm text-muted">Menu / 01–05</p>
          <nav className="mt-10 flex flex-col">
            {[...nav, { href: "/book", label: "Book a call" }].map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-6 border-t border-ink/10 py-6 last:border-b"
              >
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-[clamp(2rem,5vw,4.5rem)]">{item.label}</span>
              </Link>
            ))}
          </nav>
          <Link
            href={cta.primary.href}
            className="mt-10 inline-block text-2xl text-accent"
            onClick={() => setOpen(false)}
          >
            [ {cta.primary.label} ]
          </Link>
        </div>
      ) : null}
    </>
  );
}
