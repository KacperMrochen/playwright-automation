import { expect } from "@playwright/test";
import { test } from "../../fixtures";

test.describe("Testing login functionality", () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  test("Should not log-in user", async ({ page, loginPage }) => {
    await page.goto("/login");

    await loginPage.isReady();
    await loginPage.loginToTrello("example@domain.com", "password");
    await loginPage.checkLoginError();
  });

  test("Should log-in user correctly", async ({ page, loginPage }) => {
    await page.goto("/login");

    await loginPage.loginToTrello(
      process.env.LOGIN || "",
      process.env.PASSWORD || ""
    );
  });
});
