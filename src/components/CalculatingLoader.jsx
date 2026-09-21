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
      {/* Replit Prompt Logo Animated */}
      <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center mx-auto mb-6 relative">
        <div className="w-9 h-9">
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full animate-pulse">
            <path d="M7 6C7 4.89543 7.89543 4 9 4H19C20.1046 4 21 4.89543 21 6V11C21 12.1046 20.1046 13 19 13H9C7.89543 13 7 12.1046 7 11V6Z" fill="#F26207"/>
            <path d="M13 13C13 11.8954 13.8954 11 15 11H25C26.1046 11 27 11.8954 27 13V18C27 19.1046 26.1046 20 25 20H15C13.8954 20 13 19.1046 13 18V13Z" fill="#F26207"/>
            <path d="M7 20C7 18.8954 7.89543 18 9 18H19C20.1046 18 21 18.8954 21 20V25C21 26.1046 20.1046 27 19 27H9C7.89543 27 7 26.1046 7 25V20Z" fill="#F26207"/>
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-black text-[#0B1419] tracking-tight">
        Menganalisis Profil Kognitif
      </h2>
      <p className="text-xs text-neutral-500 mt-1 font-mono">
        Replit Neural Psychometric Engine v4.2
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
