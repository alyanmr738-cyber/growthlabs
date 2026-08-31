import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles information submitted through this website.`,
};

export default function PrivacyPage() {
  return (
    <Section className="pt-28" index="01 / Legal" title="Privacy Policy">
      <div className="mx-auto max-w-3xl space-y-6 text-sm leading-7 text-muted">
        <p>
          {site.name} (“we”) operates this marketing website. Until a production domain and processors are
          connected, forms are client-side placeholders and are not stored on a server we control.
        </p>
        <p>
          If you email {site.email} or submit a strategy-call request, we use that information only to
          respond about services. We do not sell personal data.
        </p>
        <p>
          This site may later load analytics, advertising pixels, or an embedded calendar. Those vendors
          have their own policies. We will update this page when they go live.
        </p>
        <p>Questions: {site.email}.</p>
      </div>
    </Section>
  );
}
