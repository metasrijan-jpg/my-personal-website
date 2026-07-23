import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link href={`/services/${service.slug}`} className="premium-card group block rounded-[8px] p-7 transition hover:-translate-y-1 hover:border-gold/45">
      <div className="mb-6 grid size-14 place-items-center rounded-[8px] bg-ink text-white shadow-glow">
        <Icon size={25} />
      </div>
      <h3 className="font-heading text-xl font-bold">{service.title}</h3>
      <p className="mt-3 min-h-20 leading-7 text-muted">{service.description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold">
        Learn More <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
