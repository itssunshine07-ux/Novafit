import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data/fitnessData';
import { ChevronLeft, ChevronRight, Star, Quote, Award } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenConsultation: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenConsultation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Strength' | 'Recomposition' | 'Mobility & Wellness'>('All');
  const [isPaused, setIsPaused] = useState(false);

  const filteredTestimonials = selectedCategory === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.category === selectedCategory);

  // Auto-play slider
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, filteredTestimonials.length]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const current = filteredTestimonials[currentIndex] || TESTIMONIALS_DATA[0];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#080A0C] border-t border-[#101820] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#101820] rounded-full filter blur-[140px] pointer-events-none opacity-50" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#B8F34A]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-[#222f3e] text-xs font-bold text-[#B8F34A] uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5 fill-[#B8F34A]" />
              Member Transformations
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F7F6F1] tracking-tight leading-tight">
              Real Humans. Real Metrics. <br />
              <span className="text-[#B8F34A]">No Fluff.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Strength', 'Recomposition', 'Mobility & Wellness'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#B8F34A] text-[#080A0C] shadow-[0_0_15px_rgba(184,243,74,0.3)]'
                    : 'bg-[#101820] text-[#A7ADB2] hover:text-[#F7F6F1] border border-[#222f3e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div
          className="relative bg-[#101820] rounded-3xl border border-[#222f3e] p-8 sm:p-12 lg:p-14 shadow-2xl transition-all duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Avatar & Achievement Badges */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-5">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-[#B8F34A] shadow-[0_0_25px_rgba(184,243,74,0.25)]">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-[#080A0C] border border-[#B8F34A] text-[#B8F34A]">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#F7F6F1]">
                {current.name}
              </h3>
              <p className="text-xs text-[#A7ADB2] mb-3">{current.role}</p>

              {/* Verified Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080A0C] border border-[#222f3e] text-[11px] text-[#A7ADB2] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]"></span>
                <span>{current.timeframe}</span>
              </div>

              <div className="text-xs font-semibold text-[#B8F34A] bg-[#B8F34A]/10 px-3 py-1 rounded-lg border border-[#B8F34A]/20">
                {current.program}
              </div>
            </div>

            {/* Right: Quote, Metric Highlight & Controls */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-[#B8F34A]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B8F34A]" />
                  ))}
                  <span className="text-xs text-[#A7ADB2] ml-2 font-medium">5.0 Verified Member Review</span>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-12 h-12 text-[#222f3e] absolute -top-4 -left-3 pointer-events-none opacity-50" />
                  <p className="font-display font-medium text-lg sm:text-2xl text-[#F7F6F1] leading-relaxed relative z-10 italic">
                    "{current.quote}"
                  </p>
                </div>
              </div>

              {/* Key Metric Achievement Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#080A0C] border border-[#B8F34A]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#A7ADB2]">
                    Documented InBody / Performance Delta
                  </span>
                  <p className="text-base sm:text-lg font-extrabold text-[#B8F34A] font-display">
                    {current.metric}
                  </p>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="shrink-0 px-4 py-2 rounded-xl bg-[#101820] hover:bg-[#B8F34A] text-[#F7F6F1] hover:text-[#080A0C] text-xs font-bold transition-all border border-[#222f3e] cursor-pointer"
                >
                  Start Your Journey
                </button>
              </div>

              {/* Slider Controls & Indicators */}
              <div className="flex items-center justify-between pt-4 border-t border-[#222f3e]">
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {filteredTestimonials.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentIndex(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === dotIdx
                          ? 'w-8 bg-[#B8F34A]'
                          : 'w-2 bg-[#222f3e] hover:bg-[#A7ADB2]'
                      }`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-xl bg-[#080A0C] border border-[#222f3e] hover:border-[#B8F34A] text-[#F7F6F1] hover:text-[#B8F34A] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-xl bg-[#080A0C] border border-[#222f3e] hover:border-[#B8F34A] text-[#F7F6F1] hover:text-[#B8F34A] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
