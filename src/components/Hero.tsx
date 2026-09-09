import React from 'react';
import { ArrowRight, Flame, Sparkles, CheckCircle, Trophy } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExplorePrograms }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#080A0C]">
      {/* Cinematic Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Modern athletic strength training at NovaFit Studio"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite] opacity-40 filter brightness-[0.75] contrast-[1.15]"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered dark charcoal & navy gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C] via-[#080A0C]/85 to-[#101820]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0C] via-[#080A0C]/90 to-transparent" />
        {/* Subtle electric lime radial glow on the right */}
        <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#B8F34A]/10 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101820] border border-[#222f3e] text-xs font-semibold text-[#F7F6F1] mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8F34A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8F34A]"></span>
              </span>
              <span className="text-[#B8F34A] font-bold tracking-wider uppercase text-[11px]">
                Modern Fitness & Wellness Studio
              </span>
              <span className="text-[#364453]">•</span>
              <span className="text-[#A7ADB2] text-[11px]">Limited Complimentary Passes</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight text-[#F7F6F1] leading-[1.08] mb-6">
              Transform Your Body, <br className="hidden sm:inline" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F7F6F1] via-[#F7F6F1] to-[#B8F34A]">
                Elevate Your Mind
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[#A7ADB2] max-w-2xl leading-relaxed mb-8 font-normal">
              Join our expert-led classes and personalized programs designed to help you feel stronger, healthier, and more confident — inside and out.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-book-consultation-btn"
                onClick={onOpenConsultation}
                className="group relative px-8 py-4 rounded-xl bg-[#B8F34A] text-[#080A0C] font-extrabold text-base tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(184,243,74,0.3)] hover:shadow-[0_0_40px_rgba(184,243,74,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>BOOK FREE CONSULTATION</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </button>

              <button
                id="hero-explore-programs-btn"
                onClick={onExplorePrograms}
                className="px-7 py-4 rounded-xl bg-[#101820] text-[#F7F6F1] hover:text-[#B8F34A] border border-[#222f3e] hover:border-[#B8F34A]/50 font-bold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#16212b]"
              >
                <span>EXPLORE PROGRAMS</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#101820] w-full max-w-xl text-left">
              <div>
                <div className="flex items-center gap-1.5 font-display font-bold text-xl text-[#F7F6F1]">
                  <span>4.9</span>
                  <span className="text-[#B8F34A] text-sm">★★★★★</span>
                </div>
                <p className="text-xs text-[#A7ADB2] mt-0.5">850+ Verified Athletes</p>
              </div>
              <div>
                <div className="font-display font-bold text-xl text-[#F7F6F1]">
                  $150 <span className="text-xs font-normal text-[#B8F34A]">Free Scan</span>
                </div>
                <p className="text-xs text-[#A7ADB2] mt-0.5">Clinical 3D InBody Audit</p>
              </div>
              <div>
                <div className="font-display font-bold text-xl text-[#F7F6F1]">
                  14 <span className="text-xs font-normal text-[#B8F34A]">Max Cap</span>
                </div>
                <p className="text-xs text-[#A7ADB2] mt-0.5">Intimate Class Ratio</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Fitness Statistic Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden border border-[#222f3e] shadow-2xl bg-[#101820] group">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
                alt="Personal training session at NovaFit Studio"
                className="w-full h-full object-cover object-top filter contrast-[1.1] brightness-[0.9] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C] via-transparent to-black/30" />

              {/* Top pill inside card */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-[#080A0C]/80 backdrop-blur-md text-[11px] font-semibold text-[#F7F6F1] border border-white/10 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#B8F34A]" />
                  Downtown Studio Floor
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#B8F34A] text-[#080A0C] text-[10px] font-extrabold uppercase tracking-wider">
                  Live Session
                </span>
              </div>

              {/* Bottom tag inside photo */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#101820]/90 backdrop-blur-md border border-[#222f3e] flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#B8F34A]">
                    Master Coaching
                  </p>
                  <p className="text-sm font-bold text-[#F7F6F1]">
                    Metabolic & Biomechanical Form
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#080A0C] border border-[#B8F34A]/30 flex items-center justify-center text-[#B8F34A]">
                  <Trophy className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Small Floating Fitness Statistic / Card (User Explicit Request) */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 sm:-bottom-6 z-20 w-72 sm:w-80 p-4 rounded-2xl bg-[#101820]/95 backdrop-blur-xl border border-[#B8F34A]/40 shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-all hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#080A0C] border border-[#B8F34A]/40 flex items-center justify-center text-[#B8F34A]">
                    <Flame className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs text-[#A7ADB2] font-medium">90-Day Member Delta</p>
                    <p className="text-sm font-bold text-[#F7F6F1] font-display">VO2 Max & Lean Mass</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#B8F34A] bg-[#B8F34A]/10 px-2 py-0.5 rounded-full">
                  +18.4%
                </span>
              </div>

              {/* Visual Progress Bars */}
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#A7ADB2]">Core Muscle Density</span>
                    <span className="text-[#F7F6F1] font-semibold">92% Target</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#080A0C] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#B8F34A] to-[#B8F34A] rounded-full w-[92%]" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#A7ADB2] pt-1">
                  <span className="flex items-center gap-1 text-[#F7F6F1]">
                    <CheckCircle className="w-3 h-3 text-[#B8F34A]" /> InBody Biometric Scans
                  </span>
                  <span className="text-[#B8F34A] font-semibold">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Studio Highlights Ribbon */}
      <div className="absolute bottom-0 inset-x-0 bg-[#101820]/90 border-t border-[#222f3e] py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#A7ADB2]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]"></span>
            Eleiko & Atlantis Biomechanics
          </span>
          <span className="text-[#364453]">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]"></span>
            42°F Contrast Cold Plunge & Finnish Sauna
          </span>
          <span className="text-[#364453]">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]"></span>
            InBody 770 Clinical Composition Diagnostics
          </span>
          <span className="text-[#364453]">•</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]"></span>
            Master CSCS-Certified Performance Coaches
          </span>
        </div>
      </div>
    </section>
  );
};
