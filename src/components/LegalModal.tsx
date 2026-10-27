import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden relative max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-slate-500">Effective Date: October 2026</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At Cospert, your privacy and data security are as critical to us as your
                home’s electrical safety. This policy governs how we collect and process
                information provided through quote requests and emergency appointments.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">Information We Collect</h4>
              <p>
                We collect your name, physical property address, telephone number, and
                email solely for dispatching certified technicians, estimating scope, and
                delivering code compliance certificates.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">Zero Third-Party Data Sales</h4>
              <p>
                Cospert never sells, rents, or distributes client contact details to
                marketers. All diagnostic notes remain strictly confidential.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to Cospert Electrical Services. By scheduling appointments or
                soliciting quotes, you acknowledge and accept our service terms.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">Licensed Craftsmanship</h4>
              <p>
                All work is executed by licensed electricians complying with National
                Electrical Code (NEC) standards and local municipal regulations.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">Upfront Pricing &amp; Warranty</h4>
              <p>
                Quotes approved by the homeowner are honored as the firm final rate. All
                installations include a 1-year parts and workmanship warranty.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#0B1320] text-white font-bold px-6 py-2 rounded-full text-xs hover:bg-slate-800 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
