import React, { useState } from 'react';
import { Search, Share2, Check, Globe, Sparkles } from 'lucide-react';

interface SeoPreviewCardProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: 'service' | 'blog';
}

export const SeoPreviewCard: React.FC<SeoPreviewCardProps> = ({
  title,
  description,
  path,
  keywords = [],
  type = 'service',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'google' | 'social'>('google');
  const [copied, setCopied] = useState(false);

  const displayUrl = `https://cospert.com${path}`;
  const originDisplay = 'cospert.com';

  const titleLength = title.length;
  const descLength = description.length;

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-10 bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-3xl p-6 border border-slate-200/80 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-xs">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Search Engine Optimization
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" /> Active Meta
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Live Search Engine Visibility &amp; Social Card Preview
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyLink}
            className="text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Copy Canonical URL</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs font-bold bg-[#0B1320] text-white hover:bg-slate-800 px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer"
          >
            {isOpen ? 'Hide SEO Preview' : 'Inspect SEO Snippet'}
          </button>
        </div>
      </div>

      {/* Quick Summary Bar */}
      <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-slate-600">
        <span className="flex items-center gap-1 font-medium">
          <Globe className="w-3.5 h-3.5 text-amber-600" />
          <strong className="text-slate-900">Title:</strong> {titleLength}/60 chars
          <span className={titleLength >= 30 && titleLength <= 60 ? 'text-emerald-600 font-bold' : 'text-amber-600'}>
            (Optimal)
          </span>
        </span>
        <span className="text-slate-300">&bull;</span>
        <span className="font-medium">
          <strong className="text-slate-900">Description:</strong> {descLength}/160 chars
          <span className={descLength >= 120 && descLength <= 160 ? 'text-emerald-600 font-bold' : 'text-amber-600'}>
            (Optimal)
          </span>
        </span>
        <span className="text-slate-300">&bull;</span>
        <span className="font-medium text-slate-500">
          Structured Data: <strong className="text-slate-800">{type === 'service' ? 'Service + LocalBusiness' : 'BlogPosting + Article'}</strong>
        </span>
      </div>

      {/* Expandable Preview Section */}
      {isOpen && (
        <div className="mt-5 pt-5 border-t border-slate-200/70 animate-in fade-in duration-200">
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              onClick={() => setActiveTab('google')}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'google'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Google Search Result Snippet
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('social')}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'social'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Social Card (OpenGraph / X)
            </button>
          </div>

          {activeTab === 'google' && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm font-sans max-w-2xl">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-[10px] font-black text-slate-950">
                  ⚡
                </div>
                <div className="flex flex-col text-xs leading-tight">
                  <span className="font-semibold text-slate-900">Cospert Electrical</span>
                  <span className="text-slate-500 text-[11px] truncate">{displayUrl}</span>
                </div>
              </div>

              <h5 className="text-[#1a0dab] hover:underline text-lg font-medium leading-snug cursor-pointer mt-1">
                {title}
              </h5>

              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mt-1.5">
                {description}
              </p>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden max-w-xl">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-32 flex items-center justify-center p-4 text-white text-center">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-200 block">
                    COSPERT ELECTRICAL SERVICES
                  </span>
                  <h6 className="text-base font-black mt-1 line-clamp-1">{title}</h6>
                </div>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <span className="text-[11px] uppercase font-bold text-slate-400 block tracking-wider">
                  {originDisplay}
                </span>
                <div className="text-sm font-bold text-slate-900 mt-0.5 truncate">{title}</div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-2">{description}</div>
              </div>
            </div>
          )}

          {/* Keywords list */}
          {keywords.length > 0 && (
            <div className="mt-4 pt-3 border-t border-slate-200/50 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                Target Keywords:
              </span>
              {keywords.map((kw, i) => (
                <span
                  key={i}
                  className="bg-white border border-slate-200/80 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded-md"
                >
                  #{kw}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
