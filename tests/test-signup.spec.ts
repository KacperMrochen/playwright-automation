import { test, expect } from "@playwright/test";
import { chromium } from "playwright-extra";
import { TrelloSignupPage } from "../pages/SignupPage";
import { TrelloLoginPage } from "../pages/LoginPage";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

chromium.use(StealthPlugin());

test("Test trello registered credentials signup page", async ({ page }) => {
  await page.goto("/signup");
  console.log(await page.evaluate(() => navigator.userAgent));

  const signupPage = new TrelloSignupPage(page);

  await signupPage.checkSignupPageHeading();
  await signupPage.signupToTrello();

  // TODO: anti-bot bypass

  const loginPage = new TrelloLoginPage(page);

  await loginPage.checkLoginPageHeading();
  await loginPage.checkAccountRegisteredMessage();
});
