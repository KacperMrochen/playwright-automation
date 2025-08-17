import { test, expect } from "@playwright/test";
import { TrelloSignupPage } from "../pages/SignupPage";
import { TrelloLoginPage } from "../pages/LoginPage";

const userAgent =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36";

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
