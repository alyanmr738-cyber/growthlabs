type Props = {
  value: string;
  accent: string;
  label: string;
};

export function StatCard({ value, accent, label }: Props) {
  return (
    <div className="border-t border-ink/10 py-8">
      <p className="font-sans text-5xl tracking-tight text-ink sm:text-6xl">
        {value}
        <span className="text-accent">{accent}</span>
      </p>
      <p className="mt-4 max-w-xs font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
    </div>
  );
}
