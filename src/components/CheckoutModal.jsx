import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Lock, CreditCard, Smartphone, QrCode, Download } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, user, score, licenseId, onPaymentSuccess }) {
  const [selectedMethod, setSelectedMethod] = useState('qris');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  if (!isOpen) return null;

  const handlePay = async () => {
    setIsProcessing(true);
    
    if (onPaymentSuccess) {
      await onPaymentSuccess();
    }

    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isPaid ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#F26207] uppercase tracking-wider mb-2 font-mono">
              <Lock className="w-3.5 h-3.5" /> cognitive™ Secure Checkout
            </div>
            <h3 className="text-xl font-black text-[#0B1419]">
              Selesaikan Pembayaran
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5 font-mono">
              Sertifikat Eksekutif & Dossier Profil Kognitif IQ {score}
            </p>

            {/* Price Summary Box */}
            <div className="my-5 p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#0B1419] block">Dossier Lengkap 15 Halaman + Sertifikat</span>
                <span className="text-[11px] text-neutral-500 font-mono">PDF 300 DPI seumur hidup</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-400 line-through block font-mono">Rp 199.000</span>
                <span className="text-lg font-black text-[#F26207]">Rp 49.000</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2.5 font-mono">
              Pilih Metode Pembayaran:
            </label>
            <div className="space-y-2 mb-6">
              {/* QRIS */}
              <button
                type="button"
                onClick={() => setSelectedMethod('qris')}
                className={`w-full p-3 rounded-xl border-2 flex items-center justify-between text-left transition-all cursor-pointer ${
                  selectedMethod === 'qris'
                    ? 'border-[#F26207] bg-orange-50/50 text-[#0B1419] shadow-xs'
                    : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#F26207] flex items-center justify-center font-bold text-xs">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1419]">QRIS (Semua E-Wallet / M-Banking)</div>
                    <div className="text-[10px] text-neutral-500 font-mono">GoPay, OVO, Dana, ShopeePay, BCA, dll.</div>
                  </div>
                </div>
                {selectedMethod === 'qris' && <CheckCircle2 className="w-4 h-4 text-[#F26207]" />}
              </button>

              {/* Virtual Account */}
              <button
                type="button"
                onClick={() => setSelectedMethod('va')}
                className={`w-full p-3 rounded-xl border-2 flex items-center justify-between text-left transition-all cursor-pointer ${
                  selectedMethod === 'va'
                    ? 'border-[#F26207] bg-orange-50/50 text-[#0B1419] shadow-xs'
                    : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1419]">Virtual Account Otomatis</div>
                    <div className="text-[10px] text-neutral-500 font-mono">BCA, Mandiri, BRI, BNI, Permata</div>
                  </div>
                </div>
                {selectedMethod === 'va' && <CheckCircle2 className="w-4 h-4 text-[#F26207]" />}
              </button>

              {/* Credit/Debit Card */}
              <button
                type="button"
                onClick={() => setSelectedMethod('card')}
                className={`w-full p-3 rounded-xl border-2 flex items-center justify-between text-left transition-all cursor-pointer ${
                  selectedMethod === 'card'
                    ? 'border-[#F26207] bg-orange-50/50 text-[#0B1419] shadow-xs'
                    : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center font-bold text-xs">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1419]">Kartu Kredit / Debit Online</div>
                    <div className="text-[10px] text-neutral-500 font-mono">Visa, Mastercard, JCB, GPN</div>
                  </div>
                </div>
                {selectedMethod === 'card' && <CheckCircle2 className="w-4 h-4 text-[#F26207]" />}
              </button>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePay}
              disabled={isProcessing}
              className="w-full py-4 rounded-xl font-bold text-sm bg-[#0B1419] hover:bg-[#F26207] text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Memproses Transaksi...</span>
              ) : (
                <span>Bayar Sekarang (Rp 49.000)</span>
              )}
            </button>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Garansi 100% uang kembali jika laporan tidak sesuai</span>
            </div>
          </div>
        ) : (
          /* Payment Success State */
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1419]">
              Pembayaran Berhasil!
            </h3>
            <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
              Sertifikat resmi atas nama <strong>{user.name}</strong> dan dossier lengkap 15 halaman telah dikirimkan ke <strong>{user.email}</strong>.
            </p>

            <div className="my-6 p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-left font-mono text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-500">Nomor Lisensi:</span>
                <span className="font-bold text-[#0B1419]">{licenseId || 'COG-ID-992140'}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-500">Skor Terverifikasi:</span>
                <span className="font-bold text-[#F26207]">IQ {score} (Superior)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Status Pengiriman:</span>
                <span className="font-bold text-emerald-600">Terkirim ke Email</span>
              </div>
            </div>

            <button
              onClick={() => alert(`Mengunduh Sertifikat cognitive_IQ_${user.name.replace(/\s+/g, '_')}.pdf...`)}
              className="w-full py-4 rounded-xl font-bold text-sm bg-[#0B1419] hover:bg-[#F26207] text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
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
