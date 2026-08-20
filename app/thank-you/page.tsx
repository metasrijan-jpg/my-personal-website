import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your consultation request has been received.",
  robots: { index: false, follow: false }
};

const whatsappNumber = "9779851401711";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I just submitted an inquiry through your website.")}`;
const phoneLink = "tel:+9779851401711";

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
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-gold">
              Return home <ArrowRight size={18} />
            </Link>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 font-semibold text-ink transition hover:border-gold hover:text-gold">
              WhatsApp us <MessageCircle size={18} />
            </a>
            <a href={phoneLink} className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 font-semibold text-ink transition hover:border-gold hover:text-gold">
              Call us <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
