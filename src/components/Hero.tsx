import React from 'react';
import { ArrowRight, Play, Shield, Award, Clock } from 'lucide-react';

interface HeroProps {
  onBookService: () => void;
  onWatchVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookService,
  onWatchVideo,
}) => {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 75% 30%, #FFB800 0%, #FED24F 35%, #FDEAA6 70%, #FCFCF0 100%)',
      }}
    >
      {/* Decorative large lightning line in the background */}
      <div className="absolute right-0 top-12 w-1/2 h-full pointer-events-none opacity-40 select-none hidden lg:block">
        <svg
          viewBox="0 0 500 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain"
        >
          <path
            d="M320 20L170 300H290L230 650L440 260H300L350 20H320Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 xl:col-span-7 pt-2 sm:pt-6">
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-[2px] bg-[#3B290C] inline-block rounded-full"></span>
              <span className="text-xs sm:text-[13px] font-bold tracking-normal text-[#2A1D08]">
                Trusted Electrical Experts
              </span>
            </div>

            {/* Headline matching reference: "Powering Homes with Safety & Reliability" */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black tracking-tight text-[#0B1320] leading-[1.08]">
              Powering Homes <br />
              with <span className="text-white drop-shadow-sm">Safety &amp;</span> <br />
              Reliability
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#2E200C] leading-relaxed max-w-md font-medium">
              Professional electrical solutions for homes and businesses. Your
              safety is our top priority.
            </p>

            {/* CTAs Row */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-5 sm:gap-6">
              {/* Primary: Book a Service */}
              <button
                type="button"
                onClick={onBookService}
                className="group bg-[#0B1320] hover:bg-[#1E293B] text-white font-bold text-sm px-6 sm:px-7 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-xl flex items-center gap-2.5 cursor-pointer active:scale-95"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary: Watch Our Video */}
              <button
                type="button"
                onClick={onWatchVideo}
                className="group flex items-center gap-2.5 text-[#0F172A] font-bold text-sm hover:text-black cursor-pointer transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-slate-900/30 bg-white/40 flex items-center justify-center group-hover:scale-105 group-hover:bg-white/70 transition-all shadow-xs">
                  <Play className="w-3.5 h-3.5 fill-slate-900 text-slate-900 ml-0.5" />
                </div>
                <span>Watch Our Video</span>
              </button>
            </div>

            {/* 3 Trust Badges in Hero matching reference */}
            <div className="mt-9 sm:mt-12 flex flex-wrap sm:flex-nowrap items-center gap-5 sm:gap-7 max-w-xl">
              {/* Badge 1: 100% Safety First */}
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white shadow-xs flex items-center justify-center shrink-0 border border-amber-200/40">
                  <Shield className="w-5 h-5 text-amber-500 fill-amber-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                    100%
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-700 leading-tight">
                    Safety First
                  </span>
                </div>
              </div>

              {/* Badge 2: Certified Electricians */}
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white shadow-xs flex items-center justify-center shrink-0 border border-amber-200/40">
                  <Award className="w-5 h-5 text-amber-500 fill-amber-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                    Certified
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-700 leading-tight">
                    Electricians
                  </span>
                </div>
              </div>

              {/* Badge 3: 24/7 Emergency Support */}
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white shadow-xs flex items-center justify-center shrink-0 border border-amber-200/40">
                  <div className="relative flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <span className="absolute text-[8px] font-black text-amber-600">24</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                    24/7
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-700 leading-tight">
                    Emergency Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Electrician Hero Visual */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px]">
              {/* Electrician Asset cropped cleanly from reference */}
              <div className="relative z-10 w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl lg:shadow-none">
                <img
                  src="/assets/images/hero_electrician.png"
                  alt="Certified Cospert professional electrician with safety equipment and tools"
                  className="w-full h-auto object-cover select-none drop-shadow-xl"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seamless Wave Transition into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-10 sm:h-14 lg:h-18 preserve-3d"
        >
          {/* Subtle secondary accent curve line on the left */}
          <path
            d="M0 50C240 50 380 72 620 72C860 72 1100 35 1440 45"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="2"
            fill="none"
          />
          {/* Main sweeping white wave into Section 2 */}
          <path
            d="M0 58C280 58 440 85 720 85C1040 85 1200 48 1440 55V90H0V58Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};
