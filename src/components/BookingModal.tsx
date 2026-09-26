import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Calendar, Clock, User, Phone, Mail, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { TREATMENTS, DOCTORS } from '../data/dentalData';
import { Treatment, Doctor } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: Treatment | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatment,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment>(
    preselectedTreatment || TREATMENTS[0]
  );
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS[0]);
  const [selectedDate, setSelectedDate] = useState('2026-10-02');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if preselected changes
  React.useEffect(() => {
    if (preselectedTreatment) {
      setSelectedTreatment(preselectedTreatment);
    }
  }, [preselectedTreatment]);

  const availableDates = [
    { label: 'Fri, Oct 2', value: '2026-10-02' },
    { label: 'Mon, Oct 5', value: '2026-10-05' },
    { label: 'Tue, Oct 6', value: '2026-10-06' },
    { label: 'Wed, Oct 7', value: '2026-10-07' },
    { label: 'Thu, Oct 8', value: '2026-10-08' },
  ];

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:30 AM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const code = 'PD-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(code);
      setStep(4);
    }, 600);
  };

  const handleReset = () => {
    setStep(1);
    setConfirmationCode('');
    onClose();
  };

  if (!isOpen) return null;

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
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div>
              <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider block">
                Appointment Scheduling
              </span>
              <h3 className="font-display text-lg font-semibold text-slate-900">
                {step === 4 ? 'Appointment Confirmed' : 'Book Your Clinical Visit'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress (Steps 1-3) */}
          {step < 4 && (
            <div className="px-6 pt-4 pb-2 bg-slate-50/30 border-b border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
              <span className={step >= 1 ? 'text-teal-700 font-semibold' : ''}>1. Treatment</span>
              <span>·</span>
              <span className={step >= 2 ? 'text-teal-700 font-semibold' : ''}>2. Doctor & Time</span>
              <span>·</span>
              <span className={step >= 3 ? 'text-teal-700 font-semibold' : ''}>3. Patient Info</span>
            </div>
          )}

          {/* Step 1: Choose Treatment */}
          {step === 1 && (
            <div className="p-6 space-y-4">
              <div className="text-sm text-slate-600">Select the treatment or consultation you need:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                {TREATMENTS.map((treatment) => {
                  const isSelected = selectedTreatment.id === treatment.id;
                  return (
                    <button
                      key={treatment.id}
                      type="button"
                      onClick={() => setSelectedTreatment(treatment)}
                      className={`text-left p-4 rounded-2xl border transition-all text-xs ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/70 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-slate-900 text-sm">{treatment.name}</span>
                        <span className="text-[10px] text-teal-700 font-medium px-2 py-0.5 rounded-full bg-white border border-teal-200">
                          {treatment.painRating}
                        </span>
                      </div>
                      <p className="text-slate-500 line-clamp-2 leading-relaxed">{treatment.description}</p>
                      <div className="mt-2 text-[11px] text-slate-400">Duration: {treatment.duration}</div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all"
                >
                  <span>Select Date & Specialist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Choose Doctor & Date/Time */}
          {step === 2 && (
            <div className="p-6 space-y-5">
              {/* Doctor Selection */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-2">
                  Select Attending Specialist
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {DOCTORS.map((doc) => {
                    const isSelected = selectedDoctor.id === doc.id;
                    return (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => setSelectedDoctor(doc)}
                        className={`text-left p-3 rounded-2xl border transition-all ${
                          isSelected
                            ? 'border-teal-600 bg-teal-50/70'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-semibold text-xs text-slate-900">{doc.name}</div>
                        <div className="text-[10px] text-slate-500 truncate">{doc.role}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-2">
                  Preferred Appointment Date
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableDates.map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => setSelectedDate(d.value)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                        selectedDate === d.value
                          ? 'border-teal-600 bg-teal-600 text-white shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-2">
                  Available Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {availableTimes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`py-1.5 px-2 rounded-xl text-center text-xs font-medium border transition-all ${
                        selectedTime === t
                          ? 'border-teal-600 bg-teal-50 text-teal-800 font-semibold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all"
                >
                  <span>Patient Contact Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Patient Information Form */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Dental Insurance Provider (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Delta Dental, Cigna, Aetna, etc."
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Specific Concerns or Dental Anxiety Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about sensitive teeth, phobias, or past experiences so we can tailor your care."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                />
              </div>

              {/* Summary Pill Box */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div>
                  <span className="font-semibold text-slate-900">{selectedTreatment.name}</span> with{' '}
                  <span className="text-teal-700 font-medium">{selectedDoctor.name}</span>
                </div>
                <div className="font-mono text-slate-500">
                  {selectedDate} at {selectedTime}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Securing Slot...</span>
                  ) : (
                    <>
                      <span>Confirm & Book Appointment</span>
                      <CheckCircle className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Confirmation Screen */}
          {step === 4 && (
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-display text-2xl font-bold text-slate-900 mb-1">
                  Appointment Confirmed!
                </h4>
                <p className="text-xs text-slate-500">
                  Confirmation code:{' '}
                  <span className="font-mono font-bold text-teal-700">{confirmationCode}</span>
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Treatment:</span>
                  <span className="font-semibold text-slate-900">{selectedTreatment.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-semibold text-slate-900">{selectedDoctor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-semibold text-teal-700">
                    {selectedDate} at {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-semibold text-slate-900">{patientName || 'Eleanor Vance'}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 max-w-sm mx-auto">
                A calendar invitation and pre-visit check-in link have been sent to{' '}
                <span className="font-semibold text-slate-700">{patientEmail || 'your email'}</span>.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-2.5 rounded-full text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Close & Return to Studio
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
