import { Section } from './Section';
import { Timeline } from './Timeline';

const ROLES = [
  {
    role: "Master's Thesis: Sim-and-Real Co-Training for Robust Manipulation Policies",
    org: 'TUM Learning Systems and Robotics Lab',
    period: 'Jun. 2026 — present',
    bullets: [
      'Developing sim-and-real co-training methods to improve the robustness of learned robot manipulation policies.',
    ],
  },
  {
    role: 'Teaching Assistant, Advanced Robot Learning and Decision-Making',
    org: 'TUM Learning Systems and Robotics Lab',
    period: 'Jun. 2026 — present',
    bullets: ['Teaching assistant for the Advanced Robot Learning and Decision-Making course.'],
  },
  {
    role: 'Research Intern, Guided Research',
    org: 'TUM Learning Systems and Robotics Lab',
    period: 'Mar. 2026 — Jun. 2026',
    bullets: [
      'Combining deep reinforcement learning and motion planning on real robot hardware; paper submitted to the Conference on Robot Learning (CoRL).',
    ],
  },
  {
    role: 'Teaching Assistant, Introduction to Deep Learning',
    org: 'TUM Visual Computing & Artificial Intelligence Lab',
    period: 'Jul. 2025 — present',
    bullets: ['Exam correction tutor for the Introduction to Deep Learning course.'],
  },
  /*
  {
    role: 'Hackathon-Style Project Week',
    org: 'TUM Learning Systems and Robotics Lab',
    period: 'Dec. 2025',
    bullets: [
      'Trained learning-based robot manipulation policies using imitation learning at KI-Fabrik.',
    ],
  },
  */
  /*
  {
    role: 'Semester Project, Advanced Deep Learning for Computer Vision',
    org: 'TUM Visual Computing & Artificial Intelligence Lab',
    period: 'Apr. 2025 — Sept. 2025',
    bullets: [
      'Built an end-to-end pipeline for open-vocabulary semantic novel view synthesis with 3D Gaussians.',
      'Exam correction tutor for Introduction to Deep Learning (Jul. 2025 — present).',
    ],
  },
  */
 /*
  {
    role: 'Semester Project, Motion Planning for EDGAR',
    org: 'TUM Cyber Physical Systems Group',
    period: 'Apr. 2025 — Sept. 2025',
    bullets: [
      'Developed a learning-based rigid tube model predictive controller for the autonomous research vehicle EDGAR.',
    ],
  },
  */
  {
    role: 'Developer, UAV Control Engineer',
    org: 'HUN-REN SZTAKI',
    period: 'Apr. 2024 — Sep. 2024',
    bullets: [
      'Developed optimal control algorithms for a flexible wing aircraft, Systems and Control Lab.',
    ],
  },
  {
    role: 'Software and Functions Engineer Trainee',
    org: 'AVL Hungary Kft.',
    period: 'Jul. 2023 — Feb. 2024',
    bullets: [
      'Built a vehicle dynamics model in MATLAB Simulink and designed a model predictive controller for lateral motion control on the ADAS team.',
      'Compensated the time delay occurring in the control loop.',
    ],
  },
  {
    role: 'Bachelor Thesis',
    org: 'BME, Department of Applied Mechanics',
    period: 'Sep. 2023 — Jan. 2024',
    bullets: [
      'Time delay compensation in vehicle motion control using model predictive control.',
      "Students' Scientific Conference (TDK) 3rd place.",
    ],
  },
  {
    role: 'Member, Structural Team',
    org: 'BME Suborbitals Rocket Development Team',
    period: 'Jan. 2021 — Feb. 2024',
    bullets: [
      'Development of experimental rockets for international competitions.',
      'European Rocketry Challenge: 9th place (2022).',
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <Timeline items={ROLES} />
    </Section>
  );
}
