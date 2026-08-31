"use client";

import { useReducedMotion } from "motion/react";
import { aboutLine, aboutSteps, cta } from "@/lib/site";
import { ScrollStack, StackSlide } from "@/components/funnel/ScrollStack";
import { PillButton } from "@/components/ui/PillButton";

function AboutCard({ index }: { index: number }) {
  const step = aboutSteps[index];
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-4 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-14">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1 font-mono text-sm text-accent">
          [<i className="mx-1.5 inline-block h-2.5 w-2.5 bg-accent" />]
        </span>
        <span className="grid h-11 w-11 place-items-center bg-accent font-mono text-xs text-white">
          {step.n}
        </span>
      </div>
      <div className="max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{step.label}</p>
        <h3 className="mt-3 text-4xl tracking-tight sm:text-5xl">{step.title}</h3>
        <p className="mt-4 text-base leading-7 text-muted">{step.body}</p>
      </div>
    </div>
  );
}

export function AboutLine() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section id="about" className="scroll-mt-24 bg-bg px-4 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-sm">
            <span className="text-accent">04</span>
            <span> / About</span>
          </p>
          <h2 className="display mt-8 max-w-[14ch]">{aboutLine.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">{aboutLine.body}</p>
          <ul className="mt-16">
            {aboutSteps.map((step, i) => (
              <li key={step.n} className="border-t border-ink/10 py-10 last:border-b">
                <AboutCard index={i} />
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <PillButton href={cta.primary.href}>{cta.header.label}</PillButton>
          </div>
        </div>
      </section>
    );
  }

  return (
    <ScrollStack
      id="about"
      count={aboutSteps.length}
      className="relative scroll-mt-24 bg-bg text-ink"
      header={() => (
        <div className="mx-auto w-full max-w-[1400px] px-4 pt-24 sm:px-8 lg:px-14">
          <p className="font-mono text-sm">
            <span className="text-accent">04</span>
            <span> / About</span>
          </p>
          <h2 className="display mt-8 max-w-[14ch]">{aboutLine.title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base">{aboutLine.body}</p>
        </div>
      )}
    >
      {(active) => (
        <>
          {aboutSteps.map((step, i) => (
            <StackSlide key={step.n} index={i} active={active}>
              <AboutCard index={i} />
            </StackSlide>
          ))}
        </>
      )}
    </ScrollStack>
  );
}
