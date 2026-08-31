import Link from "next/link";

export function LetsTalkMark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/book"
      prefetch
      aria-label="Let's talk — book a call"
      className={`relative inline-block pl-4 pr-5 text-xl leading-[0.95] tracking-tight text-ink sm:text-2xl ${className}`}
    >
      <span aria-hidden className="absolute top-0 left-0 font-mono text-[0.7em] text-accent">
        [
      </span>
      Let’s
      <br />
      talk
      <span aria-hidden className="absolute right-0 bottom-0 font-mono text-[0.7em] text-accent">
        ]
      </span>
    </Link>
  );
}
