import { partners } from "@/lib/site";

export function Marquee() {
  const items = [...partners, ...partners];
  return (
    <div className="border-y border-sky-400/15 bg-card/40 py-6">
      <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
        Built for operators in
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-lg font-extrabold uppercase tracking-[0.18em] text-white/80"
            >
              {name}
              <span className="ml-10 text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
