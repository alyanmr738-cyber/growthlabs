import Link from "next/link";
import { cta, nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { PillButton } from "@/components/ui/PillButton";

export function Footer() {
  return (
    <footer className="border-t border-sky-400/15 bg-[#01030c] px-5 pb-28 pt-16 sm:px-8 md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white">
            {site.name}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">
            We install the path from ad click to booked call: Google Ads, Meta Ads,
            GTM, GoHighLevel, automations, and AI chat and voice.
          </p>
          <div className="mt-6">
            <PillButton href={cta.primary.href} size="sm">
              {cta.primary.label}
            </PillButton>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch className="text-sm text-slate-300 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book" prefetch className="text-sm text-slate-300 hover:text-white">
                Book a call
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Services</p>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  prefetch
                  className="text-sm text-slate-300 hover:text-white"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
