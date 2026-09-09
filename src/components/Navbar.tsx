import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Clock, Phone, Dumbbell, Sparkles } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/fitnessData';

interface NavbarProps {
  onOpenConsultation: (program?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why NovaFit', href: '#why-novafit' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top micro-bar */}
      <div className="bg-[#101820] text-[#A7ADB2] border-b border-[#222f3e]/60 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#F7F6F1]">
              <span className="w-2 h-2 rounded-full bg-[#B8F34A] animate-pulse"></span>
              <span className="font-semibold text-[#B8F34A]">Studio Open Today:</span> 5:30 AM – 10:00 PM
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#F7F6F1] transition-colors">
              <Clock className="w-3.5 h-3.5 text-[#B8F34A]" />
              Contrast Lounge Available Today
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={`tel:${STUDIO_DETAILS.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#B8F34A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8F34A]" />
              <span>{STUDIO_DETAILS.phone}</span>
            </a>
            <span className="text-[#364453]">•</span>
            <span className="text-[#A7ADB2]">Downtown Design District, NY</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080A0C]/95 backdrop-blur-md border-b border-[#101820] shadow-2xl py-3'
            : 'bg-[#080A0C]/80 backdrop-blur-sm border-b border-white/5 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group cursor-pointer"
            id="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#101820] border border-[#B8F34A]/30 flex items-center justify-center text-[#B8F34A] group-hover:border-[#B8F34A] group-hover:shadow-[0_0_15px_rgba(184,243,74,0.3)] transition-all">
              <Dumbbell className="w-5 h-5 transform -rotate-45" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-display font-extrabold text-xl tracking-wider text-[#F7F6F1]">
                  NOVA<span className="text-[#B8F34A]">FIT</span>
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B8F34A]"></span>
              </div>
              <p className="text-[9px] tracking-[0.25em] text-[#A7ADB2] uppercase font-semibold">
                Fitness & Wellness
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-[#A7ADB2] hover:text-[#F7F6F1] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8F34A] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              id="nav-consultation-btn"
              onClick={() => onOpenConsultation()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-[#B8F34A] text-[#080A0C] font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(184,243,74,0.25)] hover:shadow-[0_0_30px_rgba(184,243,74,0.45)] hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <span>BOOK FREE CONSULTATION</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4 lg:hidden">
            <button
              onClick={() => onOpenConsultation()}
              className="px-3.5 py-2 rounded-lg bg-[#B8F34A] text-[#080A0C] font-bold text-xs tracking-wide sm:hidden"
            >
              FREE PASS
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="w-10 h-10 rounded-lg bg-[#101820] border border-[#222f3e] flex items-center justify-center text-[#F7F6F1] hover:text-[#B8F34A] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#080A0C] border-b border-[#101820] px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col gap-2 mb-5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2.5 px-3 rounded-lg text-base font-medium text-[#A7ADB2] hover:text-[#B8F34A] hover:bg-[#101820] transition-all"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="p-3 bg-[#101820] rounded-xl border border-[#222f3e] mb-4">
              <div className="flex items-center gap-2 text-xs text-[#B8F34A] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                First-time visit perks
              </div>
              <p className="text-xs text-[#A7ADB2] leading-relaxed">
                Includes InBody 770 3D body composition scan ($150 value) + 1-on-1 coach assessment.
              </p>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl bg-[#B8F34A] text-[#080A0C] font-bold text-sm tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(184,243,74,0.25)]"
            >
              <span>BOOK FREE CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>
    </>
  );
};
