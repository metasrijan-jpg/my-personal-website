"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import Link from "next/link";
import { brand } from "@/lib/data";

export function FloatingActions() {
  const whatsapp = `https://wa.me/${brand.phone.replace(/\D/g, "")}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <Link
        href={whatsapp}
        aria-label="Chat on WhatsApp"
        className="grid size-12 place-items-center rounded-full bg-[#1f7a4d] text-white shadow-soft transition hover:-translate-y-1"
      >
        <MessageCircle size={21} />
      </Link>
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="grid size-12 place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-soft transition hover:-translate-y-1"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
