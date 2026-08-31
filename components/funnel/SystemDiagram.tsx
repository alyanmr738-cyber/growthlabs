import { Section } from "@/components/ui/Section";
import { systemNodes } from "@/lib/site";

export function SystemDiagram() {
  return (
    <Section
      id="system"
      index="04 / System"
      title="One path. No orphaned leads."
      body="Google and Meta bring the demand. GTM tells the algorithms the truth. GoHighLevel stores, automates, and books."
      invert
    >
      <ol>
        {systemNodes.map((node, i) => (
          <li
            key={node.label}
            className="grid grid-cols-[48px_1fr_auto] items-center gap-4 border-t border-bg/20 py-6 last:border-b sm:grid-cols-[64px_1fr_auto]"
          >
            <span className="grid h-8 w-8 place-items-center border border-bg/40 font-mono text-xs">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-2xl tracking-tight sm:text-3xl">{node.label}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-bg/70">{node.hint}</p>
            </div>
            {i < systemNodes.length - 1 ? (
              <span className="font-mono text-bg/60" aria-hidden>
                ↓
              </span>
            ) : (
              <span className="font-mono text-xs uppercase tracking-widest">End</span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
