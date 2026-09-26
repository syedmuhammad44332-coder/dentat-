import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ChevronDown, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { CLINIC_IMAGES, TREATMENTS } from '../data/dentalData';
import { Treatment } from '../types';

interface HeroSectionProps {
  onBookAppointment: () => void;
  onSelectTreatment: (treatment: Treatment) => void;
}

const TREATMENT_TAGS = [
  'Dental Checkup',
  'Teeth Cleaning',
  'Tooth Filling',
  'Gum Treatment',
  'Retainers',
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookAppointment,
  onSelectTreatment,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Easing specified in requirements
  const premiumEase = [0.22, 1, 0.36, 1] as const;

  const handleTagClick = (tagName: string) => {
    const found = TREATMENTS.find((t) => t.name.toLowerCase() === tagName.toLowerCase());
    if (found) {
      onSelectTreatment(found);
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 px-4 sm:px-6 lg:px-8">
      {/* Large Rounded Website Container with 28-32px corners & soft shadow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: premiumEase }}
        className="relative mx-auto max-w-7xl rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-900 text-white shadow-[0_24px_70px_rgba(15,23,42,0.12)] min-h-[640px] lg:min-h-[720px] flex flex-col justify-between"
      >
        {/* Background Image with slow continuous zoom & slow fade-in */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={CLINIC_IMAGES.hero}
            alt="Modern precision dental clinic suite"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 0.45 : 0 }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="w-full h-full object-cover object-center animate-slow-zoom scale-102"
          />
          {/* Subtle multi-layer gradient overlay for pristine text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />
        </div>

        {/* Hero Top & Content */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Subtle Eyebrow Label */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
                className="inline-flex items-center gap-2 text-xs font-medium text-teal-300 tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>Modern Aesthetic & Restorative Care</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-300">Painless Laser Dentistry</span>
              </motion.div>

              {/* Hero Heading: reveals line by line */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: premiumEase }}
                  className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] text-balance"
                >
                  <span className="block">Precision Dental Care</span>
                  <span className="block text-teal-300">Crafted for Confident Smiles</span>
                </motion.h1>
              </div>

              {/* Hero Paragraph follows with 100ms delay */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: premiumEase }}
                className="max-w-xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance"
              >
                Experience world-class restorative and aesthetic dentistry in an environment
                engineered for absolute comfort, micron-level digital scanning, and gentle
                lifelong oral health.
              </motion.p>

              {/* CTA & Actions */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6, ease: premiumEase }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                {/* Book Appointment button */}
                <button
                  type="button"
                  onClick={onBookAppointment}
                  className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full text-sm font-semibold text-slate-950 bg-teal-300 hover:bg-teal-200 shadow-[0_4px_20px_rgba(20,184,166,0.3)] hover:shadow-[0_8px_30px_rgba(20,184,166,0.45)] transition-all duration-250 cursor-pointer active:translate-y-0 hover:-translate-y-0.5"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
                </button>

                <a
                  href="#featured"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur-xs border border-white/15 transition-all duration-200"
                >
                  <span>Explore Treatments</span>
                </a>
              </motion.div>

              {/* Treatment Tags */}
              <div className="pt-2 sm:pt-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-3"
                >
                  Popular Treatments
                </motion.div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  {TREATMENT_TAGS.map((tag, idx) => (
                    <motion.button
                      key={tag}
                      type="button"
                      onClick={() => handleTagClick(tag)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.75 + idx * 0.08,
                        ease: premiumEase,
                      }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/10 hover:bg-teal-500/20 hover:text-teal-200 border border-white/15 hover:border-teal-400/40 backdrop-blur-xs transition-all duration-200 cursor-pointer whitespace-nowrap"
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Floating Doctor/Patient Card */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease: premiumEase }}
                className="w-full max-w-sm"
              >
                {/* Floating Card with subtle float animation */}
                <div className="animate-subtle-float">
                  <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white/95 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/60 backdrop-blur-lg hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.32)] transition-all duration-300">
                    
                    {/* Top Row: Doctor Avatar & Status */}
                    <div className="flex items-center gap-4">
                      {/* Image fades in first */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.85 }}
                        className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden bg-slate-100 shrink-0 shadow-inner"
                      >
                        <img
                          src={CLINIC_IMAGES.doctorElena}
                          alt="Dr. Elena Vance"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                      </motion.div>

                      {/* Text appears shortly after */}
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.95 }}
                        className="min-w-0 flex-1"
                      >
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900 truncate">
                          Dr. Elena Vance, DDS
                        </h4>
                        <p className="text-xs text-slate-500 truncate">
                          Lead Prosthodontist · Columbia
                        </p>
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-teal-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                          <span>Accepting New Patients</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Rating appears last */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.05 }}
                      className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-slate-900">4.9</span>
                        <span className="text-xs text-slate-400">(1,240+ reviews)</span>
                      </div>
                      <span className="text-xs font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
                        Top Specialist
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Content: Labels, Animated Progress Line, Preview & Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: premiumEase }}
          className="relative z-10 px-6 sm:px-10 lg:px-14 py-5 border-t border-white/10 bg-slate-950/40 backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300"
        >
          {/* Progress Indicator */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <span className="text-slate-400 font-mono tabular-nums">01 / 05</span>
            <div className="h-1 w-32 sm:w-44 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1.2, delay: 1.2, ease: premiumEase }}
                className="h-full bg-teal-400 rounded-full"
              />
            </div>
            <span className="hidden sm:inline font-medium text-slate-200">
              Modern Clinical Care
            </span>
          </div>

          {/* Center feature indicator */}
          <div className="hidden md:flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>100% Sterile Cleanroom Certified</span>
            </span>
            <span className="text-slate-500">·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Pain-Free Guarantee</span>
            </span>
          </div>

          {/* Scroll for More indicator with subtle vertical movement */}
          <a
            href="#featured"
            className="group inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <span>Scroll for More</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4 text-teal-400" />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
