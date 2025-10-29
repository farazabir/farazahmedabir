"use client";

import { JSX, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Code2,
  Cloud,
  Database,
  GitFork,
  Terminal,
  Network,
  Package,
  Server,
  Smartphone,
  Rocket,
  Calendar,
  Video,
  Flame,
  FileImage,
  Sparkles,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillIcons: { [key: string]: JSX.Element } = {
  Java: <Code2 className="w-4 h-4" />,
  "Spring Boot": <Server className="w-4 h-4" />,
  "Node js": <Network className="w-4 h-4" />,
  Javascript: <Code2 className="w-4 h-4" />,
  Python: <Terminal className="w-4 h-4" />,
  Django: <Rocket className="w-4 h-4" />,
  Jira: <Rocket className="w-4 h-4" />,
  "Image processing": <FileImage className="w-4 h-4" />,
  Git: <GitFork className="w-4 h-4" />,
  Docker: <Package className="w-4 h-4" />,
  Mysql: <Database className="w-4 h-4" />,
  Postgresql: <Database className="w-4 h-4" />,
  Mongodb: <Database className="w-4 h-4" />,
  Aws: <Cloud className="w-4 h-4" />,
  React: <Smartphone className="w-4 h-4" />,
  Flutter: <Smartphone className="w-4 h-4" />,
  "Next.js": <Network className="w-4 h-4" />,
  "React Native": <Smartphone className="w-4 h-4" />,
  "Google Calendar": <Calendar className="w-4 h-4" />,
  "Google Meet": <Video className="w-4 h-4" />,
  Pytorch: <Flame className="w-4 h-4" />,
};

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".skills-title", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.4)",
      }).from(
        ".skills-subtitle",
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      gsap.utils.toArray<HTMLElement>(".skill-item").forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          rotationX: -15,
          scale: 0.8,
          duration: 0.6,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: (index % 7) * 0.05,
        });

        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            scale: 1.1,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
        });
      });

      const timelineItems = gsap.utils.toArray<HTMLElement>(".experience-item");

      timelineItems.forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(item, {
          opacity: 0,
          x: -80,
          duration: 0.8,
          ease: "power3.out",
        })
          .from(
            item.querySelector(".timeline-dot"),
            {
              scale: 0,
              duration: 0.4,
              ease: "back.out(2)",
            },
            "-=0.4"
          )
          .from(
            item.querySelectorAll(".tech-badge"),
            {
              opacity: 0,
              scale: 0.5,
              stagger: 0.05,
              duration: 0.3,
              ease: "back.out(1.5)",
            },
            "-=0.2"
          );
      });

      gsap.to(".timeline-line", {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".experience-container",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  const experiences = [
    {
      work: "Software Engineer",
      des: "Full Stack Developer focusing on end-to-end application development with modern technologies",
      duration: "2023 - Present",
      tech: [
        "Django",
        "React Native",
        "AWS",
        "Docker",
        "Node js",
        "Spring Boot",
      ],
    },
    {
      work: "Mobile App Development",
      des: "Created cross-platform mobile applications with seamless user experiences",
      duration: "2022 - 2023",
      tech: ["Flutter", "React Native", "Dart", "TypeScript", "Tailwind"],
    },
    {
      work: "Full Stack Web Development",
      des: "Mastered modern web technologies and full-stack development practices",
      duration: "2021 - 2022",
      tech: ["HTML", "JavaScript", "Node.js", "SQL", "MongoDB"],
    },
    {
      work: "Unity Game Development",
      des: "Built interactive games and simulations using Unity engine",
      duration: "2020 - 2021",
      tech: ["C#", "Unity"],
    },
    {
      work: "First Line of Code",
      des: "Started the coding journey with C programming fundamentals",
      duration: "2020",
      tech: ["C"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="skills-section container mx-auto py-20 px-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="skills-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Experience
            </span>
          </h2>
          <p className="skills-subtitle text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous learning and building impactful solutions
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Tech Stack</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Java",
                "Spring Boot",
                "Node js",
                "Javascript",
                "Python",
                "Django",
                "Git",
                "Docker",
                "Mysql",
                "Postgresql",
                "Mongodb",
                "Pytorch",
                "Image processing",
                "Aws",
                "React",
                "Flutter",
                "Next.js",
                "React Native",
                "Jira",
                "Google Calendar",
                "Google Meet",
              ].map((skill) => (
                <Button
                  variant="outline"
                  key={skill}
                  className="skill-item flex items-center gap-2 px-4 py-2 rounded-full border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm bg-background/50 group"
                >
                  <span className="group-hover:rotate-12 transition-transform duration-300">
                    {skillIcons[skill] || <Code2 className="w-4 h-4" />}
                  </span>
                  <span className="font-medium">{skill}</span>
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="skill-item p-6 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">
                  Years Coding
                </div>
              </div>
              <div className="skill-item p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
            </div>
          </div>

          <div className="experience-container relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border overflow-hidden">
              <div className="timeline-line absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-purple-500 to-pink-500 origin-top scale-y-0" />
            </div>

            <div className="flex items-center gap-3 mb-8 ml-14">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Journey</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="experience-item relative pl-16 group"
                >
                  <div className="timeline-dot absolute left-4 top-2 z-10">
                    <div className="relative">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <div className="w-2 h-2 bg-background rounded-full" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg group-hover:translate-x-2">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                        {exp.work}
                      </h4>
                      <Zap className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-muted-foreground mb-2 text-sm sm:text-base">
                      {exp.des}
                    </p>
                    <p className="text-sm text-primary font-medium mb-3">
                      {exp.duration}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="tech-badge rounded-full bg-primary/10 px-3 py-1 text-xs sm:text-sm flex items-center gap-1 border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skillIcons[tech] || <Code2 className="w-3 h-3" />}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
