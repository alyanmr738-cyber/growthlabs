import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/funnel/Hero";
import { Marquee } from "@/components/funnel/Marquee";
import { ThreeSteps } from "@/components/funnel/ThreeSteps";
import { SystemDiagram } from "@/components/funnel/SystemDiagram";
import { ServiceBento } from "@/components/funnel/ServiceBento";
import { ProofCards } from "@/components/funnel/ProofCards";
import { FaqSection } from "@/components/funnel/FaqSection";
import { CtaBand } from "@/components/funnel/CtaBand";
import { StatCard } from "@/components/ui/StatCard";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { orgJsonLd } from "@/lib/jsonld";
import { stats } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={orgJsonLd()} />
      <Hero />
      <Marquee />
      <FadeIn>
        <Section
          eyebrow="The numbers that matter"
          title="Speed, coverage, one stack"
          body="Placeholders until your live metrics drop in. The promise stays the same."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </Section>
      </FadeIn>
      <FadeIn>
        <ThreeSteps />
      </FadeIn>
      <FadeIn>
        <SystemDiagram />
      </FadeIn>
      <FadeIn>
        <ServiceBento />
      </FadeIn>
      <FadeIn>
        <ProofCards />
      </FadeIn>
      <FadeIn>
        <FaqSection />
      </FadeIn>
      <FadeIn>
        <CtaBand />
      </FadeIn>
    </>
  );
}
