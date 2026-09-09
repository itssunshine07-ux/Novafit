import React, { useEffect, useRef, useState } from 'react';
import { STATS_DATA } from '../data/fitnessData';
import { Check, X, ShieldAlert, Trophy, Flame } from 'lucide-react';

interface WhyNovaFitProps {
  onOpenConsultation: () => void;
}

export const WhyNovaFit: React.FC<WhyNovaFitProps> = ({ onOpenConsultation }) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-novafit"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#080A0C] border-t border-[#101820] overflow-hidden"
    >
      {/* Background Lighting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#101820] rounded-full filter blur-[160px] pointer-events-none opacity-60" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#B8F34A]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-[#222f3e] text-xs font-bold text-[#B8F34A] uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            Proven Metrics & Standards
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F7F6F1] tracking-tight leading-tight mb-6">
            Why High-Performers Choose <br className="hidden sm:inline" />
            <span className="text-[#B8F34A]">NovaFit Studio</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7ADB2] leading-relaxed">
            We replaced arbitrary workout routines with biomechanics, clinical body diagnostics, and contrast recovery. The data speaks for itself.
          </p>
        </div>

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {STATS_DATA.map((stat, idx) => (
            <StatCard key={idx} stat={stat} startAnimation={inView} delay={idx * 150} />
          ))}
        </div>

        {/* Side-by-side Comparative Architecture: Generic Gym vs NovaFit */}
        <div className="bg-[#101820] rounded-3xl border border-[#222f3e] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#B8F34A]">
              The Standard of Excellence
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F7F6F1] mt-1">
              Traditional Gyms vs. The NovaFit Sanctuary
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#222f3e]">
            {/* The Old Way */}
            <div className="space-y-6 pt-6 md:pt-0 md:pr-8">
              <div className="flex items-center gap-2 text-sm font-bold text-[#A7ADB2] uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-rose-500" />
                Generic Big-Box Gyms
              </div>

              <ul className="space-y-4 text-sm text-[#A7ADB2]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>Overcrowded floors, fighting for equipment & long wait times</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>Generic machine rows without biomechanical instruction</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>Zero recovery amenities beyond basic showers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>Left to figure it out alone with high risk of burnout or injury</span>
                </li>
              </ul>
            </div>

            {/* The NovaFit Way */}
            <div className="space-y-6 pt-6 md:pt-0 md:pl-8">
              <div className="flex items-center gap-2 text-sm font-extrabold text-[#B8F34A] uppercase tracking-wider">
                <Flame className="w-4 h-4 text-[#B8F34A]" />
                The NovaFit Experience
              </div>

              <ul className="space-y-4 text-sm text-[#F7F6F1]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-[#B8F34A] text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(184,243,74,0.3)]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Strictly capped floor capacities & max 14 athletes per group class</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-[#B8F34A] text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(184,243,74,0.3)]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Eleiko & custom Atlantis equipment calibrated to natural joint angles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-[#B8F34A] text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(184,243,74,0.3)]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>42°F cold plunge, 195°F cedar sauna & Normatec compression suites</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-[#B8F34A] text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(184,243,74,0.3)]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Continuous 3D body composition tracking & personal coach accountability</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[#222f3e] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#A7ADB2]">
              Experience the difference firsthand with your complimentary consultation pass.
            </p>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B8F34A] text-[#080A0C] font-extrabold text-xs uppercase tracking-wider transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(184,243,74,0.25)]"
            >
              Book Your Experience Pass
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
    description: string;
  };
  startAnimation: boolean;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, startAnimation, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const end = stat.value;
    const duration = 1800; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
    }, delay);

    return () => clearTimeout(timer);
  }, [startAnimation, stat.value, delay]);

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-[#101820] border border-[#222f3e] hover:border-[#B8F34A]/50 transition-all duration-300 group hover:-translate-y-1">
      <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#B8F34A] tracking-tight mb-2">
        {count.toLocaleString()}
        <span className="text-2xl sm:text-3xl text-[#F7F6F1] font-bold">{stat.suffix}</span>
      </div>
      <h4 className="text-base font-bold text-[#F7F6F1] mb-1.5 font-display">
        {stat.label}
      </h4>
      <p className="text-xs text-[#A7ADB2] leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
};
