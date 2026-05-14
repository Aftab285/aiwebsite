import { FileText, ClipboardList, AlertTriangle, UserMinus } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionHeader } from '@/components/SectionHeader';
import { cn } from '@/lib/utils';

const problems = [
  {
    icon: FileText,
    title: 'Your team documents differently across clinicians',
    body: "Even strong teams struggle with consistency when there's no structured system guiding documentation.",
  },
  {
    icon: ClipboardList,
    title: 'Leadership is still manually reviewing charts',
    body: 'Administrators and clinical leaders are spending hours checking documentation quality instead of focusing on operations.',
  },
  {
    icon: AlertTriangle,
    title: 'Survey readiness becomes reactive',
    body: 'Documentation issues often surface right before review instead of being handled proactively.',
  },
  {
    icon: UserMinus,
    title: 'Your best clinicians carry the documentation quality',
    body: 'And when they leave, the structure leaves with them.',
  },
];

export function ProblemsSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section id="problems" ref={ref} className="bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <SectionHeader
          headline="If you lead a hospice, this probably sounds familiar."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((card, i) => (
            <div
              key={i}
              className={cn(
                'bg-white border border-neutral-200 rounded-xl p-6 md:p-8 shadow-card transition-all duration-250 hover:-translate-y-0.5 hover:shadow-card-hover',
                'animate-fade-up',
                isVisible && 'is-visible'
              )}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <card.icon size={40} className="text-blue-500 stroke-[1.5] mb-4" />
              <h3 className="text-xl md:text-[22px] font-semibold text-blue-900 font-heading mb-3">
                {card.title}
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p
          className={cn(
            'text-center text-lg text-neutral-700 italic max-w-[700px] mx-auto mt-12 animate-fade-up delay-600',
            isVisible && 'is-visible'
          )}
        >
          Hospice documentation problems are rarely about effort. They're usually about consistency, structure, and operational visibility.
        </p>
      </div>
    </section>
  );
}
