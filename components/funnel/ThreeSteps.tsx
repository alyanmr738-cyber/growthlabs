import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { steps } from "@/lib/site";

export function ThreeSteps() {
  return (
    <Section
      id="steps"
      index="03 / Process"
      title="Here’s our 3-step process"
      body="A short ladder — not a 14-item menu. See the map, get on a call, then we install the engine."
    >
      <ol>
        {steps.map((step) => (
          <li key={step.n} className="grid grid-cols-[48px_1fr] gap-6 border-t border-ink/10 py-8 last:border-b md:grid-cols-[72px_220px_1fr]">
            <span className="grid h-8 w-8 place-items-center border border-ink/20 font-mono text-xs text-accent">
              {step.n}
            </span>
            <h3 className="text-2xl tracking-tight">{step.title}</h3>
            <p className="text-sm leading-7 text-muted md:text-base">{step.body}</p>
          </li>
        ))}
      </ol>
      <Link href="/book" prefetch className="mt-10 inline-block text-xl text-accent">
        [ Ready? Book the strategy call ]
      </Link>
    </Section>
  );
}
