import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for the ${site.name} website.`,
};

export default function TermsPage() {
  return (
    <Section className="pt-28" index="01 / Legal" title="Terms">
      <div className="mx-auto max-w-3xl space-y-6 text-sm leading-7 text-muted">
        <p>
          This website describes services offered by {site.name}. Nothing on these pages is a guarantee of
          revenue, rankings, or ad performance. Results depend on offer, budget, market, and execution.
        </p>
        <p>
          Case studies and statistics marked as placeholders are illustrative until replaced with client
          approved figures.
        </p>
        <p>
          Paid work is governed by a separate proposal or statement of work. Using this site does not create
          a client relationship.
        </p>
        <p>Questions: {site.email}.</p>
      </div>
    </Section>
  );
}
