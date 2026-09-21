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
    <div className="max-w-xl mx-auto px-4 py-6 sm:py-10 animate-in fade-in duration-150">
      {/* Top Progress Stats (Exact Layout from Screenshot) */}
      <div className="mb-2">
        <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-1.5 px-0.5">
          <span>{progressPercent} %</span>
          <span>Step {questionIndex + 1} of {totalQuestions}</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-neutral-200/80 h-1 rounded-full overflow-hidden">
          <div
            className="bg-[#F26207] h-full transition-all duration-300 ease-out"
            style={{ width: `${Math.max(4, ((questionIndex + 1) / totalQuestions) * 100)}%` }}
          />
        </div>
      </div>

      {/* Main Test Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-sm mt-3">
        {/* 3x3 Matrix Grid */}
        <div className="max-w-[280px] sm:max-w-[320px] mx-auto mb-8">
          <div className="grid grid-cols-3 gap-3 sm:gap-4.5 p-2 sm:p-3">
            {question.grid.map((cell, idx) => (
              <div
                key={cell.id || idx}
                className="aspect-square flex items-center justify-center relative"
              >
                {cell.isTarget ? (
                  /* Solid Target Circle with Question Mark (from screenshot) */
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#10b981] text-white flex items-center justify-center shadow-sm animate-pulse">
                    <span className="text-2xl sm:text-3xl font-black">?</span>
                  </div>
                ) : (
                  /* Shape Graphic */
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#162033] bg-white flex items-center justify-center p-2 shadow-xs transition-transform hover:scale-105">
                    {cell.svg}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Question Title */}
        <div className="text-center mb-4">
          <h3 className="text-sm font-semibold text-neutral-800">
            Choose your answer
          </h3>
        </div>

        {/* Answer Options (A, B, C, D, E, F) */}
        <div className={`grid gap-2.5 sm:gap-3 mb-6 ${
          question.options.length <= 4 
            ? 'grid-cols-2 sm:grid-cols-4' 
            : 'grid-cols-3 sm:grid-cols-6'
        }`}>
          {question.options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelect(opt)}
              className={`aspect-square rounded-xl p-2 flex flex-col justify-between border transition-all cursor-pointer relative group ${
                selectedOpt === opt.id
                  ? 'border-[#F26207] bg-orange-50/50 ring-2 ring-[#F26207]/20 shadow-xs'
                  : 'border-neutral-200/90 bg-neutral-50/40 hover:bg-white hover:border-[#F26207] hover:shadow-xs'
              }`}
            >
              {/* Option Letter Tag in Top-Left (from screenshot) */}
              <span className={`text-[10px] sm:text-xs font-bold font-mono text-left transition-colors ${
                selectedOpt === opt.id ? 'text-[#F26207]' : 'text-neutral-400 group-hover:text-neutral-800'
              }`}>
                {opt.id}
              </span>

              {/* Graphic Icon */}
              <div className="w-full flex-1 flex items-center justify-center p-1">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-neutral-300/80 bg-white flex items-center justify-center p-1.5 shadow-2xs">
                  {opt.svg}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Centered Skip Button (from screenshot) */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onSkip}
            className="text-xs sm:text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer py-1 px-4 rounded-md hover:bg-neutral-100"
          >
            Skip
          </button>
        </div>
      </div>

      {/* Centered Bottom Pagination (from screenshot) */}
      <div className="flex items-center justify-center gap-2 mt-6 text-xs text-neutral-500 font-mono">
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
