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
        {/* Brand: Option 2 Neural Aperture C + clean 'cognitive' wordmark */}
        <div className="flex items-center gap-2.5">
          {/* Option 2 Logo: Neural Aperture C */}
          <div className="w-8 h-8 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <path
                d="M24 9.5C22 7.3 19.1 6 16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26C19.1 26 22 24.7 24 22.5"
                stroke="#F26207"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="16" cy="16" r="3" fill="#0B1419" />
            </svg>
          </div>
          
          <span className="font-black text-2xl text-[#0B1419] tracking-tight font-sans">
            cognitive
          </span>
        </div>

        {/* Right side: Clean Minimalist Timer */}
        {isQuizActive && (
          <div className="flex items-center gap-1.5 text-neutral-700 font-mono text-sm font-semibold bg-neutral-50 px-3 py-1.5 rounded-xl border border-neutral-200">
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
