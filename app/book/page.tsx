import type { Metadata } from "next";
import { BookForm } from "@/components/book/BookForm";
import { GoogleCalendarBooking } from "@/components/book/GoogleCalendarBooking";

export const metadata: Metadata = {
  title: "Book a 30-minute call",
  description:
    "Book a 30-minute revenueflow call. We look at how people reach you today and what to set up first.",
};

export default function BookPage() {
  return (
    <section className="px-4 py-28 sm:px-8 lg:px-14">
      <div className="mx-auto grid max-w-[1470px] items-stretch gap-12 lg:grid-cols-2">
        <div className="flex flex-col">
          <p className="font-mono text-sm">
            <span className="text-accent">02</span> / Book
          </p>
          <h1 className="display mt-6 max-w-[12ch]">Book a 30-minute call</h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted">
            Tell us how people find you and where they stall. We’ll come back with a clear next step - a simple
            plan, a full setup, or an honest “not us.”
          </p>
          <ul className="mt-8 space-y-3 text-sm leading-6 text-dim">
            <li>No lock-in on this call</li>
            <li>You keep every account we touch</li>
            <li>We reply by email after you submit the form</li>
          </ul>
          <div className="mt-auto pt-10">
            <div className="border border-ink/10 p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Calendar</p>
              <p className="mt-3 max-w-sm text-sm text-muted">
                Prefer to pick a time now? Open the scheduler and book a 30-minute slot.
              </p>
              <div className="mt-6">
                <GoogleCalendarBooking />
              </div>
            </div>
          </div>
        </div>
        <BookForm />
      </div>
    </section>
  );
}
