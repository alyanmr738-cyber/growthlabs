type Props = {
  children: React.ReactNode;
  className?: string;
};

export function AnnouncementPill({ children, className = "" }: Props) {
  return (
    <div
      className={`inline-flex max-w-full items-center gap-2 rounded-full border border-sky-400/40 bg-card/80 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-100 shadow-[0_0_28px_rgba(56,189,248,0.16)] sm:text-xs ${className}`}
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
      <span className="leading-snug">{children}</span>
    </div>
  );
}
