import logo from "@/assets/smart-reach-logo.png.asset.json";
import { NAV_LINKS, LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="dark-section border-t border-white/10 text-white">
      <div className="mx-auto max-w-[1160px] px-5 py-16 sm:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={logo.url}
              alt="Smart Reach – дигитална маркетинг агенция"
              width={90}
              height={90}
              className="h-[90px] w-[90px] object-contain"
            />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[#C9C3EA]">
              AI видео реклами, рекламни криейтиви и Meta кампании, създадени и управлявани от един
              екип.
            </p>
          </div>

          <nav aria-label="Секции">
            <h3 className="text-[14px] font-semibold text-white">Навигация</h3>
            <ul className="mt-5 space-y-3 text-[14.5px] text-[#C9C3EA]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[14px] font-semibold text-white">Контакт</h3>
            <ul className="mt-5 space-y-3 text-[14.5px] text-[#C9C3EA]">
              <li>
                <a href={LINKS.email} className="transition-colors hover:text-white">
                  Имейл (placeholder)
                </a>
              </li>
              <li>
                <a href={LINKS.facebook} className="transition-colors hover:text-white">
                  Facebook (placeholder)
                </a>
              </li>
              <li>
                <a href={LINKS.instagram} className="transition-colors hover:text-white">
                  Instagram (placeholder)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-[13px] text-[#A79FD6] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Smart Reach. Всички права запазени.</span>
          <span className="flex gap-5">
            <a href={LINKS.privacy} className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href={LINKS.terms} className="transition-colors hover:text-white">
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
