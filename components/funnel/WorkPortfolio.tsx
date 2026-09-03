import Image from "next/image";
import { workProjects, type WorkProject } from "@/lib/work";

export function WorkPortfolio() {
  return (
    <section className="px-4 pb-8 pt-28 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1470px]">
        <p className="font-mono text-sm">
          <span className="text-accent">01</span>
          <span className="text-faint"> / </span>
          <span>Portfolio</span>
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h1 className="display max-w-[14ch]">Work we have shipped</h1>
          <p className="max-w-md text-base leading-7 text-muted">
            CRM rebuilds, speed-to-lead, ads and tracking, funnels, and AI that books. Client names stay
            confidential where required — the systems are real.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workProjects.map((project, i) => (
            <li key={project.slug}>
              <a
                href={`#${project.slug}`}
                className="block border border-ink/10 p-6 transition-colors hover:border-accent/40"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {String(i + 1).padStart(2, "0")} · {project.niche}
                </p>
                <h2 className="mt-4 text-2xl tracking-tight">{project.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-dim">{project.result}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-8 max-w-[1470px] space-y-24 py-16">
        {workProjects.map((project, i) => (
          <ProjectDetail key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectDetail({ project, index }: { project: WorkProject; index: number }) {
  return (
    <article id={project.slug} className="scroll-mt-28 border-t border-ink/10 pt-16">
      <p className="font-mono text-sm">
        <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
        <span className="text-faint"> / </span>
        <span>{project.niche}</span>
      </p>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <h2 className="display max-w-[16ch] !text-[clamp(2rem,4.5vw,3.75rem)]">{project.title}</h2>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{project.client}</p>
        </div>
        <div>
          <p className="text-lg tracking-tight text-ink">{project.result}</p>
          <p className="mt-4 text-base leading-7 text-muted">{project.body}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border border-ink/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-dim"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {project.stats ? (
        <dl className="mt-14 grid grid-cols-2 gap-px bg-ink/10 sm:grid-cols-4">
          {project.stats.map((s) => (
            <div key={s.label} className="bg-bg px-4 py-8 sm:px-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{s.label}</dt>
              <dd className="mt-3 text-4xl tracking-tight text-ink sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {project.shots?.length ? (
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {project.shots.map((shot) => (
            <figure key={shot.src + shot.caption}>
              <div className="overflow-hidden border border-ink/10 bg-card">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
              <figcaption className="mt-4 max-w-md text-sm leading-6 text-muted">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      {project.outcomes?.length ? (
        <ul className="mt-12 max-w-2xl space-y-3 text-base leading-7 text-dim">
          {project.outcomes.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : null}

      {project.note ? (
        <p className="mt-10 max-w-2xl font-mono text-[11px] leading-5 uppercase tracking-[0.12em] text-faint">
          {project.note}
        </p>
      ) : null}
    </article>
  );
}
