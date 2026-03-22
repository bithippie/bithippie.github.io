"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/*
 * Scene 2: "Eliminate the Latency of Learning"
 * Layout: text overlay on top, full-width animation behind
 *
 * Layers:
 *   Background (z-0): pipeline lanes, workload blocks, labels, result
 *   Foreground (z-10): heading + body text overlay at top
 *
 * Timeline (scroll 0% → 100%):
 *   Text:    heading at 0%, body paragraphs at configured visibleAt values
 *   Phase 1: (0.00–0.45) Serial bottleneck — single pipeline, queue builds up,
 *            only 3 blocks crawl through one at a time while the rest pulse impatiently
 *   Phase 2: (0.48–0.58) Switch to parallel — 3 more pipeline lanes appear,
 *            label changes from "Sequential" to "Parallel"
 *   Phase 3: (0.60–0.85) Parallel drain — remaining 13 blocks zip through
 *            in batches of 4, queue empties rapidly
 *   Phase 4: (0.87–1.00) Result label: "4x throughput"
 */

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
const SERIAL_PROCESSED = 3;

export default function LatencyOfLearning({ heading, body = [] }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const triggerEl = containerRef.current.closest("[id='latency-of-learning']");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // ── Text ──
      tl.to("[data-text='heading']", { opacity: 1, duration: 0.04 }, 0);
      body.forEach((paragraph, i) => {
        tl.to(`[data-text-index='${i}']`, { opacity: 1, duration: 0.06 }, paragraph.visibleAt);
      });

      // ── Phase 1 (0.00–0.45): Serial bottleneck ──

      // Single pipeline lane appears
      tl.fromTo(
        "[data-pipeline='0']",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.03, ease: "power2.out" },
        0
      );

      // "Sequential Processing" label
      tl.fromTo(
        "[data-label='serial']",
        { opacity: 0 },
        { opacity: 1, duration: 0.03 },
        0.01
      );

      // Queue fills in — blocks appear one by one
      const fillDuration = 0.30;
      const fillStagger = fillDuration / workloads.length;
      workloads.forEach((_, i) => {
        const t = 0.01 + i * fillStagger;
        tl.fromTo(
          `[data-block='${i}']`,
          { autoAlpha: 0, x: -30 },
          { autoAlpha: 1, x: 0, duration: 0.02, ease: "power2.out" },
          t
        );
      });

      // Serial processing — only SERIAL_PROCESSED blocks crawl through
      const serialSlotDuration = 0.12;
      for (let i = 0; i < SERIAL_PROCESSED; i++) {
        const t = 0.06 + i * serialSlotDuration;
        const laneBottomY = PIPELINE_BOTTOM + LANE_H / 2 - BLOCK_H / 2;

        // Move block to pipeline entry
        tl.to(`[data-block='${i}']`, {
          left: "9%",
          bottom: laneBottomY,
          duration: 0.02,
          ease: "power1.in",
        }, t);

        // Crawl across (slow)
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

      // Collapse queue — close gaps left by processed blocks
      const collapseTime = 0.06 + SERIAL_PROCESSED * serialSlotDuration;
      for (let i = 0; i < workloads.length - SERIAL_PROCESSED; i++) {
        const blockIdx = SERIAL_PROCESSED + i;
        tl.to(`[data-block='${blockIdx}']`, {
          bottom: QUEUE_BASE + i * (BLOCK_H + BLOCK_GAP),
          duration: 0.02,
          ease: "power1.out",
        }, collapseTime);
      }

      // ── Phase 2 (0.48–0.58): Switch to parallel ──

      // Fade out serial label
      tl.to("[data-label='serial']", { opacity: 0, duration: 0.03 }, 0.48);

      // Additional pipeline lanes appear
      for (let lane = 1; lane < LANE_COUNT; lane++) {
        tl.fromTo(
          `[data-pipeline='${lane}']`,
          { scaleX: 0, autoAlpha: 0 },
          { scaleX: 1, autoAlpha: 1, duration: 0.04, ease: "power2.out" },
          0.50 + lane * 0.02
        );
      }

      // "Parallel Processing" label
      tl.fromTo(
        "[data-label='parallel']",
        { opacity: 0 },
        { opacity: 1, duration: 0.03 },
        0.56
      );

      // ── Phase 3 (0.60–0.85): Parallel drain ──

      // Remaining blocks process in batches of LANE_COUNT
      const remainingIndices = [];
      for (let i = SERIAL_PROCESSED; i < workloads.length; i++) {
        remainingIndices.push(i);
      }

      const batches = Math.ceil(remainingIndices.length / LANE_COUNT);
      const batchDuration = 0.06;

      for (let b = 0; b < batches; b++) {
        const batchStart = 0.60 + b * batchDuration;

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

          // Zip across (fast)
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

      // ── Phase 4 (0.87–1.00): Result ──

      tl.fromTo(
        "[data-label='result']",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.1, ease: "power2.out" },
        0.87
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* ── Background layer: animation ── */}
      <div className="absolute inset-0">
        {/* Workload blocks — queue on the left */}
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
              zIndex: 2,
            }}
          >
            {w.label}
          </div>
        ))}

        {/* Pipeline lanes — lane 0 visible, lanes 1–3 hidden until Phase 2 */}
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
              visibility: lane === 0 ? "visible" : "hidden",
              transformOrigin: "left center",
              zIndex: 1,
            }}
          />
        ))}

        {/* Processing mode labels */}
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

        {/* Result label — Phase 4 */}
        <div
          data-label="result"
          className="absolute left-1/2 -translate-x-1/2 text-center"
          style={{ top: "20%", visibility: "hidden", zIndex: 3 }}
        >
          <div className="text-3xl font-bold text-gray-800 mb-2">
            4x throughput
          </div>
          <div className="text-base text-gray-500">
            Same infrastructure. Parallel execution.
          </div>
        </div>
      </div>

      {/* ── Foreground layer: text ── */}
      <div className="relative z-10 pointer-events-none w-full max-w-screen-xl mx-auto px-8 pt-6 pb-4 flex flex-col lg:flex-row lg:items-baseline lg:gap-8">
        <h2
          data-text="heading"
          className="text-3xl sm:text-4xl text-moss shrink-0"
          style={{ opacity: 0 }}
        >
          {heading}
        </h2>
        <div className="flex gap-6 mt-3 lg:mt-0">
          {body.map((paragraph, i) => (
            <p
              key={i}
              data-text-index={i}
              className="text-base text-justify"
              style={{ opacity: 0 }}
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
