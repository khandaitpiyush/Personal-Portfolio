import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  MapPin,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.12 });

  return (
    <section
      id="about"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Main content grid */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
            {/* Left column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-6 sm:space-y-7">
                {/* Section heading */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-indigo-500" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
                      About
                    </span>
                  </div>

                  <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl mb-8">
                    Building things,
                    <br />
                    learning constantly.
                  </h2>
                </div>

                <p className="text-lg leading-8 text-slate-700 dark:text-slate-300 sm:text-xl">
                  I'm{' '}
                  <span className="font-semibold text-slate-950 dark:text-white">
                    {personalInfo.name}
                  </span>
                  , a third-year Information Technology student at Don Bosco
                  Institute of Technology, Mumbai.
                </p>

                <p className="text-base leading-8 text-slate-500 dark:text-slate-400">
                  I enjoy turning ideas into software that people can actually
                  use. Most of my work revolves around full-stack web
                  applications, backend systems, SaaS products, and figuring
                  out how all the pieces fit together.
                </p>

                <p className="text-base leading-8 text-slate-500 dark:text-slate-400">
                  Outside the classroom, I've been building{' '}
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    NexGo Tech
                  </span>{' '}
                  and working on real client projects like Fitcamp and Cacky Cake. That experience has
                  taught me much more than just writing code — from
                  understanding requirements to shipping something that needs
                  to work in the real world.
                </p>
              </div>

              {/* Bottom Link Aligned with Right Column Base */}
              <div className="pt-4 border-t border-transparent">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                >
                  See what I've been building
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Right column (Top-Aligned with 'Building things,' heading) */}
            <div className="lg:col-span-5 flex flex-col justify-between lg:pt-9">
              <div className="border-t border-slate-200 dark:border-slate-800">
                {/* Education */}
                <div className="group flex gap-5 border-b border-slate-200 pb-5 sm:pb-6 pt-3 dark:border-slate-800">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                    <GraduationCap className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Education
                    </p>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Don Bosco Institute of Technology
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      B.Tech in Information Technology · Third Year
                    </p>
                  </div>
                </div>

                {/* Current work */}
                <div className="group flex gap-5 border-b border-slate-200 py-5 sm:py-6 dark:border-slate-800">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                    <Terminal className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Currently building
                    </p>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      NexGo Tech
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      Building websites, applications and software products
                      for real businesses.
                    </p>
                  </div>
                </div>

                {/* Stack */}
                <div className="group flex gap-5 border-b border-slate-200 py-5 sm:py-6 dark:border-slate-800">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                    <Code2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      I work with
                    </p>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Full-stack JavaScript / TypeScript
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      React, Node.js, Express, MongoDB, TypeScript and modern web tools.
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex gap-5 border-b border-slate-200 py-5 sm:py-6 dark:border-slate-800">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                    <MapPin className="h-4 w-4 text-rose-500" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Based in
                    </p>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {personalInfo.location}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Open to software engineering opportunities.
                    </p>
                  </div>
                </div>

                {/* Closing Summary Statement */}
                <div className="pt-5">
                  <p className="text-xs leading-6 text-slate-500 dark:text-slate-400 italic">
                    Third-year IT student building full-stack products, real-world
                    applications, and software systems while growing as an
                    engineer through hands-on work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-20 border-y border-slate-200 py-8 dark:border-slate-800">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Currently focused on becoming a better engineer, one project
                at a time.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Always learning
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}