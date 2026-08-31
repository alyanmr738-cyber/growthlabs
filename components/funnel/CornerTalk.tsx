import Link from "next/link";
import { cta } from "@/lib/site";

export function CornerTalk() {
  return (
    <Link
      href={cta.primary.href}
      prefetch
      className="fixed bottom-8 right-8 z-30 hidden items-baseline gap-1 text-[15px] tracking-tight text-ink md:flex"
    >
      <span className="font-mono text-accent">[</span>
      <span>{cta.header.label}</span>
      <span className="font-mono text-accent">]</span>
    </Link>
  );
}
