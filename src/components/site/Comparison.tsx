import { X, Check } from "lucide-react";
import { COMPARISON_ROWS } from "@/data/site";
import { useRevealGroup } from "@/hooks/useReveal";

export function Comparison() {
  const ref = useRevealGroup<HTMLDivElement>();

  return (
    <section className="px-5 py-[76px] sm:px-6 md:py-[110px]">
      <div ref={ref} className="mx-auto max-w-[1000px]">
        <div className="max-w-[820px]">
          <p className="eyebrow reveal" data-reveal>
            Директен партньор
          </p>
          <h2 className="reveal mt-4 text-[30px] leading-tight font-bold sm:text-[44px]" data-reveal>
            По-малък екип. По-голямо внимание.
          </h2>
          <p className="reveal mt-5 text-[17px] leading-relaxed text-text-secondary" data-reveal>
            Работиш директно с хората, които създават рекламите и управляват кампаниите — не с
            посредник.
          </p>
        </div>

        <div
          className="reveal mt-11 overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_16px_50px_rgba(4,0,61,0.07)]"
          data-reveal
        >
          <div className="grid grid-cols-[1fr_1fr] sm:grid-cols-[0.8fr_1fr_1fr]">
            <div className="hidden border-b border-border p-4 sm:block" />
            <div className="border-b border-border bg-bg-soft p-4">
              <p className="text-[13px] font-semibold text-[#B0453C] sm:text-[14px]">
                Традиционна голяма агенция
              </p>
            </div>
            <div className="border-b border-l border-border bg-bg-alt p-4">
              <p className="text-[13px] font-semibold text-brand-violet sm:text-[14px]">
                Smart Reach
              </p>
            </div>

            {COMPARISON_ROWS.map((r) => (
              <div key={r.label} className="contents">
                <div className="col-span-2 border-b border-border bg-white px-4 pt-4 pb-1 sm:col-span-1 sm:border-b sm:py-4">
                  <p className="text-[13.5px] font-semibold text-text">{r.label}</p>
                </div>
                <div className="flex gap-2.5 border-b border-border p-4">
                  <X className="mt-[2px] h-4 w-4 shrink-0 text-[#C0716B]" />
                  <p className="text-[14px] leading-relaxed text-text-muted">{r.agency}</p>
                </div>
                <div className="flex gap-2.5 border-b border-l border-border bg-[#FCFBFF] p-4">
                  <Check className="mt-[2px] h-4 w-4 shrink-0 text-brand-violet" />
                  <p className="text-[14px] leading-relaxed text-text-secondary">{r.smart}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
