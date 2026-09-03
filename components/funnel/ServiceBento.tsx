"use client";

import Link from "next/link";
import { motion, motionValue, useMotionTemplate, useMotionValueEvent, useReducedMotion, useTransform } from "motion/react";
import { useState } from "react";
import { services } from "@/lib/services";
import { offerIntro, serviceSpine } from "@/lib/site";
import { ScrollStack, StackSlide, useStackProgress } from "@/components/funnel/ScrollStack";

const idleProgress = motionValue(0);

function OfferCard({
  index,
  inverted,
  large,
}: {
  index: number;
  inverted?: boolean;
  large?: boolean;
}) {
  const s = services[index];
  const meta = serviceSpine[s.slug];
  const n = String(index + 1).padStart(2, "0");
  return (
    <Link
      href={`/services/${s.slug}`}
      prefetch
      className="mx-auto flex w-full max-w-[1470px] flex-col gap-6 px-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14"
    >
      <div className="min-w-0">
        <p className={`font-mono text-[11px] uppercase tracking-[0.16em] ${inverted ? "text-white/70" : "text-muted"}`}>
          [ {meta?.meta} ]
        </p>
        <p
          className={`mt-4 tracking-tight transition-[font-size] duration-500 ${
            large ? "text-5xl sm:text-7xl" : "text-4xl sm:text-6xl"
          }`}
        >
          {s.name}
        </p>
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

function GrowingOffer({ index }: { index: number }) {
  const progress = useStackProgress() ?? idleProgress;
  const [large, setLarge] = useState(false);

  useMotionValueEvent(progress, "change", (v) => {
    const next = v > 0.06;
    setLarge((prev) => (prev === next ? prev : next));
  });

  return <OfferCard index={index} inverted large={large} />;
}

function OfferIntro({ active, total }: { active: number; total: string }) {
  const progress = useStackProgress() ?? idleProgress;
  const padTop = useTransform(progress, [0, 0.1], [56, 28]);
  const cap = useTransform(progress, [0, 0.1], [6.4, 1.75]);
  const titleSize = useMotionTemplate`min(clamp(2.5rem, 7.2vw, 6.4rem), ${cap}rem)`;
  const titleMargin = useTransform(progress, [0, 0.1], [24, 8]);
  const bodyOpacity = useTransform(progress, [0, 0.06], [1, 0]);
  const bodyMax = useTransform(progress, [0, 0.08], [72, 0]);
  const bodyMargin = useTransform(progress, [0, 0.08], [12, 0]);

  return (
    <motion.div
      className="mx-auto w-full max-w-[1470px] shrink-0 px-4 sm:px-8 lg:px-14"
      style={{ paddingTop: padTop }}
    >
      <div className="flex items-baseline justify-between gap-6">
        <p className="font-mono text-sm">
          {offerIntro.index.split(" / ")[0]}
          <span className="text-white/60"> / {offerIntro.index.split(" / ")[1]}</span>
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/80">
          Now {String(active + 1).padStart(2, "0")} / {total}
        </p>
      </div>
      <motion.h2
        className="max-w-[16ch] font-medium tracking-tight"
        style={{ fontSize: titleSize, marginTop: titleMargin, lineHeight: 0.95, letterSpacing: "-0.045em" }}
      >
        {offerIntro.title}
      </motion.h2>
      <motion.p
        className="max-w-lg overflow-hidden text-sm leading-6 text-white/75 sm:text-base"
        style={{ opacity: bodyOpacity, maxHeight: bodyMax, marginTop: bodyMargin }}
      >
        {offerIntro.body}
      </motion.p>
    </motion.div>
  );
}

export function ServiceBento() {
  const reduce = useReducedMotion();
  const total = String(services.length).padStart(2, "0");

  if (reduce) {
    return (
      <section id="work" className="relative scroll-mt-24 bg-accent py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1470px] px-4 sm:px-8 lg:px-14">
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
      hideHeader
      className="relative scroll-mt-24 bg-accent text-white"
      header={(active) => <OfferIntro active={active} total={total} />}
    >
      {(active) => (
        <>
          {services.map((s, i) => (
            <StackSlide key={s.slug} index={i} active={active} align="start" className="pt-8 sm:pt-10">
              <GrowingOffer index={i} />
            </StackSlide>
          ))}
        </>
      )}
    </ScrollStack>
  );
}
