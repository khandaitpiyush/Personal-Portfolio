import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';
import portfolioImage from '../assets/Portfolio Image.png';

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
    <section id="home" className="min-h-[88vh] flex items-center justify-center pt-32 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalInfo.statusText}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              I build software that solves real problems.
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-normal">
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">{personalInfo.name}</strong>. Third-Year IT Student at <span className="text-slate-900 dark:text-white font-medium">{personalInfo.college}</span>. I build full-stack web applications, SaaS products, and practical software systems.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
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
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-2">
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

            {/* Social Links & Location */}
            <div className="flex items-center gap-4 pt-2 text-slate-500 dark:text-slate-400">
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

          {/* Right Column: Seamless Blended Portfolio Image (Ultra-subtle Edge Fade Mask) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 flex justify-center lg:justify-start items-center lg:-ml-6"
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none flex justify-center lg:justify-start items-center">
              <img
                src={portfolioImage}
                alt={personalInfo.name}
                style={{
                  maskImage: 'linear-gradient(to bottom, black 93%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 93%, transparent 100%)'
                }}
                className="w-full h-auto max-h-[520px] sm:max-h-[640px] lg:max-h-[960px] lg:scale-120 origin-left object-contain drop-shadow-md select-none pointer-events-none transition-transform duration-500 hover:scale-[1.22]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
