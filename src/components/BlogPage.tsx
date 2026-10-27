import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Search, Calendar, Clock, BookOpen, User, CheckCircle2, ChevronRight, Home } from 'lucide-react';
import { BLOG_ARTICLES, BlogArticle } from '../data/websiteData.ts';
import { useSeoMetadata } from '../hooks/useSeoMetadata.ts';
import { SeoPreviewCard } from './SeoPreviewCard.tsx';

interface BlogPageProps {
  onBackToHome: () => void;
  selectedArticle?: BlogArticle | null;
  onClearSelectedArticle: () => void;
  onSelectArticle: (article: BlogArticle) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onBackToHome,
  selectedArticle,
  onClearSelectedArticle,
  onSelectArticle,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    'All',
    'Electrical Safety',
    'Home Electrical',
    'Commercial',
    'Maintenance',
    'Energy',
    'Emergency',
  ];

  // Dynamic SEO metadata for Single Article or Blog Hub
  useSeoMetadata({
    title: selectedArticle
      ? selectedArticle.metaTitle
      : 'Electrical Safety & Tips Blog | Cospert Expert Insights',
    description: selectedArticle
      ? selectedArticle.metaDescription
      : "Expert electrical guides, safety checklists, and troubleshooting tips from Cospert's licensed master electricians and code inspectors.",
    canonicalPath: selectedArticle ? `/blog/${selectedArticle.slug}` : '/blog',
    ogType: selectedArticle ? 'article' : 'website',
    image: selectedArticle?.image || '/src/assets/images/service_residential_electrician_1793102579258.jpg',
    publishedTime: selectedArticle?.date,
    author: selectedArticle?.author || 'Cospert Master Electrician',
    keywords: selectedArticle?.keywords || [
      'electrical safety tips',
      'circuit breaker guide',
      'home rewiring advice',
      'licensed electrician blog',
    ],
    jsonLd: selectedArticle
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: selectedArticle.title,
          description: selectedArticle.excerpt,
          datePublished: selectedArticle.date,
          author: {
            '@type': 'Person',
            name: selectedArticle.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Cospert Electrical Services',
            logo: {
              '@type': 'ImageObject',
              url: 'https://cospert.com/logo.png',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://cospert.com/blog/${selectedArticle.slug}`,
          },
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Cospert Electrical Insights & Safety Blog',
          description:
            'Expert electrical guides, safety checklists, and maintenance instructions written by certified NYC master electricians.',
          publisher: {
            '@type': 'Organization',
            name: 'Cospert Electrical Services',
          },
        },
  });

  // If viewing a single article
  if (selectedArticle) {
    return (
      <div className="pt-24 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation for SEO hierarchy */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button
              type="button"
              onClick={onBackToHome}
              className="flex items-center gap-1 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <button
              type="button"
              onClick={onClearSelectedArticle}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Blog
            </button>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="font-semibold text-slate-900 truncate">{selectedArticle.title}</span>
          </nav>

          <button
            type="button"
            onClick={onClearSelectedArticle}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-black mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <article>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                {selectedArticle.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mt-4 mb-4">
                {selectedArticle.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-6 border-b border-slate-100">
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-amber-600" /> {selectedArticle.author}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" /> {selectedArticle.date}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600" /> {selectedArticle.readTime}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl mb-10 aspect-16/9 border border-slate-200">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover select-none"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Key Takeaways */}
            <div className="bg-[#FFFDF5] border border-amber-200/80 rounded-2xl p-6 mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 mb-3">
                Key Safety Takeaways
              </h3>
              <ul className="space-y-2">
                {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Paragraphs */}
            <div className="prose max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-5">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Live Search Engine Visibility & Meta Preview */}
            <SeoPreviewCard
              title={selectedArticle.metaTitle}
              description={selectedArticle.metaDescription}
              path={`/blog/${selectedArticle.slug}`}
              keywords={selectedArticle.keywords}
              type="blog"
            />

            {/* Author Footer */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Written by Certified Professional</div>
                <div className="text-sm font-bold text-slate-900">{selectedArticle.author}</div>
              </div>
              <button
                type="button"
                onClick={onClearSelectedArticle}
                className="bg-[#0B1320] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Browse More Insights
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Filtered Articles
  const filtered = BLOG_ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = BLOG_ARTICLES[0];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Back Button */}
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-black mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </button>

        {/* Blog Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold text-amber-800 mb-2 border border-amber-200/50">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Master Electrician Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Electrical Tips &amp; Insights
          </h1>
          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
            Safety standards, panel upgrade breakdowns, and maintenance guides from certified New York electrical technicians.
          </p>
        </div>

        {/* Featured Article Card */}
        {selectedCategory === 'All' && !searchQuery && (
          <div className="mb-14 bg-gradient-to-br from-[#0B1320] to-[#1E293B] text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-8 sm:p-12">
              <span className="text-[11px] font-bold text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30 uppercase tracking-wider">
                Featured Editorial &bull; {featured.category}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mt-4 mb-3 leading-tight">
                {featured.title}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>
              <button
                type="button"
                onClick={() => onSelectArticle(featured)}
                className="bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-bold text-xs px-6 py-3 rounded-full flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6 h-full min-h-[280px] relative">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover select-none"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}

        {/* Search & Categories Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
          {/* Categories Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B1320] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500 text-sm">
            No electrical guides found matching &quot;{searchQuery}&quot;. Try a different category or search term.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(0, visibleCount).map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => onSelectArticle(art)}
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-[#0B1320]/80 backdrop-blur-xs text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">
                    {art.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2.5">
                      <span>{art.date}</span>
                      <span>&bull;</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A] group-hover:text-amber-600 transition-colors leading-snug mb-2">
                      {art.title}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0F172A] group-hover:text-amber-600">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filtered.length && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-7 py-3 rounded-full transition-colors cursor-pointer"
            >
              Load More Articles
            </button>
          </div>
        )}

        {/* Live Search Engine Visibility & Meta Preview */}
        <SeoPreviewCard
          title="Electrical Safety & Tips Blog | Cospert Expert Insights"
          description="Expert electrical guides, safety checklists, and troubleshooting tips from Cospert's licensed master electricians and code inspectors."
          path="/blog"
          keywords={['electrical blog', 'electrician safety tips', 'circuit breaker guide', 'electrical maintenance nyc']}
          type="blog"
        />
      </div>
    </div>
  );
};
