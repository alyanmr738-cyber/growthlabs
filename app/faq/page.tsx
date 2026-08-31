import type { Metadata } from "next";
import { FaqSection } from "@/components/funnel/FaqSection";
import { CtaBand } from "@/components/funnel/CtaBand";
import { services } from "@/lib/services";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Growth Labs services: GoHighLevel, automations, AI chat and voice, Google Ads, GTM, and Meta Ads.",
};

export default function FaqPage() {
  return (
    <>
      <FaqSection title="Site-wide questions" />
      {services.map((s) => (
        <Section key={s.slug} eyebrow={s.name} title={`${s.name} FAQ`} className="pt-4">
          <div className="mx-auto max-w-3xl">
            <Accordion items={s.faq} />
          </div>
        </Section>
      ))}
      <CtaBand />
    </>
  );
}
