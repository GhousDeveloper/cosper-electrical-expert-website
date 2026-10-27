import React, { useState } from 'react';
import { X, CheckCircle, Calculator, ShieldCheck, Clock, Zap } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Electrical Installation',
}) => {
  const [service, setService] = useState(initialService);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [urgency, setUrgency] = useState<'emergency' | 'standard' | 'flexible'>('standard');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Real-time dynamic estimate calculator
  const basePrices: Record<string, number> = {
    'Electrical Installation': 180,
    'Electrical Repair': 120,
    'Maintenance': 95,
    'Emergency Service': 220,
    'Safety Inspection': 140,
  };

  const propertyMultiplier = propertyType === 'commercial' ? 1.4 : 1.0;
  const urgencyMultiplier = urgency === 'emergency' ? 1.5 : urgency === 'standard' ? 1.0 : 0.9;
  const basePrice = basePrices[service] || 150;
  const estimatedCost = Math.round(basePrice * propertyMultiplier * urgencyMultiplier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] p-6 text-[#0F172A] flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 bg-black/10 px-2.5 py-0.5 rounded-full text-xs font-bold mb-1">
              <Zap className="w-3.5 h-3.5 text-slate-900" />
              <span>Instant Estimate</span>
            </div>
            <h3 className="text-2xl font-black tracking-tight">Get a Quote</h3>
            <p className="text-xs text-slate-900/80 font-medium">
              Transparent, upfront pricing with zero hidden fees
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">Quote Request Confirmed!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                Thank you, <span className="font-bold text-slate-800">{name || 'Customer'}</span>. A certified master electrician from Cospert is reviewing your {service.toLowerCase()} request.
              </p>

              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200/60 text-left mb-6">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                  Quote Summary
                </div>
                <div className="flex justify-between text-sm py-1 border-b border-amber-200/40">
                  <span className="text-slate-600">Service:</span>
                  <span className="font-bold text-slate-800">{service}</span>
                </div>
                <div className="flex justify-between text-sm py-1 border-b border-amber-200/40">
                  <span className="text-slate-600">Property:</span>
                  <span className="font-bold text-slate-800 capitalize">{propertyType}</span>
                </div>
                <div className="flex justify-between text-sm py-1 border-b border-amber-200/40">
                  <span className="text-slate-600">Response Window:</span>
                  <span className="font-bold text-amber-700">
                    {urgency === 'emergency' ? 'Within 30 Mins (Priority)' : 'Today'}
                  </span>
                </div>
                <div className="flex justify-between text-base py-2 font-black text-slate-900">
                  <span>Estimated Total:</span>
                  <span className="text-emerald-700">${estimatedCost} - ${Math.round(estimatedCost * 1.25)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full bg-[#0B1320] text-white font-bold py-3.5 rounded-full hover:bg-slate-800 transition-colors"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Electrical Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                >
                  <option value="Electrical Installation">Electrical Installation</option>
                  <option value="Electrical Repair">Electrical Repair</option>
                  <option value="Maintenance">Maintenance &amp; Tune-up</option>
                  <option value="Emergency Service">Emergency Service (24/7)</option>
                  <option value="Safety Inspection">Safety Inspection &amp; Certification</option>
                </select>
              </div>

              {/* Property & Urgency Toggles */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 bg-slate-100 p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setPropertyType('residential')}
                      className={`text-xs font-bold py-1.5 rounded-lg transition-colors cursor-pointer ${
                        propertyType === 'residential'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType('commercial')}
                      className={`text-xs font-bold py-1.5 rounded-lg transition-colors cursor-pointer ${
                        propertyType === 'commercial'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Commercial
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Urgency
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 bg-slate-100 p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setUrgency('emergency')}
                      className={`text-xs font-bold py-1.5 rounded-lg transition-colors cursor-pointer ${
                        urgency === 'emergency'
                          ? 'bg-amber-400 text-slate-950 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Urgent
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('standard')}
                      className={`text-xs font-bold py-1.5 rounded-lg transition-colors cursor-pointer ${
                        urgency === 'standard'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Standard
                    </button>
                  </div>
                </div>
              </div>

              {/* Real-time Estimate Card */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-5 h-5 text-amber-600" />
                  <div>
                    <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wide">
                      Estimated Cost Range
                    </div>
                    <div className="text-xs text-slate-600">Labor &amp; basic diagnostics included</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-slate-900">
                    ${estimatedCost} - ${Math.round(estimatedCost * 1.25)}
                  </div>
                  <div className="text-[10px] text-emerald-700 font-bold">100% Guaranteed</div>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Miller"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Brief Issue Description (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="E.g., Breaker tripped, flickering lighting, new EV charger..."
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> Licensed &amp; Insured
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600" /> On-time arrival
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#0B1320] hover:bg-[#1E293B] text-white font-bold py-3.5 rounded-full transition-all duration-200 shadow-md text-sm cursor-pointer mt-2"
              >
                Request Free Quote Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
