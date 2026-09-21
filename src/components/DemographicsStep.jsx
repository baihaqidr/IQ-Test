import React, { useState } from 'react';
import { User, Users, Shield, Award, Sparkles, ArrowRight } from 'lucide-react';

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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold mb-4 shadow-xs">
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>Tes IQ Standar Internasional Edisi 2026</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Cari Tahu Tingkat <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Kecerdasan IQ</span> & Pola Pikir Anda
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
          Evaluasi kognitif berbasis matriks visual ilmiah standar WAIS-IV. Dapatkan skor akurat, perbandingan persentil, dan sertifikat resmi.
        </p>
      </div>

      {/* Main Interactive Form Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
        {/* Step 1: Gender */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-800 mb-3">
            1. Pilih Jenis Kelamin Anda <span className="text-sky-600">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setGender('male')}
              className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 font-medium transition-all ${
                gender === 'male'
                  ? 'border-sky-600 bg-sky-50/70 text-sky-900 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${gender === 'male' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                <User className="w-5 h-5" />
              </div>
              <span className="font-semibold text-base">Pria</span>
            </button>

            <button
              type="button"
              onClick={() => setGender('female')}
              className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 font-medium transition-all ${
                gender === 'female'
                  ? 'border-sky-600 bg-sky-50/70 text-sky-900 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${gender === 'female' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                <User className="w-5 h-5" />
              </div>
              <span className="font-semibold text-base">Wanita</span>
            </button>
          </div>
        </div>

        {/* Step 2: Age Group */}
        <div className="mb-8">
          <label className="block text-sm font-bold text-slate-800 mb-3">
            2. Pilih Kelompok Usia Anda <span className="text-sky-600">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {ageGroups.map((group) => (
              <button
                key={group.value}
                type="button"
                onClick={() => setAgeGroup(group.value)}
                className={`p-3 rounded-xl border-2 text-center text-sm font-semibold transition-all ${
                  ageGroup === group.value
                    ? 'border-sky-600 bg-sky-50 text-sky-900 shadow-xs'
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
          className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200 ${
            gender && ageGroup
              ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:opacity-95 hover:translate-y-[-1px] cursor-pointer'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <span>Mulai Tes IQ Sekarang</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center p-3 rounded-xl bg-slate-100/70 border border-slate-200/60">
          <Award className="w-5 h-5 text-sky-600 mb-1" />
          <span className="text-xs font-bold text-slate-800">Skala Standar</span>
          <span className="text-[11px] text-slate-500">WAIS-IV Certified</span>
        </div>
        <div className="flex flex-col items-center p-3 rounded-xl bg-slate-100/70 border border-slate-200/60">
          <Users className="w-5 h-5 text-sky-600 mb-1" />
          <span className="text-xs font-bold text-slate-800">1.250.000+</span>
          <span className="text-[11px] text-slate-500">Peserta Teruji</span>
        </div>
        <div className="flex flex-col items-center p-3 rounded-xl bg-slate-100/70 border border-slate-200/60">
          <Shield className="w-5 h-5 text-sky-600 mb-1" />
          <span className="text-xs font-bold text-slate-800">Privasi Aman</span>
          <span className="text-[11px] text-slate-500">Enkripsi 256-bit</span>
        </div>
      </div>
    </div>
  );
}
