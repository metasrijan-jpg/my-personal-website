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
          <SectionHeading eyebrow="Contact" title="Book your AI marketing consultation" text="Share your goals, current bottlenecks, and preferred consultation details. I will review your request and respond with the next step." />
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="premium-card overflow-hidden rounded-[8px] p-2 sm:p-4">
            <FlodeskForm />
          </div>
          <div className="space-y-5">
            <Reveal className="premium-card rounded-[8px] p-7">
              <h2 className="font-heading text-2xl font-bold">Contact Information</h2>
              <div className="mt-6 space-y-4">
                <p className="flex gap-3 leading-7 text-muted"><Phone className="mt-1 text-gold" size={20} /> {brand.phone}</p>
                <p className="flex gap-3 leading-7 text-muted"><Mail className="mt-1 text-gold" size={20} /> {brand.email}</p>
                <p className="flex gap-3 leading-7 text-muted"><MapPin className="mt-1 text-gold" size={20} /> {brand.address}</p>
                <p className="flex gap-3 leading-7 text-muted"><Clock className="mt-1 text-gold" size={20} /> Consultations by appointment</p>
              </div>
            </Reveal>
            <Reveal className="premium-card overflow-hidden rounded-[8px]">
              <div className="border-b border-ink/10 p-7">
                <h2 className="font-heading text-2xl font-bold">Schedule a consultation</h2>
                <p className="mt-3 leading-7 text-muted">Choose a convenient time directly from the calendar below.</p>
              </div>
              <iframe
                src="https://calendly.com/metasrijan/new-meeting?hide_gdpr_banner=1"
                title="Schedule a consultation with MetaSrijan"
                className="h-[720px] w-full"
              />
              <div className="border-t border-ink/10 p-5 text-center">
                <a
                  href="https://calendly.com/metasrijan/new-meeting"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-gold underline underline-offset-4 hover:text-ink"
                >
                  Open Calendly in a new tab
                </a>
              </div>
            </Reveal>
            <Reveal className="premium-card overflow-hidden rounded-[8px]">
              <div className="grid min-h-72 place-items-center bg-[linear-gradient(135deg,#15130F,#2D2A22)] p-8 text-center text-white">
                <div>
                  <MapPin className="mx-auto mb-4 text-gold" size={34} />
                  <h3 className="font-heading text-2xl font-bold">Google Maps Placeholder</h3>
                  <p className="mt-3 text-white/68">Chysundol, Budhanilkantha, Kathmandu, Nepal</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
