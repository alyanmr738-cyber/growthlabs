import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { Section } from "@/components/ui/Section";
import { steps } from "@/lib/site";

export function ThreeSteps() {
  return (
    <Section
      id="steps"
      eyebrow="Want in?"
      title="Here’s our 3-step process"
      body="A short ladder — not a 14-item menu. See the map, get on a call, then we install the engine."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <GlowCard key={step.n} className="flex flex-col p-7 sm:p-8">
            <p className="font-display text-sm font-extrabold text-accent">{step.n}</p>
            <h3 className="mt-3 font-display text-2xl font-extrabold text-white">{step.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">{step.body}</p>
          </GlowCard>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link href="/book" prefetch className="text-sm font-semibold text-accent hover:underline">
          Ready? Book the strategy call →
        </Link>
      </p>
    </Section>
  );
}
