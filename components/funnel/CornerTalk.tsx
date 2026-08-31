"use client";

import { usePathname } from "next/navigation";
import { LetsTalkMark } from "@/components/funnel/LetsTalkMark";

export function CornerTalk() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return <LetsTalkMark className="fixed right-4 bottom-8 z-30 hidden md:block lg:right-14" />;
}
