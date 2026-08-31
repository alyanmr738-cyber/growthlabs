"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { overlayMenu, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-[72px] max-w-[1470px] items-center justify-between px-4 sm:px-8 lg:px-14">
          <Link
            href="/"
            prefetch
            className={`text-[15px] tracking-tight ${open ? "text-ink/35" : "text-ink"}`}
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>
          <button
            type="button"
            className="flex items-center gap-3 text-[15px] text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? "md:hidden" : undefined}>{open ? "Close" : "Menu"}</span>
            <span className="grid grid-cols-2 gap-[3px]" aria-hidden>
              <i className="block h-1.5 w-1.5 bg-accent" />
              <i className="block h-1.5 w-1.5 bg-accent" />
              <i className="block h-1.5 w-1.5 bg-accent" />
              <i className="block h-1.5 w-1.5 bg-accent" />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-ink/10"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-accent text-white md:w-[min(42vw,34rem)]">
            <div className="flex h-[72px] items-center justify-between px-6 sm:px-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
                ■ Menu / 01–05
              </p>
              <button
                type="button"
                className="text-[15px]"
                onClick={() => setOpen(false)}
              >
                Close ×
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center px-6 sm:px-8">
              {overlayMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between gap-4 border-t border-white/25 py-6 last:border-b"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-white/70">{item.n}</span>
                    <span className="text-[clamp(1.75rem,4vw,3.4rem)] leading-none tracking-tight">
                      {item.label}
                    </span>
                  </span>
                  {item.tag ? (
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-white/70 sm:inline">
                      [{item.tag}]
                    </span>
                  ) : null}
                </Link>
              ))}
            </nav>
            <div className="flex gap-6 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-white/70 sm:px-8">
              <Link href="/privacy" onClick={() => setOpen(false)} className="hover:text-white">
                Privacy
              </Link>
              <span>/</span>
              <Link href="/terms" onClick={() => setOpen(false)} className="hover:text-white">
                Terms
              </Link>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
}
