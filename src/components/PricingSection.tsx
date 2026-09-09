import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/fitnessData';
import { Check, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#080A0C] border-t border-[#101820]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#101820] rounded-full filter blur-[140px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-[#222f3e] text-xs font-bold text-[#B8F34A] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Memberships
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F7F6F1] tracking-tight leading-tight mb-6">
            Invest in Your Physical & <br className="hidden sm:inline" />
            <span className="text-[#B8F34A]">Mental Capital</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7ADB2] leading-relaxed mb-8">
            All memberships include certified coaching, mobile performance tracking, rain shower amenities, and zero cancellation fees.
          </p>

          {/* Billing Switch Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-[#101820] border border-[#222f3e]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-[#080A0C] text-[#F7F6F1] shadow-sm border border-white/10'
                  : 'text-[#A7ADB2] hover:text-[#F7F6F1]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                isAnnual
                  ? 'bg-[#B8F34A] text-[#080A0C] shadow-sm'
                  : 'text-[#A7ADB2] hover:text-[#F7F6F1]'
              }`}
            >
              <span>Annual Membership</span>
              <span className={`text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full ${
                isAnnual ? 'bg-[#080A0C] text-[#B8F34A]' : 'bg-[#B8F34A]/20 text-[#B8F34A]'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnualMonthly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl bg-[#101820] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-[#B8F34A] shadow-[0_0_35px_rgba(184,243,74,0.18)] lg:-translate-y-3'
                    : 'border border-[#222f3e] hover:border-[#B8F34A]/40'
                }`}
              >
                {/* Popular Ribbon */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B8F34A] text-[#080A0C] text-xs font-extrabold uppercase tracking-widest shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-2xl text-[#F7F6F1]">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#A7ADB2] min-h-[36px] mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl font-bold text-[#A7ADB2]">$</span>
                    <span className="font-display font-extrabold text-5xl text-[#F7F6F1] tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs font-medium text-[#A7ADB2]">/ month</span>
                  </div>
                  <p className="text-[11px] text-[#B8F34A] font-semibold mb-6">
                    {isAnnual ? 'Billed annually ($' + (price * 12) + '/yr) • Best Value' : 'Billed month-to-month • Pause anytime'}
                  </p>

                  <div className="w-full h-px bg-[#222f3e] mb-6" />

                  {/* Features */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#F7F6F1]">
                      Included Privileges:
                    </p>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <span className="w-4 h-4 rounded-full bg-[#080A0C] border border-[#B8F34A]/40 text-[#B8F34A] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className="text-xs sm:text-sm text-[#A7ADB2] leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#B8F34A] text-[#080A0C] hover:bg-[#c9f96b] shadow-[0_0_25px_rgba(184,243,74,0.3)] hover:scale-[1.02]'
                        : 'bg-[#080A0C] text-[#F7F6F1] hover:text-[#B8F34A] border border-[#222f3e] hover:border-[#B8F34A]/50'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[10px] text-[#A7ADB2] mt-2.5 flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3 text-[#B8F34A]" />
                    Includes 7-day money-back guarantee
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Pass Assurance */}
        <div className="mt-16 p-6 rounded-2xl bg-[#101820]/60 border border-[#222f3e] text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#F7F6F1]">Want to try NovaFit before deciding on a plan?</h4>
            <p className="text-xs text-[#A7ADB2] mt-0.5">Every new visitor is entitled to a complimentary consultation & full facility trial pass.</p>
          </div>
          <button
            onClick={() => onSelectPlan('Complimentary Day Trial')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#080A0C] border border-[#B8F34A] text-[#B8F34A] hover:bg-[#B8F34A] hover:text-[#080A0C] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Claim Free Pass
          </button>
        </div>
      </div>
    </section>
  );
};
