"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink, Github, Smartphone, Globe, Play, Star } from "lucide-react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  image: string;
  description: string;
  techused: string;
  link: string;
  category?: string;
  featured?: boolean;
}

const FIVERR_PORTFOLIO_LINK =
  "https://www.fiverr.com/users/farazabir/portfolio/Njk3NTAyNzM5ODM5MTYwMDAxNTRkMzQ0";

const projects: Project[] = [
  {
    title: "OpenFlix",
    image: "https://raw.githubusercontent.com/farazabir/openfilx/main/s4.jpg",
    description:
      "Free Android movie & TV streaming app with fast search and reliable networking. Built to demonstrate efficient web aggregation with a clean in-app viewing experience.",
    techused: "Kotlin, Jetpack Compose, OkHttp, Web Scraping, Android",
    link: "https://github.com/farazabir/openfilx",
    category: "Android",
    featured: true,
  },
  {
    title: "AgriBuddy",
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/26fa3be0d479edffed32bca818e0c0a2-1769275872426/agribuddy%20(1024%20x%20768%20px).png",
    description:
      "AI-powered farm assistant with pest/disease detection, yield prediction, fertilizer recommendations, weather alerts, and market insights—optimized for low-bandwidth use.",
    techused:
      "Flutter, Django, DRF, PostgreSQL, TensorFlow, PyTorch, AWS S3, AWS Lambda",
    link: FIVERR_PORTFOLIO_LINK,
    category: "AI + Mobile",
  },
  {
    title: "Calmo",
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/be3a035d786eada94d6422e2acf1ac95-1769316129897/_CalmoPlaystore(1024%20x%20500%20px)%20(1024%20x%20768%20px).png",
    description:
      "Minimal Android launcher designed to reduce screen time and visual noise with a dark-first, battery-efficient UI.",
    techused: "Kotlin, Jetpack Compose, Clean Architecture",
    link: FIVERR_PORTFOLIO_LINK,
    category: "Android",
  },
  {
    title: "FaceGrid",
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/42ee3e7d969af1ca8420d169aca12631-1769317879698/_facegrid(1024%20x%20500%20px)%20(1024%20x%20768%20px)%20(1024%20x%20768%20px).png",
    description:
      "AI skincare platform for analysis, tracking, and personalized routines with privacy-first design and AR-ready foundations.",
    techused: "Flutter, Python, Computer Vision, CNNs, ARCore/ARKit",
    link: FIVERR_PORTFOLIO_LINK,
    category: "AI + AR",
  },
  {
    title: "MindLens",
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/818a0e911f43c1c6fc35bd558f425efd-1769318624534/_facegrid(1024%20x%20500%20px)%20(1024%20x%20768%20px)%20(1024%20x%20768%20px)%20(1).png",
    description:
      "AI mental health companion for mood/stress analysis (face/voice/text) with personalized interventions and wearable integration.",
    techused: "Flutter, Python, Spring Boot, Wearables, ML",
    link: FIVERR_PORTFOLIO_LINK,
    category: "HealthTech AI",
  },
  {
    title: "Drag Me: Fans & Artists",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/99/18/e6/9918e603-bfce-a14f-31ad-b71d35a9ab8e/6949ee78-9f4a-4fba-b0ff-435f53b07d4e_13-1a.png/1024x0w.webp",
    description:
      "Mobile app for fans and performers with event discovery, ticketing, profiles, and monetization.",
    techused: "React Native, Node.js, TypeScript, MySQL, Docker, AWS, Stripe",
    link: "https://apps.apple.com/ca/app/drag-me-fans-artists/id6474882580",
    category: "Mobile",
  },
  {
    title: "Quiz Nest",
    image: "",
    description:
      "AI-powered exam prep platform with interactive quizzes, analytics, and AI explanations.",
    techused: "Next.js, Django, Docker, PostgreSQL",
    link: "https://quiznest.farazinc.org/",
    category: "Web",
  },
  {
    title: "Linguavid",
    image: "https://i.ytimg.com/vi/66o2D33CiM4/maxresdefault.jpg",
    description:
      "AI video translation while preserving original voice, built for dubbing and online content localization.",
    techused: "Next.js, Django, RabbitMQ, FFmpeg, Whisper",
    link: "https://www.youtube.com/watch?v=66o2D33CiM4",
    category: "AI",
  },
  {
    title: "Rokomari Recommendation",
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/476025775_1577364539568850_2142871662425850843_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF04vcN3iRasSvSc6inIITZszwVrcib5YizPBWtyJvliATARq59qUYQAM5j3V7azn4JlS7BCYjTjCkfIqFXWkxI&_nc_ohc=wtRFAIeGNVYQ7kNvwEgj2AF&_nc_oc=AdndWO2c90IvoK7dbG-9V4Q0dFpBHPJsz0uNZtvnOrrPi8Ob5ZejVqKh83IHv22CJSc&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=FYl2VXFegNdIP59GfLAhfA&oh=00_AfXnV9b6QCLO8404YnHXUjlWNERK8Ja1MRjZvsYkuzY0iA&oe=68A71898",
    description:
      "ML-based book recommendation using TF‑IDF + cosine similarity with a Chrome extension.",
    techused: "FastAPI, SQLite, Docker, Python, TF‑IDF",
    link: "https://github.com/farazabir/rokomari_recommendation",
    category: "ML",
  },
  {
    title: "TVC Visualizer",
    image:
      "https://raw.githubusercontent.com/farazabir/tvc_visualizer/main/gif/tvc.gif",
    description:
      "Real-time 3D TVC visualization connected to a flight computer for live telemetry.",
    techused: "Java, OpenGL (JOGL), ESP32",
    link: "https://github.com/farazabir/tvc_visualizer",
    category: "Visualization",
  },
  {
    title: "Sentiment Analysis FB",
    image:
      "https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/481020259_1592934738011830_1739279543564011671_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGsOswgXGsb9TwiFUwZpeVUF2EBHycJLHwXYQEfJwksfG1nDCKFIewKip2224Y2ewCPmX5Xy00Sqt3dUaLSi3IF&_nc_ohc=3rHz4sr8pDEQ7kNvwExweq1&_nc_oc=AdnICAqXX2GmW7_UJhrgrlf3n0NI_XpO1hhg4fxxuO9NvK45B52XQ2EBVhvDsj_e460&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=Cc1Wsd5TIcxcP5EaHJCSww&oh=00_AfWf52pqEvh4JyQGiJ8v6j53U6k4UIIuUaAaBmgfaGXmuw&oe=68A71173",
    description:
      "NLP pipeline to analyze Facebook posts (Bangla→English) using transformer models, with visualizations like trends and word clouds.",
    techused: "Python, NLP, Hugging Face, Pandas, Matplotlib",
    link: "https://github.com/farazabir/tvc_visualizer",
    category: "Data Science",
  },
];

function getLinkIcon(link: string) {
  if (link.includes("github.com")) return <Github className="h-4 w-4" />;
  if (link.includes("youtube.com")) return <Play className="h-4 w-4" />;
  if (link.includes("apps.apple.com")) return <Smartphone className="h-4 w-4" />;
  return <Globe className="h-4 w-4" />;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
      aria-label={`Open ${project.title}`}
    >
      <Card className="project-card card-premium hover-lift h-full overflow-hidden rounded-2xl">
        <div className="relative h-44 sm:h-48 lg:h-52 w-full bg-muted overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 280px"
              data-project-media
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-muted-foreground">
              <div className="flex items-center gap-2 text-sm">
                {getLinkIcon(project.link)}
                <span>No preview</span>
              </div>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/95 to-transparent" />

          <div className="absolute top-3 left-3 flex items-center gap-2">
            {project.category && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 text-white px-2.5 py-1 text-[11px] backdrop-blur-sm">
                {getLinkIcon(project.link)}
                {project.category}
              </span>
            )}
          </div>

          {project.featured && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[11px] font-semibold">
                <Star className="h-3 w-3" /> Featured
              </span>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base sm:text-lg font-semibold leading-snug text-foreground">
              {project.title}
            </h3>
            <ExternalLink className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
          </div>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techused
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean)
              .slice(0, 4)
              .map((tech) => (
                <span
                  key={tech}
                  className="tech-badge inline-flex items-center rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-foreground/80"
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </Card>
    </a>
  );
}

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".project-item", { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      const ctx = gsap.context(() => {
        // Header reveal
        gsap.from(".projects-rule", {
          scaleX: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 80%",
          },
        });

        gsap.from(".projects-header [data-animate='header']", {
          y: 16,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 80%",
          },
        });

        // Card reveal (performant batch)
        ScrollTrigger.batch(".project-item", {
          start: "top 86%",
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { y: 18, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.65,
                ease: "power3.out",
                stagger: 0.08,
                overwrite: true,
              }
            ),
          onEnterBack: (batch) =>
            gsap.fromTo(
              batch,
              { y: -12, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.55,
                ease: "power3.out",
                stagger: 0.06,
                overwrite: true,
              }
            ),
        });

        // Subtle image parallax inside each card
        gsap.utils.toArray<HTMLElement>(".project-item").forEach((item) => {
          const media = item.querySelector<HTMLElement>("[data-project-media]");
          if (!media) return;

          gsap.fromTo(
            media,
            { y: 8 },
            {
              y: -8,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section ref={sectionRef} className="projects-section relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] grid-pattern"
        aria-hidden="true"
      />

      <div className="projects-header text-center mb-10 sm:mb-14">
        <div className="mx-auto mb-5 h-px w-12 bg-foreground/50 origin-left projects-rule" aria-hidden="true" />
        <span data-animate="header" className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-foreground/5 text-foreground rounded-full border border-border">
          Portfolio
        </span>
        <h2 data-animate="header" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Projects
        </h2>
        <p data-animate="header" className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          A clean, scannable selection of work—each project links out to the live app,
          demo, or repository.
        </p>
      </div>

      <div className="projects-grid grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* reveal baseline for GSAP */}
        {projects.map((p) => (
          <div key={p.title} className="project-item opacity-0">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/farazabir"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors hover-lift"
        >
          <Github className="h-5 w-5" />
          View All on GitHub
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};
