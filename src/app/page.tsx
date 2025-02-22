"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseFollower from "@/components/mouseFollower";
import { HeroSection } from "../components/heroSection";
import { ProjectsSection } from "@/components/projectSection";
import { SkillsSection } from "@/components/skillSection";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false;

  useGSAP(
    () => {
      // Only run animations on desktop
      if (!isMobile) {
        // Hero Section Animation
        gsap.from(".hero-section", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none none",
          },
        });

        // Skills Section Animation
        gsap.from(".skills-section", {
          x: 300,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-section",
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        });

        // About Section Animation
        gsap.from(".about-section", {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        });

        // Projects Section Animation
        gsap.from(".projects-section", {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        });
      }
    },
    { scope: container }
  );

  return (
    <main ref={container} className="overflow-x-hidden">
      {/* Mouse Follower - Hidden on Mobile */}
      {!isMobile && <MouseFollower />}
      {/* Hero Section */}
      <section className="hero-section min-h-screen w-full flex items-center px-4 py-16 md:py-0">
        <HeroSection />
      </section>
      {/* Projects Section */}
      <section className="projects-section min-h-screen w-full flex items-center bg-muted/20 px-4 py-16 md:py-0">
        <ProjectsSection />
      </section>
      {/* Skills Section */}
      <section className="skills-section min-h-screen w-full flex items-center bg-muted/20 px-4 py-16 md:py-0">
        <SkillsSection />
      </section>

      <Footer />
    </main>
  );
}
