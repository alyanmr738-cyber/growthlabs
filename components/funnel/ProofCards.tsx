import { Section } from "@/components/ui/Section";
import { testimonials } from "@/lib/proof";

export function ProofCards() {
  return (
    <Section
      className="relative z-20"
      index="Proof"
      title="What operators say after the leak is closed"
      body="Placeholder stories until your warm-list results are published. The shape is the same: a number, a niche, a system that booked the lead."
    >
      <ul>
        {testimonials.map((t, i) => (
          <li key={t.name} className="grid gap-4 border-t border-ink/10 py-10 last:border-b md:grid-cols-[72px_1fr_1.2fr]">
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="text-2xl tracking-tight">{t.name}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{t.role}</p>
              <p className="mt-1 font-mono text-[11px] text-muted">{t.meta}</p>
            </div>
            <div>
              <p className="text-lg tracking-tight">{t.result}</p>
              <p className="mt-3 text-sm leading-7 text-muted">“{t.quote}”</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
