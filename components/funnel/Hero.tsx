import { cta, hero, promises } from "@/lib/site";
import { LiveMeta } from "@/components/funnel/LiveMeta";
import { PillButton } from "@/components/ui/PillButton";

export function Hero() {
  return (
    <section id="signal" className="relative min-h-svh scroll-mt-24">
      <div className="flex min-h-svh flex-col justify-between px-4 pb-8 pt-28 sm:px-8 lg:px-14">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="font-mono text-sm">
            <span className="text-accent">01</span>
            <span className="text-faint"> / </span>
            <span>{hero.kicker}</span>
          </p>
          <h1 className="display mt-10 max-w-[14ch] text-ink">{hero.h1}</h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg">{hero.lede}</p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-10">
            <PillButton href={cta.primary.href}>{cta.primary.label}</PillButton>
            <PillButton href={cta.secondary.href} variant="ghost">
              {cta.secondary.label}
            </PillButton>
          </div>
          <ul className="mt-16 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3">
            {promises.map((item) => (
              <li key={item.title}>
                <p className="text-lg tracking-tight">{item.title}</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-[1400px] pt-10">
          <LiveMeta />
        </div>
      </div>
    </section>
  );
}
