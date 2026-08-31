"use client";

import { useEffect, useState } from "react";
import { overlayMenu } from "@/lib/site";
import { useOnBlue } from "@/components/funnel/useOnBlue";

export function ChapterNav() {
  const [current, setCurrent] = useState("01");
  const onBlue = useOnBlue();

  useEffect(() => {
    const ids = overlayMenu.map((item) => item.href.replace("/#", ""));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!hit) return;
        const item = overlayMenu.find((m) => m.href.endsWith(hit.target.id));
        if (item) setCurrent(item.n);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page chapters"
      className="pointer-events-none fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {overlayMenu.map((item) => {
        const on = item.n === current;
        return (
          <a
            key={item.n}
            href={item.href}
            className={`pointer-events-auto font-mono text-[11px] tracking-[0.14em] transition-colors ${
              on
                ? onBlue
                  ? "text-white"
                  : "text-accent"
                : onBlue
                  ? "text-white/35"
                  : "text-faint hover:text-ink"
            }`}
          >
            {item.n}
          </a>
        );
      })}
    </nav>
  );
}
