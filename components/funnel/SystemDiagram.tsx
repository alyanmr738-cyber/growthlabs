import { GlowCard } from "@/components/ui/GlowCard";
import { Section } from "@/components/ui/Section";
import { systemNodes } from "@/lib/site";

export function SystemDiagram() {
  return (
    <Section
      id="system"
      eyebrow="The engine"
      title="One path. No orphaned leads."
      body="Google and Meta bring the demand. GTM tells the algorithms the truth. GoHighLevel stores, automates, and books — with chat and voice covering the hours your team cannot."
    >
      <GlowCard hover={false} className="p-6 sm:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-2">
          {systemNodes.map((node, i) => (
            <div key={node.label} className="flex items-center gap-2 md:contents">
              <div className="flex-1 rounded-2xl border border-sky-400/25 bg-card-2 px-4 py-4 text-center md:flex-none md:min-w-[140px]">
                <p className="font-display text-sm font-extrabold text-white">{node.label}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">{node.hint}</p>
              </div>
              {i < systemNodes.length - 1 ? (
                <span className="hidden px-1 text-accent md:inline" aria-hidden>
                  →
                </span>
              ) : null}
              {i < systemNodes.length - 1 ? (
                <span className="px-1 text-accent md:hidden" aria-hidden>
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </GlowCard>
    </Section>
  );
}
