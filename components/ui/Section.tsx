type Props = {
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  children: React.ReactNode;
  className?: string;
  center?: boolean;
  invert?: boolean;
};

export function Section({
  id,
  index,
  eyebrow,
  title,
  body,
  children,
  className = "",
  invert = false,
}: Props) {
  return (
    <section
      id={id}
      className={`px-4 py-16 sm:px-8 sm:py-24 lg:px-14 ${invert ? "bg-accent text-bg" : "bg-bg text-ink"} ${className}`}
    >
      <div className="mx-auto max-w-[1470px]">
        {(index || eyebrow || title || body) && (
          <header className="mb-12 max-w-4xl">
            {index || eyebrow ? (
              <p className={`mb-6 font-mono text-sm ${invert ? "text-bg/80" : "text-ink"}`}>
                {index ? (
                  <>
                    <span className={invert ? "text-bg" : "text-accent"}>{index.split(" / ")[0]}</span>
                    {index.includes(" / ") ? ` / ${index.split(" / ").slice(1).join(" / ")}` : null}
                  </>
                ) : (
                  <span className={invert ? "text-bg" : "text-accent"}>{eyebrow}</span>
                )}
              </p>
            ) : null}
            {title ? <h2 className="display max-w-5xl">{title}</h2> : null}
            {body ? (
              <p className={`mt-6 max-w-xl text-base leading-7 sm:text-lg ${invert ? "text-bg/80" : "text-muted"}`}>
                {body}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
