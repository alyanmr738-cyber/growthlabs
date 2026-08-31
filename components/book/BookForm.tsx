"use client";

import { useState } from "react";
import { bookRoles, spendBands } from "@/lib/faq";

const field =
  "mt-2 w-full border border-ink/15 bg-transparent px-3 py-3 text-sm text-ink outline-none focus:border-accent";

export function BookForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-ink/10 p-8">
        <p className="text-2xl tracking-tight">You’re on the list.</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          This form is a placeholder until the calendar is live. We’ll confirm the strategy call as soon as
          booking is connected.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 border border-ink/10 p-6 sm:p-8">
      <Field label="Name" name="name" required />
      <Field label="Business" name="business" required />
      <Field label="Email" name="email" type="email" required />
      <label className="block">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Role</span>
        <select name="role" required className={field} defaultValue="">
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
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          Monthly ad spend (approx.)
        </span>
        <select name="spend" required className={field} defaultValue="">
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
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          What’s broken right now?
        </span>
        <textarea name="broken" required rows={4} className={field} />
      </label>
      <button type="submit" className="text-left text-xl text-accent">
        [ Request the strategy call ]
      </button>
    </form>
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
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{label}</span>
      <input name={name} type={type} required={required} className={field} />
    </label>
  );
}
