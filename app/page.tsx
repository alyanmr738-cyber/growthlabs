import { Hero } from "@/components/funnel/Hero";
import { ThreeSteps } from "@/components/funnel/ThreeSteps";
import { ServiceBento } from "@/components/funnel/ServiceBento";
import { ProofCards } from "@/components/funnel/ProofCards";
import { FaqSection } from "@/components/funnel/FaqSection";
import { CtaBand } from "@/components/funnel/CtaBand";
import { ChapterNav } from "@/components/funnel/ChapterNav";
import { JsonLd } from "@/components/seo/JsonLd";
import { orgJsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <JsonLd data={orgJsonLd()} />
      <ChapterNav />
      <Hero />
      <ServiceBento />
      <ThreeSteps />
      <ProofCards />
      <FaqSection />
      <CtaBand />
    </>
  );
}
