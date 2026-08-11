import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, Minimize2, CornerDownLeft } from 'lucide-react';
import { personalInfo, projects, skillCategories } from '../data/portfolio-data';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: string | React.ReactNode;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">Piyush Khandait Portfolio CLI v2.0</p>
          <p>Type <code className="text-indigo-400">help</code> to list available commands.</p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-yellow-400 font-semibold">Available Commands:</p>
            <p>• <code className="text-indigo-400">whoami</code> - About Piyush</p>
            <p>• <code className="text-indigo-400">skills</code> - Core tech stack & categories</p>
            <p>• <code className="text-indigo-400">projects</code> - High impact projects</p>
            <p>• <code className="text-indigo-400">contact</code> - Email, GitHub & LinkedIn</p>
            <p>• <code className="text-indigo-400">clear</code> - Clear terminal screen</p>
            <p>• <code className="text-indigo-400">exit</code> - Close CLI mode</p>
          </div>
        );
        break;
      case 'whoami':
      case 'about':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><strong className="text-indigo-400">{personalInfo.name}</strong></p>
            <p>{personalInfo.title} | {personalInfo.subtitle}</p>
            <p>Institution: {personalInfo.college}</p>
            <p>Location: {personalInfo.location}</p>
            <p className="text-emerald-400 mt-1">Status: {personalInfo.statusText}</p>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            {Object.entries(skillCategories).map(([category, items]) => (
              <div key={category}>
                <span className="text-indigo-400 font-semibold">{category}:</span>{' '}
                <span className="text-slate-300">{items.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            {projects.map(p => (
              <div key={p.id} className="border-l-2 border-indigo-500 pl-2">
                <p className="font-semibold text-emerald-400">{p.name}</p>
                <p>{p.description}</p>
                <p className="text-slate-400 font-mono">Stack: {p.techStack.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-indigo-400 underline">{personalInfo.email}</a></p>
            <p>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-indigo-400 underline">{personalInfo.github}</a></p>
            <p>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-indigo-400 underline">{personalInfo.linkedin}</a></p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        onClose();
        return;
      default:
        output = <p className="text-rose-400 text-xs">Command not recognized: '{cmd}'. Type 'help' for options.</p>;
    }

    setHistory(prev => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-3xl h-[480px] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono text-sm"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-slate-200">piyush-portfolio-shell ~ bash</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-slate-200">
                <Minimize2 className="w-4 h-4" />
              </button>
              <button onClick={onClose} className="p-1 hover:bg-rose-950 hover:text-rose-400 rounded text-slate-400">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {history.map((log, index) => (
              <div key={index} className="space-y-1">
                {log.command && (
                  <div className="flex items-center gap-2 text-indigo-400">
                    <span>guest@piyush:~$</span>
                    <span className="text-slate-100">{log.command}</span>
                  </div>
                )}
                <div>{log.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Prompt Form */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-t border-slate-800">
            <span className="text-emerald-400 font-semibold">guest@piyush:~$</span>
            <input
              type="text"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help')..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600 font-mono text-sm"
            />
            <button type="submit" className="text-slate-500 hover:text-emerald-400">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
