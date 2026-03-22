"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PREFIX = "[LatencyOfLearning]";

const workloads = [
  { label: "Docking Sim", color: "#6B8E7B" },
  { label: "MD Run", color: "#8B6914" },
  { label: "ADMET Pred", color: "#7B5EA7" },
  { label: "Seq Align", color: "#2C5F7C" },
  { label: "FEP Calc", color: "#9B4D4D" },
  { label: "Homology", color: "#4A7C59" },
  { label: "Clustering", color: "#6B5B8D" },
  { label: "PK Model", color: "#2C7C6F" },
  { label: "Docking Sim II", color: "#6B8E7B" },
  { label: "Toxicity Pred", color: "#9B4D4D" },
  { label: "Binding Affinity", color: "#8B6914" },
  { label: "Conformer Gen", color: "#7B5EA7" },
  { label: "MD Run II", color: "#2C5F7C" },
  { label: "Scaffold Hop", color: "#4A7C59" },
  { label: "QSAR Model", color: "#6B5B8D" },
  { label: "Retrosynthesis", color: "#2C7C6F" },
];

const LANE_COUNT = 4;
const BLOCK_H = 32;
const BLOCK_GAP = 4;
const LANE_H = 8;
const LANE_GAP = 10;
const PIPELINE_BOTTOM = 80;
const QUEUE_LEFT = "3%";
const PIPELINE_LEFT = "8%";
const PIPELINE_WIDTH = "86%";
const QUEUE_BASE = PIPELINE_BOTTOM + 30;

// Serial phase only processes this many before parallel kicks in
const SERIAL_PROCESSED = 3;

export default function LatencyOfLearning() {
  const containerRef = useRef(null);

  // ── CP1: Verify DOM renders ──
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      console.error(PREFIX, "CP1 FAIL: containerRef is null");
      return;
    }
    console.log(PREFIX, "CP1: containerRef mounted", container);
    console.log(PREFIX, "CP1: container dimensions", {
      width: container.offsetWidth,
      height: container.offsetHeight,
    });

    // Check blocks exist in DOM
    const blocks = container.querySelectorAll("[data-block]");
    console.log(PREFIX, `CP1: Found ${blocks.length}/${workloads.length} block elements`);
    blocks.forEach((el) => {
      const rect = el.getBoundingClientRect();
      console.log(PREFIX, `CP1: block "${el.dataset.block}" rect`, {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        visible: rect.width > 0 && rect.height > 0,
      });
    });

    // Check pipelines exist
    const pipelines = container.querySelectorAll("[data-pipeline]");
    console.log(PREFIX, `CP1: Found ${pipelines.length}/${LANE_COUNT} pipeline elements`);

    // Check parent chain
    const trigger = container.closest("[id='latency-of-learning']");
    console.log(PREFIX, "CP1: ScrollTrigger trigger element", trigger);
    if (!trigger) {
      console.error(PREFIX, "CP1 FAIL: Cannot find parent with id='latency-of-learning'");
    }
  }, []);

  // ── CP2: GSAP setup + CP3-5: Animation phases ──
  useGSAP(() => {
    console.log(PREFIX, "CP2: useGSAP callback fired");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      console.log(PREFIX, "CP2: matchMedia (min-width: 768px) matched");

      const triggerEl = containerRef.current.closest("[id='latency-of-learning']");
      console.log(PREFIX, "CP2: trigger element for ScrollTrigger", triggerEl);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            // Log progress at 10% intervals to avoid spam
            const pct = Math.round(self.progress * 100);
            if (pct % 10 === 0) {
              console.log(PREFIX, `CP2: scroll progress ${pct}%`);
            }
          },
        },
      });

      // Verify GSAP can find scoped elements
      const scopedBlocks = gsap.utils.toArray("[data-block]", containerRef.current);
      console.log(PREFIX, `CP2: GSAP scoped [data-block] count: ${scopedBlocks.length}`);

      const scopedPipelines = gsap.utils.toArray("[data-pipeline]", containerRef.current);
      console.log(PREFIX, `CP2: GSAP scoped [data-pipeline] count: ${scopedPipelines.length}`);

      // ════════════════════════════════════════
      // PHASE 1: Serial bottleneck (0 – 0.45)
      // ════════════════════════════════════════
      console.log(PREFIX, "CP3: Building Phase 1 — serial bottleneck");

      // Show pipeline lane 0
      tl.fromTo(
        "[data-pipeline='0']",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.03, ease: "power2.out" },
        0
      );

      // Show "Sequential Processing" label
      tl.fromTo(
        "[data-label='serial']",
        { opacity: 0 },
        { opacity: 1, duration: 0.03 },
        0.01
      );

      // Queue fills in — blocks appear one by one from bottom up
      // Blocks start visible in DOM but GSAP sets initial state to hidden,
      // then animates them in as scroll progresses
      const fillDuration = 0.30;
      const fillStagger = fillDuration / workloads.length;

      workloads.forEach((_, i) => {
        const t = 0.01 + i * fillStagger;
        console.log(PREFIX, `CP3: block ${i} fill-in at t=${t.toFixed(3)}`);
        tl.fromTo(
          `[data-block='${i}']`,
          { autoAlpha: 0, x: -30 },
          { autoAlpha: 1, x: 0, duration: 0.02, ease: "power2.out" },
          t
        );
      });

      // Serial processing — painfully slow, one block at a time
      // Only SERIAL_PROCESSED blocks get through before we switch to parallel
      const serialSlotDuration = 0.12;

      for (let i = 0; i < SERIAL_PROCESSED; i++) {
        const t = 0.06 + i * serialSlotDuration;
        const laneBottomY = PIPELINE_BOTTOM + LANE_H / 2 - BLOCK_H / 2;
        console.log(PREFIX, `CP3: serial block ${i} starts at t=${t.toFixed(3)}, moves to bottom=${laneBottomY}px`);

        // Move block from queue position to pipeline entry
        tl.to(`[data-block='${i}']`, {
          left: "9%",
          bottom: laneBottomY,
          duration: 0.02,
          ease: "power1.in",
        }, t);

        // Crawl across pipeline (slow!)
        tl.to(`[data-block='${i}']`, {
          left: "92%",
          duration: 0.08,
          ease: "none",
        }, t + 0.02);

        // Fade out on completion
        tl.to(`[data-block='${i}']`, {
          autoAlpha: 0,
          duration: 0.01,
        }, t + 0.10);

        // Waiting blocks pulse impatiently
        for (let j = i + 1; j < workloads.length; j++) {
          tl.to(`[data-block='${j}']`, {
            scale: 1.06,
            duration: 0.015,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          }, t + 0.04);
        }
      }

      // Collapse queue — close gaps left by the blocks that were processed
      const collapseTime = 0.06 + SERIAL_PROCESSED * serialSlotDuration;
      console.log(PREFIX, `CP3: queue collapse at t=${collapseTime.toFixed(3)}`);
      for (let i = 0; i < workloads.length - SERIAL_PROCESSED; i++) {
        const blockIdx = SERIAL_PROCESSED + i;
        tl.to(`[data-block='${blockIdx}']`, {
          bottom: QUEUE_BASE + i * (BLOCK_H + BLOCK_GAP),
          duration: 0.02,
          ease: "power1.out",
        }, collapseTime);
      }

      // ════════════════════════════════════════
      // PHASE 2: Switch to parallel (0.48 – 0.58)
      // ════════════════════════════════════════
      console.log(PREFIX, "CP4: Building Phase 2 — parallel switch");

      // Fade out serial label
      tl.to("[data-label='serial']", { opacity: 0, duration: 0.03 }, 0.48);

      // New pipeline lanes appear
      for (let lane = 1; lane < LANE_COUNT; lane++) {
        console.log(PREFIX, `CP4: pipeline lane ${lane} appears at t=${(0.50 + lane * 0.02).toFixed(3)}`);
        tl.fromTo(
          `[data-pipeline='${lane}']`,
          { scaleX: 0, autoAlpha: 0 },
          { scaleX: 1, autoAlpha: 1, duration: 0.04, ease: "power2.out" },
          0.50 + lane * 0.02
        );
      }

      // Show parallel label
      tl.fromTo(
        "[data-label='parallel']",
        { opacity: 0 },
        { opacity: 1, duration: 0.03 },
        0.56
      );

      // ════════════════════════════════════════
      // PHASE 3: Parallel drain (0.60 – 0.85)
      // ════════════════════════════════════════
      console.log(PREFIX, "CP5: Building Phase 3 — parallel drain");

      const remainingIndices = [];
      for (let i = SERIAL_PROCESSED; i < workloads.length; i++) {
        remainingIndices.push(i);
      }
      console.log(PREFIX, `CP5: ${remainingIndices.length} blocks to drain in parallel`);

      const batches = Math.ceil(remainingIndices.length / LANE_COUNT);
      const batchDuration = 0.06;

      for (let b = 0; b < batches; b++) {
        const batchStart = 0.60 + b * batchDuration;
        console.log(PREFIX, `CP5: batch ${b} at t=${batchStart.toFixed(3)}`);

        for (let lane = 0; lane < LANE_COUNT; lane++) {
          const rIdx = b * LANE_COUNT + lane;
          if (rIdx >= remainingIndices.length) break;
          const blockIdx = remainingIndices[rIdx];
          const laneBottomY = PIPELINE_BOTTOM + lane * (LANE_H + LANE_GAP) + LANE_H / 2 - BLOCK_H / 2;

          // Move to lane entry
          tl.to(`[data-block='${blockIdx}']`, {
            left: "9%",
            bottom: laneBottomY,
            duration: 0.01,
            ease: "power1.in",
          }, batchStart);

          // Zip across (fast!)
          tl.to(`[data-block='${blockIdx}']`, {
            left: "92%",
            duration: 0.03,
            ease: "none",
          }, batchStart + 0.01);

          // Fade out
          tl.to(`[data-block='${blockIdx}']`, {
            autoAlpha: 0,
            duration: 0.01,
          }, batchStart + 0.04);
        }
      }

      // ════════════════════════════════════════
      // PHASE 4: Result (0.87 – 1.0)
      // ════════════════════════════════════════
      console.log(PREFIX, "CP5: Building Phase 4 — result label");

      tl.fromTo(
        "[data-label='result']",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.1, ease: "power2.out" },
        0.87
      );

      console.log(PREFIX, "CP2: Timeline built successfully, total duration:", tl.duration());
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* ── Workload blocks ── */}
      {/* Visible by default so we can verify DOM independently of GSAP */}
      {workloads.map((w, i) => (
        <div
          key={`${w.label}-${i}`}
          data-block={i}
          className="absolute flex items-center justify-center rounded px-3 text-white font-semibold text-xs shadow-md whitespace-nowrap"
          style={{
            backgroundColor: w.color,
            height: BLOCK_H,
            left: QUEUE_LEFT,
            bottom: QUEUE_BASE + i * (BLOCK_H + BLOCK_GAP),
            zIndex: 20,
          }}
        >
          {w.label}
        </div>
      ))}

      {/* ── Pipeline lanes ── */}
      {Array.from({ length: LANE_COUNT }).map((_, lane) => (
        <div
          key={lane}
          data-pipeline={lane}
          className="absolute rounded-full"
          style={{
            left: PIPELINE_LEFT,
            width: PIPELINE_WIDTH,
            height: LANE_H,
            bottom: PIPELINE_BOTTOM + lane * (LANE_H + LANE_GAP),
            backgroundColor: "#d1ccc4",
            // Lane 0 visible by default; others hidden (GSAP will reveal)
            visibility: lane === 0 ? "visible" : "hidden",
            transformOrigin: "left center",
            zIndex: 5,
          }}
        />
      ))}

      {/* ── Labels ── */}
      <div
        data-label="serial"
        className="absolute text-sm font-semibold text-gray-500"
        style={{ left: PIPELINE_LEFT, bottom: PIPELINE_BOTTOM - 24, opacity: 0 }}
      >
        Sequential Processing
      </div>
      <div
        data-label="parallel"
        className="absolute text-sm font-semibold text-gray-500"
        style={{ left: PIPELINE_LEFT, bottom: PIPELINE_BOTTOM - 24, opacity: 0 }}
      >
        Parallel Processing
      </div>

      {/* ── Result ── */}
      <div
        data-label="result"
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{ top: "20%", visibility: "hidden" }}
      >
        <div className="text-3xl font-bold text-gray-800 mb-2">
          4x throughput
        </div>
        <div className="text-base text-gray-500">
          Same infrastructure. Parallel execution.
        </div>
      </div>
    </div>
  );
}
