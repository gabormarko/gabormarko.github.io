export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-400 dark:border-slate-800 dark:text-slate-600">
      © {new Date().getFullYear()} Gábor Markó. Built with React, Vite & Tailwind CSS.
    </footer>
  );
}
