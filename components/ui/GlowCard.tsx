import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlowCard({ children, className = "", hover = true }: Props) {
  return (
    <div
      className={`rounded-3xl bg-card glow-border ${hover ? "transition-transform duration-200 will-change-transform hover:-translate-y-1" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
