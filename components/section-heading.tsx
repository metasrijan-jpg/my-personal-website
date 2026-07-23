import { Reveal } from "@/components/motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "center" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-2xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p> : null}
      <h2 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-muted">{text}</p> : null}
    </Reveal>
  );
}
