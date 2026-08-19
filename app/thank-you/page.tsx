import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your consultation request has been received.",
  robots: { index: false, follow: false }
};

export default function ThankYouPage() {
  return (
    <section className="section min-h-[70vh] border-b border-ink/10">
      <div className="container grid min-h-[60vh] place-items-center">
        <div className="max-w-2xl text-center">
          <CheckCircle2 className="mx-auto text-gold" size={64} strokeWidth={1.5} />
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-gold">Inquiry received</p>
          <h1 className="mt-4 font-heading text-5xl font-bold tracking-tight sm:text-6xl">Thank you for reaching out.</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
            Your request is safely with us. We’ll review your goals and get back to you with the next step shortly.
          </p>
          <Link href="/" className="button-primary mt-9 inline-flex items-center gap-2">
            Return home <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
