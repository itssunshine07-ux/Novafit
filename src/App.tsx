import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyNovaFit } from './components/WhyNovaFit';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationSection } from './components/ConsultationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { SERVICES_DATA } from './data/fitnessData';
import { ServiceItem } from './types';
import { ArrowUp, Sparkles, Dumbbell } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [activeProgramForBooking, setActiveProgramForBooking] = useState<string>('Personal Training');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenConsultation = (program?: string) => {
    if (program) {
      setActiveProgramForBooking(program);
    }
    // Smooth scroll to the main consultation section
    scrollToElement('consultation');
  };

  const handleOpenModal = (program?: string) => {
    if (program) {
      setActiveProgramForBooking(program);
    }
    setIsConsultationModalOpen(true);
  };

  const handleSelectServiceForTrial = (programTitle: string) => {
    setActiveProgramForBooking(programTitle);
    scrollToElement('consultation');
  };

  const handleSelectPlan = (planName: string) => {
    setActiveProgramForBooking(`${planName} Tier`);
    scrollToElement('consultation');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080A0C] text-[#F7F6F1] selection:bg-[#B8F34A] selection:text-[#080A0C] relative">
      {/* Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExplorePrograms={() => scrollToElement('services')}
        />

        {/* 1. About NovaFit */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 2. Services */}
        <ServicesSection
          services={SERVICES_DATA}
          onSelectService={(service) => setSelectedService(service)}
          onBookService={handleSelectServiceForTrial}
        />

        {/* 3. Why NovaFit — Animated Statistics */}
        <WhyNovaFit onOpenConsultation={() => handleOpenConsultation()} />

        {/* 4. Pricing — 3 Premium Plans */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 5. Testimonials — Interactive Slider */}
        <TestimonialsSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 6. Free Consultation CTA & Form */}
        <ConsultationSection preselectedProgram={activeProgramForBooking} />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* 8. Professional Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookProgram={(prog) => {
          setSelectedService(null);
          handleSelectServiceForTrial(prog);
        }}
      />

      {/* Dedicated Quick Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        preselectedProgram={activeProgramForBooking}
      />

      {/* Mobile Sticky Quick Booking Bar */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-40">
        <div className="bg-[#101820]/95 backdrop-blur-md p-2 rounded-2xl border border-[#222f3e] shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-between gap-3">
          <div className="pl-2">
            <p className="text-[10px] text-[#A7ADB2] uppercase font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#B8F34A]" /> Complimentary
            </p>
            <p className="text-xs font-bold text-[#F7F6F1]">Free 1-on-1 Pass</p>
          </div>
          <button
            onClick={() => handleOpenConsultation()}
            className="px-4 py-2.5 rounded-xl bg-[#B8F34A] text-[#080A0C] font-extrabold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(184,243,74,0.3)] flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book Free</span>
            <Dumbbell className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-16 sm:bottom-6 right-6 z-40 w-11 h-11 rounded-2xl bg-[#101820]/90 border border-[#222f3e] hover:border-[#B8F34A] text-[#A7ADB2] hover:text-[#B8F34A] flex items-center justify-center transition-all shadow-xl backdrop-blur-sm cursor-pointer hover:scale-105"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
