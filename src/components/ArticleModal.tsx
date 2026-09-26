import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, ArrowRight, Share2, Check } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onBookCall,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
              {article.category}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors text-xs flex items-center gap-1"
                title="Share link"
              >
                {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 leading-snug">
              {article.title}
            </h2>

            {/* Author bar */}
            <div className="flex items-center justify-between py-3 border-y border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover shadow-inner"
                />
                <div>
                  <div className="font-semibold text-slate-900">{article.author.name}</div>
                  <div className="text-[11px] text-slate-400">{article.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.readTime}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.date}</span>
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden aspect-16/9 bg-slate-100">
              <img
                src={article.image}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Paragraphs */}
            <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-4 leading-relaxed">
              <p className="text-base text-slate-800 font-medium leading-relaxed">
                {article.excerpt}
              </p>
              <p>
                In conventional practice, patient anxiety frequently stems from physical discomfort
                and mechanical impression trays. Modern clinical dentistry has undergone a fundamental
                paradigm shift: utilizing optical structured-light coherence and sub-millimeter
                diagnostic algorithms that capture oral anatomy in real-time.
              </p>
              <p>
                By digitizing the workflow, restorative ceramists receive instantaneous 3D mesh files
                with sub-5 micron tolerance. This eliminates the dimensional inaccuracies typical of
                traditional alginate and polyvinyl siloxane materials, allowing crowns, veneers, and
                aligners to seat with seamless biocompatible margins.
              </p>
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 text-xs text-teal-900">
                <span className="font-bold block mb-1">Key Clinical Takeaway:</span>
                Patients experience faster appointments, zero gag reflex triggers, and restoration
                longevity exceeding 15+ years under routine care.
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Have questions about this procedure? Consult with our clinical team.
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookCall();
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all"
              >
                <span>Book Clinical Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
