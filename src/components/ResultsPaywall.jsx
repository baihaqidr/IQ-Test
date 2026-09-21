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
  ChevronRight,
  Brain,
  Compass,
  Target
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

  // Derive IQ classification and Archetype
  const getClassification = (val) => {
    if (val >= 130) {
      return { 
        title: 'Sangat Unggul (High IQ / Genius)', 
        percentile: '98.5%', 
        archetype: 'The Strategic Mastermind',
        archetypeDesc: 'Pemikir visioner dengan kemampuan analisis sistematis, logika deduktif tingkat tinggi, dan perancangan strategi kompleks.',
        color: 'from-amber-500 to-amber-600' 
      };
    }
    if (val >= 120) {
      return { 
        title: 'Unggul (Superior Intelligence)', 
        percentile: '94.2%', 
        archetype: 'The Strategic Architect',
        archetypeDesc: 'Memiliki intuisi spasial tajam, pemecahan masalah multidimensi, dan kecepatan menyimpulkan pola rumit dengan presisi tinggi.',
        color: 'from-indigo-600 to-violet-600' 
      };
    }
    if (val >= 110) {
      return { 
        title: 'Di Atas Rata-rata (High Average)', 
        percentile: '82.0%', 
        archetype: 'The Analytical Strategist',
        archetypeDesc: 'Kombinasi efisien antara eksekusi praktis dan ketelitian logika analisis pola data.',
        color: 'from-emerald-500 to-teal-600' 
      };
    }
    return { 
      title: 'Rata-rata Normal (Average)', 
      percentile: '68.0%', 
      archetype: 'The Pragmatic Thinker',
      archetypeDesc: 'Keseimbangan daya nalar logis yang solid dalam pemecahan masalah operasional sehari-hari.',
      color: 'from-blue-500 to-sky-600' 
    };
  };

  const classification = getClassification(score);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white p-3.5 rounded-2xl flex items-center justify-between text-xs sm:text-sm font-semibold shadow-md mb-8 border border-slate-800">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>Personality.co Official Cognitive Dossier #2026</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 bg-white/10 px-3 py-0.5 rounded-full text-xs font-mono text-indigo-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ID: {licenseId || 'WWIQ-ID-992140'}
        </div>
      </div>

      {/* Hero Score Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft text-center relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
        
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 mb-4">
          <Brain className="w-3.5 h-3.5 text-indigo-600" />
          Arketipe Kognitif & Skor IQ Terkalibrasi
        </span>
        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
          Profil Kognitif: <span className="text-indigo-600">{user.name || 'Peserta'}</span>
        </h1>

        {/* Brain Archetype Highlight */}
        <div className="my-5 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 max-w-lg mx-auto text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wide">
            <Compass className="w-4 h-4 text-indigo-600" />
            <span>Arketipe Pola Pikir Anda:</span>
          </div>
          <div className="text-lg font-black text-slate-900 mt-1">
            {classification.archetype}
          </div>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            {classification.archetypeDesc}
          </p>
        </div>

        {/* Big Score Display */}
        <div className="my-6 inline-flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-slate-950 text-white shadow-xl min-w-[260px] border border-slate-800">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">Skor IQ Terverifikasi</span>
          <div className="text-5xl sm:text-6xl font-black tracking-tight text-white flex items-baseline">
            {score}
            <span className="text-lg font-bold text-slate-400 ml-1">/ 145</span>
          </div>
          <div className="mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
            {classification.title}
          </div>
        </div>

        {/* Percentile Callout */}
        <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-800 font-medium flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-indigo-600 shrink-0" />
          <span>
            Skor Anda menempatkan Anda di <strong>{classification.percentile} teratas</strong> dari 2.400.000+ peserta tes standar WAIS-IV.
          </span>
        </div>
      </div>

      {/* Interactive Bell Curve (Kurva Gauss) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-950">
              Distribusi Normal IQ (Kurva Gauss)
            </h3>
            <p className="text-xs text-slate-500">Posisi skor IQ Anda dibandingkan populasi umum</p>
          </div>
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
            Standar Deviasi 15
          </span>
        </div>

        {/* Bell Curve SVG Graph */}
        <div className="relative w-full aspect-[2.4/1] bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-end">
          <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path
              d="M 20 180 Q 150 180 200 90 Q 250 10 300 90 Q 350 180 480 180 L 480 180 L 20 180 Z"
              fill="url(#bellGrad)"
            />
            <path
              d="M 20 180 Q 150 180 200 90 Q 250 10 300 90 Q 350 180 480 180"
              fill="none"
              stroke="#6366f1"
              strokeWidth="3"
            />
            <line x1="10" y1="180" x2="490" y2="180" stroke="#94a3b8" strokeWidth="1.5" />

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
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft mb-8">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mb-1">
          Analisis 4 Dimensi Kecerdasan Kognitif
        </h3>
        <p className="text-xs text-slate-500 mb-6 font-normal">Hasil pembobotan psikometrik Personality.co</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
              <span>Penalaran Spasial & Abstrak</span>
              <span className="text-indigo-600">96% (Sangat Tinggi)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '96%' }} />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
              <span>Pengenalan Pola & Matriks</span>
              <span className="text-violet-600">92% (Tinggi)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-violet-600 h-2 rounded-full" style={{ width: '92%' }} />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
              <span>Logika Deduktif & Analitis</span>
              <span className="text-emerald-600">88% (Tinggi)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '88%' }} />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex justify-between text-xs font-bold text-slate-800 mb-1.5">
              <span>Kecepatan Pemrosesan Kognitif</span>
              <span className="text-amber-600">94% (Sangat Cepat)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-amber-600 h-2 rounded-full" style={{ width: '94%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Official Certificate Digital Preview */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-950">
              Pratinjau Sertifikat Eksekutif
            </h3>
            <p className="text-xs text-slate-500">Sertifikat berlisensi resmi Personality.co dengan QR-Code</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
            Siap Unduh PDF 300 DPI
          </span>
        </div>

        {/* Certificate Mockup Visual */}
        <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-2 border-indigo-500/40 shadow-xl text-center overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-indigo-400 mb-1">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Personality.co Cognitive Psychometrics
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-black text-white tracking-wide mt-1">
              EXECUTIVE CERTIFICATE OF COGNITIVE EXCELLENCE
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">Diberikan secara resmi kepada:</p>

            <div className="my-4">
              <span className="text-xl sm:text-2xl font-bold font-serif text-amber-400 border-b-2 border-amber-400/60 pb-1 inline-block px-4">
                {user.name || 'Muhammad Baihaqi'}
              </span>
            </div>

            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Telah menyelesaikan evaluasi kognitif penalaran matriks berstandar WAIS-IV dengan arketipe kecerdasan:
            </p>

            <div className="mt-3 inline-block bg-indigo-950 text-indigo-200 font-bold px-5 py-2 rounded-xl text-sm border border-indigo-500/40">
              SKOR IQ {score} • {classification.archetype}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
              <div className="text-left">
                <p className="font-bold text-white">Lisensi ID: {licenseId || 'WWIQ-ID-992140'}</p>
                <p>Verifikasi: https://tes-iq-indonesia.vercel.app/verify</p>
              </div>
              <div className="w-12 h-12 bg-white p-1 rounded-lg shadow-xs flex items-center justify-center">
                <QrCode className="w-10 h-10 text-slate-950" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paywall / Limited-Time Offer Box */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-indigo-800/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Promo Timer Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Penawaran Terbatas (Diskon 75%)
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-2 text-white">
              Buka Dossier Laporan 15 Halaman & Sertifikat
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
            <span><strong>Sertifikat Eksekutif Digital (PDF 300 DPI)</strong> berlisensi resmi dengan nama & kode verifikasi.</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span><strong>Dossier Lengkap Profil Kognitif 15 Halaman</strong> (Analisis mendalam 4 domain otak & rekomendasi karir).</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span><strong>Protokol Peningkatan Neuroplastisitas & Daya Ingat</strong> khusus untuk arketipe berpikir Anda.</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span><strong>Pengiriman Otomatis ke Email</strong> ({user.email || 'nama@email.com'}) dalam hitungan detik.</span>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs text-slate-400 line-through">Harga Normal: Rp 199.000</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-white">Rp 49.000</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                Hemat 75% Hari Ini
              </span>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:scale-[1.02]"
          >
            <span>Buka Laporan Lengkap Saya</span>
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
            <Lock className="w-4 h-4 text-indigo-400" />
            <span>Pembayaran Terenkripsi 256-Bit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Akses Instan & Langsung Tersedia</span>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-slate-900 text-center mb-6">
          Ulasan Peserta Bersertifikasi Personality.co
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex text-amber-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-600 mb-3 italic">
              "Laporan dossier 15 halamannya sangat komprehensif. Arketipe Strategic Architect benar-benar mencerminkan gaya kepemimpinan saya."
            </p>
            <div className="text-xs font-bold text-slate-900">Dimas Aditya, S.T.</div>
            <div className="text-[10px] text-slate-400">Head of Engineering (IQ 132)</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex text-amber-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-600 mb-3 italic">
              "Sangat ilmiah dan akurat. Saya gunakan sertifikat digitalnya sebagai portfolio profesional."
            </p>
            <div className="text-xs font-bold text-slate-900">dr. Amanda Putri</div>
            <div className="text-[10px] text-slate-400">Praktisi Medis (IQ 128)</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex text-amber-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-600 mb-3 italic">
              "Prosesnya cepat, tes matriksnya sangat menantang, dan langsung dapat sertifikat PDF resmi di email dalam hitungan detik."
            </p>
            <div className="text-xs font-bold text-slate-900">Rian Pratama</div>
            <div className="text-[10px] text-slate-400">Mahasiswa UI (IQ 124)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
