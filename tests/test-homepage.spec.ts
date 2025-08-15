import { test, expect } from "@playwright/test";
import { TrelloHomePage } from "../pages/HomePage";
import { TrelloLoginPage } from "../pages/LoginPage";
import { TrelloWelcomePage } from "../pages/WelcomePage";
import { TrelloSignupPage } from "../pages/SignupPage";

test("Test trello home login link", async ({ page }) => {
  await page.goto("/");

  const homePage = new TrelloHomePage(page);

  await homePage.checkHeaderText();
  await homePage.clickLoginLink();

  const loginPage = new TrelloLoginPage(page);

  await loginPage.checkLoginPageHeader();
});

test("Test trello home sign-up link", async ({ page }) => {
  await page.goto("/");

  const homePage = new TrelloHomePage(page);

  await homePage.fillSignUpEmail();
  await homePage.clickSignUpButton();

  const signupPage = new TrelloSignupPage(page);

  await signupPage.checkSignupPageHeading();
  await signupPage.checkEmailInputValue();
});
