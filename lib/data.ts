import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cpu,
  Facebook,
  Globe2,
  Lightbulb,
  LineChart,
  Mail,
  Megaphone,
  MousePointerClick,
  PenTool,
  Search,
  Send,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import type { BlogPost, Service } from "@/types";

export const brand = {
  name: "MetaSrijan",
  owner: "Srijan Gharti",
  role: "Digital Marketing Expert & AI Marketing Consultant",
  phone: "+977 9851401711",
  address: "Chysundol, Budhanilkantha, Kathmandu, Nepal",
  email: "metasrijan@gmail.com",
  socials: [
    { label: "LinkedIn", href: "#", icon: BriefcaseBusiness },
    { label: "Facebook", href: "#", icon: Facebook },
    { label: "Instagram", href: "#", icon: Sparkles },
    { label: "Email", href: "mailto:metasrijan@gmail.com", icon: Mail }
  ]
};

export const stats = [
  { value: 48, suffix: "+", label: "Happy Clients" },
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 300, suffix: "+", label: "Marketing Campaigns" }
];

export const services: Service[] = [
  {
    slug: "ai-marketing-strategy",
    title: "AI Marketing Strategy",
    description: "Build a practical AI roadmap for growth, automation, content, and customer acquisition.",
    overview: "A high-clarity strategy sprint that identifies where AI can improve acquisition, retention, personalization, and operational speed without adding unnecessary complexity.",
    icon: BrainCircuit,
    benefits: ["Sharper positioning", "AI-ready workflows", "Faster campaign planning", "Clear growth priorities"],
    process: ["Business audit", "Audience and funnel mapping", "AI opportunity scoring", "Execution roadmap"],
    faqs: [
      { question: "Is this only for large companies?", answer: "No. The strategy is scaled for small businesses, founders, and growing teams." },
      { question: "Will I need new software?", answer: "Only when it creates measurable value. The plan prioritizes tools that fit your budget and team." }
    ]
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    description: "Improve visibility with technical SEO, content strategy, and intent-led keyword planning.",
    overview: "SEO built for durable growth: technical cleanup, content architecture, local search signals, and conversion-focused landing pages.",
    icon: Search,
    benefits: ["Higher qualified traffic", "Better site structure", "Content clusters", "Local search improvements"],
    process: ["SEO audit", "Keyword research", "Technical fixes", "Content calendar"],
    faqs: [
      { question: "How long does SEO take?", answer: "Most sites see early movement in 8 to 12 weeks, with stronger compounding results after consistent execution." },
      { question: "Do you handle local SEO?", answer: "Yes. Local visibility, map presence, and service-area search are part of the offer." }
    ]
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Create platform-specific content systems that build trust and drive measurable demand.",
    overview: "A content and distribution engine for brands that need consistent visibility, stronger authority, and better community engagement.",
    icon: Megaphone,
    benefits: ["Content consistency", "Stronger engagement", "Better brand recall", "Campaign reporting"],
    process: ["Content pillars", "Creative calendar", "Publishing system", "Performance review"],
    faqs: [
      { question: "Which platforms do you support?", answer: "Facebook, Instagram, LinkedIn, TikTok, and YouTube Shorts depending on the audience." },
      { question: "Can you plan content only?", answer: "Yes. Strategy-only and execution support are both available." }
    ]
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    description: "Scale paid channels with disciplined testing, tracking, and ROI-focused optimization.",
    overview: "Performance campaigns designed around profitable acquisition, clean measurement, creative testing, and weekly decision-making.",
    icon: LineChart,
    benefits: ["Lower wasted spend", "Clear attribution", "Creative tests", "Better ROAS"],
    process: ["Offer audit", "Tracking setup", "Campaign launch", "Optimization cycles"],
    faqs: [
      { question: "Do you manage ad budgets?", answer: "Yes. Budgets are planned around your goals, market size, and conversion economics." },
      { question: "Do I need tracking first?", answer: "Yes. Accurate tracking is essential before scaling spend." }
    ]
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    description: "Capture high-intent demand through search, display, remarketing, and conversion tracking.",
    overview: "Google Ads management focused on high-intent keywords, landing page alignment, and measurable lead or sales outcomes.",
    icon: MousePointerClick,
    benefits: ["Search intent capture", "Better quality score", "Conversion tracking", "Landing page alignment"],
    process: ["Account audit", "Keyword mapping", "Ad buildout", "Bid and query optimization"],
    faqs: [
      { question: "Can you fix an existing account?", answer: "Yes. Existing campaign audits are often the fastest route to savings and growth." },
      { question: "Do you build landing pages?", answer: "Landing page consulting is included, and full page builds can be scoped separately." }
    ]
  },
  {
    slug: "facebook-ads",
    title: "Facebook Ads",
    description: "Launch creative-led Meta campaigns for awareness, leads, sales, and remarketing.",
    overview: "Meta advertising that combines audience strategy, creative testing, funnel logic, and practical reporting for stronger campaign learning.",
    icon: Facebook,
    benefits: ["Creative testing", "Lead generation", "Retargeting", "Audience insights"],
    process: ["Funnel planning", "Creative angles", "Campaign setup", "Weekly optimization"],
    faqs: [
      { question: "Do you create ad creatives?", answer: "Yes. Creative direction and ad concepts are included in campaign planning." },
      { question: "Can this work for service businesses?", answer: "Yes. Lead generation campaigns are especially useful for service-based offers." }
    ]
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    description: "Turn expertise into articles, scripts, lead magnets, and campaigns that compound.",
    overview: "A strategic content system that connects thought leadership, SEO, social distribution, and lead generation.",
    icon: PenTool,
    benefits: ["Authority building", "SEO assets", "Lead magnets", "Repurposing system"],
    process: ["Audience research", "Topic strategy", "Production workflow", "Distribution plan"],
    faqs: [
      { question: "Can AI help with content?", answer: "Yes, when guided by expert positioning, strong prompts, and human editorial judgment." },
      { question: "Do you write long-form content?", answer: "Yes. Blog posts, website copy, and campaign assets can be included." }
    ]
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    description: "Clarify your message, offer, audience, and visual direction before scaling marketing.",
    overview: "Brand foundations that make your marketing easier to understand, remember, and trust across every touchpoint.",
    icon: Lightbulb,
    benefits: ["Clear positioning", "Offer clarity", "Message hierarchy", "Trust signals"],
    process: ["Discovery", "Positioning workshop", "Messaging system", "Brand activation plan"],
    faqs: [
      { question: "Is this design work?", answer: "It focuses on strategy and messaging, with visual direction when needed." },
      { question: "Who needs brand strategy?", answer: "Any business whose audience does not immediately understand why to choose them." }
    ]
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    description: "Build welcome flows, newsletters, and nurture sequences that convert attention into revenue.",
    overview: "Email systems that keep leads warm, support sales cycles, and increase lifetime value with relevant messaging.",
    icon: Send,
    benefits: ["Lead nurturing", "Automated flows", "Newsletter strategy", "Better retention"],
    process: ["List audit", "Journey mapping", "Sequence writing", "Testing and reporting"],
    faqs: [
      { question: "Do I need a large list?", answer: "No. A small engaged list often performs better than a large cold audience." },
      { question: "Which tools do you support?", answer: "Mailchimp, Brevo, ConvertKit, HubSpot, and other common email platforms." }
    ]
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    description: "Automate follow-ups, lead routing, reporting, and repetitive campaign operations.",
    overview: "Practical automation that saves time, reduces missed opportunities, and improves customer experience across the funnel.",
    icon: Workflow,
    benefits: ["Faster follow-up", "Cleaner operations", "Lead routing", "Reporting workflows"],
    process: ["Workflow audit", "Automation design", "Tool setup", "Testing and handover"],
    faqs: [
      { question: "Can automation feel personal?", answer: "Yes. Strong segmentation and timing make automation feel more helpful, not less human." },
      { question: "Can you connect my existing tools?", answer: "In most cases, yes. Integrations depend on the platforms you already use." }
    ]
  },
  {
    slug: "website-consulting",
    title: "Website Consulting",
    description: "Improve website messaging, UX, conversion paths, analytics, and lead capture.",
    overview: "A practical review of your website through the lens of clarity, conversion, performance, and trust.",
    icon: Globe2,
    benefits: ["Higher conversions", "Better UX", "Clearer messaging", "Improved analytics"],
    process: ["Site audit", "Conversion review", "UX recommendations", "Action plan"],
    faqs: [
      { question: "Do you redesign websites?", answer: "I provide consulting and can scope implementation separately when needed." },
      { question: "Will you check mobile UX?", answer: "Yes. Mobile-first experience is a core part of the audit." }
    ]
  },
  {
    slug: "ai-business-consulting",
    title: "AI Business Consulting",
    description: "Find practical AI use cases for operations, customer experience, marketing, and sales.",
    overview: "AI consulting for business owners who want useful systems, not hype: automation, analytics, content, and customer support workflows.",
    icon: Bot,
    benefits: ["Use-case clarity", "Operational speed", "Tool selection", "Team enablement"],
    process: ["Business diagnosis", "AI use-case map", "Pilot workflow", "Training and next steps"],
    faqs: [
      { question: "Will AI replace my team?", answer: "The focus is on helping your team move faster and make better decisions." },
      { question: "Can we start small?", answer: "Yes. A focused pilot is usually the smartest first move." }
    ]
  }
];

export const features = [
  { title: "AI Strategy", description: "Practical AI systems tied to actual business goals.", icon: Cpu },
  { title: "ROI Focused", description: "Campaign decisions anchored in measurable returns.", icon: Target },
  { title: "Growth Marketing", description: "Full-funnel planning from awareness to retention.", icon: BarChart3 },
  { title: "Automation", description: "Less manual repetition, faster follow-up, cleaner reporting.", icon: Workflow },
  { title: "Branding", description: "Messaging and trust signals that make offers easier to buy.", icon: Sparkles },
  { title: "Personal Consultation", description: "Direct senior guidance from strategy through execution.", icon: CheckCircle2 }
];

export const testimonials = [
  {
    quote: "Srijan helped us turn scattered marketing activity into a clear growth system. The AI workflows saved our team hours every week.",
    name: "Aarav Shrestha",
    role: "Founder, Local Services Brand"
  },
  {
    quote: "The strategy was premium, practical, and easy to execute. Our campaigns finally had clean tracking and stronger creative direction.",
    name: "Nisha Karki",
    role: "Marketing Lead, Ecommerce Company"
  },
  {
    quote: "MetaSrijan brought clarity to our positioning and helped us launch campaigns with confidence instead of guesswork.",
    name: "Ramesh Adhikari",
    role: "Director, Consulting Firm"
  }
];

export const posts: BlogPost[] = [
  {
    slug: "ai-marketing-roadmap-for-small-businesses",
    title: "How Small Businesses Can Build a Practical AI Marketing Roadmap",
    excerpt: "A simple framework for choosing AI tools, automating the right workflows, and keeping strategy human.",
    category: "AI Strategy",
    date: "2026-06-12",
    readTime: "6 min read",
    tags: ["AI", "Strategy", "Automation"],
    cover: "/images/blog-ai-roadmap.svg"
  },
  {
    slug: "seo-content-that-converts",
    title: "SEO Content That Converts, Not Just Ranks",
    excerpt: "Why search intent, offer clarity, and page experience matter as much as keywords.",
    category: "SEO",
    date: "2026-05-28",
    readTime: "5 min read",
    tags: ["SEO", "Content", "Conversion"],
    cover: "/images/blog-seo.svg"
  },
  {
    slug: "paid-ads-testing-system",
    title: "A Better Testing System for Paid Ads",
    excerpt: "How to structure creative tests so every campaign teaches you something useful.",
    category: "Performance",
    date: "2026-05-03",
    readTime: "7 min read",
    tags: ["Ads", "ROAS", "Testing"],
    cover: "/images/blog-ads.svg"
  }
];

export const timeline = [
  { year: "2019", title: "Digital Campaign Foundations", text: "Built cross-channel campaign systems for service and retail businesses." },
  { year: "2021", title: "Performance Growth", text: "Expanded into ROI-led paid media, SEO, analytics, and conversion strategy." },
  { year: "2024", title: "AI Marketing Consulting", text: "Integrated AI workflows for content, automation, reporting, and strategy." },
  { year: "2026", title: "MetaSrijan", text: "A premium advisory brand for AI-powered digital marketing growth." }
];

export const serviceOptions = services.map((service) => service.title);
