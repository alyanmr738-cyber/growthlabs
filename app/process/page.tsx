import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/funnel/CtaBand";
import { processStages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Growth Labs installs ads, GTM, GoHighLevel, automations, and AI: discovery, architecture, build, testing, launch.",
};

export default function ProcessPage() {
  return (
    <>
      <Section
        className="pt-28"
        index="01 / Process"
        title="Discovery to launch — without open-ended hourly fog"
        body="Most installs finish in two to four weeks. Complex AI voice and offline conversion work can take a little longer. You get a written scope before we start."
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
