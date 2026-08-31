import { partners } from "@/lib/site";

export function Marquee() {
  const items = [...partners, ...partners];
  return (
    <div className="overflow-hidden border-y border-ink/10 py-5">
      <div className="marquee-track flex w-max gap-10 pr-10">
        {items.map((name, i) => (
          <span key={`${name}-${i}`} className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {name}
            <span className="ml-10 text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
