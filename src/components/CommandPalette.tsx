import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Code2, FolderGit2, Briefcase, User, Mail, FileText, Terminal, X, ArrowRight, ExternalLink } from 'lucide-react';
import { personalInfo, projects, skillCategories } from '../data/portfolio-data';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPitch: () => void;
  onOpenTerminal: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenPitch, onOpenTerminal }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // toggle open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="w-full max-w-2xl glass-card rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white/95 dark:bg-slate-900/95"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800">
            <Search className="w-5 h-5 text-indigo-500 mr-3 shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Type a command, search skills, or project..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 text-base"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="max-h-96 overflow-y-auto p-3 space-y-4">
            {/* Quick Actions */}
            {!query && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 px-2">
                  ⚡ Recruiter Special Actions
                </p>
                <div className="space-y-1">
                  <button
                    onClick={() => { onClose(); onOpenPitch(); }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium text-slate-800 dark:text-slate-100">60-Second Recruiter Pitch</span>
                        <p className="text-xs text-slate-500">Quick summary of top achievements & fit</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </button>

                  <button
                    onClick={() => { onClose(); onOpenTerminal(); }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium text-slate-800 dark:text-slate-100">Interactive CLI Mode</span>
                        <p className="text-xs text-slate-500">Explore portfolio via interactive shell</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Jump Links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-2">
                Navigation
              </p>
              <div className="grid grid-cols-2 gap-1">
                {[
                  { name: 'Projects', id: 'projects', icon: FolderGit2 },
                  { name: 'Skills & Stack', id: 'skills', icon: Code2 },
                  { name: 'Experience', id: 'experience', icon: Briefcase },
                  { name: 'Resume', id: 'resume', icon: FileText },
                  { name: 'Contact Me', id: 'contact', icon: Mail },
                  { name: 'About Piyush', id: 'about', icon: User }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium transition-colors"
                  >
                    <item.icon className="w-4 h-4 text-indigo-500" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filtered Projects */}
            {filteredProjects.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-2">
                  Projects ({filteredProjects.length})
                </p>
                <div className="space-y-1">
                  {filteredProjects.map((p) => (
                    <a
                      key={p.id}
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition-colors"
                    >
                      <div>
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-100">{p.name}</div>
                        <div className="flex gap-1.5 mt-0.5">
                          {p.techStack.slice(0, 4).map(t => (
                            <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 font-mono">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Contact Links */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-2 text-xs text-slate-400">
              <span>Press <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-slate-600 dark:text-slate-300">ESC</kbd> to exit</span>
              <span>Piyush Prashant Khandait • MERN Developer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
