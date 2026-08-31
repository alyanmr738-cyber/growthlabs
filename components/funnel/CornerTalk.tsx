"use client";

import Link from "next/link";
import { cta } from "@/lib/site";
import { useOnBlue } from "@/components/funnel/useOnBlue";

export function CornerTalk() {
  const onBlue = useOnBlue();
  return (
    <Link
      href={cta.primary.href}
      prefetch
      className={`fixed bottom-8 right-8 z-30 hidden items-baseline gap-1 text-[15px] tracking-tight md:flex ${
        onBlue ? "text-white" : "text-ink"
      }`}
    >
      <span className={`font-mono ${onBlue ? "text-white" : "text-accent"}`}>[</span>
      <span>{cta.header.label}</span>
      <span className={`font-mono ${onBlue ? "text-white" : "text-accent"}`}>]</span>
    </Link>
  );
}
