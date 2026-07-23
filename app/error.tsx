"use client";

import { LinkButton } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <section className="section">
      <div className="container max-w-2xl text-center">
        <h1 className="font-heading text-5xl font-bold">Something went wrong</h1>
        <p className="mt-5 leading-8 text-muted">The page could not be loaded. Please return home and try again.</p>
        <LinkButton href="/" variant="gold" className="mt-8">Go Home</LinkButton>
      </div>
    </section>
  );
}
