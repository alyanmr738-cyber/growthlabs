type Props = {
  children: React.ReactNode;
  className?: string;
};

export function AnnouncementPill({ children, className = "" }: Props) {
  return (
    <p className={`font-mono text-xs tracking-wide text-muted ${className}`}>{children}</p>
  );
}
