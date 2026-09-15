import { Reveal } from './Reveal';
import { Section } from './Section';

const SKILLS = [
  'Skill One',
  'Skill Two',
  'Skill Three',
  'Skill Four',
  'Skill Five',
  'Skill Six',
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <Reveal>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
          Placeholder bio — replace in{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm dark:bg-slate-800">
            src/components/About.jsx
          </code>
          . Write two or three sentences about your background, what you
          work on, and what motivates you. Mention your current role,
          field of interest, and anything that gives visitors a sense of
          who you are beyond a resume.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8">
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
