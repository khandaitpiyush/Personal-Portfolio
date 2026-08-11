import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

interface HeroProps {
  onViewProjects: () => void;
}

export function Hero({ onViewProjects }: HeroProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const techBadges = ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'];

  return (
    <section id="home" className="min-h-[82vh] flex items-center justify-center pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-left sm:text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{personalInfo.statusText}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            I build software that solves real problems.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">{personalInfo.name}</strong>. Second-Year IT Student at <span className="text-slate-900 dark:text-white font-medium">{personalInfo.college}</span>. I build full-stack web applications, SaaS products, and practical software systems.
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={onViewProjects}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-500/20 transition-all group flex items-center justify-center"
            >
              View Featured Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold text-sm transition-all flex items-center justify-center"
            >
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5 pt-4 text-slate-500 dark:text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />

            <span className="flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 mr-1 text-rose-500" />
              {personalInfo.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
