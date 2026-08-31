import Link from "next/link";
import { PillButton } from "@/components/ui/PillButton";

export default function NotFound() {
  return (
    <section className="hero-atmosphere flex flex-col items-center px-5 py-32 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-black text-white">This page isn’t in the funnel</h1>
      <p className="mt-4 max-w-md text-muted">Head home or book a call if you meant to get in touch.</p>
      <div className="mt-8 flex gap-3">
        <PillButton href="/">Home</PillButton>
        <Link href="/book" className="grid h-12 place-items-center px-4 text-sm text-accent">
          Book a call
        </Link>
      </div>
    </section>
  );
}
