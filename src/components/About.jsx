import { Reveal } from './Reveal';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <Reveal>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
          I'm an M.Sc. student in Robotics, Cognition, Intelligence at the
          Technical University of Munich (TUM), currently doing guided
          research on combining deep reinforcement learning and motion
          planning on real robot hardware — with a paper submitted to the
          Conference on Robot Learning (CoRL). Before TUM, I completed a
          B.Sc. in Mechatronics Engineering at BME Budapest with highest honours,
          including a semester abroad at KIT Karlsruhe. I'm interested in
          robot learning, motion planning, computer vision, and autonomous
          driving.
        </p>
      </Reveal>
    </Section>
  );
}
