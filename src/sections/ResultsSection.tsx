import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Counter } from '@/components/Counter';
import { cn } from '@/lib/utils';

const metrics = [
  { value: '70%', label: 'Less manual chart review', isAccent: false },
  { value: '3x', label: 'More consistent documentation', isAccent: false },
  { value: '5+', label: 'Hours saved per clinician weekly', isAccent: true },
];

export function ResultsSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.3 });

  return (
    <section id="results" ref={ref} className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <h2
          className={cn(
            'text-[28px] md:text-[38px] font-semibold leading-[1.25] text-blue-900 font-heading text-center mb-14',
            'animate-fade-up',
            isVisible && 'is-visible'
          )}
        >
          What hospice teams notice first
        </h2>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={cn(
                'text-center px-6 md:px-8 relative',
                'animate-fade-up',
                isVisible && 'is-visible'
              )}
              style={{ transitionDelay: `${0.15 + i * 0.2}s` }}
            >
              {/* Divider */}
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-[60px] bg-neutral-200" />
              )}
              {i > 0 && (
                <div className="md:hidden w-[60px] h-px bg-neutral-200 mx-auto mb-8" />
              )}

              <div className={`text-[40px] md:text-[56px] font-bold ${metric.isAccent ? 'text-orange-600' : 'text-blue-900'} font-heading`}>
                <Counter target={metric.value} delay={i * 200} />
              </div>
              <p className="text-base font-medium text-neutral-700 mt-2">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Quote */}
        <div
          className={cn(
            'mt-14 text-center max-w-[650px] mx-auto animate-fade-up delay-700',
            isVisible && 'is-visible'
          )}
        >
          <span className="text-[48px] text-orange-200 font-heading leading-none block -mb-4">&ldquo;</span>
          <p className="text-lg text-neutral-700 italic leading-relaxed">
            Most teams don't realize how much operational time is being lost to documentation inconsistency until they finally have structure around it.
          </p>
          <p className="text-sm text-neutral-500 mt-4">
            — Hospice Medical Director, Midwest Care Partners
          </p>
        </div>
      </div>
    </section>
  );
}
