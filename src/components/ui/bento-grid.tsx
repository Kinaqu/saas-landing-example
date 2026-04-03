import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

import { cn } from '../../lib/cn';

interface BentoGridProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<'div'> {
  label: string;
  title: string;
  description: string;
  className?: string;
  background: ReactNode;
  icon: ReactNode;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div className={cn('grid auto-rows-[22rem] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3', className)} {...props}>
      {children}
    </div>
  );
}

export function BentoCard({ label, title, description, className, background, icon, ...props }: BentoCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-[30px] border border-[rgba(16,32,51,0.12)] bg-[rgba(255,252,246,0.84)] shadow-[0_20px_70px_rgba(16,32,51,0.08)] backdrop-blur-xl',
        className
      )}
      {...props}
    >
      <div className="absolute inset-x-0 top-0 h-[62%] overflow-hidden">{background}</div>
      <div className="absolute inset-x-0 top-0 h-[68%] bg-linear-to-b from-white/10 via-white/20 to-[rgba(255,252,246,0.98)]" />
      <div className="absolute inset-x-0 bottom-0 h-[44%] bg-[rgba(255,252,246,0.98)]" />
      <div className="relative z-10 flex h-full flex-col p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center rounded-full border border-[rgba(16,32,51,0.12)] bg-white/80 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[rgba(16,32,51,0.65)]">
            {label}
          </span>
          <div className="rounded-2xl bg-[rgba(16,32,51,0.06)] p-3 text-[var(--accent)]">{icon}</div>
        </div>
        <div className="mt-auto max-w-sm rounded-[24px] border border-[rgba(16,32,51,0.08)] bg-[rgba(255,252,246,0.94)] p-5 shadow-[0_14px_40px_rgba(16,32,51,0.05)] backdrop-blur-sm">
          <h3 className="heading-font text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-[rgba(16,32,51,0.68)]">{description}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
            Built for teams that move after meetings
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
