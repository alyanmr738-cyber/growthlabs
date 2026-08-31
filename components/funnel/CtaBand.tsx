import { tickerItems } from "@/lib/proof";
import { PillButton } from "@/components/ui/PillButton";
import { cta } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-card px-6 py-14 text-center glow-border sm:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Ready to get started?</p>
        <h2 className="mt-4 font-display text-3xl font-black text-white sm:text-5xl">
          Let’s install the engine.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Thirty minutes. We look at how leads enter today and whether a Growth Map or a full install is the next step.
        </p>
        <div className="mt-8 flex justify-center">
          <PillButton href={cta.primary.href} size="lg">
            {cta.primary.label}
            <span aria-hidden>→</span>
          </PillButton>
        </div>
      </div>
      <div className="mt-10 overflow-hidden">
        <div className="ticker-track flex w-max gap-16 pr-16">
          {[...tickerItems, ...tickerItems].map((line, i) => (
            <p
              key={`${line}-${i}`}
              className="font-display text-lg font-black italic uppercase tracking-wide text-white/85"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
