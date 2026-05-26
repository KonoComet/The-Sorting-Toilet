import { createClient } from "@supabase/supabase-js";

const REGISTRATION_KEY = "sorting-toilet-result-registration-v1";
const HOUSE_KEYS = ["A", "B", "C", "D", "E"];

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export function createAttemptId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }
  return `attempt-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export async function recordResult({ house, language, attemptId }) {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const { error } = await supabase
    .from("sorting_results")
    .insert({
      house,
      language,
      attempt_id: attemptId
    });

  if (error) {
    throw error;
  }

  return { ok: true };
}

export async function getGlobalStats() {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  const entries = await Promise.all(
    HOUSE_KEYS.map(async (house) => {
      const { count, error } = await supabase
        .from("sorting_results")
        .select("id", { count: "exact", head: true })
        .eq("house", house);

      if (error) {
        throw error;
      }

      return [house, count ?? 0];
    })
  );

  return Object.fromEntries(entries);
}

export function getStoredResultRegistration() {
  try {
    return JSON.parse(localStorage.getItem(REGISTRATION_KEY));
  } catch {
    return null;
  }
}

export function storeResultRegistration({ attemptId, house, ordinal }) {
  localStorage.setItem(REGISTRATION_KEY, JSON.stringify({ attemptId, house, ordinal }));
}

export function clearCurrentResultRegistration() {
  localStorage.removeItem(REGISTRATION_KEY);
}
