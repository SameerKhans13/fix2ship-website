import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

/**
 * React Bits inspired 3D TiltCard component using Framer Motion.
 * Tilts realistically in 3D space following cursor physics.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 15,
  glare = true,
  onClick,
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="inline-block w-full h-full"
      onClick={onClick}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`relative w-full h-full rounded-2xl border border-purple-500/20 bg-[#0d091e]/90 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-purple-400/50 hover:shadow-[0_15px_35px_-10px_rgba(168,85,247,0.3)] ${className}`}
      >
        <div style={{ transform: 'translateZ(30px)' }} className="relative z-10 h-full">
          {children}
        </div>

        {glare && isHovered && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-purple-400/10 to-transparent opacity-80 transition-opacity"
            style={{ transform: 'translateZ(10px)' }}
          />
        )}
      </motion.div>
    </div>
  );
}
