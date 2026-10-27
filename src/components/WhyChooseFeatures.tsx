import React from 'react';
import { Award, ShieldAlert, Clock, Receipt, CheckCircle, Zap } from 'lucide-react';

interface WhyChooseFeaturesProps {
  onGetQuote: () => void;
}

export const WhyChooseFeatures: React.FC<WhyChooseFeaturesProps> = ({ onGetQuote }) => {
  const features = [
    {
      title: 'Certified Electricians',
      desc: 'Licensed master & journeyman electricians with rigorous safety certifications and vetted background checks.',
      icon: <Award className="w-6 h-6 text-amber-500" />,
      tag: '100% Licensed',
    },
    {
      title: 'Safety First',
      desc: 'Zero-compromise protocols adhering to strict NFPA 70E standards, arc-flash protection, and code compliance.',
      icon: <ShieldAlert className="w-6 h-6 text-amber-500" />,
      tag: 'Zero-Accident Policy',
    },
    {
      title: '24/7 Emergency Support',
      desc: 'Rapid mobile dispatch units on standby around the clock to stabilize power failures and electrical hazards.',
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      tag: 'Always Available',
    },
    {
      title: 'Transparent Pricing',
      desc: 'Clear, upfront flat-rate quotes before work begins. No hidden travel surcharges, overtime fees, or bill shocks.',
      icon: <Receipt className="w-6 h-6 text-amber-500" />,
      tag: 'Guaranteed Bids',
    },
    {
      title: 'Quality Workmanship',
      desc: 'Heavy-duty commercial-grade materials, clean wiring pathways, and a comprehensive 1-year labor warranty.',
      icon: <CheckCircle className="w-6 h-6 text-amber-500" />,
      tag: '1-Year Warranty',
    },
    {
      title: 'Fast Response',
      desc: 'Average 25-45 minute emergency arrival across all metropolitan service districts with live GPS updates.',
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      tag: 'Rapid Arrival',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
            <span className="text-xs sm:text-[13px] font-bold text-[#F59E0B] uppercase tracking-widest">
              THE COSPERT STANDARD
            </span>
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0F172A] leading-tight">
            Why Choose Cospert?
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-xl mx-auto">
            Professional electrical service built around safety, reliability, and quality.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFFBEB] border border-amber-200/60 flex items-center justify-center shadow-xs group-hover:bg-[#FEF3C7] group-hover:scale-105 transition-all">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-2.5 group-hover:text-amber-600 transition-colors">
                  {feat.title}
                </h3>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="text-slate-400 font-mono text-[11px]">0{idx + 1} // Standard</span>
                <button
                  type="button"
                  onClick={onGetQuote}
                  className="text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Book with Us &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
