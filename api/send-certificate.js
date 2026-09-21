export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, score, licenseId, classification } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Nama dan Email wajib diisi' });
  }

  const brevoApiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.SENDER_EMAIL || 'baihaqidr@gmail.com';
  const senderName = process.env.SENDER_NAME || 'cognitive Official';

  if (!brevoApiKey) {
    console.error('BREVO_API_KEY is missing in Vercel Environment Variables');
    return res.status(500).json({ error: 'BREVO_API_KEY belum dikonfigurasi di Environment Variables Vercel.' });
  }

  // Template Email HTML Resmi Berdesain cognitive™ Executive Dossier
  const emailHtml = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f8fa; color: #0b1419; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .header { background: #0b1419; color: #ffffff; padding: 32px 24px; text-align: center; }
        .logo-text { font-size: 22px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff; }
        .logo-accent { color: #f26207; }
        .header p { margin: 6px 0 0 0; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-family: monospace; }
        .content { padding: 32px 24px; }
        .archetype-box { background: #fff7ed; border: 1px solid #fed7aa; border-radius: 12px; padding: 16px; margin-bottom: 24px; }
        .archetype-title { font-size: 11px; font-weight: bold; text-transform: uppercase; color: #c2410c; letter-spacing: 0.5px; margin: 0 0 4px 0; font-family: monospace; }
        .archetype-name { font-size: 18px; font-weight: 900; color: #0b1419; margin: 0; }
        .score-card { background: #0b1419; color: #ffffff; border-radius: 16px; padding: 24px; text-align: center; margin: 24px 0; }
        .score-num { font-size: 52px; font-weight: 900; color: #f26207; margin: 6px 0; letter-spacing: -1px; }
        .badge { display: inline-block; background: rgba(242, 98, 7, 0.15); color: #fed7aa; padding: 6px 16px; border-radius: 9999px; font-size: 12px; font-weight: bold; border: 1px solid rgba(242, 98, 7, 0.3); font-family: monospace; }
        .details-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 13px; }
        .details-table td { padding: 12px 0; border-bottom: 1px solid #f1f5f9; }
        .details-table td:last-child { text-align: right; font-weight: bold; color: #0b1419; font-family: monospace; }
        .btn { display: inline-block; background: #0b1419; color: #ffffff !important; padding: 15px 30px; border-radius: 10px; font-weight: bold; text-decoration: none; font-size: 14px; margin-top: 16px; }
        .footer { background: #f6f8fa; padding: 20px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; font-family: monospace; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-text">cognitive<span class="logo-accent">.co</span></div>
          <p>Standardized WAIS-IV Cognitive Assessment</p>
        </div>
        
        <div class="content">
          <p style="font-size: 15px;">Halo <strong>${name}</strong>,</p>
          <p style="color: #64748b; line-height: 1.6; font-size: 13px;">
            Hasil evaluasi kognitif penalaran matriks dan profil arketipe pemikiran Anda telah selesai diproses secara resmi oleh cognitive™ Psychometric Engine.
          </p>
          
          <div class="archetype-box">
            <div class="archetype-title">Arketipe Kognitif Terverifikasi</div>
            <div class="archetype-name">The Strategic Architect / Mastermind</div>
          </div>

          <div class="score-card">
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; font-family: monospace;">Skor Terkalibrasi Anda</span>
            <div class="score-num">${score} <span style="font-size: 20px; color: #64748b;">/ 145</span></div>
            <div class="badge">${classification || 'Superior Intelligence (Top 4.8%)'}</div>
          </div>

          <table class="details-table">
            <tr>
              <td style="color: #64748b;">Nama Peserta</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td style="color: #64748b;">Nomor Lisensi ID</td>
              <td style="color: #f26207;">${licenseId || 'COG-ID-992140'}</td>
            </tr>
            <tr>
              <td style="color: #64748b;">Standar Psikometrik</td>
              <td>Wechsler Adult Intelligence Scale (WAIS-IV)</td>
            </tr>
            <tr>
              <td style="color: #64748b;">Status Sertifikat</td>
              <td style="color: #10b981;">✔ Terverifikasi & Aktif</td>
            </tr>
          </table>

          <div style="text-align: center; margin: 26px 0;">
            <a href="https://cognitive-official.vercel.app" class="btn">Buka Sertifikat & Dossier Lengkap</a>
          </div>

          <p style="font-size: 12px; color: #94a3b8; line-height: 1.6;">
            Gunakan nomor lisensi di atas untuk memvalidasi keaslian sertifikat ini di portal verifikasi.
          </p>
        </div>

        <div class="footer">
          <p>© 2026 cognitive™. All Rights Reserved.<br>
          Email ini dikirimkan secara otomatis ke ${email}.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: email.trim(), name: name.trim() }],
        subject: `[cognitive] Laporan Profil Kognitif & Sertifikat IQ: Skor ${score} - ${name}`,
        htmlContent: emailHtml,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Brevo API Error:', data);
      return res.status(response.status).json({ error: data.message || 'Brevo API Error', details: data });
    }

    return res.status(200).json({
      success: true,
      message: 'Email sertifikat berhasil dikirim ke penerima!',
      data,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Gagal mengirim email' });
  }
}
