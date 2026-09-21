import React, { useState } from 'react';
import { User, Users, Shield, Award, Sparkles, ArrowRight, Brain, CheckCircle2 } from 'lucide-react';

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
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-14">
      {/* Hero Badge */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold mb-4 shadow-xs">
          <Brain className="w-3.5 h-3.5 text-indigo-400" />
          <span>Personality.co Official Psychometric Standard</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
          Temukan Potensi <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">Kecerdasan IQ</span> & Arketipe Pola Pikir Anda
        </h1>
        
        <p className="mt-3.5 text-sm sm:text-base text-slate-500 max-w-lg mx-auto font-normal leading-relaxed">
          Evaluasi kognitif berbasis matriks Raven WAIS-IV. Dapatkan skor IQ akurat, arketipe kepribadian kognitif, dan sertifikat resmi terakreditasi.
        </p>
      </div>

      {/* Main Interactive Form Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
        {/* Step 1: Gender */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
            1. Pilih Jenis Kelamin Anda <span className="text-indigo-600">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3.5">
            <button
              type="button"
              onClick={() => setGender('male')}
              className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 font-medium transition-all cursor-pointer ${
                gender === 'male'
                  ? 'border-indigo-600 bg-indigo-50/60 text-indigo-950 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${gender === 'male' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                <User className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm sm:text-base">Pria</span>
            </button>

            <button
              type="button"
              onClick={() => setGender('female')}
              className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 font-medium transition-all cursor-pointer ${
                gender === 'female'
                  ? 'border-indigo-600 bg-indigo-50/60 text-indigo-950 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${gender === 'female' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                <User className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm sm:text-base">Wanita</span>
            </button>
          </div>
        </div>

        {/* Step 2: Age Group */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
            2. Pilih Kelompok Usia Anda <span className="text-indigo-600">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {ageGroups.map((group) => (
              <button
                key={group.value}
                type="button"
                onClick={() => setAgeGroup(group.value)}
                className={`p-3.5 rounded-xl border-2 text-center text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  ageGroup === group.value
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 hover:bg-slate-50'
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
          className={`w-full py-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 ${
            gender && ageGroup
              ? 'bg-slate-950 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 hover:translate-y-[-1px] cursor-pointer'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <span>Mulai Tes IQ Sekarang</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="mt-8 grid grid-cols-3 gap-3.5 text-center">
        <div className="flex flex-col items-center p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <Award className="w-4 h-4 text-indigo-600 mb-1" />
          <span className="text-xs font-bold text-slate-900">WAIS-IV Standard</span>
          <span className="text-[10px] text-slate-400">Tervalidasi Ilmiah</span>
        </div>
        <div className="flex flex-col items-center p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <Users className="w-4 h-4 text-indigo-600 mb-1" />
          <span className="text-xs font-bold text-slate-900">2.400.000+</span>
          <span className="text-[10px] text-slate-400">Benchmark Data</span>
        </div>
        <div className="flex flex-col items-center p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <Shield className="w-4 h-4 text-indigo-600 mb-1" />
          <span className="text-xs font-bold text-slate-900">Sertifikat Resmi</span>
          <span className="text-[10px] text-slate-400">QR-Code Verifikasi</span>
        </div>
      </div>
    </div>
  );
}
