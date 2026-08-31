import Image from "next/image";
import Link from "next/link";
import { ghlShowcase } from "@/lib/showcase";

export function WorkShowcase({ compact = false }: { compact?: boolean }) {
  const shots = compact ? ghlShowcase.shots.filter((s) => !("featured" in s && s.featured)).slice(0, 3) : ghlShowcase.shots;

  return (
    <section id="live-work" className="scroll-mt-24 bg-bg px-4 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-sm">
          <span className="text-accent">Work</span>
          <span> / GoHighLevel</span>
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="display max-w-[14ch]">{ghlShowcase.title}</h2>
          <p className="max-w-md text-base leading-7 text-muted">{ghlShowcase.lede}</p>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px bg-ink/10 sm:grid-cols-4">
          {ghlShowcase.stats.map((s) => (
            <div key={s.label} className="bg-bg px-4 py-8 sm:px-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{s.label}</dt>
              <dd className="mt-3 text-4xl tracking-tight text-ink sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className={`mt-16 grid gap-10 ${compact ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {shots.map((shot) => (
            <figure key={shot.src}>
              <div className="overflow-hidden border border-ink/10 bg-card">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  className="h-auto w-full"
                  sizes={compact ? "(min-width: 1024px) 30vw, 100vw" : "(min-width: 1024px) 45vw, 100vw"}
                />
              </div>
              <figcaption className="mt-4 max-w-md text-sm leading-6 text-muted">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>

        {!compact ? (
          <>
            <ol className="mt-20 grid gap-8 border-t border-ink/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
              {ghlShowcase.steps.map((step) => (
                <li key={step.n}>
                  <p className="font-mono text-xs text-accent">{step.n}</p>
                  <h3 className="mt-3 text-xl tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
            <ul className="mt-16 max-w-2xl space-y-3 text-base leading-7 text-dim">
              {ghlShowcase.outcomes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </>
        ) : (
          <div className="mt-12">
            <Link href="/work" prefetch className="inline-flex items-baseline gap-1 text-xl tracking-tight text-ink">
              <span className="font-mono text-accent">[</span>
              See the full case
              <span className="font-mono text-accent">]</span>
            </Link>
          </div>
        )}

        <p className="mt-12 max-w-2xl font-mono text-[11px] leading-5 uppercase tracking-[0.12em] text-faint">
          {ghlShowcase.note}
        </p>
      </div>
    </section>
  );
}
