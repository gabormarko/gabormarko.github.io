import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Reveal } from './Reveal';
import { Section } from './Section';

const PROJECTS = [
  {
    title: 'Open-Vocabulary Semantic Novel View Synthesis with 3D Gaussians',
    description:
      'End-to-end pipeline for open-vocabulary semantic novel view synthesis, built on 3D Gaussian Splatting. TUM Visual Computing & AI Lab semester project.',
    tags: ['3D Gaussians', 'Computer Vision', 'Semantic Segmentation'],
    // TODO: swap in the actual repo link
    repo: 'https://github.com/gabormarko',
    demo: null,
  },
  {
    title: 'Learning-Based Rigid Tube Model Predictive Control',
    description:
      'Learning-based rigid tube MPC for motion planning on EDGAR, TUM’s autonomous research vehicle. Cyber Physical Systems Group semester project.',
    tags: ['MPC', 'Autonomous Driving', 'Motion Planning'],
    // TODO: swap in the actual repo link
    repo: 'https://github.com/gabormarko',
    demo: null,
  },
  {
    title: 'Imitation Learning for Robot Policies at KI-Fabrik',
    description:
      'Trained learning-based robot manipulation policies with imitation learning during a hackathon-style project week for the Advanced Robot Learning and Decision-Making course.',
    tags: ['Imitation Learning', 'Robot Policies'],
    repo: null,
    demo: null,
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
