import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolio-data';
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    toast.success(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all required fields.');
      return;
    }
    toast.success('Thank you for reaching out! I will respond promptly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
              // Direct Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
              Let's Connect
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto font-normal">
              Interested in full-stack software development roles, internships, or technical collaborations? Feel free to reach out directly.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info & Copy Pills */}
            <div className="md:col-span-5 space-y-4">
              <div className="goated-card p-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contact Information</h3>

                {/* Email Pill */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div className="truncate">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">{personalInfo.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'Email')}
                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub Pill */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Github className="w-4 h-4 text-slate-800 dark:text-slate-200 shrink-0" />
                    <div className="truncate">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">GitHub</span>
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline truncate block">
                        {personalInfo.github}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.github, 'GitHub URL')}
                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors shrink-0"
                    title="Copy GitHub URL"
                  >
                    {copiedField === 'GitHub URL' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Pill */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Linkedin className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div className="truncate">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">LinkedIn</span>
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline truncate block">
                        Piyush Khandait
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.linkedin, 'LinkedIn URL')}
                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors shrink-0"
                    title="Copy LinkedIn URL"
                  >
                    {copiedField === 'LinkedIn URL' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="md:col-span-7">
              <form onSubmit={handleSubmit} className="goated-card p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Software Internship / Role Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Piyush, I saw your portfolio and would like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
