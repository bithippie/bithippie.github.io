import { test, expect } from "@playwright/test";

// Layout checks at the Tailwind breakpoint edges plus a phone and a wide desktop.
const WIDTHS = [375, 640, 768, 1024, 1280, 1920];
const PAGES = ["/", "/team"];

// Width of each rendered line of an element's text, in document order.
async function lineWidths(locator) {
  return locator.evaluate((el) => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const lines = new Map();
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (!node.textContent.trim()) continue;
      const range = document.createRange();
      range.selectNodeContents(node);
      for (const r of range.getClientRects()) {
        if (r.width === 0) continue;
        const key = Math.round(r.top);
        const line = lines.get(key) || { left: r.left, right: r.right };
        line.left = Math.min(line.left, r.left);
        line.right = Math.max(line.right, r.right);
        lines.set(key, line);
      }
    }
    return [...lines.entries()].sort((a, b) => a[0] - b[0]).map(([, l]) => l.right - l.left);
  });
}

for (const path of PAGES) {
  for (const width of WIDTHS) {
    test(`${path} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: width < 700 ? 844 : 900 });
      await page.goto(path, { waitUntil: "networkidle" });

      // No horizontal scroll.
      const scroll = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scroll.scrollWidth, "page scrolls horizontally").toBe(scroll.clientWidth);

      // Nothing in <main> pokes past the viewport, unless an ancestor clips it.
      const overflowing = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const clipped = (el) => {
          for (let a = el.parentElement; a; a = a.parentElement) {
            if (getComputedStyle(a).overflowX !== "visible") return true;
          }
          return false;
        };
        return [...document.querySelectorAll("main *")]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && (r.right > vw + 1 || r.left < -1) && !clipped(el);
          })
          .map((el) => `${el.tagName.toLowerCase()}.${el.className?.toString().split(" ").slice(0, 3).join(".")}`);
      });
      expect(overflowing, "elements overflow the viewport").toEqual([]);

      // The desktop nav, when shown, sits beside the logo rather than under it.
      const desktopNav = page.locator("nav ul").last();
      if (await desktopNav.isVisible()) {
        const [nav, logo] = await Promise.all([
          desktopNav.boundingBox(),
          page.locator("nav img").boundingBox(),
        ]);
        expect(nav.y, "nav wrapped below the logo").toBeLessThan(logo.y + logo.height);
      }

      // Multi-line headings keep their last line at least 40% as wide as
      // their widest line, so no heading ends in a stranded short word.
      const headings = page.locator("main :is(h1, h2, h3)");
      for (let i = 0; i < (await headings.count()); i++) {
        const h = headings.nth(i);
        const widths = await lineWidths(h);
        if (widths.length < 2) continue;
        const ratio = widths[widths.length - 1] / Math.max(...widths);
        expect(ratio, `"${(await h.innerText()).slice(0, 40)}" ends in a short line (${widths.map(Math.round).join("/")})`).toBeGreaterThanOrEqual(0.4);
      }
    });
  }
}
