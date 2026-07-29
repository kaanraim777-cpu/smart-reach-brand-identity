import { ArrowRight } from "lucide-react";
import { HERO_STATS, LINKS } from "@/data/site";
import { useCountUp, useReveal } from "@/hooks/useReveal";

function Stat({ value, label, sub }: { value: number; label: string; sub: string }) {
  const { ref, value: n } = useCountUp(value);
  return (
    <div className="px-4 py-6 text-center sm:py-2">
      <div className="text-[34px] leading-none font-bold text-text sm:text-[40px]">
        <span ref={ref} className="grad-text">
          {n}
        </span>{" "}
        <span className="text-[18px] font-semibold text-text-secondary sm:text-[20px]">{label}</span>
      </div>
      <p className="mt-2 text-[14px] text-text-muted">{sub}</p>
    </div>
  );
}

export function StatsBar() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="px-5 pt-14 sm:px-6">
      <div ref={reveal} className="reveal mx-auto max-w-[1000px] text-center">
        <a href={LINKS.calendly} className="btn-primary group !px-7 !py-4 !text-[16px]">
          Заяви безплатна консултация
          <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-[3px]" />
        </a>

        <div className="mt-10 grid gap-2 rounded-[24px] border border-border bg-white p-4 shadow-[0_10px_40px_rgba(4,0,61,0.06)] sm:grid-cols-3 sm:divide-x sm:divide-[color:var(--border)] sm:py-8">
          {HERO_STATS.map((s) => (
            <Stat key={s.sub} value={s.value} label={s.label} sub={s.sub} />
          ))}
        </div>
      </div>
    </section>
  );
}
