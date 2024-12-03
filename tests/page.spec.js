import percySnapshot from "@percy/playwright";
import { test } from "@playwright/test";

test.describe("Page Visual Regression Tests", () => {
  test("Take snapshot of page", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await page.waitForTimeout(2000);

    await percySnapshot(page, "Page Snapshot");
  });
});
