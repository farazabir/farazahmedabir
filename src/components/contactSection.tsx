"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  useGSAP(() => {
    gsap.from(".contact-content", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top center",
      },
      opacity: 0,
      y: 30,
      duration: 1,
    });
  });

  return (
    <section className="contact-section container mx-auto py-20 px-4 text-center">
      <div className="contact-content">
        <h2 className="mb-8 text-4xl font-bold">Let&apos;s Connect</h2>
        <Button size="lg">Get in Touch</Button>
      </div>
    </section>
  );
};
