import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/site";
import { useRevealGroup } from "@/hooks/useReveal";

export function Faq() {
  const ref = useRevealGroup<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bg-soft px-5 py-[76px] sm:px-6 md:py-[110px]">
      <div ref={ref} className="mx-auto max-w-[820px]">
        <p className="eyebrow reveal" data-reveal>
          Въпроси
        </p>
        <h2 className="reveal mt-4 text-[30px] leading-tight font-bold sm:text-[44px]" data-reveal>
          Всичко важно, преди да започнем.
        </h2>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`reveal overflow-hidden rounded-[18px] border bg-white transition-colors duration-300 ${
                  isOpen ? "border-brand-violet" : "border-border"
                }`}
                data-reveal
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left focus-visible:ring-2 focus-visible:ring-[color:var(--brand-glow-violet)] focus-visible:outline-none"
                >
                  <span className="text-[16px] font-semibold text-text">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-violet transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="px-5 pb-5 text-[15.5px] leading-relaxed text-text-secondary">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
