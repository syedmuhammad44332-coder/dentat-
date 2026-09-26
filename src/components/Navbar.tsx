import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onBookCall: () => void;
}

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'featured', label: 'Treatments' },
  { id: 'why-us', label: 'Why Choose Us' },
  { id: 'about', label: 'About' },
  { id: 'insights', label: 'Insights' },
];

const premiumEase = [0.22, 1, 0.36, 1] as const;

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onBookCall }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/85 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-slate-200/60'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark (fades and slides in from left) */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('hero');
              }}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: premiumEase }}
              className="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 focus:outline-none"
            >
              <span className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2.5 8.5C9.5 19.5 10 22 12 22s2.5-2.5 3.5-5.5C16.5 13.5 18 11 18 8c0-3.5-2.5-6-6-6zm0 3c1.5 0 2.5 1 2.5 2.5S13.5 10 12 10s-2.5-1-2.5-2.5S10.5 5 12 5z" />
                </svg>
              </span>
              <span className="font-semibold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors duration-200">
                Precision Dental
              </span>
            </motion.a>

            {/* Zone 2: Navigation Links (Sequential 60ms stagger) */}
            <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-xs">
              {NAV_LINKS.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.06,
                      ease: premiumEase,
                    }}
                    className={`relative px-4 py-2 text-xs font-medium rounded-full transition-colors duration-200 whitespace-nowrap ${
                      isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/50'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-white shadow-sm border border-slate-200/80"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                          duration: 0.28,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={onBookCall}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.45, ease: premiumEase }}
                className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm hover:shadow-md transition-all duration-250 cursor-pointer active:translate-y-0 hover:-translate-y-0.5"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-1" />
              </motion.button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 bg-white/95 backdrop-blur-lg border-b border-slate-200 px-6 py-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    activeSection === link.id
                      ? 'bg-teal-50 text-teal-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookCall();
                  }}
                  className="w-full py-3 rounded-xl bg-teal-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
