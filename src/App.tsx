import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedTreatment } from './components/FeaturedTreatment';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutTrust } from './components/AboutTrust';
import { BlogInsights } from './components/BlogInsights';
import { BookingModal } from './components/BookingModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { Footer } from './components/Footer';
import { Treatment, BlogPost } from './types';
import { TREATMENTS, BLOG_POSTS } from './data/dentalData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<Treatment | null>(null);
  const [detailTreatment, setDetailTreatment] = useState<Treatment | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [pageReady, setPageReady] = useState(false);

  // Initial page load subtle white fade-in sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageReady(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Sync active section based on scroll position
  useEffect(() => {
    const sections = ['hero', 'featured', 'why-us', 'about', 'insights'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (treatment?: Treatment) => {
    if (treatment) {
      setSelectedTreatmentForBooking(treatment);
    } else {
      setSelectedTreatmentForBooking(TREATMENTS[0]);
    }
    setBookingModalOpen(true);
  };

  const handleOpenTreatmentDetail = (treatment: Treatment) => {
    setDetailTreatment(treatment);
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-900 selection:bg-teal-500 selection:text-white relative">
      
      {/* 1. Page Load Initial Subtle White Fade-In Layer */}
      <AnimatePresence>
        {!pageReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed inset-0 bg-white z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onBookCall={() => handleOpenBooking()}
      />

      {/* Main Page Container */}
      <main className="w-full">
        {/* Section 1: Hero */}
        <HeroSection
          onBookAppointment={() => handleOpenBooking()}
          onSelectTreatment={handleOpenTreatmentDetail}
        />

        {/* Section 2: Featured Treatment */}
        <FeaturedTreatment
          onBookAppointment={() => handleOpenBooking()}
          onSelectTreatment={handleOpenTreatmentDetail}
        />

        {/* Section 3: Why Choose Us */}
        <WhyChooseUs
          onBookAppointment={() => handleOpenBooking()}
        />

        {/* Section 4: About Us / Trust */}
        <AboutTrust
          onBookAppointment={() => handleOpenBooking()}
        />

        {/* Section 5: Blog / Insights */}
        <BlogInsights
          onSelectArticle={(article) => setSelectedArticle(article)}
          onViewAllArticles={() => setSelectedArticle(BLOG_POSTS[0])}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onBookCall={() => handleOpenBooking()}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedTreatment={selectedTreatmentForBooking}
      />

      <TreatmentDetailModal
        treatment={detailTreatment}
        onClose={() => setDetailTreatment(null)}
        onBookTreatment={(t) => {
          setDetailTreatment(null);
          handleOpenBooking(t);
        }}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookCall={() => {
          setSelectedArticle(null);
          handleOpenBooking();
        }}
      />

    </div>
  );
}
