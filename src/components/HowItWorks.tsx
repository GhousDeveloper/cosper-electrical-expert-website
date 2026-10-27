import React from 'react';
import { ArrowRight, PhoneCall, FileText, Wrench, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onStartRequest: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartRequest }) => {
  const steps = [
    {
      num: '01',
      title: 'Request a Service',
      desc: 'Submit your electrical requirements online or give our 24/7 hotline a call. Tell us what is malfunctioning or what new fixtures you need.',
      icon: <PhoneCall className="w-6 h-6 text-slate-900" />,
    },
    {
      num: '02',
      title: 'Get Your Quote',
      desc: 'Receive transparent, itemized upfront pricing. We explain options clearly so you know exactly what to expect with zero surprises.',
      icon: <FileText className="w-6 h-6 text-slate-900" />,
    },
    {
      num: '03',
      title: 'Expert Electrician Arrives',
      desc: 'A licensed, background-checked master technician arrives on time in a fully equipped service vehicle ready to solve the issue.',
      icon: <Wrench className="w-6 h-6 text-slate-900" />,
    },
    {
      num: '04',
      title: 'Job Completed',
      desc: 'Your project is completed to 100% National Electrical Code standards, thoroughly load-tested, and backed by our full 1-year warranty.',
      icon: <CheckCircle2 className="w-6 h-6 text-slate-900" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] relative overflow-hidden border-t border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
            <span className="text-xs sm:text-[13px] font-bold text-[#F59E0B] uppercase tracking-widest">
              HOW IT WORKS
            </span>
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0F172A] leading-tight">
            Simple. Professional. Reliable.
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            From first contact to final code sign-off, our transparent 4-step workflow ensures hassle-free electrical service.
          </p>
        </div>

        {/* 4-Step Process with Connecting Line */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 -translate-y-12 h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/60 shadow-[0_10px_30px_rgba(245,158,11,0.06)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Step Number & Icon badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-amber-500 font-mono tracking-tight">
                      {s.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FBBF24] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#F59E0B] transition-transform">
                      {s.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] mb-2.5">
                    {s.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Step {s.num} of 04</span>
                  <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Trigger */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onStartRequest}
            className="group inline-flex items-center gap-2.5 bg-[#0B1320] hover:bg-[#1E293B] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer"
          >
            <span>Start Step 01: Request a Service</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
