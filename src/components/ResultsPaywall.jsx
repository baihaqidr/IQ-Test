import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Download, 
  Zap, 
  Star, 
  Lock, 
  TrendingUp, 
  QrCode,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function ResultsPaywall({ user, score, licenseId, onOpenCheckout }) {
  const [promoTime, setPromoTime] = useState(599); // 09:59 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setPromoTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const promoMinutes = Math.floor(promoTime / 60);
  const promoSeconds = promoTime % 60;

  // Derive IQ classification
  const getClassification = (val) => {
    if (val >= 130) return { title: 'Sangat Unggul (Genius / High IQ)', percentile: '98.5%', color: 'from-amber-500 to-amber-600' };
    if (val >= 120) return { title: 'Unggul (Superior Intelligence)', percentile: '94.2%', color: 'from-sky-500 to-indigo-600' };
    if (val >= 110) return { title: 'Di Atas Rata-rata (High Average)', percentile: '82.0%', color: 'from-emerald-500 to-teal-600' };
    return { title: 'Rata-rata Normal (Average)', percentile: '68.0%', color: 'from-blue-500 to-sky-600' };
  };

  const classification = getClassification(score);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-3 rounded-2xl flex items-center justify-between text-xs sm:text-sm font-semibold shadow-md mb-8">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 animate-bounce" />
          <span>Laporan Kognitif & Sertifikat Resmi Telah Selesai Divalidasi</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" /> ID: {licenseId || 'WWIQ-ID-992140'}
        </div>
      </div>

      {/* Hero Score Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card text-center relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-sky-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
        
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 mb-3">
          Hasil Tes IQ Standar WAIS-IV
        </span>
        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Selamat, <span className="text-sky-600">{user.name || 'Peserta'}</span>!
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Skor IQ Anda dihitung berdasarkan ketepatan pola matriks logika dan kecepatan respon.
        </p>

        {/* Big Score Display */}
        <div className="my-6 inline-flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl min-w-[240px] border border-slate-700">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">Skor IQ Anda</span>
          <div className="text-5xl sm:text-6xl font-black tracking-tight text-white flex items-baseline">
            {score}
            <span className="text-lg font-bold text-slate-400 ml-1">/ 145</span>
          </div>
          <div className="mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
            {classification.title}
          </div>
        </div>

        {/* Percentile Callout */}
        <div className="max-w-md mx-auto bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 font-medium flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-amber-600 shrink-0" />
          <span>
            Skor Anda menempatkan Anda di <strong>{classification.percentile} teratas</strong> dari populasi peserta tes di Indonesia.
          </span>
        </div>
      </div>

      {/* Interactive Bell Curve (Distribusi Normal IQ) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Distribusi Normal IQ (Kurva Gauss)
            </h3>
            <p className="text-xs text-slate-500">Posisi skor IQ Anda dibandingkan populasi umum</p>
          </div>
          <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
            Standar Deviasi 15
          </span>
        </div>

        {/* Bell Curve SVG Graph */}
        <div className="relative w-full aspect-[2.4/1] bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-end">
          <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible">
            {/* Bell Curve Area Fill */}
            <defs>
              <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path
              d="M 20 180 Q 150 180 200 90 Q 250 10 300 90 Q 350 180 480 180 L 480 180 L 20 180 Z"
              fill="url(#bellGrad)"
            />
            {/* Bell Curve Line */}
            <path
              d="M 20 180 Q 150 180 200 90 Q 250 10 300 90 Q 350 180 480 180"
              fill="none"
              stroke="#0284c7"
              strokeWidth="3"
            />
            {/* Baseline */}
            <line x1="10" y1="180" x2="490" y2="180" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Labels on x-axis */}
            <text x="60" y="195" fontSize="10" fill="#64748b" textAnchor="middle">70 (Bawah)</text>
            <text x="170" y="195" fontSize="10" fill="#64748b" textAnchor="middle">85</text>
            <text x="250" y="195" fontSize="10" fill="#64748b" textAnchor="middle" fontWeight="bold">100 (Rata-rata)</text>
            <text x="330" y="195" fontSize="10" fill="#64748b" textAnchor="middle">115</text>
            <text x="430" y="195" fontSize="10" fill="#64748b" textAnchor="middle">130+ (Genius)</text>

            {/* User Pointer on Curve */}
            <g transform={`translate(${Math.min(460, Math.max(50, 250 + (score - 100) * 4.5))}, 55)`}>
              <line x1="0" y1="0" x2="0" y2="125" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="0" cy="0" r="7" fill="#ef4444" className="animate-ping opacity-75" />
              <circle cx="0" cy="0" r="6" fill="#ef4444" />
              <rect x="-35" y="-32" width="70" height="24" rx="6" fill="#0f172a" />
              <text x="0" y="-16" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">
                Anda: {score}
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* 4-Pillar Cognitive Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card mb-8">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
          Analisis 4 Pilar Kecerdasan Kognitif
        </h3>
        <p className="text-xs text-slate-500 mb-6">Penilaian terperinci dari setiap domain tes</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
              <span>Penalaran Spasial</span>
              <span className="text-sky-600">96% (Sangat Tinggi)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-sky-600 h-2 rounded-full" style={{ width: '96%' }} />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
              <span>Pengenalan Pola & Matriks</span>
              <span className="text-indigo-600">92% (Tinggi)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '92%' }} />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
              <span>Logika Deduktif</span>
              <span className="text-emerald-600">88% (Tinggi)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '88%' }} />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
              <span>Kecepatan Pemrosesan</span>
              <span className="text-amber-600">94% (Sangat Cepat)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-amber-600 h-2 rounded-full" style={{ width: '94%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Official Certificate Digital Preview */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Pratinjau Sertifikat Resmi
            </h3>
            <p className="text-xs text-slate-500">Sertifikat terverifikasi dengan lisensi unik & QR-Code</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
            Siap Diunduh (PDF)
          </span>
        </div>

        {/* Certificate Mockup Visual */}
        <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 border-4 border-amber-600/30 shadow-inner text-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <Award className="w-72 h-72 text-amber-900" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-amber-800 mb-1">
              <Award className="w-4 h-4 text-amber-600" />
              World Wide IQ Assessment Authority
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-black text-slate-900 tracking-wide mt-1">
              SERTIFIKAT KELAYAKAN KOGNITIF
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">Diberikan secara resmi kepada:</p>

            <div className="my-4">
              <span className="text-xl sm:text-2xl font-bold font-serif text-slate-900 border-b-2 border-slate-900 pb-1 inline-block px-4">
                {user.name || 'Muhammad Baihaqi'}
              </span>
            </div>

            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Telah menyelesaikan evaluasi penalaran spasial dan matriks kognitif dengan hasil skor terverifikasi:
            </p>

            <div className="mt-3 inline-block bg-slate-900 text-amber-400 font-black px-6 py-2 rounded-xl text-lg tracking-wider border border-amber-500/40">
              SKOR IQ: {score} ({classification.title.split(' ')[0]})
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
              <div className="text-left">
                <p className="font-bold text-slate-700">Lisensi ID: {licenseId || 'WWIQ-ID-992140'}</p>
                <p>Verifikasi: https://id.wwiqtest.com/verify</p>
              </div>
              <div className="w-12 h-12 bg-white p-1 rounded border border-slate-300 shadow-xs flex items-center justify-center">
                <QrCode className="w-10 h-10 text-slate-800" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paywall / Limited-Time Offer Box */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-sky-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Promo Timer Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-slate-700/80">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Penawaran Khusus Waktu Terbatas
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-2 text-white">
              Buka Sertifikat & Laporan Analisis Lengkap
            </h3>
          </div>

          <div className="flex items-center gap-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 px-4 py-2 rounded-2xl font-mono text-sm font-bold shadow-inner">
            <Clock className="w-4 h-4 text-rose-400 animate-pulse" />
            <span>
              {String(promoMinutes).padStart(2, '0')}:{String(promoSeconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* What's included checklist */}
        <div className="my-6 space-y-3">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span><strong>Sertifikat Digital Resolusi Tinggi (PDF 300 DPI)</strong> siap cetak dengan nama resmi & kode lisensi unik.</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span><strong>Laporan Analisis Kognitif 12 Halaman</strong> (Breakdown mendalam 4 domain kecerdasan & potensi karir).</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span><strong>Panduan Optimalisasi Otak & Latihan Neuroplastisitas</strong> untuk meningkatkan performa kognitif.</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span><strong>Pengiriman Instan ke Email</strong> ({user.email || 'nama@email.com'}) dalam hitungan detik.</span>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs text-slate-400 line-through">Harga Normal: Rp 199.000</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-white">Rp 49.000</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                Diskon 75% Hari Ini
              </span>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:scale-[1.02]"
          >
            <span>Buka Sertifikat Saya Sekarang</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Security & Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garansi Uang Kembali 30 Hari</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-sky-400" />
            <span>Pembayaran Aman Enkripsi 256-Bit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Akses Instan Tanpa Menunggu</span>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-slate-900 text-center mb-6">
          Apa Kata Peserta yang Telah Bersertifikasi?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex text-amber-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-600 mb-3 italic">
              "Sangat akurat dan sertifikatnya sangat profesional. Saya gunakan untuk kelengkapan CV lamaran kerja."
            </p>
            <div className="text-xs font-bold text-slate-900">Dimas Aditya, S.T.</div>
            <div className="text-[10px] text-slate-400">Software Engineer (IQ 132)</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex text-amber-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-600 mb-3 italic">
              "Laporan 12 halamannya sangat membuka wawasan tentang gaya berpikir dan kelebihan analitis saya."
            </p>
            <div className="text-xs font-bold text-slate-900">dr. Amanda Putri</div>
            <div className="text-[10px] text-slate-400">Praktisi Medis (IQ 128)</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex text-amber-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-600 mb-3 italic">
              "Prosesnya cepat, tesnya menantang, dan langsung dapat sertifikat PDF resmi di email dalam hitungan detik."
            </p>
            <div className="text-xs font-bold text-slate-900">Rian Pratama</div>
            <div className="text-[10px] text-slate-400">Mahasiswa UI (IQ 124)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
