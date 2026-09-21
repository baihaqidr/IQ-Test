import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Menyimpan hasil kuis dan lead ke Supabase
 */
export async function saveQuizResultToSupabase(data) {
  if (!supabase) {
    console.warn('⚠️ Supabase belum dikonfigurasi. Data disimpan secara lokal.');
    return { data: null, error: 'Supabase not configured' };
  }

  try {
    const { data: insertedData, error } = await supabase
      .from('iq_results')
      .insert([
        {
          name: data.name,
          email: data.email,
          gender: data.gender,
          age_group: data.ageGroup,
          score: data.score,
          license_id: data.licenseId,
          answers: data.answers || {},
          utm_params: data.utmParams || {},
          status: data.status || 'completed',
        }
      ])
      .select()
      .single();

    if (error) throw error;
    return { data: insertedData, error: null };
  } catch (err) {
    console.error('Error saving to Supabase:', err);
    return { data: null, error: err.message };
  }
}

/**
 * Update status pembayaran saat checkout berhasil
 */
export async function updatePaymentStatus(licenseId) {
  if (!supabase) return;
  try {
    await supabase
      .from('iq_results')
      .update({ status: 'paid' })
      .eq('license_id', licenseId);
  } catch (err) {
    console.error('Error updating payment in Supabase:', err);
  }
}
