import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Reveal } from './Reveal';
import { Section } from './Section';

const SOCIALS = [
  { href: 'mailto:you@example.com', label: 'Email', icon: Mail },
  { href: 'https://github.com/gabormarko', label: 'GitHub', icon: GithubIcon },
  { href: 'https://linkedin.com/in/your-handle', label: 'LinkedIn', icon: LinkedinIcon },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <Reveal>
        <p className="text-base text-slate-600 dark:text-slate-400">
          Placeholder — replace in{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm dark:bg-slate-800">
            src/components/Contact.jsx
          </code>
          . Say what you're open to: opportunities, collaborations,
          questions, or just saying hello.
        </p>
      </Reveal>
      <Reveal delay={100} className="mt-6 flex gap-4">
        {SOCIALS.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="rounded-full border border-slate-200 p-3 text-slate-600 transition-colors hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-800 dark:text-slate-400 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
          >
            <Icon size={18} />
          </a>
        ))}
      </Reveal>
    </Section>
  );
}
