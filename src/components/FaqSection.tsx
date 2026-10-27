import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS_LIST } from '../data/websiteData.ts';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
            <span className="text-xs sm:text-[13px] font-bold text-[#F59E0B] uppercase tracking-widest">
              QUESTIONS &amp; ANSWERS
            </span>
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0F172A] leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our certified electrician services, rapid response times, and upfront pricing.
          </p>
        </div>

        {/* Animated Accordion */}
        <div className="space-y-3.5">
          {FAQS_LIST.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-amber-300 bg-amber-50/40 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold font-mono transition-colors ${
                        isOpen
                          ? 'bg-[#FBBF24] text-slate-950'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                    <span className="text-sm sm:text-base font-bold text-[#0F172A]">
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-200/80 text-amber-900' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-amber-200/40 pt-4 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Have a specific question about your project?</div>
              <div className="text-xs text-slate-500">Speak directly to an on-call master electrician right now.</div>
            </div>
          </div>
          <a
            href="tel:+12345678900"
            className="bg-[#0B1320] hover:bg-[#1E293B] text-white text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-2 shrink-0 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>+1 (234) 567-8900</span>
          </a>
        </div>
      </div>
    </section>
  );
};
