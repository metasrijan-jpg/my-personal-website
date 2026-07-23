import type { Metadata } from "next";
import Image from "next/image";
import { Search, Share2 } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI marketing, SEO, paid ads, content strategy, and automation insights from MetaSrijan."
};

const categories = ["All", "AI Strategy", "SEO", "Performance", "Automation"];

export default function BlogPage() {
  const featured = posts[0];
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Blog" title="AI marketing ideas for sharper growth" text="Practical articles on strategy, search, paid campaigns, automation, and conversion." />
        <Reveal className="premium-card mb-10 grid overflow-hidden rounded-[8px] lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[320px] bg-beige">
            <Image src={featured.cover} alt="" fill className="object-cover" priority />
          </div>
          <div className="p-8 sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">Featured Article</p>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">{featured.title}</h2>
            <p className="mt-4 leading-8 text-muted">{featured.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {featured.tags.map((tag) => <span key={tag} className="rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">{tag}</span>)}
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm font-semibold text-muted">
              <span>{featured.date}</span>
              <span>{featured.readTime}</span>
              <span className="inline-flex items-center gap-2"><Share2 size={16} /> Share</span>
            </div>
          </div>
        </Reveal>
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={19} />
            <input className="input pl-12" placeholder="Search articles" />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} className="focus-ring rounded-full border border-ink/10 bg-white/72 px-4 py-3 text-sm font-bold transition hover:border-gold">
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {[1, 2, 3].map((page) => (
            <button key={page} className="focus-ring grid size-11 place-items-center rounded-full border border-ink/10 bg-white/70 font-bold transition hover:border-gold">
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
