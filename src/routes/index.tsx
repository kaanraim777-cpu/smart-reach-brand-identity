import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Search,
  Megaphone,
  Target,
  ArrowRight,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Reach — дигитална маркетинг агенция за растеж" },
      {
        name: "description",
        content:
          "Smart Reach изгражда предвидим растеж с performance реклама, SEO, съдържание и аналитика за амбициозни български брандове.",
      },
      { property: "og:title", content: "Smart Reach — дигитална маркетинг агенция" },
      {
        property: "og:description",
        content:
          "Performance реклама, SEO и аналитика, които превръщат рекламния бюджет в измерими приходи.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Megaphone,
    title: "Performance реклама",
    text: "Meta, Google и TikTok кампании, изградени около единица икономика, а не около импресии.",
  },
  {
    icon: Search,
    title: "SEO и съдържание",
    text: "Техническа основа и редакционен план, които носят органичен трафик с намерение за покупка.",
  },
  {
    icon: BarChart3,
    title: "Аналитика и CRO",
    text: "Чисто проследяване, ясни табла и тестове, които вдигат конверсията без повече бюджет.",
  },
  {
    icon: Target,
    title: "Стратегия и позициониране",
    text: "Ясно послание и офер, който отличава бранда ви от всички останали в категорията.",
  },
];

const steps = [
  {
    n: "01",
    title: "Одит и данни",
    text: "Преглеждаме акаунти, проследяване и фунии, за да намерим къде изтича бюджетът.",
  },
  {
    n: "02",
    title: "Стратегия",
    text: "Изграждаме канален микс с прогнозни цели по CPA, ROAS и обем.",
  },
  {
    n: "03",
    title: "Изпълнение",
    text: "Креативи, кампании и лендинг страници, пуснати в спринтове на две седмици.",
  },
  {
    n: "04",
    title: "Мащабиране",
    text: "Скалираме това, което работи, и спираме останалото — прозрачно и с отчетност.",
  },
];

const metrics = [
  { value: "+184%", label: "среден ръст на приходите за 9 месеца" },
  { value: "3.9x", label: "среден blended ROAS при клиентите ни" },
  { value: "-37%", label: "по-ниска цена на придобиване" },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero */}
      <section className="hero-glow pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-text-muted">
            Дигитална маркетинг агенция · София
          </span>
          <h1 className="mt-7 text-[2.6rem] leading-[1.08] font-bold sm:text-6xl">
            Маркетинг, който носи{" "}
            <span className="serif-accent grad-text">измерим растеж</span>, а не
            само отчети
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Smart Reach управлява реклама, съдържание и аналитика като една
            система — така всяко похарчено лев се проследява до реален приход.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn-primary">
              Заявете безплатен одит <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-secondary">
              Вижте услугите
            </a>
          </div>

          {/* dashboard mockup */}
          <div className="card-soft mx-auto mt-16 max-w-3xl overflow-hidden p-0 text-left">
            <div className="flex items-center gap-2 border-b border-border-soft px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-3 text-xs text-text-muted">
                Smart Reach · Growth Dashboard
              </span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl bg-bg-alt p-5">
                  <p className="text-2xl font-bold text-brand-blue">{m.value}</p>
                  <p className="mt-2 text-xs leading-snug text-text-muted">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="rounded-2xl p-5" style={{ background: "#04003D" }}>
                <p className="text-xs text-[#A79FD6]">Приходи по канал</p>
                <div className="mt-4 flex h-24 items-end gap-2">
                  {[38, 52, 44, 66, 58, 78, 71, 92].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md"
                      style={{
                        height: `${h}%`,
                        background:
                          i > 5
                            ? "linear-gradient(180deg,#3600AA,#0020AB)"
                            : "#06008E",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-bg-soft py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Всичко, което е нужно за{" "}
            <span className="serif-accent">устойчив растеж</span>
          </h2>
          <p className="mt-4 max-w-xl text-text-secondary">
            Един екип, който покрива целия път от първото впечатление до
            повторната покупка.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="card-soft p-7">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Как работим</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-[22px] border border-border p-6">
                <span className="text-sm font-bold text-brand-violet">{s.n}</span>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-bg-alt py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Прозрачност във всяко число
            </h2>
            <p className="mt-4 text-text-secondary">
              Получавате достъп до същите табла, които ползваме и ние. Без скрити
              комисиони и без разкрасени отчети.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Седмични отчети с ясни следващи стъпки",
                "Собственост върху всички рекламни акаунти",
                "Прогнози по бюджет, CPA и ROAS",
                "Директен достъп до екипа, без акаунт мениджъри",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-text-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-7">
            <p className="text-sm text-text-muted">Клиентски случай · E-commerce</p>
            <p className="serif-accent mt-4 text-2xl leading-snug text-text">
              „За две тримесечия Smart Reach удвои приходите ни от платена
              реклама, без да увеличава бюджета.“
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-border-soft pt-6">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: "var(--brand-gradient-reverse)" }}
              >
                МД
              </div>
              <div>
                <p className="text-sm font-semibold text-text">Мартин Димитров</p>
                <p className="text-xs text-text-muted">Съосновател, Nordic Home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="dark-section py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Готови ли сте за{" "}
            <span className="serif-accent text-[#C9C3EA]">следващото ниво</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#C9C3EA]">
            Запазете 30-минутен разговор. Ще прегледаме акаунтите ви и ще
            получите конкретен план — без ангажимент.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@smartreach.bg" className="btn-primary">
              Запази разговор <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@smartreach.bg"
              className="btn-secondary !border-white/25 !bg-transparent !text-white hover:!bg-white/10"
            >
              hello@smartreach.bg
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
