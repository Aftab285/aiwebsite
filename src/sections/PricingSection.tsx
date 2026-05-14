import { Check } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Pilot',
    description: 'For teams evaluating Prompted with a small group.',
    features: ['Up to 5 users', 'Core documentation templates', 'CTI & face-to-face support', 'Email support'],
    cta: 'Start a Pilot',
    variant: 'secondary' as const,
    featured: false,
  },
  {
    name: 'Team',
    description: 'For hospice organizations standardizing documentation across clinicians.',
    features: ['Unlimited users', 'All documentation templates', 'IDT summaries & nurse notes', 'Template governance', 'Operational oversight dashboard', 'Priority support'],
    cta: 'Get Started',
    variant: 'primary' as const,
    featured: true,
  },
  {
    name: 'Enterprise',
    description: 'For multi-location or larger hospice operations needing onboarding, governance, and support.',
    features: ['Everything in Team', 'Multi-location management', 'Custom template development', 'Dedicated onboarding', 'SSO & advanced security', 'Dedicated account manager'],
    cta: 'Contact Sales',
    variant: 'secondary' as const,
    featured: false,
  },
];

export function PricingSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();

  return (
    <section id="pricing" ref={ref} className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <SectionHeader
          headline="Flexible plans for hospice teams"
          subheadline="Start with a small pilot. Scale across your organization when ready."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                'relative bg-white border border-neutral-200 rounded-xl shadow-card transition-all duration-250 hover:-translate-y-0.5 hover:shadow-card-hover flex flex-col',
                plan.featured && '-translate-y-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-t-[3px] border-t-orange-500',
                'animate-fade-up',
                isVisible && 'is-visible'
              )}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              {plan.featured && (
                <div className="absolute -top-3 right-6 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className={`p-6 md:p-8 flex-1 ${plan.featured ? 'bg-orange-100/50' : ''}`}>
                <h3 className="text-2xl font-semibold text-blue-900 font-heading">
                  {plan.name}
                </h3>
                <p className="text-base text-neutral-700 mt-2 leading-relaxed">
                  {plan.description}
                </p>

                <div className="my-6 h-px bg-neutral-200" />

                <ul className="space-y-3">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <Check size={18} className="text-orange-600 shrink-0 mt-0.5" />
                      <span className="text-[15px] text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 md:px-8 pt-0">
                <Button
                  variant={plan.variant}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
