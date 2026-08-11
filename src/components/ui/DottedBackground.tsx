import { useEffect, useRef } from 'react';

export function DottedBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(99, 102, 241, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas Dotted Mesh */}
      <div className="absolute inset-0 bg-dotted-mesh opacity-80" />
      
      {/* Interactive Mouse Glow */}
      <div ref={spotlightRef} className="absolute inset-0 transition-opacity duration-300 pointer-events-none" />

      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl" />
    </div>
  );
}
