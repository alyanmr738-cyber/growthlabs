import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { services } from "@/lib/services";

export function ServiceBento() {
  return (
    <Section
      index="05 / Services"
      title="The stack. One booking engine."
      body="Every row is a real page — for the warm list that wants the details, and for search."
    >
      <ul>
        {services.map((s, i) => (
          <li key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              prefetch
              className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 border-t border-ink/10 py-7 last:border-b sm:grid-cols-[64px_1fr_auto] sm:gap-8"
            >
              <span className="grid h-8 w-8 place-items-center border border-ink/20 font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-2xl tracking-tight sm:text-3xl">{s.name}</p>
                <p className="mt-1 max-w-xl text-sm text-muted">{s.short}</p>
              </div>
              <span className="grid h-8 w-8 place-items-center border border-ink/20 text-sm transition-colors group-hover:bg-accent group-hover:text-bg">
                ↗
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
