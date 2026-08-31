import Link from "next/link";

export function CornerTalk() {
  return (
    <Link
      href="/book"
      prefetch
      aria-label="Let's talk — book a call"
      className="fixed bottom-6 right-6 z-30 hidden md:block"
    >
      <span className="relative block pl-7 pr-8 text-[2.65rem] font-medium leading-[0.88] tracking-[-0.04em] text-ink">
        <span
          aria-hidden
          className="absolute top-0 left-0 font-sans text-[2.75rem] leading-none font-medium text-accent"
        >
          [
        </span>
        Let’s
        <br />
        talk
        <span
          aria-hidden
          className="absolute right-0 bottom-0 font-sans text-[2.75rem] leading-none font-medium text-accent"
        >
          ]
        </span>
      </span>
    </Link>
  );
}
