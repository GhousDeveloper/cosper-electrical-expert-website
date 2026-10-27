import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Electrical Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please describe your electrical requirements.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact-us" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
            <span className="text-xs sm:text-[13px] font-bold text-[#F59E0B] uppercase tracking-widest">
              GET IN TOUCH
            </span>
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0F172A] leading-tight">
            Let&apos;s Get Your Electrical Problem Solved.
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
            Reach our master technicians for estimates, emergency repairs, or commercial audits. We respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Business Hours */}
          <div className="lg:col-span-5 bg-[#0B1320] text-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Direct Contact Details
              </span>
              <h3 className="text-2xl font-black mb-6">Cospert Central Dispatch</h3>

              <div className="space-y-5 text-sm">
                <a
                  href="tel:+12345678900"
                  className="flex items-start gap-3.5 text-slate-300 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-400/20">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">24/7 Telephone Hotline</div>
                    <div className="text-base font-bold text-white">+1 (234) 567-8900</div>
                  </div>
                </a>

                <a
                  href="mailto:info@cospert.com"
                  className="flex items-start gap-3.5 text-slate-300 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-400/20">
                    <Mail className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Email Inquiries</div>
                    <div className="text-base font-bold text-white">info@cospert.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Headquarters</div>
                    <div className="text-sm font-semibold text-white">123 Power Street, New York, NY 10001</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Working Hours</div>
                    <div className="text-xs text-white">
                      Monday &ndash; Friday: 7:00 AM &ndash; 7:00 PM <br />
                      Saturday: 8:00 AM &ndash; 5:00 PM <br />
                      <span className="text-amber-400 font-bold">Emergency Dispatch: 24/7 / 365 Days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom trust badge */}
            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <div className="text-[11px] text-slate-300">
                Fully licensed, bonded &amp; insured ($5M liability coverage).
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#FFFDF5] rounded-3xl p-7 sm:p-9 border border-amber-200/60 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. An on-duty Cospert service coordinator has received your message and will follow up within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', service: 'General Electrical Inquiry', message: '' });
                  }}
                  className="bg-[#0B1320] text-white font-bold text-xs px-6 py-3 rounded-full hover:bg-slate-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Michael Thorne"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
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
                      placeholder="michael@example.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                    >
                      <option value="Residential Installation">Residential Installation</option>
                      <option value="Commercial Power System">Commercial Power System</option>
                      <option value="Urgent Electrical Repair">Urgent Electrical Repair</option>
                      <option value="Wiring & Rewiring">Wiring &amp; Rewiring</option>
                      <option value="Architectural Lighting">Architectural Lighting</option>
                      <option value="Safety Inspection & Audit">Safety Inspection &amp; Audit</option>
                      <option value="General Inquiry">General Electrical Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    How Can We Help? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your electrical issue, property location, or requested installation..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-[#0B1320] hover:bg-[#1E293B] text-white font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Message →'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
