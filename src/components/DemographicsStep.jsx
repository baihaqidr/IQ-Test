import React, { useState } from 'react';
import { User, Users, Shield, Award, ArrowRight } from 'lucide-react';

const ageGroups = [
  { label: '<18 thn', value: '<18' },
  { label: '18 – 24 thn', value: '18-24' },
  { label: '25 – 34 thn', value: '25-34' },
  { label: '35 – 44 thn', value: '35-44' },
  { label: '45 – 54 thn', value: '45-54' },
  { label: '55+ thn', value: '55+' },
];

export default function DemographicsStep({ onStart }) {
  const [gender, setGender] = useState(null);
  const [ageGroup, setAgeGroup] = useState(null);

  const handleNext = () => {
    if (gender && ageGroup) {
      onStart({ gender, ageGroup });
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6 sm:py-10">
      {/* Hero Badge */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[#0B1419] text-xs font-medium mb-3 font-mono">
          <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
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
          <span>cognitive • WAIS-IV Standard</span>
        </div>
        
        {/* Title: Not bold, no arketipe kognitif text, compact */}
        <h1 className="text-2xl sm:text-3xl font-medium text-[#0B1419] tracking-tight leading-tight">
          Temukan Potensi <span className="text-[#F26207] font-semibold">Kecerdasan IQ</span> Anda
        </h1>
        
        <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-md mx-auto font-normal">
          Uji penalaran matriks terstandarisasi WAIS-IV.
        </p>
      </div>

      {/* Main Interactive Form Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-neutral-200/90 shadow-sm">
        {/* Step 1: Gender */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-neutral-700 mb-2 font-mono">
            1. Jenis Kelamin <span className="text-[#F26207]">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setGender('male')}
              className={`flex items-center justify-center gap-2.5 p-3.5 rounded-xl border-2 font-medium transition-all cursor-pointer ${
                gender === 'male'
                  ? 'border-[#F26207] bg-orange-50/50 text-[#0B1419] shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${gender === 'male' ? 'bg-[#F26207] text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-sm">Pria</span>
            </button>

            <button
              type="button"
              onClick={() => setGender('female')}
              className={`flex items-center justify-center gap-2.5 p-3.5 rounded-xl border-2 font-medium transition-all cursor-pointer ${
                gender === 'female'
                  ? 'border-[#F26207] bg-orange-50/50 text-[#0B1419] shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${gender === 'female' ? 'bg-[#F26207] text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-sm">Wanita</span>
            </button>
          </div>
        </div>

        {/* Step 2: Age Group */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-neutral-700 mb-2 font-mono">
            2. Kelompok Usia <span className="text-[#F26207]">*</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {ageGroups.map((group) => (
              <button
                key={group.value}
                type="button"
                onClick={() => setAgeGroup(group.value)}
                className={`py-2.5 px-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                  ageGroup === group.value
                    ? 'border-[#F26207] bg-orange-50/50 text-[#0B1419] font-bold shadow-xs'
                    : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          type="button"
          disabled={!gender || !ageGroup}
          onClick={handleNext}
          className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
            gender && ageGroup
              ? 'bg-[#0B1419] hover:bg-[#F26207] text-white shadow-sm cursor-pointer'
              : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
          }`}
        >
          <span>Mulai Tes IQ</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Trust Badges - Compact, Clean, Short Text */}
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        <div className="p-2.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
          <Award className="w-4 h-4 text-[#F26207] mx-auto mb-1" />
          <div className="text-[11px] font-bold text-[#0B1419] leading-tight">WAIS-IV</div>
          <div className="text-[9px] text-neutral-400 font-mono">Standar</div>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
          <Users className="w-4 h-4 text-[#F26207] mx-auto mb-1" />
          <div className="text-[11px] font-bold text-[#0B1419] leading-tight">2.4M+</div>
          <div className="text-[9px] text-neutral-400 font-mono">Peserta</div>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
          <Shield className="w-4 h-4 text-[#F26207] mx-auto mb-1" />
          <div className="text-[11px] font-bold text-[#0B1419] leading-tight">Sertifikat</div>
          <div className="text-[9px] text-neutral-400 font-mono">Resmi QR</div>
        </div>
      </div>
    </div>
  );
}
