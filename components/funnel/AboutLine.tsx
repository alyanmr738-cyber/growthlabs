import { aboutLine, site } from "@/lib/site";

export function AboutLine() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto grid min-h-[70svh] max-w-[1400px] gap-16 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm">
            <span className="text-accent">04</span>
            <span> / About</span>
          </p>
          <h2 className="display mt-10 max-w-[13ch]">{aboutLine.title}</h2>
        </div>

        <div className="relative flex min-h-[22rem] flex-col justify-between py-2 lg:pl-20">
          <p className="max-w-xs text-sm leading-6 text-muted lg:absolute lg:right-0 lg:top-0 lg:max-w-[16rem]">
            {aboutLine.aside}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{aboutLine.start}</p>

          <div className="absolute bottom-8 top-8 left-0 hidden w-px bg-ink/15 lg:block" aria-hidden />

          <div className="relative flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex items-center gap-1 font-mono text-sm text-accent lg:absolute lg:-left-[4.6rem]">
              [<i className="mx-1.5 inline-block h-2.5 w-2.5 bg-accent" />]
            </span>
            <p className="text-xl tracking-tight">{site.name}</p>
            <p className="max-w-xs text-sm leading-6 text-muted">{aboutLine.marker}</p>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{aboutLine.end}</p>
        </div>
      </div>
    </section>
  );
}
