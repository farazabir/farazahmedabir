"use client";

import { useRef, lazy, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/heroSection";
import { ProjectsSection } from "@/components/projectSection";
import { SkillsSection } from "@/components/skillSection";
import { ContactSection } from "@/components/contactSection";
import Footer from "@/components/footer";

// Lazy load heavy component
const LiquidBlob = lazy(() => import("@/components/liquidBlob"));

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <main ref={container} className="relative bg-background overflow-x-hidden">
      {/* Premium background (subtle gradients + grid) */}
      <div className="site-bg" aria-hidden="true" />
      {/* Liquid Blob Cursor - Desktop Only */}
      <Suspense fallback={null}>
        <LiquidBlob />
      </Suspense>

      {/* Noise Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-px bg-border z-50">
        <div
          className="h-full bg-foreground origin-left"
          ref={(el) => {
            if (el) {
              gsap.to(el, {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                  start: "top top",
                  end: "max",
                  scrub: 0.3,
                },
              });
              gsap.set(el, { scaleX: 0 });
            }
          }}
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <HeroSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section relative">
        <ProjectsSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section relative">
        <SkillsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section relative">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
