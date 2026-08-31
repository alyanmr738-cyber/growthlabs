"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { overlayMenu } from "@/lib/site";
import { BrandLogo } from "@/components/brand/BrandLogo";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = 72;
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + window.scrollY - header;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, end);
    return;
  }
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  const duration = Math.min(1400, Math.max(700, Math.abs(end - start) * 0.55));
  const t0 = performance.now();
  const frame = (now: number) => {
    const t = Math.min(1, (now - t0) / duration);
    window.scrollTo(0, start + (end - start) * easeInOutCubic(t));
    if (t < 1) requestAnimationFrame(frame);
    else root.style.scrollBehavior = prev;
  };
  requestAnimationFrame(frame);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string, event: MouseEvent<HTMLAnchorElement>) => {
    const hash = href.includes("#") ? href.split("#")[1] : "";
    const onHome = pathname === "/";
    if (!hash || !onHome) {
      setOpen(false);
      return;
    }
    event.preventDefault();
    setOpen(false);
    window.history.pushState(null, "", `#${hash}`);
    window.setTimeout(() => smoothScrollTo(hash), 420);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-[72px] max-w-[1470px] items-center justify-between px-4 sm:px-8 lg:px-14">
          <Link
            href="/"
            prefetch
            className={`flex items-center transition-opacity duration-300 ${open ? "opacity-35" : "opacity-100"}`}
            onClick={() => setOpen(false)}
          >
            <BrandLogo preload className="h-[22px]" />
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

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              key="menu-backdrop"
              type="button"
              className="fixed inset-0 z-40 cursor-default bg-ink/20"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="menu-panel"
              className="fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-accent text-white md:w-[min(42vw,34rem)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 34, mass: 0.85 }}
            >
              <div className="flex h-[72px] shrink-0 items-center justify-between px-6 sm:px-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em]">■ Menu / 01–05</p>
                <button type="button" className="text-[15px]" onClick={() => setOpen(false)}>
                  Close ×
                </button>
              </div>
              <nav className="flex flex-1 flex-col justify-center overflow-y-auto overscroll-contain px-6 sm:px-8">
                {overlayMenu.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.12 + i * 0.05,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={i === overlayMenu.length - 1 ? "border-b border-white/25" : undefined}
                  >
                    <Link
                      href={item.href}
                      prefetch
                      onClick={(event) => go(item.href, event)}
                      className="flex items-baseline justify-between gap-4 border-t border-white/25 py-6"
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
                  </motion.div>
                ))}
              </nav>
              <div className="flex shrink-0 gap-6 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-white/70 sm:px-8">
                <Link href="/privacy" onClick={() => setOpen(false)} className="hover:text-white">
                  Privacy
                </Link>
                <span>/</span>
                <Link href="/terms" onClick={() => setOpen(false)} className="hover:text-white">
                  Terms
                </Link>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
