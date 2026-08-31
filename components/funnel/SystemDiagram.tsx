import { practice, practiceSplit } from "@/lib/site";

export function SystemDiagram() {
  return (
    <section id="practice" className="scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-start justify-between gap-6">
          <p className="font-mono text-sm">
            <span className="text-accent">03</span>
            <span> / Practice / System</span>
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:block">
            In focus · Surface / System
          </p>
        </div>

        <div className="mt-10 grid gap-8 border-b border-ink/10 pb-12 lg:grid-cols-2 lg:items-end">
          <h2 className="display max-w-[14ch]">Surface is what people see. System is what makes it book.</h2>
          <p className="max-w-md text-base leading-7 text-muted lg:justify-self-end">
            We shape both: the visible funnel and the operating logic behind it.
          </p>
        </div>

        <ul className="relative">
          <div
            className="pointer-events-none absolute bottom-0 top-0 left-1/2 hidden w-px -translate-x-1/2 bg-accent/40 lg:block"
            aria-hidden
          />
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

        <div className="relative mt-4 grid gap-8 py-12 lg:grid-cols-2">
          <div
            className="pointer-events-none absolute bottom-0 top-0 left-1/2 hidden w-px -translate-x-1/2 bg-accent lg:block"
            aria-hidden
          />
          <div className="lg:pr-12 lg:text-right">
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
          <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 font-mono text-xs text-accent lg:inline">
            [ <i className="mx-0.5 inline-block h-2 w-2 bg-accent align-middle" /> ]
          </span>
        </div>
      </div>
    </section>
  );
}
