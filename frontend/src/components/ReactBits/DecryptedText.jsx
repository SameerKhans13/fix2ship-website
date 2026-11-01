import React, { useState, useEffect, useRef } from 'react';

/**
 * React Bits inspired DecryptedText component.
 * Cyberpunk matrix-style character unscrambler.
 */
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  className = '',
  animateOn = 'hover', // 'hover' | 'view'
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const startScramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }

      iteration += 1 / (maxIterations / text.length || 1);
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view') {
      startScramble();
    }
    return () => clearInterval(intervalRef.current);
  }, [text, animateOn]);

  return (
    <span
      onMouseEnter={() => {
        setIsHovered(true);
        if (animateOn === 'hover') startScramble();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block font-mono cursor-pointer transition-colors duration-200 ${className}`}
    >
      {displayText}
    </span>
  );
}
