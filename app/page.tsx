import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { BlogCard } from "@/components/blog-card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { LinkButton } from "@/components/ui/button";
import { brand, features, posts, services, stats, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden border-b border-primary/10">
        <div className="absolute inset-0 ai-grid opacity-60" />
        <div className="container relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-highlight/60 bg-highlight/20 px-4 py-2 text-sm font-bold text-ink">
              {brand.role}
            </p>
            <h1 className="font-heading text-5xl font-bold leading-[1.03] text-ink sm:text-6xl lg:text-7xl">
              Helping Businesses Grow with AI-Powered Digital Marketing
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              MetaSrijan blends sharp digital strategy, AI automation, SEO, paid media, and conversion thinking to help ambitious businesses turn attention into revenue.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="/contact" variant="gold">Book Consultation <ArrowRight size={18} /></LinkButton>
              <LinkButton href="/services" variant="secondary">View Services</LinkButton>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div className="absolute -inset-6 rounded-full bg-ai/10 blur-3xl" />
            <div className="mx-auto flex max-w-[620px] justify-center">
              <div className="premium-card relative aspect-square w-full max-w-[520px] overflow-hidden rounded-full border-8 border-white/70 bg-[#0f0e0b] p-0 shadow-soft">
                <Image
                  src="/images/srijan-gharti.png"
                  alt="Portrait of Srijan Gharti"
                  width={720}
                  height={720}
                  priority
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="container relative -mt-6 grid gap-4 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="premium-card rounded-[8px] p-6 text-center">
              <div className="font-heading text-4xl font-bold text-ink"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></div>
              <p className="mt-2 text-sm font-semibold text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="mx-auto flex max-w-[520px] justify-center">
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
          <Reveal delay={0.08}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">About MetaSrijan</p>
            <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">Personal consulting for brands ready to market smarter.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              I am {brand.owner}, a digital marketing expert and AI marketing consultant helping businesses clarify strategy, improve campaigns, and adopt automation in a way that feels practical and premium.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["AI-led planning", "SEO and paid media", "Marketing automation", "Conversion strategy"].map((item) => (
                <div key={item} className="flex items-center gap-3 font-semibold"><CheckCircle2 className="text-gold" size={20} /> {item}</div>
              ))}
            </div>
            <LinkButton href="/about" variant="primary" className="mt-8">Learn More</LinkButton>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white/42">
        <div className="container">
          <SectionHeading eyebrow="Services" title="Marketing systems built for modern growth" text="From AI strategy and SEO to paid ads and automation, each service is designed to improve clarity, speed, and measurable outcomes." />
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => <StaggerItem key={service.slug}><ServiceCard service={service} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Choose Me" title="Premium thinking, practical execution" />
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title} className="rounded-[8px] border border-ink/10 bg-white/68 p-7">
                  <Icon className="mb-5 text-gold" size={30} />
                  <h3 className="font-heading text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{feature.description}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">Testimonials</p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">Trusted by growth-focused teams</h2>
            <p className="mt-5 text-lg leading-8 text-white/68">Clear strategy, cleaner execution, and marketing systems that make decisions easier.</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Reveal key={testimonial.name} className="rounded-[8px] border border-white/10 bg-white/[0.06] p-7">
                <p className="leading-8 text-white/78">“{testimonial.quote}”</p>
                <div className="mt-6 font-heading text-lg font-bold">{testimonial.name}</div>
                <div className="text-sm text-gold">{testimonial.role}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Blog" title="Latest AI marketing insights" />
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <Reveal className="overflow-hidden rounded-[8px] bg-ink p-8 text-white shadow-soft sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">Ready to grow?</p>
                <h2 className="font-heading text-3xl font-bold sm:text-5xl">Book a premium AI marketing consultation.</h2>
                <p className="mt-4 max-w-2xl leading-7 text-white/70">Bring your business goals, campaign questions, and growth bottlenecks. Leave with clearer next steps.</p>
              </div>
              <LinkButton href="/contact" variant="gold">Book Consultation</LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
