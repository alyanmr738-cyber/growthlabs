import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PillButton } from "@/components/ui/PillButton";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBand } from "@/components/funnel/CtaBand";
import { getRelated, getService, services } from "@/lib/services";
import { faqJsonLd } from "@/lib/jsonld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title.replace(" | Growth Labs", ""),
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = getRelated(service);

  return (
    <>
      <JsonLd data={faqJsonLd(service.faq)} />
      <section className="px-4 pb-12 pt-28 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-sm">
            <span className="text-accent">01</span> / {service.name}
          </p>
          <h1 className="display mt-6 max-w-4xl">{service.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{service.lede}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-10">
            <PillButton href="/book">Book a strategy call</PillButton>
            <PillButton href="/services" variant="ghost">
              All services
            </PillButton>
          </div>
        </div>
      </section>

      <Section index="02 / Brief" title="What this actually is">
        <p className="max-w-3xl text-base leading-8 text-dim">{service.body}</p>
      </Section>

      <Section index="03 / Process" title="The process" body="Six steps from first conversation to a live, tested system.">
        <ol>
          {service.process.map((step, i) => (
            <li key={step.title} className="grid gap-3 border-t border-ink/10 py-7 last:border-b md:grid-cols-[72px_240px_1fr]">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="text-xl tracking-tight">{step.title}</h2>
              <p className="text-sm leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section index="04 / Deliverables" title="What you get">
        <div className="grid gap-0 border-t border-ink/10 md:grid-cols-3">
          {service.deliverables.map((block) => (
            <div key={block.title} className="border-b border-ink/10 p-6 md:border-r md:last:border-r-0">
              <h3 className="text-xl tracking-tight">{block.title}</h3>
              <ul className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    <span className="text-accent">/ </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section index="05 / Partner" title="Our guarantees">
        <div className="grid border-t border-ink/10 md:grid-cols-3">
          {service.guarantees.map((g) => (
            <div key={g.title} className="border-b border-ink/10 p-6 md:border-r md:last:border-r-0">
              <h3 className="text-lg tracking-tight">{g.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{g.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="06 / FAQ" title={`Questions about ${service.name}`}>
        <div className="max-w-3xl">
          <Accordion items={service.faq} />
        </div>
      </Section>

      {related.length ? (
        <Section index="07 / Related" title="Keep going">
          <ul>
            {related.map((r, i) => (
              <li key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  prefetch
                  className="flex items-center justify-between gap-4 border-t border-ink/10 py-6 last:border-b"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-xl tracking-tight">{r.name}</span>
                      <span className="text-sm text-muted">{r.short}</span>
                    </span>
                  </span>
                  <span className="text-accent">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
