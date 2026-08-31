"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { cta, hero } from "@/lib/site";
import { LiveMeta } from "@/components/funnel/LiveMeta";
import Link from "next/link";

function HeroCopy({ tone }: { tone: "ink" | "white" }) {
  const ink = tone === "ink";
  return (
    <div className="flex min-h-svh flex-col justify-between px-4 pb-8 pt-28 sm:px-8 lg:px-14">
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="font-mono text-sm">
          <span className={ink ? "text-accent" : "text-white"}>01</span>
          <span className={ink ? "text-faint" : "text-white/70"}> / </span>
          <span className={ink ? "text-ink" : "text-white"}>Signal</span>
        </p>
        <h1 className={`display mt-10 max-w-[16ch] ${ink ? "text-ink" : "text-white"}`}>{hero.h1}</h1>
        <p className={`mt-8 max-w-xl text-base leading-7 sm:text-lg ${ink ? "text-muted" : "text-white"}`}>
          {hero.lede}
        </p>
      </div>
      <div className="mx-auto w-full max-w-[1400px]">
        <Link
          href={cta.primary.href}
          prefetch
          className={`inline-flex items-baseline gap-1 text-xl tracking-tight sm:text-2xl ${
            ink ? "text-ink" : "text-white"
          }`}
        >
          <span className={`font-mono text-[0.7em] ${ink ? "text-accent" : "text-white"}`}>[</span>
          {cta.primary.label}
          <span className={`font-mono text-[0.7em] ${ink ? "text-accent" : "text-white"}`}>]</span>
        </Link>
        <LiveMeta inverted={!ink} className="mt-5" />
      </div>
    </div>
  );
}

function railAt(progress: number) {
  const w = typeof window === "undefined" ? 1440 : window.innerWidth;
  const startLeft = w >= 768 ? Math.max(24, w * 0.18) : Math.max(14, w * 0.12);
  const startWidth = w >= 768 ? 92 : 44;
  const t = Math.min(1, Math.max(0, (progress - 0.08) / 0.42));
  const e = 1 - (1 - t) ** 3;
  return {
    left: startLeft * (1 - e),
    width: startWidth + (w + 4 - startWidth) * e,
  };
}

export function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.35 });

  const railLeft = useTransform(smooth, (p) => railAt(p).left);
  const railWidth = useTransform(smooth, (p) => railAt(p).width);
  const knockoutX = useTransform(railLeft, (v) => -v);
  const heroShift = useTransform(smooth, [0, 0.5], [0, -28]);
  const heroFade = useTransform(smooth, [0.28, 0.52], [1, 0]);
  const offerFade = useTransform(smooth, [0.38, 0.55], [0, 1]);
  const scrollCue = useTransform(smooth, [0, 0.1], [1, 0]);

  useMotionValueEvent(smooth, "change", (v) => {
    document.body.dataset.rail = v > 0.3 ? "1" : "0";
  });

  useEffect(() => {
    return () => {
      delete document.body.dataset.rail;
    };
  }, []);

  if (reduce) {
    return (
      <section id="signal" className="relative min-h-svh">
        <div className="rail pointer-events-none absolute inset-y-0 bg-accent" />
        <div className="relative z-10">
          <HeroCopy tone="ink" />
        </div>
      </section>
    );
  }

  return (
    <section id="signal" ref={trackRef} className="relative h-[220vh]">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-y-0 z-[1] bg-accent"
        style={{ left: railLeft, width: railWidth }}
      />

      <div className="sticky top-0 z-10 h-svh overflow-hidden">
        <motion.div style={{ opacity: heroFade, y: heroShift }} className="relative">
          <HeroCopy tone="ink" />
          <motion.div
            className="pointer-events-none absolute top-0 bottom-0 z-20 overflow-hidden"
            style={{ left: railLeft, width: railWidth }}
          >
            <motion.div style={{ x: knockoutX }}>
              <HeroCopy tone="white" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: offerFade }}
          className="pointer-events-none absolute inset-0 z-30 flex min-h-svh flex-col justify-between px-4 py-28 text-white sm:px-8 lg:px-14"
        >
          <div className="mx-auto w-full max-w-[1400px]">
            <p className="font-mono text-sm">
              02<span className="text-white/60"> / Offer</span>
            </p>
            <h2 className="display mt-10 max-w-[14ch]">What we sell is a booking engine.</h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
              Ads bring the lead. Tracking tells the truth. GoHighLevel, automations, and AI book the
              call — so nothing sits in a contact list overnight.
            </p>
          </div>
          <p className="mx-auto w-full max-w-[1400px] font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
            Keep scrolling — walk the stack
          </p>
        </motion.div>

        <motion.p
          style={{ opacity: scrollCue }}
          className="pointer-events-none absolute bottom-8 right-8 hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted md:block"
        >
          Scroll
        </motion.p>
      </div>
    </section>
  );
}
