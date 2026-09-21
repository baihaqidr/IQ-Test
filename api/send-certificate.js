import { Resend } from 'resend';

// Vercel Serverless Function Handler
export default async function handler(req, res) {
  // Hanya menerima metode POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, score, licenseId, classification } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Nama dan Email wajib diisi' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  // Template Email HTML Resmi
  const emailHtml = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #0284c7, #4f46e5); color: #ffffff; padding: 32px 24px; text-align: center; }
        .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
        .header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.9; }
        .content { padding: 32px 24px; }
        .score-card { background: #0f172a; color: #ffffff; border-radius: 12px; padding: 24px; text-align: center; margin: 24px 0; }
        .score-num { font-size: 48px; font-weight: 900; color: #38bdf8; margin: 4px 0; }
        .badge { display: inline-block; background: rgba(56, 189, 248, 0.2); color: #7dd3fc; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold; }
        .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
        .details-table td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; }
        .details-table td:last-child { text-align: right; font-weight: bold; }
        .certificate-box { border: 2px dashed #cbd5e1; border-radius: 12px; padding: 20px; background: #fafaf9; text-align: center; margin: 24px 0; }
        .btn { display: inline-block; background: linear-gradient(135deg, #0284c7, #4f46e5); color: #ffffff !important; padding: 14px 28px; border-radius: 10px; font-weight: bold; text-decoration: none; font-size: 14px; margin-top: 16px; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>SERTIFIKAT HASIL TES IQ RESMI</h1>
          <p>Worldwide IQ Test Authority • Standar WAIS-IV Internasional</p>
        </div>
        
        <div class="content">
          <p>Halo <strong>${name}</strong>,</p>
          <p>Selamat! Evaluasi kognitif dan matriks penalaran logika Anda telah selesai diproses dan divalidasi oleh sistem.</p>
          
          <div class="score-card">
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Skor Terverifikasi Anda</span>
            <div class="score-num">${score} <span style="font-size: 18px; color: #94a3b8;">/ 145</span></div>
            <div class="badge">${classification || 'Sangat Unggul / High IQ'}</div>
          </div>

          <table class="details-table">
            <tr>
              <td style="color: #64748b;">Nama Peserta</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td style="color: #64748b;">Nomor Lisensi ID</td>
              <td style="font-family: monospace; color: #0284c7;">${licenseId || 'WWIQ-ID-992140'}</td>
            </tr>
            <tr>
              <td style="color: #64748b;">Standar Kalibrasi</td>
              <td>Wechsler Adult Intelligence Scale (WAIS-IV)</td>
            </tr>
            <tr>
              <td style="color: #64748b;">Status Sertifikat</td>
              <td style="color: #10b981;">✔ Terverifikasi & Aktif</td>
            </tr>
          </table>

          <div class="certificate-box">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #1e293b;">Unduh Sertifikat Digital & Laporan Lengkap</h3>
            <p style="margin: 0; font-size: 12px; color: #64748b;">Sertifikat resolusi tinggi (PDF 300 DPI) siap dicetak dengan lisensi resmi.</p>
            <a href="https://id.wwiqtest.com" class="btn">Unduh Sertifikat PDF</a>
          </div>

          <p style="font-size: 12px; color: #64748b; line-height: 1.6;">
            Jika Anda membutuhkan verifikasi keaslian dokumen ini, silakan gunakan nomor lisensi di atas pada portal verifikasi resmi kami.
          </p>
        </div>

        <div class="footer">
          <p>© 2026 Worldwide IQ Test Authority. Seluruh Hak Cipta Dilindungi.<br>
          Email ini dikirimkan secara otomatis ke ${email}.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Jika Resend API Key tersedia di Environment Variables
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const fromEmail = process.env.EMAIL_FROM || 'Worldwide IQ Test <noreply@resend.dev>';

      const data = await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: `[Sertifikat Resmi] Hasil Tes IQ Anda: Skor ${score} - ${name}`,
        html: emailHtml,
      });

      return res.status(200).json({
        success: true,
        message: 'Email sertifikat berhasil dikirim melalui Resend!',
        data,
      });
    } else {
      // Mode simulasi/fallback jika API key belum diisi di dashboard Vercel
      console.log(`[Email Simulation] Mengirim email ke ${email} untuk ${name} (Skor IQ: ${score})`);
      return res.status(200).json({
        success: true,
        simulated: true,
        message: 'Simulasi pengiriman berhasil. Pasang RESEND_API_KEY di Vercel untuk pengiriman nyata.',
      });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Gagal mengirim email' });
  }
}
