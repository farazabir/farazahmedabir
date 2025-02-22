"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MouseFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!followerRef.current) return;

    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(followerRef.current, "x", {
      duration: 0.3,
      ease: "power3",
    });
    const yTo = gsap.quickTo(followerRef.current, "y", {
      duration: 0.3,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div
      ref={followerRef}
      className="fixed pointer-events-none w-20 h-20 bg-secondary dark:bg-primary rounded-full scale-120
      mix-blend-difference z-[9999]"
    ></div>
  );
};

export default MouseFollower;
