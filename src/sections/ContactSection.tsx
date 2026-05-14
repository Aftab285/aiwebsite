import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  organization: z.string().min(1, 'Organization is required'),
  role: z.string().min(1, 'Role is required'),
  teamSize: z.string().min(1, 'Team size is required'),
  challenge: z.string().min(1, 'Please select your biggest challenge'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  const inputClass = (error?: boolean) =>
    `w-full px-4 py-3.5 bg-white border ${error ? 'border-red-400' : 'border-neutral-200'} rounded-lg text-base text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/10 transition-all duration-200`;

  const labelClass = 'block text-sm font-medium text-neutral-700 mb-2';

  return (
    <section id="contact" ref={ref} className="bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 lg:gap-16">
          {/* Left Column */}
          <div className={cn('animate-fade-left', isVisible && 'is-visible')}>
            <h2 className="text-[28px] md:text-[38px] font-semibold leading-[1.25] text-blue-900 font-heading">
              Ready to see Prompted in action?
            </h2>
            <p className="text-lg text-neutral-700 mt-4 leading-relaxed">
              Book a personalized demo with our team. We'll walk you through how Prompted fits your hospice's specific documentation needs.
            </p>

            <div className="mt-8 space-y-3">
              {['No commitment required', 'Personalized to your workflow', 'Direct access to our founder team'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={18} className="text-orange-600 shrink-0" />
                  <span className="text-[15px] font-medium text-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-neutral-500 italic mt-6">
              We work directly with hospice leadership teams to ensure high-touch onboarding and support.
            </p>
          </div>

          {/* Right Column - Form */}
          <div className={cn('animate-fade-right delay-100', isVisible && 'is-visible')}>
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-10">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 font-heading mb-2">Thank you!</h3>
                  <p className="text-base text-neutral-700">
                    Our team will reach out within 24 hours to schedule your demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input {...register('name')} placeholder="Your name" className={inputClass(!!errors.name)} />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Organization */}
                  <div>
                    <label className={labelClass}>Organization *</label>
                    <input {...register('organization')} placeholder="Hospice organization name" className={inputClass(!!errors.organization)} />
                    {errors.organization && <p className="text-sm text-red-500 mt-1">{errors.organization.message}</p>}
                  </div>

                  {/* Role */}
                  <div>
                    <label className={labelClass}>Your Role *</label>
                    <select {...register('role')} className={inputClass(!!errors.role)}>
                      <option value="">Select your role</option>
                      <option>Clinical Director</option>
                      <option>Hospice Administrator</option>
                      <option>Medical Director</option>
                      <option>VP of Operations</option>
                      <option>Quality Director</option>
                      <option>Nurse Manager</option>
                      <option>Other</option>
                    </select>
                    {errors.role && <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>}
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className={labelClass}>Team Size *</label>
                    <select {...register('teamSize')} className={inputClass(!!errors.teamSize)}>
                      <option value="">Select team size</option>
                      <option>1-10</option>
                      <option>11-50</option>
                      <option>51-200</option>
                      <option>200+</option>
                    </select>
                    {errors.teamSize && <p className="text-sm text-red-500 mt-1">{errors.teamSize.message}</p>}
                  </div>

                  {/* Challenge */}
                  <div>
                    <label className={labelClass}>Biggest Documentation Challenge *</label>
                    <select {...register('challenge')} className={inputClass(!!errors.challenge)}>
                      <option value="">Select challenge</option>
                      <option>Inconsistent documentation</option>
                      <option>Manual chart review</option>
                      <option>Survey readiness</option>
                      <option>CTI quality</option>
                      <option>Time spent on notes</option>
                      <option>Other</option>
                    </select>
                    {errors.challenge && <p className="text-sm text-red-500 mt-1">{errors.challenge.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input {...register('email')} type="email" placeholder="you@organization.com" className={inputClass(!!errors.email)} />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>Phone Number <span className="text-neutral-400">(optional)</span></label>
                    <input {...register('phone')} type="tel" placeholder="(555) 000-0000" className={inputClass()} />
                  </div>

                  <Button variant="primary" className="w-full mt-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Request Demo Access'}
                  </Button>

                  <p className="text-xs text-neutral-500 text-center mt-3">
                    Your information is secure. We never share your data with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
