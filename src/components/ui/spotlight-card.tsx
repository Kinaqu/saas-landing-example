import { PropsWithChildren, useRef, useState } from 'react';

import { cn } from '../../lib/cn';

interface SpotlightCardProps extends PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(217, 122, 74, 0.22)'
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-[28px] border border-[rgba(16,32,51,0.12)] bg-[rgba(255,252,246,0.82)] p-7 shadow-[0_24px_60px_rgba(16,32,51,0.08)] backdrop-blur-xl',
        className
      )}
      onMouseMove={(event) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 42%)`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
