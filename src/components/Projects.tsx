import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio-data';
import { Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  const categories = ['All Projects', 'Client Work', 'My Venture', 'Personal Project'];

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-indigo-500" />
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                  Selected Work
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                Featured Projects
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md leading-relaxed font-normal">
              Commercial client software, full-stack web applications, and technical ventures built with production-grade engineering.
            </p>
          </div>

          {/* Minimal Tab Filter */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
            {categories.map(cat => {
              const count = cat === 'All Projects' ? projects.length : projects.filter(p => p.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono rounded-md px-1.5 py-0.5 ${
                    isActive
                      ? 'bg-slate-800 text-slate-300 dark:bg-slate-200 dark:text-slate-800'
                      : 'bg-slate-200/70 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isFeatured = index === 0 && selectedCategory === 'All Projects';
                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: 16 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className={`rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group flex flex-col justify-between ${
                      isFeatured ? 'md:col-span-2 grid lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center' : 'p-6'
                    }`}
                  >
                    {isFeatured ? (
                      <>
                        {/* Featured Project Image */}
                        <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-md">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-contain object-center group-hover:scale-103 transition-transform duration-500 ease-out bg-slate-950"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500 font-mono text-xs">
                              UI Mockup Preview
                            </div>
                          )}
                        </div>

                        {/* Featured Project Details */}
                        <div className="lg:col-span-5 space-y-5">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                              <span>01 // {project.category}</span>
                              {project.builtThrough && (
                                <>
                                  <span>•</span>
                                  <span className="text-slate-500 dark:text-slate-400">{project.builtThrough}</span>
                                </>
                              )}
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {project.name}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                              {project.description}
                            </p>
                          </div>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.techStack.map(tech => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200/80 dark:border-slate-700/60"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Feature Highlights */}
                          <div className="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
                            {project.features.slice(0, 3).map((feature, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Links */}
                          <div className="flex items-center gap-3 pt-2">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-xs group/btn"
                              >
                                <span>Visit Live Site</span>
                                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
                              >
                                <Github className="w-3.5 h-3.5" />
                                <span>Source Code</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Standard Project Card */
                      <div className="space-y-5 flex flex-col justify-between h-full">
                        <div className="space-y-4">
                          {/* Image Frame */}
                          {project.image && (
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-xs">
                              <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-contain object-center group-hover:scale-103 transition-transform duration-500 ease-out bg-slate-950"
                              />
                            </div>
                          )}

                          {/* Category & Title */}
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                              <span>{project.category}</span>
                              {project.builtThrough && (
                                <>
                                  <span>•</span>
                                  <span className="text-slate-500 dark:text-slate-400">{project.builtThrough}</span>
                                </>
                              )}
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {project.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                              {project.description}
                            </p>
                          </div>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map(tech => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200/80 dark:border-slate-700/60"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Footer CTAs */}
                        <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/link"
                            >
                              <span>Visit Website</span>
                              <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                            >
                              <Github className="w-3.5 h-3.5 mr-1" />
                              <span>Source Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
