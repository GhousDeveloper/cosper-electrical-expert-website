import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, HelpCircle, PhoneCall, ChevronRight, Home } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/websiteData.ts';
import { useSeoMetadata } from '../hooks/useSeoMetadata.ts';
import { SeoPreviewCard } from './SeoPreviewCard.tsx';

interface ServiceDetailPageProps {
  serviceSlug: string;
  onBackToHome: () => void;
  onSelectService: (slug: string) => void;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceSlug,
  onBackToHome,
  onSelectService,
  onOpenQuote,
}) => {
  const service: ServiceItem = SERVICES_DATA[serviceSlug] || SERVICES_DATA['residential'];

  // Apply distinct meta titles, meta descriptions, and Schema.org structured data for this service
  useSeoMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    canonicalPath: `/services/${service.slug}`,
    ogType: 'website',
    image: service.image,
    keywords: service.keywords,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ElectricalService',
      name: service.title,
      description: service.shortDesc,
      provider: {
        '@type': 'Electrician',
        name: 'Cospert Electrical Services',
        telephone: '+1-234-567-8900',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Power Street',
          addressLocality: 'New York',
          addressRegion: 'NY',
          postalCode: '10001',
          addressCountry: 'US',
        },
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'New York City' },
        { '@type': 'AdministrativeArea', name: 'Manhattan' },
        { '@type': 'AdministrativeArea', name: 'Brooklyn' },
        { '@type': 'AdministrativeArea', name: 'Queens' },
      ],
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          description: service.pricingRange,
        },
      },
    },
  });

  // Other related services
  const otherServices = Object.values(SERVICES_DATA).filter((s) => s.slug !== service.slug);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
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
            onClick={onBackToHome}
            className="hover:text-amber-600 transition-colors cursor-pointer"
          >
            Services
          </button>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="font-semibold text-slate-900 truncate">{service.title}</span>
        </nav>

        {/* Back Button */}
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-black mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 pb-12 border-b border-slate-100">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/60 px-3.5 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                Certified Electrical Solution
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.1] mb-4">
              {service.title}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              {service.heroTagline}
            </p>

            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              {service.shortDesc} All projects are executed by licensed journeymen, fully permitted when required, and backed by our written 1-year craftsmanship warranty.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenQuote(service.title)}
                className="group bg-[#0B1320] hover:bg-[#1E293B] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md flex items-center gap-2.5 cursor-pointer"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="tel:+12345678900"
                className="bg-amber-100 text-amber-900 font-bold text-sm px-6 py-3.5 rounded-full hover:bg-amber-200 transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-700" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>

          {/* Service Image with Generated Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover select-none"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B1320]/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-white flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-amber-400 font-bold uppercase">Estimated Investment</div>
                  <div className="text-xs font-mono font-bold text-slate-200">{service.pricingRange}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs">
                  NEC
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & What We Handle */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Key Benefits */}
          <div className="bg-[#FFFDF5] rounded-3xl p-8 border border-amber-200/60 shadow-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <ShieldCheck className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold text-slate-900">Key Benefits &amp; Standards</h2>
            </div>
            <ul className="space-y-4">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FBBF24] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Handle */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#0B1320] text-amber-400 flex items-center justify-center text-xs font-black">
                &check;
              </div>
              <h2 className="text-xl font-bold text-slate-900">What We Handle</h2>
            </div>
            <ul className="space-y-3.5">
              {service.whatWeHandle.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
              Execution Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Our {service.title} Process</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
                <span className="text-2xl font-black font-mono text-amber-500 block mb-2">{step.step}</span>
                <h3 className="text-base font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-16 bg-[#FAFAF9] rounded-3xl p-8 sm:p-10 border border-slate-200">
            <div className="flex items-center gap-2.5 mb-6">
              <HelpCircle className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Frequently Asked Regarding {service.title}</h2>
            </div>

            <div className="space-y-5">
              {service.faqs.map((f, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/70">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{f.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Live Search Engine Visibility & Meta Preview */}
        <SeoPreviewCard
          title={service.metaTitle}
          description={service.metaDescription}
          path={`/services/${service.slug}`}
          keywords={service.keywords}
          type="service"
        />

        {/* Related Services */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Other Electrical Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((other) => (
              <button
                key={other.slug}
                type="button"
                onClick={() => onSelectService(other.slug)}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 text-left transition-all hover:-translate-y-1 group shadow-xs cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                    {other.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {other.shortDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0F172A] group-hover:text-amber-600">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0B1320] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to schedule your {service.title.toLowerCase()}?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            Our certified electricians are on call. Get upfront pricing and guaranteed code compliance today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenQuote(service.title)}
              className="bg-[#FBBF24] hover:bg-[#F59E0B] text-slate-950 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-colors cursor-pointer"
            >
              Request Free Estimate &rarr;
            </button>
            <a
              href="tel:+12345678900"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors"
            >
              Call +1 (234) 567-8900
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
