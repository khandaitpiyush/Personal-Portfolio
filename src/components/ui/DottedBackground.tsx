import { useEffect, useState } from 'react';

export function DottedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Goated Dotted Grid Mesh */}
      <div className="absolute inset-0 bg-dotted-mesh opacity-80" />

      {/* Mouse Spotlight Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-60 dark:opacity-40"
        style={{
          background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.18), transparent 80%)`
        }}
      />

      {/* Ambient Gradient Blur Sphere Top-Left */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[120px]" />

      {/* Ambient Gradient Blur Sphere Bottom-Right */}
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-600/15 rounded-full blur-[120px]" />
    </div>
  );
}
