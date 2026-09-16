import { ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Reveal } from './Reveal';
import { Section } from './Section';

const PROJECTS = [
  {
    title: 'Sim-and-Real Co-Training for Robust Manipulation Policies',
    description:
      "Master's thesis developing sim-and-real co-training methods to improve the robustness of learned robot manipulation policies. TUM Learning Systems and Robotics Lab.",
    tags: ['Reinforcement Learning', 'Sim-to-Real', 'Robot Manipulation'],
    repo: null,
    demo: null,
    // Drop files at public/projects/sim-real-cotraining-poster.png / -demo.mp4, then set below
    poster: null,
    videos: [],
  },
  {
    title: 'Data and Learning Where it Matters for Contact-Rich Manipulation',
    description:
      'Combines reinforcement learning with motion planning by restricting expensive data collection to the contact-rich segments of a task and relying on traditional planning elsewhere. 96% average success across four real-world manipulation tasks with just 2–2.5 hours of autonomous data per task. Paper submitted to CoRL.',
    tags: ['Reinforcement Learning', 'Motion Planning', 'Robot Manipulation'],
    repo: null,
    demo: 'https://learnsyslab.github.io/data_and_learning_where_it_matters/',
    demoLabel: 'Project Page',
    paper: 'https://learnsyslab.github.io/data_and_learning_where_it_matters/paper.pdf',
    poster: null,
    videos: ['/projects/data_and_learning_final.mp4', '/projects/long_horizon_task.mp4'],
  },
    {
    title: 'Imitation Learning for Robot Policies at KI-Fabrik',
    description:
      'Trained learning-based robot manipulation policies with imitation learning during a hackathon-style project week for the Advanced Robot Learning and Decision-Making course.',
    tags: ['Imitation Learning', 'Robot Policies'],
    repo: null,
    demo: null,
    poster: null,
    videos: ['/projects/imitation-learning-ki-fabrik-demo.mp4'],
  },
  {
    title: 'Open-Vocabulary Semantic Novel View Synthesis with 3D Gaussians',
    description:
      'End-to-end pipeline for open-vocabulary semantic novel view synthesis, built on 3D Gaussian Splatting. TUM Visual Computing & AI Lab semester project.',
    tags: ['3D Gaussians', 'Computer Vision', 'Semantic Segmentation'],
    // TODO: swap in the actual repo link
    repo: 'https://github.com/gabormarko/3D-semantic-segmentation',
    demo: null,
    poster: '/projects/ADL4CV_SemSegm_Poster_FINAL.png',
    videos: [],
  },
  {
    title: 'Learning-Based Rigid Tube Model Predictive Control',
    description:
      'Learning-based rigid tube MPC for motion planning on EDGAR, TUM’s autonomous research vehicle. Cyber Physical Systems Group semester project.',
    tags: ['MPC', 'Autonomous Driving', 'Motion Planning'],
    // TODO: swap in the actual repo link
    repo: 'https://github.com/gabormarko/learning-based-mpc',
    demo: null,
    posterPdf: '/projects/Gabor_Marko_Poster_practicalCourse_MPFAV_final.pdf',
    poster: '/projects/rigid-tube-mpc-poster.jpg',
    videos: [],
  },
  {
    title: 'Time Delay Compensation in Vehicle Motion Control Using MPC',
    description: 'Working on vehicle motion control algorithm development for ADAS.',
    bullets: [
      'Construction of a complex vehicle dynamics model.',
      'Designed a model predictive controller (MPC) for lateral and longitudinal control of the vehicle.',
      'Compensation of the time delay appearing in the control loop.',
      'Testing controller performance and effects of time delay in CarMaker simulation environment.',
    ],
    tags: ['MPC', 'Vehicle Dynamics', 'ADAS', 'CarMaker'],
    repo: null,
    demo: null,
    // Drop a file at public/projects/time-delay-mpc-poster.<ext>, then set below
    poster: null,
    videos: ['/projects/iso-3888-2-lane-change-test.mp4'],
  },
  {
    title: 'Linear Algebra — Interactive Animations',
    description: 'Interactive GeoGebra animations built as university course material for Linear Algebra.',
    tags: ['GeoGebra', 'Linear Algebra', 'Teaching'],
    repo: null,
    demo: 'https://www.geogebra.org/m/encn3az9',
    demoLabel: 'Animations',
    poster: '/projects/linalg2.png',
    videos: [],
  },
  {
    title: 'An Analysis of Geometric Extremum Problems Using GeoGebra',
    description:
      'Investigated extremum problems in geometry, using GeoGebra to construct and visualize the underlying geometric relationships. Published in Polygon.',
    tags: ['GeoGebra', 'Geometry', 'Mathematics'],
    repo: null,
    demo: 'https://matek.fazekas.hu/solo/arkitamas_intgeo/szelso.html',
    demoLabel: 'Animations',
    paper: 'https://www.math.u-szeged.hu/polygonlap/p298.pdf',
    poster: '/projects/polygon.png',
    videos: [],
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
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              {project.bullets && (
                <ul className="mt-2 list-disc space-y-1 pl-4">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-slate-600 dark:text-slate-400">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {(project.poster || project.videos.length > 0) && (
                <div className="mt-4 space-y-3">
                  {project.videos.length > 0 ? (
                    project.videos.map((src, idx) => (
                      <video
                        key={src}
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={idx === 0 ? (project.poster ?? undefined) : undefined}
                        className="aspect-video w-full rounded-md border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900"
                      >
                        <source src={src} type="video/mp4" />
                      </video>
                    ))
                  ) : (
                    <img
                      src={project.poster}
                      alt={`${project.title} preview`}
                      className="max-h-[420px] w-full rounded-md border border-slate-200 bg-slate-100 object-contain dark:border-slate-800 dark:bg-slate-900"
                    />
                  )}
                </div>
              )}
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
                    <ArrowUpRight size={15} /> {project.demoLabel ?? 'Demo'}
                  </a>
                )}
                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    <FileText size={15} /> Paper
                  </a>
                )}
                {project.posterPdf && (
                  <a
                    href={project.posterPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    <FileText size={15} /> Poster
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
