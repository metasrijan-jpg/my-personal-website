import { LinkButton } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="container max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">404</p>
        <h1 className="font-heading text-5xl font-bold">Page not found</h1>
        <p className="mt-5 leading-8 text-muted">The page you are looking for may have moved or no longer exists.</p>
        <LinkButton href="/" variant="gold" className="mt-8">Back to Home</LinkButton>
      </div>
    </section>
  );
}
