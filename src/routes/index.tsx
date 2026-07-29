import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Showreel } from "@/components/site/Showreel";
import { StatsBar } from "@/components/site/StatsBar";
import { QualifyForm } from "@/components/site/QualifyForm";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Services } from "@/components/site/Services";
import { Comparison } from "@/components/site/Comparison";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";

const TITLE = "Smart Reach | Рекламни криейтиви и Meta реклама";
const DESCRIPTION =
  "Smart Reach създава AI видео реклами, рекламни криейтиви и управлява Facebook и Instagram кампании за повече продажби и качествени запитвания.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <StatsBar />
        <QualifyForm />
        <Problem />
        <Solution />
        <HowItWorks />
        <Services />
        <Comparison />
        <CaseStudies />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
