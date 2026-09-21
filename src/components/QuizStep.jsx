import React, { useState } from 'react';
import { HelpCircle, ChevronRight, SkipForward } from 'lucide-react';

export default function QuizStep({ question, questionIndex, totalQuestions, onAnswer, onSkip }) {
  const [selectedOpt, setSelectedOpt] = useState(null);

  const handleSelect = (option) => {
    setSelectedOpt(option.id);
    // Smooth transition
    setTimeout(() => {
      onAnswer(question.id, option);
      setSelectedOpt(null);
    }, 220);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8">
      {/* Top Question Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
            Pertanyaan {questionIndex + 1} dari {totalQuestions}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            {question.title}
          </h2>
        </div>
        <button
          onClick={onSkip}
          className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
        >
          <span>Lewati</span>
          <SkipForward className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-xs sm:text-sm text-slate-500 mb-6">
        {question.subtitle}
      </p>

      {/* The 3x3 Matrix Grid Container */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-card mb-6">
        <div className="max-w-xs sm:max-w-sm mx-auto">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-slate-100 p-3 sm:p-4 rounded-xl border border-slate-200">
            {question.grid.map((cell, idx) => (
              <div
                key={cell.id || idx}
                className={`aspect-square rounded-lg flex items-center justify-center relative overflow-hidden transition-all ${
                  cell.isTarget
                    ? 'bg-sky-50 border-2 border-dashed border-sky-400 text-sky-600 shadow-inner'
                    : 'bg-white border border-slate-300 shadow-xs'
                }`}
              >
                {cell.isTarget ? (
                  <div className="flex flex-col items-center justify-center animate-pulse">
                    <span className="text-2xl sm:text-3xl font-black text-sky-600">?</span>
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
          <HelpCircle className="w-4 h-4 text-sky-600" />
          <span>Pilih Jawaban yang Tepat:</span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3">
          {question.options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelect(opt)}
              className={`aspect-square rounded-xl p-1.5 sm:p-2 flex flex-col items-center justify-between border-2 transition-all relative group cursor-pointer ${
                selectedOpt === opt.id
                  ? 'border-sky-600 bg-sky-50 shadow-md scale-95'
                  : 'border-slate-200 bg-white hover:border-sky-500 hover:shadow-md'
              }`}
            >
              {/* Option Badge */}
              <span className={`text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center ${
                selectedOpt === opt.id ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-700'
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
          Tip: Setiap soal menguji kemampuan penalaran logika, bukan hafalan kata atau angka.
        </p>
      </div>
    </div>
  );
}
