import { AnnouncementPill } from "@/components/ui/AnnouncementPill";
import { GlowCard } from "@/components/ui/GlowCard";
import { PillButton } from "@/components/ui/PillButton";
import { announcement, cta, eyebrow } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-atmosphere relative overflow-hidden px-5 pb-8 pt-12 sm:px-8 sm:pt-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <AnnouncementPill>{announcement}</AnnouncementPill>
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          Fill the calendar with{" "}
          <span className="text-accent">qualified bookings</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Google Ads, Meta Ads, GTM, GoHighLevel, automations, and AI chat and voice — one system that
          books the lead instead of parking it in a CRM.
        </p>
        <div className="mt-9 flex w-full max-w-xl flex-col gap-3 sm:items-center">
          <PillButton href={cta.primary.href} size="lg" className="w-full sm:w-auto sm:min-w-[320px]">
            <CoffeeIcon />
            {cta.primary.label}
            <span aria-hidden>→</span>
          </PillButton>
          <PillButton
            href={cta.secondary.href}
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto sm:min-w-[320px]"
          >
            <PlayIcon />
            {cta.secondary.label}
          </PillButton>
        </div>

        <GlowCard hover={false} className="mt-14 w-full overflow-hidden p-3 sm:p-4">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-sky-950 via-slate-900 to-cyan-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.25),transparent_45%)]" />
            <div className="relative z-10 flex flex-col items-center gap-4 px-6">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur">
                <PlayIcon className="h-6 w-6 text-white" />
              </span>
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
                Watch how the system works
              </p>
              <p className="max-w-md text-sm text-slate-300">
                Ads → GTM → GoHighLevel → automations → chat and voice → a name on the calendar.
              </p>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}

function CoffeeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M16 9h2.2A2.8 2.8 0 0 1 21 11.8v.4A2.8 2.8 0 0 1 18.2 15H16" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3.5c.4 1 .4 1.8 0 2.8M12 3.5c.4 1 .4 1.8 0 2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.5v13l11-6.5L8 5.5Z" />
    </svg>
  );
}
