import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Mail, ExternalLink, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';
import { toast } from 'sonner';

interface RecruiterPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterPitchModal({ isOpen, onClose }: RecruiterPitchModalProps) {
  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    toast.success('Email address copied to clipboard!');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          className="relative w-full max-w-xl goated-card p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="space-y-1 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Technical Profile Summary
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {personalInfo.name}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              {personalInfo.subtitle} • {personalInfo.college}
            </p>
          </div>

          {/* Content Rows */}
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800/80 space-y-1.5">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Engineering Focus
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Full-stack developer building client web applications, SaaS platforms, and backend APIs using React, TypeScript, Node.js, Express, and MongoDB.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800/80 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Shipped Work
                </h4>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 font-medium">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Fitcamp — Gym SaaS</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Cacky Cake — Bakery Web App</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>NexGo Tech — Software Venture</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800/80 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Credentials
                </h4>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 font-medium">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Certified MongoDB Developer</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>Smart India Hackathon Participant</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>PassItOn & Customer Support CRM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Actions Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Copy Email</span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-semibold transition-colors"
            >
              Close Summary
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
