import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { FORM_STEPS, LINKS } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";

type Answers = Record<string, string>;

export function QualifyForm() {
  const reveal = useReveal<HTMLDivElement>();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");

  const total = FORM_STEPS.length;
  const current = FORM_STEPS[step];
  const progress = ((step + 1) / total) * 100;

  const next = () => {
    setError("");
    setStep((s) => Math.min(s + 1, total - 1));
  };

  const choose = (value: string) => {
    setAnswers((a) => ({ ...a, [current.id]: value }));
    setTimeout(next, 160);
  };

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.name.trim()) return setError("Моля, въведи име.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contact.email)) return setError("Моля, въведи валиден имейл.");
    // TODO: свържи с backend / CRM
    next();
  };

  const inputCls =
    "w-full rounded-2xl border border-border bg-white px-4 py-3 text-[15px] text-text outline-none transition-colors placeholder:text-text-muted focus:border-brand-violet focus:ring-2 focus:ring-[color:var(--brand-glow-violet)]";

  return (
    <section id="form" className="px-5 py-[76px] sm:px-6 md:py-[110px]">
      <div ref={reveal} className="reveal mx-auto max-w-[820px]">
        <div className="text-center">
          <p className="eyebrow">Нека видим дали можем да помогнем</p>
          <h2 className="mt-4 text-[30px] leading-tight font-bold sm:text-[38px]">
            Разкажи ни накратко за бизнеса си.
          </h2>
          <p className="mt-3 text-[16px] text-text-muted">Отнема около 30 секунди.</p>
        </div>

        <div className="mt-9 rounded-[24px] border border-border bg-white p-5 shadow-[0_16px_50px_rgba(4,0,61,0.07)] sm:p-8">
          <div className="flex items-center justify-between text-[13px] font-medium text-text-muted">
            <span>
              Стъпка {step + 1} от {total}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-3 h-[6px] w-full overflow-hidden rounded-full bg-bg-alt">
            <div
              className="h-full rounded-full transition-all duration-[380ms]"
              style={{ width: `${progress}%`, background: "var(--brand-gradient)" }}
            />
          </div>

          <div className="mt-7 overflow-hidden">
            <div key={current.id} className="step-in">
              <h3 className="text-[20px] font-semibold sm:text-[24px]">{current.question}</h3>

              {current.type === "choice" && (
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {current.options?.map((o) => {
                    const active = answers[current.id] === o.value;
                    return (
                      <button
                        key={o.value}
                        type="button"
                        onClick={() => choose(o.value)}
                        className={`rounded-2xl border px-4 py-3.5 text-left text-[15px] font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[color:var(--brand-glow-violet)] focus-visible:outline-none ${
                          active
                            ? "border-brand-violet bg-bg-alt text-text"
                            : "border-border bg-white text-text-secondary hover:-translate-y-[2px] hover:border-[#ded8f5] hover:text-text"
                        }`}
                      >
                        {o.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {current.type === "contact" && (
                <form onSubmit={submitContact} className="mt-5 grid gap-3">
                  <input
                    className={inputCls}
                    placeholder="Име"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  />
                  <input
                    className={inputCls}
                    type="email"
                    placeholder="Имейл"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  />
                  <input
                    className={inputCls}
                    placeholder="Телефон (по избор)"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  />
                  {error && <p className="text-[14px] text-[#C0392B]">{error}</p>}
                  <button type="submit" className="btn-primary group mt-1 w-full sm:w-auto">
                    Продължи
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
                  </button>
                </form>
              )}

              {current.type === "confirm" && (
                <div className="mt-5">
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-bg-soft p-4">
                    <span className="mt-[2px] grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#10B981]">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </span>
                    <p className="text-[15px] text-text-secondary">
                      Благодарим, {contact.name || "приятел"}. Запази удобен час и ще говорим
                      директно с теб — без обвързване.
                    </p>
                  </div>
                  <a href={LINKS.calendly} className="btn-primary group mt-5 w-full sm:w-auto">
                    Запази разговор
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-text-muted transition-colors hover:text-text"
            >
              <ArrowLeft className="h-4 w-4" /> Назад
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
