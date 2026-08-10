"use client";

import { useEffect, useRef } from "react";

const NS = "http://www.w3.org/2000/svg";
const INK = "#393b34";
const RUST = "#a55c36";
const AMBER = "#f8a825";
const OLIVE = "#8ea05c";

// The SVG is stretched with preserveAspectRatio=none, so the viewBox is a
// fixed coordinate space and anything that must stay round or square gets its
// geometry divided by the per-axis scale at runtime.
const VB_W = 1260;
const VB_H = 560;

// Clearance between section 02's subhead and the diagram's column labels.
const HEAD_GAP = 40;

const DENSITY = { Sparse: 0.6, Moderate: 1, Busy: 1.6 };
const FADED = "0.5";

// A module lights itself on hover; the back-propagation line belongs to both
// of its contributors.
const MODULES = {
  ingest: ["h-m-ingest", "h-t-ingest"],
  storage: ["h-m-storage", "h-t-storage"],
  analytics: ["h-m-analytics", "h-t-analytics", "h-backprop"],
  human: ["h-m-human", "h-t-human", "h-backprop"],
};
const ALL_GROUPS = [
  "h-m-ingest", "h-m-storage", "h-m-analytics", "h-m-human", "h-backprop",
  "h-t-ingest", "h-t-storage", "h-t-analytics", "h-t-human",
];
// Cursor x in viewBox space -> module. Resolved geometrically because the
// layer never takes pointer events (that would eat the scroll).
const ZONES = [
  ["ingest", 20, 322],
  ["storage", 322, 536],
  ["analytics", 536, 1096],
  ["human", 1096, 1280],
];

const HEADINGS = [
  { id: "h-t-ingest", left: "11.90%", label: "Ingestion" },
  { id: "h-t-storage", left: "32.54%", label: "Storage" },
  { id: "h-t-analytics", left: "63.25%", label: "Analytics and Intelligence" },
  { id: "h-t-human", left: "92.94%", label: "Human in the Loop" },
];

// Decorative point clouds in the human-in-the-loop panel.
const OLIVE_BRIGHT = [
  [1200.6, 153.3], [1195.7, 153.2], [1182.3, 150.9], [1200.7, 147.4],
  [1179.2, 145.0], [1182.6, 136.2], [1196.3, 148.4], [1207.4, 154.7],
  [1204.8, 134.9], [1188.7, 145.5], [1178.9, 140.6], [1208.1, 146.8],
  [1174.6, 135.9], [1176.4, 133.6], [1191.5, 147.8], [1187.7, 151.5],
  [1183.2, 151.0],
];
const RUST_CLOUD = [
  [1245.1, 136.1], [1246.5, 131.0], [1263.3, 132.5], [1239.5, 135.4],
  [1256.6, 135.8], [1273.0, 122.6], [1254.2, 148.1], [1254.4, 120.0],
  [1259.4, 127.4], [1249.6, 124.6], [1249.5, 127.9], [1237.2, 136.2],
  [1249.1, 142.2],
];
const INK_CLOUD = [
  [1208.0, 176.4], [1205.4, 179.8], [1214.6, 185.2], [1216.9, 193.2],
  [1184.2, 173.4], [1187.3, 186.8], [1202.2, 193.1], [1190.4, 196.9],
  [1181.0, 181.7], [1217.5, 190.4], [1193.5, 191.1], [1196.0, 179.0],
  [1226.1, 181.8], [1214.0, 194.0], [1199.1, 179.2],
];
const OLIVE_DIM = [
  [1255.8, 179.3], [1242.2, 175.4], [1239.5, 171.5], [1247.6, 178.7],
  [1245.4, 175.0], [1258.0, 167.5], [1243.4, 178.6], [1231.7, 167.5],
  [1255.4, 163.9],
];
const INK_FAINT = [
  [1231.2, 161.7], [1231.0, 160.3], [1207.0, 146.6],
  [1201.2, 126.9], [1238.4, 184.9], [1232.4, 136.6],
];

function Dots({ points, r, fill, opacity }) {
  return points.map(([cx, cy]) => (
    <ellipse
      key={`${cx}-${cy}`}
      data-fix="dot"
      data-r={r}
      cx={cx}
      cy={cy}
      rx={r}
      ry={r}
      fill={fill}
      fillOpacity={opacity}
    />
  ));
}

export default function DataPlatformDiagram({
  speed = 1,
  density = "Moderate",
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const g = (id) => root.querySelector(`#${id}`);
    const svg = g("h");
    if (!svg) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const k = DENSITY[density] ?? 1;
    const dots = [];
    const updaters = [];

    const hex = (h) => [
      parseInt(h.slice(1, 3), 16),
      parseInt(h.slice(3, 5), 16),
      parseInt(h.slice(5, 7), 16),
    ];
    const lerpHex = (a, b, t) => {
      const A = hex(a);
      const B = hex(b);
      return `rgb(${Math.round(A[0] + (B[0] - A[0]) * t)},${Math.round(
        A[1] + (B[1] - A[1]) * t,
      )},${Math.round(A[2] + (B[2] - A[2]) * t)})`;
    };
    const dot = (parent, r, fill, op) => {
      const c = document.createElementNS(NS, "ellipse");
      c.setAttribute("rx", r);
      c.setAttribute("ry", r);
      c.dataset.r = r;
      c.setAttribute("fill", fill);
      c.setAttribute("fill-opacity", op == null ? 1 : op);
      parent.appendChild(c);
      dots.push(c);
      return c;
    };
    const rescaleDots = () => {
      const rect = svg.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const sx = rect.width / VB_W;
      const sy = rect.height / VB_H;
      for (const d of dots) {
        const base = +d.dataset.r;
        d.setAttribute("rx", (base / sx).toFixed(3));
        d.setAttribute("ry", (base / sy).toFixed(3));
      }
      svg.querySelectorAll("[data-fix]").forEach((el) => {
        if (el.dataset.fix === "sq") {
          const w = +el.dataset.w / sx;
          const h = +el.dataset.h / sy;
          el.setAttribute("width", w.toFixed(2));
          el.setAttribute("height", h.toFixed(2));
          el.setAttribute("x", (+el.dataset.cx - w / 2).toFixed(2));
          el.setAttribute("y", (+el.dataset.cy - h / 2).toFixed(2));
        } else {
          const rr = +el.dataset.r;
          el.setAttribute("rx", (rr / sx).toFixed(3));
          el.setAttribute("ry", (rr / sy).toFixed(3));
        }
      });
    };

    // ---- particles along the feed, lane, and return paths ----
    const measure = (id) => {
      const el = g(id);
      return el ? { el, len: el.getTotalLength() } : null;
    };
    const feeds = ["h-f1", "h-f2", "h-f3"].map(measure).filter(Boolean);
    const lanes = ["h-l1", "h-l2", "h-l3", "h-l4", "h-l5"].map(measure).filter(Boolean);
    const rets = ["h-ret-p1", "h-ret-p2"].map(measure).filter(Boolean);
    const barEls = [0, 1, 2, 3, 4, 5, 6].map((i) => g(`h-bar${i}`)).filter(Boolean);
    const fill = barEls.map(() => 0.04);
    const pulse = barEls.map(() => 0);
    let bi = 0;
    const hit = () => {
      bi = (bi + 1) % barEls.length;
      pulse[bi] = 0.5;
      fill[bi] = Math.min(0.5, fill[bi] + 0.05);
    };

    const hIngest = g("h-parts-ingest");
    const hAnalytics = g("h-parts-analytics");
    const hRet = g("h-parts-ret");
    [hIngest, hAnalytics, hRet].forEach((n) => {
      if (n) n.innerHTML = "";
    });

    const parts = [];
    const nFeed = Math.max(2, Math.round(4 * k));
    const nLane = Math.max(2, Math.round(5 * k));
    const nRet = Math.max(2, Math.round(5 * k));
    feeds.forEach((p) => {
      for (let i = 0; i < nFeed; i++)
        parts.push({ p, t: i / nFeed + Math.random() * 0.05, sp: 0.15 + Math.random() * 0.07, kind: "feed", el: dot(hIngest, 2.8, RUST, 0.9) });
    });
    lanes.forEach((p) => {
      for (let i = 0; i < nLane; i++)
        parts.push({ p, t: Math.random(), sp: 0.1 + Math.random() * 0.06, kind: "lane", el: dot(hAnalytics, 2.6, AMBER, 0.95) });
    });
    rets.forEach((p) => {
      for (let i = 0; i < nRet; i++)
        parts.push({ p, t: i / nRet, sp: 0.07 + Math.random() * 0.03, kind: "ret", el: dot(hRet, 2.1, OLIVE, 0.7) });
    });

    // ---- ingestion: irregular arrival ticks drifting right to left, with
    // clusters and dead gaps, because batches never land on a metronome ----
    const ING_X0 = 20;
    const ING_X1 = 320;
    const ING_BASE = 538;
    const tickHost = g("h-ingticks");
    const ticks = [];
    if (tickHost) {
      tickHost.innerHTML = "";
      let cursor = ING_X0;
      while (cursor < ING_X1) {
        const burst = 1 + Math.floor(Math.random() * 4);
        for (let b = 0; b < burst && cursor < ING_X1; b++) {
          const big = Math.random() < 0.16;
          const el = document.createElementNS(NS, "line");
          el.setAttribute("stroke", big ? RUST : INK);
          el.setAttribute("stroke-opacity", big ? ".5" : ".34");
          el.setAttribute("stroke-width", "1.6");
          tickHost.appendChild(el);
          ticks.push({ el, x: cursor, h: (big ? 34 : 10) + Math.random() * 22 });
          cursor += 3 + Math.random() * 7;
        }
        cursor += 6 + Math.random() * 26;
      }
    }
    const stepTicks = (dt) => {
      let maxX = -Infinity;
      for (const t of ticks) if (t.x > maxX) maxX = t.x;
      for (const t of ticks) {
        t.x -= 16 * dt;
        if (t.x < ING_X0 - 4) {
          const big = Math.random() < 0.16;
          t.x = maxX + (Math.random() < 0.45 ? 3 + Math.random() * 7 : 10 + Math.random() * 28);
          maxX = t.x;
          t.h = (big ? 34 : 10) + Math.random() * 22;
          t.el.setAttribute("stroke", big ? RUST : INK);
          t.el.setAttribute("stroke-opacity", big ? ".5" : ".34");
        }
        t.el.setAttribute("x1", t.x.toFixed(1));
        t.el.setAttribute("x2", t.x.toFixed(1));
        t.el.setAttribute("y1", (ING_BASE - t.h).toFixed(1));
        t.el.setAttribute("y2", ING_BASE);
      }
    };

    // ---- storage: three tiers stacked from the baseline. Hot data lands on
    // top and is jittery, volume migrates down into warm then cold, and cold
    // sawtooths when it archives. ----
    const STO_X0 = 328;
    const STO_X1 = 532;
    const STO_BASE = 538;
    const STO_H = 62;
    const STO_N = 30;
    const storEls = { cold: g("h-stor-cold"), warm: g("h-stor-warm"), hot: g("h-stor-hot") };
    const mk = (v) => new Array(STO_N).fill(v);
    const sCold = mk(0.16);
    const sWarm = mk(0.14);
    const sHot = mk(0.1);
    let cold = 0.16;
    let warm = 0.14;
    let hot = 0.1;
    let storAcc = 0;
    const stepStorage = (dt) => {
      if (!storEls.cold) return;
      storAcc += dt;
      if (storAcc < 0.2) return;
      storAcc = 0;
      hot = Math.max(0.05, Math.min(0.22, hot + (Math.random() - 0.45) * 0.05));
      const toWarm = hot * 0.06;
      const toCold = warm * 0.035;
      warm = Math.min(0.3, warm + toWarm - toCold);
      cold = cold + toCold + 0.004;
      if (cold > 0.52) cold = 0.12; // archive sweep
      sCold.shift(); sCold.push(cold);
      sWarm.shift(); sWarm.push(warm);
      sHot.shift(); sHot.push(hot);
      const px = (i) => STO_X0 + ((STO_X1 - STO_X0) * i) / (STO_N - 1);
      const band = (lowArr, hiArr) => {
        let d = `M ${px(0).toFixed(1)} ${(STO_BASE - lowArr[0] * STO_H).toFixed(1)}`;
        for (let i = 1; i < STO_N; i++) d += ` L ${px(i).toFixed(1)} ${(STO_BASE - lowArr[i] * STO_H).toFixed(1)}`;
        for (let i = STO_N - 1; i >= 0; i--) d += ` L ${px(i).toFixed(1)} ${(STO_BASE - hiArr[i] * STO_H).toFixed(1)}`;
        return `${d} Z`;
      };
      const zero = mk(0);
      const lvl2 = sCold.map((v, i) => v + sWarm[i]);
      const lvl3 = lvl2.map((v, i) => v + sHot[i]);
      storEls.cold.setAttribute("d", band(zero, sCold));
      storEls.warm.setAttribute("d", band(sCold, lvl2));
      storEls.hot.setAttribute("d", band(lvl2, lvl3));
    };

    // ---- analytics logs: horizontal, right to left, one bar per lane so
    // lanes can never overlap ----
    const makeHLogScroll = (ids, x0, x1, minW, maxW, baseSpeed) => {
      const rows = ids.map(g).filter(Boolean).map((el, i) => ({
        el,
        x: +el.getAttribute("x"),
        w: +el.getAttribute("width"),
        speed: baseSpeed + i * (baseSpeed * 0.12),
      }));
      return (dt) => {
        for (const s of rows) {
          s.x -= s.speed * dt;
          if (s.x + s.w < x0) {
            s.w = minW + Math.random() * (maxW - minW);
            s.x = x1;
            s.el.setAttribute("width", s.w.toFixed(1));
          }
          s.el.setAttribute("x", s.x.toFixed(1));
        }
      };
    };
    const stepAnLogs = makeHLogScroll(
      ["h-log-0", "h-log-1", "h-log-2", "h-log-3", "h-log-4", "h-log-5", "h-log-6", "h-log-7"],
      540, 1094, 60, 300, 40,
    );

    // ---- human logs: vertical, bottom to top; a shared speed plus a fixed
    // phase offset means rows never cross ----
    const hashRand = (seed) => {
      const x = Math.sin(seed * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };
    const makeVLogScroll = (ids, yTop, yBottom, minW, maxW, baseSpeed) => {
      const rows = ids.map(g).filter(Boolean);
      const n = rows.length;
      const span = yBottom - yTop;
      const spacing = span / n;
      const wrapped = rows.map(() => -1);
      let pos = 0;
      return (dt) => {
        pos += baseSpeed * dt;
        rows.forEach((el, i) => {
          const raw = pos + i * spacing;
          const phase = ((raw % span) + span) % span;
          const wrapIdx = Math.floor(raw / span);
          if (wrapIdx !== wrapped[i]) {
            wrapped[i] = wrapIdx;
            el.setAttribute("width", (minW + hashRand(wrapIdx * 17 + i * 31) * (maxW - minW)).toFixed(1));
          }
          el.setAttribute("y", (yBottom - phase).toFixed(2));
        });
      };
    };
    const stepHumanLogs = makeVLogScroll(
      ["h-alog-0", "h-alog-1", "h-alog-2", "h-alog-3", "h-alog-4", "h-alog-5", "h-alog-6", "h-alog-7"],
      474, 534, 20, 100, 12,
    );

    updaters.push((dt) => {
      for (const q of parts) {
        q.t += q.sp * dt;
        if (q.t >= 1) {
          q.t -= 1;
          if (q.kind === "feed" || q.kind === "ret") hit();
        }
        const pt = q.p.el.getPointAtLength(q.t * q.p.len);
        q.el.setAttribute("cx", pt.x.toFixed(2));
        q.el.setAttribute("cy", pt.y.toFixed(2));
        if (q.kind === "lane") {
          q.el.setAttribute("fill", lerpHex(AMBER, OLIVE, Math.min(1, q.t * 1.5)));
        }
      }
      for (let i = 0; i < barEls.length; i++) {
        pulse[i] *= Math.exp(-3.2 * dt);
        fill[i] = Math.max(0.04, fill[i] - 0.012 * dt);
        barEls[i].setAttribute("fill-opacity", (0.09 + fill[i] + pulse[i]).toFixed(3));
      }
      stepTicks(dt);
      stepStorage(dt);
      stepAnLogs(dt);
      stepHumanLogs(dt);
    });

    rescaleDots();
    // Warm the simulation up so the first painted frame is mid-flow, not empty.
    const t0 = performance.now();
    for (let i = 0; i < 150; i++) for (const u of updaters) { try { u(1 / 30, t0 + i * 33); } catch { /* keep warming */ } }

    // ---- hover highlighting ----
    const setHover = (key) => {
      ALL_GROUPS.forEach((id) => {
        const n = g(id);
        if (n) n.style.opacity = FADED;
      });
      if (key && MODULES[key])
        MODULES[key].forEach((id) => {
          const n = g(id);
          if (n) n.style.opacity = "1";
        });
    };

    let hoverKey = null;
    let live = false;
    const onMove = (e) => {
      if (!live) return;
      const rect = svg.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        if (hoverKey) { hoverKey = null; setHover(null); }
        return;
      }
      const vx = 20 + ((e.clientX - rect.left) / rect.width) * VB_W;
      const zone = ZONES.find((q) => vx >= q[1] && vx < q[2]);
      const key = zone ? zone[0] : null;
      if (key !== hoverKey) { hoverKey = key; setHover(key); }
    };
    window.addEventListener("mousemove", onMove, true);

    // ---- scroll coupling: the diagram is a fixed background layer parked
    // where section 2's chart row sits, so it never moves between screens.
    // Only its opacity, offset, and hit-testing change. ----
    const layer = root;
    const scroller = document.getElementById("bh-scroller");
    const head = document.getElementById("sec2-head");
    let dyHome = 0;
    const place = () => {
      // Must match the snap sections' md:pt-[104px] in app/page.js, not the
      // 72px nav — the head starts below that padding, and using the nav
      // height instead rides the column labels up into the subhead.
      const topPad = 104;
      const headH = head ? head.getBoundingClientRect().height : 0;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const w = Math.min(1280, vw);
      layer.style.left = `${Math.max(0, (vw - w) / 2)}px`;
      layer.style.width = `${w}px`;
      // The layer used to butt straight up against the subhead, leaving the
      // column labels ~19px under it — close enough to read as another line of
      // that paragraph. The gap comes out of the height, so the diagram scales
      // down to fit rather than pushing past the section.
      const top = topPad + headH + HEAD_GAP;
      const h = Math.max(160, vh - top);
      layer.style.top = `${top}px`;
      layer.style.height = `${h}px`;
      // Section 1 parks it centred in the viewport; section 2 is its rest.
      dyHome = (vh - h) / 2 - top;
    };
    const onScroll = () => {
      if (!scroller) return;
      const p = scroller.clientHeight ? scroller.scrollTop / scroller.clientHeight : 0;
      const op = p <= 1 ? 0.34 + 0.66 * Math.max(0, p) : Math.max(0, 1 - (p - 1) * 1.6);
      layer.style.opacity = op.toFixed(3);
      const t = Math.max(0, Math.min(1, p));
      const ease = t * t * (3 - 2 * t);
      layer.style.transform = `translateY(${(dyHome * (1 - ease)).toFixed(1)}px)`;
      // Storage reads far heavier than the rest, so hold it back until page 2.
      const stor = g("h-m-storage");
      const nowLive = p > 0.8 && p < 1.2;
      if (nowLive !== live) {
        live = nowLive;
        if (!live) { hoverKey = null; setHover(null); }
      }
      if (!live && stor) stor.style.opacity = (0.16 + 0.34 * ease).toFixed(3);
    };
    place();
    onScroll();
    if (scroller) scroller.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => { place(); onScroll(); rescaleDots(); });
    ro.observe(svg);
    if (scroller) ro.observe(scroller);
    if (head) ro.observe(head);

    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = (Math.min(60, now - last) / 1000) * (reduced ? 0 : speed);
      last = now;
      for (const u of updaters) { try { u(dt, now); } catch { /* one bad frame shouldn't kill the loop */ } }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove, true);
      if (scroller) scroller.removeEventListener("scroll", onScroll);
    };
  }, [speed, density]);

  return (
    <div
      ref={rootRef}
      id="bg-layer"
      aria-hidden="true"
      className="fixed left-0 top-[220px] w-full h-[60vh] z-[1] opacity-[.18] pointer-events-none px-5 md:px-12 py-3 box-border transition-opacity duration-300"
    >
      <div className="relative w-full h-full">
        {/* The four labels are absolutely positioned by percentage and can't
            wrap, so they collide well before phone widths. The diagram itself
            is decorative, so it stretches down there unlabelled. */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-[2]">
          {HEADINGS.map((h) => (
            <div
              key={h.id}
              id={h.id}
              style={{ left: h.left }}
              className="absolute top-[1.2%] -translate-x-1/2 whitespace-nowrap font-mono font-medium text-xs leading-none tracking-[1.8px] uppercase text-ink opacity-50 transition-opacity duration-300"
            >
              {h.label}
            </div>
          ))}
        </div>

        <svg
          id="h"
          viewBox="20 0 1260 560"
          preserveAspectRatio="none"
          className="w-full h-full block"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="h-ingtick-clip"><rect x="20" y="468" width="300" height="70" /></clipPath>
            <clipPath id="h-stor-clip"><rect x="328" y="468" width="204" height="70" /></clipPath>
            <clipPath id="h-anlog-clip"><rect x="540" y="470" width="554" height="64" /></clipPath>
            <clipPath id="h-hlog-clip"><rect x="1102" y="470" width="178" height="68" /></clipPath>
          </defs>

          <g id="h-m-ingest" className="opacity-50 transition-opacity duration-300">
            {[120, 220, 320].map((cy) => (
              <rect key={cy} data-fix="sq" data-cx="29" data-cy={cy} data-w="10" data-h="10" x="20" y={cy - 5} width="10" height="10" fill={RUST} />
            ))}
            <path id="h-f1" d="M 44 120 C 150 120 220 175 328 218" fill="none" stroke={INK} strokeOpacity=".3" strokeWidth="1" />
            <path id="h-f2" d="M 44 220 H 328" fill="none" stroke={INK} strokeOpacity=".3" strokeWidth="1" />
            <path id="h-f3" d="M 44 320 C 150 320 220 265 328 222" fill="none" stroke={INK} strokeOpacity=".3" strokeWidth="1" />
            <g id="h-parts-ingest" />
            <line x1="20" y1="460" x2="320" y2="460" stroke={INK} strokeOpacity=".28" strokeWidth="1" />
            <g id="h-ingticks" clipPath="url(#h-ingtick-clip)" />
          </g>

          <g id="h-m-storage" className="opacity-50 transition-opacity duration-300">
            <rect x="328" y="131" width="204" height="178" fill="none" stroke={INK} strokeOpacity=".38" strokeWidth="1" />
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <rect key={i} id={`h-bar${i}`} x="336" y={139 + i * 24} width="188" height="18" fill={INK} fillOpacity=".1" />
            ))}
            <line x1="328" y1="460" x2="532" y2="460" stroke={INK} strokeOpacity=".28" strokeWidth="1" />
            <g clipPath="url(#h-stor-clip)">
              <path id="h-stor-cold" d="" fill={INK} fillOpacity=".16" />
              <path id="h-stor-warm" d="" fill={OLIVE} fillOpacity=".3" />
              <path id="h-stor-hot" d="" fill={RUST} fillOpacity=".4" />
            </g>
          </g>

          <g id="h-m-analytics" className="opacity-50 transition-opacity duration-300">
            <path id="h-l1" d="M 532 220 C 570 220 574 100 612 100 H 1020" fill="none" stroke={INK} strokeOpacity=".3" strokeWidth="1" />
            <path id="h-l2" d="M 532 220 C 570 220 574 160 612 160 H 1020" fill="none" stroke={INK} strokeOpacity=".3" strokeWidth="1" />
            <path id="h-l3" d="M 532 220 H 1020" fill="none" stroke={INK} strokeOpacity=".3" strokeWidth="1" />
            <path id="h-l4" d="M 532 220 C 570 220 574 280 612 280 H 1020" fill="none" stroke={INK} strokeOpacity=".3" strokeWidth="1" />
            <path id="h-l5" d="M 532 220 C 570 220 574 340 612 340 H 1020" fill="none" stroke={INK} strokeOpacity=".3" strokeWidth="1" />
            <g stroke={INK} strokeOpacity=".18" strokeWidth="9" strokeDasharray="1.5 78">
              {[100, 160, 220, 280, 340].map((y) => (
                <line key={y} x1="634" y1={y} x2="1014" y2={y} />
              ))}
            </g>
            <g id="h-parts-analytics" />
            <line x1="540" y1="460" x2="1094" y2="460" stroke={INK} strokeOpacity=".28" strokeWidth="1" />
            <g clipPath="url(#h-anlog-clip)">
              {[
                [560, 475, 120, RUST, ".38"], [760, 482, 200, INK, ".18"],
                [650, 489, 90, OLIVE, ".3"], [880, 496, 150, INK, ".16"],
                [600, 503, 240, RUST, ".3"], [960, 510, 110, OLIVE, ".26"],
                [700, 517, 180, INK, ".2"], [820, 524, 70, OLIVE, ".3"],
              ].map(([x, y, w, c, o], i) => (
                <rect key={i} id={`h-log-${i}`} x={x} y={y} width={w} height="2.6" fill={c} fillOpacity={o} />
              ))}
            </g>
          </g>

          <g id="h-m-human" className="opacity-50 transition-opacity duration-300">
            <rect x="1102" y="95" width="178" height="120" fill="none" stroke={INK} strokeOpacity=".38" strokeWidth="1" />
            <rect x="1102" y="95" width="178" height="18" fill={INK} fillOpacity=".16" />
            <Dots points={[[1112, 104], [1121, 104], [1130, 104]]} r={2.3} fill={INK} opacity=".34" />
            <line x1="1158" y1="120" x2="1158" y2="208" stroke={INK} strokeOpacity=".16" strokeWidth="1" />
            <rect x="1112" y="123" width="38" height="5" fill={INK} fillOpacity=".22" />
            <rect x="1112" y="134" width="30" height="4" fill={INK} fillOpacity=".13" />
            <rect x="1112" y="143" width="36" height="4" fill={INK} fillOpacity=".13" />
            <rect x="1112" y="152" width="24" height="4" fill={INK} fillOpacity=".13" />
            <rect x="1112" y="167" width="34" height="4" fill={OLIVE} fillOpacity=".4" />
            <rect x="1112" y="176" width="28" height="4" fill={RUST} fillOpacity=".38" />
            <rect x="1112" y="185" width="32" height="4" fill={INK} fillOpacity=".22" />
            <rect x="1112" y="194" width="22" height="4" fill={OLIVE} fillOpacity=".28" />
            <Dots points={OLIVE_BRIGHT} r={1.7} fill={OLIVE} opacity=".55" />
            <Dots points={RUST_CLOUD} r={1.7} fill={RUST} opacity=".5" />
            <Dots points={INK_CLOUD} r={1.7} fill={INK} opacity=".34" />
            <Dots points={OLIVE_DIM} r={1.7} fill={OLIVE} opacity=".34" />
            <Dots points={INK_FAINT} r={1.4} fill={INK} opacity=".2" />
            <line x1="1191" y1="215" x2="1191" y2="235" stroke={INK} strokeOpacity=".22" strokeWidth="1" strokeDasharray="2 4" />
            <rect x="1102" y="235" width="178" height="120" fill="none" stroke={INK} strokeOpacity=".38" strokeWidth="1" />
            <rect x="1102" y="235" width="178" height="18" fill={INK} fillOpacity=".16" />
            <rect x="1116" y="300" width="18" height="40" fill={INK} fillOpacity=".18" />
            <rect x="1146" y="278" width="18" height="62" fill={INK} fillOpacity=".2" />
            <rect x="1176" y="312" width="18" height="28" fill={INK} fillOpacity=".18" />
            <rect x="1206" y="265" width="18" height="75" fill={OLIVE} fillOpacity=".4" />
            <rect x="1236" y="290" width="18" height="50" fill={INK} fillOpacity=".2" />
            <line x1="1102" y1="460" x2="1280" y2="460" stroke={INK} strokeOpacity=".28" strokeWidth="1" />
            <g clipPath="url(#h-hlog-clip)">
              {[
                [474, 55, RUST, ".4"], [482, 80, INK, ".18"],
                [490, 35, OLIVE, ".32"], [497, 65, INK, ".16"],
                [505, 45, RUST, ".3"], [512, 70, OLIVE, ".28"],
                [520, 30, INK, ".2"], [527, 60, OLIVE, ".3"],
              ].map(([y, w, c, o], i) => (
                <rect key={i} id={`h-alog-${i}`} x="1108" y={y} width={w} height="3" fill={c} fillOpacity={o} />
              ))}
            </g>
          </g>

          <g id="h-backprop" className="opacity-50 transition-opacity duration-300">
            <path id="h-ret-p1" d="M 1020 340 C 1058 362 1058 398 1020 420 H 470 C 430 420 424 392 430 311" fill="none" stroke={OLIVE} strokeOpacity=".45" strokeWidth="1" strokeDasharray="3 4" />
            <path id="h-ret-p2" d="M 1191 355 V 420 H 470 C 430 420 424 392 430 311" fill="none" stroke={OLIVE} strokeOpacity=".45" strokeWidth="1" strokeDasharray="3 4" />
            <g id="h-parts-ret" />
          </g>
        </svg>
      </div>
    </div>
  );
}
