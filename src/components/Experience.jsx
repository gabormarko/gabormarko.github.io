import { Reveal } from './Reveal';
import { Section } from './Section';

const ROLES = [
  {
    role: 'Job Title',
    org: 'Company Name',
    period: '2024 — Present',
    bullets: [
      'One-line placeholder achievement or responsibility.',
      'Another placeholder bullet describing impact or scope.',
    ],
  },
  {
    role: 'Previous Job Title',
    org: 'Previous Company',
    period: '2022 — 2024',
    bullets: [
      'Placeholder bullet — edit in src/components/Experience.jsx.',
      'Placeholder bullet describing a project or result.',
    ],
  },
  {
    role: 'Degree / Program',
    org: 'University Name',
    period: '2018 — 2022',
    bullets: ['Placeholder bullet about your studies or thesis focus.'],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="space-y-10 border-l border-slate-200 dark:border-slate-800">
        {ROLES.map((item, i) => (
          <Reveal key={item.role + item.org} delay={i * 80}>
            <li className="relative pl-8">
              <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-indigo-500" />
              <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500">
                {item.period}
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                {item.role} · <span className="font-normal">{item.org}</span>
              </h3>
              <ul className="mt-2 space-y-1">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
