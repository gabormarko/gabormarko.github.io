import { Bot, BrainCircuit, Code, Ruler, Wrench } from 'lucide-react';
import { Reveal } from './Reveal';
import { Section } from './Section';

const SKILL_GROUPS = [
  {
    category: 'Programming',
    icon: Code,
    skills: ['Python', 'C++', 'C', 'MATLAB/Simulink', 'LabVIEW'],
  },
  {
    category: 'Robot Learning',
    icon: Bot,
    skills: ['Reinforcement Learning', 'Motion Planning', 'Imitation Learning', 'Sim-to-Real', 'ROS'],
  },
  {
    category: 'Machine Learning',
    icon: BrainCircuit,
    skills: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Semantic Segmentation'],
  },
  {
    category: 'Engineering & CAD',
    icon: Ruler,
    skills: ['ANSYS', 'Abaqus', 'SolidEdge', 'Inventor'],
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: ['Docker', 'Git', 'LaTeX'],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-4 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="h-full rounded-lg border border-slate-200 p-5 transition-colors hover:border-indigo-400 dark:border-slate-800 dark:hover:border-indigo-500">
              <div className="mb-3 flex items-center gap-2">
                <group.icon size={16} className="text-indigo-500 dark:text-indigo-400" />
                <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
