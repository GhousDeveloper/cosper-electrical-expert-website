import React from 'react';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES, BlogArticle } from '../data/websiteData.ts';

interface BlogSectionProps {
  onSelectArticle: (article: BlogArticle) => void;
  onViewAllArticles: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectArticle,
  onViewAllArticles,
}) => {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#FAFAF9] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-7 h-[2px] bg-[#F59E0B] inline-block rounded-full"></span>
              <span className="text-xs sm:text-[13px] font-bold text-[#F59E0B] uppercase tracking-widest">
                ELECTRICAL INSIGHTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0F172A] leading-tight">
              Electrical Tips &amp; Insights
            </h2>

            <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
              Expert advice, code compliance guides, and safety tips curated by our certified master electricians.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAllArticles}
            className="group bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-xs px-5 py-2.5 rounded-full transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>View All Insights ({BLOG_ARTICLES.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {BLOG_ARTICLES.slice(0, 6).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#0B1320]/80 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">
                  {article.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-500" /> {article.date}
                    </span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-amber-600 transition-colors leading-snug mb-2.5">
                    {article.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">{article.author.split(',')[0]}</span>
                  <button
                    type="button"
                    onClick={() => onSelectArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] group-hover:text-amber-600 transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
