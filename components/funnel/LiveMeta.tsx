"use client";

import { useEffect, useState } from "react";

export function LiveMeta({
  inverted = false,
  className = "",
}: {
  inverted?: boolean;
  className?: string;
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] ${
        inverted ? "text-white/80" : "text-muted"
      } ${className}`}
    >
      <i className="block h-2 w-2 shrink-0 bg-accent" aria-hidden />
      <span>Remote · Global</span>
      <span>{time ? `${time} local` : "––:–– local"}</span>
    </p>
  );
}
