type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  children: React.ReactNode;
  className?: string;
  center?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  body,
  children,
  className = "",
  center = true,
}: Props) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || body) && (
          <header className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow ? (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                {title}
              </h2>
            ) : null}
            {body ? (
              <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{body}</p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
