import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

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

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200/80 transition-all">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand: cognitive with Geometric C Monogram */}
        <div className="flex items-center gap-2.5">
          {/* Modular Geometric "C" Logo SVG */}
          <div className="w-7 h-7 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              {/* Top Bar of C */}
              <rect x="6" y="5" width="20" height="6.5" rx="3.25" fill="#F26207" />
              {/* Left Pillar of C */}
              <rect x="6" y="5" width="6.5" height="22" rx="3.25" fill="#F26207" />
              {/* Bottom Bar of C */}
              <rect x="6" y="20.5" width="20" height="6.5" rx="3.25" fill="#F26207" />
            </svg>
          </div>
          
          <div className="flex items-baseline gap-1.5">
            <span className="font-black text-xl text-[#0B1419] tracking-tight font-sans">
              cognitive
            </span>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider font-mono">
              assessment™
            </span>
          </div>
        </div>

        {/* Right side: Clean Minimalist Timer */}
        {isQuizActive && (
          <div className="flex items-center gap-1.5 text-neutral-700 font-mono text-sm font-semibold bg-neutral-50 px-3 py-1 rounded-lg border border-neutral-200">
            <Clock className="w-4 h-4 text-[#F26207]" />
            <span>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
