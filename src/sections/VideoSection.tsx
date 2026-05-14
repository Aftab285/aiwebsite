import { useState } from 'react';
import { Play } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/Button';
import { SectionHeader } from '@/components/SectionHeader';
import { cn } from '@/lib/utils';

interface VideoSectionProps {
  onDemoClick: () => void;
}

export function VideoSection({ onDemoClick }: VideoSectionProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" ref={ref} className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <SectionHeader
          headline="See Prompted in under 2 minutes"
          subheadline="A quick look at how hospice teams are using AI to reduce documentation burden and improve operational consistency."
        />

        {/* Video Container */}
        <div
          className={cn(
            'mt-10 rounded-xl overflow-hidden bg-blue-900 shadow-[0_8px_32px_rgba(0,0,0,0.08)] relative animate-scale-in delay-200',
            isVisible && 'is-visible'
          )}
          style={{ aspectRatio: '16/9' }}
        >
          {!isPlaying ? (
            <>
              <img
                src="/assets/platform-screenshot-1.jpg"
                alt="Prompted Platform Overview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-[72px] h-[72px] rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-105 hover:bg-white transition-all duration-200 cursor-pointer"
                >
                  <Play size={28} className="text-orange-600 ml-1" fill="currentColor" />
                </button>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-900">
              <p className="text-white/60 text-lg">Video would play here</p>
            </div>
          )}
        </div>

        {/* Post-Video CTA */}
        <div className={cn(
          'text-center mt-8 animate-fade-up delay-500',
          isVisible && 'is-visible'
        )}>
          <Button variant="primary" onClick={onDemoClick}>
            Book a Live Demo
          </Button>
          <p className="text-sm text-neutral-500 mt-3">
            Prefer a live walkthrough? Speak directly with our founder and Hospice Medical Director.
          </p>
        </div>
      </div>
    </section>
  );
}
