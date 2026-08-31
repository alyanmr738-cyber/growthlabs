import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlowCard({ children, className = "", hover = true }: Props) {
  return (
    <div
      className={`border border-ink/10 bg-transparent ${hover ? "transition-colors hover:bg-ink/[0.03]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
