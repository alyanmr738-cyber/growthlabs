import Link from "next/link";
import { cta, nav, site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bg px-4 pb-24 pt-16 sm:px-8 md:pb-10 lg:px-14">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 md:flex-row md:justify-between">
        <div>
          <p className="text-lg tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            The path from ad click to booked call — Google Ads, Meta Ads, GTM, GoHighLevel, automations,
            and AI.
          </p>
          <Link href={cta.primary.href} prefetch className="mt-6 inline-block text-xl text-accent">
            [ {cta.primary.label} ]
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-12 text-sm">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Explore</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} prefetch className="text-dim hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Services</p>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} prefetch className="text-dim hover:text-accent">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1400px] flex-col gap-3 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <p>
          {site.name} © {new Date().getFullYear()}
        </p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-accent">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-accent">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
