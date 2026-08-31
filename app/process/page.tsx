import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/GlowCard";
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
        eyebrow="Process"
        title="Discovery to launch — without open-ended hourly fog"
        body="Most installs finish in two to four weeks. Complex AI voice and offline conversion work can take a little longer. You get a written scope before we start."
      >
        <ol className="space-y-4">
          {processStages.map((stage, i) => (
            <li key={stage.title}>
              <GlowCard className="p-7 sm:flex sm:items-start sm:gap-8">
                <p className="font-display text-3xl font-black text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2 className="font-display text-2xl font-extrabold text-white">{stage.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted sm:text-base">{stage.body}</p>
                </div>
              </GlowCard>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand />
    </>
  );
}
