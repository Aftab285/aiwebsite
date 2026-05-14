import { useEffect } from 'react';
import { X, Play } from 'lucide-react';
import { Button } from './Button';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 transition-opacity duration-300" />
      <div
        className="relative bg-white rounded-2xl max-w-[520px] w-[calc(100%-32px)] p-8 md:p-10 shadow-2xl z-10"
        style={{
          animation: 'modalSlideUp 0.35s ease-out',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>
        <h3 className="text-2xl font-semibold text-blue-900 font-heading mb-3 pr-8">
          See how hospice teams are using AI right now
        </h3>
        <p className="text-base text-neutral-700 leading-relaxed mb-8">
          Book a short walkthrough with Prompted founder and Hospice Medical Director Dr. John Hopkins.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" className="flex-1" onClick={() => {
            onClose();
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            Book My Demo
          </Button>
          <Button variant="secondary" className="flex-1 gap-2">
            <Play size={16} fill="currentColor" />
            Watch 2 Minute Overview
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
