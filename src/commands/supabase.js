import {createClient} from '@supabase/supabase-js';

const supabaseUrl="https://qyvzyshzxcutgozjsoxz.supabase.co"
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMzgyMTk1LCJleHAiOjE5NTc5NTgxOTV9.tvrNxqMu_cAmkPcwaXL8ZXwl_5MUPonp_m5thKKM03U"
const supabase=createClient(supabaseUrl,supabaseKey)
export default function useSupabase(){
    return{supabase}
}