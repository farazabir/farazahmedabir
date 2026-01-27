"use client";

import { useEffect, useRef } from "react";

const LiquidBlob = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    // Only run on client and desktop
    if (typeof window === "undefined") return;
    
    const isMobile = window.innerWidth < 768 || !window.matchMedia("(hover: hover)").matches;
    if (isMobile) {
      if (blobRef.current) blobRef.current.style.display = "none";
      return;
    }

    const blob = blobRef.current;
    if (!blob) return;

    // Initialize position
    pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animate = () => {
      // Smooth follow
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      
      pos.current.x += dx * 0.15;
      pos.current.y += dy * 0.15;

      // Calculate velocity for stretch
      const velocity = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const stretch = Math.min(velocity * 0.005, 0.3);

      // Apply transform
      blob.style.left = `${pos.current.x}px`;
      blob.style.top = `${pos.current.y}px`;
      blob.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scaleX(${1 + stretch}) scaleY(${1 - stretch * 0.5})`;

      animationRef.current = requestAnimationFrame(animate);
    };

    // Hover effects
    const handleEnter = () => {
      blob.style.width = "120px";
      blob.style.height = "120px";
    };

    const handleLeave = () => {
      blob.style.width = "60px";
      blob.style.height = "60px";
    };

    // Window leave/enter
    const handleWindowLeave = () => {
      blob.style.opacity = "0";
    };

    const handleWindowEnter = () => {
      blob.style.opacity = "1";
    };

    // Add listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleWindowLeave);
    document.addEventListener("mouseenter", handleWindowEnter);

    // Interactive elements
    const interactiveSelectors = "a, button, input, textarea, [role='button'], .project-card, .project-card-mobile, .skill-tag, .social-icon, .footer-link, .nav-item, .stat-item";
    
    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleWindowLeave);
      document.removeEventListener("mouseenter", handleWindowEnter);
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={blobRef}
        style={{
          position: "fixed",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "white",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
          willChange: "transform, left, top",
        }}
      />
      <style jsx global>{`
        @media (hover: hover) and (min-width: 768px) {
          *, *::before, *::after {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default LiquidBlob;
