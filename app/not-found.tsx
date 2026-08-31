import Link from "next/link";
import { PillButton } from "@/components/ui/PillButton";

export default function NotFound() {
  return (
    <section className="px-4 py-32 sm:px-8 lg:px-14">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="display mt-6 max-w-[12ch]">This page isn’t in the funnel</h1>
      <p className="mt-6 max-w-md text-muted">Head home or book a call if you meant to get in touch.</p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-10">
        <PillButton href="/">Home</PillButton>
        <Link href="/book" className="text-xl text-ink">
          [ Book a call ]
        </Link>
      </div>
    </section>
  );
}
