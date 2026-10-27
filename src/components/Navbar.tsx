import React, { useState, useEffect, useRef } from 'react';
import { CospertLogo } from './CospertLogo.tsx';
import { ArrowRight, ChevronDown, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectServiceSlug: (slug: string) => void;
  onOpenBlogPage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuote,
  onNavigateSection,
  onSelectServiceSlug,
  onOpenBlogPage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceItems = [
    { name: 'Residential', slug: 'residential', desc: 'Panel upgrades, outlets, code safety' },
    { name: 'Commercial', slug: 'commercial', desc: '3-phase power, commercial build-outs' },
    { name: 'Electrical Repair', slug: 'electrical-repair', desc: 'Fast diagnostic & wire troubleshooting' },
    { name: 'Wiring & Rewiring', slug: 'wiring', desc: 'Whole-home copper rewiring' },
    { name: 'Lighting', slug: 'lighting', desc: 'Architectural recessed LED fixtures' },
    { name: 'Inspection', slug: 'inspection', desc: 'Thermal infrared safety certifications' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FEB814]/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection('home');
            }}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg shrink-0 cursor-pointer"
          >
            <CospertLogo variant="dark" />
          </a>

          {/* Zone 2: Navigation Links (Exact 6 items from reference) */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-[#1E293B]">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigateSection('home');
              }}
              className="hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            >
              Home
            </a>

            {/* Services with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1.5 hover:text-black transition-colors whitespace-nowrap cursor-pointer focus:outline-none"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-black' : 'text-slate-700'
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 text-xs font-bold text-amber-600 tracking-wider uppercase border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span>Electrical Services</span>
                    <span className="text-[10px] text-slate-400 font-normal">All 6 Available</span>
                  </div>
                  {serviceItems.map((item) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        onSelectServiceSlug(item.slug);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-amber-50/70 transition-colors group flex flex-col cursor-pointer"
                    >
                      <span className="text-sm font-bold text-slate-800 group-hover:text-amber-700">
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-500">{item.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigateSection('about');
              }}
              className="hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            >
              About Us
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigateSection('projects');
              }}
              className="hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            >
              Projects
            </a>

            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                onOpenBlogPage();
              }}
              className="hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            >
              Blog
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigateSection('contact');
              }}
              className="hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenQuote}
              className="group bg-[#0B1320] hover:bg-[#1E293B] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenQuote}
              className="sm:hidden bg-[#0B1320] text-white text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5"
            >
              <span>Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-900 hover:bg-black/5 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-xl px-6 py-5 mt-2 animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-4 text-base font-semibold text-slate-800">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection('home');
              }}
              className="text-left py-1 hover:text-amber-600 transition-colors"
            >
              Home
            </button>

            {/* Mobile Service Links */}
            <div className="py-1">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                Services
              </div>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {serviceItems.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onSelectServiceSlug(item.slug);
                    }}
                    className="text-left text-xs py-1.5 text-slate-700 hover:text-amber-600 font-medium"
                  >
                    &bull; {item.name}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection('about');
              }}
              className="text-left py-1 hover:text-amber-600 transition-colors"
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection('projects');
              }}
              className="text-left py-1 hover:text-amber-600 transition-colors"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBlogPage();
              }}
              className="text-left py-1 hover:text-amber-600 transition-colors"
            >
              Blog &amp; Tips
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection('contact');
              }}
              className="text-left py-1 hover:text-amber-600 transition-colors"
            >
              Contact
            </button>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-[#0B1320] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+12345678900"
                className="w-full bg-amber-100 text-amber-900 font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-amber-700" />
                <span>24/7 Hotline: +1 (234) 567-8900</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
