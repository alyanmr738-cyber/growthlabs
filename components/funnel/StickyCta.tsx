import Link from "next/link";
import { cta } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-bg/95 p-3 backdrop-blur md:hidden">
      <Link
        href={cta.primary.href}
        prefetch
        className="flex h-12 w-full items-center justify-center font-sans text-base text-accent"
      >
        [ {cta.primary.label} ]
      </Link>
    </div>
  );
}
