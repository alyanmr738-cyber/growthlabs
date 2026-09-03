import Link from "next/link";
import { contact, cta, site } from "@/lib/site";

export function CtaBand() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 lg:px-14">
      <div className="mx-auto max-w-[1470px] border-y border-ink/10">
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-ink/10 py-16 lg:border-b-0 lg:border-r lg:py-20 lg:pr-12">
            <p className="font-mono text-sm">
              <span className="text-accent">{contact.index.split(" / ")[0]}</span>
              <span> / {contact.index.split(" / ")[1]}</span>
            </p>
            <h2 className="display mt-10 max-w-[12ch]">{contact.title}</h2>
          </div>
          <div className="flex flex-col justify-between gap-16 pt-16 lg:pt-20">
            <p className="max-w-sm px-0 text-base leading-7 text-muted lg:pl-12">{contact.body}</p>
            <div className="bg-accent p-8 text-white sm:p-10 lg:pl-12">
              <Link
                href={cta.primary.href}
                prefetch
                className="inline-flex items-baseline gap-2 text-2xl tracking-tight sm:text-3xl"
              >
                <span className="font-mono text-[0.7em]">[</span>
                {contact.box}
                <span className="font-mono text-[0.7em]">]</span>
              </Link>
              <p className="mt-4 text-sm text-white/85">
                {contact.direct}{" "}
                <a href={`mailto:${site.email}`} className="underline decoration-white/50 underline-offset-4">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
