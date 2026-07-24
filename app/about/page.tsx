import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { brand, features } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Srijan Gharti",
  description: "Learn about Srijan Gharti, the digital marketing expert and AI marketing consultant behind MetaSrijan."
};

export default function AboutPage() {
  return (
    <>
      <section className="section border-b border-ink/10">
        <div className="container grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">About</p>
            <h1 className="font-heading text-5xl font-bold leading-tight sm:text-6xl">Strategy, AI systems, and marketing clarity for ambitious brands.</h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              I am {brand.owner}, founder of {brand.name}. I help businesses use AI-powered digital marketing to find sharper positioning, stronger campaigns, and more efficient growth systems.
            </p>
            <LinkButton href="/contact" variant="gold" className="mt-8">Book a Consultation</LinkButton>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mx-auto flex max-w-[560px] justify-center">
              <div className="premium-card relative aspect-square w-full overflow-hidden rounded-full border-8 border-white/70 bg-[#0f0e0b] shadow-soft">
                <Image
                  src="/images/srijan-gharti.png"
                  alt="Portrait of Srijan Gharti"
                  width={720}
                  height={720}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-3">
          {[
            ["My Story", "MetaSrijan exists to make advanced digital marketing and AI adoption feel understandable, elegant, and useful for real businesses."],
            ["Mission", "Help brands grow with marketing systems that combine human insight, automation, creativity, and measurable performance."],
            ["Vision", "Become a trusted AI marketing partner for businesses in Nepal and beyond that want premium strategy without unnecessary complexity."]
          ].map(([title, text]) => (
            <Reveal key={title} className="premium-card rounded-[8px] p-7">
              <h2 className="font-heading text-2xl font-bold">{title}</h2>
              <p className="mt-4 leading-7 text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-white/42">
        <div className="container">
          <SectionHeading eyebrow="Experience" title="A timeline of growth-focused work" />
          <Timeline />
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading align="left" eyebrow="Philosophy" title="Marketing should feel clear before it scales." text="The best growth work starts with a strong offer, a specific audience, useful creative, clean measurement, and a learning rhythm your team can sustain." />
            <div className="space-y-3">
              {["Trust before tactics", "Automation with human judgment", "Campaigns that teach, not just spend", "Premium experience across every touchpoint"].map((item) => (
                <div key={item} className="flex items-center gap-3 font-semibold"><CheckCircle2 className="text-gold" size={20} /> {item}</div>
              ))}
            </div>
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title} className="rounded-[8px] border border-ink/10 bg-white/70 p-6">
                  <Icon className="mb-4 text-gold" />
                  <h3 className="font-heading text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{feature.description}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}
