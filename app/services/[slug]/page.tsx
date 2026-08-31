import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GlowCard } from "@/components/ui/GlowCard";
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
      <section className="hero-atmosphere px-5 pb-12 pt-16 sm:px-8 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{service.name}</p>
          <h1 className="mt-4 font-display text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            {service.h1}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{service.lede}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <PillButton href="/book" size="lg">
              Book a strategy call
            </PillButton>
            <PillButton href="/services" variant="ghost" size="lg">
              All services
            </PillButton>
          </div>
        </div>
      </section>

      <Section center={false} className="pt-8">
        <p className="mx-auto max-w-3xl text-base leading-8 text-slate-300">{service.body}</p>
      </Section>

      <Section eyebrow="How we work" title="The process" body="Six steps from first conversation to a live, tested system.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.process.map((step, i) => (
            <GlowCard key={step.title} className="p-6">
              <p className="font-display text-sm font-extrabold text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-white">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="What you get" title="Deliverables, not mystery retainers">
        <div className="grid gap-5 md:grid-cols-3">
          {service.deliverables.map((block) => (
            <GlowCard key={block.title} className="p-7">
              <h3 className="font-display text-xl font-extrabold text-white">{block.title}</h3>
              <ul className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-300">
                    <span className="text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="How we partner" title="Our guarantees">
        <div className="grid gap-4 md:grid-cols-3">
          {service.guarantees.map((g) => (
            <GlowCard key={g.title} className="p-7">
              <h3 className="font-display text-lg font-bold text-white">{g.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{g.body}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title={`Questions about ${service.name}`}>
        <div className="mx-auto max-w-3xl">
          <Accordion items={service.faq} />
        </div>
      </Section>

      {related.length ? (
        <Section eyebrow="Keep going" title="Related systems">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} prefetch>
                <GlowCard className="h-full p-6">
                  <h3 className="font-display font-bold text-white">{r.name}</h3>
                  <p className="mt-2 text-sm text-muted">{r.short}</p>
                </GlowCard>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
