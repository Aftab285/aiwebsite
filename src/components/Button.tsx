import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-body font-semibold text-base rounded-full transition-all duration-200 ease cursor-pointer';
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-orange-600 text-white px-8 py-3.5 hover:bg-[#EA580C] hover:-translate-y-px hover:shadow-cta active:scale-[0.98]',
    secondary: 'border-[1.5px] border-blue-500 text-blue-700 bg-transparent px-8 py-3.5 hover:bg-blue-100 hover:border-blue-700 active:scale-[0.98]',
    ghost: 'border-[1.5px] border-white/40 text-white bg-transparent px-8 py-3.5 hover:bg-white/10 hover:border-white active:scale-[0.98]',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function SmallButton({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-body font-semibold text-[15px] rounded-full transition-all duration-200 ease cursor-pointer';
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-orange-600 text-white px-6 py-2.5 hover:bg-[#EA580C] hover:-translate-y-px hover:shadow-cta active:scale-[0.98]',
    secondary: 'border-[1.5px] border-blue-500 text-blue-700 bg-transparent px-6 py-2.5 hover:bg-blue-100 hover:border-blue-700 active:scale-[0.98]',
    ghost: 'border-[1.5px] border-white/40 text-white bg-transparent px-6 py-2.5 hover:bg-white/10 hover:border-white active:scale-[0.98]',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
