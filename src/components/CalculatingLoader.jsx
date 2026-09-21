import React, { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, Brain, Sparkles } from 'lucide-react';

const checklist = [
  "Mengukur kecepatan respon & konsistensi logika...",
  "Memetakan Arketipe Kognitif & Pola Pikir dominan...",
  "Mengkalibrasi skor dengan 2.400.000+ benchmark populasi...",
  "Menyusun Laporan Analisis Eksekutif & Sertifikat Digital..."
];

export default function CalculatingLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

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
            className="text-slate-100"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="text-indigo-600 transition-all duration-75 ease-linear"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-slate-950">{progress}%</span>
          <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider">Menganalisis</span>
        </div>
      </div>

      <h2 className="text-2xl font-extrabold text-slate-950 mb-2">
        Memproses Profil Kognitif Anda...
      </h2>
      <p className="text-xs sm:text-sm text-slate-500 mb-8">
        Personality.co Psychometric Engine sedang menyusun arketipe kecerdasan Anda.
      </p>

      {/* Dynamic Checklist Box */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft text-left space-y-3.5">
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
                  ? 'text-indigo-700 font-semibold'
                  : 'text-slate-400'
              }`}
            >
              {isDone ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              ) : isActive ? (
                <Loader2 className="w-4 h-4 text-indigo-600 animate-spin shrink-0" />
              ) : (
                <div className="w-4 h-4 rounded-full border border-slate-200 shrink-0" />
              )}
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
