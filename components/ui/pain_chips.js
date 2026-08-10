"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

// The design's "start where it hurts" strip. Order is deliberately not the
// capability order — it leads with the pain we hear most.
export const CHIPS = [
  {
    label: "Our scientists are waiting on compute",
    target: "production-workflows",
  },
  { label: "Nobody knows what data we already have", target: "data-catalogs" },
  {
    label: "Every CRO sends data in a different shape",
    target: "data-ingestion",
  },
  {
    label: "Our tools do not match how we run experiments",
    target: "internal-lab-apps",
  },
  {
    label: "Getting data out means asking a person",
    target: "data-access-apis",
  },
  {
    label: "No one owns the architecture end to end",
    target: "data-architecture",
  },
  {
    label: "We cannot afford to replace what we have",
    target: "eln-lims-integration",
  },
];

// The router hooks don't expose the fragment, so read it directly. Starts
// empty so the server-rendered markup and the first client render agree.
function useHashTarget() {
  const [target, setTarget] = useState("");

  useEffect(() => {
    const read = () => setTarget(window.location.hash.slice(1));
    read();
    // Only fires for real hash navigations; Link uses pushState, which
    // doesn't, hence the click handler below.
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  return [target, setTarget];
}

export default function PainChips({ className = "" }) {
  const [active, setActive] = useHashTarget();

  // Already on /capabilities: no navigation happens, so open and scroll here
  // rather than waiting on a hashchange that pushState never fires. No delay
  // needed either — nothing is about to reset the scroll position.
  const handleClick = (target) => (event) => {
    const el = document.getElementById(target);
    if (!(el instanceof HTMLDetailsElement)) return;
    event.preventDefault();
    window.history.pushState(null, "", `/capabilities#${target}`);
    setActive(target);
    el.open = true;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {CHIPS.map((chip) => (
        <Link
          key={chip.target}
          href={`/capabilities#${chip.target}`}
          onClick={handleClick(chip.target)}
          aria-current={active === chip.target ? "true" : undefined}
          className={`font-plex text-[15px] leading-snug text-left rounded-full px-5 py-2.5 border transition ${
            active === chip.target
              ? "border-olive bg-white text-ink font-medium ring-1 ring-olive"
              : "border-ink/20 bg-cream text-ink hover:border-olive hover:bg-white"
          }`}
        >
          {chip.label}
        </Link>
      ))}
    </div>
  );
}

// Next scrolls the new route to the top after mount, which cancels a scroll
// started in the same tick — so let the route settle first. utils/scroll.js
// uses 300ms for the same reason.
const SCROLL_DELAY = 400;

// Plain <details> stays closed when you land on a fragment inside it in most
// browsers, so the chips need this on the receiving page. Handles the
// same-page case too, where only the hash changes and nothing remounts.
export function OpenHashDetails() {
  useEffect(() => {
    let timer;
    const open = () => {
      const el = document.getElementById(window.location.hash.slice(1));
      if (!(el instanceof HTMLDetailsElement)) return;
      el.open = true;
      clearTimeout(timer);
      timer = setTimeout(
        () => el.scrollIntoView({ behavior: "smooth" }),
        SCROLL_DELAY,
      );
    };
    open();
    window.addEventListener("hashchange", open);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", open);
    };
  }, []);

  return null;
}
