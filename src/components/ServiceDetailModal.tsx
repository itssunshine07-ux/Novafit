import React from 'react';
import { ServiceItem } from '../types';
import { X, Check, Clock, Users, Flame, Target, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookProgram: (programName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookProgram,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#101820] border border-[#222f3e] rounded-3xl shadow-2xl text-[#F7F6F1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 w-full">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/60 to-black/40" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#080A0C]/80 border border-white/20 text-[#F7F6F1] hover:text-[#B8F34A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-[#B8F34A] text-[#080A0C] text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
              {service.badge}
            </span>
            <h3 className="font-display font-bold text-3xl text-[#F7F6F1]">
              {service.title}
            </h3>
            <p className="text-sm font-semibold text-[#B8F34A]">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-[#A7ADB2] text-base leading-relaxed">
            {service.description}
          </p>

          {/* Spec Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-2xl bg-[#080A0C] border border-[#222f3e]">
              <span className="text-[11px] text-[#A7ADB2] flex items-center gap-1 mb-1">
                <Flame className="w-3.5 h-3.5 text-[#B8F34A]" /> Intensity
              </span>
              <p className="text-xs font-bold text-[#F7F6F1]">{service.intensity}</p>
            </div>
            <div className="p-3 rounded-2xl bg-[#080A0C] border border-[#222f3e]">
              <span className="text-[11px] text-[#A7ADB2] flex items-center gap-1 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#B8F34A]" /> Duration
              </span>
              <p className="text-xs font-bold text-[#F7F6F1]">{service.duration}</p>
            </div>
            <div className="p-3 rounded-2xl bg-[#080A0C] border border-[#222f3e]">
              <span className="text-[11px] text-[#A7ADB2] flex items-center gap-1 mb-1">
                <Users className="w-3.5 h-3.5 text-[#B8F34A]" /> Cohort Size
              </span>
              <p className="text-xs font-bold text-[#F7F6F1]">{service.capacity}</p>
            </div>
            <div className="p-3 rounded-2xl bg-[#080A0C] border border-[#222f3e]">
              <span className="text-[11px] text-[#A7ADB2] flex items-center gap-1 mb-1">
                <Target className="w-3.5 h-3.5 text-[#B8F34A]" /> Focus
              </span>
              <p className="text-xs font-bold text-[#B8F34A]">Longevity</p>
            </div>
          </div>

          {/* Who it is for */}
          <div className="p-4 rounded-2xl bg-[#080A0C] border border-[#222f3e]">
            <h4 className="text-xs uppercase font-bold text-[#B8F34A] tracking-wider mb-1">
              Ideal Candidate
            </h4>
            <p className="text-sm text-[#F7F6F1]">{service.targetAudience}</p>
          </div>

          {/* Program Deliverables */}
          <div>
            <h4 className="font-display font-bold text-lg text-[#F7F6F1] mb-3">
              Included In This Discipline
            </h4>
            <div className="space-y-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B8F34A]/10 text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5 border border-[#B8F34A]/30">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-sm text-[#A7ADB2]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Bar */}
          <div className="pt-4 border-t border-[#222f3e] flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onBookProgram(service.title);
                onClose();
              }}
              className="flex-1 py-3.5 px-6 rounded-xl bg-[#B8F34A] text-[#080A0C] font-extrabold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#d4fba0] shadow-[0_0_20px_rgba(184,243,74,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Free Consultation For {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#A7ADB2] hover:text-[#F7F6F1] text-sm font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
