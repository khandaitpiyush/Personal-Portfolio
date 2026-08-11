import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { experiences } from '../data/portfolio-data';
import { Briefcase, Award, Trophy, GraduationCap, Calendar } from 'lucide-react';

const typeIcons = {
  internship: <Briefcase className="h-4 w-4" />,
  workshop: <GraduationCap className="h-4 w-4" />,
  hackathon: <Trophy className="h-4 w-4" />,
  certification: <Award className="h-4 w-4" />,
  freelance: <Briefcase className="h-4 w-4" />
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
              Work Experience & Milestones
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto font-normal">
              Internship roles, hackathon achievements, certifications, and technical workshops.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 sm:ml-28 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Point Icon */}
                <div className="absolute -left-[17px] top-1.5 p-2 rounded-full bg-white dark:bg-slate-900 border border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 shadow-xs group-hover:border-indigo-500 transition-colors">
                  {typeIcons[exp.type]}
                </div>

                {/* Left Date */}
                <div className="hidden sm:block absolute -left-32 top-2 text-right w-24 text-xs font-bold text-slate-500 dark:text-slate-400 font-mono">
                  {exp.duration}
                </div>

                {/* Content Card */}
                <div className="goated-card p-6 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold uppercase tracking-wider mb-1 border border-indigo-200 dark:border-indigo-800">
                        {exp.type}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {exp.organization}
                      </p>
                    </div>

                    {/* Mobile Duration */}
                    <div className="sm:hidden flex items-center gap-1 text-xs text-slate-500 font-mono font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {exp.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-slate-700 font-semibold"
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
