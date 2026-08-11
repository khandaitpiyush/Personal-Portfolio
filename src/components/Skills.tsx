import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { skillCategories, currentLearning } from '../data/portfolio-data';
import { Database, Server, Code2, Wrench, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Core Stack': <Layers className="h-5 w-5" />,
  'Frontend': <Code2 className="h-5 w-5" />,
  'Backend & APIs': <Server className="h-5 w-5" />,
  'Databases': <Database className="h-5 w-5" />,
  'Tools & Platforms': <Wrench className="h-5 w-5" />,
  'Core CS Concepts': <BookOpen className="h-5 w-5" />
};

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
              // Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Skills & Expertise Matrix
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto font-normal">
              Production-tested tools and frameworks used across frontend, backend, and database architecture.
            </p>
          </div>

          {/* Grid of Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => {
              const isCore = category === 'Core Stack';
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
                  className={`goated-card p-6 flex flex-col justify-between ${
                    isCore
                      ? 'border-indigo-500/50 bg-indigo-50/40 dark:bg-indigo-950/20'
                      : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl ${isCore ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400'}`}>
                          {categoryIcons[category]}
                        </div>
                        <h3 className={`font-bold text-base ${isCore ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
                          {category}
                        </h3>
                      </div>
                      {isCore && (
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold border border-indigo-200 dark:border-indigo-800">
                          Primary
                        </span>
                      )}
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono cursor-default transition-all ${
                            isCore
                              ? 'bg-indigo-600 text-white shadow-xs'
                              : 'bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Architecture Showcase */}
          <div className="goated-card p-6 sm:p-8 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                // Continuous Growth
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Core Masteries & Active Learning
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Continuously deepening knowledge in Data Structures & Algorithms, system design fundamentals, and enterprise backend patterns.
              </p>

              <div className="grid sm:grid-cols-2 gap-2 pt-1">
                {currentLearning.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="md:col-span-6 bg-slate-950 rounded-xl p-4 border border-slate-800 text-xs font-mono text-slate-300 shadow-xl overflow-x-auto">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-500 text-[11px]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span>userController.ts • TypeScript MERN</span>
              </div>
              <pre className="space-y-1 leading-relaxed">
                <code>
                  <span className="text-purple-400">import</span> &#123; Request, Response &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'express'</span>;<br/>
                  <span className="text-purple-400">import</span> User <span className="text-purple-400">from</span> <span className="text-emerald-400">'../models/User'</span>;<br/><br/>
                  <span className="text-purple-400">export const</span> getDashboardData = <span className="text-purple-400">async</span> (req: Request, res: Response) =&gt; &#123;<br/>
                  &nbsp;&nbsp;<span className="text-purple-400">const</span> userId = req.user?.id;<br/>
                  &nbsp;&nbsp;<span className="text-purple-400">const</span> stats = <span className="text-purple-400">await</span> User.aggregate([<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="text-cyan-400">$match</span>: &#123; _id: userId &#125; &#125;,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="text-cyan-400">$lookup</span>: &#123; from: <span className="text-emerald-400">'projects'</span>, ... &#125; &#125;<br/>
                  &nbsp;&nbsp;]);<br/>
                  &nbsp;&nbsp;res.status(<span className="text-amber-400">200</span>).json(&#123; success: <span className="text-amber-400">true</span>, stats &#125;);<br/>
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
