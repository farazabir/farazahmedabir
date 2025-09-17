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
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  image: string;
  description: string;
  techused: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Drag Me: Fans & Artists",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/99/18/e6/9918e603-bfce-a14f-31ad-b71d35a9ab8e/6949ee78-9f4a-4fba-b0ff-435f53b07d4e_13-1a.png/1024x0w.webp",
    description:
      "A mobile app built with React Native for drag fans and performers. Includes event discovery, ticketing, artist profiles, and monetization features. The backend was developed using Node.js, featuring a custom scraper, data collection system, and secure payment integration to power seamless event listings and transactions",
    techused:
      "React Native, Node.js, TypeScript, MySQL, Docker, AWS, Stripe,Django,Python",
    link: "https://apps.apple.com/ca/app/drag-me-fans-artists/id6474882580",
  },
  {
    title: "Quiz Nest",
    image: "",
    description:
      "A platform built for AI-powered admission and job exam preparation. Developed with a modern stack, it features interactive quizzes, analytical reports, and AI-generated explanations to guide learners.",
    techused: "Next js, Django, Docker, postgreSQL",
    link: "https://quiznest.farazinc.top/",
  },
  {
    title: "Linguavid",
    image: "https://i.ytimg.com/vi/66o2D33CiM4/maxresdefault.jpg",
    description:
      "An AI platform called Linguavid. It translates video while preserving original voices and is planned for movie ,film dubbing, online courses. It uses Python, Django, RabbitMQ, and Next.js. The platform can translate any video while maintaining the original voice.",
    techused: "Next js, Django, Docker, postgreSQL,rabbitMQ,ffmpeg,whisper",
    link: "https://www.youtube.com/watch?v=66o2D33CiM4",
  },
  {
    title: "Rokomari Book Recommendation System",
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/476025775_1577364539568850_2142871662425850843_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF04vcN3iRasSvSc6inIITZszwVrcib5YizPBWtyJvliATARq59qUYQAM5j3V7azn4JlS7BCYjTjCkfIqFXWkxI&_nc_ohc=wtRFAIeGNVYQ7kNvwEgj2AF&_nc_oc=AdndWO2c90IvoK7dbG-9V4Q0dFpBHPJsz0uNZtvnOrrPi8Ob5ZejVqKh83IHv22CJSc&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=FYl2VXFegNdIP59GfLAhfA&oh=00_AfXnV9b6QCLO8404YnHXUjlWNERK8Ja1MRjZvsYkuzY0iA&oe=68A71898",
    description:
      "Rokomari Recommendation System – A machine learning–based book recommendation platform that uses TF-IDF and cosine similarity to suggest similar titles. The system is powered by FastAPI with an SQLite backend and is fully containerized using Docker for easy deployment. It also comes with a Chrome extension that integrates directly with the service to deliver real-time personalized book recommendations.",
    techused: "FastAPI, SQLite, Docker, Python, TF-IDF, Cosine Similarity",
    link: "https://github.com/farazabir/rokomari_recommendation",
  },
  {
    title: "TVC Visualizer",
    image: "https://github.com/farazabir/tvc_visualizer/raw/main/gif/tvc.gif",
    description:
      "TVC Visualizer – A real-time 3D visualization tool for thrust vector control (TVC) systems in rockets. Built in Java using OpenGL (via JOGL), it connects to a flight computer over serial communication to display live telemetry—such as pitch, roll, servo positions, and stability metrics. Features include dynamic nozzle movement, animated exhaust effects, and interactive camera controls like rotate, zoom, and debug viewing",
    techused:
      "C++,java, OpenGL, JOGL, Serial Communication, 3D Visualization,esp32",
    link: "https://github.com/farazabir/tvc_visualizer",
  },
  {
    title: "Sentimentanalysis-fb (Group named Anti-Feminist Community)",
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/481020259_1592934738011830_1739279543564011671_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGsOswgXGsb9TwiFUwZpeVUF2EBHycJLHwXYQEfJwksfG1nDCKFIewKip2224Y2ewCPmX5Xy00Sqt3dUaLSi3IF&_nc_ohc=3rHz4sr8pDEQ7kNvwExweq1&_nc_oc=AdnICAqXX2GmW7_UJhrgrlf3n0NI_XpO1hhg4fxxuO9NvK45B52XQ2EBVhvDsj_e460&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=Cc1Wsd5TIcxcP5EaHJCSww&oh=00_AfWf52pqEvh4JyQGiJ8v6j53U6k4UIIuUaAaBmgfaGXmuw&oe=68A71173",
    description:
      "Facebook Sentiment Analysis – Built an NLP pipeline to analyze Facebook group posts by translating Bangla text to English and applying a Hugging Face transformer model. Includes visualizations like sentiment trends, word clouds, and engagement insights.",
    techused:
      "Python,Scikit-learn, Pandas, Matplotlib, Seaborn,Machine Learning, Natural Language Processing, Hugging Face",
    link: "https://github.com/farazabir/tvc_visualizer",
  },
];

export const ProjectsSection = () => {
  useGSAP(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill());

    gsap.set(".project-card", {
      transformPerspective: 1200,
      transformOrigin: "center center",
      rotationX: 0.1,
    });

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      const hoverTl = gsap.timeline({ paused: true });

      // Only apply 3D effects on larger screens
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        hoverTl.to(card, {
          scale: 1.03,
          rotationX: -2,
          rotationY: 2,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
          duration: 0.4,
          ease: "power2.out",
        });
      });

      mm.add("(max-width: 767px)", () => {
        hoverTl.to(card, {
          scale: 1.02,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      const enterHandler = () => hoverTl.play();
      const leaveHandler = () => hoverTl.reverse();

      card.addEventListener("mouseenter", enterHandler);
      card.addEventListener("mouseleave", leaveHandler);

      // Cleanup
      return () => {
        card.removeEventListener("mouseenter", enterHandler);
        card.removeEventListener("mouseleave", leaveHandler);
        mm.revert();
      };
    });

    // Parallax effect only on larger screens
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
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
    });

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

      // Different animations for mobile vs desktop
      mm.add("(min-width: 768px)", () => {
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

      mm.add("(max-width: 767px)", () => {
        tl.from(item, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    });

    return () => mm.revert();
  });

  // Function to handle card click
  const handleCardClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="projects-section container mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Timeline line - hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 z-0" />

      {/* Title */}
      <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white px-4">
        Featured <span className="text-primary">Projects</span>
      </h2>

      <div className="space-y-12 sm:space-y-16 lg:space-y-20">
        {projects.map((project, index) => (
          <div key={index} className="project-item relative">
            {/* Timeline Number - only visible on desktop */}
            <div className="timeline-number hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 h-8 w-8 lg:h-10 lg:w-10 items-center justify-center bg-background rounded-full border-2 border-primary/50 shadow-sm">
              <span className="text-sm lg:text-lg font-medium text-primary/80">
                {index + 1}
              </span>
            </div>

            {/* Mobile Layout - Stacked */}
            <div className="md:hidden space-y-4">
              {/* Image Card */}
              {project.image && (
                <Card
                  className="project-card project-image-card w-full h-48 sm:h-64 overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => handleCardClick(project.link)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay with link icon */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {/* Text Card */}
              <Card
                className="project-card project-text-card w-full shadow-lg p-4 sm:p-6 cursor-pointer group"
                onClick={() => handleCardClick(project.link)}
              >
                <CardHeader className="p-0 pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent flex-1">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techused.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Desktop/Tablet Layout - Side by Side */}
            <div className="hidden md:grid md:grid-cols-2 items-center gap-6 lg:gap-8">
              {/* Image Card */}
              <Card
                className={`project-card project-image-card w-full h-80 lg:h-[450px] overflow-hidden shadow-2xl transition-transform duration-300 cursor-pointer group ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
                onClick={() => handleCardClick(project.link)}
              >
                <div className="relative w-full h-full">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <ExternalLink className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                        <p className="text-primary/60 text-lg font-medium">
                          View Project
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Overlay with link icon */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Text Card */}
              <Card
                className={`project-card project-text-card w-full h-80 lg:h-[450px] shadow-2xl p-4 lg:p-6 flex flex-col justify-center cursor-pointer group ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
                onClick={() => handleCardClick(project.link)}
              >
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent flex items-start gap-2">
                    <span className="flex-1">{project.title}</span>
                    <ExternalLink className="w-5 lg:w-6 h-5 lg:h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col">
                  <CardDescription className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                    {project.description}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techused.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 lg:px-3 py-1 text-xs lg:text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 hover:scale-105 transition-transform"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <button className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
