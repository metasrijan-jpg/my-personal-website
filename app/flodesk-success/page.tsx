"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FlodeskSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/thank-you");
  }, [router]);

  return (
    <section className="section min-h-[60vh]">
      <div className="container grid min-h-[50vh] place-items-center text-center">
        <p className="text-lg font-semibold text-muted">Thank you—confirming your submission…</p>
      </div>
    </section>
  );
}
