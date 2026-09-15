import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Reveal } from './Reveal';
import { Section } from './Section';

const PROJECTS = [
  {
    title: 'Project One',
    description:
      'One or two sentences describing what this project does and why it exists.',
    tags: ['Tag', 'Tag'],
    repo: 'https://github.com/gabormarko',
    demo: null,
  },
  {
    title: 'Project Two',
    description:
      'Placeholder description — edit in src/components/Projects.jsx.',
    tags: ['Tag', 'Tag', 'Tag'],
    repo: 'https://github.com/gabormarko',
    demo: '#',
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <div className="flex h-full flex-col rounded-lg border border-slate-200 p-5 transition-colors hover:border-indigo-400 dark:border-slate-800 dark:hover:border-indigo-500">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    <GithubIcon size={15} /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    <ArrowUpRight size={15} /> Demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
