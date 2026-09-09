import React, { useState } from 'react';
import { STUDIO_DETAILS, FAQS_DATA } from '../data/fitnessData';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ChevronDown, 
  Car, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#080A0C] border-t border-[#101820]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#101820] rounded-full filter blur-[150px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-[#222f3e] text-xs font-bold text-[#B8F34A] uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Studio & Location
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F7F6F1] tracking-tight leading-tight mb-6">
            Visit NovaFit in the <br className="hidden sm:inline" />
            <span className="text-[#B8F34A]">Downtown Design District</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7ADB2] leading-relaxed">
            Conveniently located with dedicated underground parking, luxury rain showers, and full contrast recovery amenities.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Location Card */}
          <div className="p-7 rounded-3xl bg-[#101820] border border-[#222f3e] hover:border-[#B8F34A]/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#080A0C] border border-[#222f3e] text-[#B8F34A] flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#F7F6F1] mb-2">
              Studio Address
            </h3>
            <p className="text-sm text-[#A7ADB2] leading-relaxed mb-4">
              {STUDIO_DETAILS.address}<br />
              {STUDIO_DETAILS.city}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#B8F34A] font-semibold">
              <Car className="w-4 h-4" />
              <span>Complimentary 2-hr valet / garage parking</span>
            </div>
          </div>

          {/* Hours Card */}
          <div className="p-7 rounded-3xl bg-[#101820] border border-[#222f3e] hover:border-[#B8F34A]/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#080A0C] border border-[#222f3e] text-[#B8F34A] flex items-center justify-center mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#F7F6F1] mb-2">
              Operating Hours
            </h3>
            <div className="space-y-1.5 text-sm text-[#A7ADB2] mb-4">
              <div className="flex justify-between">
                <span>Monday – Friday:</span>
                <span className="font-semibold text-[#F7F6F1]">{STUDIO_DETAILS.hours.weekdays}</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-semibold text-[#F7F6F1]">{STUDIO_DETAILS.hours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-semibold text-[#F7F6F1]">{STUDIO_DETAILS.hours.sunday}</span>
              </div>
            </div>
            <p className="text-xs text-[#B8F34A] font-semibold">
              *VIP Members enjoy 24/7 keycard floor access
            </p>
          </div>

          {/* Direct Concierge Card */}
          <div className="p-7 rounded-3xl bg-[#101820] border border-[#222f3e] hover:border-[#B8F34A]/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#080A0C] border border-[#222f3e] text-[#B8F34A] flex items-center justify-center mb-5">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-[#F7F6F1] mb-2">
              Direct Concierge
            </h3>
            <div className="space-y-3 mb-4">
              <a
                href={`tel:${STUDIO_DETAILS.phone}`}
                className="flex items-center gap-2.5 text-sm text-[#F7F6F1] hover:text-[#B8F34A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B8F34A]" />
                <span>{STUDIO_DETAILS.phone}</span>
              </a>
              <a
                href={`mailto:${STUDIO_DETAILS.email}`}
                className="flex items-center gap-2.5 text-sm text-[#F7F6F1] hover:text-[#B8F34A] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B8F34A]" />
                <span>{STUDIO_DETAILS.email}</span>
              </a>
            </div>
            <p className="text-xs text-[#A7ADB2]">
              Average concierge response time: &lt; 15 minutes during studio hours.
            </p>
          </div>
        </div>

        {/* Location Visual & Map Card */}
        <div className="rounded-3xl overflow-hidden border border-[#222f3e] bg-[#101820] mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1400&auto=format&fit=crop"
                alt="NovaFit architectural street entrance"
                className="w-full h-full object-cover filter contrast-[1.1] brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#101820]/40 to-[#101820]" />
              <div className="absolute bottom-4 left-4 p-3 rounded-2xl bg-[#080A0C]/80 backdrop-blur-md border border-white/10 text-xs text-[#F7F6F1]">
                <span className="text-[#B8F34A] font-bold">Studio Flagship:</span> Modern Minimalist Facade
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#B8F34A]">
                  Arrival & Accessibility
                </span>
                <h3 className="font-display font-bold text-2xl text-[#F7F6F1] mt-1 mb-4">
                  Effortless Commute
                </h3>
                <p className="text-sm text-[#A7ADB2] leading-relaxed mb-6">
                  Situated next to the Highline Arts Corridor. Easy access via Metro Red Line (Grand Central Plaza stop, 3 min walk) or by car with dedicated street-level drop-off lanes.
                </p>

                <div className="space-y-2 text-xs text-[#F7F6F1] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]" />
                    <span>Lululemon & Aesop luxury toiletries in executive locker rooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]" />
                    <span>Fresh eucalyptus iced towels & filtered electrolyte station</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]" />
                    <span>Private sound-isolated phone booths for remote workers</span>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#080A0C] border border-[#222f3e] hover:border-[#B8F34A] text-xs font-bold text-[#F7F6F1] hover:text-[#B8F34A] transition-all"
              >
                <span>Open in Google Maps / Apple Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B8F34A] uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F7F6F1]">
              Everything You Need to Know Before Your Visit
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#101820] border border-[#222f3e] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#B8F34A] transition-colors"
                  >
                    <span className="font-display font-bold text-base text-[#F7F6F1]">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-xl bg-[#080A0C] border border-[#222f3e] flex items-center justify-center text-[#B8F34A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[#A7ADB2] leading-relaxed border-t border-[#222f3e]/60 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
