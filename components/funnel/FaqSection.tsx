import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { siteFaq } from "@/lib/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";

export function FaqSection({
  items = siteFaq,
  title = "Frequently asked questions",
}: {
  items?: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <Section eyebrow="FAQ" title={title} body="Straight answers. If yours is missing, the strategy call is the place.">
      <JsonLd data={faqJsonLd(items)} />
      <div className="mx-auto max-w-3xl">
        <Accordion items={items} />
      </div>
    </Section>
  );
}
