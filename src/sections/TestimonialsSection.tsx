import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionHeader } from '@/components/SectionHeader';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "We stopped rewriting CTIs every week. What used to take hours now takes minutes, and the consistency across our team is night and day.",
    name: "Sarah M.",
    role: "Clinical Director, Heartland Hospice",
  },
  {
    quote: "Survey prep became dramatically less stressful. We went from scrambling two weeks before to feeling confident year-round.",
    name: "James R.",
    role: "Administrator, Serenity Care",
  },
  {
    quote: "Our documentation finally became consistent across clinicians. New hires ramp faster because there's a clear structure to follow.",
    name: "Linda K.",
    role: "VP of Clinical Operations, Compass Palliative",
  },
  {
    quote: "Leadership got time back immediately. I'm not manually reviewing every chart anymore — I can actually focus on running the operation.",
    name: "Dr. Michael Torres",
    role: "Hospice Medical Director, Valley Care",
  },
  {
    quote: "The face-to-face documentation alone saved us. Our eligibility language is now standardized and defensible.",
    name: "Angela P.",
    role: "Quality Director, Peaceful Passage Hospice",
  },
];

export function TestimonialsSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef(0);

  const maxIndex = testimonials.length - 1;

  const goNext = useCallback(() => {
    setActiveIndex(prev => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goNext();
      else goPrev();
    }
  };

  return (
    <section id="testimonials" ref={ref} className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <SectionHeader headline="What hospice teams are saying" />

        {/* Carousel */}
        <div
          className={cn(
            'mt-14 relative animate-fade-in delay-200',
            isVisible && 'is-visible'
          )}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 hover:bg-blue-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goNext}
            disabled={activeIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 hover:bg-blue-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>

          {/* Cards Track */}
          <div
            ref={containerRef}
            className="overflow-hidden mx-8"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-400 ease-out gap-6"
              style={{ transform: `translateX(-${activeIndex * (100 / 3 + 2)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="min-w-[calc(33.333%-16px)] flex-shrink-0 bg-white border border-neutral-200 rounded-xl p-6 md:p-8 shadow-card"
                >
                  <p className="text-base text-neutral-700 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <p className="text-[15px] font-semibold text-blue-900">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                  i === activeIndex ? 'bg-orange-600' : 'bg-neutral-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Bar */}
        <div
          className={cn(
            'mt-14 text-center animate-fade-in delay-400',
            isVisible && 'is-visible'
          )}
        >
          <p className="text-sm text-neutral-500 uppercase tracking-[0.08em] mb-5">
            Trusted by hospice teams nationwide
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-10 flex-wrap">
            {['Haven Hospice', 'Serenity Care', 'Valley Health', 'Compass Care', 'Heartland Hospice'].map((name) => (
              <span key={name} className="text-neutral-400 text-sm md:text-base font-medium opacity-50 hover:opacity-100 transition-opacity">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
