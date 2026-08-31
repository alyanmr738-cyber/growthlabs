"use client";

import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { services } from "@/lib/services";
import { offerIntro, serviceSpine } from "@/lib/site";
import { ScrollStack, StackSlide } from "@/components/funnel/ScrollStack";

function OfferCard({
  index,
  inverted,
}: {
  index: number;
  inverted?: boolean;
}) {
  const s = services[index];
  const meta = serviceSpine[s.slug];
  const n = String(index + 1).padStart(2, "0");
  return (
    <Link
      href={`/services/${s.slug}`}
      prefetch
      className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14"
    >
      <div className="min-w-0">
        <p className={`font-mono text-[11px] uppercase tracking-[0.16em] ${inverted ? "text-white/70" : "text-muted"}`}>
          [ {meta?.meta} ]
        </p>
        <p className="mt-4 text-4xl tracking-tight sm:text-6xl">{s.name}</p>
      </div>
      <div className="flex items-start gap-5">
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center border font-mono text-xs ${
            inverted ? "border-white" : "border-ink/20 text-accent"
          }`}
        >
          {n}
        </span>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">{meta?.tag}</p>
          <p className={`mt-2 max-w-md text-sm leading-6 ${inverted ? "text-white/85" : "text-muted"}`}>
            {meta?.blurb}
          </p>
        </div>
        <span className="mt-1 text-xl" aria-hidden>
          ↗
        </span>
      </div>
    </Link>
  );
}

export function ServiceBento() {
  const reduce = useReducedMotion();
  const total = String(services.length).padStart(2, "0");

  if (reduce) {
    return (
      <section id="work" className="relative scroll-mt-24 bg-accent py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-14">
          <p className="font-mono text-sm">
            {offerIntro.index.split(" / ")[0]}
            <span className="text-white/60"> / {offerIntro.index.split(" / ")[1]}</span>
          </p>
          <h2 className="display mt-8 max-w-[16ch]">{offerIntro.title}</h2>
          <ul className="mt-16">
            {services.map((s, i) => (
              <li key={s.slug} className="border-t border-white/20 py-8 last:border-b">
                <OfferCard index={i} inverted />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <ScrollStack
      id="work"
      count={services.length}
      className="relative scroll-mt-24 bg-accent text-white"
      header={(active) => (
        <div className="mx-auto w-full max-w-[1400px] px-4 pt-24 sm:px-8 lg:px-14">
          <div className="flex items-start justify-between gap-6">
            <p className="font-mono text-sm">
              {offerIntro.index.split(" / ")[0]}
              <span className="text-white/60"> / {offerIntro.index.split(" / ")[1]}</span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/80">
              Now {String(active + 1).padStart(2, "0")} / {total}
            </p>
          </div>
          <h2 className="display mt-8 max-w-[16ch]">{offerIntro.title}</h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/75 sm:text-base">{offerIntro.body}</p>
        </div>
      )}
    >
      {(active) => (
        <>
          {services.map((s, i) => (
            <StackSlide key={s.slug} index={i} active={active}>
              <OfferCard index={i} inverted />
            </StackSlide>
          ))}
        </>
      )}
    </ScrollStack>
  );
}
