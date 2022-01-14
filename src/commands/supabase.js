import {createClient} from '@supabase/supabase-js';

const supabaseUrl="https://kdsyenoxljzipllzsder.supabase.co"
const supabaseKey="e64b9f04-902c-469c-82be-993324adcc08"
const supabase=createClient(supabaseUrl,supabaseKey)
console.log(supabase)
export default function useSupabase(){
    return{supabase}
}