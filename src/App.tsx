import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { DottedBackground } from './components/ui/DottedBackground';
import { RecruiterPitchModal } from './components/RecruiterPitchModal';
import { TerminalModal } from './components/TerminalModal';
import { CommandPalette } from './components/CommandPalette';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative font-sans transition-colors duration-200">
      <ScrollProgress />
      <DottedBackground />
      
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenPitch={() => setIsPitchOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />
      
      <main className="relative z-10">
        <Hero onViewProjects={scrollToProjects} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <Toaster position="top-right" richColors />
      <ScrollToTop />

      {/* Modals & Command Palette */}
      <RecruiterPitchModal isOpen={isPitchOpen} onClose={() => setIsPitchOpen(false)} />
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenPitch={() => setIsPitchOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />
    </div>
  );
}