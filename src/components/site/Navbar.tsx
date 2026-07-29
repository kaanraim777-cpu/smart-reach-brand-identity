import { useState } from "react";
import logo from "@/assets/smart-reach-logo.png.asset.json";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процес" },
  { href: "#results", label: "Резултати" },
  { href: "#contact", label: "Контакт" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between rounded-[26px] border border-border bg-white/85 px-3 py-2.5 backdrop-blur-xl"
        style={{ boxShadow: "0 8px 30px rgba(4,0,61,0.07), 0 2px 8px rgba(21,1,90,0.04)" }}
      >
        <a href="#top" className="flex items-center gap-3 pl-1">
          <img
            src={logo.url}
            alt="Smart Reach – дигитална маркетинг агенция"
            width={46}
            height={46}
            className="h-[46px] w-[46px] rounded-[11px] object-contain"
          />
          <span
            className="hidden text-[17.5px] font-bold text-text sm:inline"
            style={{ letterSpacing: "-0.02em" }}
          >
            Smart Reach
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-brand-indigo"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary !px-5 !py-2.5 !text-sm">
            Безплатна консултация
          </a>
          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2 md:hidden"
          >
            <span className="block h-[2px] w-4 bg-text" />
            <span className="mt-1 block h-[2px] w-4 bg-text" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-border bg-white p-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-text-secondary"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
