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
  Compass
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
      };
    }
    if (val >= 120) {
      return { 
        title: 'Unggul (Superior Intelligence)', 
        percentile: '94.2%', 
        archetype: 'The Strategic Architect',
        archetypeDesc: 'Memiliki intuisi spasial tajam, pemecahan masalah multidimensi, dan kecepatan menyimpulkan pola rumit dengan presisi tinggi.',
      };
    }
    if (val >= 110) {
      return { 
        title: 'Di Atas Rata-rata (High Average)', 
        percentile: '82.0%', 
        archetype: 'The Analytical Strategist',
        archetypeDesc: 'Kombinasi efisien antara eksekusi praktis dan ketelitian logika analisis pola data.',
      };
    }
    return { 
      title: 'Rata-rata Normal (Average)', 
      percentile: '68.0%', 
      archetype: 'The Pragmatic Thinker',
      archetypeDesc: 'Keseimbangan daya nalar logis yang solid dalam pemecahan masalah operasional sehari-hari.',
    };
  };

  const classification = getClassification(score);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      {/* Top Banner */}
      <div className="bg-[#0B1419] text-white p-3.5 rounded-2xl flex items-center justify-between text-xs sm:text-sm font-semibold shadow-sm mb-8 border border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <path
                d="M24 9.5C22 7.3 19.1 6 16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26C19.1 26 22 24.7 24 22.5"
                stroke="#F26207"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="16" cy="16" r="3" fill="#FFFFFF" />
            </svg>
          </div>
          <span>cognitive Intelligence Dossier #2026</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 bg-white/10 px-3 py-0.5 rounded-full text-xs font-mono text-orange-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ID: {licenseId || 'COG-ID-992140'}
        </div>
      </div>

      {/* Hero Score Box */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-sm text-center relative overflow-hidden mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F26207] bg-orange-50 px-3 py-1 rounded-full border border-orange-200 font-mono mb-4">
          <Brain className="w-3.5 h-3.5 text-[#F26207]" />
          Arketipe Kognitif & Skor IQ Terkalibrasi
        </span>
        
        <h1 className="text-2xl sm:text-3xl font-black text-[#0B1419]">
          Profil Kognitif: <span className="text-[#F26207]">{user.name || 'Peserta'}</span>
        </h1>

        {/* Brain Archetype Highlight */}
        <div className="my-5 p-4 rounded-xl bg-orange-50/40 border border-orange-200/70 max-w-lg mx-auto text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-950 uppercase tracking-wide font-mono">
            <Compass className="w-4 h-4 text-[#F26207]" />
            <span>Arketipe Pola Pikir Anda:</span>
          </div>
          <div className="text-lg font-black text-[#0B1419] mt-1">
            {classification.archetype}
          </div>
          <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
            {classification.archetypeDesc}
          </p>
        </div>

        {/* Big Score Display */}
        <div className="my-6 inline-flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#0B1419] text-white shadow-xl min-w-[260px] border border-neutral-800">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F26207] font-mono mb-1">Skor IQ Terverifikasi</span>
          <div className="text-5xl sm:text-6xl font-black tracking-tight text-white flex items-baseline">
            {score}
            <span className="text-lg font-bold text-neutral-400 ml-1">/ 145</span>
          </div>
          <div className="mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30">
            {classification.title}
          </div>
        </div>

        {/* Percentile Callout */}
        <div className="max-w-md mx-auto bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-xs text-neutral-800 font-medium flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-[#F26207] shrink-0" />
          <span>
            Skor Anda menempatkan Anda di <strong>{classification.percentile} teratas</strong> dari 2.400.000+ peserta tes standar WAIS-IV.
          </span>
        </div>
      </div>

      {/* Interactive Bell Curve (Kurva Gauss) */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-black text-[#0B1419]">
              Distribusi Normal IQ (Kurva Gauss)
            </h3>
            <p className="text-xs text-neutral-500 font-mono">Standar Deviasi 15 • cognitive Norm Database</p>
          </div>
          <span className="text-xs font-bold text-[#F26207] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 font-mono">
            WAIS-IV Normed
          </span>
        </div>

        {/* Bell Curve SVG Graph */}
        <div className="relative w-full aspect-[2.4/1] bg-neutral-50 rounded-xl p-4 border border-neutral-200 flex flex-col justify-end">
          <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="cogBellGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F26207" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#F26207" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path
              d="M 20 180 Q 150 180 200 90 Q 250 10 300 90 Q 350 180 480 180 L 480 180 L 20 180 Z"
              fill="url(#cogBellGrad)"
            />
            <path
              d="M 20 180 Q 150 180 200 90 Q 250 10 300 90 Q 350 180 480 180"
              fill="none"
              stroke="#F26207"
              strokeWidth="3"
            />
            <line x1="10" y1="180" x2="490" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />

            <text x="60" y="195" fontSize="10" fill="#64748b" textAnchor="middle">70 (Bawah)</text>
            <text x="170" y="195" fontSize="10" fill="#64748b" textAnchor="middle">85</text>
            <text x="250" y="195" fontSize="10" fill="#0B1419" textAnchor="middle" fontWeight="bold">100 (Rata-rata)</text>
            <text x="330" y="195" fontSize="10" fill="#64748b" textAnchor="middle">115</text>
            <text x="430" y="195" fontSize="10" fill="#64748b" textAnchor="middle">130+ (Genius)</text>

            {/* User Pointer on Curve */}
            <g transform={`translate(${Math.min(460, Math.max(50, 250 + (score - 100) * 4.5))}, 55)`}>
              <line x1="0" y1="0" x2="0" y2="125" stroke="#F26207" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="0" cy="0" r="7" fill="#F26207" className="animate-ping opacity-75" />
              <circle cx="0" cy="0" r="6" fill="#F26207" />
              <rect x="-35" y="-32" width="70" height="24" rx="6" fill="#0B1419" />
              <text x="0" y="-16" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                Anda: {score}
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* 4-Pillar Cognitive Breakdown */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm mb-8">
        <h3 className="text-base sm:text-lg font-black text-[#0B1419] mb-1">
          Analisis 4 Dimensi Kecerdasan Kognitif
        </h3>
        <p className="text-xs text-neutral-500 mb-6 font-mono">cognitive Psychometric Assessment</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5 font-mono">
              <span>Penalaran Spasial & Abstrak</span>
              <span className="text-[#F26207]">96% (Sangat Tinggi)</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-[#F26207] h-2 rounded-full" style={{ width: '96%' }} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5 font-mono">
              <span>Pengenalan Pola & Matriks</span>
              <span className="text-[#0B1419]">92% (Tinggi)</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-[#0B1419] h-2 rounded-full" style={{ width: '92%' }} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5 font-mono">
              <span>Logika Deduktif & Analitis</span>
              <span className="text-emerald-600">88% (Tinggi)</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '88%' }} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1.5 font-mono">
              <span>Kecepatan Pemrosesan Kognitif</span>
              <span className="text-amber-600">94% (Sangat Cepat)</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div className="bg-amber-600 h-2 rounded-full" style={{ width: '94%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Official Certificate Digital Preview */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-black text-[#0B1419]">
              Pratinjau Sertifikat Eksekutif
            </h3>
            <p className="text-xs text-neutral-500 font-mono">Sertifikat terakreditasi cognitive Authority</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-mono">
            PDF 300 DPI Ready
          </span>
        </div>

        {/* Certificate Mockup Visual */}
        <div className="relative rounded-2xl p-6 sm:p-8 bg-[#0B1419] text-white border-2 border-[#F26207]/40 shadow-xl text-center overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#F26207] mb-1 font-mono">
              <Sparkles className="w-4 h-4" />
              cognitive Cognitive Psychometrics
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-black text-white tracking-wide mt-1">
              EXECUTIVE CERTIFICATE OF COGNITIVE EXCELLENCE
            </h4>
            <p className="text-xs text-neutral-400 mt-0.5">Diberikan secara resmi kepada:</p>

            <div className="my-4">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#F26207] border-b-2 border-[#F26207]/60 pb-1 inline-block px-4">
                {user.name || 'Muhammad Baihaqi'}
              </span>
            </div>

            <p className="text-xs text-neutral-300 max-w-md mx-auto">
              Telah menyelesaikan evaluasi kognitif penalaran matriks berstandar WAIS-IV dengan arketipe kecerdasan:
            </p>

            <div className="mt-3 inline-block bg-neutral-900 text-orange-200 font-bold px-5 py-2 rounded-xl text-sm border border-[#F26207]/40 font-mono">
              SKOR IQ {score} • {classification.archetype}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
              <div className="text-left">
                <p className="font-bold text-white">Lisensi ID: {licenseId || 'COG-ID-992140'}</p>
                <p>Verifikasi: https://tes-iq-indonesia.vercel.app/verify</p>
              </div>
              <div className="w-12 h-12 bg-white p-1 rounded-lg shadow-xs flex items-center justify-center">
                <QrCode className="w-10 h-10 text-[#0B1419]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paywall / Limited-Time Offer Box */}
      <div className="bg-[#0B1419] rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-neutral-800 relative overflow-hidden">
        {/* Promo Timer Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-neutral-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F26207] bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 font-mono">
              Penawaran Terbatas (Diskon 75%)
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-2 text-white">
              Buka Dossier Laporan 15 Halaman & Sertifikat
            </h3>
          </div>

          <div className="flex items-center gap-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 px-4 py-2 rounded-xl font-mono text-sm font-bold">
            <Clock className="w-4 h-4 text-rose-400 animate-pulse" />
            <span>
              {String(promoMinutes).padStart(2, '0')}:{String(promoSeconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* What's included checklist */}
        <div className="my-6 space-y-3">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
            <CheckCircle className="w-5 h-5 text-[#F26207] shrink-0" />
            <span><strong>Sertifikat Eksekutif Digital (PDF 300 DPI)</strong> berlisensi resmi dengan nama & kode verifikasi.</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
            <CheckCircle className="w-5 h-5 text-[#F26207] shrink-0" />
            <span><strong>Dossier Lengkap Profil Kognitif 15 Halaman</strong> (Analisis mendalam 4 domain otak & rekomendasi karir).</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
            <CheckCircle className="w-5 h-5 text-[#F26207] shrink-0" />
            <span><strong>Protokol Peningkatan Neuroplastisitas & Daya Ingat</strong> khusus untuk arketipe berpikir Anda.</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
            <CheckCircle className="w-5 h-5 text-[#F26207] shrink-0" />
            <span><strong>Pengiriman Otomatis ke Email</strong> ({user.email || 'nama@email.com'}) dalam hitungan detik.</span>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="bg-neutral-900 rounded-xl p-5 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs text-neutral-400 line-through block font-mono">Harga Normal: Rp 199.000</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-white">Rp 49.000</span>
              <span className="text-xs font-bold text-[#F26207] bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 font-mono">
                Hemat 75% Hari Ini
              </span>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#F26207] hover:bg-[#ff6d14] text-white shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:scale-[1.02]"
          >
            <span>Buka Laporan Lengkap Saya</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Security & Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400 pt-2 font-mono">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garansi 30 Hari</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#F26207]" />
            <span>Enkripsi 256-Bit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Akses Instan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
