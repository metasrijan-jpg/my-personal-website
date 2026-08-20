"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FlodeskSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = window.setTimeout(() => router.replace("/thank-you"), 1800);
    return () => window.clearTimeout(timeout);
  }, [router]);

  return (
    <section className="section min-h-[60vh]">
      <div className="container grid min-h-[50vh] place-items-center text-center">
        <p className="text-lg font-semibold text-muted">Thank you—confirming your submission…</p>
      </div>
    </section>
  );
}
