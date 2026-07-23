import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Stagger, StaggerItem } from "@/components/motion";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore MetaSrijan services including AI marketing strategy, SEO, paid ads, content, automation, and consulting."
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Services" title="AI-powered marketing services for every stage of growth" text="Choose focused support for strategy, traffic, conversion, automation, and business transformation." />
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <StaggerItem key={service.slug}><ServiceCard service={service} /></StaggerItem>)}
        </Stagger>
      </div>
    </section>
  );
}
