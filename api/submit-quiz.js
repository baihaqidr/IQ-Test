import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, gender, ageGroup, score, licenseId, answers, utmParams, status } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Nama dan Email wajib diisi' });
  }

  const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL;

  if (!databaseUrl) {
    console.warn('⚠️ DATABASE_URL belum dikonfigurasi di Environment Variables.');
    return res.status(200).json({
      success: true,
      simulated: true,
      message: 'Database belum terhubung. Tambahkan DATABASE_URL di Vercel/Neon.',
    });
  }

  try {
    const sql = neon(databaseUrl);

    // Auto-create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS public.iq_results (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        gender TEXT,
        age_group TEXT,
        score INTEGER NOT NULL,
        license_id TEXT UNIQUE NOT NULL,
        status TEXT DEFAULT 'completed',
        answers JSONB,
        utm_params JSONB,
        email_sent BOOLEAN DEFAULT false,
        email_sent_at TIMESTAMP WITH TIME ZONE
      );
    `;

    // Insert or update lead result
    const result = await sql`
      INSERT INTO public.iq_results (
        name, email, gender, age_group, score, license_id, status, answers, utm_params
      ) VALUES (
        ${name}, ${email}, ${gender}, ${ageGroup}, ${score}, ${licenseId}, ${status || 'completed'}, ${JSON.stringify(answers || {})}, ${JSON.stringify(utmParams || {})}
      )
      ON CONFLICT (license_id) 
      DO UPDATE SET 
        status = EXCLUDED.status,
        email_sent = EXCLUDED.email_sent
      RETURNING *;
    `;

    return res.status(200).json({
      success: true,
      data: result[0],
      message: 'Data kuis berhasil disimpan ke Neon PostgreSQL!',
    });
  } catch (error) {
    console.error('Error executing query on Neon:', error);
    return res.status(500).json({ error: error.message || 'Gagal menyimpan ke database' });
  }
}
