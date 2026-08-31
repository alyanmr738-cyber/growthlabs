import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/GlowCard";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/funnel/CtaBand";
import { ProofCards } from "@/components/funnel/ProofCards";
import { caseStudies } from "@/lib/proof";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Example Growth Labs engagements: clinic lead engines, home services pipelines, and coaching funnels across ads, GTM, and GoHighLevel.",
};

export default function WorkPage() {
  return (
    <>
      <Section
        eyebrow="Work"
        title="Systems, not mood boards"
        body="These cards are representative installs. Swap in your live numbers when the warm list publishes them."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {caseStudies.map((c) => (
            <GlowCard key={c.title} className="p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{c.niche}</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-white">{c.title}</h2>
              <div className="mt-4 rounded-2xl bg-black/35 px-4 py-3">
                <p className="font-display text-sm font-bold italic text-white">{c.result}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{c.body}</p>
            </GlowCard>
          ))}
        </div>
      </Section>
      <ProofCards />
      <CtaBand />
    </>
  );
}
