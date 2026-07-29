import { Check, ArrowRight } from "lucide-react";
import { SOLUTION_POINTS, LINKS } from "@/data/site";
import { useRevealGroup } from "@/hooks/useReveal";

export function Solution() {
  const ref = useRevealGroup<HTMLDivElement>();

  return (
    <section className="bg-bg-alt px-5 py-[76px] sm:px-6 md:py-[110px]">
      <div ref={ref} className="mx-auto max-w-[1160px]">
        <div className="max-w-[820px]">
          <p className="eyebrow reveal" data-reveal>
            Решението
          </p>
          <h2 className="reveal mt-4 text-[30px] leading-tight font-bold sm:text-[44px]" data-reveal>
            Затова създадохме <span className="grad-text">Smart Reach</span>.
          </h2>
          <p className="reveal mt-5 text-[17px] leading-relaxed text-text-secondary" data-reveal>
            Събираме рекламната идея, видеото, дизайна и управлението на кампаниите на едно място.
            Така всяка част от рекламата работи към една и съща цел — повече продажби и качествени
            запитвания.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTION_POINTS.map((p) => (
            <div
              key={p}
              className="reveal flex items-start gap-3 rounded-[18px] border border-border bg-white p-5"
              data-reveal
            >
              <span className="mt-[2px] grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#10B981]">
                <Check className="h-3 w-3 text-white" />
              </span>
              <span className="text-[15.5px] leading-relaxed text-text-secondary">{p}</span>
            </div>
          ))}
        </div>

        <div className="reveal mt-11" data-reveal>
          <a href="#form" className="btn-primary group">
            Виж дали сме подходящи за твоя бизнес
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
