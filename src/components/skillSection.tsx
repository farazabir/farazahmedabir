"use client";

import { useGSAP } from "@gsap/react";
import { JSX } from "react";
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
  "Google Calender": <Calendar className="w-4 h-4" />,
  "Google Meet": <Video className="w-4 h-4" />,
  Pytorch: <Flame className="w-4 h-4" />,
};

export const SkillsSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.from(".skill-item", {
      opacity: 0,
      y: 40,
      stagger: { amount: 0.8, from: "random" },
      ease: "power4.out",
    }).from(
      ".experience-item",
      {
        opacity: 0,
        x: -100,
        stagger: 0.9,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
          gsap.to(".timeline-connector", {
            scaleY: 1,
            duration: 1.5,
            ease: "power4.out",
          });
        },
      },
      "-=0.5"
    );
  });

  const experiences = [
    {
      work: "Sotware Engineer",
      des: "Currently working as a Full Stack Developer, focusing on end-to-end application development including both front-end and back-end technologies.",
      duration: "2023 - Present",
      tech: ["Django", "React Native", "AWS", "Docker", "Node js", "Spring"],
    },
    {
      work: "Mobile App Development",
      des: "Developed Various Mobile apps",
      duration: "2022 - 2023",
      tech: ["Flutter", "React Native", "Dart", "Ts", "Tailwind"],
    },
    {
      work: "Full Stack Web Development",
      des: "Started Learning Web Development",
      duration: "2021 - 2022",
      tech: ["HTML", "JS", "Node", "sql", "mongodb"],
    },
    {
      work: "Unity Game Development",
      des: "Developed games using Unity engine and C#",
      duration: "2020 - 2021",
      tech: ["C#", "Unity"],
    },
    {
      work: "First Line Of Code",
      des: "In 2020, I got my first laptop.",
      duration: "2020",
      tech: ["C"],
    },
  ];

  return (
    <section className="skills-section container mx-auto py-20 px-4 ">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold flex items-center justify-center gap-3">
          <Rocket className="w-8 h-8 text-primary" />
          Skills & Experience
          <Calendar className="w-8 h-8 text-primary" />
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-semibold flex items-center gap-2">
              <Terminal className="w-6 h-6 text-primary" />
              Familiar With
            </h3>
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
                  className="skill-item flex items-center gap-2"
                  key={skill}
                >
                  {skillIcons[skill] || <Code2 className="w-4 h-4" />}
                  {skill}
                </Button>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-px bg-border">
              <div className="timeline-connector absolute top-0 h-0 w-full origin-top scale-y-0 bg-primary transition-all" />
            </div>

            <h3 className="mb-8 text-2xl font-semibold ml-10 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Journey
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="experience-item relative pl-12 group"
                >
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>
                  <h4 className="text-lg font-medium flex items-center gap-2">
                    {exp.work}
                  </h4>
                  <p className="text-muted-foreground">{exp.des}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.duration}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-muted px-2 py-1 text-sm flex items-center gap-1"
                      >
                        {skillIcons[tech] || <Code2 className="w-3 h-3" />}
                        {tech}
                      </span>
                    ))}
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
