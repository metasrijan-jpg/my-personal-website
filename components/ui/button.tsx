import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-black",
  secondary: "border border-ink/15 bg-white/75 text-ink hover:-translate-y-0.5 hover:border-gold/60",
  gold: "bg-gold text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#A5772D]"
};

type BaseProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "focus-ring relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold transition",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition group-hover:translate-x-0" />
      {children}
    </button>
  );
}

export function LinkButton({ children, variant = "primary", className, href, ...props }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
