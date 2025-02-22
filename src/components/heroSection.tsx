"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Download } from "lucide-react";

gsap.registerPlugin(
  useGSAP,
  CustomEase,
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin
);

export const HeroSection = () => {
  const { theme, setTheme } = useTheme();

  const handleDownload = () => {
    const resumePath = `farazahmedabir/resume.pdf`;
    window.open(resumePath, "_blank");
  };

  useGSAP(() => {
    CustomEase.create(
      "heroEase",
      "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.06 0.694,0.952 0.728,0.665 0.818,0.665 0.906,0.665 1,1 1,1"
    );

    const tl = gsap.timeline({ defaults: { ease: "heroEase" } });

    tl.from(".hero-name", { y: 100, opacity: 0, duration: 1.2, delay: 0.2 })
      .from(".hero-role", { y: 80, opacity: 0, duration: 1 }, "-=0.5")
      .from(".hero-desc", { y: 60, opacity: 0, duration: 0.8 }, "-=0.3")
      .from(
        [".theme-toggle", ".profile-image"],
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
          rotationZ: 5,
          duration: 0.8,
          stagger: 0.1,
        },
        "-=0.2"
      );
  });

  return (
    <section className="container mx-auto flex h-[80vh] items-center px-4 md:h-[600px] transition-colors">
      <div className="fixed right-6 top-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="theme-toggle rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
        <div className="space-y-4 md:space-y-6 max-w-2xl">
          <h1 className="hero-name text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl dark:text-white">
            Faraz Ahmed Abir
          </h1>

          <p className="hero-role text-lg text-muted-foreground md:text-xl lg:text-2xl dark:text-slate-300">
            Software Engineer @ Drag Me | Backend | AI/ML
          </p>

          <p className="hero-desc text-base text-muted-foreground md:text-lg leading-relaxed dark:text-slate-400">
            Software engineer building web and mobile applications to solve
            real-life problems. Leveraging AI and machine learning to create
            MVPs for SaaS, with a strong focus on efficiency, scalability, and
            impactful solutions.
          </p>

          <Button
            onClick={handleDownload}
            className="download-btn rounded-lg px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:shadow-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
};
