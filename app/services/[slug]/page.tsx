import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { FAQ } from "@/components/faq";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { LinkButton } from "@/components/ui/button";
import { services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="section border-b border-ink/10">
        <div className="container grid items-center gap-10 lg:grid-cols-[1fr_0.75fr]">
          <Reveal>
            <div className="mb-6 grid size-16 place-items-center rounded-[8px] bg-ink text-white shadow-glow"><Icon size={30} /></div>
            <h1 className="font-heading text-5xl font-bold leading-tight sm:text-6xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted">{service.description}</p>
            <LinkButton href="/contact" variant="gold" className="mt-8">Book Consultation</LinkButton>
          </Reveal>
          <Reveal delay={0.08} className="premium-card rounded-[8px] p-7">
            <h2 className="font-heading text-2xl font-bold">Service Overview</h2>
            <p className="mt-4 leading-8 text-muted">{service.overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Benefits" title="What you gain" />
            <div className="grid gap-3">
              {service.benefits.map((benefit) => (
                <Reveal key={benefit} className="flex items-center gap-3 rounded-[8px] bg-white/70 p-4 font-semibold">
                  <CheckCircle2 className="text-gold" size={20} /> {benefit}
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Process" title="How we work" />
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <Reveal key={step} className="rounded-[8px] border border-ink/10 bg-white/70 p-5">
                  <span className="text-sm font-bold text-gold">Step {index + 1}</span>
                  <h3 className="mt-1 font-heading text-xl font-bold">{step}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/42">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="premium-card rounded-[8px] p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">Pricing</p>
            <h2 className="font-heading text-3xl font-bold">Custom pricing after discovery</h2>
            <p className="mt-4 leading-7 text-muted">Every engagement is scoped around your goals, timeline, channels, and current marketing maturity.</p>
            <LinkButton href="/contact" variant="primary" className="mt-7">Request Proposal</LinkButton>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="FAQ" title="Common questions" />
            <FAQ items={service.faqs} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Related Services" title="Explore complementary growth support" />
          <Stagger className="grid gap-5 md:grid-cols-3">
            {related.map((item) => <StaggerItem key={item.slug}><ServiceCard service={item} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>
    </>
  );
}
