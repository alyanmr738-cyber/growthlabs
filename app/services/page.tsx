import type { Metadata } from "next";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
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
        eyebrow="Services"
        title="Choose the piece — or the whole engine"
        body="Same team either way. Ads, tracking, CRM, automations, and AI are designed to share one definition of a booked call."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} prefetch>
              <GlowCard className="h-full p-7 sm:p-8">
                <h2 className="font-display text-2xl font-extrabold text-white">{s.name}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{s.short}</p>
                <p className="mt-6 text-sm font-semibold text-accent">View {s.navLabel} →</p>
              </GlowCard>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <PillButton href="/book">Book a strategy call</PillButton>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
