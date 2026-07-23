import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="premium-card overflow-hidden rounded-[8px]">
      <div className="relative aspect-[16/10] bg-beige">
        <Image src={post.cover} alt="" fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          <span className="inline-flex items-center gap-1"><CalendarDays size={14} /> {post.date}</span>
          <span className="inline-flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
        </div>
        <h3 className="font-heading text-xl font-bold">{post.title}</h3>
        <p className="mt-3 leading-7 text-muted">{post.excerpt}</p>
        <Link href="/blog" className="mt-5 inline-flex text-sm font-bold text-ink hover:text-gold">
          Read Article
        </Link>
      </div>
    </article>
  );
}
