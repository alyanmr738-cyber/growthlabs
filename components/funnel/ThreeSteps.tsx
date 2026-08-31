"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cta, steps } from "@/lib/site";

export function ThreeSteps() {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = rowRefs.current.filter(Boolean) as HTMLLIElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit) return;
        const i = Number((hit.target as HTMLElement).dataset.step);
        if (!Number.isNaN(i)) setActive(i);
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0.2, 0.55] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section id="join" className="relative z-20 scroll-mt-24 bg-bg px-4 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-sm">
          <span className="text-accent">03</span>
          <span> / How it helps</span>
        </p>
        <h2 className="display mt-8 max-w-[16ch]">Three moves. Then the calendar fills.</h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
          You do not pick from a menu of tools. You walk a short path: see the leak, agree the
          install, then we build the engine inside your accounts.
        </p>

        <div className="relative mt-20">
          <div className="absolute bottom-8 top-8 left-[18px] w-px bg-ink/15 sm:left-[21px]" aria-hidden />
          <ol>
            {steps.map((step, i) => {
              const on = i === active;
              return (
                <li
                  key={step.n}
                  ref={(el) => {
                    rowRefs.current[i] = el;
                  }}
                  data-step={i}
                  className="relative min-h-[70svh] py-10 sm:min-h-[60svh]"
                >
                  <div className="flex gap-6 sm:gap-10">
                    <div className="relative z-10 mt-1 h-10 w-10 shrink-0">
                      {on ? (
                        <motion.span
                          layoutId="process-marker"
                          className="absolute inset-0 bg-accent"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : (
                        <span className="absolute inset-0 border border-ink/20 bg-bg" />
                      )}
                      <span
                        className={`relative grid h-10 w-10 place-items-center font-mono text-xs ${
                          on ? "text-white" : "text-muted"
                        }`}
                      >
                        {step.n}
                      </span>
                    </div>
                    <motion.div
                      animate={{ opacity: on ? 1 : 0.4, y: on ? 0 : 12 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="max-w-2xl pb-16"
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                        {step.label}
                      </p>
                      <h3 className="mt-4 text-4xl tracking-tight sm:text-6xl">{step.title}</h3>
                      <p className="mt-5 max-w-lg text-base leading-7 text-muted">{step.body}</p>
                      <p className="mt-6 text-sm text-dim">{step.tip}</p>
                      <Link
                        href={step.href}
                        prefetch
                        className="mt-8 inline-flex items-baseline gap-1 text-lg text-ink"
                      >
                        <span className="font-mono text-accent">[</span>
                        {step.cta}
                        <span className="font-mono text-accent">]</span>
                      </Link>
                    </motion.div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-start justify-between gap-6 bg-accent px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10"
        >
          <p className="text-2xl tracking-tight sm:text-3xl">Ready to get started? Let’s go.</p>
          <Link
            href={cta.primary.href}
            prefetch
            className="inline-flex items-baseline gap-1 text-lg"
          >
            <span className="font-mono">[</span>
            {cta.primary.label}
            <span className="font-mono">]</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
