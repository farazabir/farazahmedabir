"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  image: string;
  description: string;
  techused: string;
}

const projects: Project[] = [
  {
    title: "AI Movie Recommender",
    image:
      "https://github.com/farazabir/movie-recommender/assets/62275863/70b3416b-7c2a-4748-b0d4-9ecd06469c2a",
    description:
      "Personalized movie recommendation system using neural networks",
    techused: "PyTorch, Python, Docker, MySQL",
  },
  {
    title: "AI Movie Recommender",
    image:
      "https://github.com/farazabir/movie-recommender/assets/62275863/70b3416b-7c2a-4748-b0d4-9ecd06469c2a",
    description:
      "Personalized movie recommendation system using neural networks",
    techused: "PyTorch, Python, Docker, MySQL",
  },
  {
    title: "AI Movie Recommender",
    image:
      "https://github.com/farazabir/movie-recommender/assets/62275863/70b3416b-7c2a-4748-b0d4-9ecd06469c2a",
    description:
      "Personalized movie recommendation system using neural networks",
    techused: "PyTorch, Python, Docker, MySQL",
  },
  {
    title: "AI Movie Recommender",
    image:
      "https://github.com/farazabir/movie-recommender/assets/62275863/70b3416b-7c2a-4748-b0d4-9ecd06469c2a",
    description:
      "Personalized movie recommendation system using neural networks",
    techused: "PyTorch, Python, Docker, MySQL",
  },
  {
    title: "AI Movie Recommender",
    image:
      "https://github.com/farazabir/movie-recommender/assets/62275863/70b3416b-7c2a-4748-b0d4-9ecd06469c2a",
    description:
      "Personalized movie recommendation system using neural networks",
    techused: "PyTorch, Python, Docker, MySQL",
  },
  {
    title: "AI Movie Recommender",
    image:
      "https://github.com/farazabir/movie-recommender/assets/62275863/70b3416b-7c2a-4748-b0d4-9ecd06469c2a",
    description:
      "Personalized movie recommendation system using neural networks",
    techused: "PyTorch, Python, Docker, MySQL",
  },
  {
    title: "AI Movie Recommender",
    image:
      "https://github.com/farazabir/movie-recommender/assets/62275863/70b3416b-7c2a-4748-b0d4-9ecd06469c2a",
    description:
      "Personalized movie recommendation system using neural networks",
    techused: "PyTorch, Python, Docker, MySQL",
  },
];

export const ProjectsSection = () => {
  useGSAP(() => {
    // Cleanup previous instances
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Enhanced 3D setup with cleanup
    gsap.set(".project-card", {
      transformPerspective: 1200,
      transformOrigin: "center center",
      rotationX: 0.1,
    });

    // Hover effects with cleanup
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl.to(card, {
        scale: 1.03,
        rotationX: -2,
        rotationY: 2,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
        duration: 0.4,
        ease: "power2.out",
      });

      const enterHandler = () => hoverTl.play();
      const leaveHandler = () => hoverTl.reverse();

      card.addEventListener("mouseenter", enterHandler);
      card.addEventListener("mouseleave", leaveHandler);

      // Cleanup
      return () => {
        card.removeEventListener("mouseenter", enterHandler);
        card.removeEventListener("mouseleave", leaveHandler);
      };
    });

    // Optimized parallax effect
    gsap.utils.toArray<Element>(".project-image-card").forEach((card) => {
      gsap.to(card.querySelector("img"), {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });

    // Staggered entrance animation
    gsap.utils.toArray<Element>(".project-item").forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "top 40%",
          toggleActions: "play none none none",
          markers: false,
        },
      });

      tl.from(item, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "expo.out",
      })
        .from(
          item.querySelector(".project-image-card"),
          {
            rotationY: -25,
            scale: 0.95,
            duration: 1.4,
            ease: "expo.out",
          },
          0
        )
        .from(
          item.querySelector(".project-text-card"),
          {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: "power3.out",
          },
          0.2
        );
    });
  });
  return (
    <section className="projects-section container mx-auto py-16 px-4 relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 z-0" />

      <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
        Featured <span className="text-primary">Projects</span>
      </h2>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item relative grid md:grid-cols-2 items-center gap-6"
          >
            <Card
              className={`project-card project-image-card w-full h-[450px] overflow-hidden shadow-2xl transition-transform duration-300 ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Card>

            {/* Timeline Number */}
            <div className="timeline-number absolute left-1/2 -translate-x-1/2 z-10 h-10 w-10 flex items-center justify-center bg-background rounded-full border-2 border-primary/50 shadow-sm">
              <span className="text-lg font-medium text-primary/80">
                {index + 1}
              </span>
            </div>

            {/* Text Card - Swaps sides based on index */}
            <Card
              className={`project-card project-text-card w-full h-[450px] shadow-2xl p-6 flex flex-col justify-center ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                  {project.description}
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techused.split(",").map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 hover:scale-105 transition-transform"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
