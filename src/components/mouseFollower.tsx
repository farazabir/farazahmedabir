"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MouseFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useGSAP(() => {
    if (!followerRef.current || !cursorRef.current) return;

    gsap.set([followerRef.current, cursorRef.current], {
      xPercent: -50,
      yPercent: -50,
    });

    const followerX = gsap.quickTo(followerRef.current, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const followerY = gsap.quickTo(followerRef.current, "y", {
      duration: 0.6,
      ease: "power3",
    });

    const cursorX = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.1,
      ease: "power3",
    });
    const cursorY = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.1,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      followerX(e.clientX);
      followerY(e.clientY);
      cursorX(e.clientX);
      cursorY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .project-card, .skill-item, .contact-card'
    );

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);

      // Check for custom cursor text
      const text = target.getAttribute("data-cursor-text");
      if (text) {
        setCursorText(text);
      }

      gsap.to(followerRef.current, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(cursorRef.current, {
        scale: 0,
        duration: 0.2,
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText("");

      gsap.to(followerRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.2,
      });
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  });

  return (
    <>
      {/* Main follower circle */}
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: "40px",
          height: "40px",
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-white dark:bg-white border-2 border-white" />
          {cursorText && (
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-black whitespace-nowrap">
              {cursorText}
            </span>
          )}
        </div>
      </div>

      {/* Small cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: "8px",
          height: "8px",
        }}
      >
        <div className="w-full h-full rounded-full bg-primary" />
      </div>

      <style jsx>{`
        :global(body) {
          cursor: none !important;
        }
        :global(a, button, [role="button"], input, textarea) {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default MouseFollower;
