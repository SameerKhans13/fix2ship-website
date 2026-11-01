import React, { useEffect, useRef } from 'react';

/**
 * React Bits inspired Aurora & Cosmic Particle Background.
 * Renders an ethereal purple-indigo nebula with interactive floating particles.
 */
export default function AuroraBackground({ children, className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle field
    const particleCount = 60;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Render subtle stardust
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dynamicOpacity = p.opacity + Math.sin(time * 5 + p.x) * 0.15;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 132, 252, ${Math.max(0.1, dynamicOpacity)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-[#07050e] ${className}`}>
      {/* Background Aurora Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Glow Orb 1 - Deep Violet */}
        <div className="animate-aurora-1 absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-purple-800/25 to-indigo-600/20 blur-[130px]" />
        
        {/* Glow Orb 2 - Electric Magenta/Purple */}
        <div className="animate-aurora-2 absolute top-1/3 -right-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-fuchsia-600/15 via-purple-700/20 to-transparent blur-[140px]" />
        
        {/* Glow Orb 3 - Deep Cosmic Center */}
        <div className="animate-aurora-1 absolute bottom-10 left-1/3 h-[500px] w-[650px] rounded-full bg-gradient-to-t from-violet-900/20 via-purple-900/15 to-transparent blur-[150px]" />
        
        {/* Particle Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
