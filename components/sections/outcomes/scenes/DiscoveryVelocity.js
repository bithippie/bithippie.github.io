"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const dataSources = [
  { label: "ELN", color: "#6B8E7B" },
  { label: "LIMS", color: "#8B6914" },
  { label: "In Vitro Assays", color: "#7B5EA7" },
  { label: "Sequencers", color: "#2C5F7C" },
  { label: "Compound Registry", color: "#9B4D4D" },
];

const insights = [
  { label: "Cross-Functional Analysis", color: "#4A7C59" },
  { label: "Predictive Correlations", color: "#6B5B8D" },
  { label: "Faster Decisions", color: "#2C7C6F" },
];

export default function DiscoveryVelocity() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current.closest("[id='discovery-velocity']"),
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Phase 1 (0-0.35): Data sources fly in from scattered positions to converge
      tl.fromTo(
        ".data-source",
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.15, stagger: 0.02, ease: "power2.out" },
        0
      );

      tl.to(
        ".data-source",
        { x: 0, y: 0, duration: 0.2, ease: "power2.in", stagger: 0.02 },
        0.15
      );

      // Phase 2 (0.35-0.55): Sources shrink into warehouse, warehouse pulses
      tl.to(
        ".data-source",
        { opacity: 0, scale: 0.2, duration: 0.15, stagger: 0.01, ease: "power3.in" },
        0.35
      );

      tl.fromTo(
        ".warehouse",
        { scale: 1, boxShadow: "0 0 0px rgba(74,124,89,0)" },
        { scale: 1.08, boxShadow: "0 0 40px rgba(74,124,89,0.4)", duration: 0.1, ease: "power2.out" },
        0.4
      );

      tl.to(
        ".warehouse",
        { scale: 1, boxShadow: "0 0 0px rgba(74,124,89,0)", duration: 0.1, ease: "power2.in" },
        0.5
      );

      // Phase 3 (0.55-0.75): Glass pane slides up over warehouse
      tl.fromTo(
        ".glass-pane",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
        0.55
      );

      // Phase 4 (0.7-1.0): Insights emerge from warehouse outward
      tl.fromTo(
        ".insight",
        { opacity: 0, scale: 0.5, y: 0 },
        { opacity: 1, scale: 1, y: 0, duration: 0.15, stagger: 0.03, ease: "power2.out" },
        0.7
      );

      tl.fromTo(
        ".insight",
        { x: 0 },
        {
          x: (i) => (i - 1) * 180,
          duration: 0.15,
          stagger: 0.02,
          ease: "power2.out",
        },
        0.75
      );

      timelineRef.current = tl;
    });
  }, { scope: containerRef });

  // Scattered starting positions for data sources (relative to center)
  const startPositions = [
    { x: -320, y: -180 },
    { x: 280, y: -160 },
    { x: -260, y: 140 },
    { x: 300, y: 120 },
    { x: -80, y: -220 },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Data source blocks — scattered, will converge */}
      {dataSources.map((source, i) => (
        <div
          key={source.label}
          className="data-source absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-lg px-5 py-3 text-white font-semibold text-sm shadow-lg whitespace-nowrap"
          style={{
            backgroundColor: source.color,
            transform: `translate(calc(-50% + ${startPositions[i].x}px), calc(-50% + ${startPositions[i].y}px))`,
            zIndex: 10,
          }}
        >
          {source.label}
        </div>
      ))}

      {/* Central warehouse */}
      <div
        className="warehouse absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-2xl border-2 border-dashed border-gray-400"
        style={{
          width: 180,
          height: 180,
          backgroundColor: "#f5f0eb",
          zIndex: 5,
        }}
      >
        <div className="text-center">
          <div className="text-2xl mb-1">
            <svg width="36" height="36" viewBox="0 0 36 36" className="mx-auto" fill="none">
              <rect x="4" y="14" width="28" height="18" rx="2" stroke="#4A7C59" strokeWidth="2" fill="#e8e0d5" />
              <path d="M4 14L18 6L32 14" stroke="#4A7C59" strokeWidth="2" fill="none" />
              <rect x="12" y="20" width="12" height="6" rx="1" stroke="#4A7C59" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-600">Data Warehouse</span>
        </div>
      </div>

      {/* Glass pane overlay */}
      <div
        className="glass-pane absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-0"
        style={{
          width: 200,
          height: 200,
          background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.4)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          zIndex: 15,
        }}
      />

      {/* Insight blocks — emerge from warehouse */}
      {insights.map((insight) => (
        <div
          key={insight.label}
          className="insight absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-lg px-5 py-3 text-white font-semibold text-sm shadow-lg whitespace-nowrap opacity-0"
          style={{
            backgroundColor: insight.color,
            top: "calc(50% + 140px)",
            zIndex: 20,
          }}
        >
          {insight.label}
        </div>
      ))}
    </div>
  );
}
