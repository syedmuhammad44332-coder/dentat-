import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onBookCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookCall }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('hero');
              }}
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <span className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2.5 8.5C9.5 19.5 10 22 12 22s2.5-2.5 3.5-5.5C16.5 13.5 18 11 18 8c0-3.5-2.5-6-6-6zm0 3c1.5 0 2.5 1 2.5 2.5S13.5 10 12 10s-2.5-1-2.5-2.5S10.5 5 12 5z" />
                </svg>
              </span>
              <span>Precision Dental</span>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Advanced restorative, aesthetic, and preventive dental care. Designed for patient
              tranquility with digital precision technology and zero-discomfort protocols.
            </p>

            <div className="pt-2 flex items-center gap-2 text-teal-400 text-xs font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>ADA Accredited & Certified Cleanroom Studio</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Studio Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'hero', label: 'Home Overview' },
                { id: 'featured', label: 'Featured Treatments' },
                { id: 'why-us', label: 'Why Choose Us' },
                { id: 'about', label: 'Philosophy & Trust' },
                { id: 'insights', label: 'Clinical Insights' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-teal-300 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Clinical Procedures
            </h4>
            <ul className="space-y-2">
              {[
                '3D Intraoral Diagnostics',
                'Guided Biofilm Teeth Cleaning',
                'Biomimetic Ceramic Veneers',
                'Painless Laser Periodontics',
                'Clear Orthodontic Aligners',
                'Emergency Same-Day Relief',
              ].map((treatment, idx) => (
                <li key={idx}>
                  <button
                    onClick={onBookCall}
                    className="hover:text-teal-300 transition-colors text-left flex items-center gap-1 group"
                  >
                    <span>{treatment}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Practice Information
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>450 Lexington Avenue, Suite 1800, New York, NY 10017</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+1 (212) 890-4100</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>care@precisiondental.studio</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div>Mon – Fri: 7:30 AM – 7:00 PM</div>
                  <div>Sat: 8:30 AM – 3:00 PM (Emergency by appt)</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Clean Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Precision Dental Studio. All clinical procedures performed by licensed prosthodontists and specialists.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onBookCall} className="hover:text-slate-400 transition-colors">
              Patient Privacy Policy
            </button>
            <button onClick={onBookCall} className="hover:text-slate-400 transition-colors">
              HIPAA Compliance
            </button>
            <button onClick={onBookCall} className="hover:text-slate-400 transition-colors">
              Accessibility
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
