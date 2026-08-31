import { cta, hero } from "@/lib/site";
import { LiveMeta } from "@/components/funnel/LiveMeta";
import { PillButton } from "@/components/ui/PillButton";

export function Hero() {
  return (
    <section id="signal" className="relative min-h-svh">
      <div className="flex min-h-svh flex-col justify-between px-4 pb-8 pt-28 sm:px-8 lg:px-14">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="font-mono text-sm">
            <span className="text-accent">01</span>
            <span className="text-faint"> / </span>
            <span>Signal</span>
          </p>
          <h1 className="display mt-10 max-w-[16ch] text-ink">{hero.h1}</h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">{hero.lede}</p>
        </div>
        <div className="mx-auto w-full max-w-[1400px]">
          <PillButton href={cta.primary.href}>{cta.primary.label}</PillButton>
          <LiveMeta className="mt-5" />
        </div>
      </div>
    </section>
  );
}
