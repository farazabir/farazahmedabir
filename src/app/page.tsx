"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseFollower from "@/components/mouseFollower";
import { HeroSection } from "@/components/heroSection";
import { ProjectsSection } from "@/components/projectSection";
import { SkillsSection } from "@/components/skillSection";
import { ContactSection } from "@/components/contactSection";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isMobile =
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 768px)").matches;

      // Section reveal animations
      const sections = gsap.utils.toArray<Element>([
        ".projects-section",
        ".skills-section",
        ".contact-section",
      ]);

      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: isMobile ? 30 : 80,
          duration: isMobile ? 0.6 : 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
            scrub: isMobile ? false : 0.5,
          },
        });
      });

      // Parallax effect for sections on desktop
      if (!isMobile) {
        gsap.to(".projects-section", {
          y: -50,
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".skills-section", {
          y: -30,
          scrollTrigger: {
            trigger: ".skills-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    },
    { scope: container }
  );

  return (
    <main ref={container} className="relative overflow-hidden bg-background">
      {/* Mouse Follower - Desktop Only */}
      {typeof window !== "undefined" &&
        !window.matchMedia("(max-width: 768px)").matches && <MouseFollower />}

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 origin-left"
          style={{
            transform: "scaleX(0)",
          }}
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
            }
          }}
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section min-h-screen w-full">
        <HeroSection />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="projects-section min-h-screen w-full py-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
        <ProjectsSection />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="skills-section min-h-screen w-full py-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
        <SkillsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section w-full relative">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
