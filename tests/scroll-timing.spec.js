import { test, expect } from "@playwright/test";

const DESKTOP = { width: 1280, height: 800 };
const MIN_SCROLL_DURATION_MS = 500;

// Measures how long a smooth scroll takes from the moment the nav link is
// clicked until scrollY stops changing. Returns duration in milliseconds.
async function measureScrollDuration(page) {
  // Inject a scroll-timing observer before clicking
  await page.evaluate(() => {
    window.__scrollStart = null;
    window.__scrollEnd = null;

    const onScroll = () => {
      const now = performance.now();
      if (window.__scrollStart === null) {
        window.__scrollStart = now;
      }
      window.__scrollEnd = now;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.__removeScrollListener = () =>
      window.removeEventListener("scroll", onScroll);
  });

  // Click the nav link
  await page
    .locator("ul a")
    .filter({ hasText: "Schedule" })
    .filter({ visible: true })
    .click();

  // Wait for scroll to begin
  await page.waitForFunction(() => window.__scrollStart !== null, {
    timeout: 5000,
  });

  // Wait for scroll to stop changing (150ms stable sample)
  await page.waitForFunction(
    () =>
      new Promise((resolve) => {
        let last = window.__scrollEnd;
        const check = setInterval(() => {
          if (window.__scrollEnd === last) {
            clearInterval(check);
            resolve(true);
          }
          last = window.__scrollEnd;
        }, 150);
        setTimeout(() => {
          clearInterval(check);
          resolve(true);
        }, 8000);
      }),
    { timeout: 10000 },
  );

  const duration = await page.evaluate(() => {
    window.__removeScrollListener();
    return window.__scrollEnd - window.__scrollStart;
  });

  return duration;
}

test.describe("Scroll animation duration", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(DESKTOP);
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("load");
  });

  test("smooth scroll takes at least 500ms", async ({ page, browserName }) => {
    const duration = await measureScrollDuration(page);

    test.info().annotations.push({
      type: "scroll-duration",
      description: `${browserName}: ${Math.round(duration)}ms`,
    });

    expect(
      duration,
      `Expected smooth scroll to animate over at least ${MIN_SCROLL_DURATION_MS}ms on ${browserName}, got ${Math.round(duration)}ms`,
    ).toBeGreaterThanOrEqual(MIN_SCROLL_DURATION_MS);
  });
});
