import type { Metadata } from "next";
import Link from "next/link";
import { PillButton } from "@/components/ui/PillButton";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/funnel/CtaBand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ads, GoHighLevel, follow-up, website chat, phone, Google Ads, tracking, and Facebook ads — set up so enquiries become bookings.",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        className="pt-28"
        index="01 / Services"
        title="Pick one piece, or we connect the lot"
        body="Same team either way. The job is the same: a person who enquires today can book a time today."
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
          <PillButton href="/book">Book a 30-minute call</PillButton>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
