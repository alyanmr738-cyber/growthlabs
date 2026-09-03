import Link from "next/link";

export function LetsTalkMark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/book"
      prefetch
      aria-label="Let's talk — book a call"
      className={`relative inline-grid size-[5.75rem] shrink-0 place-items-center rounded-full bg-accent text-center text-lg leading-[0.95] tracking-tight text-white shadow-[0_8px_32px_rgba(36,60,221,0.35)] transition-[transform,box-shadow] duration-300 hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(36,60,221,0.45)] sm:size-[6.5rem] sm:text-xl ${className}`}
    >
      <span className="relative inline-block pl-3 pr-3.5">
        <span aria-hidden className="absolute top-0 left-0 font-mono text-[0.65em] text-white/45">
          [
        </span>
        Let’s
        <br />
        talk
        <span aria-hidden className="absolute right-0 bottom-0 font-mono text-[0.65em] text-white/45">
          ]
        </span>
      </span>
    </Link>
  );
}
