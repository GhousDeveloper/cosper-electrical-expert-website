import React from 'react';
import { CospertLogo } from './CospertLogo.tsx';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onSelectServiceSlug: (slug: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenPrivacy,
  onOpenTerms,
  onSelectServiceSlug,
  onOpenQuote,
}) => {
  return (
    <footer id="footer" className="bg-[#0B1320] text-white pt-16 sm:pt-20 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12">
          {/* Column 1: Cospert & Description */}
          <div className="lg:col-span-4">
            <CospertLogo variant="light" />

            <p className="mt-4 text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional electrical solutions for homes and businesses. Licensed master electricians dedicated to safety, reliability, and code-certified quality.
            </p>

            {/* Social Icons row */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 hover:bg-white/5 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 hover:bg-white/5 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 hover:bg-white/5 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 hover:bg-white/5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>NYC DOB Master License #84920</span>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('projects')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('blog')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (Exact 6 from prompt) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceSlug('residential')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Residential
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceSlug('commercial')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Commercial
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceSlug('electrical-repair')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Electrical Repair
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceSlug('wiring')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Wiring
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceSlug('lighting')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Lighting
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectServiceSlug('inspection')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Inspection
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('faq')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Get a Quote
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('emergency')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Emergency Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('service-areas')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Service Areas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Working Hours */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <a
                href="tel:+12345678900"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+1 (234) 567-8900</span>
              </a>

              <a
                href="mailto:info@cospert.com"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>info@cospert.com</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  123 Power Street, New York, NY 10001
                </span>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-slate-800/80">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-400 leading-tight">
                  Mon-Fri: 7am - 7pm <br />
                  <span className="text-amber-400 font-bold">24/7 Emergency Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; 2026 Cospert. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600">|</span>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
