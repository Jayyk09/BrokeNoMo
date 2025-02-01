import { createClient } from "@supabase/supabase-js";

// Replace with your actual Supabase project URL and anon key
const SUPABASE_URL = "https://your-project-id.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function getTranscriptByNum(phoneNumber: string) {
    if (!phoneNumber) {
        console.error("Phone number is required.");
        return null;
    }

    const { data, error } = await supabase
        .from("transcripts")
        .select("*") // You can specify specific columns like "id, transcript"
        .eq("phone_number", phoneNumber);

    if (error) {
        console.error("Error fetching transcript:", error);
        return null;
    }
    console.log("Fetched transcript:", data);
    return data.length > 0 ? data : null; // Return null if no records found
}


