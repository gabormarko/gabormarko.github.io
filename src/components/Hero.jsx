import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Reveal } from './Reveal';

const SOCIALS = [
  { href: 'https://github.com/gabormarko', label: 'GitHub', icon: GithubIcon },
  { href: 'https://www.linkedin.com/in/gabor-marko1/', label: 'LinkedIn', icon: LinkedinIcon },
  { href: 'mailto:gabor.marko@tum.de', label: 'Email', icon: Mail },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <Reveal>
        <img
          src="/photo.jpg"
          alt="Portrait of Gábor Markó"
          className="mx-auto mb-6 h-36 w-36 rounded-full object-cover ring-4 ring-slate-100 dark:ring-slate-800"
        />
      </Reveal>
      <Reveal delay={40}>
        <p className="mb-4 text-sm font-medium tracking-wide text-indigo-500 dark:text-indigo-400">
          Hi, I'm
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Gábor Markó
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-4 text-lg text-slate-600 sm:text-xl dark:text-slate-400">
          M.Sc. Student in Robotics, Cognition & Intelligence @ TUM
        </p>
      </Reveal>
      <Reveal delay={240}>
        <p className="mx-auto mt-6 max-w-xl text-base text-slate-500 dark:text-slate-500">
          Researching how to combine deep reinforcement learning and motion
          planning on real robot hardware, with a background in control
          engineering and mechatronics.
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
