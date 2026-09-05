"use client";

import { useState } from "react";

type Stage = {
  n: string;
  title: string;
  body: string;
  d: string;
  cx: number;
  cy: number;
  fill: string;
};

/** Continuous V: full-bleed top (0,8)-(240,8) → tip (120,292). */
const stages: Stage[] = [
  {
    n: "01",
    title: "Enquiry",
    body: "Ad, form, or call",
    d: "M0 8 H240 L201.1 100 H38.9 Z",
    cx: 120,
    cy: 54,
    fill: "#121210",
  },
  {
    n: "02",
    title: "Reply",
    body: "Text, chat, or voice",
    d: "M42.3 108 H197.7 L158.9 200 H81.1 Z",
    cx: 120,
    cy: 154,
    fill: "#3a52e8",
  },
  {
    n: "03",
    title: "Booked",
    body: "On the calendar",
    d: "M84.5 208 H155.5 L120 292 Z",
    cx: 120,
    cy: 250,
    fill: "#243cdd",
  },
];

export function HeroFunnel() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <aside aria-label="Lead to booking funnel" className="hidden lg:block">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">The funnel</p>

      <div className="grid grid-cols-[minmax(0,1fr)_minmax(320px,380px)] items-center gap-6">
        <ol className="space-y-9">
          {stages.map((stage, i) => {
            const on = active === i;
            return (
              <li key={stage.n}>
                <button
                  type="button"
                  className="w-full text-left"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                >
                  <p
                    className={`font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                      on ? "text-accent" : "text-faint"
                    }`}
                  >
                    {stage.n}
                  </p>
                  <p
                    className={`mt-1.5 text-2xl tracking-tight transition-all duration-300 ${
                      on ? "translate-x-1.5 text-accent" : "text-ink"
                    }`}
                  >
                    {stage.title}
                  </p>
                  <p className={`mt-1 text-sm transition-colors duration-300 ${on ? "text-dim" : "text-muted"}`}>
                    {stage.body}
                  </p>
                </button>
              </li>
            );
          })}
        </ol>

        <svg viewBox="0 0 240 300" className="h-[400px] w-full overflow-visible" role="img" aria-hidden>
          <defs>
            <filter id="funnelGlow" x="-35%" y="-35%" width="170%" height="170%">
              <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#243cdd" floodOpacity="0.45" />
            </filter>
          </defs>

          {stages.map((stage, i) => {
            const on = active === i;
            return (
              <g
                key={stage.n}
                className="cursor-pointer will-change-transform"
                style={{
                  transformOrigin: `${stage.cx}px ${stage.cy}px`,
                  transform: on ? "scale(1.12)" : "scale(1)",
                  transition: "transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
                  filter: on ? "url(#funnelGlow)" : undefined,
                }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <path d={stage.d} fill={stage.fill} />
              </g>
            );
          })}
        </svg>
      </div>
    </aside>
  );
}
