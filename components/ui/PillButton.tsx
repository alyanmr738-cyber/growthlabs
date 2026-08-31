import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-wide transition-transform duration-200 will-change-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-sm sm:text-base",
  lg: "h-14 px-7 text-sm sm:text-base",
};

const variants = {
  primary:
    "bg-linear-to-r from-sky-400 to-cyan-300 text-slate-950 shadow-[0_0_32px_rgba(56,189,248,0.28)] hover:-translate-y-0.5",
  ghost:
    "border border-sky-400/40 bg-transparent text-white hover:border-sky-300/80 hover:bg-white/5 hover:-translate-y-0.5",
  header:
    "bg-sky-400 text-slate-950 hover:bg-sky-300",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

export function PillButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      prefetch
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
