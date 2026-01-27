"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#projects" },
    { name: "About", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Github", url: "https://github.com/farazabir", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/faraz-ahmed-abir-57167a1ab", icon: Linkedin },
    { name: "Email", url: "mailto:farazabir50@gmail.com", icon: Mail },
  ];

  useGSAP(
    () => {
      if (!mounted || prefersReducedMotion) return;

      // Footer reveal animation
      gsap.from(".footer-content", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Stagger links
      gsap.from(".footer-link", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 15,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
      });

      // Social icons animation
      gsap.from(".social-icon", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "back.out(2)",
        delay: 0.3,
      });
    },
    { scope: footerRef, dependencies: [mounted, prefersReducedMotion] }
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = mounted ? new Date().getFullYear() : 2024;

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-border bg-background"
    >
      {/* Main Footer Content */}
      <div className="footer-content px-6 sm:px-12 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - CTA */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Have a project in mind?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s work together
            </h2>
            <a
              href="mailto:farazabir50@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm tracking-wider"
            >
              GET IN TOUCH
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-12" />

          {/* Middle Section - Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-2">
              <span className="text-2xl font-bold tracking-tight">FARAZ©</span>
              <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
                Software Engineer crafting digital experiences with code and creativity.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3 mt-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                    className="social-icon w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
                    aria-label={link.name}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Links
              </h4>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="footer-link text-sm hover:text-muted-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Status */}
            <div>
              <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Status
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm">Available</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Mymensingh, BD
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-6" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © {currentYear} Faraz Ahmed Abir. All rights reserved.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3 w-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
