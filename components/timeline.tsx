import { timeline } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function Timeline() {
  return (
    <div className="space-y-5">
      {timeline.map((item, index) => (
        <Reveal key={item.year} delay={index * 0.05} className="grid gap-4 rounded-[8px] border border-ink/10 bg-white/70 p-6 sm:grid-cols-[120px_1fr]">
          <div className="font-heading text-2xl font-bold text-gold">{item.year}</div>
          <div>
            <h3 className="font-heading text-xl font-bold">{item.title}</h3>
            <p className="mt-2 leading-7 text-muted">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
