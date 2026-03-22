import { test, expect } from "@playwright/test";

const MOBILE = { width: 390, height: 844 };

test.describe("Mobile nav scroll", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("networkidle");
  });

  test("scrolls to correct section after tapping mobile menu item", async ({
    page,
  }) => {
    // Capture the outcomes anchor's absolute offset before any interaction
    const targetScrollY = await page
      .locator('a[name="outcomes"]')
      .evaluate((el) => el.getBoundingClientRect().top + window.scrollY);

    // Open the mobile hamburger menu (rendered after React hydration)
    const menuButton = page.getByRole("button", { name: "Open main menu" });
    await menuButton.waitFor({ state: "visible" });
    await menuButton.click();
    await page.waitForTimeout(600); // wait for open animation (0.5s)

    // Tap "Outcomes" in the mobile menu
    await page.locator("ul a").filter({ hasText: "Outcomes" }).click();

    // Wait for menu close animation (0.5s) + smooth scroll to settle
    await page.waitForTimeout(1200);

    const scrollY = await page.evaluate(() => window.scrollY);

    // scrollY should land within 60px of the target element's top
    expect(Math.abs(scrollY - targetScrollY)).toBeLessThan(60);
  });
});
