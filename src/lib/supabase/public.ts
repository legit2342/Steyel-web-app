import { createClient } from "@supabase/supabase-js";

// Anonymous, cookie-free client for public marketing data (pricing plans and
// credit packages), so the pages using it can be statically rendered.
export function createPublicClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } },
  );
}
