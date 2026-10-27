import React, { useState } from 'react';
import { X, Star, CheckCircle2 } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (newReview: {
    name: string;
    location: string;
    service: string;
    rating: number;
    review: string;
  }) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState('Panel Upgrade & Installation');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !review) return;

    onSubmitReview({
      name,
      location: location || 'New York, NY',
      service,
      rating,
      review,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setName('');
      setLocation('');
      setReview('');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden relative flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] p-5 text-[#0F172A] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-black/70 block">
              Customer Feedback
            </span>
            <h3 className="text-xl font-black tracking-tight">Share Your Experience</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-slate-900 mb-1">Thank You!</h4>
              <p className="text-xs text-slate-600">
                Your testimonial has been verified and added to our client reviews.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Rating
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (hoverRating || rating)
                            ? 'text-amber-500 fill-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-700">
                    {rating} of 5 Stars
                  </span>
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Service Performed
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Electrical Installation">Electrical Installation</option>
                  <option value="Panel Upgrade & EV Charger">Panel Upgrade &amp; EV Charger</option>
                  <option value="Emergency Electrical Repair">Emergency Electrical Repair</option>
                  <option value="Maintenance & Tune-up">Maintenance &amp; Tune-up</option>
                  <option value="Safety Inspection & Code Compliance">Safety Inspection &amp; Code Compliance</option>
                </select>
              </div>

              {/* Name & Location */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / Borough
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Brooklyn, NY"
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Review Details
                </label>
                <textarea
                  required
                  rows={3}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Tell us about the electrician's punctuality, quality of work, and safety..."
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0B1320] hover:bg-[#1E293B] text-white font-bold py-3 rounded-full text-xs transition-colors cursor-pointer shadow-md"
              >
                Post Testimonial
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
