import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { Section } from './Section';

const PUBLICATIONS = [
  {
    title: 'Placeholder Paper Title Goes Here',
    venue: 'Conference / Journal Name',
    year: '2026',
    href: '#',
  },
  {
    title: 'Another Placeholder Publication Title',
    venue: 'Workshop / Journal Name',
    year: '2025',
    href: '#',
  },
];

export function Publications() {
  return (
    <Section id="publications" eyebrow="Publications" title="Papers & writing">
      <ul className="space-y-6">
        {PUBLICATIONS.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 80}>
            <li>
              <a
                href={pub.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 rounded-lg border border-slate-200 p-4 transition-colors hover:border-indigo-400 dark:border-slate-800 dark:hover:border-indigo-500"
              >
                <div>
                  <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                    {pub.venue} · {pub.year}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-0.5 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500"
                />
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
