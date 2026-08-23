import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Mail, MessageCircle, Phone, Play, Sparkles } from "lucide-react";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your consultation request has been received.",
  robots: { index: false, follow: false }
};

const whatsappLink = `https://wa.me/${brand.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I just submitted an inquiry through your website.")}`;
const phoneLink = `tel:${brand.phone.replace(/\s/g, "")}`;
const VIDEO_URL = "";
const verifiedSocials = brand.socials.filter((social) => social.href !== "#" && !social.href.startsWith("mailto:"));

const nextSteps = [
  ["01", "I review your request", "I’ll personally review the information you submitted."],
  ["02", "I’ll get in touch", "I’ll contact you using the details you provided."],
  ["03", "We discuss your goals", "We’ll talk through the challenge and possible next steps."]
];

export default function ThankYouPage() {
  return (
    <section className="section border-b border-ink/10">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[24px] bg-ink p-7 text-center text-white shadow-soft sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-gold/25 blur-3xl" />
            <div className="relative">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-gold text-ink"><Check size={32} strokeWidth={3} /></div>
              <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-gold">Submission confirmed</p>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-6xl">Thank you! Your request has been received.</h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Thanks for reaching out. I&apos;ve received your information and will review it shortly.</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3"><Link href="/" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-ink transition hover:bg-white">Back to home <ArrowRight size={18} /></Link><a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-gold hover:text-gold">Chat on WhatsApp <MessageCircle size={18} /></a></div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">What happens next?</p><h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">A simple path from inquiry to momentum.</h2></div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">{nextSteps.map(([number, title, text]) => <div key={number} className="premium-card rounded-[18px] p-6"><p className="font-heading text-4xl font-bold text-gold/50">{number}</p><h3 className="mt-5 font-heading text-xl font-bold">{title}</h3><p className="mt-2 leading-7 text-muted">{text}</p></div>)}</div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl border-t border-ink/10 pt-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">While you&apos;re here</p>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Watch this before we talk.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">A short introduction to the approach behind practical AI marketing and sustainable growth.</p>
          <div className="mt-8 aspect-video overflow-hidden rounded-[20px] bg-ink shadow-soft">
            {VIDEO_URL ? (
              <iframe
                className="size-full"
                src={VIDEO_URL}
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
                  <p className="mt-2 text-sm text-white/60">Add your YouTube embed URL to VIDEO_URL in this page when ready.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="premium-card rounded-[20px] p-7 sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Need to talk sooner?</p><h2 className="mt-3 font-heading text-2xl font-bold">Have a quick question?</h2><p className="mt-3 leading-7 text-muted">You can also reach me directly using WhatsApp, email, or phone.</p><div className="mt-6 flex flex-wrap gap-3"><a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1f7a4d] px-5 py-3 font-semibold text-white"><MessageCircle size={18} /> Chat with me</a><a href={`mailto:${brand.email}`} className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-semibold"><Mail size={18} /> Email me</a></div></div>
          <div className="premium-card rounded-[20px] p-7 sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Keep exploring</p><h2 className="mt-3 font-heading text-2xl font-bold">More useful next steps</h2><div className="mt-5 space-y-3"><Link href="/services" className="flex items-center justify-between rounded-xl bg-cream/80 px-4 py-3 font-semibold transition hover:bg-beige">Explore services <ArrowRight size={18} /></Link><Link href="/blog" className="flex items-center justify-between rounded-xl bg-cream/80 px-4 py-3 font-semibold transition hover:bg-beige">Read the insights <ArrowRight size={18} /></Link><a href={phoneLink} className="flex items-center justify-between rounded-xl bg-cream/80 px-4 py-3 font-semibold transition hover:bg-beige">Call {brand.owner} <Phone size={18} /></a></div></div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center"><div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-sm text-muted"><Sparkles size={16} className="text-gold" /> I&apos;ll be in touch soon</div>{verifiedSocials.length > 0 && <div className="mt-5 flex justify-center gap-3">{verifiedSocials.map((social) => { const Icon = social.icon; return <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="grid size-10 place-items-center rounded-full border border-ink/15 transition hover:border-gold hover:text-gold"><Icon size={17} /></a>; })}</div>}</div>
      </div>
    </section>
  );
}
