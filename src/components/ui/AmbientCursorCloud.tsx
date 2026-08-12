import { useEffect, useRef, useState } from 'react';

export function AmbientCursorCloud() {
  const cloudRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDark();

    // Listen for dark mode class changes on <html>
    const observer = new MutationObserver(() => {
      checkDark();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDarkMode) return;

    let animFrameId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let isHovering = false;
    let opacity = 0;
    let targetOpacity = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isHovering) {
        isHovering = true;
        targetOpacity = 1;
      }
    };

    const handleMouseLeave = () => {
      targetOpacity = 0;
      isHovering = false;
    };

    const handleMouseEnter = () => {
      targetOpacity = 1;
      isHovering = true;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const render = () => {
      // Smooth LERP movement (5.5% interpolation for weightless, organic drift)
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;

      // Smooth opacity transition
      opacity += (targetOpacity - opacity) * 0.04;

      if (cloudRef.current) {
        cloudRef.current.style.opacity = opacity.toFixed(3);
        cloudRef.current.style.background = `
          radial-gradient(480px circle at ${currentX}px ${currentY}px, 
            rgba(99, 102, 241, 0.065) 0%, 
            rgba(139, 92, 246, 0.045) 35%, 
            rgba(59, 130, 246, 0.02) 65%, 
            rgba(15, 23, 42, 0.005) 85%, 
            transparent 100%)
        `;
      }

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animFrameId);
    };
  }, [isDarkMode]);

  // Dark mode only — hidden in light mode
  if (!isDarkMode) return null;

  return (
    <div
      ref={cloudRef}
      style={{ filter: 'blur(50px)' }}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ease-out"
      aria-hidden="true"
    />
  );
}
