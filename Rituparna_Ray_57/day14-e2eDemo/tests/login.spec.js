import { test, expect } from "@playwright/test";

test("Login works properly", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("email-input").fill("admin@test.com");
  await page.getByTestId("password-input").fill("123456");

  await page.getByTestId("login-btn").click();

  await expect(page.getByTestId("home-page")).toBeVisible();
});
