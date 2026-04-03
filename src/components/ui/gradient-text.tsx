import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
}

export function GradientText({
  children,
  className = '',
  colors = ['#d97a4a', '#f4b48c', '#1f8f84'],
  animationSpeed = 8,
  direction = 'horizontal'
}: GradientTextProps) {
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  useAnimationFrame((time) => {
    if (paused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    const cycle = (elapsedRef.current / (animationSpeed * 1000)) * 100;
    progress.set(cycle % 100);
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, progress]);

  const backgroundPosition = useTransform(progress, (value) => {
    if (direction === 'vertical') return `50% ${value}%`;
    if (direction === 'diagonal') return `${value}% ${value}%`;
    return `${value}% 50%`;
  });

  const gradientAngle =
    direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';

  return (
    <motion.span
      className={`inline-block text-transparent bg-clip-text ${className}`}
      onHoverStart={() => setPaused(true)}
      onHoverEnd={() => setPaused(false)}
      style={{
        backgroundImage: `linear-gradient(${gradientAngle}, ${[...colors, colors[0]].join(', ')})`,
        backgroundSize: direction === 'diagonal' ? '240% 240%' : '240% 100%',
        backgroundPosition,
        WebkitBackgroundClip: 'text'
      }}
    >
      {children}
    </motion.span>
  );
}
