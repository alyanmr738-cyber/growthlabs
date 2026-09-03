import Image from "next/image";
import Link from "next/link";
import { featuredWork, type WorkProject } from "@/lib/work";

export function FeaturedWork() {
  return (
    <section id="live-work" className="scroll-mt-24 bg-bg px-4 py-20 sm:px-8 sm:py-28 lg:px-14">
      <div className="mx-auto max-w-[1470px]">
        <p className="font-mono text-sm">
          <span className="text-accent">04</span>
          <span className="text-faint"> / </span>
          <span>Work</span>
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="display max-w-[14ch]">Featured work</h2>
          <p className="max-w-md text-base leading-7 text-muted">
            Three builds that show the pattern: enquiry in, appointment on the calendar. Full portfolio on the
            work page.
          </p>
        </div>

        <ul className="mt-16 grid gap-10 lg:grid-cols-3">
          {featuredWork.map((project) => (
            <li key={project.slug}>
              <FeaturedCard project={project} />
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link href="/work" prefetch className="inline-flex items-baseline gap-1 text-xl tracking-tight text-ink">
            <span className="font-mono text-accent">[</span>
            See all work
            <span className="font-mono text-accent">]</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: WorkProject }) {
  const cover = project.shots?.[0];

  return (
    <Link href={`/work#${project.slug}`} prefetch className="group block">
      {cover ? (
        <div className="overflow-hidden border border-ink/10 bg-card">
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 30vw, 100vw"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-end border border-ink/10 bg-card p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{project.niche}</p>
        </div>
      )}
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{project.niche}</p>
      <h3 className="mt-2 text-2xl tracking-tight group-hover:text-accent">{project.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{project.result}</p>
    </Link>
  );
}
