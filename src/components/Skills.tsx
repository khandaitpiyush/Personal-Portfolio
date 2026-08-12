import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { ArrowUpRight } from 'lucide-react';

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const primaryStack = [
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
  ];

  const skillGroups = [
    {
      number: '01',
      title: 'Frontend',
      description:
        'Interfaces, component systems, and responsive web experiences.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML', 'CSS'],
    },
    {
      number: '02',
      title: 'Backend',
      description:
        'APIs, application logic, authentication, and data-driven services.',
      skills: [
        'Node.js',
        'Express',
        'REST APIs',
        'Authentication',
        'MongoDB',
        'PostgreSQL',
      ],
    },
    {
      number: '03',
      title: 'Tools & Workflow',
      description:
        'The tools I use to develop, test, version, and ship software.',
      skills: [
        'Git',
        'GitHub',
        'Postman',
        'VS Code',
        'Docker',
        'Vercel',
        'Render',
      ],
    },
    {
      number: '04',
      title: 'Computer Science',
      description:
        'The fundamentals behind the software I build.',
      skills: [
        'Data Structures & Algorithms',
        'DBMS',
        'OOP',
        'Operating Systems',
        'Computer Networks',
        'System Design Fundamentals',
      ],
    },
  ];

  const currentlyLearning = [
    'Data Structures & Algorithms',
    'System Design',
    'Backend Architecture',
    'Problem Solving',
  ];

  return (
    <section
      id="skills"
      className="relative z-10 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* =========================================================
              HEADER
          ========================================================== */}
          <header className="grid grid-cols-1 gap-8 border-b border-slate-200 pb-12 dark:border-slate-800 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-indigo-500" />

                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                  Stack
                </span>
              </div>

              <h2 className="max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl lg:text-[4.5rem]">
                Tools I use to
                <br />
                build things.
              </h2>
            </div>

            <div className="flex items-end lg:col-span-4">
              <p className="max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400 lg:ml-auto">
                A practical stack built around full-stack applications,
                backend systems, and software products that solve real
                problems.
              </p>
            </div>
          </header>

          {/* =========================================================
              PRIMARY STACK
          ========================================================== */}
          <section className="grid grid-cols-1 border-b border-slate-200 py-10 dark:border-slate-800 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-slate-400">
                Primary stack
              </span>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                MERN + TypeScript
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                The technologies I reach for most when building complete web
                applications from frontend to backend.
              </p>
            </div>

            <div className="mt-8 flex items-center lg:col-span-8 lg:mt-0">
              <div className="flex w-full flex-wrap gap-2.5 lg:justify-end">
                {primaryStack.map((skill, index) => (
                  <span
                    key={skill}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      index === 0
                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200 dark:shadow-none'
                        : 'border border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-indigo-700 dark:hover:text-indigo-400'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================
              SKILL GROUPS
          ========================================================== */}
          <section className="grid grid-cols-1 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.08 + index * 0.06,
                }}
                className={`py-10 ${
                  index % 2 === 0
                    ? 'md:border-r md:border-slate-200 md:pr-10 dark:md:border-slate-800'
                    : 'md:pl-10'
                } ${
                  index < 2
                    ? 'border-b border-slate-200 dark:border-slate-800'
                    : ''
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-[10px] font-mono font-medium tracking-wider text-indigo-500">
                        {group.number}
                      </span>

                      <span className="h-px w-5 bg-slate-200 dark:bg-slate-700" />
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                      {group.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="relative text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </section>

          {/* =========================================================
              CURRENTLY LEARNING
          ========================================================== */}
          <section className="border-t border-slate-200 pt-10 dark:border-slate-800">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                  Currently learning
                </span>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                  Going deeper,
                  <br />
                  not wider.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
                  I'm focusing on the fundamentals and engineering practices
                  that help me build better software instead of simply adding
                  more technologies to the list.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid border-t border-slate-200 dark:border-slate-800">
                  {currentlyLearning.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-slate-200 py-4 dark:border-slate-800"
                    >
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item}
                      </span>

                      <span className="text-[10px] font-mono text-slate-400">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
              FOOTER LINK
          ========================================================== */}
          <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-7 dark:border-slate-800">
            <span className="text-xs text-slate-400">
              Always learning. Always building.
            </span>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
            >
              See these technologies in action

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}