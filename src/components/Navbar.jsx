import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#publications', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Gábor Markó
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 text-slate-600 dark:text-slate-400"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-full p-2 text-slate-600 dark:text-slate-400"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 px-6 py-4 sm:hidden dark:border-slate-800">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-600 dark:text-slate-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
