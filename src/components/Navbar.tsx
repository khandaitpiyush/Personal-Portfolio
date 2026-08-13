import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onOpenPitch: () => void;
  onOpenTerminal: () => void;
}

export function Navbar({ isDark, toggleTheme, onOpenPitch, onOpenTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Stack' },
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-5xl mx-auto">
        {/* Floating Glassmorphism Navbar Container */}
        <div
          className={`nav-glass px-5 py-2.5 rounded-full transition-all duration-300 flex items-center justify-between ${
            isScrolled ? 'shadow-xl shadow-indigo-500/5 border-indigo-500/30' : ''
          }`}
        >
          {/* Brand Logo / Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 text-left group"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 group-hover:scale-125 transition-transform" />
            <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {personalInfo.name}
            </span>
          </button>

          {/* Center Glass Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-full border border-white/60 dark:border-slate-700/40 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeSection === item.id
                    ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/90 dark:bg-slate-900/90 rounded-full shadow-xs border border-white/80 dark:border-slate-700/60"
                    transition={{ type: 'spring', duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Action Triggers */}
          <div className="hidden sm:flex items-center gap-1.5">
            {/* Pitch Trigger */}
            <button
              onClick={onOpenPitch}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors inline-flex items-center gap-1.5"
              title="60-Second Recruiter Pitch"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Pitch</span>
            </button>

            {/* CLI Trigger */}
            <button
              onClick={onOpenTerminal}
              className="px-2.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors inline-flex items-center gap-1"
              title="Interactive Terminal Mode"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-500" />
              <span>CLI</span>
            </button>

            <div className="h-4 w-[1px] bg-slate-300/60 dark:bg-slate-700/60 mx-1" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/60 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-400 transition-colors"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-1 px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-1"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-400"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/60"
              aria-label="Open Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Glass Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-2 max-w-5xl mx-auto">
          <div className="nav-glass px-5 py-4 rounded-3xl space-y-3 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-2xl text-xs font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-2">
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenPitch(); }}
                className="px-3 py-2 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" /> Pitch
              </button>

              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenTerminal(); }}
                className="px-3 py-2 rounded-xl bg-slate-200/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-500" /> CLI
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-xs text-center"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
