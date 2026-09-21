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
          <div className="w-3 h-3">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <path d="M7 6C7 4.89543 7.89543 4 9 4H19C20.1046 4 21 4.89543 21 6V11C21 12.1046 20.1046 13 19 13H9C7.89543 13 7 12.1046 7 11V6Z" fill="#F26207"/>
              <path d="M13 13C13 11.8954 13.8954 11 15 11H25C26.1046 11 27 11.8954 27 13V18C27 19.1046 26.1046 20 25 20H15C13.8954 20 13 19.1046 13 18V13Z" fill="#F26207"/>
              <path d="M7 20C7 18.8954 7.89543 18 9 18H19C20.1046 18 21 18.8954 21 20V25C21 26.1046 20.1046 27 19 27H9C7.89543 27 7 26.1046 7 25V20Z" fill="#F26207"/>
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
        <span>Replit Intelligence menjamin 100% privasi dan enkripsi data pribadi Anda.</span>
      </div>
    </div>
  );
}
