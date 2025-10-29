"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";

gsap.registerPlugin(useGSAP, CustomEase, ScrollTrigger);

export const HeroSection = () => {
  const { theme, setTheme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const resumePath = `${
      process.env.NEXT_PUBLIC_BASE_PATH || "/farazahmedabir"
    }/resume.pdf`;
    window.open(resumePath, "_blank");
  };

  useGSAP(() => {
    CustomEase.create(
      "heroEase",
      "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.06 0.694,0.952 0.728,0.665 0.818,0.665 0.906,0.665 1,1 1,1"
    );

    const tl = gsap.timeline({ defaults: { ease: "heroEase" } });

    // Staggered entrance animations
    tl.from(".hero-badge", {
      y: 30,
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
      .from(
        ".hero-name",
        {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.05,
        },
        "-=0.4"
      )
      .from(
        ".hero-role",
        {
          y: 80,
          opacity: 0,
          duration: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        },
        "-=0.6"
      )
      .from(
        ".hero-desc",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .from(
        ".hero-buttons",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.3"
      )
      .from(
        ".hero-social",
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        ".scroll-indicator",
        {
          opacity: 0,
          y: -20,
          duration: 0.6,
        },
        "-=0.2"
      );

    // Floating animation for badge
    gsap.to(".hero-badge", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Parallax effect on scroll
    gsap.to(".hero-name", {
      y: -50,
      opacity: 0.5,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(".hero-role, .hero-desc", {
      y: -30,
      opacity: 0.3,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Scroll indicator animation
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  // Animated gradient background
  useEffect(() => {
    if (!particlesRef.current) return;

    const colors =
      theme === "dark"
        ? ["#3b82f6", "#8b5cf6", "#ec4899"]
        : ["#60a5fa", "#a78bfa", "#f472b6"];

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 300 + 100;
      const color = colors[Math.floor(Math.random() * colors.length)];

      gsap.set(particle, {
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        position: "absolute",
        borderRadius: "50%",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        filter: "blur(60px)",
        pointerEvents: "none",
      });

      particlesRef.current.appendChild(particle);

      gsap.to(particle, {
        x: `random(-200, 200)`,
        y: `random(-200, 200)`,
        duration: `random(15, 25)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [theme]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div ref={particlesRef} className="absolute inset-0 -z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-background/80 backdrop-blur-3xl -z-10" />

      {/* Theme Toggle */}
      <div className="fixed right-4 sm:right-6 top-4 sm:top-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="theme-toggle rounded-full shadow-lg hover:scale-110 transition-all duration-300 border-2 bg-background/80 backdrop-blur-sm"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
          ) : (
            <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
          )}
        </Button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 sm:py-0">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Available for work
            </span>
          </div>

          {/* Name with gradient */}
          <h1 className="hero-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Faraz Ahmed Abir
            </span>
          </h1>

          {/* Role */}
          <div className="hero-role relative">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Software Engineer <span className="text-primary">@</span> Drag Me
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/80 mt-2">
              Backend • AI/ML • Full Stack
            </p>
          </div>

          {/* Description */}
          <p className="hero-desc text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Building scalable web and mobile applications that solve real-world
            problems. Currently developing QuizNest, an AI-powered EdTech
            platform for exam preparation. Leveraging AI and machine learning to
            create impactful SaaS solutions with a focus on efficiency and
            innovation.{" "}
            <span className="text-primary font-semibold">efficiency</span> and
            <span className="text-primary font-semibold"> innovation</span>.
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={handleDownload}
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base sm:text-lg font-semibold border-2 hover:bg-primary/10 transition-all duration-300"
              onClick={() => {
                document
                  .querySelector(".contact-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/farazabir"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social group p-3 rounded-full bg-muted hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/faraz-ahmed-abir-57167a1ab"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social group p-3 rounded-full bg-muted hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="mailto:farazabir50@gmail.com"
              className="hero-social group p-3 rounded-full bg-muted hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};
