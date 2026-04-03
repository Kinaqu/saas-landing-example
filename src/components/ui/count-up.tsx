import { useCallback, useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function CountUp({
  to,
  from = to,
  duration = 2,
  className,
  decimals = 0,
  prefix = '',
  suffix = ''
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const value = useMotionValue(from);
  const spring = useSpring(value, {
    damping: 20 + 40 * (1 / duration),
    stiffness: 100 * (1 / duration)
  });
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const formatValue = useCallback(
    (latest: number) => `${prefix}${latest.toFixed(decimals)}${suffix}`,
    [decimals, prefix, suffix]
  );

  useEffect(() => {
    if (ref.current) ref.current.textContent = formatValue(from);
  }, [formatValue, from]);

  useEffect(() => {
    if (!inView) return;
    value.set(to);
  }, [inView, to, value]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = formatValue(latest);
    });
  }, [formatValue, spring]);

  return <span ref={ref} className={className} />;
}
