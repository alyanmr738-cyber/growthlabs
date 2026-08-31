import type { Metadata } from "next";
import { BookForm } from "@/components/book/BookForm";
import { GlowCard } from "@/components/ui/GlowCard";

export const metadata: Metadata = {
  title: "Book a strategy call",
  description:
    "Book a 30-minute Growth Labs strategy call. We map how leads enter and whether a Growth Map or full install is next.",
};

export default function BookPage() {
  return (
    <section className="hero-atmosphere px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Step 02</p>
          <h1 className="mt-3 font-display text-4xl font-black text-white sm:text-5xl">
            Book a 30-minute strategy call
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Tell us what is leaking. We’ll come back with a clear next step — Growth Map, install, or an
            honest “not us.”
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span> No lock-in on this call
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span> You keep every account we touch
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span> Calendar embed drops in here when the domain is live
            </li>
          </ul>
          <GlowCard hover={false} className="mt-10 overflow-hidden">
            <div className="flex aspect-video items-center justify-center bg-card-2 p-6 text-center">
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-accent">
                  Calendar placeholder
                </p>
                <p className="mt-3 max-w-sm text-sm text-muted">
                  Swap this block for a Cal.com or GoHighLevel calendar iframe. Until then, the form captures
                  the same fields.
                </p>
              </div>
            </div>
          </GlowCard>
        </div>
        <BookForm />
      </div>
    </section>
  );
}
