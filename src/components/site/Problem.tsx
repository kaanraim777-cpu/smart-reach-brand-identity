import { PAIN_POINTS } from "@/data/site";
import { useRevealGroup } from "@/hooks/useReveal";
import { Minus } from "lucide-react";

export function Problem() {
  const ref = useRevealGroup<HTMLDivElement>();

  return (
    <section className="bg-bg-soft px-5 py-[76px] sm:px-6 md:py-[110px]">
      <div ref={ref} className="mx-auto max-w-[820px]">
        <p className="eyebrow reveal" data-reveal>
          Проблемът
        </p>
        <h2 className="reveal mt-4 text-[30px] leading-tight font-bold sm:text-[44px]" data-reveal>
          Познато ли ти звучи?
        </h2>
        <p className="reveal mt-5 text-[17px] leading-relaxed text-text-secondary" data-reveal>
          Влагаш пари и време в реклама, но различните части не работят заедно. Един човек прави
          видеото, друг пуска кампанията, а накрая никой не поема отговорност за целия резултат.
        </p>

        <ul className="mt-10 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
          {PAIN_POINTS.map((p) => (
            <li key={p} className="reveal flex items-start gap-4 py-5" data-reveal>
              <Minus className="mt-1 h-4 w-4 shrink-0 text-brand-violet" />
              <span className="text-[16.5px] leading-relaxed text-text-secondary">{p}</span>
            </li>
          ))}
        </ul>

        <p className="reveal mt-8 text-[17px] font-medium text-text" data-reveal>
          Така губиш време, бюджет и възможности — без да знаеш какво трябва да промениш.
        </p>
      </div>
    </section>
  );
}
