"use client";

// The design's "start where it hurts" strip: each chip opens its capability
// and scrolls to it. Only this strip needs JS, so the page itself stays a
// server component and keeps its metadata export.
export default function PainChips({ chips }) {
  const jump = (id) => () => {
    const el = document.getElementById(id);
    if (!el) return;
    el.open = true;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-wrap gap-3">
      {chips.map((chip) => (
        <button
          key={chip.target}
          type="button"
          onClick={jump(chip.target)}
          className="font-plex text-[15px] leading-snug text-ink text-left bg-cream border border-ink/20 rounded-full px-5 py-2.5 hover:border-olive hover:bg-white transition"
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
