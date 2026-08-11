import { personalInfo } from '../data/portfolio-data';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
        {/* Left Info */}
        <div className="text-center sm:text-left space-y-1">
          <p className="font-bold text-slate-800 dark:text-slate-200">
            {personalInfo.name}
          </p>
          <p className="text-[11px]">
            {personalInfo.subtitle} • {personalInfo.college}
          </p>
        </div>

        {/* Center Copyright */}
        <div className="flex items-center gap-1 text-[11px]">
          <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
