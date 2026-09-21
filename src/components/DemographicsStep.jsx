import React, { useState } from 'react';
import { User, Users, Shield, Award, ArrowRight } from 'lucide-react';

const ageGroups = [
  { label: 'Di bawah 18 tahun', value: '<18' },
  { label: '18 – 24 tahun', value: '18-24' },
  { label: '25 – 34 tahun', value: '25-34' },
  { label: '35 – 44 tahun', value: '35-44' },
  { label: '45 – 54 tahun', value: '45-54' },
  { label: '55 tahun ke atas', value: '55+' },
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
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12">
      {/* Hero Badge */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[#0B1419] text-xs font-semibold mb-4 font-mono">
          <div className="w-4 h-4 flex items-center justify-center shrink-0">
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
        
        <h1 className="text-3xl sm:text-4xl font-black text-[#0B1419] tracking-tight leading-tight">
          Temukan Potensi <span className="text-[#F26207]">Kecerdasan IQ</span> & Arketipe Kognitif Anda
        </h1>
        
        <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-lg mx-auto font-normal leading-relaxed">
          Uji penalaran matriks terstandarisasi. Dapatkan skor IQ akurat, arketipe pola pikir, dan sertifikat resmi terverifikasi.
        </p>
      </div>

      {/* Main Interactive Form Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm">
        {/* Step 1: Gender */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 font-mono">
            1. Pilih Jenis Kelamin Anda <span className="text-[#F26207]">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setGender('male')}
              className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 font-medium transition-all cursor-pointer ${
                gender === 'male'
                  ? 'border-[#F26207] bg-orange-50/50 text-[#0B1419] shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${gender === 'male' ? 'bg-[#F26207] text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                <User className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm sm:text-base">Pria</span>
            </button>

            <button
              type="button"
              onClick={() => setGender('female')}
              className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 font-medium transition-all cursor-pointer ${
                gender === 'female'
                  ? 'border-[#F26207] bg-orange-50/50 text-[#0B1419] shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${gender === 'female' ? 'bg-[#F26207] text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                <User className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm sm:text-base">Wanita</span>
            </button>
          </div>
        </div>

        {/* Step 2: Age Group */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 font-mono">
            2. Pilih Kelompok Usia Anda <span className="text-[#F26207]">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {ageGroups.map((group) => (
              <button
                key={group.value}
                type="button"
                onClick={() => setAgeGroup(group.value)}
                className={`p-3.5 rounded-xl border-2 text-center text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  ageGroup === group.value
                    ? 'border-[#F26207] bg-orange-50/50 text-[#0B1419] shadow-xs'
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
          className={`w-full py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 ${
            gender && ageGroup
              ? 'bg-[#0B1419] hover:bg-[#F26207] text-white shadow-md cursor-pointer'
              : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
          }`}
        >
          <span>Mulai Tes IQ Sekarang</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="mt-8 grid grid-cols-3 gap-3.5 text-center">
        <div className="flex flex-col items-center p-3.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
          <Award className="w-4 h-4 text-[#F26207] mb-1" />
          <span className="text-xs font-bold text-[#0B1419]">WAIS-IV Standard</span>
          <span className="text-[10px] text-neutral-400 font-mono">Tervalidasi Ilmiah</span>
        </div>
        <div className="flex flex-col items-center p-3.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
          <Users className="w-4 h-4 text-[#F26207] mb-1" />
          <span className="text-xs font-bold text-[#0B1419]">2.400.000+</span>
          <span className="text-[10px] text-neutral-400 font-mono">Norm Database</span>
        </div>
        <div className="flex flex-col items-center p-3.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
          <Shield className="w-4 h-4 text-[#F26207] mb-1" />
          <span className="text-xs font-bold text-[#0B1419]">Sertifikat Resmi</span>
          <span className="text-[10px] text-neutral-400 font-mono">QR Verification</span>
        </div>
      </div>
    </div>
  );
}
