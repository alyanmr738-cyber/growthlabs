import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/funnel/CtaBand";
import { processStages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How revenueflow works: listen, approve a plan, build in your accounts, test for real, then hand over with 30 days of support.",
};

export default function ProcessPage() {
  return (
    <>
      <Section
        className="pt-28"
        index="01 / Process"
        title="From first call to a working setup — usually two to four weeks"
        body="You get a written plan before we touch anything. Most work happens in your own Google, Facebook, and GoHighLevel accounts. Here is exactly what happens at each stage."
      >
        <ol>
          {processStages.map((stage, i) => (
            <li
              key={stage.title}
              className="grid gap-6 border-t border-ink/10 py-12 last:border-b lg:grid-cols-[88px_1fr]"
            >
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-3xl tracking-tight sm:text-4xl">{stage.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">{stage.body}</p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-dim sm:text-base">{stage.detail}</p>
                <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">You bring</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted">{stage.youBring}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">You get</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted">{stage.youGet}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Timing</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted">{stage.timing}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        index="02 / Fit"
        title="What this process is not"
        body="We are not a media-buying marketplace, a locked white-label you cannot leave, or a 12-month contract before you have seen a plan."
      >
        <ul className="grid gap-8 sm:grid-cols-3">
          <li className="border-t border-ink/10 pt-6">
            <h3 className="text-xl tracking-tight">No mystery scope</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Build starts after you approve a written plan. If the leak is only CRM follow-up, we do not force a
              full ads rebuild.
            </p>
          </li>
          <li className="border-t border-ink/10 pt-6">
            <h3 className="text-xl tracking-tight">Your accounts stay yours</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Google, Meta, GTM, and GoHighLevel remain under your ownership. We work inside them and leave
              documentation you can keep.
            </p>
          </li>
          <li className="border-t border-ink/10 pt-6">
            <h3 className="text-xl tracking-tight">Support after go-live</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Thirty days of help is included with the build. Stay on for ongoing ads, CRM, or creative if you
              want a retained partner.
            </p>
          </li>
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
