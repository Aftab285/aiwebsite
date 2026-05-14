import { useState } from 'react';
import { StickyNav } from '@/components/StickyNav';
import { DemoModal } from '@/components/DemoModal';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { WhyExistsSection } from '@/sections/WhyExistsSection';
import { VideoSection } from '@/sections/VideoSection';
import { ProblemsSection } from '@/sections/ProblemsSection';
import { WhatIsSection } from '@/sections/WhatIsSection';
import { FeaturesSection } from '@/sections/FeaturesSection';
import { ResultsSection } from '@/sections/ResultsSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { PricingSection } from '@/sections/PricingSection';
import { FinalCtaSection } from '@/sections/FinalCtaSection';
import { ContactSection } from '@/sections/ContactSection';

function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <StickyNav onDemoClick={() => setDemoModalOpen(true)} />

      <main>
        <HeroSection onDemoClick={() => setDemoModalOpen(true)} />
        <WhyExistsSection />
        <VideoSection onDemoClick={() => setDemoModalOpen(true)} />
        <ProblemsSection />
        <WhatIsSection />
        <FeaturesSection />
        <ResultsSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCtaSection onDemoClick={() => setDemoModalOpen(true)} />
        <ContactSection />
      </main>

      <Footer />

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}

export default App;
