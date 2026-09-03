"use client";

import { usePathname } from "next/navigation";
import { LetsTalkMark } from "@/components/funnel/LetsTalkMark";

export function CornerTalk() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="pointer-events-none fixed right-4 bottom-8 z-40 hidden md:block lg:right-14">
      <LetsTalkMark className="pointer-events-auto" />
    </div>
  );
}
