"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { Heart, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/farazabir",
      icon: <FaGithub className="h-6 w-6" />,
      color: "hover:text-purple-500",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/faraz-ahmed-abir-57167a1ab",
      icon: <FaLinkedin className="h-6 w-6" />,
      color: "hover:text-blue-500",
    },
    {
      name: "Email",
      url: "mailto:farazabir50@gmail.com",
      icon: <FaRegEnvelope className="h-6 w-6" />,
      color: "hover:text-pink-500",
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".footer-content", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".social-link",
          {
            opacity: 0,
            y: 20,
            scale: 0.8,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .from(
          ".footer-text",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Hover animations for social links
      document.querySelectorAll(".social-link").forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            y: -8,
            scale: 1.2,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Animate heart icon
      gsap.to(".heart-icon", {
        scale: 1.2,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: footerRef }
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 -z-10" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="footer-content space-y-8">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#home"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`social-link p-4 rounded-full bg-muted/50 backdrop-blur-sm border border-border ${link.color} transition-colors duration-300`}
                target={link.url.startsWith("http") ? "_blank" : "_self"}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Copyright */}
          <div className="footer-text text-center space-y-3">
            <p className="text-sm text-muted-foreground font-medium flex items-center justify-center gap-2">
              Made with{" "}
              <Heart className="heart-icon h-4 w-4 text-red-500 fill-red-500" />{" "}
              by
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent font-bold">
                Faraz Ahmed Abir
              </span>
            </p>
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
              aria-label="Scroll to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
