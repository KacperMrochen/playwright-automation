import { test, expect } from "@playwright/test";
import { TrelloHomePage } from "../pages/HomePage";
import { TrelloLoginPage } from "../pages/LoginPage";

test("Test trello homepage", async ({ page }) => {
  await page.goto("/");

  const homePage = new TrelloHomePage(page);

  await homePage.checkHeaderText();
  await homePage.clickLoginLink();

  const loginPage = new TrelloLoginPage(page);

  await loginPage.checkLoginPageHeader();
});
