import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Clock, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatment: Treatment) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  if (!treatment) return null;

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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div>
              <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider block">
                {treatment.category}
              </span>
              <h3 className="font-display text-xl font-semibold text-slate-900">
                {treatment.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100/80">
                <div className="flex items-center gap-1.5 text-xs text-teal-800 font-medium mb-1">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>Clinical Duration</span>
                </div>
                <div className="text-base font-bold text-slate-900">{treatment.duration}</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100/80">
                <div className="flex items-center gap-1.5 text-xs text-teal-800 font-medium mb-1">
                  <Zap className="w-3.5 h-3.5 text-teal-600" />
                  <span>Comfort Rating</span>
                </div>
                <div className="text-base font-bold text-slate-900">{treatment.painRating}</div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                Procedure Overview
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {treatment.description}
              </p>
            </div>

            {/* Technology Used */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Primary Technology & Instrumentation</span>
              </div>
              <div className="text-xs text-slate-600">{treatment.technology}</div>
            </div>

            {/* Key Clinical Benefits */}
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2.5">
                Patient Advantages
              </h4>
              <div className="space-y-2">
                {treatment.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookTreatment(treatment);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all"
              >
                <span>Book This Procedure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
