import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { brand, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
        <div>
          <div className="mb-4 font-heading text-3xl font-bold">{brand.name}</div>
          <p className="max-w-sm leading-7 text-white/68">
            Premium AI-powered digital marketing consulting for businesses that want sharper strategy and measurable growth.
          </p>
          <div className="mt-6 flex gap-3">
            {brand.socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link key={social.label} href={social.href} aria-label={social.label} className="grid size-10 place-items-center rounded-full border border-white/15 text-white/78 transition hover:border-gold hover:text-gold">
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-lg font-bold">Quick Links</h3>
          {["About", "Services", "Blog", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="block py-2 text-white/68 transition hover:text-white">
              {item}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="mb-4 font-heading text-lg font-bold">Services</h3>
          {services.slice(0, 5).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="block py-2 text-white/68 transition hover:text-white">
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="mb-4 font-heading text-lg font-bold">Contact</h3>
          <p className="mb-3 flex gap-3 text-white/68"><Phone size={18} className="mt-1 shrink-0 text-gold" /> {brand.phone}</p>
          <p className="flex gap-3 text-white/68"><MapPin size={18} className="mt-1 shrink-0 text-gold" /> {brand.address}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/52">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
