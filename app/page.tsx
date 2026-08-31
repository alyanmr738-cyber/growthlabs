import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/funnel/Hero";
import { Marquee } from "@/components/funnel/Marquee";
import { ThreeSteps } from "@/components/funnel/ThreeSteps";
import { SystemDiagram } from "@/components/funnel/SystemDiagram";
import { ServiceBento } from "@/components/funnel/ServiceBento";
import { AboutLine } from "@/components/funnel/AboutLine";
import { ProofCards } from "@/components/funnel/ProofCards";
import { FaqSection } from "@/components/funnel/FaqSection";
import { CtaBand } from "@/components/funnel/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { orgJsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <JsonLd data={orgJsonLd()} />
      <Hero />
      <Marquee />
      <FadeIn>
        <ThreeSteps />
      </FadeIn>
      <ServiceBento />
      <FadeIn>
        <SystemDiagram />
      </FadeIn>
      <AboutLine />
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
