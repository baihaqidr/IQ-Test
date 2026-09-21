import React, { useState } from 'react';
import { HelpCircle, SkipForward, Sparkles, Brain } from 'lucide-react';

export default function QuizStep({ question, questionIndex, totalQuestions, onAnswer, onSkip }) {
  const [selectedOpt, setSelectedOpt] = useState(null);

  const handleSelect = (option) => {
    setSelectedOpt(option.id);
    setTimeout(() => {
      onAnswer(question.id, option);
      setSelectedOpt(null);
    }, 200);
  };

  const getDifficultyColor = (diff) => {
    if (diff === "Dasar") return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (diff === "Menengah") return "bg-indigo-50 text-indigo-700 border-indigo-200";
    if (diff === "Lanjutan") return "bg-amber-50 text-amber-700 border-amber-200";
    return "bg-purple-50 text-purple-700 border-purple-200";
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-10 animate-in fade-in duration-150">
      {/* Top Question Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Pertanyaan {questionIndex + 1} / {totalQuestions}
          </span>
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getDifficultyColor(question.difficulty)}`}>
            {question.difficulty || 'Standar'}
          </span>
        </div>
        
        <button
          onClick={onSkip}
          className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 transition-colors cursor-pointer"
        >
          <span>Lewati</span>
          <SkipForward className="w-3 h-3" />
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-2">
        {question.title}
      </h2>
      <p className="text-xs sm:text-sm text-slate-500 mb-6 font-normal">
        {question.subtitle}
      </p>

      {/* The 3x3 Matrix Grid Container */}
      <div className="bg-white rounded-3xl p-4 sm:p-7 border border-slate-200/80 shadow-soft mb-6">
        <div className="max-w-xs sm:max-w-sm mx-auto">
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200">
            {question.grid.map((cell, idx) => (
              <div
                key={cell.id || idx}
                className={`aspect-square rounded-xl flex items-center justify-center relative overflow-hidden transition-all ${
                  cell.isTarget
                    ? 'bg-indigo-50 border-2 border-dashed border-indigo-400 text-indigo-600 shadow-inner'
                    : 'bg-white border border-slate-200/90 shadow-xs'
                }`}
              >
                {cell.isTarget ? (
                  <div className="flex flex-col items-center justify-center animate-pulse">
                    <span className="text-2xl sm:text-3xl font-black text-indigo-600">?</span>
                  </div>
                ) : (
                  cell.svg
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Answer Options (6 choices A - F) */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
          <span>Pilih Pola yang Tepat (A – F):</span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3">
          {question.options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelect(opt)}
              className={`aspect-square rounded-2xl p-1.5 sm:p-2 flex flex-col items-center justify-between border-2 transition-all relative group cursor-pointer ${
                selectedOpt === opt.id
                  ? 'border-indigo-600 bg-indigo-50/70 shadow-md scale-95'
                  : 'border-slate-200 bg-white hover:border-indigo-500 hover:shadow-sm'
              }`}
            >
              {/* Option Badge */}
              <span className={`text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                selectedOpt === opt.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700'
              }`}>
                {opt.id}
              </span>

              {/* Option Vector graphic */}
              <div className="w-full h-full flex items-center justify-center p-1">
                {opt.svg}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="text-center mt-6">
        <p className="text-[11px] text-slate-400">
          Uji penalaran matriks murni Personality.co • Mengukur kecerdasan cair (*Fluid Intelligence*).
        </p>
      </div>
    </div>
  );
}
