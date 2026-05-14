import { Check } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

const features = [
  'CTIs',
  'Face-to-face documentation',
  'IDT summaries',
  'Nurse visit notes',
  'Template enforcement',
  'Documentation consistency',
  'Eligibility alignment',
  'Workflow standardization',
];

export function WhatIsSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section id="what-is" ref={ref} className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-12 items-center">
          {/* Screenshot Composition */}
          <div className={cn(
            'relative animate-fade-left',
            isVisible && 'is-visible'
          )}>
            {/* Background screenshot 1 */}
            <img
              src="/assets/platform-screenshot-2.jpg"
              alt="IDT Documentation"
              className="absolute -top-4 -left-4 w-[85%] rounded-xl shadow-lg opacity-70"
              style={{
                transform: 'scale(0.92) rotate(-3deg)',
                animation: isVisible ? 'screenshotIn 0.7s ease-out 0.1s both' : 'none',
              }}
            />
            {/* Background screenshot 2 */}
            <img
              src="/assets/platform-screenshot-3.jpg"
              alt="Operational Dashboard"
              className="absolute -bottom-4 -right-4 w-[85%] rounded-xl shadow-lg opacity-70"
              style={{
                transform: 'scale(0.92) rotate(3deg)',
                animation: isVisible ? 'screenshotIn 0.7s ease-out 0.2s both' : 'none',
              }}
            />
            {/* Main screenshot */}
            <img
              src="/assets/platform-screenshot-1.jpg"
              alt="Prompted Platform - CTI Documentation"
              className="relative z-10 w-full rounded-xl shadow-xl"
              style={{
                animation: isVisible ? 'screenshotIn 0.8s ease-out both' : 'none',
              }}
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className={cn(
              'text-[28px] md:text-[38px] font-semibold leading-[1.25] text-blue-900 font-heading animate-fade-right delay-100',
              isVisible && 'is-visible'
            )}>
              Prompted is the operational AI layer for hospice documentation.
            </h2>

            <p className={cn(
              'text-lg text-neutral-700 mt-3 animate-fade-up delay-200',
              isVisible && 'is-visible'
            )}>
              Not just note generation. Structured oversight for how documentation is created across your organization.
            </p>

            {/* Feature Grid */}
            <div
              className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3"
            >
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex items-center gap-2.5 text-[15px] font-medium text-neutral-700 animate-fade-up',
                    isVisible && 'is-visible'
                  )}
                  style={{ transitionDelay: `${0.35 + i * 0.06}s` }}
                >
                  <Check size={16} className="text-orange-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Key Copy Block */}
            <div
              className={cn(
                'mt-7 bg-white border border-neutral-200 rounded-xl p-5 border-l-[3px] border-l-orange-500 animate-fade-up delay-700',
                isVisible && 'is-visible'
              )}
            >
              <p className="text-base text-neutral-700 leading-relaxed">
                <strong className="text-blue-900">Prompted works alongside your existing systems.</strong> It doesn't replace your EMR. It helps standardize how documentation is created inside your workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes screenshotIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
