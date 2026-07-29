import { MessageSquare, Map, Rocket, TrendingUp } from "lucide-react";
import { STEPS } from "@/data/site";
import { useRevealGroup } from "@/hooks/useReveal";

const ICONS = { MessageSquare, Map, Rocket, TrendingUp };

export function HowItWorks() {
  const ref = useRevealGroup<HTMLDivElement>();

  return (
    <section id="how" className="px-5 py-[76px] sm:px-6 md:py-[110px]">
      <div ref={ref} className="mx-auto max-w-[1160px]">
        <div className="max-w-[820px]">
          <p className="eyebrow reveal" data-reveal>
            Как работим
          </p>
          <h2 className="reveal mt-4 text-[30px] leading-tight font-bold sm:text-[44px]" data-reveal>
            Ние изграждаме системата. Ти{" "}
            <span className="serif-accent grad-text">развиваш бизнеса</span>.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <article key={s.step} className="card-soft reveal p-6" data-reveal>
                <Icon className="h-6 w-6 text-brand-violet" strokeWidth={1.4} />
                <p className="mt-6 text-[11.5px] font-semibold tracking-[0.14em] text-text-muted">
                  {s.step}
                </p>
                <h3 className="mt-2 text-[20px] font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-text-secondary">{s.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
