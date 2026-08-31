"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/services";
import { serviceSpine } from "@/lib/site";

export function ServiceBento() {
  const [active, setActive] = useState(0);
  const total = String(services.length).padStart(2, "0");

  return (
    <section id="work" className="relative scroll-mt-24 min-h-svh bg-accent text-white">
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-white/25 lg:block"
        aria-hidden
      />
      <div className="relative px-4 py-20 sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-start justify-between gap-6">
            <p className="font-mono text-sm">
              <span>02</span>
              <span className="text-white/60"> / Selected work</span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/80">
              Active {String(active + 1).padStart(2, "0")} / {total}
            </p>
          </div>

          <div className="mt-10 grid gap-8 border-b border-white/20 pb-12 lg:grid-cols-2 lg:items-end">
            <h2 className="display max-w-[12ch]">Selected work, shaped as systems.</h2>
            <p className="max-w-md text-base leading-7 text-white/80 lg:justify-self-end">
              Product, ads, CRM, and AI — resolved as one connected path to a booked call.
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
                    href={`/services/${s.slug}`}
                    prefetch
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={`grid items-center gap-4 border-b border-white/20 py-7 transition-opacity lg:grid-cols-[1fr_auto_1.15fr] ${
                      on ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <div className="min-h-[1.5rem] lg:pr-8 lg:text-right">
                      {on ? (
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">
                          [ {meta?.meta} ]
                        </p>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-5 lg:justify-center">
                      <p className="text-3xl tracking-tight sm:text-4xl lg:min-w-[12ch] lg:text-right">
                        {s.name}
                      </p>
                      <span className="grid h-9 w-9 shrink-0 place-items-center border border-white font-mono text-[11px]">
                        {n}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4 lg:pl-8">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em]">{meta?.tag}</p>
                        {on ? (
                          <p className="mt-2 max-w-sm text-sm leading-6 text-white/85">{meta?.blurb}</p>
                        ) : null}
                      </div>
                      {on ? (
                        <span className="mt-1 text-lg" aria-hidden>
                          ↗
                        </span>
                      ) : null}
                    </div>
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
