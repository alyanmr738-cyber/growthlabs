"use client";

import { createContext, type ReactNode, useContext, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  type MotionValue,
} from "motion/react";

const StackProgressContext = createContext<MotionValue<number> | null>(null);

export function useStackProgress() {
  return useContext(StackProgressContext);
}

export function ScrollStack({
  count,
  header,
  children,
  className = "",
  id,
  hideHeader,
}: {
  count: number;
  header?: (active: number) => ReactNode;
  children: (active: number) => ReactNode;
  className?: string;
  id?: string;
  hideHeader?: boolean;
}) {
  const trackRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(count - 1, Math.max(0, Math.floor(v * count)));
    setActive((prev) => (prev === i ? prev : i));
  });

  if (reduce) {
    return (
      <section id={id} className={className}>
        {header?.(0)}
        {children(0)}
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={trackRef}
      className={className}
      data-header-stack={hideHeader ? "" : undefined}
      style={{ height: `${Math.max(count, 1) * 85}vh` }}
    >
      <StackProgressContext.Provider value={scrollYProgress}>
        <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
          {header?.(active)}
          <div className="relative min-h-0 flex-1">{children(active)}</div>
        </div>
      </StackProgressContext.Provider>
    </section>
  );
}

export function StackSlide({
  index,
  active,
  children,
  className = "",
  align = "center",
}: {
  index: number;
  active: number;
  children: ReactNode;
  className?: string;
  align?: "center" | "start";
}) {
  const on = index === active;
  return (
    <motion.div
      className={`absolute inset-0 flex ${align === "start" ? "items-start" : "items-center"} ${className}`}
      initial={false}
      animate={{
        opacity: on ? 1 : 0,
        y: index < active ? -56 : index > active ? 56 : 0,
        scale: on ? 1 : 0.98,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: on ? "auto" : "none" }}
    >
      {children}
    </motion.div>
  );
}
