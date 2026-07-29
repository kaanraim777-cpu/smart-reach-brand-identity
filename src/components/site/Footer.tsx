import logo from "@/assets/smart-reach-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="dark-section text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src={logo.url}
              alt="Smart Reach – дигитална маркетинг агенция"
              width={90}
              height={90}
              className="h-[90px] w-[90px] object-contain"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#C9C3EA]">
              Smart Reach е дигитална маркетинг агенция, която изгражда
              предвидими канали за растеж чрез данни, реклама и съдържание.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Услуги</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#C9C3EA]">
              <li>Performance реклама</li>
              <li>SEO и съдържание</li>
              <li>Social media</li>
              <li>Аналитика и CRO</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Контакт</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#C9C3EA]">
              <li>hello@smartreach.bg</li>
              <li>+359 88 000 0000</li>
              <li>София, България</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-[#A79FD6] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Smart Reach. Всички права запазени.</span>
          <span>Условия · Поверителност</span>
        </div>
      </div>
    </footer>
  );
}
