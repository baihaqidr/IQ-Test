import React, { useState } from 'react';
import { User, Mail, ShieldCheck, ArrowRight, Award, Lock } from 'lucide-react';

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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
          <Award className="w-4 h-4" />
          <span>Hasil Tes Anda Sudah Siap!</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">
          Siapkan Sertifikat Resmi Anda
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600">
          Masukkan nama lengkap dan email Anda untuk mencetak sertifikat digital serta laporan analisis IQ mendalam.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Nama Lengkap (Sesuai Sertifikat) <span className="text-sky-600">*</span>
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
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm font-medium text-slate-900"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Alamat Email <span className="text-sky-600">*</span>
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
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm font-medium text-slate-900"
                required
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <Lock className="w-3 h-3 text-slate-400" />
              Laporan hasil & sertifikat PDF akan dikirimkan ke email ini.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer transition-all mt-6"
          >
            <span>Lihat Skor & Buka Sertifikat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      <div className="mt-6 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Data Anda terenkripsi aman dan tidak dipublikasikan ke publik.</span>
      </div>
    </div>
  );
}
