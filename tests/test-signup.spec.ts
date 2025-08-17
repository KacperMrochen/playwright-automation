import { test, expect } from "@playwright/test";
import { TrelloSignupPage } from "../pages/SignupPage";
import { TrelloLoginPage } from "../pages/LoginPage";

const userAgent =
  "Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version";

test.use({ userAgent: userAgent });

test("Test trello registered credentials signup page", async ({ page }) => {
  await page.goto("/signup");

  const signupPage = new TrelloSignupPage(page);

  await signupPage.checkSignupPageHeading();
  await signupPage.signupToTrello();

  // TODO: anti-bot bypass

  const loginPage = new TrelloLoginPage(page);

  await loginPage.checkLoginPageHeading();
  await loginPage.checkAccountRegisteredMessage();
});
