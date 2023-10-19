"use client";
// import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const path = usePathname();
  const router = useRouter();
  console.log("🚀 ~ file: page.js:8 ~ Home ~ router:", router);

  useEffect(() => {
    if (path === "/") {
      router.replace("/dashboard");
    }
  }, [router]);

  return (
    <main>
    <h1 className="text-4xl text-red-700 text-center py-8">तो कैसे हो आप लोग</h1>
    </main>
  );
}

