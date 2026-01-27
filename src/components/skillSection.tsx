"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Git", category: "Tools" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "OpenCV", category: "AI/ML" },
  { name: "RabbitMQ", category: "Backend" },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Drag Me",
    duration: "2023 — Present",
    description:
      "Full Stack development with focus on scalable architecture and AI integration.",
  },
  {
    role: "Mobile Developer",
    company: "Freelance",
    duration: "2022 — 2023",
    description:
      "Cross-platform mobile applications with React Native and Flutter.",
  },
  {
    role: "Full Stack Developer",
    company: "Self-Employed",
    duration: "2021 — 2022",
    description:
      "Web applications using modern JavaScript frameworks and Node.js.",
  },
];

const stats = [
  { value: "5+", label: "Years Coding" },
  { value: "20+", label: "Technologies" },
  { value: "100+", label: "Projects" },
  { value: "∞", label: "Curiosity" },
];

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;
      // Title reveal animation
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      titleTl
        .from(".skills-title-line", {
          scaleX: 0,
          duration: 1,
          ease: "power3.inOut",
        })
        .from(
          ".skills-title-text",
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        );

      // Stats counter animation
      gsap.utils.toArray<HTMLElement>(".stat-item").forEach((stat, i) => {
        const valueEl = stat.querySelector(".stat-value");
        const labelEl = stat.querySelector(".stat-label");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(valueEl, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        }).from(
          labelEl,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4",
        );
      });

      // Marquee animation - two directions
      gsap.to(".skills-marquee-1", {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });

      gsap.to(".skills-marquee-2", {
        xPercent: 50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });

      // Skills grid stagger animation
      gsap.from(".skill-tag", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        opacity: 0,
        stagger: {
          each: 0.03,
          from: "random",
          grid: "auto",
        },
        duration: 0.5,
        ease: "back.out(2)",
      });

      // Skills grid hover effect
      gsap.utils.toArray<HTMLElement>(".skill-tag").forEach((tag) => {
        tag.addEventListener("mouseenter", () => {
          gsap.to(tag, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        tag.addEventListener("mouseleave", () => {
          gsap.to(tag, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Experience section animation
      const expTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      expTl.from(".experience-title", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Timeline line draw animation
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".experience-list",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Experience items stagger
      gsap.utils.toArray<HTMLElement>(".experience-item").forEach((item, i) => {
        const dot = item.querySelector(".timeline-dot");
        const content = item.querySelector(".experience-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(dot, {
          scale: 0,
          duration: 0.4,
          delay: i * 0.15,
          ease: "back.out(3)",
        }).from(
          content,
          {
            x: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2",
        );
      });

      // About text reveal
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Parallax for background text
      gsap.to(".bg-text", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="skills-section py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="bg-text absolute -right-20 top-1/4 -rotate-90 pointer-events-none hidden xl:block">
        <span className="text-[250px] font-bold text-foreground/[0.02] whitespace-nowrap">
          SKILLS
        </span>
      </div>

      {/* Section Header */}
      <div className="skills-header px-6 sm:px-12 max-w-7xl mx-auto mb-16 sm:mb-24">
        <div className="skills-title-line h-px bg-foreground/20 mb-8 origin-left" />
        <div className="overflow-hidden">
          <h2 className="skills-title-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            About &
            <br />
            <span className="text-muted-foreground">Expertise</span>
          </h2>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 sm:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item group cursor-default">
              <div className="relative">
                <span className="stat-value block text-5xl sm:text-6xl md:text-7xl font-bold group-hover:text-muted-foreground transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="stat-label block text-sm text-muted-foreground tracking-wider uppercase mt-2">
                  {stat.label}
                </span>
                <div className="absolute -bottom-2 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative py-8 mb-24 border-y border-foreground/10 overflow-hidden">
        <div className="space-y-4">
          {/* Marquee Row 1 - Left to Right */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="skills-marquee-1 flex">
              {[...skills, ...skills].map((skill, index) => (
                <span
                  key={index}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mx-6 text-foreground/5 hover:text-foreground/20 transition-colors duration-300 cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Marquee Row 2 - Right to Left */}
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="skills-marquee-2 flex -translate-x-1/2">
              {[...skills, ...skills].reverse().map((skill, index) => (
                <span
                  key={index}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mx-6 text-foreground/5 hover:text-foreground/20 transition-colors duration-300 cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - About & Skills */}
          <div className="space-y-16">
            {/* About Section */}
            <div className="about-section">
              <h3 className="text-sm tracking-wider text-muted-foreground uppercase mb-6">
                About Me
              </h3>
              <p className="about-text text-xl sm:text-2xl leading-relaxed text-muted-foreground">
                I&apos;m a passionate software engineer who transforms complex
                problems into elegant solutions. With expertise spanning backend
                systems, AI/ML, and full-stack development, I create
                applications that make a difference.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-sm tracking-wider text-muted-foreground uppercase mb-6">
                Tech Stack
              </h3>
              <div className="skills-grid flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-tag px-4 py-2 border border-foreground/20 text-sm cursor-default hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="experience-section">
            <h3 className="experience-title text-sm tracking-wider text-muted-foreground uppercase mb-8">
              Experience
            </h3>

            <div className="experience-list relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-foreground/10">
                <div className="timeline-line absolute inset-0 bg-foreground" />
              </div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item relative group">
                    {/* Timeline Dot */}
                    <div className="timeline-dot absolute -left-8 top-1 w-[7px] h-[7px] -translate-x-[3px]">
                      <div className="w-full h-full border border-foreground bg-background group-hover:bg-foreground transition-colors duration-300" />
                    </div>

                    <div className="experience-content space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-xl sm:text-2xl font-semibold group-hover:text-muted-foreground transition-colors duration-300">
                          {exp.role}
                        </h4>
                        <span className="text-sm text-muted-foreground font-mono">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm uppercase tracking-wider">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-foreground/10">
              <a
                href="https://linkedin.com/in/faraz-ahmed-abir-57167a1ab"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm tracking-wider hover:text-muted-foreground transition-colors"
              >
                <span className="link-underline">VIEW FULL EXPERIENCE</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
