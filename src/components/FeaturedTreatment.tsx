import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, Shield, ArrowUpRight, Award, CheckCircle } from 'lucide-react';
import { CLINIC_IMAGES, TREATMENTS } from '../data/dentalData';
import { Counter } from './Counter';
import { Treatment } from '../types';

interface FeaturedTreatmentProps {
  onBookAppointment: () => void;
  onSelectTreatment: (treatment: Treatment) => void;
}

export const FeaturedTreatment: React.FC<FeaturedTreatmentProps> = ({
  onBookAppointment,
  onSelectTreatment,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });
  const [doctorImgSrc, setDoctorImgSrc] = useState<string>(CLINIC_IMAGES.doctorElena);

  const premiumEase = [0.22, 1, 0.36, 1] as const;

  const stats = [
    { label: 'Clinical Precision Rate', value: 99.4, suffix: '%', decimals: 1, barWidth: '99%' },
    { label: 'Diagnostic Time (Mins)', value: 15, suffix: 'm', decimals: 0, barWidth: '92%' },
    { label: 'Patient Comfort Index', value: 98, suffix: '%', decimals: 0, barWidth: '98%' },
  ];

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: premiumEase }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-700 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>Featured Treatment</span>
            </motion.div>

            {/* Large Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: premiumEase }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15] text-balance"
            >
              Advanced Dental Care for a Healthier Smile
            </motion.h2>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2, ease: premiumEase }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance"
            >
              Combining sub-micron digital scanning, gentle waterlase decontamination, and custom
              robotic milling to diagnose and restore teeth with unparalleled accuracy. We ensure
              every treatment is virtually imperceptible and completely pain-free.
            </motion.p>

            {/* Feature points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: premiumEase }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1"
            >
              {[
                'Zero-radiation 3D optical scans',
                'Computerized gentle anesthesia',
                'Same-day ceramic restorations',
                'Lifetime restoration warranty',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Doctor Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.38, ease: premiumEase }}
              className="pt-2"
            >
              <div className="group rounded-2xl p-5 bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  {/* Doctor image has subtle scale reveal */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.48, ease: premiumEase }}
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-slate-200 shrink-0"
                  >
                    <img
                      src={doctorImgSrc}
                      alt="Dr. Elena Vance"
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                      onError={() => {
                        if (doctorImgSrc !== '/assets/images/doctor_portrait_elena_1790414686311.jpg') {
                          setDoctorImgSrc('/assets/images/doctor_portrait_elena_1790414686311.jpg');
                        }
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    {/* Doctor name appears after image */}
                    <motion.h4
                      initial={{ opacity: 0, y: 6 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.55 }}
                      className="text-sm sm:text-base font-semibold text-slate-900 truncate"
                    >
                      Dr. Elena Vance, DDS
                    </motion.h4>
                    
                    {/* Credentials appear after name */}
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.62 }}
                      className="text-xs text-slate-500 truncate"
                    >
                      Prosthodontist & Aesthetic Director · Columbia Graduate
                    </motion.p>

                    {/* Rating icon/star softly appears */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="mt-1 flex items-center gap-2 text-xs"
                    >
                      <div className="flex items-center text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <span className="font-semibold text-slate-900">4.95 Rating</span>
                      <span className="text-slate-400">· 14+ Years Clinical Mastery</span>
                    </motion.div>
                  </div>

                  <button
                    onClick={onBookAppointment}
                    className="hidden sm:inline-flex items-center justify-center p-2 rounded-xl text-teal-600 hover:text-teal-700 hover:bg-teal-50 transition-colors"
                    title="Consult with Dr. Elena"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Quick Consultation CTA */}
            <div className="pt-1 flex items-center gap-4">
              <button
                type="button"
                onClick={onBookAppointment}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 shadow-sm hover:shadow-md transition-all duration-250 cursor-pointer active:translate-y-0 hover:-translate-y-0.5"
              >
                <span>Schedule Clinical Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              
              <button
                type="button"
                onClick={() => onSelectTreatment(TREATMENTS[0])}
                className="text-xs font-semibold text-teal-700 hover:text-teal-800 underline underline-offset-4 cursor-pointer"
              >
                View Diagnostic Protocol
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Large Dental Clinic Image + Floating Statistics Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Right-side image reveals using masked/clip-path animation */}
            <motion.div
              initial={{
                opacity: 0,
                clipPath: 'inset(10% 10% 10% 10% round 32px)',
                scale: 0.96,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      clipPath: 'inset(0% 0% 0% 0% round 32px)',
                      scale: 1,
                    }
                  : {}
              }
              transition={{ duration: 1.0, delay: 0.2, ease: premiumEase }}
              className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100 aspect-4/3"
            >
              <img
                src={CLINIC_IMAGES.featured}
                alt="Precision dental treatment room"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              
              {/* Image Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-slate-800 shadow-xs border border-white/50 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-teal-600" />
                <span>Suite 4 · Digital Microscopy</span>
              </div>
            </motion.div>

            {/* Floating Statistics/Info Card over Image */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.5, ease: premiumEase }}
              className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-left-8 lg:max-w-xs w-full"
            >
              <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.12)] border border-slate-100/90 backdrop-blur-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span>Clinical Performance</span>
                  </span>
                  <span className="text-[10px] text-teal-700 font-mono font-medium px-2 py-0.5 rounded-md bg-teal-50">
                    Verified
                  </span>
                </div>

                {/* Staggered animated statistics */}
                <div className="space-y-4 pt-4">
                  {stats.map((st, index) => (
                    <motion.div
                      key={st.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.65 + index * 0.1,
                        ease: premiumEase,
                      }}
                      className="space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">{st.label}</span>
                        <Counter
                          value={st.value}
                          decimals={st.decimals}
                          suffix={st.suffix}
                          className="text-slate-950 font-bold"
                        />
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={isInView ? { width: st.barWidth } : {}}
                          transition={{
                            duration: 1.1,
                            delay: 0.75 + index * 0.1,
                            ease: premiumEase,
                          }}
                          className="h-full bg-teal-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
