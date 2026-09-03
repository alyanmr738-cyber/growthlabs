import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { siteFaq } from "@/lib/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";

export function FaqSection({
  items = siteFaq,
  title = "Common questions",
  showAllLink = true,
}: {
  items?: { q: string; a: string }[];
  title?: string;
  showAllLink?: boolean;
}) {
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  return (
    <Section
      index="Questions"
      title={title}
      body="Short answers. If yours is missing, ask it on the 30-minute call — or browse the full FAQ."
    >
      <JsonLd data={faqJsonLd(items)} />
      <div className="grid gap-x-12 gap-y-0 lg:grid-cols-2">
        <Accordion items={left} />
        <Accordion items={right} start={left.length} />
      </div>
      {showAllLink ? (
        <div className="mt-10">
          <Link href="/faq" prefetch className="inline-flex items-baseline gap-1 text-xl tracking-tight text-ink">
            <span className="font-mono text-accent">[</span>
            All questions
            <span className="font-mono text-accent">]</span>
          </Link>
        </div>
      ) : null}
    </Section>
  );
}
