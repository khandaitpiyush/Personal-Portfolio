import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="apple-glass border-t border-black/5 dark:border-white/5 py-12 relative z-10">
      <div className="container-responsive">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Branding */}
          <div className="space-y-1.5">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{personalInfo.name}</h3>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">{personalInfo.title}</p>
            <p className="text-xs text-slate-500 font-normal">
              {personalInfo.college}
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right: Social Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">Social Connect</h4>
            <div className="flex gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full apple-glass text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-all shadow-xs"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full apple-glass text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-all shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full apple-glass text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-all shadow-xs"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-black/5 dark:border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p className="text-center sm:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Engineered with <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
