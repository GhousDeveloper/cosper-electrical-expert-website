import React from 'react';
import { PhoneCall, AlertTriangle, ArrowRight, ShieldAlert, Zap } from 'lucide-react';

interface EmergencySectionProps {
  onRequestEmergency: () => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({
  onRequestEmergency,
}) => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0B1320] text-white overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            {/* Live Indicator */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                24/7 Live Emergency Dispatch
              </span>
            </div>

            {/* Headline matching user prompt */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-5 text-balance">
              Electrical Emergency? <br />
              <span className="text-amber-400">We&apos;re Here 24/7.</span>
            </h2>

            {/* Supporting text matching user prompt */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              From urgent electrical repairs to unexpected power problems, our team is
              ready to help when you need us.
            </p>

            {/* Key Emergency Assurances */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span>Average 25-45 minute on-site arrival</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-3.5 h-3.5" />
                </div>
                <span>Smoking panels &amp; sudden outage isolation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                <span>Zero emergency surge pricing surcharges</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span>Fully equipped mobile diagnostic units</span>
              </div>
            </div>

            {/* Buttons matching user prompt */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Call Now */}
              <a
                href="tel:+12345678900"
                className="group bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-black text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2.5 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 fill-slate-950" />
                <span>Call Now &rarr;</span>
              </a>

              {/* Request Emergency Service */}
              <button
                type="button"
                onClick={onRequestEmergency}
                className="group bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Request Emergency Service &rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Image Column with Generated Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/30 shadow-2xl">
              <img
                src="/src/assets/images/emergency_service_electrician_1793102578263.jpg"
                alt="Cospert emergency electrical rapid response van with technician ready"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Live Metropolitan Dispatch</div>
                  <div className="text-[11px] text-amber-400 font-mono">Status: Units En Route Across All Boroughs</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs">
                  24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
