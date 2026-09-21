import { neon } from '@neondatabase/serverless';

const connectionString = 'postgresql://neondb_owner:npg_DhfJN4B1jtiV@ep-falling-darkness-azhnhkyq-pooler.c-3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

async function main() {
  const sql = neon(connectionString);
  console.log('Connecting to Neon PostgreSQL...');
  
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
  
  console.log('✅ TABEL iq_results BERHASIL DIBUAT DI NEON!');

  const countResult = await sql`SELECT count(*) FROM public.iq_results;`;
  console.log('✅ Jumlah data tersimpan saat ini:', countResult[0].count);
}

main().catch(err => {
  console.error('❌ Connection error:', err);
});
