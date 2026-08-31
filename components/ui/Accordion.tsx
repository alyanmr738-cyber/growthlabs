"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-t border-ink/10 last:border-b">
            <button
              type="button"
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="flex gap-4">
                <span className="mt-1 font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg tracking-tight text-ink sm:text-xl">{item.q}</span>
              </span>
              <span className="font-mono text-accent">{isOpen ? "–" : "+"}</span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pl-10 text-sm leading-7 text-muted sm:text-base">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
