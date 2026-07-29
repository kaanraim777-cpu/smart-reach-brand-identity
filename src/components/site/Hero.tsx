import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { NICHES, AUDIENCE_PILLS, LINKS } from "@/data/site";
import { prefersReducedMotion } from "@/hooks/useReveal";

function RotatingNiche() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % NICHES.length);
        setVisible(true);
      }, 450);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="inline-flex items-baseline">
      <span
        className="font-semibold text-brand-violet transition-all duration-[450ms]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        {NICHES[i]}
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden px-5 pt-32 pb-4 sm:px-6 md:pt-40">
      <div className="mx-auto max-w-[1160px] text-center">
        <div className="hero-in inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[13px] font-medium text-text-secondary shadow-[0_2px_10px_rgba(4,0,61,0.05)]">
          <span className="pulse-dot" aria-hidden />
          Работим с ограничен брой брандове едновременно
        </div>

        <h1
          className="hero-in mx-auto mt-7 max-w-[900px] text-[30px] leading-[1.08] font-bold text-text sm:text-[42px] md:text-[57px]"
          style={{ animationDelay: "0.08s" }}
        >
          Създаваме рекламите. Управляваме кампаниите.{" "}
          <span className="grad-text">
            Ти виждаш <span className="serif-accent">резултата</span>.
          </span>
        </h1>

        <p
          className="hero-in mx-auto mt-6 max-w-[780px] text-[16.5px] leading-relaxed text-text-secondary sm:text-[18px]"
          style={{ animationDelay: "0.16s" }}
        >
          AI видео реклами, статични криейтиви и Meta кампании — създадени и
          управлявани от един екип, който познава бизнеса ти.
        </p>

        <p
          className="hero-in mt-4 text-[15px] text-text-muted"
          style={{ animationDelay: "0.22s" }}
        >
          Работим с <RotatingNiche />
        </p>

        <div className="hero-in mt-9" style={{ animationDelay: "0.3s" }}>
          <a href={LINKS.calendly} className="btn-primary group cta-glow !px-7 !py-4 !text-[16px]">
            Заяви безплатна консултация
            <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-[3px]" />
          </a>
          <p className="mt-4 text-[14px] text-text-muted">
            30 минути. Без обвързване. Говориш директно с нас.
          </p>
        </div>
      </div>

      <div
        className="hero-in marquee-mask relative mt-14 overflow-hidden"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="marquee-track flex w-max gap-3" style={{ animationDuration: "38s" }}>
          {[...AUDIENCE_PILLS, ...AUDIENCE_PILLS, ...AUDIENCE_PILLS].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="rounded-full border border-border bg-white px-5 py-2.5 text-[14px] font-medium whitespace-nowrap text-text-secondary shadow-[0_2px_8px_rgba(4,0,61,0.04)]"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
