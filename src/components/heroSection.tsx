"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Moon, Sun, ArrowDownRight, ArrowDown } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const HeroSection = () => {
  const { theme, setTheme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Dhaka",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(
        [
          ".hero-line",
          ".char",
          ".hero-subtitle",
          ".hero-desc",
          ".hero-cta",
          ".hero-social-link",
          ".scroll-indicator",
          ".nav-item",
          ".hero-badge",
          ".hero-marquee",
          ".hero-time",
          ".decorative-circle",
        ],
        { clearProps: "all" }
      );
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial states
    tl.set(".hero-line", { scaleX: 0 })
      .set(".char", { yPercent: 100, opacity: 0 })
      .set(".hero-subtitle", { yPercent: 100, opacity: 0 })
      .set(".hero-desc", { opacity: 0, y: 30 })
      .set(".hero-cta", { opacity: 0, y: 20 })
      .set(".hero-social-link", { opacity: 0, y: 20 })
      .set(".scroll-indicator", { opacity: 0 })
      .set(".nav-item", { opacity: 0, y: -20 })
      .set(".hero-badge", { scale: 0, opacity: 0 })
      .set(".hero-marquee", { opacity: 0 })
      .set(".hero-time", { opacity: 0 })
      .set(".decorative-circle", { scale: 0 });

    // Main animation sequence
    tl.to(".hero-line", {
      scaleX: 1,
      duration: 1.5,
      ease: "power2.inOut",
    })
      .to(
        ".decorative-circle",
        {
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.1,
        },
        "-=1"
      )
      .to(
        ".char",
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.03,
          ease: "power4.out",
        },
        "-=0.8"
      )
      .to(
        ".hero-subtitle",
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
        },
        "-=0.6"
      )
      .to(
        ".hero-badge",
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(2)",
        },
        "-=0.5"
      )
      .to(
        ".hero-desc",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .to(
        ".hero-cta",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.4"
      )
      .to(
        ".hero-social-link",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        "-=0.3"
      )
      .to(
        ".nav-item",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
        },
        "-=0.5"
      )
      .to(
        ".hero-time",
        {
          opacity: 1,
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(
        ".hero-marquee",
        {
          opacity: 1,
          duration: 0.8,
        },
        "-=0.3"
      )
      .to(
        ".scroll-indicator",
        {
          opacity: 1,
          duration: 0.5,
        },
        "-=0.2"
      );

    // Parallax effect on scroll
    gsap.to(".hero-content", {
      yPercent: 50,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Decorative circles parallax
    gsap.to(".decorative-circle-1", {
      y: -100,
      rotation: 180,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });

    gsap.to(".decorative-circle-2", {
      y: -150,
      rotation: -90,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Marquee animation
    gsap.to(".marquee-inner", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    // Scroll indicator animation
    gsap.to(".scroll-arrow", {
      y: 8,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Magnetic effect on buttons (with cleanup)
    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>(".magnetic-btn")
    );

    const cleanups: Array<() => void> = [];

    buttons.forEach((btn) => {
      const onMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      };

      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, { dependencies: [prefersReducedMotion] });

  // Split text into characters
  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block overflow-hidden">
        <span className="inline-block">{char === " " ? "\u00A0" : char}</span>
      </span>
    ));
  };

  const handleDownload = () => {
    const resumePath = `${
      process.env.NEXT_PUBLIC_BASE_PATH || "/farazahmedabir"
    }/resume.pdf`;
    window.open(resumePath, "_blank");
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />

      {/* Decorative Circles */}
      <div className="decorative-circle decorative-circle-1 absolute top-20 right-[20%] w-32 h-32 border border-foreground/10 rounded-full -z-10 hidden lg:block" />
      <div className="decorative-circle decorative-circle-2 absolute bottom-40 left-[10%] w-48 h-48 border border-foreground/5 rounded-full -z-10 hidden lg:block" />
      <div className="decorative-circle absolute top-1/2 right-[5%] w-4 h-4 bg-foreground/20 rounded-full -z-10 hidden lg:block" />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 flex justify-between items-center mix-blend-difference">
        <div className="nav-item">
          <span className="text-sm font-medium tracking-wider text-white">
            FARAZ©
          </span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-8">
            <a href="#projects" className="nav-item link-underline text-sm text-white tracking-wide">
              Work
            </a>
            <a href="#skills" className="nav-item link-underline text-sm text-white tracking-wide">
              About
            </a>
            <a href="#contact" className="nav-item link-underline text-sm text-white tracking-wide">
              Contact
            </a>
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="nav-item p-2 hover:opacity-60 transition-opacity text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="hero-content flex-1 flex items-center justify-center px-6 sm:px-12 pt-24">
        <div className="w-full max-w-7xl mx-auto">
          {/* Decorative Line */}
          <div className="hero-line h-px bg-foreground/20 mb-12 origin-left" />

          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 border border-foreground/20 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs tracking-wider uppercase text-muted-foreground">
              Available for projects
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4 sm:space-y-6">
            <div className="overflow-hidden">
              <p className="hero-subtitle text-sm sm:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Software Engineer & Problem Solver
              </p>
            </div>

            <h1
              ref={nameRef}
              className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-bold leading-[0.9] tracking-tight"
            >
              <div className="overflow-hidden whitespace-nowrap">
                {splitText("Faraz Ahmed")}
              </div>
              <div className="overflow-hidden whitespace-nowrap">
                {splitText("Abir")}
              </div>
            </h1>

            <div className="overflow-hidden pt-4">
              <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl">
                Backend • AI/ML • Full Stack
              </p>
            </div>
          </div>

          {/* Profile + Description & CTA */}
          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-16 items-start">
            {/* Profile Photo */}
            <div className="hero-profile hero-desc flex sm:hidden justify-center -mt-2">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border border-foreground/15 shadow-lg">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || "/farazahmedabir"}/farazahmedabir.jpeg`}
                  alt="Faraz Ahmed Abir"
                  fill
                  sizes="112px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="hero-desc">
              {/* Desktop/Tablet photo */}
              <div className="hidden sm:flex mb-6">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-foreground/15 shadow-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || "/farazahmedabir"}/farazahmedabir.jpeg`}
                    alt="Faraz Ahmed Abir"
                    fill
                    sizes="(min-width: 768px) 112px, 96px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
                Building scalable applications that solve real-world problems.
                Specializing in backend architecture, AI/ML solutions, and creating
                seamless user experiences. Currently focused on EdTech innovation.
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-6">
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={handleDownload}
                  className="magnetic-btn hero-cta group relative px-8 py-6 bg-foreground text-background hover:bg-foreground/90 rounded-none text-sm tracking-wider"
                >
                  <span className="flex items-center gap-2">
                    RESUME
                    <ArrowDownRight className="h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="magnetic-btn hero-cta px-8 py-6 rounded-none text-sm tracking-wider border-foreground/20 hover:bg-foreground hover:text-background transition-all"
                  onClick={() => {
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  LET&apos;S TALK
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-4">
                <a
                  href="https://github.com/farazabir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Github
                </a>
                <a
                  href="https://linkedin.com/in/faraz-ahmed-abir-57167a1ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:farazabir50@gmail.com"
                  className="hero-social-link link-underline text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="hero-line h-px bg-foreground/20 mt-12 origin-right" />
        </div>
      </div>

      {/* Marquee */}
      <div className="hero-marquee absolute bottom-32 left-0 right-0 overflow-hidden py-4 border-y border-foreground/5">
        <div className="marquee-inner flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[10vw] sm:text-[8vw] font-bold text-foreground/[0.03] mx-4">
              DEVELOPER • ENGINEER • CREATOR • INNOVATOR •
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="scroll-arrow w-6 h-10 border border-foreground/30 rounded-full flex items-start justify-center pt-2">
          <ArrowDown className="h-3 w-3 text-foreground/50" />
        </div>
      </div>

      {/* Bottom Status */}
      <div className="absolute bottom-8 left-6 sm:left-12 hidden sm:flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
        <span className="text-xs tracking-wider text-muted-foreground uppercase">
          Based in Bangladesh
        </span>
      </div>

      {/* Time */}
      <div className="hero-time absolute bottom-8 right-6 sm:right-12 hidden sm:block">
        <span className="text-xs tracking-wider text-muted-foreground font-mono">
          {currentTime} GMT+6
        </span>
      </div>
    </section>
  );
};
