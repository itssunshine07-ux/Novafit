import React, { useState } from 'react';
import { ConsultationFormData } from '../types';
import { X, Send, CheckCircle2, User, Mail, Phone, Calendar, Clock, Dumbbell, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram = 'Personal Training',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    preferredProgram: preselectedProgram || 'Personal Training',
    preferredDate: '',
    preferredTimeSlot: 'Morning (6:00 AM – 10:00 AM)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (preselectedProgram) {
      setFormData((prev) => ({ ...prev, preferredProgram: preselectedProgram }));
    }
  }, [preselectedProgram]);

  if (!isOpen) return null;

  const programs = [
    'Strength Training',
    'Personal Training',
    'Group Classes',
    'Yoga & Mobility',
    'Nutrition & Wellness',
    'General Studio Assessment',
  ];

  const timeSlots = [
    'Morning (6:00 AM – 10:00 AM)',
    'Midday (11:00 AM – 2:00 PM)',
    'Evening (4:00 PM – 8:00 PM)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#B8F34A', '#F7F6F1', '#101820'],
        });
      } catch {
        // Safe fallback
      }
    }, 800);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#101820] border border-[#222f3e] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#F7F6F1]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#080A0C] border border-[#222f3e] text-[#A7ADB2] hover:text-[#B8F34A] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#B8F34A] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              Free Consultation & InBody Scan ($150 Value)
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F7F6F1] mb-2">
              Reserve Your Private Pass
            </h3>
            <p className="text-xs text-[#A7ADB2] mb-6">
              Zero pressure, zero high-sales tactics. Meet an elite coach and receive a customized 30-day roadmap.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#A7ADB2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] placeholder-[#535d67] text-xs sm:text-sm focus:outline-none focus:border-[#B8F34A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#A7ADB2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] placeholder-[#535d67] text-xs sm:text-sm focus:outline-none focus:border-[#B8F34A]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#A7ADB2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="(555) 842-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] placeholder-[#535d67] text-xs sm:text-sm focus:outline-none focus:border-[#B8F34A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1">
                    Discipline / Program
                  </label>
                  <div className="relative">
                    <Dumbbell className="w-4 h-4 text-[#A7ADB2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.preferredProgram}
                      onChange={(e) => setFormData({ ...formData, preferredProgram: e.target.value })}
                      className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] text-xs sm:text-sm focus:outline-none focus:border-[#B8F34A] appearance-none"
                    >
                      {programs.map((p) => (
                        <option key={p} value={p} className="bg-[#101820]">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#A7ADB2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      required
                      min={minDateString}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] text-xs sm:text-sm focus:outline-none focus:border-[#B8F34A] [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1">
                    Time Window *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#A7ADB2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] text-xs sm:text-sm focus:outline-none focus:border-[#B8F34A] appearance-none"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts} className="bg-[#101820]">
                          {ts}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1">
                  Message / Primary Goal (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you want to achieve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] placeholder-[#535d67] text-xs sm:text-sm focus:outline-none focus:border-[#B8F34A] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#B8F34A] text-[#080A0C] font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(184,243,74,0.3)] hover:bg-[#cbfb6f] flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {isSubmitting ? (
                  <span>Securing Pass...</span>
                ) : (
                  <>
                    <span>Book My Free Consultation</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-[#B8F34A]/10 border-2 border-[#B8F34A] text-[#B8F34A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#F7F6F1]">
              Pass Reserved Successfully!
            </h3>
            <p className="text-xs text-[#A7ADB2] max-w-sm mx-auto leading-relaxed">
              We have reserved your 1-on-1 consultation for <strong className="text-[#F7F6F1]">{formData.preferredProgram}</strong>. Check your email for full details and studio directions.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-xl bg-[#B8F34A] text-[#080A0C] text-xs font-bold uppercase tracking-wider hover:bg-[#cbfb6f] cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
