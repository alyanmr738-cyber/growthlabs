import Link from "next/link";
import { cta, processIntro, steps } from "@/lib/site";

export function ThreeSteps() {
  return (
    <section id="join" className="scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center">
          <p className="rounded-full bg-accent px-6 py-3 text-center text-sm text-white sm:px-8 sm:text-base">
            Want more booked calls? Here’s how we start.
          </p>
          <div className="h-12 w-px bg-ink/15" aria-hidden />
        </div>

        <header className="mb-4 max-w-2xl">
          <h2 className="display max-w-[14ch]">{processIntro.title}</h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{processIntro.body}</p>
        </header>

        <ol className="grid border-y border-ink/10 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.n}
              className={`flex flex-col border-ink/10 px-0 py-10 md:px-8 md:py-14 ${
                i < steps.length - 1 ? "md:border-r" : ""
              } ${i > 0 ? "border-t md:border-t-0" : ""}`}
            >
              <span className="inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {step.label}
              </span>
              <div className="mt-6 flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center bg-accent font-mono text-xs text-white">
                  {step.n}
                </span>
                <h3 className="text-3xl tracking-tight sm:text-4xl">{step.title}</h3>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-muted sm:text-base">{step.body}</p>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent text-[11px] text-white">
                  ?
                </span>
                {step.tip}
              </p>
              <Link
                href={step.href}
                prefetch
                className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:opacity-80"
              >
                {step.cta}
                <span aria-hidden>›</span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-full bg-accent px-6 py-4 text-white sm:flex-row sm:items-center sm:px-8">
          <p className="text-lg tracking-tight sm:text-xl">
            <span className="font-medium">Ready?</span> Book a 30-minute call.
          </p>
          <Link
            href={cta.primary.href}
            prefetch
            className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm text-accent sm:px-8"
          >
            {cta.primary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
