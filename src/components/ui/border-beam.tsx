import { CSSProperties } from 'react';
import { MotionStyle, Transition, motion } from 'motion/react';

import { cn } from '../../lib/cn';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 90,
  delay = 0,
  duration = 8,
  colorFrom = '#d97a4a',
  colorTo = '#1f8f84',
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1
}: BorderBeamProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-[length:var(--border-beam-width)] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
      style={{ '--border-beam-width': `${borderWidth}px` } as CSSProperties}
    >
      <motion.div
        className={cn('absolute aspect-square bg-linear-to-l from-[var(--beam-from)] via-[var(--beam-to)] to-transparent', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          '--beam-from': colorFrom,
          '--beam-to': colorTo,
          ...style
        } as MotionStyle}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`]
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
          delay: -delay,
          ...transition
        }}
      />
    </div>
  );
}
