import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { siteFaq } from "@/lib/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";

export function FaqSection({
  items = siteFaq,
  title = "Common questions",
}: {
  items?: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <Section
      index="Questions"
      title={title}
      body="Short answers. If yours is missing, ask it on the 30-minute call."
    >
      <JsonLd data={faqJsonLd(items)} />
      <div className="max-w-3xl">
        <Accordion items={items} />
      </div>
    </Section>
  );
}
