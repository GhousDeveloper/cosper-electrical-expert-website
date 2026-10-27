import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface FinalCtaProps {
  onGetQuote: () => void;
  onBookService: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onGetQuote,
  onBookService,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#FFB800] via-[#F59E0B] to-[#D97706] relative overflow-hidden">
      {/* Decorative Subtle Background Lightning Outline */}
      <div className="absolute right-0 top-0 w-1/3 h-full pointer-events-none opacity-20 hidden md:block">
        <svg viewBox="0 0 400 500" fill="none" className="w-full h-full">
          <path
            d="M200 10L100 220H190L140 480L310 180H210L240 10H200Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Trust Marker */}
        <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-xs px-4 py-1 rounded-full text-xs font-bold text-[#0F172A] mb-5 border border-white/40">
          <ShieldCheck className="w-4 h-4 text-[#0F172A]" />
          <span>Licensed &bull; Insured &bull; 100% Code Compliant</span>
        </div>

        {/* Headline matching user prompt */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1320] tracking-tight leading-[1.1] mb-4">
          Need a Reliable Electrician?
        </h2>

        {/* Supporting text matching user prompt */}
        <p className="text-[#2E200C] text-sm sm:text-base font-semibold max-w-xl mx-auto leading-relaxed mb-8">
          Professional electrical services when you need them most.
        </p>

        {/* 2 Buttons matching user prompt */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Get a Quote */}
          <button
            type="button"
            onClick={onGetQuote}
            className="group bg-[#0B1320] hover:bg-[#1E293B] text-white font-black text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center gap-2.5 cursor-pointer active:scale-95"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Book a Service */}
          <button
            type="button"
            onClick={onBookService}
            className="group bg-white hover:bg-slate-50 text-[#0F172A] font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Zap className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>Book a Service &rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};
