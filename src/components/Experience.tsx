import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { experiences } from '../data/portfolio-data';
import { Briefcase, Award, GraduationCap, Calendar, Rocket, Terminal } from 'lucide-react';

const typeIcons = {
  internship: <Briefcase className="w-4 h-4" />,
  workshop: <GraduationCap className="w-4 h-4" />,
  hackathon: <Rocket className="w-4 h-4" />,
  certification: <Award className="w-4 h-4" />,
  venture: <Terminal className="w-4 h-4" />
};

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Section Header */}
          <div className="space-y-2 text-left sm:text-center">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
              // Career & Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Work Milestones & Achievements
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto font-normal">
              Software ventures, hackathons, technical workshops, and verified industry certifications.
            </p>
          </div>

          {/* Timeline Nodes */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Node Point Icon */}
                <div className="absolute -left-[1.85rem] sm:-left-[2.1rem] top-1 p-1.5 rounded-full bg-white dark:bg-slate-900 border border-indigo-500 text-indigo-600 dark:text-indigo-400 shadow-xs">
                  {typeIcons[exp.type] || <Briefcase className="w-4 h-4" />}
                </div>

                {/* Card Container */}
                <div className="goated-card p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-xl">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-indigo-500" />
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {exp.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-slate-700 font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
