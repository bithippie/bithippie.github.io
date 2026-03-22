"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PREFIX = "[WorkflowsByScience]";

// Panels in the bloated SaaS monolith
// type: "irrelevant" = opaque bloat you pay for but don't need
// type: "relevant" = the 3 things your scientists actually use
const panels = [
  // Row 0
  { label: "Workflow Engine", type: "irrelevant", row: 0, col: 0 },
  { label: "Experiment Log", type: "relevant", row: 0, col: 1 },
  { label: "Regulatory Module", type: "irrelevant", row: 0, col: 2 },
  { label: "Vendor Integrations", type: "irrelevant", row: 0, col: 3 },
  // Row 1
  { label: "Pipeline Orchestrator", type: "irrelevant", row: 1, col: 0 },
  { label: "Sample Tracking", type: "irrelevant", row: 1, col: 1 },
  { label: "Audit Trail Engine", type: "irrelevant", row: 1, col: 2 },
  { label: "Screening Results", type: "relevant", row: 1, col: 3 },
  // Row 2
  { label: "Error: Opaque Failure", type: "irrelevant", row: 2, col: 0 },
  { label: "Report Generator", type: "irrelevant", row: 2, col: 1 },
  { label: "Compound Search", type: "relevant", row: 2, col: 2 },
  { label: "User Provisioning", type: "irrelevant", row: 2, col: 3 },
  // Row 3
  { label: "License Manager", type: "irrelevant", row: 3, col: 0 },
  { label: "Onboarding Wizard", type: "irrelevant", row: 3, col: 1 },
  { label: "Black Box Logs", type: "irrelevant", row: 3, col: 2 },
  { label: "Analytics Add-on ($)", type: "irrelevant", row: 3, col: 3 },
];

// The custom rebuild — simple, transparent, purpose-built
const customPanels = [
  { label: "Pipeline Monitor", color: "#4A7C59" },
  { label: "Team Notebook", color: "#2C7C6F" },
];

const COLS = 4;
const ROWS = 4;
const PANEL_W = 110;
const PANEL_H = 60;
const GAP = 8;
const GRID_W = COLS * PANEL_W + (COLS - 1) * GAP;
const GRID_H = ROWS * PANEL_H + (ROWS - 1) * GAP;
// Platform border padding
const PLAT_PAD = 16;
const PLAT_W = GRID_W + PLAT_PAD * 2;
const PLAT_H = GRID_H + PLAT_PAD * 2 + 28; // extra for "title bar"

const IRRELEVANT_BG = "#e8e0d5";
const IRRELEVANT_BORDER = "#c4a96a";
const RELEVANT_BG = "#dce8df";
const RELEVANT_BORDER = "#4A7C59";

function panelX(col) {
  return PLAT_PAD + col * (PANEL_W + GAP);
}
function panelY(row) {
  return PLAT_PAD + 28 + row * (PANEL_H + GAP); // 28 for title bar
}

const PRICE_START = 4200;
const PRICE_END = 86000;

export default function WorkflowsByScience() {
  const containerRef = useRef(null);
  const priceRef = useRef(null);

  // ── CP1: Verify DOM renders ──
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      console.error(PREFIX, "CP1 FAIL: containerRef is null");
      return;
    }
    console.log(PREFIX, "CP1: container dimensions", {
      width: container.offsetWidth,
      height: container.offsetHeight,
    });

    const panelEls = container.querySelectorAll("[data-panel]");
    console.log(PREFIX, `CP1: Found ${panelEls.length}/${panels.length} panel elements`);

    const customEls = container.querySelectorAll("[data-custom]");
    console.log(PREFIX, `CP1: Found ${customEls.length}/${customPanels.length} custom panel elements`);

    const trigger = container.closest("[id='workflows-by-science']");
    console.log(PREFIX, "CP1: trigger element", trigger);
    if (!trigger) {
      console.error(PREFIX, "CP1 FAIL: Cannot find parent with id='workflows-by-science'");
    }
  }, []);

  // ── GSAP animations ──
  useGSAP(() => {
    console.log(PREFIX, "CP2: useGSAP callback fired");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      console.log(PREFIX, "CP2: matchMedia matched");

      const triggerEl = containerRef.current.closest("[id='workflows-by-science']");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const pct = Math.round(self.progress * 100);
            if (pct % 10 === 0) {
              console.log(PREFIX, `CP2: scroll progress ${pct}%`);
            }
          },
        },
      });

      const scopedPanels = gsap.utils.toArray("[data-panel]", containerRef.current);
      console.log(PREFIX, `CP2: scoped panels: ${scopedPanels.length}`);

      const irrelevantIndices = [];
      const relevantIndices = [];
      panels.forEach((p, i) => {
        if (p.type === "irrelevant") irrelevantIndices.push(i);
        else relevantIndices.push(i);
      });

      console.log(PREFIX, `CP2: ${irrelevantIndices.length} irrelevant, ${relevantIndices.length} relevant`);

      // ════════════════════════════════════════
      // PHASE 1: Bloated platform fades in (0 – 0.25)
      // ════════════════════════════════════════
      console.log(PREFIX, "Phase 1: Building bloated platform");

      // Platform border
      tl.fromTo(
        "[data-platform]",
        { autoAlpha: 0, scale: 0.9 },
        { autoAlpha: 1, scale: 1, duration: 0.08, ease: "power2.out" },
        0
      );

      // Price tag — fades in then number ticks up ominously through Phase 1
      const priceCounter = { val: PRICE_START };
      tl.fromTo(
        "[data-price]",
        { autoAlpha: 0, y: -10, scale: 0.8 },
        { autoAlpha: 1, y: 0, scale: 0.8, duration: 0.05, ease: "power2.out" },
        0.06
      );
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
      tl.to("[data-price]", {
        scale: 1.3,
        duration: 0.22,
        ease: "power1.in",
      }, 0.11);

      // Panels appear with stagger
      panels.forEach((_, i) => {
        const t = 0.04 + i * 0.012;
        tl.fromTo(
          `[data-panel='${i}']`,
          { autoAlpha: 0, scale: 0.8 },
          { autoAlpha: 1, scale: 1, duration: 0.03, ease: "power2.out" },
          t
        );
      });

      // Irrelevant panels get an amber glow pulse to highlight waste
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

      // ════════════════════════════════════════
      // PHASE 2: Irrelevant panels fall away (0.28 – 0.55)
      // ════════════════════════════════════════
      console.log(PREFIX, "Phase 2: Irrelevant panels fall away");

      const fallDuration = 0.25;
      const fallStagger = fallDuration / irrelevantIndices.length;

      irrelevantIndices.forEach((panelIdx, i) => {
        const t = 0.28 + i * fallStagger;
        const direction = Math.random() > 0.5 ? 1 : -1;
        console.log(PREFIX, `Phase 2: panel ${panelIdx} ("${panels[panelIdx].label}") falls at t=${t.toFixed(3)}`);

        tl.to(`[data-panel='${panelIdx}']`, {
          y: 120,
          rotation: direction * (15 + Math.random() * 20),
          autoAlpha: 0,
          scale: 0.6,
          duration: 0.03,
          ease: "power2.in",
        }, t);
      });

      // Price tag shrinks
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

      // ════════════════════════════════════════
      // PHASE 3: Custom rebuild (0.55 – 0.80)
      // ════════════════════════════════════════
      console.log(PREFIX, "Phase 3: Custom rebuild");

      // Relevant panels grow and reposition to a clean centered layout
      const rebuildPositions = [
        { x: -130, y: -40, w: 140, h: 80 },
        { x: 20, y: -40, w: 140, h: 80 },
        { x: -55, y: 50, w: 140, h: 80 },
      ];

      relevantIndices.forEach((panelIdx, i) => {
        const pos = rebuildPositions[i];
        console.log(PREFIX, `Phase 3: panel ${panelIdx} ("${panels[panelIdx].label}") rebuilds to pos ${i}`);

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

      // Custom panels materialize
      customPanels.forEach((_, i) => {
        const t = 0.66 + i * 0.04;
        console.log(PREFIX, `Phase 3: custom panel ${i} appears at t=${t.toFixed(3)}`);

        tl.fromTo(
          `[data-custom='${i}']`,
          { autoAlpha: 0, scale: 0.5, y: 20 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.06, ease: "power2.out" },
          t
        );
      });

      // ════════════════════════════════════════
      // PHASE 4: Result (0.82 – 1.0)
      // ════════════════════════════════════════
      console.log(PREFIX, "Phase 4: Result tagline");

      tl.fromTo(
        "[data-label='result']",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.1, ease: "power2.out" },
        0.84
      );

      console.log(PREFIX, "CP2: Timeline built, duration:", tl.duration());
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* ── Platform border ── */}
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
        {/* Title bar */}
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

      {/* ── Price tag ── */}
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
          zIndex: 30,
          visibility: "hidden",
        }}
      >
        <span ref={priceRef}>${PRICE_START.toLocaleString()} /mo</span>
      </div>

      {/* ── Grid panels ── */}
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
              // Position relative to platform center
              left: `calc(50% - ${PLAT_W / 2}px + ${panelX(panel.col)}px)`,
              top: `calc(50% - ${PLAT_H / 2}px + ${panelY(panel.row)}px)`,
              backgroundColor: isRelevant ? RELEVANT_BG : IRRELEVANT_BG,
              borderColor: isRelevant ? RELEVANT_BORDER : IRRELEVANT_BORDER,
              zIndex: 10,
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

      {/* ── Custom panels (hidden, appear in Phase 3) ── */}
      {customPanels.map((cp, i) => {
        // Position them flanking the rebuilt layout
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
              zIndex: 15,
            }}
          >
            <span className="text-xs font-bold text-white px-2 text-center">
              {cp.label}
            </span>
          </div>
        );
      })}

      {/* ── Result tagline ── */}
      <div
        data-label="result"
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{ bottom: "8%", visibility: "hidden", zIndex: 25 }}
      >
        <div className="text-2xl font-bold text-gray-800 mb-1">
          Your tools. Your science. Your code.
        </div>
      </div>
    </div>
  );
}
