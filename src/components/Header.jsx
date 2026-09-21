import React, { useState, useEffect } from 'react';
import { ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';

export default function Header({ currentStep, totalSteps, isQuizActive }) {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

  useEffect(() => {
    if (!isQuizActive) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isQuizActive]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressPercent = Math.min(100, Math.round((currentStep / totalSteps) * 100));

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg">
                Worldwide <span className="text-sky-600">IQ Test</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3 h-3" /> Standar Resmi
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">Kalibrasi Standar WAIS-IV Internasional</p>
          </div>
        </div>

        {/* Right side: Timer & Badges */}
        <div className="flex items-center gap-3">
          {isQuizActive && (
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-xl font-mono font-semibold text-sm shadow-xs">
              <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
          )}

          <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span className="font-medium">Verifikasi Akurat</span>
          </div>
        </div>
      </div>

      {/* Progress Bar (Visible during quiz) */}
      {isQuizActive && (
        <div className="w-full bg-slate-100 h-1.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </header>
  );
}
