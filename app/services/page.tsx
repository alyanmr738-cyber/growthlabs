import type { Metadata } from "next";
import Link from "next/link";
import { PillButton } from "@/components/ui/PillButton";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/funnel/CtaBand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services for Growing Businesses",
  description:
    "Market Growth, GoHighLevel, automations, AI chatbot and voice, Google Ads, Google Tag Manager, and Meta Ads — installed as one booking engine.",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        className="pt-28"
        index="01 / Services"
        title="Choose the piece — or the whole engine"
        body="Same team either way. Ads, tracking, CRM, automations, and AI share one definition of a booked call."
      >
        <ul>
          {services.map((s, i) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                prefetch
                className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 border-t border-ink/10 py-7 last:border-b"
              >
                <span className="grid h-8 w-8 place-items-center border border-ink/20 font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl tracking-tight">{s.name}</h2>
                  <p className="mt-1 text-sm text-muted">{s.short}</p>
                </div>
                <span className="grid h-8 w-8 place-items-center border border-ink/20 group-hover:bg-accent group-hover:text-bg">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <PillButton href="/book">Book a strategy call</PillButton>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
