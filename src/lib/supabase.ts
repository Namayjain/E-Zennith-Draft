import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes("your-project-ref") &&
  supabaseUrl.startsWith("http")
);

let _supabaseClient: SupabaseClient | null = null;
let _supabaseServerClient: SupabaseClient | null = null;

/**
 * Returns public Supabase client instance.
 * Gracefully handles unconfigured states.
 */
export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured) {
    return null;
  }

  if (!_supabaseClient) {
    _supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    });
  }

  return _supabaseClient;
}

/**
 * Server-side Supabase client (using service role key or anon key).
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  if (!isSupabaseConfigured) {
    return null;
  }

  if (!_supabaseServerClient) {
    _supabaseServerClient = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        persistSession: false,
      },
    });
  }

  return _supabaseServerClient;
}

export interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
  status: "new" | "contacted" | "qualified" | "converted" | "archived";
  notes?: string;
}

export interface JobRole {
  id: string;
  created_at?: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  is_hot: boolean;
  is_active: boolean;
}

export interface JobApplication {
  id: string;
  created_at: string;
  job_id?: string;
  job_title: string;
  name: string;
  email: string;
  phone?: string;
  portfolio?: string;
  experience?: string;
  note?: string;
  status: "new" | "reviewing" | "shortlisted" | "rejected" | "hired";
  notes?: string;
}
