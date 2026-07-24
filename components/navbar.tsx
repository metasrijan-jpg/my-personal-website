"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/84 backdrop-blur-xl">
      <nav className="container flex h-24 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center rounded-full">
          <span className="relative block h-12 w-[190px] overflow-hidden sm:h-14 sm:w-[230px]">
            <Image
              src="/1-removebg-preview.png"
              alt="Meta Srijan"
              fill
              priority
              sizes="(max-width: 640px) 190px, 230px"
              className="object-cover object-[18%_72%]"
            />
          </span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring rounded-full text-sm font-semibold text-muted transition hover:text-ink",
                pathname === link.href && "text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <LinkButton href="/contact" variant="gold">Book a Consultation</LinkButton>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid size-11 place-items-center rounded-full border border-ink/15 bg-white/75 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <div
        className={cn(
          "grid border-t border-ink/10 bg-cream/96 transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="container flex flex-col gap-4 py-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-2 font-semibold">
                {link.label}
              </Link>
            ))}
            <LinkButton href="/contact" variant="gold" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Book a Consultation
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
}
