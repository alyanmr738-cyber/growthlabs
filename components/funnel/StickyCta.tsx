import Link from "next/link";
import { cta } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-sky-400/20 bg-[#020617]/95 p-3 backdrop-blur md:hidden">
      <Link
        href={cta.primary.href}
        prefetch
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-400 to-cyan-300 font-display text-sm font-extrabold uppercase tracking-wide text-slate-950"
      >
        {cta.primary.label}
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
