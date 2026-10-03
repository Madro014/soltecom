import React from 'react';
import { m as motion } from 'framer-motion';

export default function FuzzyOverlay() {
  return (
    <motion.div
      initial={{ transform: 'translateX(-10%) translateY(-10%)' }}
      animate={{
        transform: 'translateX(10%) translateY(10%)',
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: 'linear',
        repeatType: 'mirror',
      }}
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
        backgroundSize: '200px',
        opacity: 0.4,
      }}
      className="pointer-events-none absolute -inset-[100%] z-0"
    />
  );
}
