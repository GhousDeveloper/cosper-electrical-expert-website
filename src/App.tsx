/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { WhyChooseFeatures } from './components/WhyChooseFeatures.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { EmergencySection } from './components/EmergencySection.tsx';
import { ServiceAreasSection } from './components/ServiceAreasSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { FinalCta } from './components/FinalCta.tsx';
import { Footer } from './components/Footer.tsx';

// Dedicated Page Views
import { ServiceDetailPage } from './components/ServiceDetailPage.tsx';
import { ProjectDetailPage } from './components/ProjectDetailPage.tsx';
import { BlogPage } from './components/BlogPage.tsx';
import { QuotePage } from './components/QuotePage.tsx';

// Interactive Modals
import { QuoteModal } from './components/QuoteModal.tsx';
import { VideoModal } from './components/VideoModal.tsx';
import { DetailModal } from './components/DetailModal.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { ReviewModal } from './components/ReviewModal.tsx';
import { OurTeamModal } from './components/OurTeamModal.tsx';

// Data Types
import { BlogArticle } from './data/websiteData.ts';
import { useSeoMetadata } from './hooks/useSeoMetadata.ts';

type ActiveView = 'home' | 'service-detail' | 'project-detail' | 'blog' | 'quote';

interface CustomReview {
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

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>('residential');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('project-1');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  // Modals state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('Electrical Installation');
  const [detailModalType, setDetailModalType] = useState<'services' | 'about' | 'emergency' | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [customReviews, setCustomReviews] = useState<CustomReview[]>([]);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView, selectedServiceSlug, selectedProjectId]);

  // Set SEO metadata for root views
  useSeoMetadata({
    title:
      activeView === 'home'
        ? 'Cospert - Trusted Electrical Experts | NYC Electricians'
        : activeView === 'quote'
        ? 'Request an Electrical Quote | Upfront Pricing | Cospert'
        : activeView === 'project-detail'
        ? 'Commercial & Residential Electrical Projects | Cospert Showcase'
        : 'Cospert - Trusted Electrical Experts',
    description:
      activeView === 'home'
        ? 'Powering Homes with Safety & Reliability. Professional electrical solutions for homes and businesses. 24/7 emergency support across New York.'
        : activeView === 'quote'
        ? 'Get a fast, transparent quote for residential or commercial electrical services. Licensed master electricians with zero hidden fees.'
        : 'View completed electrical installations, brownstone panel upgrades, and commercial build-outs by Cospert certified electricians.',
    canonicalPath: activeView === 'home' ? '/' : `/${activeView}`,
    ogType: 'website',
    image: '/src/assets/images/hero_electrician_1793102578500.jpg',
    keywords: [
      'licensed electrician nyc',
      'emergency electrical repair',
      'panel upgrade brooklyn',
      'commercial electrical contractor',
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: 'Cospert Electrical Services',
      telephone: '+1-234-567-8900',
      email: 'info@cospert.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Power Street',
        addressLocality: 'New York',
        addressRegion: 'NY',
        postalCode: '10001',
        addressCountry: 'US',
      },
      priceRange: '$$',
    },
  });

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'about') {
      if (activeView !== 'home') {
        setActiveView('home');
      }
      setTimeout(() => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsTeamModalOpen(true);
      }, 100);
      return;
    }

    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceSlug = (slug: string) => {
    setSelectedServiceSlug(slug);
    setActiveView('service-detail');
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveView('project-detail');
  };

  const handleSelectArticle = (article: BlogArticle) => {
    setSelectedArticle(article);
    setActiveView('blog');
  };

  const handleOpenQuoteWithService = (serviceName: string) => {
    setSelectedServiceForQuote(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleAddReview = (newReview: {
    name: string;
    location: string;
    service: string;
    rating: number;
    review: string;
  }) => {
    const initials = newReview.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const created: CustomReview = {
      id: Date.now().toString(),
      name: newReview.name,
      location: newReview.location,
      role: 'Verified Customer (Demo)',
      service: newReview.service,
      rating: newReview.rating,
      review: `“${newReview.review}”`,
      date: 'Just now',
      helpfulCount: 1,
      initials: initials || 'VC',
    };

    setCustomReviews((prev) => [created, ...prev]);
  };

  return (
    <div className="min-h-screen bg-white text-[#1E293B] flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* 1. Header / Navbar */}
      <Navbar
        onOpenQuote={() => setActiveView('quote')}
        onNavigateSection={handleNavigateSection}
        onSelectServiceSlug={handleSelectServiceSlug}
        onOpenBlogPage={() => {
          setSelectedArticle(null);
          setActiveView('blog');
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* 2. Hero Section (Untouched Reference Design) */}
            <Hero
              onBookService={() => setActiveView('quote')}
              onWatchVideo={() => setIsVideoModalOpen(true)}
            />

            {/* 3. "WHAT WE DO" - Electrical Services (Untouched Reference Design) */}
            <ServicesSection
              onLearnMore={(type) => setDetailModalType(type)}
            />

            {/* 4. "WHY CHOOSE US" - Recover Your Electrical Issues Quickly (Untouched Reference Design) */}
            <WhyChooseUs
              onBookNow={() => setActiveView('quote')}
            />

            {/* 5. "Why Choose Cospert?" - 6 Core Value Standards */}
            <WhyChooseFeatures
              onGetQuote={() => setActiveView('quote')}
            />

            {/* 6. "HOW IT WORKS" - Simple. Professional. Reliable. 4-Step Process */}
            <HowItWorks
              onStartRequest={() => setActiveView('quote')}
            />

            {/* 7. Emergency Electrical Section - 24/7 Rapid Response */}
            <div id="emergency">
              <EmergencySection
                onRequestEmergency={() => {
                  setSelectedServiceForQuote('Emergency Service (24/7)');
                  setIsQuoteModalOpen(true);
                }}
              />
            </div>

            {/* 8. "SERVICE AREAS" - Serving Your Community & Interactive Map */}
            <ServiceAreasSection
              onBookInArea={(regionName) => {
                setSelectedServiceForQuote(`Emergency Service (${regionName})`);
                setIsQuoteModalOpen(true);
              }}
            />

            {/* 9. Client Testimonials - Trusted by Homeowners & Businesses */}
            <TestimonialsSection
              onOpenReviewModal={() => setIsReviewModalOpen(true)}
              customReviews={customReviews}
            />

            {/* 10. FAQ Section - Frequently Asked Questions Accordion */}
            <FaqSection />

            {/* 11. Blog / Electrical Tips & Insights */}
            <BlogSection
              onSelectArticle={handleSelectArticle}
              onViewAllArticles={() => {
                setSelectedArticle(null);
                setActiveView('blog');
              }}
            />

            {/* 12. Contact Section - Let's Get Your Electrical Problem Solved */}
            <div id="contact">
              <ContactSection />
            </div>

            {/* 13. Final CTA Banner - Need a Reliable Electrician? */}
            <FinalCta
              onGetQuote={() => setActiveView('quote')}
              onBookService={() => handleOpenQuoteWithService('Residential Electrical Installation')}
            />
          </>
        )}

        {/* Dedicated View: Individual Service Page */}
        {activeView === 'service-detail' && (
          <ServiceDetailPage
            serviceSlug={selectedServiceSlug}
            onBackToHome={() => setActiveView('home')}
            onSelectService={handleSelectServiceSlug}
            onOpenQuote={(serviceTitle) => handleOpenQuoteWithService(serviceTitle)}
          />
        )}

        {/* Dedicated View: Individual Project Detail Page */}
        {activeView === 'project-detail' && (
          <ProjectDetailPage
            projectId={selectedProjectId}
            onBackToHome={() => setActiveView('home')}
            onSelectProject={handleSelectProject}
            onGetQuote={() => setActiveView('quote')}
          />
        )}

        {/* Dedicated View: Blog Hub & Article Reader */}
        {activeView === 'blog' && (
          <BlogPage
            onBackToHome={() => setActiveView('home')}
            selectedArticle={selectedArticle}
            onClearSelectedArticle={() => setSelectedArticle(null)}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {/* Dedicated View: Get a Quote Page */}
        {activeView === 'quote' && (
          <QuotePage
            onBackToHome={() => setActiveView('home')}
            initialService={selectedServiceForQuote}
          />
        )}
      </main>

      {/* 14. Complete Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onSelectServiceSlug={handleSelectServiceSlug}
        onOpenQuote={() => setActiveView('quote')}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={selectedServiceForQuote}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onBookService={() => {
          setIsVideoModalOpen(false);
          setActiveView('quote');
        }}
      />

      <DetailModal
        type={detailModalType}
        onClose={() => setDetailModalType(null)}
        onOpenQuote={() => {
          setDetailModalType(null);
          setActiveView('quote');
        }}
        onOpenTeamModal={() => {
          setDetailModalType(null);
          setIsTeamModalOpen(true);
        }}
      />

      <OurTeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        onSelectElectrician={(name) => {
          setSelectedServiceForQuote(`Inspection / Service with ${name}`);
          setIsQuoteModalOpen(true);
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
}
