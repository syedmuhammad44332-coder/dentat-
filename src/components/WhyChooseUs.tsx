import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Shield, Cpu, Zap, Activity, Check } from 'lucide-react';
import { CLINIC_IMAGES } from '../data/dentalData';
import { Counter } from './Counter';

interface WhyChooseUsProps {
  onBookAppointment: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBookAppointment }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const premiumEase = [0.22, 1, 0.36, 1] as const;

  const chartData = [
    { year: '2022', rate: 94, height: '76%' },
    { year: '2023', rate: 96, height: '82%' },
    { year: '2024', rate: 97, height: '88%' },
    { year: '2025', rate: 98, height: '94%' },
    { year: '2026', rate: 99.4, height: '99%' },
  ];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: premiumEase }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-700 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
            <span>The Precision Distinction</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: premiumEase }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight text-balance"
          >
            Why Choose Precision Dental?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: premiumEase }}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance"
          >
            Every protocol has been thoughtfully re-architected to eliminate discomfort,
            accelerate healing, and achieve micron-level restorative durability.
          </motion.p>
        </div>

        {/* Layered Horizontal Visual / Card Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* CARD 1: Enters from left with subtle -1.5deg rotation settling to 0 */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -1.5 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: premiumEase }}
            whileHover={{ y: -4 }}
            className="lg:col-span-3 rounded-3xl p-6 sm:p-7 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.06)] border border-slate-200/70 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">
                Zero-Discomfort Protocol
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Computerized single-tooth anesthesia (The Wand®) delivers numbness without needle
                pain or facial collateral numbness.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              {['Vibration-neutral handpieces', 'Acoustic noise suppression', 'Heated comfort irrigation'].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARD 2: Middle Turquoise Card (comes slightly upward with 1.2deg rotation settling to 0) */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 1.2 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.32, ease: premiumEase }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 text-white shadow-[0_20px_45px_rgba(13,148,136,0.28)] flex flex-col justify-between relative overflow-hidden transition-all duration-300"
          >
            {/* Subtle glow circle */}
            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              {/* Badge appears first */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/20 border border-white/25 backdrop-blur-xs text-white uppercase"
              >
                <Sparkles className="w-3 h-3 text-teal-200" />
                <span>Next-Gen Standard</span>
              </motion.div>

              {/* Main text fades in line by line */}
              <div className="space-y-1">
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug"
                >
                  3D Micro-Computed Smile Architecture
                </motion.h3>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="text-xs sm:text-sm text-teal-50 font-normal leading-relaxed"
              >
                Every restoration is simulated under dynamic jaw motion algorithms down to 5-micron
                accuracy, preserving over 90% more of your natural enamel structure.
              </motion.p>
            </div>

            {/* Decorative details appear last */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="relative z-10 pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-xs text-teal-100"
            >
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-teal-300" />
                <span>Sub-5 Micron Tolerance</span>
              </div>
              <span className="font-semibold text-white">ISO 13485 Certified</span>
            </motion.div>
          </motion.div>

          {/* CARD 3: Image Card (comes from right with -1deg rotation settling to 0) */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: -1 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.44, ease: premiumEase }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden bg-slate-900 shadow-[0_15px_35px_rgba(15,23,42,0.08)] border border-slate-200/80 relative flex flex-col min-h-[300px] transition-all duration-300"
          >
            <div className="relative flex-1 overflow-hidden">
              {/* Image starts at scale 1.04 and settles to 1. On hover gently zooms to 1.03 */}
              <motion.img
                src={CLINIC_IMAGES.whyChoose}
                alt="Precision dental ceramic veneer instruments"
                referrerPolicy="no-referrer"
                initial={{ scale: 1.04 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.0, delay: 0.5, ease: premiumEase }}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-teal-300 font-semibold block mb-0.5">
                  Micro-Ceramics
                </span>
                <p className="text-xs font-medium text-slate-100">
                  Hand-finished biomimetic ceramics
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: 98% Statistics Card (follows with bar chart) */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.54, ease: premiumEase }}
            whileHover={{ y: -4 }}
            className="lg:col-span-3 rounded-3xl p-6 sm:p-7 bg-white shadow-[0_15px_35px_rgba(15,23,42,0.06)] border border-slate-200/70 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="flex items-baseline justify-between mb-1">
                {/* 98% counts upward */}
                <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                  <Counter value={98} suffix="%" />
                </span>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                  5-Yr Index
                </span>
              </div>

              {/* Supporting text fades in */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xs sm:text-sm text-slate-600 leading-snug mt-2"
              >
                Patient satisfaction & long-term restoration stability rate across 8,400+ cases.
              </motion.p>
            </div>

            {/* Bar chart bars grow upward from zero with staggered animation */}
            <div className="pt-6 mt-4 border-t border-slate-100">
              <div className="flex items-end justify-between gap-2 h-24 mb-2">
                {chartData.map((bar, index) => {
                  const isHovered = hoveredBar === index;
                  return (
                    <div
                      key={bar.year}
                      onMouseEnter={() => setHoveredBar(index)}
                      onMouseLeave={() => setHoveredBar(null)}
                      className="flex-1 flex flex-col items-center gap-1 group/bar cursor-pointer"
                    >
                      <div className="w-full bg-slate-100 rounded-t-md h-20 flex items-end justify-center p-0.5 relative">
                        <motion.div
                          initial={{ height: '0%' }}
                          animate={isInView ? { height: isHovered ? '100%' : bar.height } : {}}
                          transition={{
                            duration: 0.9,
                            delay: 0.65 + index * 0.1,
                            ease: premiumEase,
                          }}
                          className={`w-full rounded-t-sm transition-all duration-200 ${
                            isHovered
                              ? 'bg-teal-600 shadow-sm -translate-y-1'
                              : 'bg-teal-500/80 group-hover/bar:bg-teal-500'
                          }`}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono font-medium">
                        {bar.year}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="text-[11px] text-slate-500 flex items-center justify-between">
                <span>Longitudinal Success</span>
                <span className="font-semibold text-teal-700">99.4% Peak</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
