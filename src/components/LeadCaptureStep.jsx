import React, { useState } from 'react';
import { User, Mail, ShieldCheck, ArrowRight, Award, Lock, Sparkles } from 'lucide-react';

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
    <div className="max-w-md mx-auto px-4 py-8 sm:py-14">
      {/* Top Badge */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>Hasil Evaluasi Kognitif Siap!</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
          Terbitkan Sertifikat Resmi Anda
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal">
          Masukkan nama lengkap dan email Anda untuk mencetak Sertifikat Eksekutif serta Dossier Analisis 15 Halaman.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
              Nama Lengkap (Untuk Sertifikat) <span className="text-indigo-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Muhammad Baihaqi"
                className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-sm font-medium text-slate-900 bg-slate-50/50"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
              Alamat Email Penerima <span className="text-indigo-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-sm font-medium text-slate-900 bg-slate-50/50"
                required
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1">
              <Lock className="w-3 h-3 text-slate-400" />
              Laporan PDF & Sertifikat Digital akan dikirimkan otomatis ke email ini.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl font-bold text-sm sm:text-base bg-slate-950 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all mt-6"
          >
            <span>Buka Skor & Sertifikat Saya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      <div className="mt-6 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Personality.co menjamin 100% privasi dan enkripsi data pribadi Anda.</span>
      </div>
    </div>
  );
}
