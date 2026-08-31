import type { Metadata } from "next";
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
        className="pt-28"
        index="01 / Work"
        title="Systems, not mood boards"
        body="These cards are representative installs. Swap in your live numbers when the warm list publishes them."
      >
        <ul>
          {caseStudies.map((c, i) => (
            <li key={c.title} className="grid gap-3 border-t border-ink/10 py-8 last:border-b md:grid-cols-[72px_1fr_1.2fr]">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{c.niche}</p>
                <h2 className="mt-2 text-2xl tracking-tight">{c.title}</h2>
              </div>
              <div>
                <p className="text-lg tracking-tight">{c.result}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <ProofCards />
      <CtaBand />
    </>
  );
}
