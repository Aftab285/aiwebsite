import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface CounterProps {
  target: string;
  duration?: number;
  delay?: number;
}

export function Counter({ target, duration = 1500, delay = 0 }: CounterProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({ threshold: 0.5 });
  const [current, setCurrent] = useState('0');

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCurrent(target);
      return;
    }

    const numericMatch = target.match(/[\d.]+/);
    if (!numericMatch) {
      setCurrent(target);
      return;
    }

    const numericValue = parseFloat(numericMatch[0]);
    const suffix = target.replace(/[\d.]+/, '');
    const startTime = performance.now() + delay;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = numericValue * eased;

      if (numericValue % 1 === 0) {
        setCurrent(Math.round(value) + suffix);
      } else {
        setCurrent(value.toFixed(1) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration, delay]);

  return <span ref={ref}>{current}</span>;
}
