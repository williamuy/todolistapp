import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://skawekiemnsgeyqddxrs.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY; // Ensure this matches your .env.local
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
