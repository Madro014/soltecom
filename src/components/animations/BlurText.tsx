// react-doctor-disable-next-line react-doctor/use-lazy-motion
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from: any, steps: any[]) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes: any = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: any;
  animationTo?: any[];
  easing?: string | any;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  highlightStartIndex?: number;
  highlightClassName?: string;
}

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: any) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  highlightStartIndex,
  highlightClassName = 'text-primary'
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  // Prepare elements with word preservation
  const words = useMemo(() => text.split(' '), [text]);

  let letterGlobalIndex = 0;

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {animateBy === 'words' ? (
        elements.map((segment, index) => {
          const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
          const spanTransition: any = {
            duration: totalDuration,
            times,
            delay: (index * delay) / 1000
          };
          spanTransition.ease = easing;

          const isHighlighted = highlightStartIndex !== undefined && index >= highlightStartIndex;

          return (
            <motion.span
              className={`inline-block will-change-[transform,filter,opacity] ${isHighlighted ? highlightClassName : ''}`}
              key={index}
              initial={fromSnapshot}
              animate={inView ? animateKeyframes : fromSnapshot}
              transition={spanTransition}
              onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
            >
              {segment}
              {index < elements.length - 1 && '\u00A0'}
            </motion.span>
          );
        })
      ) : (
        words.map((word, wordIndex) => {
          const letters = word.split('');
          const renderedLetters = letters.map((letter) => {
            const currentIndex = letterGlobalIndex++;
            const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
            const spanTransition: any = {
              duration: totalDuration,
              times,
              delay: (currentIndex * delay) / 1000
            };
            spanTransition.ease = easing;

            const isHighlighted = highlightStartIndex !== undefined && currentIndex >= highlightStartIndex;

            return (
              <motion.span
                className={`inline-block will-change-[transform,filter,opacity] ${isHighlighted ? highlightClassName : ''}`}
                key={currentIndex}
                initial={fromSnapshot}
                animate={inView ? animateKeyframes : fromSnapshot}
                transition={spanTransition}
                onAnimationComplete={
                  currentIndex === elements.length - 1 ? onAnimationComplete : undefined
                }
              >
                {letter}
              </motion.span>
            );
          });

          // Account for space in global index
          if (wordIndex < words.length - 1) {
            letterGlobalIndex++;
          }

          return (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {renderedLetters}
              {wordIndex < words.length - 1 && <span>&nbsp;</span>}
            </span>
          );
        })
      )}
    </p>
  );
};

export default BlurText;
