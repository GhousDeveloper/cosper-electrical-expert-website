import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface WhyChooseUsProps {
  onBookNow: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBookNow }) => {
  const checklist = [
    'Certified & Experienced Electricians',
    'Upfront Pricing, No Hidden Costs',
    'Fast Response & On-Time Service',
    '100% Satisfaction Guarantee',
  ];

  return (
    <section id="why-us" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Why Choose Us Content */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Tag */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
              <span className="text-xs sm:text-[13px] font-bold text-[#0F172A] uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>

            {/* Title with yellow "Quickly" */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#0F172A] leading-[1.15]">
              Recover Your Electrical <br />
              Issues <span className="text-[#FBBF24]">Quickly</span>
            </h2>

            {/* Paragraph */}
            <p className="mt-4 sm:mt-5 text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg">
              Our expert electricians are available 24/7 to ensure your home and
              business stay safe and fully powered.
            </p>

            {/* 4 Feature Checklist items */}
            <div className="mt-6 sm:mt-7 space-y-3.5">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {/* Yellow round checkmark circle */}
                  <div className="w-5 h-5 rounded-full bg-[#FBBF24] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 text-[#0F172A] stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button: Book Now */}
            <div className="mt-8 sm:mt-9">
              <button
                type="button"
                onClick={onBookNow}
                className="group bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0F172A] font-extrabold text-sm sm:text-[15px] px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2.5 cursor-pointer active:scale-95"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Center Subtle Dot Matrix Accent */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-8 w-24 h-40 pointer-events-none opacity-20">
            <svg width="80" height="150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dot-grid-whyus" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#94A3B8" />
              </pattern>
              <rect width="80" height="150" fill="url(#dot-grid-whyus)" />
            </svg>
          </div>

          {/* Right Column: Electrician with Circle & Handwritten Note */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Asset from reference containing circular backdrop, electrician, script & badge */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/assets/images/why_us_electrician.png"
                  alt="Cospert certified electrician ready for 24/7 service"
                  className="w-full h-auto object-cover select-none drop-shadow-xl"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
