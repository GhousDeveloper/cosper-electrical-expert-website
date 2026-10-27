import React, { useState } from 'react';
import { Star, ThumbsUp, MessageSquarePlus, ShieldCheck, Check } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  service: string;
  rating: number;
  review: string;
  date: string;
  helpfulCount: number;
  initials: string;
}

interface TestimonialsSectionProps {
  onOpenReviewModal: () => void;
  customReviews?: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenReviewModal,
  customReviews = [],
}) => {
  const initialTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'David Vance',
      location: 'Brooklyn, NY',
      role: 'Homeowner',
      service: '200A Panel Upgrade & EV Charger',
      rating: 5,
      review:
        '“Cospert upgraded our aging 100-amp electrical panel to 200 amps and installed a Level 2 EV charger in our garage. The technicians were punctual, explained the code inspection process thoroughly, and left the workspace spotless.”',
      date: '2 weeks ago',
      helpfulCount: 24,
      initials: 'DV',
    },
    {
      id: '2',
      name: 'Elena Rostova',
      location: 'Manhattan, NY',
      role: 'Restaurant Owner',
      service: 'Emergency Commercial Repair',
      rating: 5,
      review:
        '“A main line breaker tripped during our Friday dinner rush. Their 24/7 emergency electrician arrived in under 35 minutes, safely diagnosed a heat-damaged contactor, and had our kitchen operational with zero revenue lost.”',
      date: '1 month ago',
      helpfulCount: 38,
      initials: 'ER',
    },
    {
      id: '3',
      name: 'Marcus Sterling',
      location: 'Queens, NY',
      role: 'Property Manager',
      service: 'Safety Inspection & Rewiring',
      rating: 5,
      review:
        '“We manage multi-family buildings and rely exclusively on Cospert for code safety compliance audits. Upfront pricing, clear documentation for the city inspector, and 100% dependable on-time execution every single time.”',
      date: '3 weeks ago',
      helpfulCount: 19,
      initials: 'MS',
    },
  ];

  const allReviews = [...customReviews, ...initialTestimonials];
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [helpfulMap, setHelpfulMap] = useState<Record<string, boolean>>({});
  const [countsMap, setCountsMap] = useState<Record<string, number>>(
    initialTestimonials.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.helpfulCount }), {})
  );

  const toggleHelpful = (id: string) => {
    const isCurrentlyHelpful = helpfulMap[id];
    setHelpfulMap((prev) => ({ ...prev, [id]: !isCurrentlyHelpful }));
    setCountsMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (isCurrentlyHelpful ? -1 : 1),
    }));
  };

  const filteredReviews = allReviews.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'residential') return t.role.toLowerCase().includes('homeowner');
    if (filter === 'commercial') return !t.role.toLowerCase().includes('homeowner');
    return true;
  });

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 bg-[#FAFAF9] overflow-hidden border-t border-slate-100">
      {/* Decorative subtle dot pattern matching other sections */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-36 h-56 pointer-events-none opacity-20 select-none hidden lg:block">
        <svg width="140" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-grid-testimonials" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#94A3B8" />
          </pattern>
          <rect width="140" height="200" fill="url(#dot-grid-testimonials)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
            <span className="text-xs sm:text-[13px] font-bold text-[#F59E0B] uppercase tracking-widest">
              CLIENT TESTIMONIALS
            </span>
            <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0F172A] leading-tight">
            What Our Clients Say
          </h2>

          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Real feedback from homeowners and businesses who rely on Cospert for safe, certified, and on-time electrical solutions.
          </p>

          {/* Interactive Filter Controls */}
          <div className="mt-6 inline-flex items-center gap-1.5 p-1 bg-white border border-slate-200/80 rounded-full shadow-xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#0B1320] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Reviews ({allReviews.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('residential')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filter === 'residential'
                  ? 'bg-[#0B1320] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Residential
            </button>
            <button
              type="button"
              onClick={() => setFilter('commercial')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filter === 'commercial'
                  ? 'bg-[#0B1320] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {filteredReviews.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: 5 Star Rating & Verified Marker */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#F59E0B] fill-[#FBBF24]"
                      />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/50">
                    <Check className="w-3 h-3 stroke-[3]" />
                    <span>Verified Job</span>
                  </span>
                </div>

                {/* Service Tag */}
                <div className="text-xs font-bold text-amber-700 mb-3 tracking-wide">
                  {testimonial.service}
                </div>

                {/* Review Snippet */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  {testimonial.review}
                </p>
              </div>

              {/* Bottom Customer Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFFBEB] border border-amber-200 flex items-center justify-center font-bold text-xs text-[#0F172A] shrink-0 shadow-xs">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] leading-tight">
                      {testimonial.name}
                    </h4>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <span>{testimonial.role}</span>
                      <span aria-hidden="true">·</span>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>

                {/* Helpful Button */}
                <button
                  type="button"
                  onClick={() => toggleHelpful(testimonial.id)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    helpfulMap[testimonial.id]
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                  title="Mark as helpful"
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span className="font-mono text-[11px]">{countsMap[testimonial.id] || testimonial.helpfulCount}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Row: Write a Review & Trust Summary */}
        <div className="mt-12 sm:mt-14 max-w-4xl mx-auto bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                Rated 4.9 / 5.0 Across 5,000+ Completed Projects
              </div>
              <div className="text-[11px] text-slate-500">
                100% verified electrical repairs and installations in New York.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenReviewModal}
            className="group bg-[#0B1320] hover:bg-[#1E293B] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs flex items-center gap-2 cursor-pointer shrink-0"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 text-amber-400" />
            <span>Leave a Review</span>
          </button>
        </div>
      </div>
    </section>
  );
};
