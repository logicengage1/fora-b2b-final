import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Inquiry {
  id?: string;
  full_name: string;
  company_name: string;
  email: string;
  project_description: string;
  file_names?: string[];
  status?: string;
  created_at?: string;
}
