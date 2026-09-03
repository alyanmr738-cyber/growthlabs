import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use, intellectual property, and disclaimer for the ${site.name} website.`,
};

const year = new Date().getFullYear();

export default function TermsPage() {
  return (
    <Section className="pt-28" index="01 / Legal" title="Terms of Use">
      <div className="mx-auto max-w-3xl space-y-10 text-sm leading-7 text-muted">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          Last updated {year}-09-02 · © {year} {site.name}
        </p>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">1. Who we are</h2>
          <p>
            This website is operated by {site.name} (“we”, “us”). It describes marketing, CRM, tracking, and
            related setup services. Contact:{" "}
            <a href={`mailto:${site.email}`} className="text-accent underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">2. Using this site</h2>
          <p>
            You may browse this site for lawful purposes. You may not scrape, reverse engineer, overload, or
            misuse the site, attempt to access non-public systems, or use content in a way that misleads others
            about your relationship with us.
          </p>
          <p>
            Browsing or submitting a form does not create a client relationship. Paid work is governed only by
            a signed proposal, statement of work, or service agreement.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">3. No guarantees</h2>
          <p>
            Nothing on these pages is a guarantee of revenue, rankings, ad performance, booking volume, or
            business outcomes. Results depend on your offer, budget, market, creative, sales process, and how
            the work is used after handoff.
          </p>
          <p>
            Case studies, screenshots, statistics, and quotes describe past client work. They are not
            promises that you will get the same result.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">4. Intellectual property</h2>
          <p>
            Unless stated otherwise, all site content is owned by {site.name} or used under licence. That
            includes text, layout, graphics, photographs, screenshots (as presented), design systems, and the
            overall look of the site.
          </p>
          <p>
            The {site.name} name, wordmark, logo, and brand marks are trademarks or trade dress of{" "}
            {site.name}. You may not copy, modify, register, or use them — or confusingly similar marks —
            without our prior written permission. Fair use for accurate editorial reference is allowed; using
            our marks to imply partnership, endorsement, or employment is not.
          </p>
          <p>
            Third-party names and logos (including Google, Meta, GoHighLevel, and similar) belong to their
            owners. Mention or depiction does not mean sponsorship or affiliation unless we say so.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">5. Client work and deliverables</h2>
          <p>
            Account access, credentials, and data you provide for a project remain yours. Deliverables,
            ownership of custom assets, licences, and residual rights are defined in your statement of work.
            Until that agreement is signed, materials on this site are for information only.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">6. Links and third parties</h2>
          <p>
            We may link to third-party sites or tools. We are not responsible for their content, policies, or
            availability. Your use of those services is between you and that provider.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">7. Liability</h2>
          <p>
            To the fullest extent allowed by law, {site.name} is not liable for indirect, incidental,
            consequential, or special damages arising from use of this website or reliance on its content. Our
            total liability related to the site is limited to the greater of USD 100 or the amount you paid us
            (if any) solely for website-related access in the three months before the claim.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">8. Changes</h2>
          <p>
            We may update these terms. The “Last updated” line above is the effective date. Continued use of
            the site after changes means you accept the updated terms.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">9. Copyright notice</h2>
          <p>
            © {year} {site.name}. All rights reserved. No part of this website may be reproduced, distributed,
            or publicly displayed for commercial purposes without prior written consent, except as allowed by
            applicable law.
          </p>
        </div>

        <p>
          Questions:{" "}
          <a href={`mailto:${site.email}`} className="text-accent underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
