import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { Section } from './Section';

const PUBLICATIONS = [
  {
    title:
      'Combining Deep Reinforcement Learning and Motion Planning on Real Robot Hardware',
    venue: 'Conference on Robot Learning (CoRL) — submitted',
    year: '2026',
    href: null,
  },
  {
    title: 'Time Delay Compensation in Vehicle Motion Control Using MPC',
    venue: "Students' Scientific Conference (TDK) — 3rd place",
    year: '2024',
    href: null,
  },
  {
    title: 'An Analysis of Geometric Extremum Problems Using GeoGebra',
    venue: 'Polygon 25 No. 2, 22–34 (ISSN: HU ISSN 1215-3044)',
    year: '2019',
    href: 'https://www.math.u-szeged.hu/polygonlap/p298.pdf',
  },
];

export function Publications() {
  return (
    <Section id="publications" eyebrow="Research" title="Papers & writing">
      <ul className="space-y-6">
        {PUBLICATIONS.map((pub, i) => {
          const Tag = pub.href ? 'a' : 'div';
          return (
            <Reveal key={pub.title} delay={i * 80}>
              <li>
                <Tag
                  {...(pub.href
                    ? { href: pub.href, target: '_blank', rel: 'noreferrer' }
                    : {})}
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
                  {pub.href && (
                    <ArrowUpRight
                      size={18}
                      className="mt-0.5 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500"
                    />
                  )}
                </Tag>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
