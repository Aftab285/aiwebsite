import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { SmallButton } from './Button';

const navLinks = [
  { label: 'How It Works', href: '#why-exists' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book Demo', href: '#contact' },
];

interface StickyNavProps {
  onDemoClick: () => void;
}

export function StickyNav({ onDemoClick }: StickyNavProps) {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const isScrolled = scrollY > 100;

  useEffect(() => {
    const sections = navLinks.map(link => link.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-neutral-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <a href="#" className="flex items-center" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img
              src="/assets/logo-prompted.png"
              alt="Prompted"
              className="h-9"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative text-[15px] font-medium transition-colors duration-200 font-body ${
                    isScrolled
                      ? isActive ? 'text-orange-600' : 'text-blue-900 hover:text-orange-600'
                      : isActive ? 'text-orange-400' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-600 rounded-full" />
                  )}
                </a>
              );
            })}
            <SmallButton variant="primary" onClick={onDemoClick}>
              Book a Demo
            </SmallButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 cursor-pointer"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} className={isScrolled ? 'text-blue-900' : 'text-white'} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 right-0 w-[280px] h-full bg-white shadow-xl p-6 flex flex-col transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            className="self-end w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors mb-6 cursor-pointer"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} className="text-blue-900" />
          </button>

          <div className="flex flex-col gap-6">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-lg font-medium text-blue-900 hover:text-orange-600 transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <SmallButton variant="primary" className="w-full" onClick={() => { setMobileOpen(false); onDemoClick(); }}>
              Book a Demo
            </SmallButton>
          </div>
        </div>
      </div>
    </>
  );
}
