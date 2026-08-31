"use client";

import { useState } from "react";
import { GlowCard } from "@/components/ui/GlowCard";
import { bookRoles, spendBands } from "@/lib/faq";

export function BookForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <GlowCard hover={false} className="p-8 text-center sm:p-10">
        <p className="font-display text-2xl font-extrabold text-white">You’re on the list.</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          This form is a placeholder until the calendar is live. We’ll confirm the strategy call as soon as
          booking is connected.
        </p>
      </GlowCard>
    );
  }

  return (
    <GlowCard hover={false} className="p-6 sm:p-8">
      <form onSubmit={onSubmit} className="space-y-5">
        <Field label="Name" name="name" required />
        <Field label="Business" name="business" required />
        <Field label="Email" name="email" type="email" required />
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Role</span>
          <select
            name="role"
            required
            className="mt-2 w-full rounded-2xl border border-sky-400/20 bg-card-2 px-4 py-3 text-sm text-white outline-none focus:border-sky-400/60"
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            {bookRoles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
            Monthly ad spend (approx.)
          </span>
          <select
            name="spend"
            required
            className="mt-2 w-full rounded-2xl border border-sky-400/20 bg-card-2 px-4 py-3 text-sm text-white outline-none focus:border-sky-400/60"
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            {spendBands.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
            What’s broken right now?
          </span>
          <textarea
            name="broken"
            required
            rows={4}
            className="mt-2 w-full rounded-2xl border border-sky-400/20 bg-card-2 px-4 py-3 text-sm text-white outline-none focus:border-sky-400/60"
          />
        </label>
        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-full bg-linear-to-r from-sky-400 to-cyan-300 font-display text-sm font-extrabold uppercase tracking-wide text-slate-950 shadow-[0_0_32px_rgba(56,189,248,0.28)]"
        >
          Request the strategy call
        </button>
      </form>
    </GlowCard>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-sky-400/20 bg-card-2 px-4 py-3 text-sm text-white outline-none focus:border-sky-400/60"
      />
    </label>
  );
}
