import { Reveal } from './Reveal';
import { Section } from './Section';

const SKILL_GROUPS = [
  {
    category: 'Programming',
    skills: ['Python', 'C++', 'C', 'MATLAB/Simulink', 'LabVIEW'],
  },
  {
    category: 'Robotics & Machine Learning',
    skills: [
      'PyTorch',
      'ROS',
      'Reinforcement Learning',
      'Motion Planning',
      'Computer Vision',
    ],
  },
  {
    category: 'Engineering & CAD',
    skills: ['ANSYS', 'Abaqus', 'SolidEdge', 'Inventor'],
  },
  {
    category: 'Tools',
    skills: ['Docker', 'Git', 'LaTeX'],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-8 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <h3 className="mb-3 text-sm font-medium text-slate-500 dark:text-slate-500">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 transition-colors hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-800 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
