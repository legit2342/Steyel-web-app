import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Service-role client for privileged, server-only operations (e.g. deleting a user).
 * Returns null when SUPABASE_SERVICE_ROLE_KEY isn't configured so callers can fail
 * gracefully instead of crashing.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) return null;

  return createSupabaseClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
