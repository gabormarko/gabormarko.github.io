import { Reveal } from './Reveal';

export function Timeline({ items }) {
  return (
    <ol className="space-y-10 border-l border-slate-200 dark:border-slate-800">
      {items.map((item, i) => (
        <Reveal key={item.role + item.org} delay={i * 80}>
          <li className="relative pl-8">
            <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-indigo-500" />
            <div className="flex items-start gap-3">
              {item.logo && (
                <img
                  src={item.logo}
                  alt=""
                  aria-hidden="true"
                  className="mt-0.5 h-9 w-9 shrink-0 rounded-md border border-slate-200 bg-white object-contain p-1.5 dark:border-slate-800"
                />
              )}
              <div className="min-w-0">
                <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500">
                  {item.period}
                </p>
                <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                  {item.role} · <span className="font-normal">{item.org}</span>
                </h3>
                {item.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm text-slate-600 dark:text-slate-400">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
