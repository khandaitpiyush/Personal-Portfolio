import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Award, Zap, Mail, Download, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface RecruiterPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterPitchModal({ isOpen, onClose }: RecruiterPitchModalProps) {
  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    toast.success('Email address copied to clipboard!');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl glass-card rounded-3xl p-6 sm:p-8 bg-white/95 dark:bg-slate-900/95 border border-indigo-200 dark:border-indigo-800 shadow-2xl overflow-hidden my-8"
        >
          {/* Top Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-1">
                60-Second Recruiter Pitch
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Why Hire {personalInfo.name}?
              </h2>
            </div>
          </div>

          {/* Core Pitch Cards */}
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100 mb-1">
                <Zap className="w-4 h-4 text-indigo-500" /> High-Velocity Full Stack Engineer
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                2nd-Year IT student at <strong className="text-slate-900 dark:text-slate-100">{personalInfo.college}</strong> building production-ready applications with React, TypeScript, Node.js, Express, and MongoDB.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50">
                <h4 className="flex items-center gap-2 font-medium text-indigo-900 dark:text-indigo-200 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Core Capabilities
                </h4>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Role-Based Access & JWT Security</li>
                  <li>• MongoDB Aggregation & Schema Design</li>
                  <li>• Dynamic State & Modern UI Components</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/50">
                <h4 className="flex items-center gap-2 font-medium text-cyan-900 dark:text-cyan-200 text-sm mb-1">
                  <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Key Milestones
                </h4>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Smart India Hackathon Participant</li>
                  <li>• Full Stack ERP & Admin Systems</li>
                  <li>• Certified MongoDB Developer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Button
                onClick={handleCopyEmail}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
              >
                <Mail className="w-4 h-4 mr-2" />
                Copy Email
              </Button>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <ExternalLink className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline font-medium"
            >
              Continue Exploring Full Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
