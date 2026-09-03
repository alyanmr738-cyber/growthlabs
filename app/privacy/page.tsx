import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects information submitted through this website.`,
};

const year = new Date().getFullYear();

export default function PrivacyPage() {
  return (
    <Section className="pt-28" index="01 / Legal" title="Privacy Policy">
      <div className="mx-auto max-w-3xl space-y-10 text-sm leading-7 text-muted">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          Last updated {year}-09-02 · © {year} {site.name}
        </p>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">1. Scope</h2>
          <p>
            This policy explains how {site.name} (“we”) handles personal information on this marketing website,
            including the strategy-call form at /book. It does not cover client CRM accounts, ad platforms, or
            other tools we configure for customers under a separate agreement — those stay under your accounts
            and those vendors’ policies.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">2. What we collect</h2>
          <p>When you submit the booking form, we receive the fields you enter, typically:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Name and business name</li>
            <li>Email address</li>
            <li>Role and approximate monthly ad spend</li>
            <li>A short description of what is broken</li>
          </ul>
          <p>
            If you email us directly at {site.email}, we receive whatever you include in that message. Server
            and hosting logs may also record technical data such as IP address, browser type, and request
            timing.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">3. How we use it</h2>
          <p>We use form and email data only to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Reply about a strategy call or our services</li>
            <li>Send a confirmation email to the address you provided</li>
            <li>Notify our team so we can follow up</li>
            <li>Improve the site and prevent abuse</li>
          </ul>
          <p>We do not sell personal data. We do not use booking-form answers for unrelated marketing lists.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">4. Where it goes</h2>
          <p>
            Strategy-call submissions are sent by email through Resend (our email delivery provider). A copy
            goes to our team inboxes, and a confirmation template may go to you. Message content is processed
            by Resend to deliver those emails. We do not run a separate public contact database on this
            website.
          </p>
          <p>
            Hosting and deployment may be provided by services such as Vercel. Those processors see technical
            request data needed to serve the site.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">5. Retention</h2>
          <p>
            We keep enquiry emails as long as needed to respond and for ordinary business records (typically
            up to 24 months unless a longer period is required for a live engagement or legal reason). You can
            ask us to delete an enquiry email where we are not required to keep it.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">6. Cookies and analytics</h2>
          <p>
            This site may use essential cookies required for operation. If we add analytics, advertising
            pixels, or an embedded calendar, those vendors will receive data under their own policies. We will
            update this page when those go live.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">7. Your choices</h2>
          <p>
            Depending on where you live, you may have rights to access, correct, or delete personal
            information we hold about you, or to object to certain processing. Email{" "}
            <a href={`mailto:${site.email}`} className="text-accent underline underline-offset-4">
              {site.email}
            </a>{" "}
            and we will respond within a reasonable time.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">8. Children</h2>
          <p>This site is aimed at businesses. We do not knowingly collect information from children under 16.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">9. Changes</h2>
          <p>
            We may update this policy. The “Last updated” line is the effective date. Material changes will be
            reflected on this page.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl tracking-tight text-ink">10. Copyright</h2>
          <p>
            © {year} {site.name}. Site content, branding, and the {site.name} logo are protected by copyright
            and trademark law. See our Terms of Use for intellectual property details.
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
