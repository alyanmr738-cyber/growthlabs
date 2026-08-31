import { practice, practiceIntro, practiceSplit } from "@/lib/site";

export function SystemDiagram() {
  return (
    <section id="practice" className="scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-start justify-between gap-6">
          <p className="font-mono text-sm">
            <span className="text-accent">{practiceIntro.index.split(" / ")[0]}</span>
            <span> / {practiceIntro.index.split(" / ").slice(1).join(" / ")}</span>
          </p>
        </div>

        <div className="mt-10 grid gap-8 border-b border-ink/10 pb-12 lg:grid-cols-2 lg:items-end">
          <h2 className="display max-w-[16ch]">{practiceIntro.title}</h2>
          <p className="max-w-md text-base leading-7 text-muted lg:justify-self-end">{practiceIntro.body}</p>
        </div>

        <ul>
          {practice.map((item) => (
            <li
              key={item.n}
              className="grid items-center gap-4 border-b border-ink/10 py-8 lg:grid-cols-[1fr_auto_1fr]"
            >
              <h3 className="text-3xl tracking-tight lg:pr-10 lg:text-right">{item.title}</h3>
              <span className="grid h-9 w-9 place-items-center bg-accent font-mono text-xs text-white">
                {item.n}
              </span>
              <p className="max-w-md text-sm leading-7 text-muted lg:pl-10">{item.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-4 grid gap-8 py-12 lg:grid-cols-2">
          <div className="lg:pr-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {practiceSplit.surface.label}
            </p>
            <p className="mt-3 text-base leading-7 text-dim">{practiceSplit.surface.body}</p>
          </div>
          <div className="lg:pl-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {practiceSplit.system.label}
            </p>
            <p className="mt-3 text-base leading-7 text-dim">{practiceSplit.system.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
