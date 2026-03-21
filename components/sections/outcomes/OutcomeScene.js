"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function OutcomeScene({ children, id }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });
    });
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} id={id} className="relative" style={{ height: "200vh" }}>
      <div
        ref={contentRef}
        className="w-full h-screen flex items-center justify-center overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
}
