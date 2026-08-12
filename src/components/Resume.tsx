import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { FileText, Download, CheckCircle2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';
import { Button } from './ui/button';
import { toast } from 'sonner';

export function Resume() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleDownload = () => {
    if (!personalInfo.resumeUrl || personalInfo.resumeUrl.startsWith('#TODO')) {
      toast.info('Resume link is currently being updated. Please request directly via email!');
      return;
    }
    window.open(personalInfo.resumeUrl, '_blank');
  };

  const resumeHighlights = [
    'Third-Year Information Technology Student at DBIT Mumbai',
    'Founder & Lead Developer at NexGo Tech (Fitcamp, Cacky Cake)',
    'Certified MongoDB Developer & SIH Hackathon Participant',
    'Full-stack MERN stack application and API architecture experience'
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="goated-card p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-200 dark:border-indigo-800">
                <FileText className="w-3.5 h-3.5" />
                <span>Engineering Credentials & CV</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Download Official Resume
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Comprehensive summary of academic background, technical skills, commercial client deliverables, and software engineering capabilities.
              </p>

              <div className="space-y-2 pt-2">
                {resumeHighlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action */}
            <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center">
              <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Updated Portfolio Resume
              </div>
              <Button
                onClick={handleDownload}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md shadow-indigo-500/20"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}