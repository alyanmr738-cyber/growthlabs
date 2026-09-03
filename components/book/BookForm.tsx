"use client";

import { useState } from "react";
import { bookRoles, spendBands } from "@/lib/faq";

const field =
  "mt-2 w-full border border-ink/15 bg-transparent px-3 py-3 text-sm text-ink outline-none focus:border-accent";

export function BookForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          business: data.get("business"),
          email: data.get("email"),
          role: data.get("role"),
          spend: data.get("spend"),
          broken: data.get("broken"),
        }),
      });

      const json = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) {
        setError(json?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSent(true);
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-ink/10 p-8">
        <p className="text-2xl tracking-tight">You’re on the list.</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Thanks — we got your details and sent a confirmation to your email. We’ll follow up about the
          strategy call shortly.
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
      {error ? <p className="text-sm text-accent">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 text-base tracking-tight text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[16rem] sm:text-lg"
      >
        {pending ? (
          "Sending…"
        ) : (
          <>
            <span className="font-mono text-[0.85em] text-white/70">[</span>
            <span>Request the strategy call</span>
            <span className="font-mono text-[0.85em] text-white/70">]</span>
          </>
        )}
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
