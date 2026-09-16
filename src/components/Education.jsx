import { Section } from './Section';
import { Timeline } from './Timeline';

const EDUCATION = [
  {
    role: 'M.Sc., Robotics, Cognition, Intelligence',
    org: 'Technical University of Munich (TUM)',
    logo: '/logos/tum.svg',
    period: 'Oct. 2024 — present',
    bullets: [
      'Advanced coursework in control engineering, robotics, computer vision, and machine learning.',
      'DAAD Scholarship for Master Studies; CommonRoad Prize Challenge, 13th place.',
    ],
  },
  /*{
    role: 'M.Sc., Mechanical Engineering Modelling (Solid & Fluid Mechanics)',
    org: 'Budapest University of Technology and Economics (BME)',
    logo: '/logos/bme.jpg',
    period: 'Feb. 2024 — Oct. 2024',
    bullets: [],
  },*/
  {
    role: 'B.Sc., Mechatronics Engineering',
    org: 'Budapest University of Technology and Economics (BME)',
    logo: '/logos/bme.jpg',
    period: 'Sep. 2020 — Jan. 2024',
    bullets: [
      'Graduated with highest honours, diploma average 4.95/5.0; ranked in the top 5% of the peer group (GPA 4.84/5.0).',
      "National Scholarship of Higher Education (top 0.8% of all university students, 2021–22 & 2022–23); Students' Scientific Conference (TDK) 3rd place (2023).",
    ],
  },
  {
    role: 'Erasmus Exchange Semester',
    org: 'Karlsruhe Institute of Technology (KIT)',
    logo: '/logos/kit.svg',
    period: 'Oct. 2022 — Mar. 2023',
    bullets: [
      'German-language engineering education program, partnership between BME and KIT; 5th semester at KIT.',
    ],
  },
  {
    role: 'Advanced Group in Mathematics, Physics & Informatics',
    org: 'Révai Miklós Secondary Grammar School',
    period: 'Sep. 2014 — Jul. 2020',
    bullets: [
      'Excellent graduation certificate (498/500 points); national mathematics and physics competitions, top 30.',
      'Student of Pál Erdős School for Talent Development in Mathematics, weekend courses and summer camps.',
    ],
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I studied">
      <Timeline items={EDUCATION} />
    </Section>
  );
}
