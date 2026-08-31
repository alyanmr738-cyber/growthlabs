import { cta, hero } from "@/lib/site";
import { LiveMeta } from "@/components/funnel/LiveMeta";
import { PillButton } from "@/components/ui/PillButton";

function HeroCopy({ tone }: { tone: "ink" | "white" }) {
  const ink = tone === "ink";
  return (
    <>
      <p className="font-mono text-sm">
        <span className={ink ? "text-accent" : "text-white"}>01</span>
        <span className={ink ? "text-faint" : "text-white/70"}> / </span>
        <span className={ink ? "text-ink" : "text-white"}>Signal</span>
      </p>
      <h1 className={`display mt-10 max-w-[16ch] ${ink ? "text-ink" : "text-white"}`}>{hero.h1}</h1>
      <p className={`mt-8 max-w-xl text-base leading-7 sm:text-lg ${ink ? "text-muted" : "text-white"}`}>
        {hero.lede}
      </p>
    </>
  );
}

export function Hero() {
  return (
    <section id="signal" className="relative min-h-svh overflow-hidden">
      <div className="rail pointer-events-none absolute inset-y-0 z-0 bg-accent" />

      <div className="relative z-10 flex min-h-svh flex-col justify-between px-4 pb-8 pt-28 sm:px-8 lg:px-14">
        <div className="mx-auto w-full max-w-[1400px]">
          <HeroCopy tone="ink" />
          <div className="mt-12">
            <PillButton href={cta.primary.href}>{cta.primary.label}</PillButton>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1400px]">
          <LiveMeta />
        </div>
      </div>

      <div aria-hidden className="knockout-clip pointer-events-none absolute inset-0 z-20">
        <div className="px-4 pt-28 sm:px-8 lg:px-14">
          <div className="mx-auto w-full max-w-[1400px]">
            <HeroCopy tone="white" />
          </div>
        </div>
      </div>
    </section>
  );
}
