import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/funnel/CtaBand";
import { processStages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description: "How Growth Labs starts: we find where leads drop, agree the plan, then build it in your accounts.",
};

export default function ProcessPage() {
  return (
    <>
      <Section
        className="pt-28"
        index="01 / Process"
        title="From first call to a working setup — usually two to four weeks"
        body="You get a written plan before we touch anything. Most work happens in your own Google, Facebook, and GoHighLevel accounts."
      >
        <ol>
          {processStages.map((stage, i) => (
            <li key={stage.title} className="grid gap-3 border-t border-ink/10 py-8 last:border-b md:grid-cols-[72px_240px_1fr]">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="text-2xl tracking-tight">{stage.title}</h2>
              <p className="text-sm leading-7 text-muted sm:text-base">{stage.body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand />
    </>
  );
}
