import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function QuizStep({ question, questionIndex, totalQuestions, onAnswer, onSkip }) {
  const [selectedOpt, setSelectedOpt] = useState(null);

  const handleSelect = (option) => {
    setSelectedOpt(option.id);
    setTimeout(() => {
      onAnswer(question.id, option);
      setSelectedOpt(null);
    }, 200);
  };

  const progressPercent = Math.round(((questionIndex) / totalQuestions) * 100);

  return (
    <div className="max-w-xl mx-auto px-3 sm:px-4 py-4 sm:py-6 animate-in fade-in duration-150">
      {/* Top Progress Stats */}
      <div className="mb-2">
        <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-1.5 px-0.5 font-bold">
          <span>{progressPercent} %</span>
          <span>Step {questionIndex + 1} of {totalQuestions}</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#F26207] h-full transition-all duration-300 ease-out"
            style={{ width: `${Math.max(4, ((questionIndex + 1) / totalQuestions) * 100)}%` }}
          />
        </div>
      </div>

      {/* Main Test Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-neutral-200/90 shadow-sm mt-3">
        {/* 3x3 Matrix Grid Container */}
        <div className="max-w-[300px] sm:max-w-[340px] mx-auto mb-5">
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {question.grid.map((cell, idx) => (
              <div
                key={cell.id || idx}
                className="aspect-square flex items-center justify-center relative"
              >
                {cell.isTarget ? (
                  /* Solid Target Box with Question Mark */
                  <div className="w-full h-full rounded-2xl bg-[#10b981] text-white flex items-center justify-center shadow-sm animate-pulse">
                    <span className="text-2xl sm:text-3xl font-black">?</span>
                  </div>
                ) : (
                  /* Clean Shape Box - Scaled to 70% with breathing room */
                  <div className="w-full h-full rounded-2xl border border-neutral-200/90 bg-neutral-50/40 hover:bg-white flex items-center justify-center shadow-2xs transition-all">
                    <div className="w-[70%] h-[70%] flex items-center justify-center">
                      {cell.svg}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section Label */}
        <div className="text-center mb-3">
          <h3 className="text-xs sm:text-sm font-semibold text-neutral-700">
            Choose your answer
          </h3>
        </div>

        {/* Answer Options (A, B, C, D, E, F) - Scaled to 70% */}
        <div className={`grid gap-2 sm:gap-2.5 mb-4 ${
          question.options.length <= 4 
            ? 'grid-cols-2 sm:grid-cols-4' 
            : 'grid-cols-3 sm:grid-cols-6'
        }`}>
          {question.options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelect(opt)}
              className={`aspect-square rounded-xl p-1.5 sm:p-2 flex flex-col justify-between border-2 transition-all cursor-pointer relative group ${
                selectedOpt === opt.id
                  ? 'border-[#F26207] bg-orange-50/60 ring-2 ring-[#F26207]/30 shadow-sm scale-95'
                  : 'border-neutral-200/90 bg-neutral-50/40 hover:bg-white hover:border-[#F26207] hover:shadow-xs'
              }`}
            >
              {/* Option Letter Tag in Top-Left */}
              <span className={`text-[10px] sm:text-xs font-bold font-mono text-left transition-colors ${
                selectedOpt === opt.id ? 'text-[#F26207]' : 'text-neutral-400 group-hover:text-[#0B1419]'
              }`}>
                {opt.id}
              </span>

              {/* Graphic Icon - 70% Scale */}
              <div className="w-full flex-1 flex items-center justify-center">
                <div className="w-[70%] h-[70%] flex items-center justify-center">
                  {opt.svg}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Centered Skip Button */}
        <div className="text-center pt-1">
          <button
            type="button"
            onClick={onSkip}
            className="text-xs font-semibold text-neutral-500 hover:text-[#0B1419] transition-colors cursor-pointer py-1 px-3 rounded-lg hover:bg-neutral-100"
          >
            Skip
          </button>
        </div>
      </div>

      {/* Centered Bottom Pagination */}
      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-neutral-500 font-mono">
        <button
          type="button"
          disabled={questionIndex === 0}
          className="p-1 text-neutral-400 hover:text-neutral-800 disabled:opacity-30 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1.5">
          <span className="w-6 h-6 rounded-md bg-[#0B1419] text-white flex items-center justify-center font-bold text-[11px]">
            {questionIndex + 1}
          </span>
          {questionIndex + 2 <= totalQuestions && (
            <span className="w-6 h-6 rounded-md text-neutral-600 flex items-center justify-center text-[11px]">
              {questionIndex + 2}
            </span>
          )}
          <span className="text-neutral-400">...</span>
          <span className="w-6 h-6 rounded-md text-neutral-600 flex items-center justify-center text-[11px]">
            {totalQuestions}
          </span>
        </div>

        <button
          type="button"
          onClick={onSkip}
          disabled={questionIndex + 1 >= totalQuestions}
          className="p-1 text-neutral-400 hover:text-neutral-800 disabled:opacity-30 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
