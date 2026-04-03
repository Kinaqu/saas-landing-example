import { ComponentPropsWithoutRef, useCallback, useEffect, useId, useRef, useState } from 'react';
import { motion } from 'motion/react';

import { cn } from '../../lib/cn';

interface AnimatedGridPatternProps extends ComponentPropsWithoutRef<'svg'> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

type Square = {
  id: number;
  pos: [number, number];
  iteration: number;
};

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 40,
  className,
  maxOpacity = 0.4,
  duration = 4,
  repeatDelay = 0.6,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Square[]>([]);

  const getPos = useCallback((): [number, number] => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height)
    ];
  }, [dimensions.height, dimensions.width, height, width]);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    setSquares(
      Array.from({ length: numSquares }, (_, index) => ({
        id: index,
        pos: getPos(),
        iteration: 0
      }))
    );
  }, [dimensions.height, dimensions.width, getPos, numSquares]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const updateSquarePosition = (squareId: number) => {
    setSquares((currentSquares) => {
      const square = currentSquares[squareId];
      if (!square || square.id !== squareId) return currentSquares;

      const nextSquares = currentSquares.slice();
      nextSquares[squareId] = {
        ...square,
        pos: getPos(),
        iteration: square.iteration + 1
      };
      return nextSquares;
    });
  };

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 h-full w-full fill-white/10 stroke-white/14', className)}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [squareX, squareY], id: squareId, iteration }, index) => (
          <motion.rect
            key={`${squareId}-${iteration}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.08,
              repeatType: 'reverse',
              repeatDelay
            }}
            onAnimationComplete={() => updateSquarePosition(squareId)}
            width={width - 1}
            height={height - 1}
            x={squareX * width + 1}
            y={squareY * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}
