import React, { useState, useEffect } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

const calculationStages = [
  'Mengkalibrasi respons penalaran matriks...',
  'Menghitung indeks kecerdasan spasial & abstraksi...',
  'Membandingkan dengan norma populasi WAIS-IV (2.4M data)...',
  'Menyusun arketipe kognitif & menerbitkan sertifikat...'
];

export default function CalculatingLoader({ onComplete }) {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setCurrentStageIndex((prev) => {
        if (prev < calculationStages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1100);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(stageInterval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 90);

    return () => {
      clearInterval(stageInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="max-w-md mx-auto px-4 py-12 sm:py-16 text-center">
      {/* Option 2 Logo: Neural Aperture C Animated */}
      <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center mx-auto mb-6 relative">
        <div className="w-10 h-10">
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full animate-pulse">
            <path
              d="M24 9.5C22 7.3 19.1 6 16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26C19.1 26 22 24.7 24 22.5"
              stroke="#F26207"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="16" cy="16" r="3" fill="#0B1419" />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-black text-[#0B1419] tracking-tight">
        Menganalisis Profil Kognitif
      </h2>
      <p className="text-xs text-neutral-500 mt-1 font-mono">
        cognitive Psychometric Engine v4.2
      </p>

      {/* Progress Counter & Bar */}
      <div className="my-8">
        <div className="flex justify-between text-xs font-mono text-neutral-600 mb-2">
          <span>Proses Kalibrasi</span>
          <span className="font-bold text-[#F26207]">{progress}%</span>
        </div>
        <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-[#F26207] h-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Checklist of stages */}
      <div className="bg-white rounded-2xl p-5 border border-neutral-200/90 shadow-2xs text-left space-y-3 font-mono text-xs">
        {calculationStages.map((stage, idx) => {
          const isDone = idx < currentStageIndex;
          const isCurrent = idx === currentStageIndex;
          return (
            <div
              key={idx}
              className={`flex items-center gap-3 transition-opacity duration-300 ${
                isDone || isCurrent ? 'opacity-100' : 'opacity-30'
              }`}
            >
              {isDone ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : isCurrent ? (
                <Loader2 className="w-4 h-4 text-[#F26207] animate-spin shrink-0" />
              ) : (
                <div className="w-4 h-4 rounded-full border border-neutral-300 shrink-0" />
              )}
              <span className={isCurrent ? 'font-bold text-[#0B1419]' : 'text-neutral-600'}>
                {stage}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
