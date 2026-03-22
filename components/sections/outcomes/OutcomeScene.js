"use client";

import { useRef, useCallback } from "react";
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

  const handleClick = useCallback((e) => {
    if (process.env.NODE_ENV !== "development") return;

    const rect = contentRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pctX = ((x / rect.width) * 100).toFixed(1);
    const pctY = ((y / rect.height) * 100).toFixed(1);

    // Find the closest data-attributed element under the click
    const target = e.target.closest("[data-block], [data-panel], [data-adhoc], [data-iac], [data-prod], [data-text], [data-text-index], [data-label], [data-layer]");

    console.log(
      `[OutcomeScene:${id}] click`,
      `\n  pixel: (${Math.round(x)}, ${Math.round(y)})`,
      `\n  percent: (${pctX}%, ${pctY}%)`,
      `\n  viewport: ${Math.round(rect.width)}x${Math.round(rect.height)}`,
      target ? `\n  element: ${target.tagName} ${[...target.attributes].filter(a => a.name.startsWith("data-")).map(a => `${a.name}="${a.value}"`).join(" ")}` : "\n  element: (none)"
    );
  }, [id]);

  return (
    <div ref={wrapperRef} id={id} className="relative" style={{ height: "200vh" }}>
      <div
        ref={contentRef}
        className="w-full h-screen overflow-hidden"
        onClick={handleClick}
      >
        {children}
      </div>
    </div>
  );
}
