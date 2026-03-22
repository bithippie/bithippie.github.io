"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/*
 * Scene 4: "Research Freedom, Production Discipline"
 * Layout: side-by-side (animation left, text right)
 *
 * Timeline (scroll 0% → 100%):
 *   Text:    heading at 0%, body paragraphs at configured visibleAt values
 *   Phase 1: (0.00–0.25) Ad-hoc chaos — scattered VM cards pile up on the
 *            left with "no docs", "undocumented" labels. Empty production
 *            lane with "?" on the right.
 *   Phase 2: (0.28–0.55) IaC organizes — Terraform template slides in,
 *            adhoc cards snap into organized stack or dissolve. IaC-managed
 *            cards replace them with version labels. Audit trail connects.
 *   Phase 3: (0.58–0.80) Promote to production — organized stack slides
 *            right into production lane. Prod cards appear. Lane border
 *            solidifies. "Reproducible" badge appears.
 *   Phase 4: (0.85–1.00) Result: "Explore freely. Ship confidently."
 */

// Ad-hoc VM fragments — scattered chaos on the left
const adhocItems = [
  { label: "gpu-instance-7f3a", sub: "no docs", x: -220, y: -120, rot: -6 },
  { label: "analysis-vm-tmp", sub: "owner: ???", x: -160, y: -30, rot: 4 },
  { label: "jupyter-prod-copy", sub: "undocumented", x: -260, y: 60, rot: -3 },
  { label: "vm-experiment-old", sub: "no audit trail", x: -120, y: 120, rot: 7 },
  { label: "dev-box-susan", sub: "unreproducible", x: -240, y: -60, rot: -8 },
  { label: "scratch-docking-2", sub: "temp / permanent?", x: -180, y: 30, rot: 2 },
];

// Organized IaC stack — what the first 3 adhoc items become
const iacStack = [
  { label: "sandbox-docking", version: "v1.2.0", env: "sandbox" },
  { label: "sandbox-analysis", version: "v3.1.0", env: "sandbox" },
  { label: "sandbox-ml-train", version: "v2.0.1", env: "sandbox" },
];

// Production lane items — final state after promotion
const prodItems = [
  { label: "prod-docking", version: "v1.2.0" },
  { label: "prod-analysis", version: "v3.1.0" },
  { label: "prod-ml-train", version: "v2.0.1" },
];

// Card sizing
const CARD_W = 180;
const CARD_H = 52;
const STACK_GAP = 8;

export default function ResearchFreedom({ body = [] }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const triggerEl = containerRef.current.closest("[id='research-freedom']");
      const heading = triggerEl.querySelector("[data-text='heading']");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // ── Text ──
      tl.to(heading, { opacity: 1, duration: 0.04 }, 0);
      body.forEach((paragraph, i) => {
        const el = triggerEl.querySelector(`[data-text-index='${i}']`);
        if (el) tl.to(el, { opacity: 1, duration: 0.06 }, paragraph.visibleAt);
      });

      // ── Phase 1 (0.00–0.25): Ad-hoc chaos ──

      // Zone labels appear
      tl.fromTo(
        "[data-label='adhoc-zone']",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.04 },
        0
      );
      tl.fromTo(
        "[data-label='prod-zone']",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.04 },
        0
      );

      // Center divider line
      tl.fromTo(
        "[data-divider]",
        { autoAlpha: 0, scaleY: 0 },
        { autoAlpha: 1, scaleY: 1, duration: 0.05, ease: "power2.out" },
        0.02
      );

      // Ad-hoc VM cards scatter in one by one at messy angles
      adhocItems.forEach((_, i) => {
        const t = 0.03 + i * 0.035;
        tl.fromTo(
          `[data-adhoc='${i}']`,
          { autoAlpha: 0, scale: 0.6, rotation: 0 },
          {
            autoAlpha: 1,
            scale: 1,
            rotation: adhocItems[i].rot,
            duration: 0.03,
            ease: "back.out(1.4)",
          },
          t
        );
      });

      // Empty production lane (dashed outline)
      tl.fromTo(
        "[data-prod-lane]",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.05 },
        0.05
      );

      // "?" in the empty prod lane
      tl.fromTo(
        "[data-label='empty']",
        { autoAlpha: 0 },
        { autoAlpha: 0.5, duration: 0.04 },
        0.10
      );

      // ── Phase 2 (0.28–0.55): IaC organizes the chaos ──

      // Terraform template slides in
      tl.fromTo(
        "[data-iac-overlay]",
        { autoAlpha: 0, x: -60 },
        { autoAlpha: 1, x: 0, duration: 0.06, ease: "power2.out" },
        0.28
      );

      // First 3 adhoc items snap to organized stack, rest dissolve
      adhocItems.forEach((_, i) => {
        if (i < iacStack.length) {
          const stackY = -((iacStack.length - 1) * (CARD_H + STACK_GAP)) / 2 + i * (CARD_H + STACK_GAP);
          tl.to(`[data-adhoc='${i}']`, {
            x: -120,
            y: stackY,
            rotation: 0,
            borderColor: "#4A7C59",
            duration: 0.06,
            ease: "power2.out",
          }, 0.34);
        } else {
          tl.to(`[data-adhoc='${i}']`, {
            autoAlpha: 0,
            scale: 0.4,
            duration: 0.04,
            ease: "power2.in",
          }, 0.32 + (i - iacStack.length) * 0.02);
        }
      });

      // IaC-managed cards replace adhoc cards
      iacStack.forEach((_, i) => {
        tl.fromTo(
          `[data-iac='${i}']`,
          { autoAlpha: 0, x: -20 },
          { autoAlpha: 1, x: 0, duration: 0.04, ease: "power2.out" },
          0.42 + i * 0.02
        );
        tl.to(`[data-adhoc='${i}']`, {
          autoAlpha: 0,
          duration: 0.02,
        }, 0.42 + i * 0.02);
      });

      // IaC overlay fades out
      tl.to("[data-iac-overlay]", {
        autoAlpha: 0,
        duration: 0.04,
      }, 0.50);

      // Audit trail line connects the stack
      tl.fromTo(
        "[data-audit-trail]",
        { autoAlpha: 0, scaleY: 0 },
        { autoAlpha: 1, scaleY: 1, duration: 0.05, ease: "power2.out" },
        0.48
      );

      // ── Phase 3 (0.58–0.80): Promote to production ──

      // "?" fades out
      tl.to("[data-label='empty']", {
        autoAlpha: 0,
        duration: 0.03,
      }, 0.58);

      // IaC stack slides right into production lane
      iacStack.forEach((_, i) => {
        tl.to(`[data-iac='${i}']`, {
          x: 230,
          duration: 0.08,
          ease: "power2.inOut",
        }, 0.60 + i * 0.02);
      });

      // Audit trail follows
      tl.to("[data-audit-trail]", {
        x: 230,
        duration: 0.08,
        ease: "power2.inOut",
      }, 0.61);

      // Production cards appear (replacing traveling IaC cards)
      prodItems.forEach((_, i) => {
        tl.fromTo(
          `[data-prod='${i}']`,
          { autoAlpha: 0, scale: 0.8 },
          { autoAlpha: 1, scale: 1, duration: 0.04, ease: "power2.out" },
          0.70 + i * 0.02
        );
      });

      // Hide traveling IaC cards and audit trail
      tl.to("[data-iac='0'], [data-iac='1'], [data-iac='2']", {
        autoAlpha: 0,
        duration: 0.02,
      }, 0.70);
      tl.to("[data-audit-trail]", {
        autoAlpha: 0,
        duration: 0.02,
      }, 0.70);

      // Production lane border solidifies
      tl.to("[data-prod-lane]", {
        borderColor: "#4A7C59",
        borderStyle: "solid",
        duration: 0.04,
      }, 0.74);

      // "Reproducible" badge pops in
      tl.fromTo(
        "[data-badge]",
        { autoAlpha: 0, scale: 0.5 },
        { autoAlpha: 1, scale: 1, duration: 0.05, ease: "back.out(1.7)" },
        0.76
      );

      // ── Phase 4 (0.85–1.00): Result ──

      tl.fromTo(
        "[data-label='result']",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.1, ease: "power2.out" },
        0.85
      );
    });
  }, { scope: containerRef });

  // Layout positions
  const centerY = "50%";
  const leftX = "28%";  // Ad-hoc / sandbox zone
  const rightX = "72%"; // Production zone

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Zone labels — top of each half */}
      <div
        data-label="adhoc-zone"
        className="absolute text-sm font-semibold text-gray-400"
        style={{ left: leftX, top: "12%", transform: "translateX(-50%)", visibility: "hidden" }}
      >
        Ad-Hoc Environments
      </div>
      <div
        data-label="prod-zone"
        className="absolute text-sm font-semibold text-gray-400"
        style={{ left: rightX, top: "12%", transform: "translateX(-50%)", visibility: "hidden" }}
      >
        Production
      </div>

      {/* Center divider */}
      <div
        data-divider
        className="absolute bg-gray-200"
        style={{
          left: "50%",
          top: "15%",
          width: 1,
          height: "70%",
          transformOrigin: "top center",
          visibility: "hidden",
        }}
      />

      {/* Ad-hoc VM cards — scattered in Phase 1, organized in Phase 2 */}
      {adhocItems.map((item, i) => (
        <div
          key={item.label}
          data-adhoc={i}
          className="absolute rounded-lg border border-gray-300 px-3 py-2 shadow-sm"
          style={{
            width: CARD_W,
            left: `calc(${leftX} + ${item.x}px)`,
            top: `calc(${centerY} + ${item.y}px)`,
            backgroundColor: "#faf8f5",
            zIndex: 10,
            visibility: "hidden",
          }}
        >
          <div className="text-xs font-mono font-semibold text-gray-600">{item.label}</div>
          <div className="text-xs text-red-400 italic">{item.sub}</div>
        </div>
      ))}

      {/* IaC overlay — Terraform template, slides in during Phase 2 */}
      <div
        data-iac-overlay
        className="absolute rounded-lg border-2 border-dashed border-green-600 px-4 py-3"
        style={{
          width: 220,
          left: `calc(${leftX} - 110px)`,
          top: `calc(${centerY} - 100px)`,
          height: 200,
          backgroundColor: "rgba(74, 124, 89, 0.06)",
          zIndex: 20,
          visibility: "hidden",
        }}
      >
        <div className="text-xs font-mono text-green-700 leading-relaxed">
          <div className="opacity-60">{"# infrastructure.tf"}</div>
          <div>{"resource \"env\" {"}</div>
          <div className="pl-3">{"version_control = true"}</div>
          <div className="pl-3">{"audit_trail     = true"}</div>
          <div className="pl-3">{"reproducible    = true"}</div>
          <div>{"}"}</div>
        </div>
      </div>

      {/* IaC-managed cards — replace adhoc cards in Phase 2 */}
      {iacStack.map((item, i) => {
        const stackY = -((iacStack.length - 1) * (CARD_H + STACK_GAP)) / 2 + i * (CARD_H + STACK_GAP);
        return (
          <div
            key={item.label}
            data-iac={i}
            className="absolute rounded-lg border-2 border-green-600 px-3 py-2"
            style={{
              width: CARD_W,
              height: CARD_H,
              left: `calc(${leftX} - ${CARD_W / 2}px)`,
              top: `calc(${centerY} + ${stackY}px)`,
              backgroundColor: "#dce8df",
              zIndex: 15,
              visibility: "hidden",
            }}
          >
            <div className="text-xs font-mono font-semibold text-green-800">{item.label}</div>
            <div className="text-xs text-green-600">{item.version} &middot; {item.env}</div>
          </div>
        );
      })}

      {/* Audit trail line — connects IaC stack, appears Phase 2 */}
      <div
        data-audit-trail
        className="absolute bg-green-500 rounded-full"
        style={{
          width: 3,
          height: iacStack.length * (CARD_H + STACK_GAP) - STACK_GAP,
          left: `calc(${leftX} - ${CARD_W / 2}px - 10px)`,
          top: `calc(${centerY} - ${((iacStack.length - 1) * (CARD_H + STACK_GAP)) / 2}px)`,
          transformOrigin: "top center",
          visibility: "hidden",
          zIndex: 14,
        }}
      />

      {/* Production lane — dashed outline, solidifies in Phase 3 */}
      <div
        data-prod-lane
        className="absolute rounded-xl border-2 border-dashed border-gray-300"
        style={{
          width: CARD_W + 32,
          height: iacStack.length * (CARD_H + STACK_GAP) + 40,
          left: `calc(${rightX} - ${(CARD_W + 32) / 2}px)`,
          top: `calc(${centerY} - ${((iacStack.length - 1) * (CARD_H + STACK_GAP)) / 2 + 20}px)`,
          backgroundColor: "rgba(74, 124, 89, 0.03)",
          visibility: "hidden",
          zIndex: 2,
        }}
      />

      {/* "?" placeholder — fills empty prod lane in Phase 1 */}
      <div
        data-label="empty"
        className="absolute text-4xl font-bold text-gray-300"
        style={{
          left: rightX,
          top: centerY,
          transform: "translate(-50%, -50%)",
          visibility: "hidden",
          zIndex: 3,
        }}
      >
        ?
      </div>

      {/* Production cards — appear in Phase 3 */}
      {prodItems.map((item, i) => {
        const stackY = -((prodItems.length - 1) * (CARD_H + STACK_GAP)) / 2 + i * (CARD_H + STACK_GAP);
        return (
          <div
            key={item.label}
            data-prod={i}
            className="absolute rounded-lg border-2 border-green-700 px-3 py-2"
            style={{
              width: CARD_W,
              height: CARD_H,
              left: `calc(${rightX} - ${CARD_W / 2}px)`,
              top: `calc(${centerY} + ${stackY}px)`,
              backgroundColor: "#4A7C59",
              zIndex: 15,
              visibility: "hidden",
            }}
          >
            <div className="text-xs font-mono font-bold text-white">{item.label}</div>
            <div className="text-xs text-green-200">{item.version} &middot; production</div>
          </div>
        );
      })}

      {/* Reproducible badge — pops in Phase 3 */}
      <div
        data-badge
        className="absolute rounded-full px-4 py-1.5 shadow-lg"
        style={{
          left: rightX,
          top: `calc(${centerY} + ${(prodItems.length * (CARD_H + STACK_GAP)) / 2 + 20}px)`,
          transform: "translateX(-50%)",
          backgroundColor: "#2C7C6F",
          color: "white",
          fontSize: 12,
          fontWeight: 700,
          visibility: "hidden",
          zIndex: 20,
        }}
      >
        Reproducible &middot; Auditable &middot; Version-Controlled
      </div>

      {/* Result label — Phase 4 */}
      <div
        data-label="result"
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{ bottom: "6%", visibility: "hidden", zIndex: 25 }}
      >
        <div className="text-2xl font-bold text-gray-800">
          Explore freely. Ship confidently.
        </div>
      </div>
    </div>
  );
}
