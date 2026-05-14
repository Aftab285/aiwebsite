import { FileCheck, Users, ShieldCheck, LayoutTemplate, BarChart3, Eye } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionHeader } from '@/components/SectionHeader';
import { cn } from '@/lib/utils';

const featureCards = [
  {
    icon: FileCheck,
    title: 'CTI Generation',
    body: 'Generate structured certification documentation faster.',
    accent: 'border-t-[3px] border-t-orange-500',
  },
  {
    icon: Users,
    title: 'Face-to-Face Documentation',
    body: 'Support eligibility alignment with structured narratives.',
    accent: 'border-t-[3px] border-t-blue-500',
  },
  {
    icon: ShieldCheck,
    title: 'IDT Documentation',
    body: 'Keep interdisciplinary discussions organized and consistent.',
    accent: 'border-t-[3px] border-t-orange-500',
  },
  {
    icon: LayoutTemplate,
    title: 'Template Governance',
    body: 'Deploy standardized documentation structures across teams.',
    accent: 'border-t-[3px] border-t-blue-500',
  },
  {
    icon: BarChart3,
    title: 'Audit Readiness',
    body: 'Improve defensibility and reduce last-minute corrections.',
    accent: 'border-t-[3px] border-t-orange-500',
  },
  {
    icon: Eye,
    title: 'Operational Oversight',
    body: 'Gain visibility into documentation quality without manually reviewing every chart.',
    accent: 'border-t-[3px] border-t-blue-500',
  },
];

export function FeaturesSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section id="features" ref={ref} className="bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <SectionHeader
          headline="Built for how hospice actually works"
          subheadline="Every feature designed around real hospice documentation workflows."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, i) => (
            <div
              key={i}
              className={cn(
                'bg-white border border-neutral-200 rounded-xl p-6 shadow-card transition-all duration-250 hover:-translate-y-0.5 hover:shadow-card-hover',
                card.accent,
                'animate-fade-up',
                isVisible && 'is-visible'
              )}
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <card.icon size={36} className="text-blue-500 stroke-[1.5] mb-4" />
              <h3 className="text-[22px] font-semibold text-blue-900 font-heading mb-2">
                {card.title}
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
