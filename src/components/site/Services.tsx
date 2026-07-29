import { Check, Play, BarChart3, LayoutGrid } from "lucide-react";
import { useRevealGroup } from "@/hooks/useReveal";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 space-y-3">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span className="mt-[3px] grid h-5 w-5 shrink-0 place-items-center rounded-full bg-bg-alt">
            <Check className="h-3 w-3 text-brand-violet" />
          </span>
          <span className="text-[15.5px] leading-relaxed text-text-secondary">{b}</span>
        </li>
      ))}
    </ul>
  );
}

function MockFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[24px] border border-border bg-white p-4 shadow-[0_20px_60px_rgba(4,0,61,0.08)] sm:p-6">
      {children}
    </div>
  );
}

/* ---------- Mockup 1: video pipeline ---------- */
function VideoMock() {
  const stages = ["Идея", "Сценарий", "Видео", "Рекламна версия"];
  return (
    <MockFrame>
      <div className="flex items-center gap-2">
        {stages.map((s, i) => (
          <div key={s} className="flex min-w-0 flex-1 items-center gap-2">
            <div
              className="flex-1 truncate rounded-full border border-border bg-bg-soft px-2.5 py-2 text-center text-[11.5px] font-medium text-text-secondary"
              style={{ animation: `mockPulse 4s ${i * 0.6}s ease-in-out infinite` }}
            >
              {s}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-[130px_1fr]">
        <div className="dark-section relative grid aspect-[9/16] place-items-center rounded-[16px]">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
            <Play className="ml-[2px] h-4 w-4 fill-white text-white" />
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-white/12 px-2 py-1 text-[10px] font-medium text-white">
            9:16
          </span>
        </div>
        <div className="space-y-2.5">
          {["Hook: първите 3 секунди", "Hook: проблем → решение", "Hook: демонстрация", "Hook: оферта"].map(
            (h, i) => (
              <div
                key={h}
                className="flex items-center justify-between rounded-[14px] border border-border bg-bg-soft px-3.5 py-3"
              >
                <span className="truncate text-[13px] text-text-secondary">{h}</span>
                <span className="ml-3 shrink-0 rounded-full bg-white px-2 py-1 text-[10.5px] font-semibold text-brand-violet">
                  v{i + 1}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------- Mockup 2: creative testing board ---------- */
function CreativeMock() {
  const cards = ["Hook A", "Hook B", "Benefit", "Offer", "Social Proof", "Retargeting"];
  const grads = [
    "linear-gradient(135deg,#0020AB,#3600AA)",
    "linear-gradient(135deg,#0529B3,#1A0299)",
    "linear-gradient(135deg,#06008E,#0020AB)",
    "linear-gradient(135deg,#3600AA,#0529B3)",
    "linear-gradient(135deg,#15015A,#06008E)",
    "linear-gradient(135deg,#1A0299,#0020AB)",
  ];
  return (
    <MockFrame>
      <div className="flex items-center gap-2 border-b border-border pb-4">
        <LayoutGrid className="h-4 w-4 text-brand-violet" strokeWidth={1.5} />
        <span className="text-[13px] font-semibold text-text">Creative testing board</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {cards.map((c, i) => (
          <div key={c} className="overflow-hidden rounded-[14px] border border-border">
            <div
              className="aspect-[4/5]"
              style={{ background: grads[i], animation: `mockPulse 5s ${i * 0.4}s ease-in-out infinite` }}
            />
            <div className="bg-white px-3 py-2.5">
              <p className="truncate text-[12px] font-semibold text-text">{c}</p>
              <p className="text-[11px] text-text-muted">1:1 · 4:5 · 9:16</p>
            </div>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

/* ---------- Mockup 3: ads dashboard (PLACEHOLDER VALUES — edit freely) ---------- */
const DASHBOARD_PLACEHOLDER = {
  spend: "1 200 лв.",
  leads: "184",
  cpl: "6,52 лв.",
  sales: "37",
  creatives: "12",
};

function DashboardMock() {
  const items = [
    { k: "Похарчен бюджет", v: DASHBOARD_PLACEHOLDER.spend },
    { k: "Получени запитвания", v: DASHBOARD_PLACEHOLDER.leads },
    { k: "Цена на едно запитване", v: DASHBOARD_PLACEHOLDER.cpl },
    { k: "Продажби", v: DASHBOARD_PLACEHOLDER.sales },
    { k: "Активни криейтиви", v: DASHBOARD_PLACEHOLDER.creatives },
  ];
  return (
    <MockFrame>
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-brand-violet" strokeWidth={1.5} />
          <span className="text-[13px] font-semibold text-text">Преглед на кампаниите</span>
        </div>
        <span className="rounded-full bg-bg-alt px-2.5 py-1 text-[10.5px] font-semibold text-text-muted">
          примерни стойности
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((it, i) => (
          <div key={it.k} className="rounded-[14px] border border-border bg-bg-soft px-3.5 py-3">
            <p className="text-[11.5px] text-text-muted">{it.k}</p>
            <p
              className="mt-1 text-[19px] font-bold text-text"
              style={{ animation: `mockPulse 6s ${i * 0.5}s ease-in-out infinite` }}
            >
              {it.v}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-[14px] border border-border px-3.5 py-3">
        {["Реклама", "Профил", "Форма", "Запитване"].map((s, i) => (
          <div key={s} className="flex min-w-0 flex-1 items-center gap-2">
            <span className="flex-1 truncate rounded-full bg-bg-alt px-2 py-1.5 text-center text-[11px] text-text-secondary">
              {s}
            </span>
            {i < 3 && <span className="text-text-muted">›</span>}
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

const SHOWCASES = [
  {
    eyebrow: "AI видео реклами",
    title: "Видео идеи, създадени да спрат скрола.",
    text: "Създаваме видео реклами, които представят продукта или услугата ясно, грабват вниманието още в началото и са подготвени за различни рекламни формати.",
    bullets: [
      "Различни начални послания",
      "AI UGC и продуктови видеа",
      "Формати за Facebook и Instagram",
      "Версии за тестване",
      "Монтаж, субтитри и motion елементи",
    ],
    mock: <VideoMock />,
  },
  {
    eyebrow: "Статични криейтиви",
    title: "Дизайн, който не е само красив. Той има работа за вършене.",
    text: "Създаваме рекламни банери с ясна идея, силно послание и визуален стил, който се разпознава като част от твоя бранд.",
    bullets: [
      "Различни рекламни ъгли",
      "Версии на заглавията",
      "Продуктови и промоционални визии",
      "Формати 1:1, 4:5 и 9:16",
      "Нови варианти при creative fatigue",
    ],
    mock: <CreativeMock />,
  },
  {
    eyebrow: "Facebook и Instagram реклама",
    title: "Не просто пускаме рекламата. Следим какво връща вложените пари.",
    text: "Настройваме, управляваме и подобряваме кампаниите според реалното поведение на хората — без да те затрупваме със сложни термини.",
    bullets: [
      "Структура на кампаниите",
      "Проследяване на резултатите",
      "Тестове на аудитории и послания",
      "Оптимизация на бюджета",
      "Ясни отчети и следващи стъпки",
    ],
    mock: <DashboardMock />,
  },
];

export function Services() {
  const ref = useRevealGroup<HTMLDivElement>();

  return (
    <section id="services" className="bg-bg-soft px-5 py-[76px] sm:px-6 md:py-[110px]">
      <div ref={ref} className="mx-auto max-w-[1160px] space-y-[76px] md:space-y-[120px]">
        {SHOWCASES.map((s, i) => (
          <div
            key={s.eyebrow}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            data-reveal
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className="eyebrow">{s.eyebrow}</p>
              <h3 className="mt-4 text-[26px] leading-tight font-bold sm:text-[34px]">{s.title}</h3>
              <p className="mt-4 text-[16.5px] leading-relaxed text-text-secondary">{s.text}</p>
              <div className="hidden lg:block">
                <Bullets items={s.bullets} />
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>{s.mock}</div>
            <div className="lg:hidden">
              <Bullets items={s.bullets} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
