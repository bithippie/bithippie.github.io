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
 *   Background (z-0): animation elements (data sources, warehouse, insights)
 *   Foreground (z-10): heading + body text, pointer-events-none so animation is unblocked
 *
 * Timeline (scroll 0% → 100%):
 *   Text:    heading at 0%, body paragraphs at configured visibleAt values
 *   Phase 1: (0.00–0.35) Data sources appear scattered, then converge toward center
 *   Phase 2: (0.35–0.55) Sources shrink into warehouse, warehouse pulses
 *   Phase 3: (0.55–0.75) Warehouse fades back as insights prepare to emerge
 *   Phase 4: (0.70–1.00) Insight blocks grow and stack vertically inside warehouse
 */

const dataSources = [
  { label: "ELN", sub: "Electronic Lab Notebook", color: "#6B8E7B", icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" },
  { label: "LIMS", sub: "Sample Management", color: "#C9A227", icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.169.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" },
  { label: "In Vitro Assays", sub: "96-Well Plates", color: "#7B5EA7", icon: "M3 3h5v5H3zM9.5 3h5v5h-5zM16 3h5v5h-5zM3 9.5h5v5H3zM9.5 9.5h5v5h-5zM16 9.5h5v5h-5z" },
  { label: "Sequencers", sub: "NGS Pipelines", color: "#2C5F7C", icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" },
  { label: "Compound Registry", sub: "Chemical Structures", color: "#9B4D4D", icon: "M12 2l9 5v10l-9 5-9-5V7l9-5zm0 0v20M3 7l9 5 9-5" },
];

const insights = [
  { label: "Cross-Functional Analysis", sub: "Wet Lab + Computational", color: "#4A7C59", icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" },
  { label: "Predictive Correlations", sub: "Assay to Model Feedback", color: "#6B5B8D", icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" },
  { label: "Faster Decisions", sub: "Real-Time Insights", color: "#2C7C6F", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

// Anchor point for the animation cluster (warehouse + sources + insights)
const CENTER_X = "30%";
const CENTER_Y = "50%";

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

      // ── Initial states (set once, outside timeline so reverse is always clean) ──
      dataSources.forEach((_, i) => {
        gsap.set(`[data-source='${i}']`, {
          opacity: 0, scale: 0.6, xPercent: -50, yPercent: -50,
          x: startPositions[i].x, y: startPositions[i].y,
        });
      });
      gsap.set(".warehouse", { scale: 1, opacity: 1, boxShadow: "0 0 0px rgba(74,124,89,0)" });
      gsap.set(".insight", { opacity: 0, scale: 0.5, xPercent: -50, yPercent: -50, x: 0, y: 0 });

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

      // Sources appear at their scattered positions (initial state already set above)
      dataSources.forEach((_, i) => {
        tl.to(`[data-source='${i}']`, {
          opacity: 0.5, scale: 1, duration: 0.15, ease: "power2.out",
        }, i * 0.02);
      });

      // Sources converge into a vertical stack and brighten
      const STACK_SPACING = 70;
      const STACK_TOP = -((dataSources.length - 1) * STACK_SPACING) / 2;
      dataSources.forEach((_, i) => {
        tl.to(`[data-source='${i}']`, {
          x: 0, y: STACK_TOP + i * STACK_SPACING,
          opacity: 1, xPercent: -50, yPercent: -50,
          duration: 0.2, ease: "power2.in",
        }, 0.15);
      });

      // ── Phase 2 (0.35–0.55): Sources absorbed into warehouse ──

      tl.to(
        ".data-source",
        { opacity: 0, scale: 0.2, x: 0, y: 0, xPercent: -50, yPercent: -50, duration: 0.15, stagger: 0.01, ease: "power3.in" },
        0.35
      );

      // Warehouse pulse (to only — initial state set above, no fromTo snap)
      tl.to(".warehouse", { scale: 1.08, boxShadow: "0 0 40px rgba(74,124,89,0.4)", duration: 0.1, ease: "power2.out" }, 0.4);
      tl.to(".warehouse", { scale: 1, boxShadow: "0 0 0px rgba(74,124,89,0)", duration: 0.1, ease: "power2.in" }, 0.5);

      // ── Phase 3 (0.55–0.70): Warehouse fades back ──

      tl.to(".warehouse", { opacity: 0.4, duration: 0.15, ease: "power2.out" }, 0.55);

      // ── Phase 4 (0.70–1.00): Insights emerge and stack ──

      // Insights are sized in JSX; use scale only (no width/height animation = no layout reflow)
      const INSIGHT_H = 96;
      const INSIGHT_GAP = 16;
      const STACK_OFFSET = INSIGHT_H + INSIGHT_GAP; // 112px between centers

      // Pop in at warehouse center — no overlap with stack tween below
      tl.to(".insight", {
        opacity: 1, scale: 1, duration: 0.1, ease: "power2.out",
      }, 0.70);

      // Stack vertically just outside the warehouse left edge
      // Warehouse is 400px wide (left edge at -200px from center); insights are 340px wide (radius 170px)
      // Center at -(200 + 170 + 10) = -380px puts right edge 10px clear of warehouse left edge
      const INSIGHT_REST_X = -60;
      tl.to(".insight", {
        x: INSIGHT_REST_X,
        y: (i) => (i - 1) * STACK_OFFSET,
        duration: 0.18, stagger: 0.02, ease: "power2.out",
      }, 0.82);
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

        {/* Insight blocks — emerge from warehouse in Phase 4 */}
        {insights.map((insight) => (
          <div
            key={insight.label}
            className="insight absolute flex items-start gap-3 rounded-xl px-4 py-3 text-white shadow-lg whitespace-nowrap opacity-0"
            style={{
              backgroundColor: insight.color,
              left: CENTER_X,
              top: CENTER_Y,
              zIndex: 3,
              width: 340,
              height: 96,
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <div
              className="flex-shrink-0 rounded-lg flex items-center justify-center"
              style={{ width: 32, height: 32, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={insight.icon} />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm leading-tight">{insight.label}</span>
              <span className="text-xs opacity-70 font-normal">{insight.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Foreground layer: text ── */}
      <div data-layer="foreground" className="absolute inset-0 z-10 pointer-events-none">
        {/* Heading — full-width, centered at top */}
        <div className="absolute top-0 left-0 right-0 flex justify-center pt-10 px-8">
          <h2
            data-text="heading"
            className="text-3xl sm:text-4xl text-moss text-center"
            style={{ opacity: 0 }}
          >
            {heading}
          </h2>
        </div>

        {/* Body — right column, truly vertically centered in full scene height */}
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
