import { test, expect } from "@playwright/test";
import { TrelloSignupPage } from "../pages/SignupPage";
import { TrelloLoginPage } from "../pages/LoginPage";

test("Test trello registered credentials signup page", async ({ page }) => {
  await page.goto("/signup");

  const signupPage = new TrelloSignupPage(page);

  await signupPage.checkSignupPageHeader();
  await signupPage.signupToTrello();

  const loginPage = new TrelloLoginPage(page);

  await loginPage.checkLoginPageHeader();
  await loginPage.checkAccountRegisteredMessage();
});
