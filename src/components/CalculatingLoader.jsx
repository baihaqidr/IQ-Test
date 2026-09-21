import React, { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, Sparkles, Brain } from 'lucide-react';

const checklist = [
  "Mengukur kecepatan respon kognitif...",
  "Menganalisis konsistensi penalaran logika matriks...",
  "Membandingkan dengan 1.250.000+ data responden di Indonesia...",
  "Menghitung skor IQ final dan menyiapkan sertifikat digital..."
];

export default function CalculatingLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 45); // ~4.5 seconds total calculation time

    return () => clearInterval(timer);
  }, [onComplete]);

  // Radius for circular progress
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="max-w-md mx-auto px-4 py-12 text-center">
      {/* Brain Icon / Circular Progress */}
      <div className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="text-slate-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="text-sky-600 transition-all duration-75 ease-linear"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-black text-slate-900">{progress}%</span>
          <span className="text-[10px] uppercase font-bold text-sky-600 tracking-wider">Kalkulasi</span>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
        Menganalisis Hasil Kognitif Anda...
      </h2>
      <p className="text-xs sm:text-sm text-slate-500 mb-8">
        Sistem algoritma standar WAIS-IV sedang mengkalibrasi seluruh jawaban Anda.
      </p>

      {/* Dynamic Checklist Box */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-card text-left space-y-3.5">
        {checklist.map((item, index) => {
          const threshold = (index + 1) * 25;
          const isDone = progress >= threshold;
          const isActive = progress >= threshold - 25 && progress < threshold;

          return (
            <div
              key={index}
              className={`flex items-center gap-3 text-xs sm:text-sm transition-all duration-300 ${
                isDone
                  ? 'text-slate-900 font-medium'
                  : isActive
                  ? 'text-sky-700 font-semibold'
                  : 'text-slate-400'
              }`}
            >
              {isDone ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              ) : isActive ? (
                <Loader2 className="w-4 h-4 text-sky-600 animate-spin shrink-0" />
              ) : (
                <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
              )}
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
