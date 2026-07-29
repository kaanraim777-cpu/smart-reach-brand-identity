import { ImagePlus } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <article className="w-[280px] shrink-0 rounded-[18px] border border-border bg-white p-4 shadow-[0_6px_22px_rgba(4,0,61,0.05)] sm:w-[330px]">
      <div className="flex items-center gap-3">
        <div
          className="h-9 w-9 shrink-0 rounded-full"
          style={{ background: "var(--brand-gradient)" }}
          aria-hidden
        />
        <div className="min-w-0">
          <p className="truncate text-[13.5px] font-semibold text-text">{t.name}</p>
          <p className="text-[11.5px] text-text-muted">{t.time}</p>
        </div>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">{t.message}</p>
      <div className="mt-3 grid h-[92px] place-items-center rounded-[14px] border border-dashed border-[#CFC8E8] bg-bg-soft">
        <div className="text-center">
          <ImagePlus className="mx-auto h-4 w-4 text-text-muted" strokeWidth={1.4} />
          <p className="mt-1.5 text-[11.5px] text-text-muted">Място за реален скрийншот</p>
        </div>
      </div>
      <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-border bg-bg-soft px-2.5 py-1 text-[12px]">
        {t.reaction} <span className="text-text-muted">1</span>
      </span>
    </article>
  );
}

export function Testimonials() {
  const reveal = useReveal<HTMLDivElement>();
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="px-0 py-[76px] md:py-[110px]">
      <div ref={reveal} className="reveal mx-auto max-w-[1160px] px-5 sm:px-6">
        <p className="eyebrow">Отзиви</p>
        <h2 className="mt-4 max-w-[820px] text-[30px] leading-tight font-bold sm:text-[44px]">
          Не просто думи. <span className="serif-accent grad-text">Реални</span> съобщения от
          клиенти.
        </h2>
      </div>

      <div className="marquee-mask marquee-hover mt-11 overflow-hidden">
        <div className="marquee-track flex w-max gap-4 px-4" style={{ animationDuration: "80s" }}>
          {items.map((t, i) => (
            <Card key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
