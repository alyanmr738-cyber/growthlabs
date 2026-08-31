import Link from "next/link";
import { contact, cta, site } from "@/lib/site";

export function CtaBand() {
  return (
    <section id="contact" className="relative z-20 scroll-mt-24 bg-bg px-4 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-sm">
          <span className="text-accent">{contact.index.split(" / ")[0]}</span>
          <span> / {contact.index.split(" / ")[1]}</span>
        </p>
        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display max-w-[12ch]">{contact.title}</h2>
          <p className="max-w-sm text-base leading-7 text-muted">{contact.body}</p>
        </div>
        <div className="mt-16 bg-accent p-8 text-white sm:p-12 md:p-16">
          <Link
            href={cta.primary.href}
            prefetch
            className="inline-flex items-baseline gap-2 text-3xl tracking-tight sm:text-5xl"
          >
            <span className="font-mono text-[0.7em]">[</span>
            {contact.box}
            <span className="font-mono text-[0.7em]">]</span>
          </Link>
          <p className="mt-6 text-base text-white/85">
            {contact.direct}{" "}
            <a href={`mailto:${site.email}`} className="underline decoration-white/50 underline-offset-4">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
