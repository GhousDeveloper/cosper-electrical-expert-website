import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Zap, UploadCloud, Calculator } from 'lucide-react';

interface QuotePageProps {
  onBackToHome: () => void;
  initialService?: string;
}

export const QuotePage: React.FC<QuotePageProps> = ({
  onBackToHome,
  initialService = 'Residential Electrical Services',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: initialService,
    propertyType: 'Residential' as 'Residential' | 'Commercial',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    problemDescription: '',
    fileName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-black mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center max-w-xl mx-auto animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-3 border border-amber-200/50">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Quote Reference #CP-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>

            <h2 className="text-3xl font-black text-slate-900 mb-2">Request Received</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
              We&apos;ll get back to you as soon as possible.
            </p>

            <div className="bg-slate-50 rounded-2xl p-5 text-left border border-slate-100 mb-6 text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Contact:</span>
                <span className="font-bold text-slate-800">{formData.fullName} ({formData.phone})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-800">{formData.service}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Property:</span>
                <span className="font-bold text-slate-800">{formData.propertyType}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Preferred Slot:</span>
                <span className="font-bold text-slate-800">
                  {formData.preferredDate || 'Earliest Available'} &bull; {formData.preferredTime}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onBackToHome}
              className="bg-[#0B1320] text-white font-bold text-xs px-8 py-3 rounded-full hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
            >
              Return to Homepage
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            {/* Page Header */}
            <div className="border-b border-slate-100 pb-6 mb-8 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold text-amber-800 mb-2 border border-amber-200/50">
                <Calculator className="w-3.5 h-3.5 text-amber-600" />
                <span>Zero Obligation &bull; 100% Upfront Pricing</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                Get Your Free Quote
              </h1>
              <p className="mt-2 text-slate-500 text-xs sm:text-sm">
                Fill out the details below and a certified master electrician will prepare your comprehensive estimate.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-2xl font-medium">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Miller"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Service & Property Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="Residential Electrical Services">Residential Electrical Services</option>
                    <option value="Commercial Electrical Solutions">Commercial Electrical Solutions</option>
                    <option value="Rapid Electrical Repair">Rapid Electrical Repair</option>
                    <option value="Wiring & Rewiring Services">Wiring &amp; Rewiring Services</option>
                    <option value="Architectural & Modern Lighting">Architectural &amp; Modern Lighting</option>
                    <option value="Electrical Safety Inspection">Electrical Safety Inspection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'Residential' })}
                      className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        formData.propertyType === 'Residential'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'Commercial' })}
                      className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        formData.propertyType === 'Commercial'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Commercial
                    </button>
                  </div>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                    <option value="Urgent (Next Available Dispatch)">Urgent (Next Available Dispatch)</option>
                  </select>
                </div>
              </div>

              {/* Problem Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Problem Description *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.problemDescription}
                  onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
                  placeholder="Tell us about the issue, breaker trips, fixtures, or specific electrical project goals..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>

              {/* Optional Image Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Optional Photo of Electrical Panel or Fixture
                </label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center hover:border-amber-400 transition-colors">
                  <input
                    type="file"
                    id="quote-file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="quote-file" className="cursor-pointer flex flex-col items-center">
                    <UploadCloud className="w-8 h-8 text-amber-500 mb-1" />
                    <span className="text-xs font-bold text-slate-800">
                      {formData.fileName ? `Selected: ${formData.fileName}` : 'Click to upload picture (JPG, PNG)'}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Helps our technicians pre-diagnose parts needed</span>
                  </label>
                </div>
              </div>

              {/* Assurances */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600" /> No hidden fees guaranteed
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-600" /> Response within 2 hours
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0B1320] hover:bg-[#1E293B] text-white font-black py-4 px-6 rounded-full transition-all duration-200 shadow-md text-sm cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Processing Request...' : 'Request My Quote \u2192'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
