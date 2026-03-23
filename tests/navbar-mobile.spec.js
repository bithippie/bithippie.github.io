import { test, expect } from "@playwright/test";

const MOBILE = { width: 390, height: 844 };
const DESKTOP = { width: 1280, height: 800 };

// Returns the absolute scrollY target for a named anchor on the current page.
async function anchorScrollTarget(page, name) {
  return page
    .locator(`a[name="${name}"]`)
    .evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
}

// Waits for scrollY to move away from its current position, then stabilise.
async function waitForScrollEnd(page, timeout = 8000) {
  const startY = await page.evaluate(() => window.scrollY);
  // First wait for scroll to actually begin
  await page.waitForFunction(
    (y) => window.scrollY !== y,
    startY,
    { timeout },
  );
  // Then wait for it to stop changing between two 150ms samples
  await page.waitForFunction(
    () =>
      new Promise((resolve) => {
        let last = window.scrollY;
        const check = setInterval(() => {
          if (window.scrollY === last) {
            clearInterval(check);
            resolve(true);
          }
          last = window.scrollY;
        }, 150);
        setTimeout(() => { clearInterval(check); resolve(true); }, 5000);
      }),
    { timeout },
  );
}

test.describe("Mobile nav scroll", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("networkidle");
  });

  test("menu is closed on page load: no flash of nav items", async ({
    page,
  }) => {
    // The hamburger button must be visible immediately (CSS-driven, no hydration delay)
    const menuButton = page.getByRole("button", { name: "Open main menu" });
    await expect(menuButton).toBeVisible();

    // The dropdown must NOT be visible before any interaction
    const mobileMenu = page.locator("ul").filter({ hasText: "Outcomes" }).filter({ visible: true });
    await expect(mobileMenu).not.toBeVisible();
  });

  test("scrolls to correct section after tapping mobile menu item", async ({
    page,
  }) => {
    const targetScrollY = await anchorScrollTarget(page, "outcomes");

    const menuButton = page.getByRole("button", { name: "Open main menu" });
    await menuButton.waitFor({ state: "visible" });
    await menuButton.click();
    await page.waitForTimeout(600); // wait for open animation (0.5s)

    await page.locator("ul a").filter({ hasText: "Outcomes" }).filter({ visible: true }).click();

    // Wait for menu close animation (0.5s) + smooth scroll to settle
    await page.waitForTimeout(1200);

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(Math.abs(scrollY - targetScrollY)).toBeLessThan(60);
  });
});

test.describe("Desktop nav scroll", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(DESKTOP);
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("networkidle");
  });

  test("scrolls to correct section after clicking desktop nav item", async ({
    page,
  }) => {
    const targetScrollY = await anchorScrollTarget(page, "schedule");

    await page.locator("ul a").filter({ hasText: "Schedule" }).filter({ visible: true }).click();

    await waitForScrollEnd(page);

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(Math.abs(scrollY - targetScrollY)).toBeLessThan(60);
  });
});

test.describe("Cross-page nav scroll", () => {
  test("navigates from /team to home and scrolls to the correct section", async ({
    page,
  }) => {
    await page.setViewportSize(DESKTOP);
    await page.goto("http://localhost:3000/team");
    await page.waitForLoadState("networkidle");

    // Click "Schedule" in the nav while on the team page
    await page.locator("ul a").filter({ hasText: "Schedule" }).filter({ visible: true }).click();

    // Wait for Next.js to navigate to the home page, then for scroll to settle
    await page.waitForURL("**/#schedule");
    await waitForScrollEnd(page);

    // Should now be on the home page
    expect(page.url()).toContain("/#schedule");

    const targetScrollY = await anchorScrollTarget(page, "schedule");
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(Math.abs(scrollY - targetScrollY)).toBeLessThan(60);
  });
});
