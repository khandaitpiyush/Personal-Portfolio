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
    <section id="home" className="min-h-0 lg:min-h-[88vh] flex items-center justify-center pt-28 sm:pt-36 pb-6 sm:pb-10 lg:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalInfo.statusText}</span>
            </motion.div>

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
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.05 }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="px-3.5 py-1 rounded-xl text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-2">
              <motion.button
                onClick={onViewProjects}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-500/20 transition-colors group flex items-center justify-center cursor-pointer"
              >
                View Featured Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold text-sm transition-colors flex items-center justify-center cursor-pointer"
              >
                Get in Touch
              </motion.button>
            </div>

            {/* Mobile Centered Location Tag */}
            <div className="flex lg:hidden items-center justify-center pt-1">
              <span className="inline-flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/60">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-rose-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Social Links & Location (Desktop Row) */}
            <div className="hidden lg:flex items-center gap-4 pt-2 text-slate-500 dark:text-slate-400">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Email"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>

              <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />

              <span className="flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 mr-1 text-rose-500" />
                {personalInfo.location}
              </span>
            </div>
          </motion.div>

          {/* Right Column: Seamless Blended Portfolio Image + Mobile Vertical Parallel Social Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 flex justify-center items-center text-center mx-auto lg:mx-0 lg:justify-start lg:-ml-6 pt-3 lg:pt-0"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[450px] lg:max-w-none flex items-center justify-center mx-auto lg:justify-start">
              {/* Mobile Vertical Social Parallel Strip (Positioned Right Closer to Photo) */}
              <div className="flex flex-col items-center justify-center gap-3 translate-x-7 sm:translate-x-10 z-10 lg:hidden shrink-0">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-md backdrop-blur-xs"
                  aria-label="GitHub"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-md backdrop-blur-xs"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-md backdrop-blur-xs"
                  aria-label="Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Portrait Image */}
              <img
                src={portfolioImage}
                alt={personalInfo.name}
                style={{
                  maskImage: 'linear-gradient(to bottom, black 93%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 93%, transparent 100%)'
                }}
                className="w-full h-auto max-h-[420px] sm:max-h-[520px] lg:max-h-[960px] lg:scale-120 origin-center lg:origin-left object-contain drop-shadow-md select-none pointer-events-none transition-transform duration-500 hover:scale-[1.03] lg:hover:scale-[1.22]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
