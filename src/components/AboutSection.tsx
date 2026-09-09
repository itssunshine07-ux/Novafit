import React from 'react';
import { ShieldCheck, HeartPulse, Zap, Wind, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const pillars = [
    {
      icon: <Zap className="w-6 h-6 text-[#B8F34A]" />,
      title: 'Precision Biomechanics',
      description: 'We don’t believe in mindless burnout. Every movement is architected around joint preservation, progressive overload, and functional strength.'
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-[#B8F34A]" />,
      title: 'Integrated Contrast Recovery',
      description: 'Athletic adaptation occurs in recovery. Our contrast lounge features 195°F cedar saunas and 42°F filtered cold plunges to reset systemic inflammation.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#B8F34A]" />,
      title: 'Clinical Diagnostics & Fueling',
      description: 'Track real cellular and skeletal changes with medical-grade InBody 770 scans and customized nutritional periodization for sustainable vitality.'
    },
    {
      icon: <Wind className="w-6 h-6 text-[#B8F34A]" />,
      title: 'Intimate Coaching Culture',
      description: 'No overcrowded floors or chaotic waiting lines. Group classes are strictly capped at 14 athletes with personal attention on every repetition.'
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#080A0C] overflow-hidden border-t border-[#101820]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#101820] rounded-full filter blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#B8F34A]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-[#222f3e] text-xs font-bold text-[#B8F34A] uppercase tracking-wider mb-4">
            About NovaFit Studio
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F7F6F1] tracking-tight leading-tight mb-6">
            Not a generic gym floor. <br />
            <span className="text-[#B8F34A]">A high-performance sanctuary.</span>
          </h2>
          <p className="text-lg text-[#A7ADB2] leading-relaxed">
            Founded with a singular conviction: genuine physical transformation demands the fusion of elite athletic science, restorative recovery, and bespoke personal coaching. We designed NovaFit to be the most inspiring space in your day.
          </p>
        </div>

        {/* Dual Grid: Visual Showcase & Four Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Images / Studio Environment */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#222f3e] bg-[#101820] aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop"
                  alt="NovaFit architectural gym interior with precision barbells"
                  className="w-full h-full object-cover filter contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-[#F7F6F1]">
                  Eleiko Biomechanics Floor
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#101820] border border-[#222f3e]">
                <div className="font-display font-bold text-2xl text-[#B8F34A] mb-1">100%</div>
                <p className="text-xs text-[#A7ADB2] leading-relaxed">
                  Degree-certified strength coaches & accredited nutrition specialists.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8 sm:pt-10">
              <div className="p-5 rounded-2xl bg-[#101820] border border-[#B8F34A]/30 shadow-[0_0_20px_rgba(184,243,74,0.1)]">
                <div className="font-display font-bold text-2xl text-[#F7F6F1] mb-1">42°F & 195°F</div>
                <p className="text-xs text-[#A7ADB2] leading-relaxed">
                  Contrast therapy suites to accelerate systemic recovery and mental clarity.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-[#222f3e] bg-[#101820] aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop"
                  alt="NovaFit wellness and contrast recovery lounge"
                  className="w-full h-full object-cover filter contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-[#F7F6F1]">
                  Contrast Recovery Lounge
                </div>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 space-y-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#101820]/70 border border-[#222f3e] hover:border-[#B8F34A]/40 transition-all duration-300 hover:bg-[#101820] group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#080A0C] border border-[#222f3e] group-hover:border-[#B8F34A]/40 flex items-center justify-center shrink-0 transition-colors">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#F7F6F1] group-hover:text-[#B8F34A] transition-colors mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#A7ADB2] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#B8F34A] hover:text-[#d3f97e] transition-colors group cursor-pointer"
              >
                <span>Tour the Studio During Your Free Consultation</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
