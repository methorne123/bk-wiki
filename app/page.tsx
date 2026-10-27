import { Suspense } from "react";
import { supabase } from "@/lib/supabase";

async function CategoryList() {
  const { data, error } = await supabase.from("categories").select("*");

  return (
    <>
      {error && <p className="text-red-600">Lỗi: {error.message}</p>}
      <ul className="mt-4 list-disc pl-6">
        {data?.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </>
  );
}

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">BK Wiki</h1>
      <Suspense fallback={<p className="mt-4">Đang tải...</p>}>
        <CategoryList />
      </Suspense>
    </main>
  );
}