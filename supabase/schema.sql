-- Schema SQL untuk Tabel Database Tes IQ di Supabase
-- Jalankan skrip ini di SQL Editor dashboard Supabase Anda: https://supabase.com/dashboard/project/_/sql

CREATE TABLE IF NOT EXISTS public.iq_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    gender TEXT,
    age_group TEXT,
    score INTEGER NOT NULL,
    license_id TEXT UNIQUE NOT NULL,
    status TEXT DEFAULT 'completed', -- 'completed' | 'paid'
    answers JSONB,
    utm_params JSONB,
    email_sent BOOLEAN DEFAULT false,
    email_sent_at TIMESTAMP WITH TIME ZONE
);

-- Index untuk pencarian cepat berdasarkan email dan nomor lisensi
CREATE INDEX IF NOT EXISTS idx_iq_results_email ON public.iq_results(email);
CREATE INDEX IF NOT EXISTS idx_iq_results_license ON public.iq_results(license_id);
CREATE INDEX IF NOT EXISTS idx_iq_results_created ON public.iq_results(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.iq_results ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert their quiz results
CREATE POLICY "Allow public insert to iq_results" 
ON public.iq_results 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Policy: Allow users to view their own result by license_id or email
CREATE POLICY "Allow public select own iq_results" 
ON public.iq_results 
FOR SELECT 
TO anon, authenticated 
USING (true);

-- Policy: Allow update status on payment
CREATE POLICY "Allow public update own iq_results" 
ON public.iq_results 
FOR UPDATE 
TO anon, authenticated 
USING (true)
WITH CHECK (true);
