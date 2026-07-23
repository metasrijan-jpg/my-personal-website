"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-[8px] border border-ink/10 bg-white/70">
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            className="focus-ring flex w-full items-center justify-between gap-4 rounded-[8px] p-5 text-left font-heading font-bold"
          >
            {item.question}
            <ChevronDown size={19} className={cn("shrink-0 transition", open === index && "rotate-180")} />
          </button>
          <div className={cn("grid transition-all duration-300", open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
            <div className="overflow-hidden">
              <p className="px-5 pb-5 leading-7 text-muted">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
