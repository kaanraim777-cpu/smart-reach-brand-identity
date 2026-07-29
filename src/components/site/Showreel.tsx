import { useRef } from "react";
import { Play } from "lucide-react";
import { useReveal, prefersReducedMotion } from "@/hooks/useReveal";

/** EDITABLE: replace with a real video URL / embed. */
export const SHOWREEL_URL = "#showreel-video-url";

export function Showreel() {
  const reveal = useReveal<HTMLDivElement>();
  const frame = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = frame.current;
    if (!el || prefersReducedMotion()) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 5}deg)`;
  };

  const onLeave = () => {
    if (frame.current) frame.current.style.transform = "perspective(1200px)";
  };

  return (
    <section className="px-5 pt-16 sm:px-6">
      <div ref={reveal} className="reveal mx-auto max-w-[900px]">
        <div
          ref={frame}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative rounded-[24px] p-[1.5px] transition-transform duration-300 ease-out"
          style={{
            background: "linear-gradient(135deg, rgba(0,32,171,0.45), rgba(54,0,170,0.45))",
            boxShadow:
              "0 30px 80px rgba(4,0,61,0.18), 0 10px 30px rgba(54,0,170,0.14), 0 0 60px rgba(5,41,179,0.12)",
          }}
        >
          <a
            href={SHOWREEL_URL}
            className="dark-section group flex aspect-video w-full flex-col items-center justify-center rounded-[23px] focus-visible:outline-none"
            aria-label="Гледай Smart Reach Showreel"
          >
            <span className="grid h-[68px] w-[68px] place-items-center rounded-full bg-white/12 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
              <Play className="ml-[3px] h-6 w-6 fill-white text-white" />
            </span>
            <span className="mt-5 text-[15px] font-semibold text-white">Smart Reach Showreel</span>
            <span className="mt-1 text-[13px] text-[#B7AFE3]">Виж как работим</span>
          </a>
        </div>
      </div>
    </section>
  );
}
