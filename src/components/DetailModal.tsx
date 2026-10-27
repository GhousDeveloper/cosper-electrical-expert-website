import React from 'react';
import { X, CheckCircle, Zap, Shield, AlertTriangle, ArrowRight, Phone } from 'lucide-react';

interface DetailModalProps {
  type: 'services' | 'about' | 'emergency' | null;
  onClose: () => void;
  onOpenQuote: () => void;
  onOpenTeamModal?: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  type,
  onClose,
  onOpenQuote,
  onOpenTeamModal,
}) => {
  if (!type) return null;

  const content = {
    services: {
      badge: 'Full Solutions Catalog',
      title: 'Our Complete Electrical Services',
      description:
        'From high-amperage modern panel installations to precision smart home wiring, our master technicians deliver code-compliant power solutions for homes and commercial facilities.',
      highlights: [
        'Electrical Panel Upgrades (100A to 200A / 400A)',
        'Whole-Home Rewiring & Aluminum Wire Replacement',
        'EV Charger Installation (Level 2 & High-Speed DC)',
        'Indoor & Outdoor Architectural LED Lighting',
        'Surge Protection Systems & Lightning Arrestors',
        'Backup Generator Automatic Transfer Switch Systems',
      ],
      ctaText: 'Get a Service Quote',
      icon: <Zap className="w-8 h-8 text-amber-500" />,
    },
    about: {
      badge: 'Certified Heritage',
      title: 'About Cospert Electrical',
      description:
        'Founded with a dedication to safety, transparency, and top-tier craftsmanship. Our licensed journeymen and master electricians have powered over 5,000 households and businesses with an unblemished zero-incident safety record.',
      highlights: [
        'Licensed, Bonded, and Insured ($5M Liability)',
        'Rigorous OSHA-30 & NFPA 70E Safety Compliance',
        'Clear upfront pricing with no overtime charges',
        'Clean work guarantee: we leave every job site pristine',
        'Over 15 years of industry leadership in residential wiring',
        '100% satisfaction guarantee or we return at no charge',
      ],
      ctaText: 'Meet Our Electricians',
      icon: <Shield className="w-8 h-8 text-amber-500" />,
    },
    emergency: {
      badge: '24/7 Rapid Response',
      title: 'Emergency Electrical Service',
      description:
        'Electrical emergencies can jeopardize property and life. Our dedicated on-call dispatch fleet is equipped with diagnostic gear and parts to restore safety promptly, day or night.',
      highlights: [
        'Guaranteed under 45-minute arrival in metropolitan zones',
        'Power outage & total blackout diagnostics',
        'Smoking outlets, sparking panels & burnt wire isolation',
        'Storm damage & downed line connection safely secured',
        'No emergency surge pricing—flat fair rate',
        'Immediate hazard stabilization and power restoration',
      ],
      ctaText: 'Dispatch Emergency Tech',
      icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
    },
  }[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FFFBEB] via-[#FEF3C7] to-[#FDE68A] p-6 border-b border-amber-200/60 flex items-start justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center shrink-0 border border-amber-200">
              {content.icon}
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                {content.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                {content.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <p className="text-slate-600 text-sm leading-relaxed">
            {content.description}
          </p>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Key Standards &amp; Inclusions:
            </h4>
            <div className="space-y-2.5">
              {content.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#FBBF24] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-slate-950" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {type === 'emergency' && (
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-rose-800 uppercase">
                  Immediate Danger?
                </div>
                <div className="text-xs text-rose-600">
                  Call our live 24/7 priority dispatcher directly:
                </div>
              </div>
              <a
                href="tel:+12345678900"
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Dispatch</span>
              </a>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                if (type === 'about' && onOpenTeamModal) {
                  onOpenTeamModal();
                } else {
                  onOpenQuote();
                }
              }}
              className="flex-1 bg-[#0B1320] hover:bg-[#1E293B] text-white font-bold py-3 px-5 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span>{content.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-full text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
