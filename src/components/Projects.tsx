import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolio-data';
import { Github, ExternalLink, CheckCircle2, Code2 } from 'lucide-react';
import { Button } from './ui/button';

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechs = Array.from(new Set(projects.flatMap(p => p.techStack)));

  const filteredProjects = selectedTech
    ? projects.filter(p => p.techStack.includes(selectedTech))
    : projects;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Section Header */}
          <div className="space-y-2 text-left sm:text-center">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
              // Portfolio Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Featured Software Engineering Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto font-normal">
              Production-ready MERN stack applications built with modular backend API logic and clean state management.
            </p>
          </div>

          {/* Tech Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedTech === null
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'goated-card text-slate-700 dark:text-slate-300 hover:text-indigo-600'
              }`}
            >
              All Projects ({projects.length})
            </button>

            {allTechs.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  selectedTech === tech
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'goated-card text-slate-700 dark:text-slate-300 hover:text-indigo-600'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const isFeatured = index === 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`goated-card overflow-hidden flex flex-col justify-between group ${
                    isFeatured ? 'md:col-span-2 grid lg:grid-cols-12 items-center gap-6 p-4 sm:p-6' : 'p-6'
                  }`}
                >
                  {isFeatured ? (
                    <>
                      {/* Left Image Preview */}
                      <div className="lg:col-span-6 relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-500">
                            <Code2 className="w-12 h-12 text-indigo-500" />
                          </div>
                        )}
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider">
                          Featured Architecture
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="lg:col-span-6 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-normal">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map(t => (
                            <span key={t} className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-mono border border-indigo-200 dark:border-indigo-800 font-semibold">
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="space-y-1.5 pt-1">
                          {project.features.slice(0, 3).map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-2">
                          <Button asChild size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" /> View Source Code
                            </a>
                          </Button>
                          {project.liveUrl && (
                            <Button asChild variant="outline" size="sm" className="rounded-xl border-slate-300 dark:border-slate-700 font-bold">
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" /> Live Application
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Standard Card */
                    <div className="space-y-4">
                      {project.image && (
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-normal">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map(t => (
                          <span key={t} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-slate-700 font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-1 pt-1">
                        {project.features.slice(0, 2).map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          <Github className="w-4 h-4 mr-1.5" /> Source Code
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-1.5" /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
