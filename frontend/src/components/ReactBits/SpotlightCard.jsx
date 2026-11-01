import React, { useRef, useState } from 'react';

/**
 * React Bits inspired SpotlightCard component.
 * Tracks mouse cursor coordinates and renders a radial gradient spotlight glow.
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(168, 85, 247, 0.22)',
  borderColor = 'rgba(168, 85, 247, 0.3)',
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0d091f]/80 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.25)] ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
