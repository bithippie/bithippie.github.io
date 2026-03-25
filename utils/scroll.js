export function smoothScrollTo(targetY, duration = 800) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime = null;
  const ease = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  function step(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    window.scrollTo(0, startY + diff * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export function scrollToSection(hash) {
  const name = hash.replace("#", "");
  const el = document.querySelector(`a[name="${name}"]`);
  if (el) {
    smoothScrollTo(el.getBoundingClientRect().top + window.scrollY);
  }
}

// Navigates to dest (e.g. "/#schedule") and smooth-scrolls to its hash anchor.
// Delays scroll by 300ms when crossing pages (Next.js render time).
// Pass samePageDelay when the caller needs extra time before scrolling on the
// same page (e.g. waiting for a menu close animation).
export function navigateAndScroll(dest, { pathname, router, samePageDelay = 0 }) {
  const hash = dest.slice(dest.indexOf("#"));
  const destPathname = dest.split("#")[0] || "/";
  if (pathname === destPathname) {
    window.history.replaceState(null, "", dest);
    if (samePageDelay > 0) {
      setTimeout(() => scrollToSection(hash), samePageDelay);
    } else {
      scrollToSection(hash);
    }
  } else {
    router.push(dest, { scroll: false });
    setTimeout(() => scrollToSection(hash), 300);
  }
}
