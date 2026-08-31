import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "header";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function PillButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const look =
    variant === "ghost"
      ? "text-ink hover:text-accent"
      : "text-accent hover:opacity-80";

  return (
    <Link
      href={href}
      prefetch
      className={`inline-flex items-baseline gap-1 font-sans text-xl tracking-tight sm:text-2xl ${look} ${className}`}
    >
      <span className="font-mono text-[0.7em] text-accent">[</span>
      <span>{children}</span>
      <span className="font-mono text-[0.7em] text-accent">]</span>
    </Link>
  );
}
