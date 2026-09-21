import React, { useState, useEffect } from 'react';
import { ShieldCheck, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export default function Header({ currentStep, totalSteps, isQuizActive }) {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes

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
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-4xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Brand Logo: personality.co */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-xs">
            <span className="font-black text-sm tracking-tighter bg-gradient-to-tr from-indigo-400 to-violet-300 bg-clip-text text-transparent">P</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-950 tracking-tight text-lg">
                personality<span className="text-indigo-600">.co</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-100">
                <Sparkles className="w-3 h-3 text-indigo-600" /> Cognitive IQ Test
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block font-medium">Standardized Psychometric Matrix Assessment</p>
          </div>
        </div>

        {/* Right side: Timer & Badges */}
        <div className="flex items-center gap-3">
          {isQuizActive && (
            <div className="flex items-center gap-1.5 bg-slate-900 text-white px-3 py-1.5 rounded-full font-mono font-medium text-xs shadow-xs">
              <Clock className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
          )}

          <div className="hidden md:flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200/60">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-medium text-[11px]">WAIS-IV Normed</span>
          </div>
        </div>
      </div>

      {/* Progress Bar (Visible during quiz) */}
      {isQuizActive && (
        <div className="w-full bg-slate-100 h-1 overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </header>
  );
}
