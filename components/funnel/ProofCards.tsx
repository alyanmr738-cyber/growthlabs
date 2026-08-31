import { GlowCard } from "@/components/ui/GlowCard";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/lib/proof";

export function ProofCards() {
  return (
    <Section
      eyebrow="Proof"
      title="What operators say after the leak is closed"
      body="Placeholder stories until your warm-list results are published. The shape is the same: a number, a niche, a system that booked the lead."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <GlowCard key={t.name} className="flex flex-col items-center p-7 text-center">
            <div className="relative">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-linear-to-br from-sky-400/40 to-slate-800 font-display text-2xl font-black text-white shadow-[0_0_0_3px_rgba(56,189,248,0.7),0_0_24px_rgba(56,189,248,0.35)]">
                {t.initials}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 grid h-6 w-6 place-items-center rounded-full bg-sky-400 text-[11px] font-black text-slate-950">
                ✓
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-black italic uppercase tracking-wide text-white">
              {t.name}
            </h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-accent">{t.role}</p>
            <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">{t.meta}</p>
            <div className="mt-5 w-full rounded-2xl bg-black/35 px-4 py-3">
              <p className="font-display text-sm font-bold italic text-white">{t.result}</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">“{t.quote}”</p>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
