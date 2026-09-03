import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/funnel/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "revenueflow is one team that connects ads, follow-up, and booking so enquiries become appointments.",
};

export default function AboutPage() {
  return (
    <>
      <Section
        className="pt-28"
        index="01 / About"
        title={`${site.name} exists so paid enquiries stop dying in a list`}
        body="We work with owners who already get leads. The job is simple: reply fast, follow up, and get a time on the calendar."
      >
        <div className="grid border-t border-ink/10 md:grid-cols-2">
          <div className="border-b border-ink/10 p-8 md:border-r">
            <h2 className="text-2xl tracking-tight">The usual mess</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Ads people chase more leads. CRM people chase more workflows. Tracking sits in a spreadsheet.
              Nobody owns the moment a person actually books. We put ads, follow-up, and booking under one
              plan so the front desk and the ads account are looking at the same thing: someone booked.
            </p>
          </div>
          <div className="border-b border-ink/10 p-8">
            <h2 className="text-2xl tracking-tight">How we work</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Inside your accounts. A written plan. Short weekly videos. We test like a customer before
              go-live. Then 30 days of support.
            </p>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
