import React from 'react';

/**
 * React Bits inspired ShinyText component.
 * Shimmering metallic gradient text effect.
 */
export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = '',
}) {
  return (
    <span
      className={`inline-block font-bold tracking-tight ${
        disabled
          ? 'text-purple-300'
          : 'bg-gradient-to-r from-purple-200 via-purple-400 to-indigo-300 bg-clip-text text-transparent animate-shiny-text'
      } ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
}
