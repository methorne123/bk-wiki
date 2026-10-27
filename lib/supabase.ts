import { createClient } from "@supabase/supabase-js";

// Client công khai: dùng cho trang web, bị giới hạn bởi RLS
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Client quản trị: CHỈ dùng ở server (API route, script)
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);