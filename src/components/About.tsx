import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { GraduationCap, MapPin, Code2, Brain, CheckCircle2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const keyHighlights = [
    'MERN Stack (MongoDB, Express.js, React, Node.js) & TypeScript',
    'RESTful API Architecture, JWT Authentication, & Security Best Practices',
    '2nd Year IT Undergraduate at Don Bosco Institute of Technology, Mumbai',
    'Open for Summer 2025 Internships & Software Engineering Roles'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Section Header */}
          <div className="space-y-2 text-left sm:text-center">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
              // About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Engineering Background & Focus
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left: Quick Profile Card */}
            <div className="md:col-span-4">
              <div className="goated-card p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{personalInfo.name}</h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{personalInfo.title}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block">Don Bosco Institute of Technology</span>
                      <span>B.Tech in Information Technology (2nd Year)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block">Location</span>
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Code2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block">Primary Stack</span>
                      <span>MongoDB, Express, React, Node, TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Narrative */}
            <div className="md:col-span-8">
              <div className="goated-card p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Full Stack Development Approach
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
                  {personalInfo.bio}
                </p>

                {/* Highlights Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Technical Focus</h4>
                  {keyHighlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
