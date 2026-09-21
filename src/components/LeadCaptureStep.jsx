import React, { useState } from 'react';
import { User, Mail, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

export default function LeadCaptureStep({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Mohon masukkan nama lengkap Anda.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Mohon masukkan alamat email yang valid.');
      return;
    }
    setError('');
    onSubmit({ name, email });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8 sm:py-12">
      {/* Top Badge */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F26207] text-xs font-semibold mb-3 font-mono">
          <div className="w-3.5 h-3.5">
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
          <span>Hasil Kognitif Terkalibrasi</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0B1419] tracking-tight">
          Terbitkan Sertifikat Resmi Anda
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-normal">
          Masukkan nama lengkap dan email Anda untuk menerbitkan Sertifikat Digital & Dossier Profil Kognitif 15 Halaman.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-1.5 font-mono">
              Nama Lengkap (Untuk Sertifikat) <span className="text-[#F26207]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Muhammad Baihaqi"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#F26207] focus:border-[#F26207] text-sm font-medium text-neutral-900 bg-neutral-50/50"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-1.5 font-mono">
              Alamat Email Penerima <span className="text-[#F26207]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#F26207] focus:border-[#F26207] text-sm font-medium text-neutral-900 bg-neutral-50/50"
                required
              />
            </div>
            <p className="text-[11px] text-neutral-400 mt-1.5 flex items-center gap-1 font-mono">
              <Lock className="w-3 h-3 text-neutral-400" />
              Laporan PDF & Sertifikat Digital akan dikirimkan otomatis ke email ini.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-sm sm:text-base bg-[#0B1419] hover:bg-[#F26207] text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all mt-6"
          >
            <span>Buka Skor & Sertifikat Saya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      <div className="mt-6 text-center text-xs text-neutral-400 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>cognitive menjamin 100% privasi dan enkripsi data pribadi Anda.</span>
      </div>
    </div>
  );
}
