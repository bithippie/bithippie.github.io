"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/*
 * Scene 3: "Workflows Defined by Science, Not Software"
 * Layout: side-by-side on desktop (animation left, text right)
 *
 * Layers:
 *   Background (z-0): platform window, panels, price tag, custom panels, result
 *   Foreground (z-10): heading + body text
 *
 * Timeline (scroll 0% → 100%):
 *   Text:    heading at 0%, body paragraphs at configured visibleAt values
 *   Phase 1: (0.00–0.25) Bloated platform — mock SaaS window with 16 panels
 *            in a 4x4 grid. Price counter ticks from $4,200 to $86,000/mo.
 *            Irrelevant panels pulse amber.
 *   Phase 2: (0.28–0.55) Shed the bloat — irrelevant panels tumble away one
 *            by one with rotation. Price tag and platform border dissolve.
 *   Phase 3: (0.55–0.80) Custom rebuild — 3 relevant panels grow and reposition.
 *            2 new custom panels (Pipeline Monitor, Team Notebook) materialize.
 *   Phase 4: (0.84–1.00) Result: "Your tools. Your science. Your code."
 */

// 4x4 grid of panels — 13 irrelevant bloat, 3 relevant to the scientist
const panels = [
  { label: "Workflow Engine", type: "irrelevant", row: 0, col: 0 },
  { label: "Experiment Log", type: "relevant", row: 0, col: 1 },
  { label: "Regulatory Module", type: "irrelevant", row: 0, col: 2 },
  { label: "Vendor Integrations", type: "irrelevant", row: 0, col: 3 },
  { label: "Pipeline Orchestrator", type: "irrelevant", row: 1, col: 0 },
  { label: "Sample Tracking", type: "irrelevant", row: 1, col: 1 },
  { label: "Audit Trail Engine", type: "irrelevant", row: 1, col: 2 },
  { label: "Screening Results", type: "relevant", row: 1, col: 3 },
  { label: "Error: Opaque Failure", type: "irrelevant", row: 2, col: 0 },
  { label: "Report Generator", type: "irrelevant", row: 2, col: 1 },
  { label: "Compound Search", type: "relevant", row: 2, col: 2 },
  { label: "User Provisioning", type: "irrelevant", row: 2, col: 3 },
  { label: "License Manager", type: "irrelevant", row: 3, col: 0 },
  { label: "Onboarding Wizard", type: "irrelevant", row: 3, col: 1 },
  { label: "Black Box Logs", type: "irrelevant", row: 3, col: 2 },
  { label: "Analytics Add-on ($)", type: "irrelevant", row: 3, col: 3 },
];

// Custom panels that replace the bloat in Phase 3
const customPanels = [
  { label: "Pipeline Monitor", color: "#4A7C59" },
  { label: "Team Notebook", color: "#2C7C6F" },
];

// Grid layout constants
const COLS = 4;
const PANEL_W = 110;
const PANEL_H = 60;
const GAP = 8;
const GRID_W = COLS * PANEL_W + (COLS - 1) * GAP;
const GRID_H = 4 * PANEL_H + 3 * GAP;
const PLAT_PAD = 16;
const PLAT_W = GRID_W + PLAT_PAD * 2;
const PLAT_H = GRID_H + PLAT_PAD * 2 + 28; // 28px for title bar

// Colors
const IRRELEVANT_BG = "#e8e0d5";
const IRRELEVANT_BORDER = "#c4a96a";
const RELEVANT_BG = "#dce8df";
const RELEVANT_BORDER = "#4A7C59";

// Price counter range
const PRICE_START = 4200;
const PRICE_END = 86000;

function panelX(col) {
  return PLAT_PAD + col * (PANEL_W + GAP);
}
function panelY(row) {
  return PLAT_PAD + 28 + row * (PANEL_H + GAP);
}

export default function WorkflowsByScience({ heading, body = [] }) {
  const containerRef = useRef(null);
  const priceRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const triggerEl = containerRef.current.closest("[id='workflows-by-science']");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      const irrelevantIndices = [];
      const relevantIndices = [];
      panels.forEach((p, i) => {
        if (p.type === "irrelevant") irrelevantIndices.push(i);
        else relevantIndices.push(i);
      });

      // ── Text ──
      gsap.to("[data-text='heading']", {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerEl,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });
      body.forEach((paragraph, i) => {
        tl.to(`[data-text-index='${i}']`, { opacity: 1, duration: 0.06 }, paragraph.visibleAt);
      });

      // ── Phase 1 (0.00–0.25): Bloated platform appears ──

      // Platform window border
      tl.fromTo(
        "[data-platform]",
        { autoAlpha: 0, scale: 0.9 },
        { autoAlpha: 1, scale: 1, duration: 0.08, ease: "power2.out" },
        0
      );

      // Price tag fades in
      const priceCounter = { val: PRICE_START };
      tl.fromTo(
        "[data-price]",
        { autoAlpha: 0, y: -10, scale: 0.8 },
        { autoAlpha: 1, y: 0, scale: 0.8, duration: 0.05, ease: "power2.out" },
        0.06
      );

      // Price counter ticks up ominously
      tl.to(priceCounter, {
        val: PRICE_END,
        duration: 0.22,
        ease: "power1.in",
        onUpdate: () => {
          if (priceRef.current) {
            priceRef.current.textContent = `$${Math.round(priceCounter.val).toLocaleString()} /mo`;
          }
        },
      }, 0.11);

      // Price tag grows in size as cost increases
      tl.to("[data-price]", {
        scale: 1.3,
        duration: 0.22,
        ease: "power1.in",
      }, 0.11);

      // Panels stagger in
      panels.forEach((_, i) => {
        const t = 0.04 + i * 0.012;
        tl.fromTo(
          `[data-panel='${i}']`,
          { autoAlpha: 0, scale: 0.8 },
          { autoAlpha: 1, scale: 1, duration: 0.03, ease: "power2.out" },
          t
        );
      });

      // Irrelevant panels glow amber to highlight waste
      tl.to(
        irrelevantIndices.map((i) => `[data-panel='${i}']`).join(", "),
        {
          boxShadow: "0 0 12px rgba(196, 169, 106, 0.6)",
          duration: 0.04,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        },
        0.22
      );

      // ── Phase 2 (0.28–0.55): Irrelevant panels fall away ──

      // Each irrelevant panel tumbles down with rotation
      const fallDuration = 0.25;
      const fallStagger = fallDuration / irrelevantIndices.length;
      irrelevantIndices.forEach((panelIdx, i) => {
        const t = 0.28 + i * fallStagger;
        const direction = Math.random() > 0.5 ? 1 : -1;
        tl.to(`[data-panel='${panelIdx}']`, {
          y: 120,
          rotation: direction * (15 + Math.random() * 20),
          autoAlpha: 0,
          scale: 0.6,
          duration: 0.03,
          ease: "power2.in",
        }, t);
      });

      // Price tag shrinks and disappears
      tl.to("[data-price]", {
        scale: 0.5,
        autoAlpha: 0,
        duration: 0.05,
      }, 0.40);

      // Platform border dissolves
      tl.to("[data-platform]", {
        borderColor: "rgba(0,0,0,0)",
        autoAlpha: 0,
        duration: 0.06,
        ease: "power1.in",
      }, 0.50);

      // ── Phase 3 (0.55–0.80): Custom rebuild ──

      // Relevant panels grow and reposition into clean layout
      const rebuildPositions = [
        { x: -130, y: -40, w: 140, h: 80 },
        { x: 20, y: -40, w: 140, h: 80 },
        { x: -55, y: 50, w: 140, h: 80 },
      ];
      relevantIndices.forEach((panelIdx, i) => {
        const pos = rebuildPositions[i];
        tl.to(`[data-panel='${panelIdx}']`, {
          x: pos.x,
          y: pos.y,
          width: pos.w,
          height: pos.h,
          borderColor: RELEVANT_BORDER,
          boxShadow: "0 4px 16px rgba(74, 124, 89, 0.2)",
          duration: 0.08,
          ease: "power2.out",
        }, 0.56);
      });

      // New custom panels materialize
      customPanels.forEach((_, i) => {
        const t = 0.66 + i * 0.04;
        tl.fromTo(
          `[data-custom='${i}']`,
          { autoAlpha: 0, scale: 0.5, y: 20 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.06, ease: "power2.out" },
          t
        );
      });

      // ── Phase 4 (0.84–1.00): Result ──

      tl.fromTo(
        "[data-label='result']",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.1, ease: "power2.out" },
        0.84
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* ── Background layer: animation ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Platform window border — Phase 1 */}
        <div
          data-platform
          className="absolute rounded-xl border-2 border-gray-300"
          style={{
            width: PLAT_W,
            height: PLAT_H,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#faf8f5",
            zIndex: 1,
          }}
        >
          {/* Title bar with traffic lights */}
          <div
            className="flex items-center gap-2 px-3 rounded-t-xl"
            style={{ height: 28, backgroundColor: "#e8e0d5" }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
            <span className="text-xs text-gray-400 ml-2 font-medium">Enterprise Informatics Suite v12.4 &mdash; 47 modules licensed</span>
          </div>
        </div>

        {/* Price tag — counter ticks up in Phase 1, disappears in Phase 2 */}
        <div
          data-price
          className="absolute flex items-center gap-1 rounded-full px-3 py-1 shadow-md"
          style={{
            top: `calc(50% - ${PLAT_H / 2 + 20}px)`,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#9B4D4D",
            color: "white",
            fontSize: 13,
            fontWeight: 700,
            zIndex: 4,
            visibility: "hidden",
          }}
        >
          <span ref={priceRef}>${PRICE_START.toLocaleString()} /mo</span>
        </div>

        {/* Module panels — 4x4 grid inside platform */}
        {panels.map((panel, i) => {
          const isRelevant = panel.type === "relevant";
          return (
            <div
              key={panel.label}
              data-panel={i}
              className="absolute flex items-center justify-center rounded-lg border text-center"
              style={{
                width: PANEL_W,
                height: PANEL_H,
                left: `calc(50% - ${PLAT_W / 2}px + ${panelX(panel.col)}px)`,
                top: `calc(50% - ${PLAT_H / 2}px + ${panelY(panel.row)}px)`,
                backgroundColor: isRelevant ? RELEVANT_BG : IRRELEVANT_BG,
                borderColor: isRelevant ? RELEVANT_BORDER : IRRELEVANT_BORDER,
                zIndex: 2,
              }}
            >
              <span
                className="text-xs font-semibold px-1"
                style={{ color: isRelevant ? "#2d5a3a" : "#8a7a5a" }}
              >
                {panel.label}
              </span>
            </div>
          );
        })}

        {/* Custom panels — appear in Phase 3 */}
        {customPanels.map((cp, i) => {
          const xOffset = i === 0 ? -130 : 20;
          return (
            <div
              key={cp.label}
              data-custom={i}
              className="absolute flex items-center justify-center rounded-lg border-2 shadow-lg"
              style={{
                width: 140,
                height: 80,
                left: `calc(50% + ${xOffset}px)`,
                top: `calc(50% + 140px)`,
                backgroundColor: cp.color,
                borderColor: cp.color,
                visibility: "hidden",
                zIndex: 3,
              }}
            >
              <span className="text-xs font-bold text-white px-2 text-center">
                {cp.label}
              </span>
            </div>
          );
        })}

        {/* Result label — Phase 4 */}
        <div
          data-label="result"
          className="absolute left-1/2 -translate-x-1/2 text-center"
          style={{ bottom: "8%", visibility: "hidden", zIndex: 3 }}
        >
          <div className="text-2xl font-bold text-gray-800 mb-1">
            Your tools. Your science. Your code.
          </div>
        </div>
      </div>

      {/* ── Foreground layer: text ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Heading — full-width, centered at top */}
        <div className="absolute top-0 left-0 right-0 flex justify-center pt-16 px-8">
          <h2
            data-text="heading"
            className="text-3xl sm:text-4xl text-moss text-center"
            style={{ opacity: 0 }}
          >
            {heading}
          </h2>
        </div>

        {/* Body — right column, vertically centered */}
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto px-8">
          <div className="flex-1" />
          <div className="flex-1 flex flex-col justify-center space-y-6 p-8 text-center lg:text-left">
            {body.map((paragraph, i) => (
              <p
                key={i}
                data-text-index={i}
                className="text-xl text-justify"
                style={{ opacity: 0 }}
              >
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
