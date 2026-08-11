import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

export function Resume() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="goated-card p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
              // Curriculum Vitae
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Developer Resume & Credentials
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed font-normal">
              Download my official resume detailing software engineering projects, technical stack, DBIT Mumbai coursework, and hackathon achievements.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> PDF Format
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> MERN & TypeScript
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> DBIT IT Student
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}