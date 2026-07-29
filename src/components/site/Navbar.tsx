import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/smart-reach-logo.png.asset.json";
import { NAV_LINKS, LINKS } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-4">
      <nav
        aria-label="Основна навигация"
        className={`mx-auto grid max-w-[1100px] grid-cols-[minmax(0,1fr)_auto] items-center rounded-full border border-border px-3 transition-all duration-[350ms] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] ${
          scrolled
            ? "bg-white/70 py-1.5 shadow-[0_10px_34px_rgba(4,0,61,0.10)] backdrop-blur-[24px] backdrop-saturate-[1.8]"
            : "bg-white py-2.5 shadow-[0_6px_24px_rgba(4,0,61,0.06)]"
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-3 pl-1">
          <img
            src={logo.url}
            alt="Smart Reach – дигитална маркетинг агенция"
            width={46}
            height={46}
            className="h-[46px] w-[46px] shrink-0 rounded-[11px] object-contain"
          />
          <span
            className="truncate text-[17.5px] font-bold text-text"
            style={{ letterSpacing: "-0.02em" }}
          >
            Smart Reach
          </span>
        </a>

        <div className="hidden items-center justify-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14.5px] font-medium text-text-secondary transition-colors hover:text-brand-violet focus-visible:text-brand-violet focus-visible:outline-none"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2">
          <a href={LINKS.calendly} className="btn-primary group !px-5 !py-2.5 !text-[14px]">
            Заяви консултация
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
          </a>
          <button
            type="button"
            aria-label={open ? "Затвори менюто" : "Отвори менюто"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2 text-text transition-colors hover:bg-bg-alt md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto grid max-w-[1100px] overflow-hidden transition-all duration-300 md:hidden ${
          open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="rounded-[26px] border border-border bg-white p-3 shadow-[0_10px_34px_rgba(4,0,61,0.08)]">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-3 py-3 text-[15px] font-medium text-text-secondary transition-colors hover:bg-bg-alt hover:text-text"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
