import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { Section } from "@/components/ui/Section";
import { services } from "@/lib/services";

export function ServiceBento() {
  return (
    <Section
      eyebrow="What we install"
      title="The stack. One booking engine."
      body="Every card is a real page — for the warm list that wants the details, and for search."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Link key={s.slug} href={`/services/${s.slug}`} prefetch className={i === 0 ? "sm:col-span-2" : ""}>
            <GlowCard className="h-full p-6 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl font-extrabold text-white">{s.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{s.short}</p>
              <p className="mt-5 text-sm font-semibold text-accent">Explore →</p>
            </GlowCard>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link href="/services" prefetch className="text-sm font-semibold text-white/80 hover:text-white">
          View all services
        </Link>
      </p>
    </Section>
  );
}
