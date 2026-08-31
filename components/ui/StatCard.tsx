import { GlowCard } from "./GlowCard";

type Props = {
  value: string;
  accent: string;
  label: string;
};

export function StatCard({ value, accent, label }: Props) {
  return (
    <GlowCard className="px-6 py-8 text-center sm:px-8">
      <p className="font-display text-5xl font-black tracking-tight text-white sm:text-6xl">
        {value}
        <span className="text-accent">{accent}</span>
      </p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
    </GlowCard>
  );
}
