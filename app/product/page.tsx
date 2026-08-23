import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Layers3,
  Sparkles,
  Target,
  TrendingUp,
  Zap
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { LinkButton } from "@/components/ui/button";

const outcomes = [
  { icon: Target, title: "One clear growth plan", text: "Know exactly what to prioritize this week, this month, and next quarter." },
  { icon: Zap, title: "Less manual work", text: "Automate repetitive marketing tasks without losing the human judgment behind them." },
  { icon: TrendingUp, title: "Better decisions", text: "See what is working, where budget is leaking, and what to test next." }
];

const steps = [
  ["01", "Connect your context", "Share your goals, offers, audience, and current marketing stack."],
  ["02", "Build your system", "Get a tailored AI workflow, campaign map, and measurement dashboard."],
  ["03", "Grow with clarity", "Use your weekly priorities to execute faster and improve every cycle."]
];

export default function ProductPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 ai-grid opacity-60" />
        <div className="container relative grid items-center gap-14 py-20 lg:min-h-[690px] lg:grid-cols-[0.93fr_1.07fr] lg:py-24">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/60 px-4 py-2 text-sm font-semibold text-gold">
              <Sparkles size={16} /> The MetaSrijan Growth OS
            </div>
            <h1 className="max-w-2xl font-heading text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.7rem]">
              Your marketing, finally working as one system.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              A practical AI-powered growth system for ambitious businesses that want fewer tabs, faster execution, and a clearer path from attention to revenue.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="/contact" variant="gold">Get your growth plan <ArrowRight size={18} /></LinkButton>
              <a href="#how-it-works" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 text-sm font-semibold transition hover:border-gold/60">See how it works <ChevronRight size={17} /></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-muted">
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-gold" /> Built for small teams</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-gold" /> No bloated tools</span>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="absolute -inset-12 rounded-full bg-ai/15 blur-3xl" />
            <div className="premium-card relative overflow-hidden rounded-[18px] border-white/70 bg-[#fbfaf6] shadow-soft">
              <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2 font-heading font-bold"><span className="grid size-8 place-items-center rounded-lg bg-ink text-gold"><Sparkles size={16} /></span> Growth OS</div>
                <span className="rounded-full bg-ai/15 px-3 py-1 text-xs font-bold text-[#5f715c]">Live workspace</span>
              </div>
              <div className="grid gap-5 p-5 sm:p-7">
                <div className="grid grid-cols-3 gap-3">
                  {[['+34%', 'Qualified leads'], ['2.8x', 'Campaign ROAS'], ['11.5h', 'Saved this week']].map(([value, label]) => <div key={label} className="rounded-xl border border-ink/8 bg-white p-3 sm:p-4"><div className="font-heading text-xl font-bold sm:text-2xl">{value}</div><div className="mt-1 text-[10px] font-semibold leading-4 text-muted sm:text-xs">{label}</div></div>)}
                </div>
                <div className="rounded-xl border border-ink/8 bg-white p-5">
                  <div className="flex items-center justify-between"><div><div className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Growth momentum</div><div className="mt-1 font-heading text-lg font-bold">Performance overview</div></div><BarChart3 className="text-gold" size={22} /></div>
                  <div className="mt-6 flex h-36 items-end gap-2 sm:gap-3">{[35, 47, 40, 62, 58, 76, 88, 82, 100, 92, 112, 124].map((height, index) => <div key={index} className="group relative flex-1 rounded-t-md bg-gradient-to-t from-ai to-[#b8c4af]" style={{ height: `${height}px` }}><span className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100" /></div>)}</div>
                  <div className="mt-3 flex justify-between text-[10px] font-semibold text-muted"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span></div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-ink px-5 py-4 text-white"><span className="grid size-9 place-items-center rounded-lg bg-gold"><Clock3 size={18} /></span><div><div className="text-xs text-white/55">Next best action</div><div className="text-sm font-semibold">Launch the retargeting sequence</div></div><ArrowRight className="ml-auto text-gold" size={18} /></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">Why Growth OS</p><h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">Stop collecting marketing activity. Start compounding momentum.</h2><p className="mt-5 text-lg leading-8 text-muted">Growth OS brings strategy, execution, automation, and reporting into one simple operating rhythm.</p></Reveal>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">{outcomes.map(({ icon: Icon, title, text }) => <StaggerItem key={title} className="premium-card rounded-[8px] p-7"><div className="mb-6 grid size-12 place-items-center rounded-xl bg-gold/12 text-gold"><Icon size={24} /></div><h3 className="font-heading text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted">{text}</p></StaggerItem>)}</Stagger>
        </div>
      </section>

      <section id="how-it-works" className="section bg-ink text-white">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><Reveal><p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">How it works</p><h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">A smarter rhythm for every growth-minded team.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-white/65">You bring the ambition. MetaSrijan brings the system, senior thinking, and momentum to turn it into measurable progress.</p></Reveal><Stagger className="grid gap-4">{steps.map(([number, title, text]) => <StaggerItem key={number} className="flex gap-5 rounded-xl border border-white/10 bg-white/[0.05] p-5 sm:p-6"><span className="font-heading text-sm font-bold text-gold">{number}</span><div><h3 className="font-heading text-xl font-bold">{title}</h3><p className="mt-2 leading-7 text-white/60">{text}</p></div></StaggerItem>)}</Stagger></div>
      </section>

      <section id="pricing" className="section"><div className="container"><Reveal className="mx-auto max-w-3xl text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">Start with clarity</p><h2 className="font-heading text-4xl font-bold sm:text-5xl">The first step is a focused growth sprint.</h2><p className="mt-5 text-lg leading-8 text-muted">A tailored 90-minute strategy session and a practical 30-day action plan for your business.</p></Reveal><Reveal className="mx-auto mt-12 max-w-3xl rounded-[18px] border border-ink/10 bg-white/72 p-7 shadow-soft sm:p-10"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><div><div className="mb-3 inline-flex items-center gap-2 rounded-full bg-ai/15 px-3 py-1 text-xs font-bold text-[#5f715c]"><Layers3 size={14} /> Growth sprint</div><h3 className="font-heading text-3xl font-bold">Build your next best move.</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{["Growth bottleneck audit", "AI opportunity map", "30-day priority roadmap", "Follow-up implementation call"].map(item => <div key={item} className="flex items-center gap-2 text-sm font-semibold"><Check size={16} className="text-gold" /> {item}</div>)}</div></div><LinkButton href="/contact" variant="primary">Book your sprint <ArrowRight size={18} /></LinkButton></div></Reveal></div></section>
    </>
  );
}
