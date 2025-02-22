import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/farazabir",
      icon: <FaGithub className="h-6 w-6" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/faraz-ahmed-abir-57167a1ab",
      icon: <FaLinkedin className="h-6 w-6" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Email",
      url: "mailto:farazabir50@gmail.com",
      icon: <FaRegEnvelope className="h-6 w-6" />,
    },
  ];

  const socialLinksRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!socialLinksRef.current || !copyrightRef.current) return;

      gsap.from(socialLinksRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(copyrightRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="border-t bg-background/95 py-8 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4">
        <div
          ref={socialLinksRef}
          className="flex justify-center space-x-8 mb-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-muted-foreground hover:text-primary transition-colors motion-safe:transition-all motion-safe:hover:scale-110"
              target={link.target || "_self"}
              rel={link.rel || ""}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p
          ref={copyrightRef}
          className="text-center text-sm text-muted-foreground font-medium"
        >
          © {new Date().getFullYear()} Faraz Ahmed Abir
          <br />
        </p>
      </div>
    </footer>
  );
}
