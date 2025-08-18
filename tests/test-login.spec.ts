import { test, expect } from "@playwright/test";
import { TrelloLoginPage } from "../pages/LoginPage";

// do not use authentication storage
test.use({ storageState: { cookies: [], origins: [] } });

test("Test trello incorrect login", async ({ page }) => {
  await page.goto("/login");

  const loginPage = new TrelloLoginPage(page);

  await loginPage.checkLoginPageHeading();
  await loginPage.loginToTrello("example@domain.com", "password");
  await loginPage.checkLoginError();
});

test.use({ storageState: { cookies: [], origins: [] } });

test("Test trello correct login", async ({ page }) => {
  await page.goto("/login");

  const loginPage = new TrelloLoginPage(page);
  await loginPage.loginToTrello(
    process.env.LOGIN || "",
    process.env.PASSWORD || ""
  );
});
