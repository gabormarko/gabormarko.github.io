export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-3xl px-6">
        {(eyebrow || title) && (
          <div className="mb-12">
            {eyebrow && (
              <p className="mb-2 text-sm font-medium tracking-wide text-indigo-500 dark:text-indigo-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
