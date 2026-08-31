"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { services } from "@/lib/services";
import { serviceSpine } from "@/lib/site";

export function ServiceBento() {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const total = String(services.length).padStart(2, "0");

  useEffect(() => {
    const nodes = rowRefs.current.filter(Boolean) as HTMLAnchorElement[];
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit) return;
        const i = Number((hit.target as HTMLElement).dataset.offer);
        if (!Number.isNaN(i)) setActive(i);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0.15, 0.4, 0.7] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section id="work" className="relative z-10 -mt-1 scroll-mt-24 pb-28 text-white">
      <div className="px-4 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="sticky top-[76px] z-20 mb-10 flex items-end justify-between gap-6 bg-transparent py-4">
            <p className="font-mono text-sm">
              02<span className="text-white/60"> / Offer</span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/80">
              Active {String(active + 1).padStart(2, "0")} / {total}
            </p>
          </div>

          <ul>
            {services.map((s, i) => {
              const meta = serviceSpine[s.slug];
              const on = i === active;
              const n = String(i + 1).padStart(2, "0");
              return (
                <li key={s.slug}>
                  <Link
                    ref={(el) => {
                      rowRefs.current[i] = el;
                    }}
                    href={`/services/${s.slug}`}
                    prefetch
                    data-offer={i}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="block border-b border-white/20 py-8 first:border-t sm:py-10"
                  >
                    <motion.div
                      animate={{ opacity: on ? 1 : 0.38, x: on ? 0 : -8 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="grid items-center gap-4 lg:grid-cols-[auto_1fr_auto]"
                    >
                      <span className="grid h-10 w-10 place-items-center border border-white/80 font-mono text-[11px]">
                        {n}
                      </span>
                      <div>
                        <p className="text-3xl tracking-tight sm:text-5xl">{s.name}</p>
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">
                          {meta?.tag}
                        </p>
                        <motion.p
                          animate={{ height: on ? "auto" : 0, opacity: on ? 1 : 0 }}
                          className="overflow-hidden text-sm leading-6 text-white/85"
                        >
                          <span className="mt-3 block max-w-xl">{meta?.blurb}</span>
                        </motion.p>
                      </div>
                      <span
                        className={`hidden text-2xl transition-opacity sm:block ${on ? "opacity-100" : "opacity-0"}`}
                        aria-hidden
                      >
                        ↗
                      </span>
                    </motion.div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
