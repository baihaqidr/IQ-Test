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
        {/* Replit Official Logo & Wordmark */}
        <div className="flex items-center gap-2.5">
          {/* Replit Official 3-Block SVG Icon */}
          <div className="w-7 h-7 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <path d="M7 6C7 4.89543 7.89543 4 9 4H19C20.1046 4 21 4.89543 21 6V11C21 12.1046 20.1046 13 19 13H9C7.89543 13 7 12.1046 7 11V6Z" fill="#F26207"/>
              <path d="M13 13C13 11.8954 13.8954 11 15 11H25C26.1046 11 27 11.8954 27 13V18C27 19.1046 26.1046 20 25 20H15C13.8954 20 13 19.1046 13 18V13Z" fill="#F26207"/>
              <path d="M7 20C7 18.8954 7.89543 18 9 18H19C20.1046 18 21 18.8954 21 20V25C21 26.1046 20.1046 27 19 27H9C7.89543 27 7 26.1046 7 25V20Z" fill="#F26207"/>
            </svg>
          </div>
          
          <div className="flex items-baseline gap-1.5">
            <span className="font-black text-xl text-[#0B1419] tracking-tight font-sans">
              replit
            </span>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider font-mono">
              intelligence™
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
