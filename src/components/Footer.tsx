import React, { useState } from 'react';
import { Dumbbell, ArrowRight, Instagram, Youtube, Check, Heart } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/fitnessData';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const scrollToSection = (id: string) => {
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

  return (
    <footer className="bg-[#080A0C] border-t border-[#101820] text-[#A7ADB2] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Dispatch Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#101820] border border-[#222f3e] mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#B8F34A] mb-1 block">
              The NovaFit Longevity Journal
            </span>
            <h3 className="font-display font-bold text-2xl text-[#F7F6F1] mb-2">
              Actionable training science & recovery protocols
            </h3>
            <p className="text-xs text-[#A7ADB2]">
              Delivered once every Sunday. No spam, zero generic fitness influencer advice.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {newsletterSubmitted ? (
              <div className="flex items-center gap-2 text-sm text-[#B8F34A] bg-[#080A0C] px-5 py-3.5 rounded-xl border border-[#B8F34A]/40 font-semibold">
                <Check className="w-4 h-4" />
                <span>You're subscribed! Check your inbox for the 30-Day Primer.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-96">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] placeholder-[#535d67] text-sm focus:outline-none focus:border-[#B8F34A] flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#B8F34A] text-[#080A0C] font-extrabold text-xs uppercase tracking-wider hover:bg-[#cbfb6f] transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-sm"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Columns Navigation & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#101820] border border-[#B8F34A]/40 flex items-center justify-center text-[#B8F34A]">
                <Dumbbell className="w-5 h-5 transform -rotate-45" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-wider text-[#F7F6F1]">
                  NOVA<span className="text-[#B8F34A]">FIT</span>
                </span>
                <p className="text-[9px] tracking-[0.25em] text-[#A7ADB2] uppercase font-semibold">
                  Fitness & Wellness Studio
                </p>
              </div>
            </div>

            <p className="text-sm text-[#A7ADB2] leading-relaxed max-w-sm">
              Transform your body, elevate your mind. Engineered biomechanics, intimate group cohorts, bespoke coaching, and contrast recovery suites.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-lg bg-[#B8F34A] text-[#080A0C] text-xs font-bold uppercase tracking-wider hover:bg-[#cbfb6f] transition-colors"
              >
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#F7F6F1] mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#B8F34A] transition-colors cursor-pointer text-left">
                  Strength Training
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#B8F34A] transition-colors cursor-pointer text-left">
                  Personal Training
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#B8F34A] transition-colors cursor-pointer text-left">
                  Group Athletic MetCon
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#B8F34A] transition-colors cursor-pointer text-left">
                  Yoga & Active Mobility
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#B8F34A] transition-colors cursor-pointer text-left">
                  Nutrition & Biomarkers
                </button>
              </li>
            </ul>
          </div>

          {/* Experience & Studio */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#F7F6F1] mb-4">
              Studio & Ethos
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#B8F34A] transition-colors cursor-pointer text-left">
                  About NovaFit
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-novafit')} className="hover:text-[#B8F34A] transition-colors cursor-pointer text-left">
                  Why NovaFit
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-[#B8F34A] transition-colors cursor-pointer text-left">
                  Membership Tiers
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-[#B8F34A] transition-colors cursor-pointer text-left">
                  Member Stories
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#B8F34A] transition-colors cursor-pointer text-left">
                  Studio FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#F7F6F1] mb-4">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs text-[#A7ADB2] mb-5">
              <p>{STUDIO_DETAILS.address}</p>
              <p>{STUDIO_DETAILS.phone}</p>
              <p className="text-[#B8F34A] font-semibold">{STUDIO_DETAILS.email}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="NovaFit on Instagram"
                className="w-9 h-9 rounded-xl bg-[#101820] border border-[#222f3e] hover:border-[#B8F34A] text-[#F7F6F1] hover:text-[#B8F34A] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="NovaFit on YouTube"
                className="w-9 h-9 rounded-xl bg-[#101820] border border-[#222f3e] hover:border-[#B8F34A] text-[#F7F6F1] hover:text-[#B8F34A] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-[#101820] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#535d67]">
          <p>© {new Date().getFullYear()} {STUDIO_DETAILS.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#A7ADB2] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#A7ADB2] transition-colors cursor-pointer">Terms of Membership</span>
            <span className="hover:text-[#A7ADB2] transition-colors cursor-pointer">Liability Waiver</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
