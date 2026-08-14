import { useEffect, useRef } from 'react';

export function DottedBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const isDark = document.documentElement.classList.contains('dark');
        const opacity = isDark ? 0.16 : 0.12;
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(99, 102, 241, ${opacity}), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Light Mode Top Soft Ambient Glow */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-100/40 via-purple-50/20 to-transparent dark:hidden pointer-events-none" />

      {/* Tactile Film Grain Overlay */}
      <div className="absolute inset-0 bg-noise-grain pointer-events-none" />
      
      {/* Interactive Mouse Spotlight Glow */}
      <div ref={spotlightRef} className="absolute inset-0 transition-opacity duration-300 pointer-events-none" />

      {/* Ambient Background Glow Spheres */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-500/8 dark:bg-cyan-500/15 rounded-full blur-3xl" />
    </div>
  );
}
