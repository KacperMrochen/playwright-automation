import { expect } from "@playwright/test";
import { test } from "../fixtures";

test.describe("Testing login functionality", () => {
  test("Test trello incorrect login", async ({ page, loginPage }) => {
    await page.goto("/login");

    await loginPage.isReady();
    await loginPage.loginToTrello("example@domain.com", "password");
    await loginPage.checkLoginError();
  });

  test("Test trello correct login", async ({ page, loginPage }) => {
    await page.goto("/login");

    await loginPage.loginToTrello(
      process.env.LOGIN || "",
      process.env.PASSWORD || ""
    );
  });
});
