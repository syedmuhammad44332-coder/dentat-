import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/dentalData';
import { BlogPost } from '../types';

interface BlogInsightsProps {
  onSelectArticle: (article: BlogPost) => void;
  onViewAllArticles: () => void;
}

export const BlogInsights: React.FC<BlogInsightsProps> = ({
  onSelectArticle,
  onViewAllArticles,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const premiumEase = [0.22, 1, 0.36, 1] as const;

  const cardDelays = [0, 0.12, 0.24];

  return (
    <section
      id="insights"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading & Eyebrow */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: premiumEase }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-700 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
            <span>Clinical Insights & Innovations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: premiumEase }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18] text-balance"
          >
            Advanced Dental Care Ensures Precision Comfort And Long Lasting Healthy Smiles.
          </motion.h2>
        </div>

        {/* 3 Blog Cards with Staggered Entrance (0ms, 120ms, 240ms) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 0.2 + cardDelays[index],
                ease: premiumEase,
              }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl bg-white p-5 sm:p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)] border border-slate-200/70 flex flex-col justify-between transition-all duration-300 cursor-pointer"
              onClick={() => onSelectArticle(post)}
            >
              <div>
                {/* Image Container with scale 1.05 -> 1 on reveal and hover scale 1.04 */}
                <div className="relative rounded-2xl overflow-hidden aspect-16/10 mb-5 bg-slate-100">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    initial={{ scale: 1.05 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.9,
                      delay: 0.3 + cardDelays[index],
                      ease: premiumEase,
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-104"
                  />
                  
                  {/* Category Badge: fades in after image, slightly slides upward */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.45 + cardDelays[index],
                      ease: premiumEase,
                    }}
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/95 backdrop-blur-md text-teal-800 shadow-xs border border-white/60"
                  >
                    {post.category}
                  </motion.div>
                </div>

                {/* Metadata: Author, Reading Time, Date */}
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      referrerPolicy="no-referrer"
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span className="font-medium text-slate-700">{post.author.name}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title: reveals after metadata, hover subtly changes accent color */}
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.55 + cardDelays[index],
                    ease: premiumEase,
                  }}
                  className="font-display text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-teal-700 transition-colors duration-200 line-clamp-2 leading-snug mb-3"
                >
                  {post.title}
                </motion.h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Learn More link: arrow moves 4px right on hover, animated underline */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="relative inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-1" />
                  
                  {/* Underline animates from 0% to 100% on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full" />
                </span>

                <span className="text-[11px] text-slate-400 font-mono">
                  0{index + 1}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Read More Blog Button: Centered turquoise pill button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: premiumEase }}
          className="mt-14 text-center"
        >
          <button
            type="button"
            onClick={onViewAllArticles}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-[0_4px_20px_rgba(13,148,136,0.25)] hover:shadow-[0_8px_30px_rgba(13,148,136,0.38)] transition-all duration-250 cursor-pointer active:translate-y-0 hover:-translate-y-0.5"
          >
            <span>Explore All Clinical Insights</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
