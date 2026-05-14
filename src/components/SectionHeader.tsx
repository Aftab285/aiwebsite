import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, headline, subheadline, centered = true, className }: SectionHeaderProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div ref={ref} className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <p className={cn(
          'text-sm font-bold uppercase tracking-[0.12em] text-orange-600 font-heading mb-4',
          'animate-fade-up',
          isVisible && 'is-visible'
        )}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn(
        'text-[38px] font-semibold leading-[1.25] text-blue-900 font-heading md:text-[38px] sm:text-[28px]',
        'animate-fade-up delay-100',
        isVisible && 'is-visible'
      )}>
        {headline}
      </h2>
      {subheadline && (
        <p className={cn(
          'text-lg text-neutral-700 leading-relaxed mt-4 max-w-[600px]',
          centered && 'mx-auto',
          'animate-fade-up delay-200',
          isVisible && 'is-visible'
        )}>
          {subheadline}
        </p>
      )}
    </div>
  );
}
