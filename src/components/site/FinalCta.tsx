import { ArrowRight, Facebook } from "lucide-react";
import { LINKS } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";

export function FinalCta() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="dark-section px-5 py-[80px] sm:px-6 md:py-[120px]">
      <div ref={reveal} className="reveal mx-auto max-w-[820px] text-center">
        <p className="text-[12px] font-semibold tracking-[0.16em] text-[#A79FD6] uppercase">
          Готови, когато си и ти
        </p>
        <h2 className="mt-5 text-[30px] leading-tight font-bold text-white sm:text-[44px]">
          Нека превърнем рекламния ти бюджет в{" "}
          <span className="serif-accent">реални възможности</span> за бизнеса.
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-[16.5px] leading-relaxed text-[#C9C3EA]">
          Разкажи ни какво продаваш и какво искаш да постигнеш. Ще ти кажем честно дали и как можем
          да помогнем.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={LINKS.calendly}
            className="btn-primary group cta-glow w-full !px-7 !py-4 !text-[16px] sm:w-auto"
          >
            Заяви безплатна консултация
            <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-[3px]" />
          </a>
          <a
            href={LINKS.facebook}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-7 py-4 text-[16px] font-semibold text-white transition-all duration-200 hover:-translate-y-[2px] hover:bg-white/14 sm:w-auto"
          >
            <Facebook className="h-[18px] w-[18px]" />
            Пиши ни във Facebook
          </a>
        </div>

        <p className="mt-6 text-[13.5px] text-[#A79FD6]">
          Без обвързване. Без натиск. Директен разговор с екипа.
        </p>
      </div>
    </section>
  );
}
