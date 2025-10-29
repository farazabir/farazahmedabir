"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".contact-title", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".contact-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".contact-card",
          {
            opacity: 0,
            y: 60,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.2)",
          },
          "-=0.3"
        )
        .from(
          ".form-field",
          {
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".contact-info-item",
          {
            opacity: 0,
            x: 30,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.8"
        );

      // Floating animation for cards
      gsap.to(".contact-card", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
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

  return (
    <section
      ref={sectionRef}
      className="contact-section relative py-20 sm:py-32 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 -z-10" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="contact-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="text-foreground">Amazing Together</span>
          </h2>
          <p className="contact-subtitle text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="contact-card p-6 sm:p-8 backdrop-blur-sm bg-background/50 border-2 shadow-xl">
            <div className="space-y-6">
              <div className="form-field">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-background/50 border-2 focus:border-primary transition-all"
                />
              </div>

              <div className="form-field">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-background/50 border-2 focus:border-primary transition-all"
                />
              </div>

              <div className="form-field">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 border-2 focus:border-primary transition-all resize-none"
                />
              </div>

              <Button
                onClick={handleSubmit}
                size="lg"
                className="w-full group relative overflow-hidden"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="contact-card p-6 backdrop-blur-sm bg-background/50 border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer group">
              <a
                href="mailto:farazabir50@gmail.com"
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Me</h3>
                  <p className="text-muted-foreground">farazabir50@gmail.com</p>
                </div>
              </a>
            </Card>

            <Card className="contact-card p-6 backdrop-blur-sm bg-background/50 border-2 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Mymensingh, Bangladesh
                  </p>
                </div>
              </div>
            </Card>

            <Card className="contact-card p-6 backdrop-blur-sm bg-background/50 border-2 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Availability</h3>
                  <p className="text-muted-foreground">
                    Open for opportunities
                  </p>
                </div>
              </div>
            </Card>

            <div className="contact-info-item pt-4">
              <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/farazabir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-muted hover:bg-primary transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="h-6 w-6 group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/faraz-ahmed-abir-57167a1ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-muted hover:bg-primary transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="h-6 w-6 group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>

            <div className="contact-info-item p-6 rounded-lg bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold">Fast Response Time</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
