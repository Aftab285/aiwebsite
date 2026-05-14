import { Play } from 'lucide-react';
import { Button } from '@/components/Button';

interface HeroSectionProps {
  onDemoClick: () => void;
}

export function HeroSection({ onDemoClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] max-h-[900px] flex items-end overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'heroZoom 1.2s ease-out',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(15,42,68,0.82) 0%, rgba(15,42,68,0.45) 40%, rgba(15,42,68,0.15) 70%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 w-full pt-40 sm:pt-48 pb-20 md:pb-28 lg:pb-32">
        <p
          className="text-sm font-bold uppercase tracking-[0.12em] text-orange-500 font-heading mb-4"
          style={{ animation: 'heroFadeUp 0.5s ease-out 0.3s both' }}
        >
          AI FOR HOSPICE
        </p>

        <h1
          className="text-[32px] sm:text-[42px] lg:text-[52px] font-semibold leading-[1.15] text-white font-heading max-w-[700px]"
          style={{
            textShadow: '0 2px 12px rgba(0,0,0,0.2)',
            animation: 'heroFadeUp 0.6s ease-out 0.45s both',
          }}
        >
          The AI platform built specifically for hospice teams.
        </h1>

        <p
          className="text-base lg:text-lg text-white leading-relaxed max-w-[620px] mt-5"
          style={{ 
            animation: 'heroFadeUp 0.5s ease-out 0.6s both',
            textShadow: '0 1px 4px rgba(0,0,0,0.3)' 
          }}
        >
          Prompted helps hospice organizations reduce documentation burden, improve consistency, support compliance, and reclaim time for patient care — without replacing your EMR or disrupting workflows.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          style={{ animation: 'heroFadeUp 0.5s ease-out 0.75s both' }}
        >
          <Button variant="primary" onClick={onDemoClick}>
            Book a Demo
          </Button>
          <Button variant="ghost" className="gap-2">
            <Play size={16} fill="white" />
            Watch 2 Minute Overview
          </Button>
        </div>

        <div
          className="mt-6 flex items-start gap-3"
          style={{ animation: 'heroFadeIn 0.5s ease-out 0.9s both' }}
        >
          <div className="w-0.5 h-10 bg-orange-500/60 rounded-full shrink-0 mt-0.5" />
          <p className="text-sm text-white/60 leading-relaxed">
            Built by hospice physician leaders and designed for real hospice workflows.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
