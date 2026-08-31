import { PillButton } from "@/components/ui/PillButton";
import { cta } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="border-t border-ink/10 px-4 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-sm">
          <span className="text-accent">08</span>
          <span> / Contact</span>
        </p>
        <h2 className="display mt-6 max-w-[16ch]">Let’s install the engine.</h2>
        <p className="mt-6 max-w-lg text-base leading-7 text-muted">
          Thirty minutes. We look at how leads enter today and whether a Growth Map or a full install is the
          next step.
        </p>
        <div className="mt-10">
          <PillButton href={cta.primary.href} className="text-3xl sm:text-4xl">
            {cta.primary.label}
          </PillButton>
        </div>
      </div>
    </section>
  );
}
