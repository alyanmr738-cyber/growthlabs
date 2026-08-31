import { AnnouncementPill } from "@/components/ui/AnnouncementPill";
import { PillButton } from "@/components/ui/PillButton";
import { announcement, cta, eyebrow } from "@/lib/site";

export function Hero() {
  return (
    <section className="px-4 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-sm">
          <span className="text-accent">01</span>
          <span className="text-ink"> / Signal</span>
        </p>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{eyebrow}</p>
        <h1 className="display mt-6 max-w-[18ch]">
          Fill the calendar with <span className="text-accent">qualified bookings</span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">
          Google Ads, Meta Ads, GTM, GoHighLevel, automations, and AI chat and voice — one system that
          books the lead instead of parking it in a CRM.
        </p>
        <AnnouncementPill className="mt-6">{announcement}</AnnouncementPill>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-10">
          <PillButton href={cta.primary.href}>{cta.primary.label}</PillButton>
          <PillButton href={cta.secondary.href} variant="ghost">
            {cta.secondary.label}
          </PillButton>
        </div>
        <div className="mt-16 border-t border-ink/10 pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">The engine</p>
          <p className="mt-3 max-w-2xl text-lg tracking-tight text-dim">
            Ads → GTM → GoHighLevel → automations → chat and voice → a name on the calendar.
          </p>
        </div>
      </div>
    </section>
  );
}
