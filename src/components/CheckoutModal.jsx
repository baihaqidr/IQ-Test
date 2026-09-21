import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Lock, CreditCard, Smartphone, QrCode, Download } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, user, score, licenseId, onPaymentSuccess }) {
  const [selectedMethod, setSelectedMethod] = useState('qris');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  if (!isOpen) return null;

  const handlePay = async () => {
    setIsProcessing(true);
    
    // Trigger onPaymentSuccess callback (Supabase update status)
    if (onPaymentSuccess) {
      await onPaymentSuccess();
    }

    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isPaid ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
              <Lock className="w-3.5 h-3.5" /> Pembayaran Aman & Terenkripsi
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Selesaikan Pembayaran
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Sertifikat & Laporan Analisis Kognitif IQ {score}
            </p>

            {/* Price Summary Box */}
            <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Paket Lengkap Sertifikat + Laporan</span>
                <span className="text-[11px] text-slate-500">Akses PDF 300 DPI seumur hidup</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 line-through block">Rp 199.000</span>
                <span className="text-lg font-black text-sky-600">Rp 49.000</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Pilih Metode Pembayaran:
            </label>
            <div className="space-y-2 mb-6">
              {/* QRIS */}
              <button
                type="button"
                onClick={() => setSelectedMethod('qris')}
                className={`w-full p-3 rounded-xl border-2 flex items-center justify-between text-left transition-all ${
                  selectedMethod === 'qris'
                    ? 'border-sky-600 bg-sky-50 text-sky-900 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">QRIS (Semua E-Wallet / M-Banking)</div>
                    <div className="text-[10px] text-slate-500">GoPay, OVO, Dana, BCA, Mandiri, dll.</div>
                  </div>
                </div>
                {selectedMethod === 'qris' && <CheckCircle2 className="w-4 h-4 text-sky-600" />}
              </button>

              {/* Virtual Account */}
              <button
                type="button"
                onClick={() => setSelectedMethod('va')}
                className={`w-full p-3 rounded-xl border-2 flex items-center justify-between text-left transition-all ${
                  selectedMethod === 'va'
                    ? 'border-sky-600 bg-sky-50 text-sky-900 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Virtual Account Otomatis</div>
                    <div className="text-[10px] text-slate-500">BCA, Mandiri, BRI, BNI, Permata</div>
                  </div>
                </div>
                {selectedMethod === 'va' && <CheckCircle2 className="w-4 h-4 text-sky-600" />}
              </button>

              {/* Credit/Debit Card */}
              <button
                type="button"
                onClick={() => setSelectedMethod('card')}
                className={`w-full p-3 rounded-xl border-2 flex items-center justify-between text-left transition-all ${
                  selectedMethod === 'card'
                    ? 'border-sky-600 bg-sky-50 text-sky-900 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Kartu Kredit / Debit Online</div>
                    <div className="text-[10px] text-slate-500">Visa, Mastercard, JCB</div>
                  </div>
                </div>
                {selectedMethod === 'card' && <CheckCircle2 className="w-4 h-4 text-sky-600" />}
              </button>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePay}
              disabled={isProcessing}
              className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Memproses Transaksi...</span>
              ) : (
                <span>Bayar Sekarang (Rp 49.000)</span>
              )}
            </button>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Garansi 100% uang kembali jika laporan tidak terkirim</span>
            </div>
          </div>
        ) : (
          /* Payment Success State */
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Pembayaran Berhasil!
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              Sertifikat resmi atas nama <strong>{user.name}</strong> dan laporan 12 halaman telah dikirimkan ke <strong>{user.email}</strong>.
            </p>

            <div className="my-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-500">Nomor Lisensi:</span>
                <span className="font-mono font-bold text-slate-800">{licenseId || 'WWIQ-ID-992140'}</span>
              </div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-500">Skor Terverifikasi:</span>
                <span className="font-bold text-sky-600">IQ {score} (Unggul)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Status Database & Email:</span>
                <span className="font-bold text-emerald-600">Tersimpan & Terkirim</span>
              </div>
            </div>

            <button
              onClick={() => alert(`Mengunduh Sertifikat IQ_${user.name.replace(/\s+/g, '_')}.pdf...`)}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Sertifikat PDF (300 DPI)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
