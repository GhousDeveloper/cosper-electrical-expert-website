import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onLearnMore: (type: 'services' | 'about' | 'emergency') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onLearnMore,
}) => {
  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Decorative Dot Grid Pattern on the far right matching reference */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-48 h-64 pointer-events-none opacity-20 select-none hidden lg:block">
        <svg width="180" height="240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-grid-services" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" />
          </pattern>
          <rect width="180" height="240" fill="url(#dot-grid-services)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          {/* Centered Yellow Tag with lines */}
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
            <span className="text-xs sm:text-[13px] font-bold text-[#F59E0B] uppercase tracking-widest">
              WHAT WE DO
            </span>
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0F172A] leading-tight">
            Electrical Services
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-[15px] leading-relaxed max-w-lg mx-auto">
            We provide reliable electrical services with a focus on safety,
            quality, and customer satisfaction.
          </p>
        </div>

        {/* 3 Service Cards Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {/* Card 1: Services */}
          <div className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Top Row: Icon + Title side-by-side matching reference */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-13 h-13 rounded-full bg-[#FEF3C7] border border-amber-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  {/* Lightning outline SVG */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A]">
                  Services
                </h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Complete electrical installation, maintenance, and repair services
                for residential and commercial properties.
              </p>
            </div>

            {/* Learn More link with round yellow arrow button */}
            <button
              type="button"
              onClick={() => onLearnMore('services')}
              className="inline-flex items-center gap-2.5 text-sm font-bold text-[#0F172A] hover:text-amber-600 transition-colors cursor-pointer self-start group/btn"
            >
              <span>Learn More</span>
              <span className="w-7 h-7 rounded-full bg-[#FBBF24] group-hover/btn:bg-[#F59E0B] text-slate-900 flex items-center justify-center transition-all shadow-xs">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </span>
            </button>
          </div>

          {/* Card 2: About Us */}
          <div id="about" className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Top Row: Icon + Title side-by-side matching reference */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-13 h-13 rounded-full bg-[#FEF3C7] border border-amber-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  {/* User outline SVG */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A]">
                  About Us
                </h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Cospert is built on trust, quality workmanship, and a commitment to
                delivering the best electrical solutions.
              </p>
            </div>

            {/* Learn More link with round yellow arrow button */}
            <button
              type="button"
              onClick={() => onLearnMore('about')}
              className="inline-flex items-center gap-2.5 text-sm font-bold text-[#0F172A] hover:text-amber-600 transition-colors cursor-pointer self-start group/btn"
            >
              <span>Learn More</span>
              <span className="w-7 h-7 rounded-full bg-[#FBBF24] group-hover/btn:bg-[#F59E0B] text-slate-900 flex items-center justify-center transition-all shadow-xs">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </span>
            </button>
          </div>

          {/* Card 3: Emergency */}
          <div className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Top Row: Icon + Title side-by-side matching reference */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-13 h-13 rounded-full bg-[#FEF3C7] border border-amber-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  {/* Siren / Emergency Beacon with 3 light rays matching reference */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M12 2v2" />
                    <path d="M4.93 4.93l1.41 1.41" />
                    <path d="M19.07 4.93l-1.41 1.41" />
                    <path d="M8 8a4 4 0 0 1 8 0c0 3 1.5 5 1.5 5H6.5S8 11 8 8z" />
                    <path d="M9 17h6" />
                    <path d="M10 20h4" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A]">
                  Emergency
                </h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Need urgent help? Our 24/7 emergency electricians are ready to solve
                your problems anytime, anywhere.
              </p>
            </div>

            {/* Learn More link with round yellow arrow button */}
            <button
              type="button"
              onClick={() => onLearnMore('emergency')}
              className="inline-flex items-center gap-2.5 text-sm font-bold text-[#0F172A] hover:text-amber-600 transition-colors cursor-pointer self-start group/btn"
            >
              <span>Learn More</span>
              <span className="w-7 h-7 rounded-full bg-[#FBBF24] group-hover/btn:bg-[#F59E0B] text-slate-900 flex items-center justify-center transition-all shadow-xs">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
