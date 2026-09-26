import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, HeartHandshake, ShieldCheck, Sparkles, Quote } from 'lucide-react';
import { CLINIC_IMAGES } from '../data/dentalData';
import { Counter } from './Counter';

interface AboutTrustProps {
  onBookAppointment: () => void;
}

export const AboutTrust: React.FC<AboutTrustProps> = ({ onBookAppointment }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  const premiumEase = [0.22, 1, 0.36, 1] as const;

  // Progressive headline lines (3-4 word groups as requested)
  const headlineLines = [
    'We deliver personalized dental treatments',
    'with modern technology and gentle care',
    'ensuring confident smiles for every patient.',
  ];

  const statistics = [
    {
      value: 98,
      decimals: 0,
      suffix: '%',
      label: 'Satisfaction Rate',
      sublabel: 'Verified post-treatment survey',
    },
    {
      value: 2000,
      decimals: 0,
      suffix: '+',
      label: 'Happy Patients',
      sublabel: 'Treated with zero discomfort',
    },
    {
      value: 4.9,
      decimals: 1,
      suffix: '★',
      label: 'Customer Rating',
      sublabel: 'Across Google & Trustpilot reviews',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: premiumEase }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-700 uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
          <span>Our Clinical Philosophy</span>
        </motion.div>

        {/* Large Headline: Progressive 3-line reveal (anti-over-animation, 3-4 line groups) */}
        <div className="max-w-4xl mb-16 sm:mb-20 space-y-1">
          {headlineLines.map((line, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + idx * 0.14,
                  ease: premiumEase,
                }}
                className={`font-display text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight ${
                  idx === 1
                    ? 'text-teal-700'
                    : idx === 2
                    ? 'text-slate-800'
                    : 'text-slate-950'
                }`}
              >
                {line}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* Main Grid: Left Statistics + Testimonial, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sequential Statistics */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* 3 Key Statistics with staggered delays */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 pt-2">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 22 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.45 + index * 0.12,
                    ease: premiumEase,
                  }}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:shadow-xs transition-shadow"
                >
                  <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-1">
                    <Counter
                      value={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  </div>
                  
                  {/* Supporting labels fade in after numbers */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.12,
                    }}
                    className="space-y-0.5"
                  >
                    <div className="text-xs sm:text-sm font-semibold text-slate-900">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 leading-tight">
                      {stat.sublabel}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Editorial Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.75, ease: premiumEase }}
              className="rounded-3xl p-6 sm:p-8 bg-teal-50/60 border border-teal-100/80 relative"
            >
              <Quote className="w-8 h-8 text-teal-600/30 mb-3" />
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal italic">
                “I had avoided the dentist for seven years due to severe phobia. Dr. Vance and her team
                completely changed my perspective. The computerized numbing was completely imperceptible,
                and my clear aligners and ceramic veneer work gave me back my confidence.”
              </p>
              <div className="mt-4 pt-4 border-t border-teal-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">Sarah Jenkins</div>
                  <div className="text-[11px] text-slate-500">Aesthetic Veneers & Alignment Patient</div>
                </div>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center gap-6 text-xs text-slate-500"
            >
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <HeartHandshake className="w-4 h-4 text-teal-600" />
                <span>Zero-Judgment Environment</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Full Dental Insurance Assistance</span>
              </span>
            </motion.div>

          </div>

          {/* Right Column: Reveal with rounded clipping animation + slight image zoom */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{
                opacity: 0,
                clipPath: 'inset(10% 10% 10% 10% round 36px)',
                scale: 0.96,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      clipPath: 'inset(0% 0% 0% 0% round 36px)',
                      scale: 1,
                    }
                  : {}
              }
              transition={{ duration: 1.0, delay: 0.35, ease: premiumEase }}
              className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-100 shadow-[0_24px_50px_rgba(15,23,42,0.08)] border border-slate-100 aspect-4/3"
            >
              {/* Subtle hover 1.03 zoom, no shaking */}
              <img
                src={CLINIC_IMAGES.trustSmile}
                alt="Patient smiling with healthy teeth in modern clinic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

              {/* Floating verified badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-white/70 text-slate-900 max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Comprehensive Care</div>
                    <div className="text-[10px] text-slate-500">Every treatment customized to your biology</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
