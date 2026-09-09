import React, { useState } from 'react';
import { ConsultationFormData } from '../types';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  Dumbbell, 
  Send,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationSectionProps {
  preselectedProgram?: string;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
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
  const [submittedData, setSubmittedData] = useState<ConsultationFormData | null>(null);

  // Update program if changed from props
  React.useEffect(() => {
    if (preselectedProgram) {
      setFormData((prev) => ({ ...prev, preferredProgram: preselectedProgram }));
    }
  }, [preselectedProgram]);

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

    // Simulate high-speed verification & booking
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B8F34A', '#F7F6F1', '#101820'],
        });
      } catch {
        // Fallback gracefully if confetti fails
      }
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredProgram: 'Personal Training',
      preferredDate: '',
      preferredTimeSlot: 'Morning (6:00 AM – 10:00 AM)',
      message: '',
    });
  };

  // Get tomorrow's date formatted as YYYY-MM-DD for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  return (
    <section id="consultation" className="relative py-24 sm:py-32 bg-[#080A0C] border-t border-[#101820] overflow-hidden">
      {/* Background Ambience and Cinematic Imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2000&auto=format&fit=crop"
          alt="Modern NovaFit gym interior"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.2]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C] via-[#080A0C]/90 to-[#101820]/90" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#B8F34A]/10 rounded-full filter blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Value Proposition & Perks */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-[#222f3e] text-xs font-bold text-[#B8F34A] uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Zero Cost • 100% Actionable
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F7F6F1] tracking-tight leading-tight mb-4">
                Claim Your Complimentary <br />
                <span className="text-[#B8F34A]">Private Consultation</span>
              </h2>
              <p className="text-base text-[#A7ADB2] leading-relaxed">
                Take the first step towards radical physical transformation. Meet with a Senior Coach to analyze your movement, body composition, and goals — no sales pressure, ever.
              </p>
            </div>

            {/* Included in consultation breakdown */}
            <div className="p-6 rounded-3xl bg-[#101820]/90 border border-[#222f3e] backdrop-blur-md space-y-4">
              <h3 className="font-display font-bold text-lg text-[#F7F6F1] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B8F34A]" />
                What’s Included ($150 Value, Free Today):
              </h3>

              <ul className="space-y-3.5 text-sm text-[#A7ADB2]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-[#B8F34A]/50 text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#F7F6F1]">45-Minute 1-on-1 Performance Audit:</strong> In-depth evaluation of your athletic history, past injuries, and vision.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-[#B8F34A]/50 text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#F7F6F1]">InBody 770 Clinical Body Scan:</strong> Precise segmental muscle mass, visceral fat, and metabolic rate analysis.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-[#B8F34A]/50 text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#F7F6F1]">Custom 30-Day Training Roadmap:</strong> A personalized blueprint you can take with you immediately.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#080A0C] border border-[#B8F34A]/50 text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#F7F6F1]">Complimentary Recovery Pass:</strong> Test our contrast cold plunge & cedar sauna following your visit.
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Studio Hotline */}
            <div className="p-4 rounded-2xl bg-[#101820]/60 border border-[#222f3e] flex items-center justify-between text-xs text-[#A7ADB2]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B8F34A]" />
                Prefer to book by phone?
              </span>
              <a href="tel:+15558426682" className="text-[#F7F6F1] font-bold hover:text-[#B8F34A] transition-colors">
                +1 (555) 842-6682
              </a>
            </div>
          </div>

          {/* Right Column: Polished Consultation Form or Success View */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#101820] border border-[#222f3e] p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#222f3e] pb-4 mb-2">
                    <h3 className="font-display font-bold text-2xl text-[#F7F6F1]">
                      Schedule Your Session
                    </h3>
                    <p className="text-xs text-[#A7ADB2] mt-1">
                      Choose your preferred discipline, date and time. Instant email confirmation will be sent.
                    </p>
                  </div>

                  {/* Name & Email in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#A7ADB2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="Marcus Vance"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] placeholder-[#535d67] text-sm focus:outline-none focus:border-[#B8F34A] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#A7ADB2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          required
                          placeholder="marcus@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] placeholder-[#535d67] text-sm focus:outline-none focus:border-[#B8F34A] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Preferred Program */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#A7ADB2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] placeholder-[#535d67] text-sm focus:outline-none focus:border-[#B8F34A] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1.5">
                        Preferred Program *
                      </label>
                      <div className="relative">
                        <Dumbbell className="w-4 h-4 text-[#A7ADB2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.preferredProgram}
                          onChange={(e) => setFormData({ ...formData, preferredProgram: e.target.value })}
                          className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] text-sm focus:outline-none focus:border-[#B8F34A] transition-colors appearance-none cursor-pointer"
                        >
                          {programs.map((p) => (
                            <option key={p} value={p} className="bg-[#101820] text-[#F7F6F1]">
                              {p}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#A7ADB2]">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#A7ADB2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="date"
                          required
                          min={minDateString}
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] text-sm focus:outline-none focus:border-[#B8F34A] transition-colors [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1.5">
                        Preferred Time Window *
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-[#A7ADB2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.preferredTimeSlot}
                          onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                          className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] text-sm focus:outline-none focus:border-[#B8F34A] transition-colors appearance-none cursor-pointer"
                        >
                          {timeSlots.map((ts) => (
                            <option key={ts} value={ts} className="bg-[#101820] text-[#F7F6F1]">
                              {ts}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#A7ADB2]">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fitness Goals / Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#A7ADB2] mb-1.5">
                      Tell Us About Your Fitness Goals or Focus (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Build strength, prepare for a marathon, recover from back pain, or drop 10 lbs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-[#080A0C] border border-[#222f3e] text-[#F7F6F1] placeholder-[#535d67] text-sm focus:outline-none focus:border-[#B8F34A] transition-colors resize-none"
                    />
                  </div>

                  {/* Submission CTA (Exact CTA mandated: "Book My Free Consultation") */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#B8F34A] text-[#080A0C] font-extrabold text-base tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(184,243,74,0.3)] hover:shadow-[0_0_40px_rgba(184,243,74,0.5)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#080A0C] border-t-transparent rounded-full animate-spin" />
                          <span>Securing Your Pass...</span>
                        </>
                      ) : (
                        <>
                          <span>Book My Free Consultation</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-[#A7ADB2] mt-3">
                      🔒 No credit card required. Zero sales pressure. Free cancellation or rescheduling anytime.
                    </p>
                  </div>
                </form>
              ) : (
                /* Success Message Screen */
                <div className="py-8 px-2 text-center animate-fadeIn space-y-6">
                  <div className="w-16 h-16 rounded-3xl bg-[#B8F34A]/10 border-2 border-[#B8F34A] text-[#B8F34A] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(184,243,74,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#B8F34A] text-[#080A0C] text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                      Booking Confirmed
                    </span>
                    <h3 className="font-display font-extrabold text-3xl text-[#F7F6F1] mt-1">
                      Welcome to NovaFit, {submittedData?.name.split(' ')[0]}!
                    </h3>
                    <p className="text-sm text-[#A7ADB2] max-w-md mx-auto mt-2 leading-relaxed">
                      Your complimentary consultation pass has been reserved. A confirmation email and calendar invitation have been dispatched to <strong className="text-[#F7F6F1]">{submittedData?.email}</strong>.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-5 rounded-2xl bg-[#080A0C] border border-[#222f3e] max-w-md mx-auto text-left space-y-3">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-[#222f3e]">
                      <span className="text-[#A7ADB2]">Reserved Program:</span>
                      <span className="font-bold text-[#B8F34A]">{submittedData?.preferredProgram}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-[#222f3e]">
                      <span className="text-[#A7ADB2]">Scheduled Date:</span>
                      <span className="font-bold text-[#F7F6F1]">
                        {submittedData?.preferredDate || 'Tomorrow'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-[#222f3e]">
                      <span className="text-[#A7ADB2]">Time Window:</span>
                      <span className="font-bold text-[#F7F6F1]">{submittedData?.preferredTimeSlot}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#A7ADB2]">Studio Location:</span>
                      <span className="font-bold text-[#F7F6F1]">450 Athletic Way, Suite 100</span>
                    </div>
                  </div>

                  {/* Next Step Instructions */}
                  <div className="max-w-md mx-auto p-4 rounded-xl bg-[#101820] border border-[#B8F34A]/30 text-xs text-[#A7ADB2] text-left">
                    <p className="font-semibold text-[#F7F6F1] mb-1 flex items-center gap-1.5">
                      <CalendarCheck className="w-4 h-4 text-[#B8F34A]" />
                      Preparation for Your Visit:
                    </p>
                    <p>Wear comfortable athletic attire. For the most accurate InBody 770 composition scan, avoid heavy meals 2 hours prior and arrive 10 minutes early.</p>
                  </div>

                  {/* Reset or Book for partner */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-[#101820] hover:bg-[#080A0C] text-[#F7F6F1] text-xs font-bold border border-[#222f3e] transition-colors cursor-pointer"
                    >
                      Book Another Pass / Modify
                    </button>
                    <a
                      href={`tel:+15558426682`}
                      className="px-6 py-2.5 rounded-xl bg-[#B8F34A] text-[#080A0C] text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Call Studio Concierge
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
