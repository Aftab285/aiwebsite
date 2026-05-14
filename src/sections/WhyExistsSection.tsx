import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

export function WhyExistsSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section
      id="why-exists"
      ref={ref}
      className="bg-white py-16 md:py-24"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
          {/* Founder Image */}
          <div className={cn(
            'animate-fade-left',
            isVisible && 'is-visible'
          )}>
            <img
              src="/assets/founder-portrait.jpg"
              alt="Founder - Hospice Physician Leader"
              className="rounded-2xl w-full max-w-[400px] lg:max-w-none mx-auto lg:mx-0 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              style={{ aspectRatio: '4/5', objectFit: 'cover' }}
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className={cn(
              'text-[28px] md:text-[38px] font-semibold leading-[1.25] text-blue-900 font-heading animate-fade-right delay-100',
              isVisible && 'is-visible'
            )}>
              Hospice teams don't need another generic AI tool.
            </h2>

            <div className="mt-5 space-y-4">
              <p className={cn(
                'text-base text-neutral-700 leading-relaxed animate-fade-up delay-200',
                isVisible && 'is-visible'
              )}>
                Most AI tools weren't built for hospice. They don't understand recertifications, face-to-face encounters, CTIs, survey readiness, eligibility language, operational oversight, or interdisciplinary documentation.
              </p>
              <p className={cn(
                'text-base text-neutral-700 leading-relaxed animate-fade-up delay-300',
                isVisible && 'is-visible'
              )}>
                Prompted was built specifically for hospice operations by physician and operational leadership who understand the reality of compliance pressure, staffing strain, and documentation inconsistency.
              </p>
              <p className={cn(
                'text-base text-neutral-700 leading-relaxed animate-fade-up delay-400',
                isVisible && 'is-visible'
              )}>
                This is not AI trying to replace clinicians. This is AI designed to support hospice teams in the places where operational friction actually exists.
              </p>
            </div>

            <a
              href="#video"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                'inline-block mt-6 text-base font-semibold text-blue-500 hover:text-blue-700 transition-colors group animate-fade-up delay-500',
                isVisible && 'is-visible'
              )}
            >
              See how hospice teams are using Prompted
              <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
