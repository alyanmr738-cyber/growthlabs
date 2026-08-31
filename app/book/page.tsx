import type { Metadata } from "next";
import { BookForm } from "@/components/book/BookForm";

export const metadata: Metadata = {
  title: "Book a strategy call",
  description:
    "Book a 30-minute Growth Labs strategy call. We map how leads enter and whether a Growth Map or full install is next.",
};

export default function BookPage() {
  return (
    <section className="px-4 py-28 sm:px-8 lg:px-14">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm">
            <span className="text-accent">02</span> / Book
          </p>
          <h1 className="display mt-6 max-w-[12ch]">Book a 30-minute strategy call</h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted">
            Tell us what is leaking. We’ll come back with a clear next step — Growth Map, install, or an
            honest “not us.”
          </p>
          <ul className="mt-8 space-y-3 font-mono text-xs uppercase tracking-[0.12em] text-dim">
            <li>/ No lock-in on this call</li>
            <li>/ You keep every account we touch</li>
            <li>/ Calendar embed drops in when the domain is live</li>
          </ul>
          <div className="mt-10 border border-ink/10 p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Calendar placeholder</p>
            <p className="mt-3 max-w-sm text-sm text-muted">
              Swap this block for a Cal.com or GoHighLevel calendar iframe. Until then, the form captures the
              same fields.
            </p>
          </div>
        </div>
        <BookForm />
      </div>
    </section>
  );
}
