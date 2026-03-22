"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/*
 * Scene 1: "Turn Data Into Discovery Velocity"
 * Layout: side-by-side on desktop (animation left, text right)
 *
 * Layers:
 *   Background (z-0): animation elements (data sources, warehouse, glass pane, insights)
 *   Foreground (z-10): heading + body text, pointer-events-none so animation is unblocked
 *
 * Timeline (scroll 0% → 100%):
 *   Text:    heading at 0%, body paragraphs at configured visibleAt values
 *   Phase 1: (0.00–0.35) Data sources appear scattered, then converge toward center
 *   Phase 2: (0.35–0.55) Sources shrink into warehouse, warehouse pulses
 *   Phase 3: (0.55–0.75) Glass pane slides up over warehouse
 *   Phase 4: (0.70–1.00) Insight blocks emerge outward from warehouse
 */

const dataSources = [
  { label: "ELN", sub: "Electronic Lab Notebook", color: "#6B8E7B", icon: "M4 6h16M4 10h16M4 14h10" },
  { label: "LIMS", sub: "Sample Management", color: "#C9A227", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2M7 7h10v10H7z" },
  { label: "In Vitro Assays", sub: "96-Well Plates", color: "#7B5EA7", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
  { label: "Sequencers", sub: "NGS Pipelines", color: "#2C5F7C", icon: "M3 4h18M3 8h12M3 12h18M3 16h8M3 20h14" },
  { label: "Compound Registry", sub: "Chemical Structures", color: "#9B4D4D", icon: "M12 3L4 9v12h16V9l-8-6zM8 13h8M8 17h5" },
];

const insights = [
  { label: "Cross-Functional Analysis", color: "#4A7C59" },
  { label: "Predictive Correlations", color: "#6B5B8D" },
  { label: "Faster Decisions", color: "#2C7C6F" },
];

// Anchor point for the animation cluster (warehouse + sources + insights)
const CENTER_X = "30%";
const CENTER_Y = "46%";

const startPositions = [
  { x: -340, y: -180 },
  { x: 300, y: -160 },
  { x: -300, y: 160 },
  { x: 320, y: 140 },
  { x: -80, y: -240 },
];

export default function DiscoveryVelocity({ heading, body = [] }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const triggerEl = containerRef.current.closest("[id='discovery-velocity']");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // ── Text ──
      tl.to("[data-text='heading']", { opacity: 1, duration: 0.06, ease: "power2.out" }, 0);
      body.forEach((paragraph, i) => {
        tl.to(`[data-text-index='${i}']`, { opacity: 1, duration: 0.08, ease: "power2.out" }, paragraph.visibleAt);
      });

      // ── Phase 1 (0.00–0.35): Data sources scatter in and converge ──

      // Sources appear at scattered positions, semi-transparent
      dataSources.forEach((_, i) => {
        tl.fromTo(`[data-source='${i}']`, {
          opacity: 0,
          scale: 0.6,
          xPercent: -50,
          yPercent: -50,
          x: startPositions[i].x,
          y: startPositions[i].y,
        }, {
          opacity: 0.5,
          scale: 1,
          duration: 0.15,
          ease: "power2.out",
        }, i * 0.02);
      });

      // Sources converge into a vertical stack and brighten to full opacity
      const STACK_SPACING = 70;
      const STACK_TOP = -((dataSources.length - 1) * STACK_SPACING) / 2;
      dataSources.forEach((_, i) => {
        tl.to(`[data-source='${i}']`, {
          x: 0,
          y: STACK_TOP + i * STACK_SPACING,
          opacity: 1,
          xPercent: -50,
          yPercent: -50,
          duration: 0.2,
          ease: "power2.in",
        }, 0.15);
      });

      // ── Phase 2 (0.35–0.55): Sources absorbed into warehouse ──

      // Stacked sources shrink and fade into warehouse
      tl.to(
        ".data-source",
        { opacity: 0, scale: 0.2, x: 0, y: 0, xPercent: -50, yPercent: -50, duration: 0.15, stagger: 0.01, ease: "power3.in" },
        0.35
      );

      // Warehouse pulses on absorb
      tl.fromTo(
        ".warehouse",
        { scale: 1, boxShadow: "0 0 0px rgba(74,124,89,0)" },
        { scale: 1.08, boxShadow: "0 0 40px rgba(74,124,89,0.4)", duration: 0.1, ease: "power2.out" },
        0.4
      );

      // Warehouse settles
      tl.to(
        ".warehouse",
        { scale: 1, boxShadow: "0 0 0px rgba(74,124,89,0)", duration: 0.1, ease: "power2.in" },
        0.5
      );

      // ── Phase 3 (0.55–0.75): Glass pane overlay ──

      // Glass pane slides up over warehouse
      tl.fromTo(
        ".glass-pane",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
        0.55
      );

      // ── Phase 4 (0.70–1.00): Insights emerge ──

      // Insight blocks pop out from warehouse
      tl.fromTo(
        ".insight",
        { opacity: 0, scale: 0.5, y: 0 },
        { opacity: 1, scale: 1, y: 0, duration: 0.15, stagger: 0.03, ease: "power2.out" },
        0.7
      );

      // Insights spread outward horizontally
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
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* ── Background layer: animation ── */}
      <div data-layer="background" className="absolute inset-0">
        {/* Data source blocks — start scattered, converge in Phase 1 */}
        {dataSources.map((source, i) => (
          <div
            key={source.label}
            data-source={i}
            className="data-source absolute flex items-start gap-3 rounded-xl px-4 py-3 text-white shadow-lg whitespace-nowrap"
            style={{
              backgroundColor: source.color,
              left: CENTER_X,
              top: CENTER_Y,
              zIndex: 1,
              minWidth: 160,
              border: `1px solid rgba(255,255,255,0.15)`,
            }}
          >
            <div
              className="flex-shrink-0 rounded-lg flex items-center justify-center"
              style={{
                width: 32,
                height: 32,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={source.icon} />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm leading-tight">{source.label}</span>
              <span className="text-xs opacity-70 font-normal">{source.sub}</span>
            </div>
          </div>
        ))}

        {/* Central warehouse — absorbs sources in Phase 2 */}
        <div
          className="warehouse absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-3xl border-2 border-gray-300"
          style={{
            left: CENTER_X,
            top: CENTER_Y,
            width: 400,
            height: 400,
            backgroundColor: "#f5f0eb",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          }}
        >
          <div className="text-center">
            <svg width="260" height="260" viewBox="0 0 100 100" className="mx-auto mb-3" fill="none">
              {/* Outer hexagonal frame — nods to Snowflake/modern data platform aesthetic */}
              <polygon
                points="50,4 90,27 90,73 50,96 10,73 10,27"
                fill="#f5f0eb"
                stroke="#4A7C59"
                strokeWidth="2"
              />

              {/* Inner glow ring */}
              <polygon
                points="50,14 80,32 80,68 50,86 20,68 20,32"
                fill="none"
                stroke="#4A7C59"
                strokeWidth="1"
                opacity="0.2"
              />

              {/* Three stacked data layers — the warehouse tiers */}
              <rect x="30" y="30" width="40" height="8" rx="2" fill="#4A7C59" opacity="0.15" stroke="#4A7C59" strokeWidth="1" />
              <rect x="30" y="42" width="40" height="8" rx="2" fill="#4A7C59" opacity="0.25" stroke="#4A7C59" strokeWidth="1" />
              <rect x="30" y="54" width="40" height="8" rx="2" fill="#4A7C59" opacity="0.4" stroke="#4A7C59" strokeWidth="1" />

              {/* Data flow lines between tiers */}
              <line x1="40" y1="38" x2="40" y2="42" stroke="#4A7C59" strokeWidth="1" opacity="0.4" />
              <line x1="50" y1="38" x2="50" y2="42" stroke="#4A7C59" strokeWidth="1" opacity="0.4" />
              <line x1="60" y1="38" x2="60" y2="42" stroke="#4A7C59" strokeWidth="1" opacity="0.4" />
              <line x1="40" y1="50" x2="40" y2="54" stroke="#4A7C59" strokeWidth="1" opacity="0.4" />
              <line x1="50" y1="50" x2="50" y2="54" stroke="#4A7C59" strokeWidth="1" opacity="0.4" />
              <line x1="60" y1="50" x2="60" y2="54" stroke="#4A7C59" strokeWidth="1" opacity="0.4" />

              {/* Data rows inside each tier */}
              <rect x="33" y="32" width="12" height="2" rx="1" fill="#4A7C59" opacity="0.35" />
              <rect x="48" y="32" width="8" height="2" rx="1" fill="#4A7C59" opacity="0.2" />
              <rect x="33" y="44" width="18" height="2" rx="1" fill="#4A7C59" opacity="0.4" />
              <rect x="54" y="44" width="6" height="2" rx="1" fill="#4A7C59" opacity="0.25" />
              <rect x="33" y="56" width="10" height="2" rx="1" fill="#4A7C59" opacity="0.5" />
              <rect x="46" y="56" width="14" height="2" rx="1" fill="#4A7C59" opacity="0.35" />

              {/* Central node — convergence point */}
              <circle cx="50" cy="72" r="5" fill="#4A7C59" opacity="0.6" />
              <circle cx="50" cy="72" r="8" fill="none" stroke="#4A7C59" strokeWidth="1" opacity="0.25" />

              {/* Flow lines from bottom tier to convergence node */}
              <line x1="42" y1="62" x2="46" y2="67" stroke="#4A7C59" strokeWidth="1" opacity="0.3" />
              <line x1="50" y1="62" x2="50" y2="67" stroke="#4A7C59" strokeWidth="1" opacity="0.3" />
              <line x1="58" y1="62" x2="54" y2="67" stroke="#4A7C59" strokeWidth="1" opacity="0.3" />

              {/* Subtle corner accents — premium feel */}
              <circle cx="50" cy="4" r="2" fill="#4A7C59" opacity="0.3" />
              <circle cx="90" cy="27" r="2" fill="#4A7C59" opacity="0.3" />
              <circle cx="90" cy="73" r="2" fill="#4A7C59" opacity="0.3" />
              <circle cx="50" cy="96" r="2" fill="#4A7C59" opacity="0.3" />
              <circle cx="10" cy="73" r="2" fill="#4A7C59" opacity="0.3" />
              <circle cx="10" cy="27" r="2" fill="#4A7C59" opacity="0.3" />
            </svg>
            <span className="text-base font-semibold text-gray-500 tracking-wide">Data Warehouse</span>
          </div>
        </div>

        {/* Glass pane — slides over warehouse in Phase 3 */}
        <div
          className="glass-pane absolute -translate-x-1/2 -translate-y-1/2 rounded-3xl opacity-0"
          style={{
            left: CENTER_X,
            top: CENTER_Y,
            width: 420,
            height: 420,
            background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.4)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            zIndex: 2,
          }}
        />

        {/* Insight blocks — emerge from warehouse in Phase 4 */}
        {insights.map((insight) => (
          <div
            key={insight.label}
            className="insight absolute -translate-x-1/2 flex items-center justify-center rounded-lg px-5 py-3 text-white font-semibold text-sm shadow-lg whitespace-nowrap opacity-0"
            style={{
              backgroundColor: insight.color,
              left: CENTER_X,
              top: `calc(${CENTER_Y} + 140px)`,
              zIndex: 3,
            }}
          >
            {insight.label}
          </div>
        ))}
      </div>

      {/* ── Foreground layer: text ── */}
      <div data-layer="foreground" className="relative z-10 pointer-events-none h-full">
        {/* Heading — full-width, centered at top */}
        <div className="w-full flex justify-center pt-10 px-8">
          <h2
            data-text="heading"
            className="text-3xl sm:text-4xl text-moss text-center"
            style={{ opacity: 0 }}
          >
            {heading}
          </h2>
        </div>

        {/* Body — right column, vertically centered */}
        <div className="flex flex-col lg:flex-row items-center h-full max-w-screen-xl mx-auto px-8 -mt-10">
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
