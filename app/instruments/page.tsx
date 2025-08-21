import { createClient } from '@/lib/supabase/server';

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();

  return (
    <div>
      <h1>Here is the stuff from Supabase DB</h1>
      <pre>{JSON.stringify(instruments, null, 2)}</pre>
    </div>
  )
}