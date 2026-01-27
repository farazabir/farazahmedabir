"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Check } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion) return;
      // Main title animation with split text effect
      const titleChars = gsap.utils.toArray(".contact-char");
      gsap.from(titleChars, {
        scrollTrigger: {
          trigger: ".contact-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        yPercent: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out",
      });

      // Subtitle animation
      gsap.from(".contact-subtitle", {
        scrollTrigger: {
          trigger: ".contact-subtitle",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Form fields animation
      gsap.from(".form-field", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      // Contact info animation
      gsap.from(".contact-info-item", {
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        x: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      // Large email animation
      gsap.from(".contact-email-large", {
        scrollTrigger: {
          trigger: ".contact-email-large",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:farazabir50@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Split text helper
  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="contact-char inline-block overflow-hidden">
        <span className="inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="contact-section py-24 sm:py-32 px-6 sm:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <div className="overflow-hidden">
            <h2 className="contact-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              {splitText("Let's work")}
              <br />
              {splitText("together")}
            </h2>
          </div>
          <p className="contact-subtitle text-lg sm:text-xl text-muted-foreground mt-6 max-w-md">
            Have a project in mind? Let&apos;s create something extraordinary.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <div className="contact-form space-y-8">
            <div className="form-field space-y-2">
              <label className="text-sm text-muted-foreground uppercase tracking-wider">
                Name
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="form-field space-y-2">
              <label className="text-sm text-muted-foreground uppercase tracking-wider">
                Email
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-foreground transition-colors placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="form-field space-y-2">
              <label className="text-sm text-muted-foreground uppercase tracking-wider">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
                className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="form-field pt-4">
              <Button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="group w-full sm:w-auto px-12 py-6 bg-foreground text-background hover:bg-foreground/90 rounded-none text-sm tracking-wider transition-all"
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    SENT
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    SEND MESSAGE
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info space-y-12">
            <div className="contact-info-item">
              <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Email
              </h3>
              <a
                href="mailto:farazabir50@gmail.com"
                className="text-xl sm:text-2xl link-underline hover:text-muted-foreground transition-colors"
              >
                farazabir50@gmail.com
              </a>
            </div>

            <div className="contact-info-item">
              <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Location
              </h3>
              <p className="text-xl sm:text-2xl">
                Mymensingh, Bangladesh
              </p>
            </div>

            <div className="contact-info-item">
              <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Social
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/farazabir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl link-underline inline-block hover:text-muted-foreground transition-colors"
                >
                  Github
                </a>
                <a
                  href="https://linkedin.com/in/faraz-ahmed-abir-57167a1ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl link-underline inline-block hover:text-muted-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="contact-info-item pt-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-foreground animate-pulse" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Available for freelance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Large Email Display */}
        <div className="contact-email-large mt-24 sm:mt-32 overflow-hidden">
          <a
            href="mailto:farazabir50@gmail.com"
            className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground/10 hover:text-foreground/30 transition-colors duration-500 truncate"
          >
            farazabir50@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
