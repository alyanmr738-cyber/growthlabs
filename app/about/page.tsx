import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/funnel/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Growth Labs builds the booking engine for global service businesses: ads, tracking, GoHighLevel, automations, and AI.",
};

export default function AboutPage() {
  return (
    <>
      <Section
        className="pt-28"
        index="01 / About"
        title={`${site.name} exists to close the gap between spend and a booked call`}
        body="We work with a warm list of global businesses that already know they need the stack — not another generic agency pitch."
      >
        <div className="grid border-t border-ink/10 md:grid-cols-2">
          <div className="border-b border-ink/10 p-8 md:border-r">
            <h2 className="text-2xl tracking-tight">Why we built this</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Media teams optimize for leads. CRM freelancers optimize for workflows. Tracking lives in a
              spreadsheet. We put Google Ads, Meta Ads, GTM, GoHighLevel, automations, and AI chat/voice
              under one architecture so the algorithm and the front desk are looking at the same event:
              someone booked.
            </p>
          </div>
          <div className="border-b border-ink/10 p-8">
            <h2 className="text-2xl tracking-tight">How we work</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Inside your accounts. Written scope. Weekly Looms. Tests before launch. Thirty days of
              support after go-live. Brand name is a placeholder until the domain is live — the offer is not.
            </p>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
