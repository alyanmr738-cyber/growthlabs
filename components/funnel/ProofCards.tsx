import { Section } from "@/components/ui/Section";
import { testimonials } from "@/lib/proof";

export function ProofCards() {
  return (
    <Section
      index="Results"
      title="Operators who stopped losing the lead"
      body="Outcomes from work we’ve shipped. Ask on the call if you want references in your niche."
    >
      <ul>
        {testimonials.map((t, i) => (
          <li
            key={t.name}
            className="grid gap-6 border-t border-ink/10 py-10 last:border-b md:grid-cols-[72px_minmax(0,1fr)_minmax(0,1.35fr)]"
          >
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="text-2xl tracking-tight">{t.name}</p>
              <p className="mt-2 text-sm text-dim">
                {t.role}, {t.company}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{t.meta}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{t.result}</p>
            </div>
            <blockquote className="text-lg leading-8 tracking-tight text-ink">
              <span className="text-accent">“</span>
              {t.quote}
              <span className="text-accent">”</span>
            </blockquote>
          </li>
        ))}
      </ul>
    </Section>
  );
}
