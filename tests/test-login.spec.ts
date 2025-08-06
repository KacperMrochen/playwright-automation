import { test, expect } from "@playwright/test";
import { TrelloLoginPage } from "../pages/LoginPage";

test("Test trello incorrect login page", async ({ page }) => {
  await page.goto("/login");

  const loginPage = new TrelloLoginPage(page);

  await loginPage.checkLoginPageHeader();
  await loginPage.loginToTrello();
  await loginPage.checkLoginError();
});
