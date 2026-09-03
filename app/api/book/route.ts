import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type BookPayload = {
  name: string;
  business: string;
  email: string;
  role: string;
  spend: string;
  broken: string;
};

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function parseNotifyTo(raw: string | undefined) {
  return (raw ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.RESEND_FROM?.trim() || `${site.name} <no-reply@notify.revflowagency.com>`;
  const templateId = process.env.RESEND_TEMPLATE_ID;
  const notifyTo = parseNotifyTo(process.env.LEAD_NOTIFY_TO);

  if (!apiKey || !templateId || notifyTo.length === 0) {
    return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const payload: BookPayload = {
    name: clean((body as BookPayload).name, 120),
    business: clean((body as BookPayload).business, 160),
    email: clean((body as BookPayload).email, 160),
    role: clean((body as BookPayload).role, 120),
    spend: clean((body as BookPayload).spend, 120),
    broken: clean((body as BookPayload).broken, 4000),
  };

  if (!payload.name || !payload.business || !payload.email || !payload.role || !payload.spend || !payload.broken) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const notifyHtml = `
    <h2>New strategy call request</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Business:</strong> ${escapeHtml(payload.business)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Role:</strong> ${escapeHtml(payload.role)}</p>
    <p><strong>Monthly ad spend:</strong> ${escapeHtml(payload.spend)}</p>
    <p><strong>What's broken:</strong></p>
    <p>${escapeHtml(payload.broken).replace(/\n/g, "<br />")}</p>
  `;

  // Confirmation uses the published template defaults (from/subject).
  // Team notify uses the verified domain from RESEND_FROM.
  const [notifyResult, confirmResult] = await Promise.all([
    resend.emails.send({
      from,
      to: notifyTo,
      replyTo: payload.email,
      subject: `Strategy call request - ${payload.name} / ${payload.business}`,
      html: notifyHtml,
    }),
    resend.emails.send({
      to: payload.email,
      template: {
        id: templateId,
      },
    }),
  ]);

  if (notifyResult.error || confirmResult.error) {
    console.error("book form email failed", {
      notify: notifyResult.error,
      confirm: confirmResult.error,
      from,
      templateId,
      notifyTo,
    });
    const detail =
      process.env.NODE_ENV !== "production"
        ? {
            notify: notifyResult.error,
            confirm: confirmResult.error,
          }
        : undefined;
    return NextResponse.json(
      {
        error: "We could not send that just now. Try again in a moment.",
        detail,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
