import React from 'react';
import { ServiceItem } from '../types';
import { Check, Flame, Clock, Users, ArrowUpRight, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
  onBookService,
}) => {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#080A0C] border-t border-[#101820]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#101820] rounded-full filter blur-[140px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-[#222f3e] text-xs font-bold text-[#B8F34A] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Programs & Disciplines
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F7F6F1] tracking-tight leading-tight">
              Crafted for Real Performance. <br />
              <span className="text-[#B8F34A]">Engineered for Longevity.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A7ADB2] max-w-md leading-relaxed">
            Whether your focus is raw barbell power, bespoke 1-on-1 coaching, or athletic restoration, our 5 specialized pillars deliver measurable physiological results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            // Give the 1st or 2nd item extra visual prominence if desired, or all 5 clean layout
            const isFeatured = service.id === 'personal-training';

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl overflow-hidden bg-[#101820] border transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'border-[#B8F34A]/50 shadow-[0_0_30px_rgba(184,243,74,0.12)]'
                    : 'border-[#222f3e] hover:border-[#B8F34A]/40 hover:shadow-2xl'
                }`}
              >
                {/* Image Section with Overlay */}
                <div className="relative h-64 w-full overflow-hidden bg-[#080A0C]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter contrast-[1.1] brightness-90 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#080A0C]/80 backdrop-blur-md text-[11px] font-bold text-[#F7F6F1] border border-white/10 uppercase tracking-wider">
                      {service.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#101820]/80 backdrop-blur-md text-[#B8F34A] text-xs font-semibold flex items-center gap-1 border border-[#B8F34A]/20">
                      <Flame className="w-3 h-3" />
                      {service.intensity}
                    </span>
                  </div>

                  {/* Quick specs pill */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#A7ADB2] bg-[#080A0C]/75 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/5">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B8F34A]" />
                      {service.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#B8F34A]" />
                      {service.capacity}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#F7F6F1] group-hover:text-[#B8F34A] transition-colors mb-1.5 flex items-center justify-between">
                      <span>{service.title}</span>
                      <button
                        onClick={() => onSelectService(service)}
                        className="text-[#A7ADB2] hover:text-[#B8F34A] p-1 rounded-lg transition-colors cursor-pointer"
                        title="View Full Details"
                      >
                        <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </h3>
                    <p className="text-xs font-semibold text-[#B8F34A] mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-[#A7ADB2] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 mb-6 text-xs text-[#F7F6F1]">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-[#080A0C] border border-[#B8F34A]/40 text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className="text-[#A7ADB2]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#222f3e] flex items-center gap-3">
                    <button
                      onClick={() => onBookService(service.title)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#B8F34A] text-[#080A0C] font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#c9f96b] shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Select For Free Trial</span>
                    </button>
                    <button
                      onClick={() => onSelectService(service)}
                      className="py-2.5 px-3 rounded-xl bg-[#080A0C] text-[#F7F6F1] hover:text-[#B8F34A] border border-[#222f3e] text-xs font-medium transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
