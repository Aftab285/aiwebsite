import { Play } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

interface FinalCtaSectionProps {
  onDemoClick: () => void;
}

export function FinalCtaSection({ onDemoClick }: FinalCtaSectionProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative min-h-[500px] flex items-center justify-center py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/final-cta-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900/88" />

      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <h2
          className={cn(
            'text-[28px] md:text-[42px] font-semibold text-white font-heading leading-[1.2] max-w-[700px] mx-auto animate-fade-up',
            isVisible && 'is-visible'
          )}
        >
          AI for Hospice starts with better conversations.
        </h2>

        <p
          className={cn(
            'text-lg text-white/85 mt-4 max-w-[600px] mx-auto animate-fade-up delay-100',
            isVisible && 'is-visible'
          )}
        >
          See how Prompted helps hospice teams reduce documentation burden while improving consistency and operational confidence.
        </p>

        <div
          className={cn(
            'flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up delay-200',
            isVisible && 'is-visible'
          )}
        >
          <Button variant="primary" onClick={onDemoClick}>
            Book a Demo
          </Button>
          <Button variant="ghost" className="gap-2">
            <Play size={16} fill="white" />
            Watch 2 Minute Overview
          </Button>
        </div>
      </div>
    </section>
  );
}
