import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Sparkles, Target, Workflow } from "lucide-react";
import { FlodeskForm } from "@/components/flodesk-form";
import { FAQ } from "@/components/faq";
import { Reveal } from "@/components/motion";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MetaSrijan to book an AI marketing consultation with Srijan Gharti."
};

const faqs = [
  { question: "How soon can we start?", answer: "Most consultations can begin within a few business days after your inquiry." },
  { question: "Do you work with businesses outside Nepal?", answer: "Yes. Remote consulting is available for international clients." },
  { question: "What should I prepare before booking?", answer: "Bring your website, current marketing channels, goals, and any campaign data you can share." }
];

const benefits = [
  { title: "AI marketing strategy", icon: BrainCircuit },
  { title: "Lead generation", icon: Target },
  { title: "Smarter automation", icon: Workflow },
  { title: "Practical growth advice", icon: Sparkles }
];

const whatsappLink = `https://wa.me/${brand.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I would like to discuss my business goals.")}`;
const verifiedSocials = brand.socials.filter((social) => social.href !== "#" && !social.href.startsWith("mailto:"));

export default function ContactPage() {
  return (
    <>
      <section className="section contact-form-section relative">
        <div className="container">
          <Reveal className="premium-card overflow-hidden rounded-[24px]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="ai-grid bg-ink p-6 text-white sm:p-8 lg:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">A clearer next step</p>
                <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">Let&apos;s build something that grows.</h2>
                <p className="mt-5 max-w-md leading-7 text-white/68">I help small and growing businesses turn AI, digital marketing, and better systems into a more reliable source of leads and sales.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {benefits.map(({ title, icon: Icon }) => <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-sm font-semibold text-white/84"><Icon size={18} className="shrink-0 text-gold" /> {title}</div>)}
                </div>
              </div>
              <div className="bg-white/70 p-4 sm:p-7 lg:p-10">
                <div className="mb-5">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Prefer to start in writing?</p>
                  <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Send your inquiry</h2>
                  <p className="mt-3 leading-7 text-muted">Share what you&apos;re working toward. The form takes less than two minutes.</p>
                </div>
                <div className="rounded-[18px] border border-ink/10 bg-cream/55 p-3 shadow-sm sm:p-4"><FlodeskForm /></div>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="premium-card rounded-[20px] p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Why reach out?</p>
              <h2 className="mt-3 font-heading text-3xl font-bold">Good marketing starts with a useful conversation.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted">Whether you need a sharper offer, more qualified leads, or practical automation, we can start with the bottleneck that matters most right now.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream/80 p-4"><Target className="text-gold" size={21} /><p className="mt-3 font-semibold">Focused diagnosis</p><p className="mt-1 text-sm leading-6 text-muted">Clear priorities before more tools or spend.</p></div>
                <div className="rounded-2xl bg-cream/80 p-4"><Sparkles className="text-gold" size={21} /><p className="mt-3 font-semibold">Practical ideas</p><p className="mt-1 text-sm leading-6 text-muted">Advice shaped around your team and goals.</p></div>
              </div>
            </Reveal>
            <Reveal className="premium-card rounded-[20px] p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Alternative contact</p>
              <h2 className="mt-3 font-heading text-2xl font-bold">Prefer a direct message?</h2>
              <div className="mt-6 space-y-4">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-[#1f7a4d] px-4 py-3 font-semibold text-white transition hover:-translate-y-0.5"><MessageCircle size={19} /> Chat on WhatsApp</a>
                <a href={`mailto:${brand.email}`} className="flex gap-3 leading-7 text-muted transition hover:text-gold"><Mail className="mt-1 shrink-0 text-gold" size={20} /> {brand.email}</a>
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="flex gap-3 leading-7 text-muted transition hover:text-gold"><Phone className="mt-1 shrink-0 text-gold" size={20} /> {brand.phone}</a>
                <p className="flex gap-3 leading-7 text-muted"><MapPin className="mt-1 shrink-0 text-gold" size={20} /> {brand.address}</p>
                <p className="flex gap-3 leading-7 text-muted"><Clock className="mt-1 shrink-0 text-gold" size={20} /> Consultations by appointment</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="premium-card mt-8 rounded-[20px] p-7 sm:p-9">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Stay connected</p><h2 className="mt-3 font-heading text-2xl font-bold">Let&apos;s keep the conversation moving.</h2><p className="mt-2 text-muted">Social links will appear here as verified profiles are added.</p></div>
              {verifiedSocials.length > 0 && <div className="flex gap-3">{verifiedSocials.map((social) => { const Icon = social.icon; return <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="grid size-11 place-items-center rounded-full border border-ink/15 transition hover:border-gold hover:text-gold"><Icon size={18} /></a>; })}</div>}
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <FAQ items={faqs} />
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-8"><p className="font-heading text-xl font-bold">Ready to find your next growth lever?</p><Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-semibold text-white transition hover:bg-gold">Explore services <ArrowRight size={17} /></Link></div>
        </div>
      </section>
      <section className="relative overflow-hidden border-b border-ink/10 py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-ai/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-gold/15 blur-3xl" />
        <div className="container">
          <div className="relative max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold">Contact & consultation</p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Let&apos;s talk about growing your business.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Tell me a little about your business and what you&apos;re trying to achieve. I&apos;ll review your message and get back to you personally.</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-ink/65">
              {["No pressure", "No spam", "Personal response"].map((item) => <span key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> {item}</span>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
