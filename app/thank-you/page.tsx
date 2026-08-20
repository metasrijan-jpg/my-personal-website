import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageCircle, Phone, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your consultation request has been received.",
  robots: { index: false, follow: false }
};

const whatsappNumber = "9779851401711";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I just submitted an inquiry through your website.")}`;
const phoneLink = "tel:+9779851401711";
const youtubeVideoId = "";

export default function ThankYouPage() {
  return (
    <section className="section border-b border-ink/10">
      <div className="container">
        <div className="mx-auto grid min-h-[60vh] max-w-2xl place-items-center text-center">
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

        <div className="mx-auto max-w-4xl border-t border-ink/10 pt-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">A quick message for you</p>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Watch what happens next</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
            Add your welcome video here to introduce your process and help clients feel confident about the next step.
          </p>
          <div className="mt-8 aspect-video overflow-hidden rounded-[8px] bg-ink shadow-soft">
            {youtubeVideoId ? (
              <iframe
                className="size-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Welcome video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="grid size-full place-items-center p-8 text-white">
                <div>
                  <div className="mx-auto grid size-16 place-items-center rounded-full border border-gold/60 text-gold">
                    <Play size={26} fill="currentColor" />
                  </div>
                  <p className="mt-4 font-semibold">Your welcome video will appear here</p>
                  <p className="mt-2 text-sm text-white/60">Add the YouTube video ID in the page code when ready.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
