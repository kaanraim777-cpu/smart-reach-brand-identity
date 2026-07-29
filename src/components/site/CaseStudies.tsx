import { ImagePlus } from "lucide-react";
import { CASE_STUDIES } from "@/data/site";
import { useRevealGroup } from "@/hooks/useReveal";

export function CaseStudies() {
  const ref = useRevealGroup<HTMLDivElement>();

  return (
    <section id="results" className="bg-bg-alt px-5 py-[76px] sm:px-6 md:py-[110px]">
      <div ref={ref} className="mx-auto max-w-[1160px]">
        <div className="max-w-[820px]">
          <p className="eyebrow reveal" data-reveal>
            Резултати
          </p>
          <h2 className="reveal mt-4 text-[30px] leading-tight font-bold sm:text-[44px]" data-reveal>
            Реални числа. Реална работа.
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {CASE_STUDIES.map((c, i) => (
            <article
              key={c.name}
              className="reveal grid items-center gap-8 rounded-[24px] border border-border bg-white p-5 shadow-[0_16px_50px_rgba(4,0,61,0.06)] sm:p-8 lg:grid-cols-2 lg:gap-12"
              data-reveal
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-bg-alt px-3 py-1 text-[12px] font-semibold text-brand-violet">
                    {c.type}
                  </span>
                  {c.placeholder && (
                    <span className="rounded-full border border-dashed border-border px-3 py-1 text-[12px] text-text-muted">
                      placeholder
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-[24px] font-bold sm:text-[30px]">{c.name}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-text-secondary">{c.text}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="rounded-[18px] border border-border bg-bg-soft p-4">
                      <p className="text-[24px] leading-none font-bold text-text">{m.value}</p>
                      <p className="mt-2 text-[12.5px] text-text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                {/* Replaceable screenshot slot — добави реален скрийншот тук */}
                <div className="grid aspect-[16/10] w-full place-items-center rounded-[20px] border border-dashed border-[#CFC8E8] bg-bg-soft text-center">
                  <div>
                    <ImagePlus className="mx-auto h-6 w-6 text-text-muted" strokeWidth={1.4} />
                    <p className="mt-3 text-[13.5px] font-medium text-text-muted">
                      Добави реален скрийншот
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
