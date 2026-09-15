import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Reveal } from './Reveal';

const SOCIALS = [
  { href: 'https://github.com/gabormarko', label: 'GitHub', icon: GithubIcon },
  { href: 'https://linkedin.com/in/your-handle', label: 'LinkedIn', icon: LinkedinIcon },
  { href: 'mailto:you@example.com', label: 'Email', icon: Mail },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <Reveal>
        <p className="mb-4 text-sm font-medium tracking-wide text-indigo-500 dark:text-indigo-400">
          Hi, I'm
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Your Name
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-4 text-lg text-slate-600 sm:text-xl dark:text-slate-400">
          Your Title — replace in{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-base dark:bg-slate-800">
            src/components/Hero.jsx
          </code>
        </p>
      </Reveal>
      <Reveal delay={240}>
        <p className="mx-auto mt-6 max-w-xl text-base text-slate-500 dark:text-slate-500">
          A one- or two-sentence tagline about what you build and what you're
          curious about goes here.
        </p>
      </Reveal>
      <Reveal delay={320}>
        <div className="mt-8 flex items-center justify-center gap-4">
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
        </div>
      </Reveal>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-10 animate-bounce text-slate-400 dark:text-slate-600"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
