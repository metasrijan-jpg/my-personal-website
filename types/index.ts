import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  icon: LucideIcon;
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  cover: string;
};
