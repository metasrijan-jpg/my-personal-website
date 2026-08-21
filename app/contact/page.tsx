import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FlodeskForm } from "@/components/flodesk-form";
import { FAQ } from "@/components/faq";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
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

export default function ContactPage() {
  return (
    <>
      <section className="section border-b border-ink/10">
        <div className="container">
          <SectionHeading eyebrow="Contact" title="Start a conversation" text="Share your goals and current bottlenecks through the form. Flodesk will receive your details and handle the follow-up email sequence." />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Reveal className="premium-card rounded-[18px] p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Prefer to start in writing?</p>
              <h2 className="mt-3 font-heading text-3xl font-bold">Send your inquiry</h2>
              <p className="mt-4 leading-7 text-muted">Complete the form below. Your details will go directly to Flodesk, where your confirmation and follow-up emails can be managed.</p>
              <div className="mt-7 rounded-[12px] bg-cream/70 p-3 sm:p-5"><FlodeskForm /></div>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="premium-card rounded-[18px] p-7 sm:p-9">
              <h2 className="font-heading text-2xl font-bold">Contact information</h2>
              <div className="mt-6 space-y-4">
                <p className="flex gap-3 leading-7 text-muted"><Phone className="mt-1 shrink-0 text-gold" size={20} /> {brand.phone}</p>
                <p className="flex gap-3 leading-7 text-muted"><Mail className="mt-1 shrink-0 text-gold" size={20} /> {brand.email}</p>
                <p className="flex gap-3 leading-7 text-muted"><MapPin className="mt-1 shrink-0 text-gold" size={20} /> {brand.address}</p>
                <p className="flex gap-3 leading-7 text-muted"><Clock className="mt-1 shrink-0 text-gold" size={20} /> Consultations by appointment</p>
              </div>
            </Reveal>
            <Reveal className="premium-card overflow-hidden rounded-[18px]">
              <div className="grid min-h-72 place-items-center bg-[linear-gradient(135deg,#15130F,#2D2A22)] p-8 text-center text-white">
                <div>
                  <MapPin className="mx-auto mb-4 text-gold" size={34} />
                  <h3 className="font-heading text-2xl font-bold">Based in Kathmandu</h3>
                  <p className="mt-3 text-white/68">Chysundol, Budhanilkantha, Kathmandu, Nepal</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-8">
            <FAQ items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
