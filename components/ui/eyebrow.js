// Mono uppercase label above headings — the design's most repeated element.
// Tracking varies between .14em and .18em across pages; standardised on .18em
// and overridable via className where a line needs to sit tighter.
export default function Eyebrow({ tone = "rust", className = "", children }) {
  const color = tone === "olive" ? "text-olive" : "text-rust";
  return (
    <div
      className={`font-mono font-medium text-[11px] leading-none uppercase tracking-[.18em] ${color} ${className}`}
    >
      {children}
    </div>
  );
}
