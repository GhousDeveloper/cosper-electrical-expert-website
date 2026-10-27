import React, { useState } from 'react';
import { X, Award, ShieldCheck, Lightbulb, CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';

interface ElectricianProfile {
  name: string;
  role: string;
  experience: string;
  image: string;
  certifications: string[];
  expertTipTitle: string;
  expertTip: string;
}

interface OurTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectElectrician: (name: string) => void;
}

export const OurTeamModal: React.FC<OurTeamModalProps> = ({
  isOpen,
  onClose,
  onSelectElectrician,
}) => {
  const electricians: ElectricianProfile[] = [
    {
      name: 'Mark Daniels',
      role: 'Master Electrician & Field Director',
      experience: '18+ Years Experience',
      image: '/src/assets/images/electrician_mark_daniels_1793103285607.jpg',
      certifications: [
        'NYC DOB Master Electrician License (#84920)',
        'OSHA-30 Construction Safety & Health',
        'NFPA 70E Arc Flash Hazard Certified',
        'EVITP Certified (EV Infrastructure Specialist)',
      ],
      expertTipTitle: 'Clear Panel Clearance Rule',
      expertTip:
        'Always maintain at least 36 inches of clear, unobstructed workspace around your main breaker panel. In an emergency, disconnecting power in seconds is critical—never stack storage boxes, shelving, or laundry hampers in front of electrical panels.',
    },
    {
      name: 'Sarah Chen',
      role: 'Master Electrician & Safety Inspector',
      experience: '12+ Years Experience',
      image: '/src/assets/images/electrician_sarah_chen_1793103287176.jpg',
      certifications: [
        'Level II Infrared Thermographer (ASNT / FLIR)',
        'IEEE High Voltage Systems Certified',
        'Commercial Power Quality & Harmonics Analyst',
        'NYC Fire Department Egress Lighting Specialist',
      ],
      expertTipTitle: 'The 10-Second Monthly GFCI Test',
      expertTip:
        'Test all kitchen and bathroom GFCI outlets once a month: press the "Test" button—you should hear a distinct mechanical snap and the power must cut off immediately. If it does not cut power, the internal sensing coil is burned out and cannot protect against fatal water shocks.',
    },
    {
      name: 'Carlos Mendez',
      role: 'Senior Journeyman & Emergency Tech',
      experience: '10+ Years Experience',
      image: '/src/assets/images/electrician_carlos_mendez_1793103286720.jpg',
      certifications: [
        'State Journeyman License (#JM-66104)',
        'Commercial Switchgear Diagnostic Technician',
        'Arc-Fault Circuit Interrupter (AFCI) Specialist',
        'Emergency First Responder & CPR Certified',
      ],
      expertTipTitle: 'Dead Short Warning Sign',
      expertTip:
        'If a breaker instantly snaps back to the center position when you try to reset it, never hold the lever down to force it "ON". This indicates a hard direct short with active high-current arcing inside the wall. Leave it switched OFF and request professional diagnosis.',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  const current = electricians[activeTab];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-100 overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#FFB800] via-[#F59E0B] to-[#D97706] p-6 text-[#0F172A] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-black/10 px-3 py-0.5 rounded-full text-xs font-bold mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
              <span>Certified Master Electricians</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Meet Our Electrical Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-900/80 font-medium">
              Vetted, licensed professionals bringing decades of safe, code-compliant craftsmanship to your property.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-slate-950 transition-colors cursor-pointer shrink-0"
            aria-label="Close Team Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2 overflow-x-auto">
          {electricians.map((e, idx) => (
            <button
              key={e.name}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === idx
                  ? 'border-amber-500 text-amber-700 bg-white rounded-t-xl shadow-xs'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>{e.name}</span>
            </button>
          ))}
        </div>

        {/* Main Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Electrician Portrait & Badge */}
            <div className="md:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-48 sm:w-60 aspect-square rounded-3xl overflow-hidden shadow-xl border-2 border-amber-300 bg-slate-100">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover select-none"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#0B1320]/80 backdrop-blur-xs text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">
                  {current.experience}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xl font-black text-slate-900">{current.name}</h4>
                <div className="text-xs font-bold text-amber-600 mt-0.5">{current.role}</div>
                <div className="text-[11px] text-slate-400 mt-1">Verified NYC Field Master</div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onSelectElectrician(current.name);
                  onClose();
                }}
                className="mt-5 w-full bg-[#0B1320] hover:bg-[#1E293B] text-white font-bold text-xs py-3 px-4 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request {current.name.split(' ')[0]} for Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right: Certifications & Electrician's Corner */}
            <div className="md:col-span-7 space-y-6">
              {/* Specific Certifications List */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3.5">
                  <Award className="w-5 h-5 text-amber-600" />
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Official Licenses &amp; Certifications
                  </h5>
                </div>
                <div className="space-y-2">
                  {current.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#FBBF24] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Electrician's Corner Expert Tip Box */}
              <div className="bg-[#FFFDF5] border-2 border-amber-300/80 rounded-2xl p-5 relative overflow-hidden shadow-xs">
                <div className="flex items-center gap-2 text-amber-800 mb-2.5">
                  <div className="w-7 h-7 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block">
                      Electrician&apos;s Corner
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 leading-tight">
                      {current.expertTipTitle}
                    </h5>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic bg-white/70 p-3.5 rounded-xl border border-amber-200/60">
                  &ldquo;{current.expertTip}&rdquo;
                </p>

                <div className="mt-2.5 text-[10px] font-semibold text-slate-400 text-right">
                  &mdash; Professional tip from {current.name}
                </div>
              </div>

              {/* Quick Contact & Dispatch Guarantee */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Drug-tested &amp; Background-checked
                </span>
                <a
                  href="tel:+12345678900"
                  className="font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3" /> Call Hotline
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500">
            Need urgent guidance? Every Cospert electrician carries active field credentials.
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-5 py-2 rounded-full transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectElectrician(current.name);
                onClose();
              }}
              className="bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-bold px-6 py-2 rounded-full transition-colors cursor-pointer"
            >
              Schedule Service &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
